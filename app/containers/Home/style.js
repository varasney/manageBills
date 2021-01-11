import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView, TouchableOpacity
} from 'react-native';
import THEMER from '../../utils/themer';


export const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    payNowFloating: { bottom: 60, width: '30%', borderRadius: 35, backgroundColor: THEMER.FLOATING_BG_COLOR },
    budgetButton: { justifyContent: 'flex-start', alignItems: 'flex-start' }
})