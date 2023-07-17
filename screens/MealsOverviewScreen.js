import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
    const Id = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(Id) >= 0;
    })

    useLayoutEffect(()=> {
        const categorytitle = CATEGORIES.find(
            (category) => category.id === Id
        ).title;
        
        navigation.setOptions({
            title: categorytitle
        });
    }, [Id, navigation])



    function renderMealItem(itemData) {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
            id: itemData.item.id,
        }
        return(
            <MealItem {...mealItemProps}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data = {displayedMeals} 
                keyExtractor={(item)=>item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

})