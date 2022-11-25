import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    width: '70%',
  },
  delete: {
    fontSize: 16,
    color: 'red',
    padding: 4,
    fontWeight: 'bold',
  },
  button: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
  },
});
export default styles;
