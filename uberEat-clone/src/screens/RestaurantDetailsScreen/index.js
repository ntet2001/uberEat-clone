import { FlatList, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import restaurants from '../../../assets/data/restaurants.json';
import DishesListItem from "../../components/DishesListItem";
import Header from "./Header";
import styles from "./styles";


/*---------- Restaurant details screen ---------- */
const restaurant =  restaurants [0]

export default function RestaurantDetailsScreen (){
    return (
        <View style = {styles.page}>
            <FlatList data={restaurant.dishes}
                ListHeaderComponent = {() => <Header restaurant={restaurant}/>}
                renderItem = {({item}) => <DishesListItem dish={item} />}
            />
            <View style = {styles.iconContainer}>
                <Ionicons name="arrow-back-circle" size={50} color="white"/>
            </View>
        </View>
    );
}