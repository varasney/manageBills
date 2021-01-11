
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Card from '../Card';
import Divider from '../Divider';
import THEMER from '../../utils/themer';

export default function HomeCard({ data, onRemove, onEdit, onCardPress }) {
    const { description, category, amount, date, paid, isSelected } = data;
    let paidStatus = paid ? "PAID" : "UNPAID";
    let bgColor = isSelected && !paid ? THEMER.CARD_SELECTED_BG : THEMER.CARD_UNSELECTED_BG;
    return (
        <Card
            style={{ backgroundColor: bgColor }}
            onPress={() => onCardPress(data)}
            disabled={paid}>
            <View style={styles.labelContainer}>
                <View style={styles.labelContainerChild}>
                    <Text style={styles.mainLabel}>{description}</Text>
                </View>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>Date : <Text >{date}</Text></Text>
                <Badge label={`Rs. ${amount || ''}`} />
            </View>
            <Divider />
            <View style={styles.actionButtonContainer}>
                <TouchableOpacity onPress={() => onRemove()} ><Text >Remove</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => onEdit(data)}><Text >Edit</Text></TouchableOpacity>
                <Badge label={category} />
                <View>
                    <Text style={{ color: paid ? THEMER.PAID_STATUS : THEMER.UNPAID_STATUS }}>{paidStatus}</Text>
                </View>
            </View>
        </Card>
    )
}

const Badge = ({ label, style }) => (<View style={[styles.badge, style]}><Text>{label}</Text></View>)


const styles = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row'
    },

    labelContainerChild: {
        flex: 1,
    },
    mainLabel: {
        fontSize: 16,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    date: {
        fontSize: 12,
    },
    righSideValue: {
        fontStyle: 'italic',
    },
    actionButtonContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    actionButton: {
        marginLeft: 50
    },
    badge: {
        backgroundColor: THEMER.BADGE_BG_COLOR,
        borderRadius: 25,
        minWidth: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },


});
