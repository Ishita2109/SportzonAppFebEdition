import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const { width, height } = Dimensions.get('window'); // Get device dimensions

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          title: (
            <Text style={styles.titleText}>Game On with Sportzon</Text>
          ),
          image: (
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/OBS1.png')}
                style={styles.image}
              />
            </View>
          ),
          subtitle: 'Welcome to Sportzon! Your gateway to an active lifestyle. Let’s connect, play, and thrive together!',
        },
        {
          backgroundColor: '#fff',
          title: (
            <Text style={styles.titleText}>Find. Book. Play</Text>
          ),
          image: (
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/OBS2.png')}
                style={styles.image}
              />
            </View>
          ),
          subtitle: 'From thrilling tournaments to casual matches, discover and book events tailored to your passion for sports.',
        },
        {
          backgroundColor: '#fff',
          title: (
            <Text style={styles.titleText}>Gear Up Skill Up</Text>
          ),
          image: (
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/OBS3.png')}
                style={styles.image}
              />
            </View>
          ),
          subtitle: 'Explore top-quality sports equipment and join expert-led classes to hone your skills.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  titleText: {
    fontSize: width * 0.06, // Scale font size based on screen width
    fontWeight: 'bold',
    color: '#063970',
    textAlign: 'center',
    marginBottom: height * 0.02, // Dynamic spacing
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.02, // Responsive margin
  },
  image: {
    width: width * 0.6, // Scale image width dynamically
    height: width * 0.6, // Keep aspect ratio
    resizeMode: 'contain',
  },
});
