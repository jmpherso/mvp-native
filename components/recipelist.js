import React, { useState } from 'react';
import RecipeListEntry from './recipelistentry';
import { Text, View, StyleSheet, Platform } from 'react-native';

const RecipeList = ({ list, recipes, listLoaded, recipeList, setRecipeList }) => {
  return (
    <View style={styles.recipeListContainer}>
      {recipes.map((recipe) => {
        return (
          <RecipeListEntry list={list} listLoaded={listLoaded} setRecipeList={setRecipeList} recipeList={recipeList} recipe={recipe}/>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  recipeListContainer: {
    backgroundColor: '#25292e',
    padding: 8,
    borderRadius: 4,
    width: Platform.OS === 'ios' ? '90%' : '50%',
  },
});
export default RecipeList;