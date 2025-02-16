import { StyleSheet, Text, View, SafeAreaView, ScrollView,  Pressable,Image, 
} from 'react-native';

import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const navigation = useNavigation();
  //const [user, setUser] = useState('');
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: '',
        headerStyle: {
          height: 120, // Set the desired height of the header
          backgroundColor: '#002B5B', // 
         // borderBottomLeftRadius: 20, 
        //borderBottomRightRadius: 20, 
        },
        headerLeft: () => (
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15, color:'#002B5B', }}>
            <Pressable onPress={() => navigation.navigate('ProfileDetail')}>
              <Image
                style={{width: 45, height: 45,borderRadius: 15}}
                source={require('../assets/images/Profile_icon.jpg')}
              />
            </Pressable>
            <Text style={{ fontSize: 23, color: 'white',marginLeft: 13, fontWeight:600}}>Ishita Chandra</Text>
          </View>
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row', alignItems: 'center',marginRight: 15,}}>
           
          </View>
        ),
      });
    }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 12, marginTop:7}}>
          <View style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}> 
             {/* My Bookings */}
          <Pressable onPress={() => navigation.navigate('PlayScreen')}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{
                    width: 44,height: 44,borderRadius: 30,backgroundColor: '#E8E8E8', justifyContent: 'center', alignItems: 'center',}}>
                <AntDesign name="calendar" size={24} color={'#001F3F'} />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> My Bookings </Text>
                <Text style={{fontSize: 13, marginTop: 7, color: 'gray'}}> View and manage your reservations</Text>
              </View>
            </View>
            </Pressable>
            {/* Divider */}
            <View style={{height: 1, borderColor: '#E0E0E0',borderWidth: 0.5, marginTop: 15, }} />     

           
           {/* Membership */}
            <Pressable onPress={() => navigation.navigate('Membership')}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 15,}}>
              <View
                style={{width: 44, height: 44,borderRadius: 24,backgroundColor: '#E8E8E8',justifyContent: 'center', alignItems: 'center',}}>
                <AntDesign name="book" size={24} color={'#001F3F'} />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> My Membership</Text>
                <Text style={{fontSize: 13, marginTop: 7, color: 'gray'}}> Track your membership details and benefits</Text>
              </View>
            </View>
            </Pressable>
            {/* Divider */}
            <View style={{height: 1,borderColor: '#E0E0E0',borderWidth: 0.5,marginTop: 15,}} />

            {/* Transacion*/}
            
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 15,}}>
              <View
                style={{width: 44, height: 44,borderRadius: 24,backgroundColor: '#E8E8E8',justifyContent: 'center', alignItems: 'center',}}>
                <Ionicons name="logo-paypal" size={24} color={'#001F3F'} />
              </View>
              
              <View style={{}}>
              <Pressable onPress={() => navigation.navigate('Transaction')}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> Transaction History</Text>
                <Text style={{fontSize: 13, marginTop: 7, color: 'gray'}}> Review your payment and transaction records</Text>
              </Pressable>
              </View>
            </View>
            
            {/* Divider */}
            <View style={{height: 1,borderColor: '#E0E0E0',borderWidth: 0.5,marginTop: 15,}} />

            {/*Help & Support*/}
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 15, marginBottom: 10,}}>
              <View
                style={{ width: 44, height: 44, borderRadius: 24, backgroundColor: '#E8E8E8',justifyContent: 'center',alignItems: 'center', }}>
                <MaterialIcons name="information-circle-outline" size={24} color={'#001F3F'}  />
              </View>

              <View style={{}}>
                <Pressable onPress={()=> navigation.navigate('HelpSupport')}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> Help & Support </Text>
                <Text style={{fontSize: 13,marginTop: 7, color: 'gray'}}> Get assistance and find answers to your queries</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        

        

         {/*SET 2 */}

        <View style={{padding: 12, marginTop:0}}>
          <View style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
          <Pressable onPress={() => navigation.navigate('TnC')}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{width: 44,height: 44,borderRadius: 24, backgroundColor: '#E8E8E8',justifyContent: 'center',alignItems: 'center',      }}>
                <Ionicons name="checkmark-done-outline" size={24} color={'#001F3F'} />
              </View>
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> Terms and Conditions</Text>
              </View>
            </View>
            </Pressable>
            <View style={{ height: 1, borderColor: '#E0E0E0', borderWidth: 0.5,marginTop: 15,}} />

           
            <Pressable onPress={() => navigation.navigate('TrustedPartners')}>
            <View style={{flexDirection: 'row', alignItems: 'center',gap: 10,marginVertical: 15,}}>
              <View
                style={{
                  width: 44,height: 44, borderRadius: 24,backgroundColor: '#E8E8E8', justifyContent: 'center', alignItems: 'center', }}>
                <Ionicons name="people-outline" size={24} color={'#001F3F'} />
              </View>
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> Our Trusted Partners</Text>
              </View>
            </View>
            </Pressable>
            <View style={{height: 1, borderColor: '#E0E0E0', borderWidth: 0.5}} />

            <Pressable onPress={() => navigation.navigate('RefundPolicy')}>
            <View
              style={{flexDirection: 'row', alignItems: 'center',gap: 10,marginVertical: 15,}}>
              <View
                style={{
                  width: 44,height: 44, borderRadius: 24,backgroundColor: '#E8E8E8', justifyContent: 'center', alignItems: 'center', }}>
                <Ionicons name="refresh-circle-outline" size={24} color={'#001F3F'} />
              </View>
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> Refund Policy</Text>
              </View>
            </View>
            </Pressable>
            <View style={{height: 1, borderColor: '#E0E0E0', borderWidth: 0.5}} />




            <Pressable onPress={() => navigation.navigate('CancellationPolicy')}>
            <View style={{flexDirection: 'row', alignItems: 'center',gap: 10,marginVertical: 15,}}>
              <View style={{width: 44,height: 44, borderRadius: 24,backgroundColor: '#E8E8E8', justifyContent: 'center', alignItems: 'center', }}>
                <Ionicons name="people-outline" size={24} color={'#001F3F'} />
              </View>
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> Cancellation Policy</Text>
              </View>
            </View>
            </Pressable>
            <View style={{height: 1, borderColor: '#E0E0E0', borderWidth: 0.5}} />

            <Pressable onPress={() => navigation.navigate('AboutUs')}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, }}>
              <View style={{width: 44, height: 44, borderRadius: 24, backgroundColor: '#E8E8E8', justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign name="book" size={24} color={'#001F3F'} />
              </View>
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'#001F3F'}}> About Us </Text>
              </View>
              </View> 
              </Pressable>
                 


          

            
            
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});