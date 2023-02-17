import { Text, View, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1);
    const onMinus = () => {
        if (quantity > 1) {
            setQuantity (quantity - 1);
        }
    };
    const onPlus = () => {setQuantity (quantity + 1)};
    const getTotal = () => {return (dish.price * quantity).toFixed(2)};

    return (
        <View style = {styles.page}>
            <AntDesign style = {styles.backButton} name="arrowleft" size={35} color="black" />
            <Text style = {styles.name}>{dish.name}</Text>
            <Text style = {styles.description}>{dish.description}</Text>
            <View style = {styles.bar}></View>
            <View style = {styles.row}>
                <AntDesign name="minuscircleo" size={60} color="black" onPress={onMinus}/>
                <Text style = {styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={60} color="black" onPress={onPlus} />
            </View>
            <View style = {styles.button}>
                <Text style = {styles.textButton}>Add {quantity} to Basket &#8226; $ {getTotal()}</Text>
            </View>
        </View>
    )
}

export default DishDetailsScreen;

const styles = StyleSheet.create({
    page : {
        flex : 1,
        width : '100%',
        padding : 10,
    },
    backButton : {
        marginBottom : 50,
    },
    name : {
        fontSize : 30,
        fontWeight : "bold",
    },
    description : {
        color : "gray",
        fontSize : 17,
        marginBottom : 20,
    },
    bar : {
        height : 1,
        backgroundColor : "lightgray",
    },
    row : {
        flexDirection : 'row',
        alignItems : "center",
        justifyContent : "center",
        marginTop : 50,
    },
    quantity : {
        fontSize : 25,
        margin : 10,
    },
    button : {
        backgroundColor : "black",
        marginTop : "auto",
        padding : 20,
        alignItems : "center",
    },
    textButton : {
        color : "white",
        fontSize : 19,
        fontWeight : "600",
    }
});
