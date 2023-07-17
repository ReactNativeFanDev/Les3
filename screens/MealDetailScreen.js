import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetailSCreen ({route, navigation}) {

    const mealId= route.params.mealId;

    const selectMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Pressed!')
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        icon="star-outline" 
                        color="white" 
                        onPress={headerButtonPressHandler}
                    />
                )
            }
        });
    }, [navigation, headerButtonPressHandler])

    return (
        <ScrollView>
            <Image source={{url: selectMeal.imageUrl}} style={styles.image}/>

            <Text style={styles.title}>{selectMeal.title}</Text>

            <MealDetails 
                duration={selectMeal.duration}
                affordability={selectMeal.affordability} 
                complexity={selectMeal.complexity}
                textStyle={styles.detailText}
            />
            
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectMeal.steps}/>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 200,
    },    
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: "center",
    },
    detailText: {
        color: 'white',
    },
    listContainer: {
        width: '80%',
        alignSelf: 'center',
    }
})