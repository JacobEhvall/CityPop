import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchView from '../screens/SearchCity'
import SearchCountry from "../screens/SearchCountry";


const {Navigator, Screen } = createStackNavigator()


const NavigateScreen = () => (
    <NavigationContainer>
    <Navigator initialRouteName="HomeScreen">
    <Screen name="SearchView" component={SearchView}/>
    <Screen name="SearchCountry" component={SearchCountry}/> 
    </Navigator>
    </NavigationContainer>
)

export default NavigateScreen() 




