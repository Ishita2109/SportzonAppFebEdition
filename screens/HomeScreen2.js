import React, { useLayoutEffect, useState } from 'react';
import {Image,StyleSheet,Text,View,ScrollView,Pressable,Dimensions,useWindowDimensions, ImageBackground,TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
//import Video from 'react-native-video';

const { width: screenWidth } = Dimensions.get('window');
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const { width } = useWindowDimensions();

       useLayoutEffect(() => {
          navigation.setOptions({
            headerTitle: '', // No default title
            headerStyle: {
              backgroundColor: 'white',
              elevation: 10, 
              shadowOpacity: 0.1,
              shadowRadius: 3,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              height:height*0.11
            },
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginRight: 15,
              }}>
                <Image
                  style={{ width: 45, height: 45, borderRadius: 25,}}
                  source={require('../assets/images/Profile_icon.jpg')} // Replace with the actual path
                />
              </View>
            ),
            headerLeft: () => (
              
              <View style={{flexDirection: 'row', alignItems: 'center',  marginRight: 15, marginLeft:25}}>

                <View style={{
                   flexDirection: 'row', alignItems: 'center',backgroundColor: '#FFF8F1',
                  padding: 10,borderRadius: 20,borderWidth: 1.5,borderColor: '#FF5F1F', width:300 }}>

                  <Text style={{ color: '#333',fontSize: 14, marginRight: 5, }}>Nehru Place, Delhi...</Text>
                  <Ionicons name="chevron-down" size={20} color="#FF5F1F" marginLeft={120} />
                </View>
              </View>
            ),
          });
        }, [navigation]);

        const handleCardPress = () => {
          Alert.alert("Card Clicked", "You have clicked the Play card!");
        };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
      <ScrollView style={{flex: 1,}}>


  {/* Find Your Sport */}
      <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', marginTop:5}}>

      <Image
        source={require('../assets/images/helmet.png')}
        style={{width: 40,height: 40,resizeMode: 'contain', marginTop:50, marginLeft:10}} />

      <Text style={{ fontSize: 24, fontWeight: '400', color: '#1a1a1a', marginHorizontal: 8,}}> Find your <Text style={{color: '#ff6600', fontWeight: 'bold',  }}>sporty</Text> </Text>
      
      <Image
       source={require('../assets/images/trophy.png')}
        style={{width: 40, height: 40, resizeMode: 'contain', marginTop:50, }} />
    </View>

    <View>
    <Text style={{alignItems: 'center',justifyContent: 'center',marginLeft:170,fontSize: 24,color: '#ff6600', fontWeight: '400',marginTop:-32,marginBottom:10 }}>interest!</Text> 
    </View>

  
  {/* PLAY CARD */} 

   <TouchableOpacity
      onPress={()=> navigation.navigate('PlayScreen')}
      //activeOpacity={0.8}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:1 }} >
        
      <ImageBackground
        source={require('../assets/images/Play1.png')} 
        style={{
           padding: 12, height: 225,width: 390,marginLeft:38,marginRight:35,justifyContent: 'space-between', }}>
        <Text
          style={{fontSize: 24,fontWeight: '700', color: '#fff',marginLeft:25, marginTop:30}} >Play </Text>
        <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:25,marginTop:-10,fontWeight: '500',
          color:'white', }}>Find players and track </Text>
        <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:25,marginTop:-20,fontWeight: '500',
          color:'white', }}>your bookings </Text>
        
        <TouchableOpacity
          onPress={()=> navigation.navigate('PlayScreen')}
          style={{ backgroundColor: '#708090', paddingVertical: 5, paddingHorizontal: 14, 
          borderRadius: 25, width:width*0.33, marginLeft:25,marginBottom: 35, marginTop:1 }}>
          <Text style={{color: 'white',fontWeight: '600',fontSize: 15,}}> Track Here → </Text>
        </TouchableOpacity>

        </ImageBackground>
    </TouchableOpacity>


    {/* BOOK CARD */} 

   <TouchableOpacity
      onPress={()=> navigation.navigate('BookScreen')}
      //activeOpacity={0.8}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:-10 }} >
        
      <ImageBackground
        source={require('../assets/images/Book1.png')} 
        style={{
           padding: 12, height: 225,width: 390,marginLeft:38,marginRight:35,justifyContent: 'space-between', }}>
        <Text
          style={{fontSize: 24,fontWeight: '700', color: '#fff',marginLeft:25, marginTop:30}} >Venues & Events </Text>
        <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:25,marginTop:-10,fontWeight: '500',
          color:'white', }}>Book your perfect </Text>
        <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:25,marginTop:-20,fontWeight: '500',
          color:'white', }}>sports venue nearby!</Text>
        
        <TouchableOpacity
          onPress={()=> navigation.navigate('BookScreen')}
          style={{ backgroundColor: '#708090', paddingVertical: 5, paddingHorizontal: 14, 
          borderRadius: 25, width:width*0.33, marginLeft:25,marginBottom: 35, marginTop:1 }}>
          <Text style={{color: 'white',fontWeight: '600',fontSize: 15,}}> Book Venue → </Text>
        </TouchableOpacity>

        </ImageBackground>
    </TouchableOpacity>


     {/* CLASSES CARD */} 

   <TouchableOpacity
      onPress={handleCardPress}
      //activeOpacity={0.8}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:-10}} >
        
      <ImageBackground
        source={require('../assets/images/Classes1.png')} 
        style={{
           padding: 12, height: 225,width: 390,marginLeft:38,marginRight:35,justifyContent: 'space-between', }}>
        <Text
          style={{fontSize: 24,fontWeight: '700', color: '#fff',marginLeft:25, marginTop:30}} >Classes </Text>
        <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:25,marginTop:-10,fontWeight: '500',
          color:'white', }}>Level up your game </Text>
        <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:25,marginTop:-20,fontWeight: '500',
          color:'white', }}>and train like a pro!</Text>
        
        <TouchableOpacity
          style={{ backgroundColor: '#708090', paddingVertical: 5, paddingHorizontal: 14, 
          borderRadius: 25, width:width*0.33, marginLeft:25,marginBottom: 35, marginTop:1 }}>
          <Text style={{color: 'white',fontWeight: '600',fontSize: 14,}}> Find  Classes→ </Text>
        </TouchableOpacity>

        </ImageBackground>
    </TouchableOpacity>
  
  {/* CLASSES CARD */} 

  <TouchableOpacity
      onPress={handleCardPress}
      //activeOpacity={0.8}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:-10 }} >
        
      <ImageBackground
        source={require('../assets/images/GearUp1.png')} 
        style={{
           padding: 12, height: 225,width: 390,marginLeft:38,marginRight:35,justifyContent: 'space-between', }}>
        <Text
          style={{fontSize: 24,fontWeight: '700', color: '#fff',marginLeft:25, marginTop:30}} >Gear Up </Text>
        <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:25,marginTop:-10,fontWeight: '500',
          color:'white', }}>Buy latest gears at </Text>
        <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:25,marginTop:-20,fontWeight: '500',
          color:'white', }}>affordable prices</Text>
        
        <TouchableOpacity
          style={{ backgroundColor: '#708090', paddingVertical: 5, paddingHorizontal: 14, 
          borderRadius: 25, width:width*0.33, marginLeft:25,marginBottom: 35, marginTop:1 }}>
          <Text style={{color: 'white',fontWeight: '600',fontSize: 15,}}> Buy Gears → </Text>
        </TouchableOpacity>

        </ImageBackground>
    </TouchableOpacity>

     <View>
     <Text style={{ fontSize: 24, fontWeight: '400', color: '#1a1a1a', marginHorizontal: 78,marginTop:20}}> Buy a membership to 
      <Text style={{color: '#ff6600', fontWeight: '350',  }}> maximize</Text> 
      <Text style={{ fontSize: 24, fontWeight: '400', color: '#1a1a1a', marginHorizontal: 8,}}> your</Text> 
      <Text style={{color: '#ff6600', fontWeight: '350',  }}> benefits</Text>
    </Text>
     </View>
        

    {/* Membership Ad */}
        <View style={{ marginHorizontal: 10, marginTop: 15,}}>
          <Pressable>
            <Image
              style={[{ height: 190, borderRadius: 20, marginTop:15,marginLeft:6,marginRight:35, elevation:15}, { width: width - 20 }] } // Dynamic width
              source={require('../assets/images/Membership1.png')}
              
            />
          </Pressable>
        </View>

        

        {/* Footer */}
        <View style={{alignItems: 'center', marginTop: 200,marginBottom:35 }}>
          <Image
            style={{width: 120, height: 70, resizeMode: 'contain',}}
            source={require('../assets/images/Logo.png')}
          />
          <Text style={{ color: 'grey',textAlign: 'center', marginTop: -14,fontSize: 10,
  }}>Your Game, Your Venue, Your Time</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  headerLocationText: {
    fontSize: 18,
    color: '#001F3F',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    marginHorizontal: 5,
  },
  profileIcon: {
    width: 3,
    height: 3,
    borderRadius: 5,
  },
  bannerContainer: {
    marginTop: -6,
  },
  bannerImage: {
    height: 180,
    borderRadius: 0,
  },
  membershipContainer: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  membershipImage: {
    height: 190,
    borderRadius: 20,
  },

  profileImage: {
    width: 14,
    height: 14,
    borderRadius: 12,
  },
  findSportImage: {
    marginTop: 17,
    alignSelf: 'center',
    marginBottom: 15,
  },
  playerBookContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 15,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  cardImage: {
    width: (screenWidth / 2) - 20,
    height: 170,
    borderRadius: 10,
  },
  cardTextContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    elevation: 5,
    marginTop: -10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#001F3F',
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'grey',
    marginTop: 2,
  },
  classesContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  classImage: {
    height: 150,
    borderRadius: 10,
  },
  classTextContainer: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
  },
  classTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#001F3F',
  },
  classSubtitle: {
    fontSize: 12,
    color: 'grey',
    marginTop: 7,
  },
  equipmentsContainer: {
    marginHorizontal: 10,
    marginTop: 85,
  },
  equipmentImage: {
    height: 150,
    borderRadius: 10,
  },
  equipmentTextContainer: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
  },
  equipmentTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#001F3F',
  },
  equipmentSubtitle: {
    fontSize: 12,
    color: 'grey',
    marginTop: 7,
  },
  footerContainer: {
    alignItems: 'center',
    marginVertical: 80,
  },
  footerLogo: {
    width: 120,
    height: 70,
    resizeMode: 'contain',
  },
  footerText: {
    color: 'grey',
    textAlign: 'center',
    marginTop: -14,
    fontSize: 10,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: '#1a1a1a',
    marginHorizontal: 8,
  },
  highlight: {
    color: '#ff6600', // Orange for sporty
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
