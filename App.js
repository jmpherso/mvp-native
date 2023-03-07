import React, { useState } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import SearchButton from './components/searchbutton';
import RecipeList from './components/recipelist';
import ListBar from './components/listbar';
import ListButton from './components/listbutton';
import SavedRecipeList from './components/savedrecipelist';
import ClearRecipeButton from './components/clearrecipebutton';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [listEntry, setListEntry] = useState('');
  const [list, setList] = useState('');
  const [recipeList, setRecipeList] = useState([]);
  const [listLoaded, setListLoaded] = useState(false);
  let listName = '';

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

  const handleSubmitList = () => {
        setListLoaded(true);
        setList(listEntry);
  };

  const handleClear = () => {
    setListLoaded(false);
    setList('');
  }

  return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <NavBar />
          <Image source={require('./logo.png')} style={styles.logo} />
          <View style={styles.listStuff}>
            {listLoaded === false && <ListBar list={listEntry} setListEntry={setListEntry} />}
            {listLoaded === false && <ListButton handleSubmitList={handleSubmitList} />}
            {listLoaded === true && <SavedRecipeList listLoaded={listLoaded} list={list} setRecipeList={setRecipeList} recipeList={recipeList}/>}
            {listLoaded === true && <ClearRecipeButton handleClear={handleClear} setListLoaded={setListLoaded} setList={setList} setRecipeList={setRecipeList} />}
          </View>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <SearchButton handleSubmit={handleSubmit} />
          {recipes.length > 0 && <RecipeList recipeList={recipeList} listLoaded={listLoaded} setRecipeList={setRecipeList} list={list} recipes={recipes} />}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: Platform.OS === 'ios' ?  100 : 30,
    width: 300,
    height: 300,
  },
  listStuff: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  scrollContainer: {
    backgroundColor: '#25292e',
  },
});
