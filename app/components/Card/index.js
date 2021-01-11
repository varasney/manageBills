
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default function Card({ onPress, children, style,disabled }) {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.container, style]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        padding: 20,
        margin: 5
    },
});
