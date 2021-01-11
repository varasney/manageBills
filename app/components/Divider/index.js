
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default function Divider() {
    return (
        <View style={styles.container}>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
    },
});
