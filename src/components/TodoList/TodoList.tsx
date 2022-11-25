import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './todoListStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {deleteTask, editTask} from '../../redux/slices/TodoSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface itemType {
  id: number;
  title: string;
}
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.task);

  const editTasks = (id, title) => {
    dispatch(editTask({id: id, title: title}));
  };
  const deleteItem = id => {
    // eslint-disable-next-line no-undef
    dispatch(deleteTask({id: id}));
  };
  const renderItem = ({item}: {item: itemType}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => editTasks(item.id, item.title)}>
            <Text style={styles.delete}> Edit </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Text style={styles.delete}> Delete </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={({}, index) => index.toString()}
      />
    </View>
  );
};

export default TodoList;
