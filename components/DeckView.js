import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View,Text,TouchableOpacity} from 'react-native'

class DeckView extends Component{
  render(){
    console.log(this.props.navigation)
    return(
      <View>
        <Text>{this.props.deck.title}</Text>
        <Text>{this.props.deck.questions.length}</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(
            'AddCard', {deckTitle: this.props.deck.title}
        )}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(
          'Quiz', {deckTitle: this.props.deck.title, questionNumber:0}
        )}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (state,{navigation}){
  return{
    deck: Object.values(state).filter(deck=> deck.title===navigation.state.params.deckTitle)[0]
  }
}

export default connect(mapStateToProps)(DeckView)
