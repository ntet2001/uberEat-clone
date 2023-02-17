import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import BasketScreen from './src/screens/BasketScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import HomeScreen from './src/screens/Home';
import OrdersScreen from './src/screens/OrdersScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <OrdersScreen/>
      {/* <BasketScreen/> */}
      {/* <DishDetailsScreen/> */}
      {/* <RestaurantDetailsScreen/> */}
      {/* <HomeScreen /> */}
      {/* style of my status bar */}
      <StatusBar style='light'></StatusBar>
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
