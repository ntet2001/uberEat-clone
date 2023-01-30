import RestaurantItem from '../../components/RestaurantItem';
import { FlatList,StyleSheet, View } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';


export default function HomeScreen() {
  return (
    <View style={styles.page}>
        {/*Here is my home flatList*/}
      <FlatList data={restaurants}
        renderItem={({item}) => <RestaurantItem restaurant = {item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page : {
    marginTop : 30,
  }
});
