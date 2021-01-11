import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function TextBox({ onPress, style, label, ...rest }) {
    return (
        <View style={{ borderColor: 'gray', borderWidth: .2, borderRadius: 4, margin: 10 }}>
            <TextInput {...rest} style={{ padding: 15 }} />
        </View>
    )
}


const styles = StyleSheet.create({


});
