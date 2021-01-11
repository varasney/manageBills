import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default ButtonComponent = ({ onPress, label, style }) => (
    <View style={{ justifyContent: 'center', alignItems: 'center', ...style }}>
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.submitContainer}>
            <Text style={{ textAlign: 'center' }}>{label}</Text>
        </TouchableOpacity>
    </View>
)



const styles = StyleSheet.create({
    submitContainer: {
        backgroundColor: '#efefef',
        height: 45,
        borderRadius: 10,
        width: '50%',
        justifyContent: 'center',
        alignContent: 'center',
        // alignSelf: 'center',
        // marginTop: 60,
        marginLeft: 10
    }

});
