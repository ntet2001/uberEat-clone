import { View,StyleSheet,Text,Image } from "react-native";

const DishesListItem = ({ dish }) =>{
    return(
        <View style = {styles.container}>
            <View style = {{flex : 1,}}>
                <Text style = {styles.name}>{dish.name}</Text>
                <Text style = {styles.description} numberOfLines = {2}>{dish.description}</Text>
                <Text style = {styles.price}>$ {dish.price}</Text>
            </View>
            <Image style = {styles.imageDish} source={{uri : dish.image}}/>
        </View>
    );
};

const styles =  StyleSheet.create({
    container : {
        margin : 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth : 1,
        paddingBottom : 15,
        marginHorizontal : 20,
        display : "flex",
        flexDirection : "row",
    },
    name : {
        fontSize : 17,
        fontWeight : "650",
    },
    imageDish : {
        height : 100,
        aspectRatio: 1
    },
    description : {
        color : 'gray',
        marginVertical : 5,
        letterSpacing : 0.5,
    },
    price : {
        fontSize : 17,
    }
});

export default DishesListItem;