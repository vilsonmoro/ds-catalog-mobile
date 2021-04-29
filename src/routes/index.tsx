import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavBar } from '../components';
import { nav } from '../styles';

const Stack = createStackNavigator();

import {Home, Catalog, ProductDetails, Login, DashBoard, Users, Categories} from '../pages'
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
          <Stack.Screen name="Login" component={Login} />

          {/* Dashboard administrativo */}
          <Stack.Screen name="DashBoard" component={DashBoard} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Products" component={DashBoard} />
      </Stack.Navigator>
    )
}


export default Routes;