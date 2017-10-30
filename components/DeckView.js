import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

import {View,Text,TouchableOpacity} from 'react-native'

class DeckView extends Component{
  static navigationOptions = ({navigation})=>{
    const {deckTitle}= navigation.state.params
 return {
      title: deckTitle
    }
  }

  render(){
    return(
      <View>
        <Text>{this.props.deck.title}</Text>
        <Text>{this.props.deck.questions.length}</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(
            'AddCard', {deckTitle: this.props.deck.title}
        )}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{ this.props.resetQuizScore()
                                         this.props.navigation.navigate(
                                         'Quiz', {deckTitle: this.props.deck.title, questionNumber:0}
        )}}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps ({decks},{navigation}){
  return{
    deck: Object.values(decks).filter(deck=> deck.title===navigation.state.params.deckTitle)[0]
  }
}

export default connect(mapStateToProps,actions)(DeckView)
