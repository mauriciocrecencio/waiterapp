import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Category, Icon } from './styles';
import { Text } from '../Text';
import { useState } from 'react';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = categoryId === selectedCategory ? '' : categoryId;
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      // Dentro da FlatList, temos a área do scroll e o container dos itens que renderizamos
      // Para estilizar esse container dos itens, é com essa prop
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;
        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>
            <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">{category.name}</Text>
          </Category>
        );
      }}
    />
  );
}
