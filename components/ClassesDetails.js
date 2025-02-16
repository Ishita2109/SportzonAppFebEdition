import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ClassesDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9fa', padding: 10 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>

      {/* Image with Overlay Price */}
      <View style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', marginBottom: 20 }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: 200 }}
        />
        <View
          style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#fff',
            paddingVertical: 5,paddingHorizontal: 10,borderTopLeftRadius: 10,}}>
        <Text style={{ color: '#063970', fontSize: 14, fontWeight: 'bold' }}>₹ {item.price} / month</Text>
        </View>
      </View>

      {/* Class Information */}
      <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#063970', marginBottom: 5 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: '#6c757d' }}>{item.address2}</Text>
      </View>
     

      {/* Class Timing */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom: 5 }}>Class Timings</Text>
        <Text
          style={{
            backgroundColor: '#f1f3f5', color: '#063970', paddingVertical: 5,paddingHorizontal: 10, 
            borderRadius: 5,fontSize: 14,textAlign: 'center',fontWeight: 'bold'}}>{item.timings}</Text>
      </View>

      {/* Facilities */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom: 10 }}>
          Facilities Available
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {item.amenities.map((amenity, index) => (
            <Text
              key={index}
              style={{
                backgroundColor: '#e9f5ff',
                color: '#063970',
                paddingVertical: 5,
                paddingHorizontal: 10,
                margin: 5,
                borderRadius: 20,
                fontSize: 14,
              }}
            >
              {amenity.label}
            </Text>
          ))}
        </View>
      </View>

      {/* About Section */}
      <View>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom: 10 }}>About</Text>
        <Text style={{ fontSize: 14, color: '#6c757d', lineHeight: 20, textAlign:'justify'}}>{item.description}</Text>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#063970',
          paddingVertical: 10,
          borderRadius: 20,
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Join Now</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassesDetailScreen;
