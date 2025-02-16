import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const LoginModal = ({ visible, onClose }) => {
  const navigation = useNavigation(); // ✅ Added navigation
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleEmailLogin = async () => {
    console.log("📢 API Call Initiated");
    try {
      const response = await axios.post('https://sportzon.in/api/auth/landing/login', { 
        username: email.trim(),
        password: password.trim()
      });
      console.log("🌐 Response:", response.data);
      if (response.data.code === 'authorised') verifySession(); // ✅ Call verifySession()
      else Alert.alert('Login Failed', 'Invalid email or password.');
    } catch (error) {
      console.error('⚠️ Login Error:', error);
      Alert.alert('Error', 'Something went wrong. Try again.');
    }
  };

  const handleSendOtp = async () => {
    console.log("📢 Sending OTP to:", mobile);
    try {
      const response = await axios.post('https://your-twilio-endpoint/send-otp', { mobile });
      console.log("🌐 OTP Response:", response.data);
      if (response.data.success) setIsOtpSent(true);
      else Alert.alert('Error', 'Failed to send OTP. Try again.');
    } catch (error) {
      console.error('⚠️ OTP Send Error:', error);
      Alert.alert('Error', 'Something went wrong. Try again.');
    }
  };

  const handleVerifyOtp = async () => {
    console.log("📢 Verifying OTP for:", mobile);
    try {
      const response = await axios.post('https://your-twilio-endpoint/verify-otp', { mobile, otp });
      console.log("🌐 OTP Verification Response:", response.data);
      if (response.data.success) verifySession(); // ✅ Call verifySession()
      else Alert.alert('Error', 'Invalid or expired OTP.');
    } catch (error) {
      console.error('⚠️ OTP Verify Error:', error);
      Alert.alert('Error', 'Something went wrong. Try again.');
    }
  };

  const verifySession = async () => {
    try {
      const response = await axios.get('https://sportzon.in/api/auth/verify-session');
      console.log("🌐 Session Data:", response.data);

      if (response.data.data.isVerified) {
        Alert.alert('Success', 'Redirecting to main page...');
        navigation.navigate('Main'); // ✅ Redirect to Main Page
      } else {
       // Alert.alert('New User', 'Redirecting to profile setup...');
        navigation.navigate('BasicInfo'); // ✅ Redirect to Profile Setup
      }
    } catch (error) {
      Alert.alert('Error', 'Session verification failed. Try again.');
    }
  };

  return (
    <ScrollView>
      <Modal visible={visible} transparent animationType="fade">
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, height: '65%' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'black', marginBottom: 30 }}>You're Almost There!</Text>
            {isEmailLogin ? (
              <>
                <Text style={{ marginTop: 10, fontSize: 17 }}> Email ID</Text>
                <TextInput style={{ borderWidth: 1, padding: 10, borderRadius: 5, marginTop: 7, marginBottom: 20, fontSize: 18 }} placeholder="" value={email} onChangeText={setEmail} />
                <Text style={{ marginTop: 10, fontSize: 17 }}> Password</Text>
                <TextInput style={{ borderWidth: 1, padding: 10, borderRadius: 5, marginTop: 5, marginBottom: 10, fontSize: 18 }} placeholder="" secureTextEntry value={password} onChangeText={setPassword} />
                <TouchableOpacity style={{ backgroundColor: '#063970', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 15 }} onPress={handleEmailLogin}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>CONTINUE</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={{ marginTop: 10, fontSize: 17 }}>Enter Mobile Number</Text>
                <TextInput style={{ borderWidth: 1, padding: 10, borderRadius: 5, marginTop: 5, fontSize: 18 }} placeholder="" keyboardType="phone-pad" value={mobile} onChangeText={setMobile} />
                {!isOtpSent ? (
                  <TouchableOpacity style={{ backgroundColor: '#063970', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 15 }} onPress={handleSendOtp}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>SEND OTP</Text>
                  </TouchableOpacity>
                ) : (
                  <>
                    <Text style={{ marginTop: 10, fontSize: 17 }}>Enter OTP</Text>
                    <TextInput style={{ borderWidth: 1, padding: 10, borderRadius: 5, marginTop: 5, fontSize: 18 }} placeholder="" keyboardType="numeric" value={otp} onChangeText={setOtp} />
                    <TouchableOpacity style={{ backgroundColor: '#063970', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 15 }} onPress={handleVerifyOtp}>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>VERIFY OTP</Text>
                    </TouchableOpacity>
                  </>
                )}
              </>
            )}
            <TouchableOpacity onPress={() => setIsEmailLogin(!isEmailLogin)}>
              <Text style={{ textAlign: 'center', marginTop: 20, color: 'black', fontSize: 14 }}>{isEmailLogin ? 'Login with Mobile Number' : 'Login with Email ID'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default LoginModal;
