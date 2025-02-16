import { StyleSheet, Text, View, Image, Dimensions, Pressable, SafeAreaView, ScrollView, } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get device dimensions

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
    showDone={false} // Hides the "Done" button
      showNext={false} // Hides the "Next" button
      showSkip={false} // Hides the "Skip" button
      bottomBarColor='black' //
      //bottomBarHeight={0} // Removes the bottom bar height
      //bottomBarHighlight={false} // Disables the highlight effect
      pages={[
        
        {
          backgroundColor: 'white',
          image: (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              //marginVertical: height * 0.02, // Responsive margin
            }}>
              <Image
                source={require('../assets/images/OBS1.png')}
                style={{
                  width: width, // Scale image width dynamically
                  height: height, // Keep aspect ratio
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          
        },

        {
          backgroundColor: 'white',
          
          image: (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              //marginVertical: height * 0.02, // Responsive margin
            }}>
              <Image
                source={require('../assets/images/OBS2.png')}
                style={{
                  width: width, // Scale image width dynamically
                  height: height, // Keep aspect ratio
                  resizeMode: 'contain',
                }}
              />
            </View>
          ),
          
        },

        {
          backgroundColor: 'white',
          image: (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              //flex: 1, // Ensures the content stretches to fill the screen
            }}>
              <Image
                source={require('../assets/images/OBS3.png')}
                style={{
                  width: width, // Scale image width dynamically
                  height: height, // Occupies 60% of screen height
                  resizeMode: 'contain',
                }}
              />

              {/* Button Below the Image */}
              <View style={{
                   position: 'absolute', // Absolute positioning to overlay on the image
                   bottom: 75, // Position slightly above the bottom of the image
                   width: '80%', // Button width is 80% of the screen
                   alignSelf: 'center', 
                   paddingBottom: 0,
                   
                   }}>
                <Pressable onPress={()=> navigation.navigate('Login')}
                  style={{
                    backgroundColor: 'white', // Orange color
                    paddingVertical: 12,
                    paddingHorizontal: 30,
                    borderRadius: 25,
                    elevation: 5, // Adds shadow effect
                  }}
                >
                  <Text style={{
                    color: '#001F3F',
                    fontSize: width * 0.05, // Responsive font size
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                    Lets Get Playing! </Text>
                </Pressable>
              </View>
            </View>
          ),
        },
        
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  
});
