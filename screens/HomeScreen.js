import React, { useLayoutEffect, useState, useEffect} from 'react';
import {Image,StyleSheet,Text,View,ScrollView,Linking,Pressable,Dimensions,useWindowDimensions, ImageBackground,TouchableOpacity, 
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width: screenWidth } = Dimensions.get('window');
const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const { width } = useWindowDimensions();

  // header
       useLayoutEffect(() => {
          navigation.setOptions({
            headerTitle: '', 
            headerStyle: {
              backgroundColor: 'white',
              elevation: 10, 
              shadowOpacity: 0.1,
              shadowRadius: 3,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              height:height*0.11
            },

            // Profile
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginRight: 15,
              }}>
                <Image
                  style={{ width: 45, height: 45, borderRadius: 25,}}
                  source={require('../assets/images/Profile_icon.jpg')} 
                />
              </View>
            ),

            //Search Bar
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

        
          const [currentIndex, setCurrentIndex] = useState(0);
          const images = [
             require('../assets/images/Banner1.png'),
             require('../assets/images/Banner2.png'),
             require('../assets/images/Banner3.png'),
             require('../assets/images/Banner4.png'),
             require('../assets/images/Banner5.png'),
            
          ];
          const screenWidth = Dimensions.get('window').width;
        
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000); // Change every 4 seconds
            return () => clearInterval(interval);
          }, []);




        const renderCardvenue = ({ item }) => (
          <TouchableOpacity style={{backgroundColor: "#fff",borderRadius: 10,elevation: 2, marginRight: 10, 
                            overflow: "hidden",  width: 250,borderColor:"#D3D3D3", borderWidth:0.7, height:200, alignItems: "center"}}
                            onPress={()=> navigation.navigate('BookScreen')}>
            
            <Image source={item.image} style={{height: 130, width: "93%",marginTop:10, borderRadius:10}} />
            
            <View style={{ padding: 10,}}>
            
            <Text style={{fontSize: 14,fontWeight: "bold", color: "#333",}}>{item.title}</Text>
              
              <Text style={{fontSize: 12,color: "#555", marginTop: 3,}}>{item.location}</Text>
              
            </View>
          </TouchableOpacity>
        );


        const renderCardevents = ({ item }) => (
          <TouchableOpacity style={{backgroundColor: "#fff",borderRadius: 10,elevation: 2, marginRight: 10, 
                            overflow: "hidden",  width: 170,borderColor:"#D3D3D3", borderWidth:0.7, height:220, alignItems: "center"}} 
                            onPress={()=> navigation.navigate('BookScreen')}>
            
            <Image source={item.image} style={{height: 150, width: "100%",}} />
            
            <View style={{ padding: 10,}}>
            
            <Text style={{fontSize: 14,fontWeight: "bold", color: "#333",}}>{item.title}</Text>
              
              <Text style={{fontSize: 12,color: "#555", marginTop: 5,}}>{item.location}</Text>
              
            </View>
          </TouchableOpacity>
        );

        
          const openURL = (url) => {
            Linking.openURL(url);
          };

        const venues = [
          {
            id: "1",
            title: "DPS International Edge",
            location: "                Gurgaon",
            image: require('../assets/images/DPSInternationalEdgeGgn.jpg'),           
          },
          
          {
            id: "2",
            title: "Oval Cricket Ground",
            location: " Sector 140, Noida, UP",
            image: require('../assets/images/OvalCricketGround.jpg'), 
            
          },
          {
            id: "3",
            title: "Sportzon Wave City",
            location: " Delhi, NCR, Ghaziabad",
            image: require('../assets/images/WaveCityGhzb.jpg'), 
          },
          {
            id: "4",
            title: "",
            location: "",
            image: require('../assets/images/SeeAll.png'), 
            
          },
        ];


        const events = [
          
          {
            id: "1",
            title: "K12 Cricket Camp",
            location: "            Jaipur",
            image: require('../assets/images/K12CricketCamp.jpeg'), 
          },
          
          {
            id: "2",
            title: "DPS International Edge",
            location: "                   Jaipur",
            image: require('../assets/images/k12school.png'),           
          },
          
          {
            id: "3",
            title: "Oval Cricket Ground",
            location: "               Noida",
            image: require('../assets/images/EliteCricketGround.jpg'), 
            
          },
          
          {
            id: "4",
            title: "",
            location: "",
            image: require('../assets/images/SeeAll.png'), 
            
          },
        ];
        

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9F6', }}>
      <ScrollView style={{flex: 1,}}>

   {/* SLIDING BANNER */}
      <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        style={{ width: screenWidth }}
        contentOffset={{ x: currentIndex * screenWidth, y: 0 }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{ width: screenWidth-10, height: 180, resizeMode: 'cover', marginBottom:5, marginTop:15, marginRight:5, marginLeft:5, borderRadius:15}}
          />
        ))}
      </ScrollView>

      <View  //dot dot for slides
        style={{ position: 'absolute',bottom: -8, left: 0,right: 0, flexDirection: 'row', 
          justifyContent: 'center', }} >
        
        {images.map((_, index) => (  
          <View
            key={index}
            style={{ height: 8, width: 8, marginHorizontal: 5,
              borderRadius: 4, backgroundColor: currentIndex === index ? '#000' : '#ccc', }}
          />
        ))}
      </View>
    </View>
  {/* Banners 
        <View style={{marginVertical:20,marginLeft:13,marginRight:7,}}>
          <Pressable>
            <Image
              style={{width: screenWidth - 25,height: 170, borderRadius: 12}}
              source={require('../assets/images/Banner_Design.jpg')}
            />
          </Pressable>
        </View>*/}

  {/* Find Your Sport */}
      <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', marginTop:8}}>

      <Image
        source={require('../assets/images/helmet.png')}
        style={{width: 40,height: 40,resizeMode: 'contain', marginTop:40, marginLeft:10}} />

      <Text style={{ fontSize: 24, fontWeight: '400', color: '#1a1a1a', marginHorizontal: 8,}}> Find your <Text style={{color: '#ff6600', fontWeight: '600',  }}>sporty</Text> </Text>
      
      <Image
       source={require('../assets/images/trophy.png')}
        style={{width: 40, height: 40, resizeMode: 'contain', marginTop:40, }} />
    </View>

    <View>
    <Text style={{alignItems: 'center',justifyContent: 'center',marginLeft:170,fontSize: 24,color: '#ff6600', fontWeight: '300',marginTop:-32,marginBottom:10 }}>interests!</Text> 
    </View>

  {/* VENUE*/} 
  <View>
    <Text style={{marginLeft:20, marginBottom:0, fontSize: 21, fontWeight: '500', color: '#ff6600', marginTop:20}}>Book Your Perfect Sports Venue</Text>
  </View>
 
  <View style={{ marginVertical: 13}}>
      <FlatList
        data={venues}
        renderItem={renderCardvenue}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 17, }}/>
  </View>


    {/* EVENTS */} 
  <View>
    <Text style={{marginLeft:20,  fontSize: 21, fontWeight: '500', color: '#ff6600', marginTop:10}}>Upcoming Events</Text>
  </View>
   
  <View style={{marginVertical: 15}}>
      <FlatList
        data={events}
        renderItem={renderCardevents}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 18, }}/>
  </View>


   {/* Classes & Gears */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 15 }}>
        
  {/* Classes */}   

     <TouchableOpacity
      onPress={()=> navigation.navigate('Classes')}
      //activeOpacity={0.8}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', }} >
        
      <ImageBackground 
        source={require('../assets/images/Cla22.jpg')} 
        style={{
            height: 280,width: 185,marginLeft:30,marginRight:30,justifyContent: 'space-between', borderRadius:15,overflow: 'hidden',}}>
        
        <Text style={{  fontSize: 16, marginLeft:13,marginTop:215,fontWeight: '900', color:'white', marginBottom:2}}
                 >Train like a pro! </Text>
       {/*  <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:5,marginTop:-20,fontWeight: '700',
          color:'white', }}>and train like a pro!</Text>*/}
        
        <TouchableOpacity
          style={{ backgroundColor: '#DAF7A6', paddingVertical: 6, paddingHorizontal: 12, 
          borderRadius: 25, width:width*0.25, marginLeft:13,marginBottom: 12, }}>
          <Text style={{color: 'black',fontWeight: '700',fontSize: 11,}}> Find Classes→ </Text>
        </TouchableOpacity>

      </ImageBackground>
    </TouchableOpacity>
    
  {/* Gears */}
    <TouchableOpacity
      onPress={()=> navigation.navigate('GearUp')}
      //activeOpacity={0.8}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', }} >
        
      <ImageBackground 
        source={require('../assets/images/G1.jpg')} 
        style={{
            height: 280,width: 185,marginLeft:30,marginRight:30,justifyContent: 'space-between', borderRadius:15,overflow: 'hidden'}}>
        
        <Text style={{  fontSize: 16, marginLeft:13,marginTop:215,fontWeight: '900', color:'white', marginBottom:2}}
                 >Play Better. Pay Less! </Text>
       {/*  <Text style={{  fontSize: 16, color: '#d3d3d3', marginLeft:5,marginTop:-20,fontWeight: '700',
          color:'white', }}>and train like a pro!</Text>*/}
        
        <TouchableOpacity
          style={{ backgroundColor: '#DAF7A6', paddingVertical: 6, paddingHorizontal: 12, 
          borderRadius: 25, width:width*0.25, marginLeft:13,marginBottom: 12, }}>
          <Text style={{color: 'black',fontWeight: '700',fontSize: 11,}}> Buy Gears→ </Text>
        </TouchableOpacity>

      </ImageBackground>
    </TouchableOpacity>
  </View> 

    {/* Membership Ad */}
    <View style={{backgroundColor:"#FFFFF0", marginVertical:10}}>
    <View >
     <Text style={{ fontSize: 24, fontWeight: '400', color: '#1a1a1a', marginHorizontal: 78,marginTop:50}}> Buy a membership to 
      <Text style={{color: '#ff6600', fontWeight: '350',  }}> maximize</Text> 
      <Text style={{ fontSize: 24, fontWeight: '400', color: '#1a1a1a', marginHorizontal: 8,}}> your</Text> 
      <Text style={{color: '#ff6600', fontWeight: '350',  }}> benefits</Text>
    </Text>
     </View>
      <View style={{ marginHorizontal: 10, marginTop: 15,backgroundColor:"#FFFFF0"}}>
        <Pressable onPress={() => navigation.navigate('Membership')}>
          <Image
            style={[{ height: 190, borderRadius: 20, marginTop:15,marginLeft:6,marginRight:35, elevation:5}, { width: width - 20 }] } // Dynamic width
            source={require('../assets/images/Membership1.png')}
          />
        </Pressable>
        <View style={{backgroundColor:"#FFFFF0"}}>
         <Text></Text> 
         <Text></Text>
         <Text></Text>
        </View>
      </View>
    </View>
        
   {/* Follow Us */}  

   <View style={{ alignItems:"center", marginTop:100}}>
    <Text style={{fontSize:15, color:"#001F3F",  fontWeight: '600',justifyContent:'center', alignItems:"center", padding:10}}> Follow Us On</Text>
    <View style={{justifyContent:'row', flexDirection: 'row', gap: 12}} >
    <TouchableOpacity onPress={() => openURL('https://www.instagram.com/sportzonindia/')}>
          <Ionicons name="logo-instagram" size={30} color="#001F3F" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openURL('https://www.youtube.com/@sportzongameon')}>
          <Ionicons name="logo-youtube" size={30} color="#001F3F" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openURL('https://wa.me/9654696000')}> 
          <Ionicons name="logo-whatsapp" size={30} color="#001F3F" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openURL('https://www.linkedin.com/company/sportzon-india/')}>
          <Ionicons name="logo-linkedin" size={30} color="#001F3F" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openURL('https://www.facebook.com/sportzonindia/')}>
          <Ionicons name="logo-facebook" size={30} color="#001F3F" />
        </TouchableOpacity>   
  
    </View>   
   </View>

   {/* Footer */}
        <View style={{alignItems: 'center', marginTop: 25,marginBottom:35 }}>
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



  container: {
    marginVertical: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    marginRight: 10,
    overflow: "hidden",
    width: 150,
  },
  image: {
    height: 100,
    width: "100%",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
  label: {
    fontSize: 10,
    color: "#fff",
    backgroundColor: "#ffcc00",
    borderRadius: 5,
    padding: 3,
    marginTop: 5,
    textAlign: "center",
    alignSelf: "flex-start",}
});
