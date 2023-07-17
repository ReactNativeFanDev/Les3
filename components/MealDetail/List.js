import { View, Text, StyleSheet } from "react-native"

export default function List ({data}) {
    return data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ));
    
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#7a614e',
    },
    itemText: {
        color: "#24180f",
        textAlign: 'center',
    }
});