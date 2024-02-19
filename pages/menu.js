import { Button, View, StyleSheet, Text } from 'react-native';

export default Menu = () => {

    const TrafficViolation = () => {
        console.log('Registered a Traffic Violation');
    }

    const IssueTicket = () => {
        console.log('Issued a Ticket');
    }

    const AcceptPayment = () => {
        console.log('Accepted Payment');
    }

    const Emergency = () => {
        console.log('Emergency');
    }

    const sos = () => {
        console.log('SOS');
    }

    return (
        <View style={styles.container}>

            <Text
            style={styles.heading}>Some Heading</Text>

            <Text
            style={styles.text}
            onPress={TrafficViolation}>Register Traffic Violation</Text>

            <Text
            style={styles.text}
            onPress={IssueTicket}>Issue Ticket</Text>

            <Text
            style={styles.text}
            onPress={AcceptPayment}>AcceptPayment</Text>

            <Text
            style={styles.text}
            onPress={Emergency}>Emergency</Text>

            <Text 
            style={styles.sos}
            onPress={sos}>SOS</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    sos : {
        backgroundColor: 'rgba(255, 100, 100, 0.8)',
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginTop: 70,
        fontWeight: 'bold',
    },
    text : {
        flex: 0.05,
        textAlign: 'center',
        width: '90%',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 20,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'lightblue',
    },
    heading : {
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 27,
        marginBottom: 20,
    },
});