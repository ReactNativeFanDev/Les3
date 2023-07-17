import { View, Text, StyleSheet } from "react-native"

export default function Subtitle ({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#7a614e',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        marginVertical: 4,
        padding: 4,
        marginHorizontal: 12,
        borderBottomColor: '#7a614e',
        borderBottomWidth: 2,
    },
});