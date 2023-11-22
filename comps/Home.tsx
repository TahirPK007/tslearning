import {View, Text, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './AppNavigator';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

interface User {
  name: string;
  age: number;
}
interface Items {
  id: number;
  title: string;
  price: number;
}
const Home = ({navigation}: HomeScreenProps) => {
  const [counter, setcounter] = useState<number>(0);
  const [name, setname] = useState<string>('');
  const [isloaded, setisloaded] = useState<boolean>(false);
  const [user, setuser] = useState<User>({
    name: 'ali',
    age: 200,
  });
  const [items, setitems] = useState<Items[]>([]);
  const [details, setdetails] = useState<null>(null);

  const ref = useRef<TextInput>(null);
  return (
    <View style={{flex: 1}}>
      {/* <Text
        style={{borderWidth: 1, borderColor: 'black'}}
        onPress={() => {
          navigation.navigate('Settings', {
            name: 'ali',
            email: 'ali@gmail.com',
          });
        }}>
        Go to settings
      </Text> */}
      <TextInput ref={ref} />
    </View>
  );
};

export default Home;
