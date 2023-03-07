import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Pressable, Text, View, StyleSheet, Linking } from 'react-native';

const SavedRecipeListEntry = ({ setRecipeList, setListVisible, listLoaded, recipe, listVisible, list }) => {
  const [infoVisible, setInfoVisible] = useState(false);
  console.log(recipe);
  if(typeof recipe.recipe === 'string') {
    recipe.recipe = recipe.recipe.split(',');
  }

  const handleClick = (url) => {
    Linking.openURL(url);
  };

  const clickHelper = () => {
    console.log('clicked', recipe)
    axios.delete(`http://localhost:3001/lists?id=${recipe.id}`)
      .then((response) => {
        axios.get('http://localhost:3001/lists?listname=' + list)
        .then((responseTwo) => {
          setRecipeList(responseTwo.data);
        })
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.recipeListEntryOuter}>
      <View style={styles.recipeListEntry}>
        <Pressable onPress={() => setInfoVisible(!infoVisible)}>
          <Text style={styles.recipeListEntryText}>{recipe.recipename.toUpperCase()} {infoVisible ? '-' : '+' }</Text>
        </Pressable>
        {infoVisible && (
          <View>
            <Text> </Text>
            <Text style={styles.titleFont}>Ingredients:</Text>
            <Text> </Text>
            {recipe.recipe.map((ingredient) => {
              return <Text>{ingredient}</Text>;
            }
            )}
            <Text> </Text>
            <Pressable onPress={() => handleClick(recipe.url)}>
              <Text style={styles.urlFont}>{recipe.url}</Text>
            </Pressable>
          </View>
        )}
      </View>
      {listLoaded && <Pressable onPress={() => clickHelper()}>
        <View style={styles.rightButton}>
          <Text style={styles.ButtonEntryText}>✘</Text>
        </View>
      </Pressable>}
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonEntryText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightButton: {
    marginLeft: 10,
    backgroundColor: '#f2f2f2',
    padding: 8,
    width: 30,
    borderRadius: 4,
    height: 35,
    marginVertical: 10,
  },
  recipeListEntryOuter: {
    flexDirection: 'row',
  },
  urlFont: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  titleFont: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeListEntryText: {
    fontWeight: 'bold',
  },
  recipeListEntry: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 4,
    width: '100%',
    marginVertical: 10,
  },
});

export default SavedRecipeListEntry;