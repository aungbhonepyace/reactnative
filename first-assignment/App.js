import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, TextInput, View, Image } from 'react-native';

export default function App() {

  const [search, setSearch] = useState('')

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
      <StatusBar style="auto" />
      <TextInput
        placeholder='Search....'
        style={styles.input}
        value={Text}
      />

      <View style={styles.View}>
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

      <View stye={styles.View}>
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
  input: {
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold', 
    marginTop: 20,
    marginBottom: 10
  },
  View: {
    marginVertical: 30,
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
