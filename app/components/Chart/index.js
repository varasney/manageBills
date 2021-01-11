
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

import THEMER from '../../utils/themer';

export default function Chart({ data, onRemove, onEdit }) {
    const extractMonthData = (data) => {
        let obj = {};
        let isValue = null;
        for (let i = 1; i <= 12; i++) {
            obj[i] = 0;
        }
        data.map((item, i) => {
            if (item.paid) {
                isValue = parseInt(item.date.split('-')[1])
                obj[isValue] = obj[isValue] ? parseInt(item.amount) + parseInt(obj[isValue]) : parseInt(item.amount);
            }
        })
        return obj;
    }
    let monthData = Object.values(extractMonthData(data))
    return (

        <View style={{ margin: 20 }}>
            <Text>Amount Paid Chart</Text>
            <ScrollView horizontal={true} alwaysBounceHorizontal={true}>
                <LineChart
                    data={{
                        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        datasets: [
                            {
                                data: monthData || []
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width - 40} // from react-native
                    height={220}
                    yAxisLabel="Rs."
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: THEMER.CHART_BG_COLOR,
                        backgroundGradientFrom: THEMER.CHART_BG_GRADIENT_FROM,
                        backgroundGradientTo: THEMER.CHART_BG_GRADIENT_TO,
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </ScrollView>
        </View>

    )
}




const styles = StyleSheet.create({


});
