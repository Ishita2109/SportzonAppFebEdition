import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelpSupport = () => {
  return (
    <View style={{padding:30}}>
      <Text style={{fontSize:30, fontWeight:'bold', color:"#001F3F", marginBottom:30}}>Get in touch</Text>

      <Text style={{fontSize:20, fontWeight:'bold', color:"#001F3F", marginBottom:7}}>Call at 9654696000 </Text>
      <Text style={{fontSize:18, }}>Mon to Fri: 9 AM - 7 PM</Text>
      <Text style={{fontSize:18, }}>Sat to Sun: 8 AM - 8 PM</Text>

      <Text style={{fontSize:20, fontWeight:'bold', color:"#001F3F", marginBottom:7, marginTop:25}}>Write to us</Text>
      <Text style={{fontSize:18, }}>info@sportzon.in</Text>
      <Text style={{fontSize:17, }}>Get a response within 1 to 3 business days.</Text>
      
    </View>
  )
}

export default HelpSupport

const styles = StyleSheet.create({})