import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { InputBox, Datepicker, Dropdown } from '../index';
import { TOTAL_BUDGET, CATEGORY_DATA } from '../../utils/constants';


export default function AddBillInfo({ onPress, isEditData, style, label }) {
    const [billDescription, setBillDescription] = useState('')
    const [amount, setAmount] = useState(null)
    const [selectedDate, setDate] = useState('')
    const [selectedCategory, setselectedCategory] = useState('Others')

    useEffect(() => {
        if (Object.keys(isEditData).length > 0 && Object.values(isEditData).length) {
            setBillDescription(isEditData.description)
            setAmount(isEditData.amount.toString())
            setDate(isEditData.date)
            setselectedCategory(isEditData.category)
        }
    }, [])

    const handleSubmit = () => {
        if (billDescription && amount && selectedDate && selectedCategory) {
            let dataToSubmit = {
                billDescription,
                amount: parseInt(amount),
                selectedDate,
                selectedCategory: selectedCategory || "Others",
            }
            if (Object.keys(isEditData).length > 0 && Object.values(isEditData).length) {
                dataToSubmit.id = isEditData.id
            }

            onPress && onPress(dataToSubmit);
        }

        clearDataAfterSubmit()
    }

    const clearDataAfterSubmit = () => {
        setBillDescription('')
        setAmount('')
        setDate('')
        setselectedCategory('')
    }

    const handleAmountInput = (value) => {
        if (parseInt(value) <= TOTAL_BUDGET) {
            setAmount(value);
        }
    }
    const isValid = () => {
        let isValid = true;
        isValid = (billDescription && amount && selectedDate && selectedCategory) ? true : false
        return isValid
    }

    let isInvalid = isValid() ? false : "Please enter all the values"
    return (
        <ScrollView >
            <View style={{ padding: 30, margin: 20, marginTop: 0, marginBottom: 40 }}>
                <InputBox value={billDescription} placeholder={"Add Bill Description"} onChangeText={(value) => setBillDescription(value)} />
                <InputBox keyboardType="numeric" value={amount} placeholder={"Bill Amount"} onChangeText={(value) => handleAmountInput(value)} />
                <View style={{ marginTop: 20 }}>
                    <Dropdown
                        data={CATEGORY_DATA}
                        selectedData={selectedCategory || ''}
                        onChange={(category) => setselectedCategory(category)} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Datepicker
                        selectedDate={selectedDate}
                        onChange={(date) => setDate(date)} />
                </View>
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.submitContainer}>
                    <Text style={{ textAlign: 'center' }}>Submit</Text>
                </TouchableOpacity>
                {isInvalid && <Text style={styles.errorStyle}>{isInvalid}</Text>}
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    submitContainer: {
        backgroundColor: '#efefef',
        height: 45,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        // alignSelf: 'center',
        marginTop: 60,
        marginLeft: 10
    },
    errorStyle: { color: 'red', marginTop: 20, marginLeft: 20 }

});
