import { View, Image, Dimensions, Pressable, Text } from 'react-native';
import React, { useState } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LoginModal from './LoginModal'; // Import Login Modal

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const [showLogin, setShowLogin] = useState(false); // Control Login Modal

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        showDone={false}
        showNext={false}
        showSkip={false}
        bottomBarColor="black"
        pages={[
          { 
            backgroundColor: 'white', 
            image: <Image source={require('../assets/images/OBS1.png')} style={{ width:'100%', height:'100%', resizeMode: 'cover' }} />
          },
          { 
            backgroundColor: 'white', 
            image: <Image source={require('../assets/images/OBS2.png')} style={{ width, height, resizeMode: 'contain' }} />
          },
          { 
            backgroundColor: 'white', 
            image: (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/images/OBS3.png')} style={{ width, height, resizeMode: 'contain' }} />
                {/* Button for Opening Login Modal */}
                <Pressable
                  onPress={() => setShowLogin(true)}
                  style={{
                    position: 'absolute',
                    bottom: 75,
                    width: '80%',
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    paddingVertical: 12,
                    paddingHorizontal: 30,
                    borderRadius: 25,
                    elevation: 5,
                  }}
                >
                  <Text style={{ color: '#001F3F', fontSize: width * 0.05, fontWeight: 'bold', textAlign: 'center' }}>
                    Let's Get Playing!
                  </Text>
                </Pressable>
              </View>
            )
          }
        ]}
      />
      
      {/* Login Modal */}
      <LoginModal visible={showLogin} onClose={() => setShowLogin(false)} />
    </View>
  );
};

export default OnboardingScreen;
