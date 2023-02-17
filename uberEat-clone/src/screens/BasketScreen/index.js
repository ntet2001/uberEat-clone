import { Text, View, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

const restaurant = restaurants[0];

const BasketDishItems = ({basketDish}) => {
    return (
        <View style = {styles.row}>
            <View style = {styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text style = {{fontWeight : "600",}}>{basketDish.name}</Text>
            <Text style = {{marginLeft: "auto",}}>{basketDish.price}$</Text>
        </View>
    )
}

const BasketScreen = () => {

    return (
        <View style = {styles.page}>
            <AntDesign style = {styles.backButton} name="arrowleft" size={35} color="black" />
            <Text style = {styles.name}>{restaurant.name}</Text>
            <Text style = {{fontSize : 19}}>Your items</Text>
            <FlatList data={restaurant.dishes}
                renderItem = {({item}) => <BasketDishItems basketDish={item} />}
            />
            <View style = {styles.bar}></View>
            <View style = {styles.button}>
                <Text style = {styles.textButton}> Next &#8226; $</Text>
            </View>
        </View>
    )
}

export default BasketScreen;

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
        fontSize : 25,
        fontWeight : "bold",
    },
    bar : {
        height : 1,
        backgroundColor : "lightgray",
    },
    row : {
        flexDirection : 'row',
        alignItems : "center",
        marginTop : 10,
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
    },
    quantityContainer : {
        backgroundColor : "lightgray",
        padding : 10,
        borderRadius : 60,
        height : 40,
        width : 40,
        alignItems : "center",
        justifyContent : "center",
        marginRight : 20,
    }
});
