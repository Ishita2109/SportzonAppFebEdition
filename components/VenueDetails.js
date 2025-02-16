import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const VenueDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params; // Venue details passed via navigation.
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Image Carousel */}
      <View style={{ height: 250 }}>
        <FlatList
          data={[item.image]} // Add more image URLs here for the slider.
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: image }) => (
            <Image source={{ uri: image }} style={{ width: 500, height: '100%' }} />
          )}
          keyExtractor={(image, index) => index.toString()}
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Venue Name and Basic Details */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black',marginBottom: 10 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, marginBottom: 10, color: 'black'}}>Timings: {item.timings}</Text>
        <Text style={{ fontSize: 14, color: '#777', marginBottom: 20 }}>{item.address2}</Text>

      
        
     {/* Available Sports Section */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>Available Sports</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
            {item.activities.map((activity, index) => (
        <View
           key={index}
           style={{
        backgroundColor: 'white',  flexDirection: 'row',  alignItems: 'center', paddingHorizontal: 15,
        paddingVertical: 7, margin: 5, borderRadius: 8, borderColor: '#063970', borderWidth: 1, }} >
     
     {/* Sport Icon */}
      <View
        style={{
          width: 30, height: 30, borderRadius: 15, justifyContent: 'center',
          alignItems: 'center',  marginRight: 10, }}>
        <Image
          source={activity.icon}
          style={{width: 25, height: 25, resizeMode: 'contain',}}
        />
      </View>
      {/* Sport Name */}
      <Text style={{ fontSize: 14, color: '#063970', fontWeight: '500' }}>
        {activity.label}
      </Text>
    </View>
  ))}
</View>

        {/* Amenities Section */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black',marginBottom: 10 }}>Amenities</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20, }}>
          {item.amenities.map((amenity, index) => (
            <View
              key={index}
              style={{
                backgroundColor: 'white',
                padding: 10,
                margin: 5,
                borderRadius: 5,
                borderColor: '#063970',
                borderWidth: 0.7,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 14, color:'#063970', fontWeight:'500'}}>{amenity.label}</Text>
            </View>
          ))}
        </View>

        {/* About Venue Section */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>About Venue</Text>
        <Text style={{ fontSize: 14, color: '#555', lineHeight: 20, textAlign:'justify' }}>{item.description}</Text>

        {/* Create Activity Button */}
        <TouchableOpacity
          style={{
            backgroundColor: 'white', padding: 15, borderRadius: 10,
            alignItems: 'center',
            marginTop: 30,
            borderColor: '#063970',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={()=> navigation.navigate('VenueBooking')}
        >
          <Text style={{ color: '#063970', fontSize: 16, fontWeight: 'bold'}}>+ Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  
  justifyText: {
    textAlign: 'justify', // This makes the text justified
    fontSize: 16,
    color: '#333',
  },

  
});

export default VenueDetailScreen;
