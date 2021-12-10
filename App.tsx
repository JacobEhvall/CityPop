import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const Header = () => {

  return(
    <View style={styles.header}>
    <Text style= {{ fontWeight:'bold', fontSize:50, margin:50}}>CityPop</Text>
  </View>
  )
}


 
const ButtonChoose = () => {
  return(
    <View style={{flexDirection:'column', justifyContent:'space-between', padding:70}}>

    <TouchableOpacity
      style={styles.button}
      >
        <Text>SEARCH BY CITY</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}>
      <Text>SEARCH BY COUNTRY</Text>
      </TouchableOpacity>
  </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ButtonChoose/>
    </View>
  );
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
});
