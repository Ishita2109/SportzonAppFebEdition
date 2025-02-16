import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const GearScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <View style= {{backgroundColor: '#ff5722', padding:20}}>
      {/* Header */}
       <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginBottom:15}}>     
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, color: 'white' }}>Gears</Text>
     </View>

      {/* Sub-header */}
      <Text style={{ fontSize: 21, color: 'white', textAlign:'center',marginBottom:45}}>Find the 
        <Text style={{ fontWeight: 'bold' }}> best</Text> quality <Text style={{ fontWeight: 'bold' }}>Gear</Text> for your sporty hobby!
      </Text>

      {/* Search Bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 30, paddingHorizontal: 10, marginBottom: 20,borderColor:'#ff6600', borderWidth:1}}>
        <TextInput
          style={{ flex: 1, padding: 10, fontSize: 16 }}
          placeholder="Search for 'helmet' or 'football shoes'..."/>
        <Feather name="search" size={20} color="#FF5722" style={{ marginRight: 15 }} />
      </View>
      </View>

      {/* Top Categories */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 1, color: '#000', padding:20 }}> Top Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={{
              alignItems: 'center', justifyContent: 'center', marginRight: 15, backgroundColor: 'white',
              borderColor:'#FF5722',borderWidth:1, borderRadius: 10,width: 90, height: 80,marginLeft:9}} >
            
            <Image source={category.icon} style={{ width: 30, height: 30, marginBottom: 10 }} />
            <Text style={{ fontSize: 13, fontWeight: '500', color: '#FF5722' }}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    <View style={{alignItems: 'center', }}>
      <Text style={{ fontSize:22,  marginBottom:4, marginTop:10,}}> Get Ready to Gear Up </Text>
      <Text style={{ fontSize:20, marginBottom:35,}}> Launching Soon!</Text>

       <Image
            style={{width: 520, height: 270, resizeMode: 'contain',marginBottom:50,}}
            source={require('../assets/images/image.jpeg')}/>
    </View>
  </View>
  );
};

const categories = [
  { name: 'Cricket', icon: require('../assets/icons/cricket.png') },
  { name: 'Football', icon: require('../assets/icons/football.png') },
  { name: 'Basketball', icon: require('../assets/icons/basketball.png') },
  { name: 'Table Tennis', icon: require('../assets/icons/tabletennis.png') },
  { name: 'Tennis', icon: require('../assets/icons/tennis.png') },
  { name: 'Badminton', icon: require('../assets/icons/tennis.png') },
  { name: 'Speed Skating', icon: require('../assets/icons/skating.png') },
 

];

export default GearScreen;
