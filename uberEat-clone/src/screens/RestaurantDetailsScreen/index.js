import { FlatList, Image, Text, View, StyleSheet } from "react-native";
import restaurants from '../../../assets/data/restaurants.json';

/*---------- Restaurant details screen ---------- */
const restaurant =  restaurants [0]

export default function RestaurantDetailsScreen (){
    return (
        <View style = {styles.page}>
            <Image style = {styles.image} source = {{uri : restaurant.image}}/>
            <View style = {styles.container}>
                <Text style = {styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page : {
        flex : 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 /3,
    },
    title: {
        fontSize: 35,
        fontWeight: "600",
    },
    subtitle: {
        fontSize: 15,
        color: 'gray',
    },
    container : {
        padding: 10,
    },
});