import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

// {RestaurantItem component} 

const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg"
        }}
        style={styles.image}
      />
      <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
      <Text style={styles.subtitle}>$ 1.40  25-35 min</Text>
    </View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* {restaurant views} */}
      <RestaurantItem/>
      <RestaurantItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantContainer:{
    width: '100%',
    padding: 10,
    marginVertical: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 4 /3,
  },
  title: {
    marginTop:5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop:5,
    fontSize: 15,
    color: 'gray',
  },
});
