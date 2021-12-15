import React from 'react';
import {StyleSheet } from 'react-native';
import NavigateScreen from './Navigation/navigation';


const App = () => {

  return (
    <>
    {NavigateScreen}
    </>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    alignItems : "center",
    padding:20,
    borderColor:"#000000",
    backgroundColor:"#DDDDDD",
    margin:5,
    width:300,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 40,
    fontSize: 40,
  }
})
