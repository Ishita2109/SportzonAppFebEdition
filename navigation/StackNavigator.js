import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import BookScreen from '../screens/BookScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HelpSupport from '../screens/HelpSupport';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen';
import SplashScreen from '../screens/SplashScreen';
import { TouchableWithoutFeedback } from 'react-native';
import Classes from '../screens/Classes';
import GearUp from '../screens/GearUp'
import VenueDetails from '../components/VenueDetails';
import EventDetails from '../components/EventDetails';
import ClassesDetails from '../components/ClassesDetails';
import Membership from '../screens/Membership';
import Transaction from '../screens/Transaction';
import TrustedPartners from '../screens/TrustedPartners';
import TnC from '../screens/TnC';
import RefundPolicy from '../screens/RefundPolicy';
import CancellationPolicy from '../screens/CancellationPolicy';
import AboutUs from '../screens/AboutUs';
import MemCorporateScreen from '../screens/MemCorporateScreen';
import MemPlatScreen from '../screens/MemPlatScreen';
import MemGoldScreen from '../screens/MemGoldScreen';
import MemSilverScreen from '../screens/MemSilverScreen';
import VenueBooking from '../components/VenueBooking';
//import Login from '../screens/Login';
import LoginModal from '../screens/LoginModal';
import BasicInfo from '../screens/BasicInfo';



const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
     
    function BottomTabs(){
        return (
            <Tab.Navigator>
            <Tab.Screen 
            name="HOME" component={HomeScreen} options={{
            tabBarActiveTintColor: '#063970',
             tabBarIcon: ({focused}) =>
              focused ? (<Ionicons name="home-outline" size={24} color="#063970" />) : 
            (<Ionicons name="home-outline" size={24} color="#989898" />),
          }} />

          <Tab.Screen 
            name="PLAY" component={PlayScreen} options={{
            tabBarActiveTintColor: '#063970',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <AntDesign name="addusergroup" size={24} color="#063970" />
              ) : (
                <AntDesign name="addusergroup" size={24} color="#989898" />
              ),
          }} />

          <Tab.Screen 
            name="BOOK" component={BookScreen} options={{
            tabBarActiveTintColor: '#063970',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <SimpleLineIcons name="book-open" size={24} color="#063970" />
              ) : (
                <SimpleLineIcons name="book-open" size={24} color="#989898" />
              ),
          }} />

         <Tab.Screen 
            name="PROFILE" component={ProfileScreen} options={{
            tabBarActiveTintColor: '#063970',
            //headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="person-outline" size={24} color="#063970" />
              ) : (
                <Ionicons name="person-outline" size={24} color="#989898" />
              ),
          }} />
 
           </Tab.Navigator>

        )
    }

    const AuthStack = () => {
        return (
          <Stack.Navigator>          
          </Stack.Navigator>
        )
    }

    function MainStack() { //Adding screens in what manner they'll come
        return (
          <Stack.Navigator>
          {/*  <Stack.Screen name="Splash"  component={SplashScreen}  options={{ headerShown: false }}/> */}
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}}   />   
           <Stack.Screen name="LoginModal" component={LoginModal} options={{headerShown:false}} />         
            <Stack.Screen name="Main"  component={BottomTabs}  options={{headerShown: false}}   />
            <Stack.Screen  name="PlayScreen"  component={PlayScreen} options={{headerShown: false}}  />
            <Stack.Screen  name="BookScreen"  component={BookScreen} options={{headerShown: false}}  />
            <Stack.Screen name="Classes" component={Classes} options={{headerShown:false}} />
            <Stack.Screen name="GearUp" component={GearUp} options={{headerShown:false}} />
            <Stack.Screen name="VenueDetails" component={VenueDetails} options={{headerShown:false}} />
            <Stack.Screen name="EventDetails" component={EventDetails} options={{headerShown:false}} />
            <Stack.Screen name="ClassesDetails" component={ClassesDetails} options={{headerShown:false}} />
            <Stack.Screen name="VenueBooking" component={VenueBooking} options={{headerShown:false}} />
            

            <Stack.Screen  name="HelpSupport"  component={HelpSupport} options={{headerShown: false}}  />
            <Stack.Screen name="Transaction" component={Transaction} options={{headerShown:false}} />
            <Stack.Screen name="TrustedPartners" component={TrustedPartners} options={{headerShown:false}} />
            <Stack.Screen name="TnC" component={TnC} options={{headerShown:false}} />
            <Stack.Screen name="RefundPolicy" component={RefundPolicy} options={{headerShown:false}} />
            <Stack.Screen name="CancellationPolicy" component={CancellationPolicy} options={{headerShown:false}} />
            <Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown:false}} />
            <Stack.Screen name="Membership" component={Membership} options={{headerShown:false}} />
            <Stack.Screen name="MemCorporateScreen" component={MemCorporateScreen} options={{headerShown:false}} />
            <Stack.Screen name="MemGoldScreen" component={MemGoldScreen} options={{headerShown:false}} />
            <Stack.Screen name="MemPlatScreen" component={MemPlatScreen} options={{headerShown:false}} />
            <Stack.Screen name="MemSilverScreen" component={MemSilverScreen} options={{headerShown:false}} />
            <Stack.Screen name="BasicInfo" component={BasicInfo} options={{headerShown:false}} />

           


          </Stack.Navigator>
        )
    }

  return (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})