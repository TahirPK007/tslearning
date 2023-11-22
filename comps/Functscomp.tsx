// import {View, Text} from 'react-native';
// import React from 'react';
// interface MyProps {
//   name: string;
//   email: string;
//   age: number;
// }
// const Functscomp = (props: MyProps) => {
//   return (
//     <View>
//       <Text>Functscomp</Text>
//     </View>
//   );
// };
// export default Functscomp;

//2nd way
import {View, Text} from 'react-native';
import React from 'react';
interface MyProps {
  name: string;
  email: string;
  age: number;
}
const Functscomp = ({name, email, age}: MyProps) => {
  return (
    <View>
      <Text>Functscomp</Text>
    </View>
  );
};
export default Functscomp;
