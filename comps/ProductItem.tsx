import {View, Text, Image} from 'react-native';
import React from 'react';

interface DataProp {
  item: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: number;
    title: string;
  };
}
const ProductItem = ({item}: DataProp) => {
  return (
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 20,
        alignItems: 'center',
      }}>
      <Image
        source={{uri: item.image}}
        style={{height: 100, width: 100, borderRadius: 15}}
      />
      <View style={{marginLeft: 10, overflow: 'hidden', padding: 10}}>
        <Text style={{fontWeight: '900', width: '80%'}}>{item.title}</Text>
        <Text style={{fontSize: 15, width: '80%'}}>
          {item.description.length > 50
            ? item.description.substring(0, 50) + '...'
            : item.description}
        </Text>
        <Text style={{color: 'green', fontSize: 20}}>
          {item.price + '-Pkr'}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
