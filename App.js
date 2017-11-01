import React from 'react';
import { StyleSheet, Text, View,StatusBar,Platform } from 'react-native';
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
import {Constants} from 'expo'
import {setLocalNotification} from './utils/helper'

function UdaciStatusBar ({backgroundColor,...props}){
  return (
    <View style={ {backgroundColor ,height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

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
},{
  tabBarOptions:{
    activeTintColor: Platform.OS==="ios"?purple: white,
    style: {
      height: 56,
      backgroundColor: Platform.OS==="ios"?white:purple,
    }
  }
})

const MainNavigator= StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'UdaciCards',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
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
  componentDidMount(){
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(combineReducers(reducers))}>
        <View style={{flex:1}}>
          <UdaciStatusBar backgroundColor ={purple} barStyle='light-content' />
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}

