import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { MIN_DATE, DATE_FROMAT, MAX_DATE } from '../../utils/constants';

export default function DatepickerComponent({ onChange, selectedDate, style, label }) {
    return (
        <View>
            <DatePicker
                style={{ width: '100%' }}
                date={selectedDate || ''}
                mode="date"
                placeholder="select date"
                format={DATE_FROMAT}
                minDate={MIN_DATE}
                maxDate={MAX_DATE}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        right: 0,
                        // left: 0,
                        // top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 12
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => onChange(date)}
            />
        </View>
    )
}



const styles = StyleSheet.create({


});
