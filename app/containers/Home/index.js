
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { updateBills } from '../../redux/actions';

import {
    Header,
    HomeCard,
    BottomBar,
    AddBillInfo,
    Modal,
    Chart,
    ConfirmPayment,
    Dropdown
} from '../../components';
import homeController from './homeController';
import { getCategoriesFromData } from '../../utils';

function Home(props) {

    const {
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

    } = homeController(props);

    let billList = getBillsOnCategory(selectedCategory, props.billList);

    const handleCategory = (category) => {
        setSelectedCategory(category);
        setIsOptionModal(!isOptionModal);
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
        billList: state.billList
    }
}

const mapDispatchToProps = dispatch => ({
    updateBillList: (updatedData) => {
        dispatch(updateBills(updatedData));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
