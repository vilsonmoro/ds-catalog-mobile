import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavBar } from '../components';
import { nav } from '../styles';

const Stack = createStackNavigator();

import {Home, Catalog, ProductDetails} from '../pages'
import { colors } from '../styles';

const HeaderText: React.FC = () => <Text style={nav.leftText}>DS Catalog</Text>

const Routes: React.FC = () => {
    return(
      <Stack.Navigator
          screenOptions={
             {
               headerTitle: "",
               headerStyle:{
                 backgroundColor: colors.primary,
               },
               headerLeft: () => <HeaderText />,
               headerRight: () => <NavBar />,
            }
          }
       >   
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Catalog" component={Catalog} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    )
}


export default Routes;