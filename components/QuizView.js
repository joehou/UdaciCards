import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {View,Text,TouchableOpacity,StyleSheet,Platform} from 'react-native'
import {red,white,purple,gray} from '../utils/colors'

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
        <View style={styles.container}>
          <View style={styles.center}>
            <View style={styles.header}>
              <Text>All done</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.question}>{this.props.questionsCorrect} of {this.props.questionCount} for { (this.props.questionsCorrect*100)/this.props.questionCount}% </Text>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity
                style={ Platform.OS ==='ios'? styles.iosSubmitBtn: styles.androidSubmitBtn}
                onPress={_=>{ this.props.resetQuizScore()
                                              this.props.navigation.navigate('Quiz', {deckTitle: this.props.currentDeck.title})}}>
                <Text style={styles.submitBtnText}>Restart Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ Platform.OS ==='ios'? styles.iosSubmitBtn: styles.androidSubmitBtn}
                onPress={_=>{ this.props.navigation.goBack()}}>
                <Text style={styles.submitBtnText}>Back to Deck</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }

    return(
      <View style={styles.container}>

        <View style={styles.center}>
          <View style={styles.header}>
            <Text>{this.state.questionNumber+1} of {this.props.questionCount}</Text>
            <Text>{this.props.questionsCorrect} correct</Text>
          </View>
            {this.state.showAnswer !== true
              ? <View style={styles.content}><Text style={styles.question}>{this.props.currentDeck.questions[this.state.questionNumber].question}</Text><TouchableOpacity onPress={_=>this.toggleQuestionAnswer()}><Text style={{color:red}}>Answer</Text></TouchableOpacity></View>
              : <View style={styles.content}><Text style={styles.answer}>{this.props.currentDeck.questions[this.state.questionNumber].answer}</Text><TouchableOpacity onPress={_=>this.toggleQuestionAnswer()}><Text style={{color:red}}>Question</Text></TouchableOpacity></View>
            }
          <View style={styles.footer}>
            <TouchableOpacity
              style={ Platform.OS ==='ios'? styles.iosSubmitBtn: styles.androidSubmitBtn}
              onPress={_=>{ this.props.addQuizScore()
              this.setState({questionNumber:this.state.questionNumber+1})
            }}>
              <Text style={styles.submitBtnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ Platform.OS ==='ios'? styles.iosSubmitBtn: styles.androidSubmitBtn}
              onPress={_=>{ this.setState({questionNumber:this.state.questionNumber+1})}}
            >
              <Text style={styles.submitBtnText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {flex:1,},
  center: {flex:1,flexDirection:'column',justifyContent:'space-between'},
  header: {alignSelf:'stretch',width:100,paddingTop:10,alignItems: 'flex-start',justifyContent:'flex-start'},
  content: {padding:10,alignItems: 'center',justifyContent:'center'},
  question: {fontSize:40},
  answer: {fontSize:30,color:gray},
  footer: {alignItems:'center',justifyContent:'center'},
  iosSubmitBtn: {
    backgroundColor: purple,
    padding:10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom:10
  },
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft:30,
    paddingRight: 30,
    height: 45,
    marginBottom:10,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  submitBtnText:{
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
})



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