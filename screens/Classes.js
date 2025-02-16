import React from "react";
import { View, Text, Image, StyleSheet, FlatList, Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // New line added for navigation
import { ClassesData } from "./ClassesData"; 

const SportsApp = () => {
  const navigation = useNavigation(); // New line added for navigation

 

  // Card Component
  const renderCard = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate('ClassesDetails', { item })}
      style={{
        width: "90%",  backgroundColor: "white", borderRadius: 15, padding: 15,
        marginVertical: 10, alignSelf: "center", elevation: 3,shadowColor: "#000", 
        shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 4,borderColor: '#063970', borderWidth:0.5}} >
    
      {/* Content Section */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        
        {/* Image */}
        <Image
          source={{ uri: item.image }}
          style={{ width: "33%", height: "105%",borderRadius: 6, marginRight: 10,}}/>
       
        {/* Details */}
          <View style={{ flex: 1, justifyContent: "space-between", height: 110 }}>
       
        {/* Title */}
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#063970",marginLeft:6 }}>{item.name}</Text>
       
        {/* Location */}
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4, }}>
            <Ionicons name="location-outline" size={15} color="#FF5F1F" />
            <Text style={{ fontSize: 14, color: "#555", marginLeft: 4 }}>{item.address1}</Text>
          </View>
          {/* Price */}
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4, marginLeft:6, marginBottom:5}}>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#063970" }}>Fee: {item.price}</Text>
            <Text style={{ fontSize: 13, color: "#063970", marginLeft: 4 }}>Onwards</Text>
            <Image
              source={{ uri: item.icon }}
              style={{ width: 16, height: 16, marginLeft: 10 }}/>
          </View>
          {/* Book Button */}
          <Pressable
            style={{
              backgroundColor: "#063970", borderRadius: 22, flexDirection: "row",
              alignItems: "center", justifyContent: "center", paddingVertical: 7,
              width: 110,marginTop: 10, marginLeft:110, marginRight:20, borderColor:"#063970", borderWidth:1}}>

            <Ionicons name="bookmark-outline"  size={14} color="white" style={{ marginRight: 5 }}/>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>JOIN NOW</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
  
  return (  
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
    
    {/* Add Image at the Top */}
    <Image
       source={require('../assets/images/classbanner.png')}
        style={{width: '70%', height:"17%",marginTop:45, alignSelf:"center"}} />

    <View style={{paddingTop:30, marginHorizontal:25, marginVertical:5,}}>
      <Text style={{color: "#063970", fontSize:20, fontWeight:'bold' }}>Classes Available</Text>
     </View>
      
    <FlatList
      
      data={ClassesData}
      keyExtractor={(item) => item.id}
      renderItem={renderCard}
      contentContainerStyle={{ paddingBottom: 20, }}
    />
    </View>
  );
}  

export default SportsApp;
