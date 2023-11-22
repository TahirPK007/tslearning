import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductItem from './ProductItem';

interface ProductState {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: number;
  title: string;
}
const Products = () => {
  const [products, setproducts] = useState<ProductState[]>([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setproducts(json);
      });
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={products}
        renderItem={({item, index}: {item: ProductState; index: number}) => {
          return <ProductItem item={item} />;
        }}
      />
    </View>
  );
};

export default Products;
