import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {NameCard} from '../components/NameListCard';


interface NameData {
  id: string;
  name: string;
}


export function Home() {
  const [newName, setNewName] = useState('');
  const [listName, setListName] = useState<NameData[]>([]);
  const [gretting, setGretting] = useState('');

   function handleAddNewName() {

    const data = {
      id: String(new Date().getTime()),
      name: newName
    }
     setListName(oldState => [...oldState, data]);
   }

   function handleRemoveName(id: string){
    setListName(oldState => oldState.filter(
      name => name.id !== id
    ))
  }
  

  useEffect(() => {
    // console.log('Executou useEffect');

    const currentHour = new Date().getHours();

    // console.log(currentHour);

    if (currentHour >= 6 && currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon');
    } else {
      setGretting('Good Night');
    }
  }, [gretting]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Yan</Text>

      <Text style={styles.gretting}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={'#555'}
        onChangeText={setNewName}
        //   setHours(e)
        // }}
      />

       <Button onPress={handleAddNewName} /> 

      <Text style={[styles.title, {marginTop: 35}]}>Name List</Text>

      {/* /* <ScrollView showsVerticalScrollIndicator={false}>
        {listName.map(name => (
          
        ))}
      </ScrollView> */}

      <FlatList
        data={listName}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <NameCard name={item.name}
        onPress={() => handleRemoveName(item.id)}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 25,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  gretting: {
    color: '#fff',
  },
});
