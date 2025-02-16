import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Image } from 'react-native';

const LoginModal = ({ visible, onClose }) => {
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>You're Almost There!</Text>
          
          {isEmailLogin ? (
            <>
              <Text style={{ marginTop: 10 }}>Email ID</Text>
              <TextInput
                style={{ borderWidth: 1,borderColor: '#ddd', padding: 10, borderRadius: 5,marginTop: 5, }}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
              />
              <Text style={{ marginTop: 10 }}>Password</Text>
              <TextInput
                style={{
                    borderWidth: 1,borderColor: '#ddd',padding: 10,borderRadius: 5,marginTop: 5,}}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity>
                <Text style={{ color: 'blue', textAlign: 'right' }}>FORGOT PASSWORD</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={{ marginTop: 10 }}>Enter Mobile Number</Text>
              <TextInput
                style={{
                    borderWidth: 1,borderColor: '#ddd',padding: 10,borderRadius: 5, marginTop: 5,}}
                placeholder="+91 | Mobile Number"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
              />
            </>
          )}

          <TouchableOpacity style={{
    backgroundColor: '#4CAF50', padding: 15, borderRadius: 5,
    alignItems: 'center',marginTop: 15,}}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{isEmailLogin ? 'CONTINUE' : 'SEND OTP'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsEmailLogin(!isEmailLogin)}>
            <Text style={{ textAlign: 'center', marginTop: 10, color: 'blue' }}>
              {isEmailLogin ? 'Login with Mobile Number' : 'Login with Email ID'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  }
};

export default LoginModal;
