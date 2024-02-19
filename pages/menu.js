import RecyclerviewList, { DataSource } from 'react-native-recyclerview-list';

var rawdata = [
    { id: 1, text: 'Register a Traffic Violation' },
    { id: 2, text: 'Issue a Ticket' },
    { id: 3, text: 'Accept Payment' },
    { id: 4, text: 'Register an Emergency' }
  ];

var dataSource = new DataSource(rawdata, (item, index) => item.id);

const Render = () => {
    return (
        <RecyclerviewList
            dataSource={dataSource}
            renderRow={(item, index) => (
                <View style={styles.item}>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            )}
        />
    );
}

export default Render;