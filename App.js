import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {StackNavigator} from 'react-navigation'
import reducers from './reducers'
import DecksList from './components/DecksList'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import AddCardView from './components/AddCardView'
import {white,purple} from './utils/colors'

const MainNavigator= StackNavigator({
  Home: {
    screen: DecksList
  },
  Deck: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: {
      title:"quiz",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  AddCard: {
    screen: AddCardView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(combineReducers(reducers))}>
        <View style={styles.container}>
          <Text>From App</Text>
          <MainNavigator/>
          <Text>After n</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
