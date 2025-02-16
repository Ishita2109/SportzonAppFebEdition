import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RefundPolicy = () => {
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:23, textAlign:'center', color:'black', marginBottom:20}}>Refund Policy</Text>
      <Text style={{fontSize:15, color:'black', marginBottom:15}}>What is Sportzon's Return Policy? How does it work?</Text>
      <Text style={{fontSize:13 ,marginBottom:10}}>1. For coaching sessions & tournament, there will be no refund once the payment is made.</Text>
      <Text style={{fontSize:13 ,marginBottom:10}}>2. For "Pay n Play", refunds will be made only 24 hours prior to booking time.</Text>
      <Text style={{fontSize:13 ,marginBottom:10}}>3. For "Events" , there will be 100% refund only 7 days prior to event date,50% refund 15 days prior to event date and 100% refund 30 days prior to event date.</Text>
      <Text style={{fontSize:13 ,marginBottom:10}}>Processing time of refund is 5-7 days. The refunded amount will be refunded to source after the mentioned time.</Text>
      <Text style={{fontSize:11 ,marginBottom:10}}>All the disputes are subject to Delhi jurisdiction only.</Text>
    </View>
  )
}

export default RefundPolicy

const styles = StyleSheet.create({})