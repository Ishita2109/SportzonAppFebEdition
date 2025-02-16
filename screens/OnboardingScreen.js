import { StyleSheet, Text, View, Image, Dimensions, Pressable, SafeAreaView, ScrollView, } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get device dimensions

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
      showDone={false}
      showNext={false}
      showSkip={false}
      bottomBarColor="black"
      pages={[
        {
          title: "Game On with Sportzon",  // ✅ Add title
          backgroundColor: "white",
          image: (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/OBS1.png")}
                style={{
                  width: width,
                  height: height,
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        },

        {
          title: "Stay Active, Stay Fit",  // ✅ Add title
          backgroundColor: "white",
          image: (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/OBS2.png")}
                style={{
                  width: width,
                  height: height,
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        },

        {
          title: "Join the Fun!",  // ✅ Add title
          backgroundColor: "white",
          image: (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/OBS3.png")}
                style={{
                  width: width,
                  height: height,
                  resizeMode: "contain",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 75,
                  width: "80%",
                  alignSelf: "center",
                }}
              >
                <Pressable
                  onPress={() => navigation.navigate("LoginModal")}
                  style={{
                    backgroundColor: "white",
                    paddingVertical: 12,
                    paddingHorizontal: 30,
                    borderRadius: 25,
                    elevation: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "#001F3F",
                      fontSize: width * 0.05,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Let’s Get Playing!
                  </Text>
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

