import React from 'react';
import { Text } from 'react-native';

import {
  List,
  CategoryName,
  CategoryContainer,
  CategoryImage,
  CategoryStatus,
  RedCircle,
  Info,
} from './styles';

import data from './data';

interface ItemProps {
  item: typeof data[0]
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9k</Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
