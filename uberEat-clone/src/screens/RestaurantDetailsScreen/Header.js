import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";

/*---------- Restaurant details screen ---------- */

 const HeaderDetails = ({restaurant}) => {
    return (
        <View style = {styles.page}>
            <Image style = {styles.image} source = {{uri : restaurant.image}}/>
            <View style = {styles.container}>
                <Text style = {styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min</Text>
                <Text style = {styles.menuTitle}>Menu</Text>
            </View>
        </View>
    );
}

export default HeaderDetails;