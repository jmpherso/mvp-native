import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const ListBar = ({ setListEntry, listEntry }) => {

  const handleSearch = (text) => {
    setListEntry(text);
    console.log(text);
  };

  return (
    <View style={styles.listBarContainer}>
      <TextInput
        style={styles.listBarInput}
        placeholder="Input name of the recipe list you'd like to load..."
        value={listEntry}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listBarContainer: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 4,
    width: Platform.OS === 'ios' ?  '50%' : '30%',
    marginRight: 50
  },
  listBarInput: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});

export default ListBar;