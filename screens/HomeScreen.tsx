import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



interface SelectOptionScreen {

  navigation : any

}


/*
const Header = () => {
    return(
        <View style={styles.header}>
        <Text style= {{ fontWeight:'bold', fontSize:50, margin:50}}>CityPop</Text>
      </View>
    )
}
*/

const OptionsSelection = (props:SelectOptionScreen) => {

return(
  <View style={{flexDirection:'column', justifyContent:'space-between', padding:70}}>

    <TouchableOpacity
      style={styles.button}>
        <Text>SEARCH BY CITY</Text>
        onPress={() => props.navigation.navigate('SearchCity')}
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}>
      <Text>SEARCH BY CONTRY</Text>
      onPress={() => props.navigation.navigation.navigate('SearchCountry')}
      </TouchableOpacity>
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
export default OptionsSelection;


