
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { updateBills, updateTotalBudget } from '../../redux/actions';

import {
    Header,
    HomeCard,
    BottomBar,
    AddBillInfo,
    Modal,
    Chart,
    ConfirmPayment,
    Dropdown,
    InputBox,
    ButtonComponent
} from '../../components';
import homeController from './homeController';
import { getCategoriesFromData } from '../../utils';
import { MIN_BUDGET } from '../../utils/constants';
import { strings } from '../../utils/strings';

function Home(props) {

    const {
        isAddBillVisible,
        isConfirmModal,
        isOptionModal,
        selectedCategory,
        selectedBillToEdit,
        selectedTotalBudget,
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
        getBillsOnCategory,
        setSelectedTotalBudget

    } = homeController(props);

    let billList = getBillsOnCategory(selectedCategory, props.billList);

    const handleCategory = (category) => {
        setSelectedCategory(category);
        setIsOptionModal(!isOptionModal);
    }

    const handleTotalBudget = (value) => {
        setSelectedTotalBudget(value);
    }

    const setFinalBudget = () => {
        if (selectedTotalBudget > MIN_BUDGET) {
            updateTotalBudget(selectedTotalBudget);
            setIsOptionModal(false)
        } else {
            alert(`${strings('minBudget')} ${MIN_BUDGET}`)
        }

    }
    const isShowPay = checkIsPayVisibility(billList);
    let totalSelectedAmount = getTotalSelectedAmount();
    let selectedUNPAIDBills = getSelectedUnpaidBills();

    const ADD_BILL_INFO_MODAL = (
        <Modal modalVisible={isAddBillVisible} onClose={hideModal}>
            <AddBillInfo onPress={handleSubmitData} isEditData={selectedBillToEdit} />
        </Modal>
    )

    const OPTION_MODAL = (
        <Modal modalVisible={isOptionModal} onClose={() => setIsOptionModal(false)}>
            <View style={{ padding: 20 }}>
                <Text>Filter By Category</Text>
                <Dropdown
                    data={getCategoriesFromData(props.billList)}
                    selectedData={selectedCategory}
                    onChange={(category) => handleCategory(category)} />

                <View style={{ marginTop: 50 }}>
                    <Text style={{ marginLeft: 10 }}>Set your budget</Text>
                    <InputBox
                        keyboardType="numeric"
                        value={selectedTotalBudget && selectedTotalBudget.toString()}
                        placeholder={"Enter Your Monthly Budget"}
                        onChangeText={(value) => handleTotalBudget(parseInt(value))} />
                    <ButtonComponent onPress={setFinalBudget} label="SET BUDGET" style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} />
                </View>
            </View>

        </Modal>
    )
    const CONFIRM_PAYMENT = (
        <Modal modalVisible={isConfirmModal} onClose={hideConfirmModal}>
            <ConfirmPayment
                totalAmount={totalSelectedAmount}
                data={selectedUNPAIDBills}
                onClosePress={hideConfirmModal}
                handlePayNow={handlePayNow} />
        </Modal>
    )
    return (
        <>
            {ADD_BILL_INFO_MODAL}
            {CONFIRM_PAYMENT}
            {OPTION_MODAL}
            <View style={styles.container}>
                <Header label="Home" data={billList} onRightPress={() => setIsOptionModal(true)} />
                <ScrollView style={{ marginBottom: 50 }}>
                    <Chart data={billList} />
                    <RenderCards
                        data={billList}
                        onRemove={removeBills}
                        onEdit={handleSelectedBillToEdit}
                        onCardPress={onCardPress}
                    />


                </ScrollView>

                {isShowPay &&
                    <PayButton
                        onPress={showConfirmModal}
                        totalAmount={totalSelectedAmount} />}

                <BottomBar onPress={handlePressAddBill} label="ADD BILL" />


            </View>
        </>
    )
}

const RenderCards = ({ data, ...rest }) => (
    <FlatList
        data={data}
        renderItem={({ item }) =>
            <HomeCard
                data={item}
                {...rest}
            />}
        keyExtractor={item => item.id}
    />
)

const PayButton = ({ onPress, totalAmount }) => (
    <View style={{ flexDirection: 'row-reverse' }}>
        <BottomBar
            onPress={onPress}
            style={{ bottom: 60, width: '30%', borderRadius: 35, backgroundColor: '#72D7CB' }}
            label={`Pay Rs. ${totalAmount}`}
            labelSize={14}
        />
    </View>
)


const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
})
const mapStateToProps = state => {
    return {
        billList: state.billList,
        TOTAL_BUDGET: state.TOTAL_BUDGET
    }
}

const mapDispatchToProps = dispatch => ({
    updateBillList: (updatedData) => {
        dispatch(updateBills(updatedData));
    },
    updateTotalBudget: (updatedBudget) => {
        dispatch(updateTotalBudget(updatedBudget));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
