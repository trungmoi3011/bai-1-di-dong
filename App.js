import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Bước 1 Xác định nhu cầu khách hàng', description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00', time: '20/08/2020, 06:00' },
  { id: '2', title: 'Bạn có khách hàng mới!', description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chòng liên lạc ngay.', time: '20/08/2020, 06:00' },
  { id: '3', title: 'Khách hàng được chia sẻ bị trùng', description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.', time: '20/08/2020, 06:00' },
  { id: '4', title: 'Khách hàng được thêm bị trùng', description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.', time: '20/08/2020, 06:00' },
  { id: '5', title: 'Công việc sắp đến hạn trong hôm nay', description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.', time: '20/08/2020, 06:00' },
  { id: '6', title: 'Công việc đã quá hạn', description: 'Bạn có 17 công việc đã quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.', time: '20/08/2020, 06:00' },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={[
      styles.itemContainer,
      (item.id === '1' || item.id === '2' || item.id === '4') && styles.specialItemContainer
    ]}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  specialItemContainer: {
    backgroundColor: '#f1f8ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343a40',
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#adb5bd',
  },
});

export default App;
