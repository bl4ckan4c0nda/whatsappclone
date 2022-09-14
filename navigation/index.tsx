/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View, Dimensions,Text } from 'react-native';
import { Octicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons"


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';




export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'left',
      headerStyle: {
        backgroundColor: Colors.light.tint,
      },
      headerShadowVisible:false,
      headerTintColor: Colors.light.background,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen 
      name="Root" 
      component={MainTabNavigator}
      options={{
        title:"",
        headerLeft: ({ tintColor }) => (
          <Text style={{ fontSize:20,color: tintColor,fontWeight:'bold' }}>WhatsApp</Text>
        ),
        headerRight: ({ tintColor }) => (
          <View style={{ flexDirection: 'row', width: 60, justifyContent:'space-between',marginRight:10 }}>
            <Octicons name="search" size={22} color={tintColor} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={tintColor} />
          </View>
        )
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.background,
        // tabBarShowIcon: false,
        tabBarStyle: {
          backgroundColor: Colors.light.tint
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.light.background,
          height:3
        },
        tabBarLabelStyle: {
          fontWeight: 'bold'
        }
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20} />,
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoScreen}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
