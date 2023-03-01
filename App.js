import React, { useState } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import SearchButton from './components/searchbutton';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState([]);
  const handleSubmit = () => {
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchText}&app_id=176766f3&app_key=0a9ca37be62f8cbeb6ef8d1791b121e9&random=true`)
      .then((response) => {
        setRecipes(response.data.hits);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <SearchButton handleSubmit={handleSubmit} />
      {recipes.map((recipe) => {
        return (
          <Text>{recipe.recipe.label}</Text>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
