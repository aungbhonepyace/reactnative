import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, TextInput, View, Image } from 'react-native';

export default function App() {

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
    { postName: 'post1', id: '1' },
    { postName: 'post1', id: '2' },
    { postName: 'post1', id: '3' },
    { postName: 'post1', id: '4' },
    { postName: 'post1', id: '5' },
    { postName: 'post1', id: '6'}
  ]

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder='Search....'
        style={styles.input}
        value={Text}
      />

      <StatusBar style="auto" />

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
              <Text style={styles.postItem}> {item.postName} </Text>
              Image
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
    marginHorizontal: 12,
  },
  input: {
    height: 40,
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
  }
});
