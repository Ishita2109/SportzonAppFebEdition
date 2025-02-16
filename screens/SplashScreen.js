import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window'); // Get device dimensions

const SplashScreen = ({ navigation }) => {
  const handleVideoEnd = () => {
    // Navigate to Onboarding after the video finishes
    navigation.replace('Onboarding');
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/images/logoorange.mp4')} // Path to your video
        style={styles.video}
        resizeMode="contain" // Adjust as needed ('cover', 'stretch', 'contain')
        onEnd={handleVideoEnd} // Trigger navigation after video ends
        muted={false} // Play with sound
        repeat={false} // Do not repeat the video
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  video: {
    width: width, // Full screen width
    height: height, // Full screen height
  },
});

export default SplashScreen;
