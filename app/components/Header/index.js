
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import THEMER from '../../utils/themer';

export default function Header({ label, onLeftClick, onRightPress }) {
    let isLeftSide = true ? '' : '';
    let isRightSide = true ? '...' : '';
    return (
        <View style={styles.container}>
            <Text onPress={() => onLeftClick && onLeftClick()}>{isLeftSide}</Text>
            <Text style={{fontWeight:'bold',color:'#000000'}}>{label}</Text>
            <Text onPress={() => onRightPress && onRightPress()}>{isRightSide}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: THEMER.HEADER_BG_COLOR,
        height: THEMER.HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
});
