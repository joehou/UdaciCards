import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {View,Text,TouchableOpacity} from 'react-native'


class QuizView extends Component {
  state={
    questionNumber:0,
    showAnswer:false
  }

  toggleQuestionAnswer(){
    this.setState({showAnswer:!this.state.showAnswer})
  };

  render(){
    if (this.state.questionNumber+1>this.props.questionCount){
      return (
        <View>
          <Text>All done</Text>
          <Text>Youve answered {this.props.questionsCorrect} for correct out of {this.props.questionCount} for { (this.props.questionsCorrect*100)/this.props.questionCount}% </Text>
          <TouchableOpacity onPress={_=>{ this.props.resetQuizScore()
                                          this.props.navigation.navigate('Quiz', {deckTitle: this.props.currentDeck.title})}}>
            <Text>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_=>{ this.props.navigation.goBack()}}>
            <Text>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return(
      <View>
        <Text>{this.state.questionNumber+1} of {this.props.questionCount}</Text>
        <Text>{this.props.questionsCorrect} correct</Text>
        {this.state.showAnswer !== true
          ? <View><Text>{this.props.currentDeck.questions[this.state.questionNumber].question}</Text><TouchableOpacity onPress={_=>this.toggleQuestionAnswer()}><Text>Answer</Text></TouchableOpacity></View>
          : <View><Text>{this.props.currentDeck.questions[this.state.questionNumber].answer}</Text><TouchableOpacity onPress={_=>this.toggleQuestionAnswer()}><Text>Question</Text></TouchableOpacity></View>
        }
        <TouchableOpacity onPress={_=>{ this.props.addQuizScore()
                                        this.setState({questionNumber:this.state.questionNumber+1})
        }}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_=>{ this.setState({questionNumber:this.state.questionNumber+1})}}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStatetoProps({decks,quiz},{navigation}){
  const deck=Object.values(decks).filter(deck=> deck.title===navigation.state.params.deckTitle)[0]

  return{
    currentDeck: deck,
    questionNumber:navigation.state.params.questionNumber,
    questionCount: deck.questions.length,
    questionsCorrect: quiz.questionsCorrect
  }
}

export default connect(mapStatetoProps,actions)(QuizView)