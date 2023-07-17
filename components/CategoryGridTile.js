import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

export default function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
                android_ripple={{color: "#CCC"}}
                onPress={onPress}

            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 12,
        backgroundColor: 'white',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 12,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});