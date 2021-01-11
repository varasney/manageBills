
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';

export default function ModalComponent({ modalVisible, onClose, children }) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                onClose && onClose();
            }}
        >
            <TouchableOpacity onPress={onClose} style={{ flexDirection: 'row-reverse', marginBottom: 30,marginTop:10 }}>
                <Text style={{ marginRight: 20, fontSize: 16 }}>X</Text>
            </TouchableOpacity>
            {children}
        </Modal>
    )
}


const styles = StyleSheet.create({

});
