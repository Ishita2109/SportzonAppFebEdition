
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';

const LoginModal = ({ visible, onClose }) => {
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <ScrollView>
    <Modal visible={visible} transparent animationType="fade">
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, height:'65%'}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color:'black', marginBottom:30 }}>You're Almost There!</Text>
          
          {isEmailLogin ? (
            <>
              <Text style={{ marginTop: 10, fontSize:17 }}> Email ID</Text>
              <TextInput style={ {borderWidth: 1,borderColor: '#ddd', padding: 10,borderRadius: 5, marginTop: 7,marginBottom:20, fontSize:18}} placeholder="" value={email} onChangeText={setEmail} />
              <Text style={{ marginTop: 10, fontSize:17 }}> Password</Text>
              <TextInput style={ {borderWidth: 1,borderColor: '#ddd', padding: 10,borderRadius: 5, marginTop: 5,marginBottom:10, fontSize:18}} placeholder="" secureTextEntry value={password} onChangeText={setPassword} />
              <TouchableOpacity>
                <Text style={{ color: 'black', textAlign: 'right', textDecorationLine:'underline', marginBottom:30 }}>FORGOT PASSWORD</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={{ marginTop: 10 ,fontSize:17 }}>Enter Mobile Number</Text>
              <TextInput style={ {borderWidth: 1,borderColor: '#ddd', padding: 10,borderRadius: 5, marginTop: 5,fontSize:18}} placeholder= "" keyboardType="phone-pad" value={mobile} onChangeText={setMobile} />
            </>
          )}

          <TouchableOpacity style={{backgroundColor: '#063970', padding: 15,borderRadius: 5, alignItems: 'center',marginTop: 15,}}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{isEmailLogin ? 'CONTINUE' : 'SEND OTP'}</Text>
          </TouchableOpacity>

          <Text style={{textAlign:'center', marginTop:25}}>By signing up, you agree to the Terms and Conditions</Text>
          <Text style={{textAlign:'center', marginTop:15}}>OR</Text>
          

          <TouchableOpacity onPress={() => setIsEmailLogin(!isEmailLogin)}>
            <Text style={{ textAlign: 'center', marginTop: 20, color: 'black', fontSize:14 }}>
              {isEmailLogin ? 'Login with Mobile Number' : 'Login with Email ID'}
            </Text>
          </TouchableOpacity>

          
        </View>
      </View>
    </Modal>
    </ScrollView>
  );
};


export default LoginModal;
