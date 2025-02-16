import { FlatList, Image, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width

const images = [
  { id: '1', src: require('../assets/images2/1.png') },
  { id: '2', src: require('../assets/images2/15.jpeg') },
  { id: '3', src: require('../assets/images2/3.png') },
  { id: '4', src: require('../assets/images2/4.png') },
  { id: '5', src: require('../assets/images2/5.png') },
  { id: '6', src: require('../assets/images2/8.png') },
  { id: '7', src: require('../assets/images2/9.png') },
  { id: '8', src: require('../assets/images2/6.png') },
  { id: '9', src: require('../assets/images2/7.png') },
  { id: '10', src: require('../assets/images2/10.png') },
  { id: '11', src: require('../assets/images2/11.png') },
  { id: '12', src: require('../assets/images2/12.png') },
  { id: '13', src: require('../assets/images2/13.png') },
  { id: '14', src: require('../assets/images2/14.jpeg') },
  { id: '15', src: require('../assets/images2/2.png') },
];

// Define specific styles for each image
const imageStyles = {
  '1': { width: width / 3, height: 100, marginBottom:20, },
  '2': { width: width / 4, height: 85, marginBottom:20,marginTop:5 },
  '3': { width: width / 4, height: 110, marginBottom:20 },
  '4': { width: width / 2, height: 109 },
  '5': { width: width / 2-70, height: 50, marginBottom:35, marginTop:39 },
  '6': {  width: width / 2 - 30, height: 110, marginBottom:40 },
  '7': { width: width / 4+10, height: 70 , marginBottom:50 },
  '8': { width: width / 2 - 40, height: 70 },
  '9': { width: width / 2-10, height: 45, marginTop:25},
  '10': { width: width / 2 - 20, height: 100, marginBottom:40 },
  '11': { width: width / 3 - 5, height: 95 },
  '12': { width: width / 4, height: 105, marginBottom:40 },
  '13': { width: width / 3 + 5, height: 115 },
  '14': { width: width / 4, height: 95, marginBottom:40, marginTop:15 },
  '15': {  width: width / 2 , height: 40, marginBottom:20},
};

const ImageGrid = () => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: 'white' }}>
      {/* Heading */}
      <Text style={{ fontSize: 39, fontWeight: '600', textAlign: 'center', marginBottom: 2, marginTop: 15, color: '#063970' }}>
        OUR TRUSTED
      </Text>
      <Text style={{ fontSize: 39, fontWeight: '600', textAlign: 'center', marginBottom: 45, color: '#063970' }}>
        PARTNERS
      </Text>

      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2} // 2 Columns
        renderItem={({ item }) => (
          <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
            <Image
              source={item.src}
              style={{
                ...imageStyles[item.id], // Apply different styles for each image
              resizeMode: 'cover',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ImageGrid;
