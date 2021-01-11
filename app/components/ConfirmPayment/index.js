
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';


export default function Home({ data, totalAmount, handlePayNow }) {

    return (
        <>
            <View style={{ margin: 10 }}>
                <Text style={{ marginLeft: 20, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' }}>Confirm Payment</Text>
                <ScrollView>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderWidth: .4, margin: 10, borderColor: 'gray', borderRadius: 10 }}>
                                <Text>{item.description}</Text>
                                <Text>{item.amount}</Text>
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => handlePayNow()}
                            style={styles.submitContainer}>
                            <Text style={{ textAlign: 'center' }}>{`Pay Now Rs. ${totalAmount}`}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    submitContainer: {
        backgroundColor: '#efefef',
        height: 45,
        borderRadius: 10,
        width: '50%',
        justifyContent: 'center',
        alignContent: 'center',
        // alignSelf: 'center',
        marginTop: 60,
        marginLeft: 10
    }

});
