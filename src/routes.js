import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Catalog from './pages/Catalog';
import Details from './pages/Details';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Catalog"
            >
                <Stack.Screen 
                    name='Catalog'
                    component={Catalog}
                    options={{
                        headerShown: false,
                }}
               />
               <Stack.Screen
                    name='Details'
                    component={Details}
                    options={{
                        headerTransparent: true,
                        headerBackTitleVisible: false,
                        headerTitle: false,
                        headerLeftContainerStyle: {
                            marginLeft: 20,
                        },
                        headerBackImage: () => (
                            <FeatherIcon name="chevron-left" size={24} color="#f3f9ff" />
                        ),
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}