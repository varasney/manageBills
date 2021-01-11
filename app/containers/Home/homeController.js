
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { TOTAL_BUDGET } from '../../utils/constants';
import { buildBillObj } from '../../utils';

export default function homeController(props) {
    const { billList, updateBillList } = props;
    const [isAddBillVisible, setModalVisiblity] = useState(false);
    const [isConfirmModal, setConfirmModal] = useState(false);
    const [isOptionModal, setIsOptionModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBillToEdit, setSelectedBillToEdit] = useState({});

    const removeBills = () => {
        let cpybillList = [...billList];
        cpybillList.pop();
        updateBillList(cpybillList);
    }

    const handleSubmitData = (data) => {
        console.log('suhas nano obj', data);
        let obj = buildBillObj(data, billList.length + 1)
        let cpybillList = [...billList];
        
        cpybillList.push(obj);
        updateBillList(cpybillList);
        hideModal();
    }

    const hideModal = () => {
        setModalVisiblity(false)
    }

    const showModal = () => {
        setModalVisiblity(true)
    }

    const handlePressAddBill = () => {
        setSelectedBillToEdit({})
        showModal();
    }

    const hideConfirmModal = () => {
        setConfirmModal(false)
    }

    const showConfirmModal = () => {
        setConfirmModal(true)
    }

    const onCardPress = (item) => {
        let cpybillList = billList.filter((billItem) => {
            billItem.id == item.id ? billItem.isSelected = !item.isSelected : null
            return billItem;
        });
        updateBillList(cpybillList);
    }
    const checkIsPayVisibility = (billData) => {
        let isShowPAY = billData.some((item) => item.isSelected == true && !item.paid);
        return isShowPAY;
    }

    const getTotalSelectedAmount = () => {
        let totalAmount = 0;
        billList.forEach(element => element.isSelected ? totalAmount += parseInt(element.amount) : null);
        return totalAmount;
    }


    const makePaidStatus = (billData) => billData.filter((item) => {
        (item.isSelected ? item.paid = true : null);
        return item
    })

    const showAlert = () =>
        Alert.alert(
            "Total Budget Alert",
            `Your total Monthly Budget should not be more then ${TOTAL_BUDGET}`,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    const handlePayNow = () => {
        let totalSelectedAmount = getTotalSelectedAmount();
        if (totalSelectedAmount > TOTAL_BUDGET) {
            showAlert();
            return;
        }
        updateBillList(makePaidStatus(billList));

        hideConfirmModal();

    }

    const handleSelectedBillToEdit = (item) => {
        setSelectedBillToEdit(item);

        showModal();
    }

    const getBillsOnCategory = (selectedCategory, billList) => {
        let newbillList = [];
        if (!selectedCategory || selectedCategory == "All") {
            newbillList = billList;
        } else newbillList = billList.filter(item => item.category === selectedCategory);
        return newbillList;
    }

    const getSelectedUnpaidBills = () => billList.filter((item) => item.isSelected && !item.paid && item)

    return ({
        isAddBillVisible,
        isConfirmModal,
        isOptionModal,
        selectedCategory,
        selectedBillToEdit,
        removeBills,
        handleSubmitData,
        hideModal,
        showModal,
        onCardPress,
        checkIsPayVisibility,
        handlePayNow,
        getTotalSelectedAmount,
        hideConfirmModal,
        showConfirmModal,
        getSelectedUnpaidBills,
        setIsOptionModal,
        setSelectedCategory,
        handleSelectedBillToEdit,
        handlePressAddBill,
        getBillsOnCategory
    })
}