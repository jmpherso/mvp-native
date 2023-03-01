import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>recipease</Text>
      <View style={styles.linksContainer}>
        <Text style={styles.link}>LOGIN</Text>
        <Text style={styles.link}>SIGNUP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topWhite: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#ffffff'
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 100 : 50,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
  },
  logo: {
    fontSize: 18,
    paddingTop: Platform.OS === 'ios' ? 50 : 0
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 0
  },
  link: {
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
});

export default NavigationBar;