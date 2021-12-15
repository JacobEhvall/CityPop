import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchView from "../screens/SearchCity"
import SearchCountry from "../screens/SearchCountry";
import HomeScreen from "../screens/HomeScreen";



const Stack = createStackNavigator() 

export default function NavigateScreen() {

    return(
        <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Searchcity" component={SearchView}/>
        <Stack.Screen name="SearchCountry" component={SearchCountry}/> 
        </Stack.Navigator>
    )
}






