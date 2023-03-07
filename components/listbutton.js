import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const ListButton = ({ handleSubmitList }) => {

  return (
    <Pressable style={styles.searchButton} title="Load" onPress={handleSubmitList}>
      <Text style={styles.searchButtonText}>LOAD LIST</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    width: 100,
    alighnItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#25292e',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ListButton;