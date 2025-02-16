import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HelpSupport = () => {
  return (
    <LinearGradient 
      colors={['white', 'white']} 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#001F3F', marginBottom: 30 }}>Get in touch</Text>

      <View style={{ 
        padding: 20, 
        borderRadius: 10,
        borderWidth:1, 
        borderColor:'#001F3F',
        width: '80%', 
        //elevation: 1, 
     //   shadowOpacity: 0.1,
       // shadowOffset: { width: 0, height: 5 },
        //shadowRadius: 5,
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#001F3F", marginBottom: 7 }}>Call at 9654696000</Text>
        <Text style={{ fontSize: 18, color: "#001F3F" }}>Mon to Fri: 9 AM - 7 PM</Text>
        <Text style={{ fontSize: 18, color: "#001F3F", marginBottom: 35 }}>Sat to Sun: 8 AM - 8 PM</Text>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#001F3F", marginBottom: 7 }}>Write to us</Text>
        <Text style={{ fontSize: 18, color: "#001F3F" }}>info@sportzon.in</Text>
        <Text style={{ fontSize: 16, color: "#001F3F" }}>Get a response within 1 to 3 business days.</Text>
      </View>
    </LinearGradient>
  );
};

export default HelpSupport;
