import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CancellationPolicy = () => {
  return (
    <View style={{padding:20}}>
          <Text style={{fontSize:23, textAlign:'center', color:'black', marginBottom:20}}>Cancellation Policy</Text>
          <Text style={{fontSize:15, color:'black', marginBottom:15}}>What is Sportzon's Cancellation Policy? How does it work?</Text>
          <Text style={{fontSize:13 ,marginBottom:10, textAlign: 'justify'}}>1. For any tournament booking, No cancellation is allowed.</Text>
          <Text style={{fontSize:13 ,marginBottom:10, textAlign: 'justify'}}>2. For "Pay n Play", cancellation is allowed only 24 hours prior. No cancellation on date of play.</Text>
          <Text style={{fontSize:13 ,marginBottom:10, textAlign: 'justify'}}>3. For "Events", cancellation can only be done 30 days prior to the start of event.</Text>
          <Text style={{fontSize:13 ,marginBottom:10, textAlign: 'justify'}}>4. For individual coaching sessions , No cancellation is allowed.</Text>
         
        </View>
  )
}

export default CancellationPolicy

const styles = StyleSheet.create({})