import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DatePicker from '@react-native-community/datetimepicker';
import { Text, TextInput, View, StyleSheet, Button, ScrollView, ToastAndroid } from "react-native";

export default RegisterViolator = ({ navigation }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const [formData, setFormData] = useState({
        violatorName: '',
        violationType: '',
        drivingLicense: '',
        vehicleType: '',
        RegistrationNumber: '',
        vehicleColor: '',
        date: new Date(),
        time: new Date(),
        location: '',
        others: ''
    });

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleDateChange = date => {
        setFormData(prevState => ({
        ...prevState,
        date: date || prevState.date
        }));
    };

    const handleTimeChange = time => {
        setFormData(prevState => ({
        ...prevState,
        time: time || prevState.time
        }));
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    const hideDatePickerModal = () => {
        setShowDatePicker(false);
    };

    const showTimePickerModal = () => {
        setShowTimePicker(true);
    };

    const hideTimePickerModal = () => {
        setShowTimePicker(false);
    };

    const submitForm = () => {
        if (formData.violatorName === "" || formData.violationType === "" || formData.drivingLicense === "" || formData.vehicleType === "" || formData.RegistrationNumber === "") {
            ToastAndroid.show('Please Enter all the Details', ToastAndroid.SHORT);
            return;
        }
        console.log('Form Submitted');
        ToastAndroid.show('Form Submitted', ToastAndroid.SHORT);
        console.log(formData);
    }

    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Violators Name"
                    value={formData.violatorName}
                    onChangeText={value => handleInputChange('violatorName', value)}
                />

                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={4}
                    placeholder="Violation Type"
                    value={formData.violationType}
                    onChangeText={value => handleInputChange('violationType', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Driving License Number"
                    value={formData.drivingLicense}
                    onChangeText={value => handleInputChange('drivingLicense', value)}
                />

                <Picker
                    style={styles.picker}
                    selectedValue={formData.vehicleType}
                    onValueChange={value => handleInputChange('vehicleType', value)}>
                    <Picker.Item label="Select a Vehicle Type" value="" />
                    <Picker.Item label="Bike" value="Bike" />
                    <Picker.Item label="Car" value="Car" />
                    <Picker.Item label="Bus" value="Bus" />
                    <Picker.Item label="Truck" value="Truck" />
                    <Picker.Item label="Auto" value="Auto" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>

                <TextInput
                    style={styles.input}
                    placeholder="Registration Number"
                    value={formData.RegistrationNumber}
                    onChangeText={value => handleInputChange('RegistrationNumber', value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Vehicle Color"
                    value={formData.vehicleColor}
                    onChangeText={value => handleInputChange('vehicleColor', value)}
                />

                <Text style={styles.input} onPress={showDatePickerModal}>Select Date : {formData.date.toDateString()}</Text>

                {showDatePicker && (
                    <DatePicker
                    value={formData.date}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                        handleDateChange(date);
                        hideDatePickerModal();
                    }}/>
                )}

                <Text style={styles.input} onPress={showTimePickerModal}>Select Time : {formData.time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })}</Text>

                {showTimePicker && (
                    <DatePicker
                    value={formData.time}
                    mode="time"
                    display="default"
                    onChange={(event, time) => {
                        handleTimeChange(time);
                        hideTimePickerModal();
                    }}
                    />
                )}

                <TextInput
                    style={styles.input}
                    placeholder="other"
                    value={formData.others}
                    onChangeText={value => handleInputChange('others', value)}
                />

                <Text style={styles.submit}
                onPress={submitForm}>
                    Add as Violator
                </Text>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    scroll: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1.5,
        borderRadius: 15,
        padding: 10,
        margin: 10,
    },
    picker: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
    },
    submit: {
        width: '90%',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
    },
    textArea: {
        width: '90%',
        height: 100,
        borderColor: 'gray',
        borderWidth: 1.5,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        textAlignVertical: 'top',
    }
});
