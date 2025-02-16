import { StyleSheet, Text, FlatList, setRoutes, View, SafeAreaView, Image, TextInput, Pressable, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native'; 
import { venuedata } from './VenueData';
import { eventdata } from './EventData';

// VenueCard Component to display venue information
const VenueCard = ({ item }) => {
  const navigation = useNavigation(); // New line added

  return (
    <Pressable 
      onPress={() => navigation.navigate('VenueDetails', { item })} // New line added
      style={{ margin: 15, backgroundColor: "#fff", borderRadius: 10, elevation: 5 }}
    >
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color:'black' }}>{item.name}</Text>
        <Text style={{ color: '#777' }}>{item.address1}</Text>
        <Text style={{ fontSize: 14, color: '#ff6600', marginTop: 5 }}>
          Rating: {item.rating}
        </Text>
        <Text style={{ fontSize: 14, marginTop: 5 }}>{item.timings}</Text>
      </View>
    </Pressable>
  );
};

// Venues Data in file VenueData.js

const Venues = () => (
  <FlatList
    showsVerticalScrollIndicator={false}
    data={venuedata}
    renderItem={({ item }) => <VenueCard item={item} />}
    keyExtractor={item => item.id}
    contentContainerStyle={{ paddingBottom: 20 }}
  />
);


const EventsCard = ({ item }) => {
  const navigation = useNavigation(); // New line added

  return (
    <Pressable 
      onPress={() => navigation.navigate('EventDetails', { item })} // New line added
      style={{ margin: 15, backgroundColor: "#fff", borderRadius: 10, elevation: 5 }}
    >
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color:'black' }}>{item.name}</Text>
        <Text style={{ color: '#777' }}>{item.address1}</Text>
        <Text style={{ fontSize: 14, marginTop: 5 }}>{item.date}</Text>
      </View>
    </Pressable>
  );
};
// Events Data in file EventData.js


const Events = () => (
  <FlatList
    showsVerticalScrollIndicator={false}
    data={eventdata}
    renderItem={({ item }) => <EventsCard item={item} />}
    keyExtractor={item => item.id}
    contentContainerStyle={{ paddingBottom: 20 }}
  />
);

const BookScreen = () => {
  const [index, setIndex] = useState(0);

  const [routes, setRoutes] = useState([
    { key: 'venues', title: 'Venues (${venuedata.length})' },
    { key: 'events', title: '(${eventdata.length})' },
  ]);

  const renderScene = SceneMap({
    venues: () => <Venues data={venuedata} />,
    events: () => <Events data={eventdata} />,
  });

  useEffect(() => {
    // Update the tab titles when the data changes
    setRoutes([
      { key: 'venues', title: `Venues (${venuedata.length})` },
      { key: 'events', title: `Events (${eventdata.length})` },
    ]);
  }, [venuedata, eventdata]); 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

      {/* Search For Venue */}
      <View style={{
        marginHorizontal: 15, backgroundColor: "#E8E8E8", padding: 6, flexDirection: "row",
        alignItems: 'center', justifyContent: 'space-between', borderRadius: 18, marginTop: 25, marginBottom: 20
      }}>
        <TextInput placeholder='Search For Venues' />
        <Ionicons name="search" size={25} color="gray" marginHorizontal={15} />
      </View>

      {/* Sport and Avalabilty
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}>
           
            <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 9, marginTop:-225, marginBottom:-70}}>
              <View style={{ padding: 9, borderRadius: 10, borderColor: "#E0E0E0", borderWidth: 2 }}>
                <Text>Cricket</Text>
              </View>
      
              <View style={{ padding: 9, borderRadius: 10, borderColor: "#E0E0E0", borderWidth: 2 }}>
                <Text>Basketball</Text>
              </View>
      
              <View style={{ padding: 9, borderRadius: 10, borderColor: "#E0E0E0", borderWidth: 2 }}>
                <Text>Football</Text>
              </View>
      
              <View style={{ padding: 9, borderRadius: 10, borderColor: "#E0E0E0", borderWidth: 2 }}>
                <Text>Tennis</Text>
              </View>
      
              <View style={{ padding: 9, borderRadius: 10, borderColor: "#E0E0E0", borderWidth: 2 }}>
                <Text>Badminton</Text>
              </View>
            </Pressable>
      
            </ScrollView>*/} 

      {/* Sliding Tabs */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#ff6600', height: 2 }}
            style={{ backgroundColor: '#fff', elevation: 0, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' }}
            labelStyle={{ color: 'gray', fontWeight: 'bold' }}
            activeColor="#ff6600"
            inactiveColor="gray"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
});
