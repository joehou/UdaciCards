import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {StackNavigator,TabNavigator} from 'react-navigation'
import reducers from './reducers'
import DecksList from './components/DecksList'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import AddDeckView from './components/AddDeckView'
import AddCardView from './components/AddCardView'
import {white,purple} from './utils/colors'

const Tabs = TabNavigator({
  Decks: {
    screen: DecksList
  },
  AddDeck: {
    screen: AddDeckView,
    navigationOptions:{
      tabBarLabel: 'Add deck'
    }
  }
})

const MainNavigator= StackNavigator({
  Home: {
    screen: Tabs
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
      title:"Add Card",
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
          <MainNavigator/>
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
