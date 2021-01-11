import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';
import THEMER from '../../utils/themer';
export default function BottomButton({ onPress, style, label, labelSize }) {
    return (
        <TouchableOpacity style={[styles.bottomView, style]} onPress={onPress}>
            <Text style={[styles.textStyle, { fontSize: labelSize }]}>{label || "Add"} </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: THEMER.BOTTOMBAR_BG,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    textStyle: {
        color: '#fff',
        fontSize: 18
    }

});
