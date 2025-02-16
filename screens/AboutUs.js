import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const AboutUs = () => {
  return (

     <LinearGradient 
     colors={['white', 'white']}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
    <View style={{padding:23}}>
              <Text style={{fontSize:32, textAlign:'center', color: '#001F3F', marginBottom:20, fontWeight:'bold'}}>About Us</Text>
              
              <Text style={{fontSize:13 ,marginBottom:1, textAlign: 'justify', color: '#001F3F'}}>Sportzon, your all-encompassing sports companion, extends its reach through both a dynamic website and a user-friendly mobile app. Seamlessly integrating technology into the world of sports, we bring you a unified platform that caters to all your athletic needs, whether you're exploring on the web or on the go. Discover, engage, and elevate your sports experience with Sportzon - where innovation meets accessibility. If you have difficulty finding the time or resources to do so. This may include people who work long hours, who do not have access to a sports complex, or who are new to an area.</Text>
              <Text style={{fontSize:13 ,marginBottom:10, textAlign: 'justify', color: '#001F3F'}}>Individuals can use the Sportzon app to find nearby sports complexes, book court time, and connect with coaches and personal trainers. Businesses can utilize the app to promote their sports complexes, events, and services. Sportzon is a prime example of how technology can enhance lives by making it easier for people to discover and engage in sports, ultimately leading to a healthier and happier lifestyle.</Text>
              <Text style={{fontSize:13 ,marginBottom:10, textAlign: 'justify', color: '#001F3F'}}>For any inquiries or assistance, feel free to contact us via email at info@sportzon.in or call our enquiry number at 9654696000. Our support team is available from 9 AM to 7 PM. We aim to respond to enquiries within 1 to 3 business days.</Text>
                       
            </View>
            </LinearGradient>
  )
}

export default AboutUs

const styles = StyleSheet.create({})