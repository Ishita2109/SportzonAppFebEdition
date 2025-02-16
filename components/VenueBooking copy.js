import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
//import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';

const CommonBookingScreen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const activities = ['Football', 'Basketball', 'Tennis', 'Badminton'];
  const courts = {
    Football: ['Court A', 'Court B'],
    Basketball: ['Court C', 'Court D'],
    Tennis: ['Court E', 'Court F'],
    Badminton: ['Court G', 'Court H']
  };
  const slots = ['6 AM - 7 AM', '7 AM - 8 AM', '8 AM - 9 AM'];

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      {!selectedActivity ? (
        <FlatList
          data={activities}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ padding: 15, marginBottom: 10, backgroundColor: '#063970', borderRadius: 8 }}
              onPress={() => setSelectedActivity(item)}>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      ) : !selectedCourt ? (
        <FlatList
          data={courts[selectedActivity]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ padding: 15, marginBottom: 10, backgroundColor: '#063970', borderRadius: 8 }}
              onPress={() => setSelectedCourt(item)}>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      ) : !selectedDate ? (
        <CalendarPicker
          onDateChange={(date) => setSelectedDate(date.format('YYYY-MM-DD'))}
          selectedDayColor="#063970"
          selectedDayTextColor="#fff"
        />
      ) : (
        <FlatList
          data={slots}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ padding: 15, marginBottom: 10, backgroundColor: '#063970', borderRadius: 8 }}
              onPress={() => {
                setSelectedSlot(item);
                navigation.navigate('BookingConfirmation', { activity: selectedActivity, court: selectedCourt, date: selectedDate, slot: item });
              }}>
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      )}
    </SafeAreaView>
  );
};

export default CommonBookingScreen;
