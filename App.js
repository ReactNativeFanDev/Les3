import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import MealsOverviewScreen from './screens/MealsOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailSCreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer >
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: '#24180f'},
            headerTintColor: 'white',
            cardStyle: {backgroundColor: '#24180f'},
          }}
        >
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen} 
            options={{
              title: 'Categories',
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
          />
          <Stack.Screen 
            name="MealDetail" 
            component={MealDetailSCreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

