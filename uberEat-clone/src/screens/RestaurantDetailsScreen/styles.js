import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page : {
        flex : 1,
    },
    iconContainer : {
        position: "absolute",
        top : 40,
        left : 5,
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
    menuTitle : {
        fontSize : 18 ,
    }
});