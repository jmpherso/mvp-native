import React, { useState } from 'react';
import axios from 'axios';
import RecipeListEntry from './recipelistentry';
import SavedRecipeListEntry from './savedrecipelistentry';
import { useEffect } from 'react';
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';

const SavedRecipeList = ( { listLoaded, recipeList, list, setRecipeList} ) => {
  const [listVisible, setListVisible] = useState(false);

  const handleClick = () => {
    axios.get('http://localhost:3001/lists?listname=' + list)
      .then((response) => {
        console.log(response.data);
        setListVisible(!listVisible);
        setRecipeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.recipeListContainer}>
      <Pressable style={styles.recipeListEntryPress} onPress={() => handleClick()}>
        <Text style={styles.recipeListEntryText}>{list.toUpperCase()} RECIPE LIST {listVisible ? '-' : '+' }</Text>
      </Pressable>
      {listVisible && recipeList.map((recipe) => {
        return (
          <SavedRecipeListEntry setRecipeList={setRecipeList} handleClick={() => handleClick()} listLoaded={listLoaded} list={list} setListVisible={setListVisible} listVisible={listVisible} recipe={recipe}/>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  recipeListEntryPress: {
    backgroundColor: '#25292e',
    padding: 8,
    borderRadius: 4,
    width: Platform.OS === 'ios' ? '90%' : '50%',
  },
  recipeListEntryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  recipeListContainer: {
    marginTop: 20,
    backgroundColor: '#25292e',
    padding: 8,
    borderRadius: 4,
    width: Platform.OS === 'ios' ? '90%' : '50%',
  },
});
export default SavedRecipeList;