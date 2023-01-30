import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantDetailsScreen/>
      {/* <HomeScreen /> */}
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
});
