import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../reduxts/Hooks';
import {addNote, noteSelector, Note} from '../reduxts/notesslice';

const Notes = () => {
  const [title, settitle] = useState<string>('');
  const [description, setdescription] = useState<string>('');
  const dispatch = useAppDispatch();
  const notes = useAppSelector(noteSelector);
  console.log(notes);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput
        placeholder="enter title"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 40,
          paddingLeft: 20,
        }}
        value={title}
        onChangeText={txt => settitle(txt)}
      />
      <TextInput
        placeholder="enter description"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 40,
          paddingLeft: 20,
        }}
        value={description}
        onChangeText={txt => setdescription(txt)}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          marginTop: 40,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          dispatch(addNote({title, description}));
        }}>
        <Text style={{color: 'white'}}>Add Note</Text>
      </TouchableOpacity>
      <FlatList
        data={notes}
        renderItem={({item}: {item: Note}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 60,
                alignSelf: 'center',
                borderWidth: 1,
                marginTop: 10,
              }}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Notes;
