import { StyleSheet } from "react-native";
import { Text, View, Pressable, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem ({ id, title, imageUrl, duration, complexity, affordability }) {
    
    const navigation = useNavigation();
 

    function selectMealItemHandler() {
        navigation.navigate('MealDetail',{
            mealId: id,
        });
    }

    return(
        <View style={styles.MealItem}>
            <Pressable 
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
                android_ripple={{color: "#CCC"}}
                onPress={selectMealItemHandler}
                
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{url: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },    
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: 'white',
        elevation: 12,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 12,

    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },

})