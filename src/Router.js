import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CityList, RestaurantList, ReastaurantDetail, Reserve} from './pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Cities'}
          component={CityList}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Restaurants'} component={RestaurantList} />
        <Stack.Screen name={'Details'} component={ReastaurantDetail} />
        <Stack.Screen name={'Reserve'} component={Reserve} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
