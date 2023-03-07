import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const ClearRecipeButton = ({ handleClear }) => {

  return (
    <Pressable style={styles.searchButton} title="Search" onPress={handleClear}>
      <Text style={styles.searchButtonText}>UNLOAD LIST</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    height: 40,
    width: 120,
    alighnItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  searchButtonText: {
    color: '#25292e',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ClearRecipeButton;