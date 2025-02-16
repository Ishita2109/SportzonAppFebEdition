import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';


const EventDetail = () => {
  const route = useRoute();
  const { item } = route.params; // Venue details passed via navigation.
  const { width } = useWindowDimensions();


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
            <Image source={{ uri: image }} style={{ width: 400, height: '100%' }} />
          )}
          keyExtractor={(image, index) => index.toString()}
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Venue Name and Basic Details */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black',marginBottom: 10 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, marginBottom: 10, color: 'black'}}>Timings: {item.timings}</Text>
        <Text style={{ fontSize: 14, color: '#777', marginBottom: 20 }}>{item.address2}</Text>

        {/* About Venue Section */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>About Venue</Text>
        <RenderHTML contentWidth={width} source={{ html: item.description }} />

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

export default EventDetail;
