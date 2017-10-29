import React,{Component} from 'react'
import {connect} from 'react-redux'
import {View,Text,TouchableOpacity} from 'react-native'

class QuizView extends Component {
  state={
    showAnswer:false
  }

  render(){


    return(
      <View>
        <Text>{this.props.question.question}</Text>
        <TouchableOpacity onPress={/*dispatch to update score and navigate*/}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={/*dispatch to update score and navigate*/}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStatetoProps(state,{navigation}){
  const deck=Object.values(state).filter(deck=> deck.title===navigation.state.params.deckTitle)[0]

  return{
    question: deck.questions[navigation.state.params.questionNumber],
    questionNumber:navigation.state.params.questionNumber
  }
}

export default connect(mapStatetoProps)(QuizView)