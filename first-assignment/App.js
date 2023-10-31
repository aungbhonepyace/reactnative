import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, TextInput, View, Image } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const onTextChanged = (newText) => {
    setText(newText);
  };
  
  const cate = [
    { catName: 'Action', id: '1' },
    { catName: 'Adventure', id: '2' },
    { catName: 'Romance', id: '3' },
    { catName: 'Horror', id: '4' },
    { catName: 'Shonen', id: '5' },
    { catName: 'Isekai', id: '6' },
    { catName: 'Gore', id: '7' },
    { catName: 'Drama', id: '8'}
  ]

  const post = [
    { postName: 'Bleach', img: require('./assets/image/bleach.jpg'), id: '1' },
    { postName: 'Blue Period', img: require('./assets/image/bp.jpg'), id: '2' },
    { postName: 'ChainsawMan', img: require('./assets/image/csm.png'), id: '3' },
    { postName: 'Dragonball Z', img: require('./assets/image/dbz.jpg'), id: '4' },
    { postName: 'Demon Slayer', img: require('./assets/image/dms.jpg'), id: '5' },
    { postName: 'JuJuTSu Kaisen', img: require('./assets/image/jjk.jpg'), id: '6'}
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}> 
        <StatusBar style="auto" />
        <TextInput
          placeholder='Search....'
          style={styles.input}
          value={text}
          onChangeText={onTextChanged}
        />
        {text.trim() !== '' && <Image source={require('./assets/close.png')} style={{ width: 20, height: 20}} />}
      </View>


      <View style={styles.cateView}>
        <Text style={styles.title}>
          Categories
        </Text>
        <FlatList
          horizontal={true}
          data={cate}
          renderItem={({ item }) => 
            <Text style={styles.categoryitem}> {item.catName} </Text>
          }
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.postView}>
        <Text style={styles.title}>
          Posts  
        </Text>
        <FlatList
          data={post}
          renderItem={({ item }) => 
            <View style={styles.itemView}>
              <Text style={styles.postTitle}> {item.postName} </Text>
              <Image style={styles.postImage}  source={item.img}/>
            </View>
          }
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row', // Make the text input and image side by side
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5, 
    padding: 10,

  },
  input: {
    marginTop: 12,
    borderWidth: 0,
    width: 370,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold', 
    marginTop: 20,
    marginBottom: 10
  },
  cateView: {
    marginVertical: 30,
  },
  postView: {
    marginVertical: 30,
    flex: 1,
  },
  categoryitem: {
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 20
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10
  },
  postImage: {
    width: 200,
    height: 400
  }
});
