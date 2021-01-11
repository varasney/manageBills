import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Picker
} from 'react-native';

export default function DropdownComponent({ data, onChange, style, selectedData }) {
    return (
        <View>
            <Picker
                selectedValue={selectedData || ''}
                style={{ height: 50, width: '100%' }}
                onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            >
                {data.map(item => <Picker.Item label={item.label} value={item.value} />)}
            </Picker>
        </View >
    )
}



const styles = StyleSheet.create({


});
