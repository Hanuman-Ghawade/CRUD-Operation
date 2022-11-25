import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './TodoHeaderStyle';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../redux/slices/TodoSlice';

const TodoHeader = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('Please enter a Task');
      setTodo('');
      return;
    }
    dispatch(addTodo({task: todo}));
  };
  return (
    <View>
      <Text style={styles.todoText}>Todo List</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Add Todo"
          onChangeText={text => setTodo(text)}
        />
        <TouchableOpacity style={styles.addStyle} onPress={onSubmitTask}>
          <Text style={styles.addText}> Add </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;
