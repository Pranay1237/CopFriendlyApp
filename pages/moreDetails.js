import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import jsonData from '../violators.json';

export default MoreDetails = ({ navigation, route }) => {

    const number = route.params.number;
    
    const violator = jsonData.find(v => v.drivingLicense === number);

    const changeTime = (time) => {
        const timeString = new Date(time).toISOString();
        const timeOnly = timeString.split("T")[1].substring(0, 5);
        const [hours, minutes] = timeOnly.split(":");
        const twelveHourFormat = (parseInt(hours, 10) % 12).toString();
        const amOrPm = parseInt(hours, 10) >= 12 ? "PM" : "AM";
        const formattedTime = `${twelveHourFormat}:${minutes} ${amOrPm}`;
        return formattedTime;
    }

    const changeDate = (date) => {
        const dateObject = new Date(date);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        const formattedDate = `${day < 10 ? "0" + day : day}-${month < 10 ? "0" + month : month}-${year}`;
        return formattedDate;
    }

    const time = changeTime(violator.time);
    const date = changeDate(violator.date);

    const ticks = [];

    for (let i = 0; i < violator.tickets.length; i++) {
        ticks.push(violator.tickets[i]);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.heading}>Information about the violator</Text>
                    <View style={styles.details}>
                        <Text style={styles.label}>Name</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{violator.violatorName}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Violation Type</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{violator.violationType}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Driving License</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{violator.drivingLicense}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Vehicle Type</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{violator.vehicleType}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Registration Number</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{violator.registrationNumber}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Vehicle Color</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{violator.vehicleColor}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Date</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{date}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Time</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{time}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.label}>Others</Text>
                        <Text> : </Text>
                        <Text style={styles.value}>{violator.others}</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.heading}>Tickets Information</Text>
                    {ticks.map((tick, index) => (
                        <View key={index} style={styles.innerBox}>
                            <Text>Amount : {tick.amount}</Text>
                            <Text>Date : {changeDate(tick.date)}</Text>
                            <Text>Time : {changeTime(tick.time)}</Text>
                            <Text>Location : {tick.location}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    details: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
        width: 100,
    },
    value: {
        flex: 1,
    },
    box: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 20,
    },
    innerBox: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
    },
});