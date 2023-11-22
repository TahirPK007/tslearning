import {View, Text} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './AppNavigator';
import {useRoute} from '@react-navigation/native';

interface SettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Settings'>;
}
const Settings = ({navigation}: SettingsScreenProps) => {
  const route = useRoute();
  console.log(route);
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
