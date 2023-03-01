import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const SearchButton = ({ handleSubmit }) => {

  return (
    <Pressable style={styles.searchButton} title="Search" onPress={handleSubmit}>
      <Text style={styles.searchButtonText}>SEARCH</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    height: 40,
    width: 100,
    alighnItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  searchButtonText: {
    color: '#25292e',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SearchButton;