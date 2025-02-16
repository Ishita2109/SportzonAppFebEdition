import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
//import DateTimePickerModal from 'react-native-modal-datetime-picker';

const VenueBookingScreen = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const activities = ['Football', 'Basketball', 'Tennis'];
  const courts = ['Court A', 'Court B', 'Court C'];
  const times = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'];

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#f8f9fa' }}>
      {/* Activity Selection */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Choose Activity</Text>
      {activities.map((activity) => (
        <TouchableOpacity 
          key={activity} 
          onPress={() => setSelectedActivity(activity)}
          style={{ padding: 10, backgroundColor: selectedActivity === activity ? '#007bff' : '#ddd', marginBottom: 5, borderRadius: 8 }}>
          <Text style={{ color: selectedActivity === activity ? 'white' : 'black' }}>{activity}</Text>
        </TouchableOpacity>
      ))}
      
      {/* Court Selection */}
      {selectedActivity && (
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Choose Court</Text>
          {courts.map((court) => (
            <TouchableOpacity 
              key={court} 
              onPress={() => setSelectedCourt(court)}
              style={{ padding: 10, backgroundColor: selectedCourt === court ? '#28a745' : '#ddd', marginBottom: 5, borderRadius: 8 }}>
              <Text style={{ color: selectedCourt === court ? 'white' : 'black' }}>{court}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      
      {/* Date Selection 
      {selectedCourt && (
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Choose Date</Text>
          <TouchableOpacity 
            onPress={() => setDatePickerVisibility(true)}
            style={{ padding: 10, backgroundColor: '#ffc107', borderRadius: 8, alignItems: 'center' }}>
            <Text>{selectedDate ? selectedDate.toDateString() : 'Select Date'}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={(date) => {
              setSelectedDate(date);
              setDatePickerVisibility(false);
            }}
            onCancel={() => setDatePickerVisibility(false)}
          />
        </View>
      )}*/}
      
      {/* Time Slot Selection */}
      {selectedDate && (
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Choose Time Slot</Text>
          {times.map((time) => (
            <TouchableOpacity 
              key={time} 
              onPress={() => setSelectedTime(time)}
              style={{ padding: 10, backgroundColor: selectedTime === time ? '#dc3545' : '#ddd', marginBottom: 5, borderRadius: 8 }}>
              <Text style={{ color: selectedTime === time ? 'white' : 'black' }}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default VenueBookingScreen;
