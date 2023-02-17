import { Text, View, StyleSheet, FlatList } from "react-native";
import orders from "../../../assets/data/orders.json";
import OrdersListItem  from "../../components/OrdersListItem";


const OrdersScreen = () => {
    return (
        <View style = {{flex :1, width : '100%', paddingTop : 50,}}>
            <FlatList data={orders}
                renderItem = {({item}) => <OrdersListItem order={item} />}
            />
        </View>
    )
}

export default OrdersScreen;

const styles = StyleSheet.create({});