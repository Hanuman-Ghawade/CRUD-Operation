import {View} from 'react-native';
import React from 'react';
import TodoHeader from './src/components/header/TodoHeader';
import TodoList from './src/components/TodoList/TodoList';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <TodoHeader />
        <TodoList />
      </View>
    </Provider>
  );
};

export default App;
