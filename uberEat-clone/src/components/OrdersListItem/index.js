import { Text, View, StyleSheet, Image } from "react-native";

const OrdersListItem = ({order}) => {
    return(
        <View>
            <View>
                <Image source={{uri : order.image}} style = {{width :"100", aspectRatio : 1,}}/>
            </View>
            <Text>{order.Restaurant.name}</Text>
            <Text>item &#8226; $ {order.Restaurant.deliveryFee}</Text>
            <Text>{order.createdAt} - {order.status}</Text>
        </View>
    )
};

export default OrdersListItem;

const styles = StyleSheet.create({

});