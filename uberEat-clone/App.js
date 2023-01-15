import { StatusBar } from 'expo-status-bar';
import RestaurantItem from './src/components/RestaurantItem';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import restaurants from './assets/data/restaurants.json';


export default function App() {
  return (
    <View style={styles.container}>
      {/* {restaurant views} */}
      {/* <RestaurantItem restaurant = {restaurants[0]}/>
      <RestaurantItem restaurant = {restaurants[1]}/>
      <RestaurantItem restaurant = {restaurants[2]}/> */}
      <FlatList data={restaurants}
        renderItem={({item}) => <RestaurantItem restaurant = {item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
