import { Image, StyleSheet, Text, View } from 'react-native';

// {RestaurantItem component} 

const RestaurantItem = ({restaurant}) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min</Text>
        </View>
        {/* Text For Rating*/}
        <View>
            <Text style={styles.rating}>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  )
};

export default RestaurantItem;

const styles = StyleSheet.create({
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
      fontSize: 15,
      fontWeight: 'bold',
    },
    subtitle: {
      marginTop:5,
      fontSize: 13,
      color: 'gray',
    },
    rating: {
        fontSize: 13.5,
        backgroundColor:'lightgray',
        padding: 5,
        borderRadius: 50,
        textAlign: 'center',
        height: 35,
        width: 35,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    }
});
  