import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const Searchcity = () => {
    
    return(
        <View style={styles.header}>
        <Text style= {{ fontWeight:'bold', fontSize:50, margin:50}}>SEARCH BY CITY</Text>
        <TextInput
        placeholder="Enter a city"
        style={{
            borderWidth: 1,
            borderColor: "black"
        }}
        />
      </View>
    )
}



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

export default Searchcity;