import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {white,purple,gray} from '../utils/colors'
import {View,Text,TouchableOpacity,Platform,StyleSheet} from 'react-native'

class DeckView extends Component{
  static navigationOptions = ({navigation})=>{
    const {deckTitle}= navigation.state.params
 return {
      title: deckTitle
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.info}>
            <Text style={styles.title}>{this.props.deck.title}</Text>
            <Text style={styles.cardCount}>{this.props.deck.questions.length} Cards</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={ Platform.OS ==='ios'? styles.iosSubmitBtn: styles.androidSubmitBtn}
            onPress={()=>this.props.navigation.navigate(
            'AddCard', {deckTitle: this.props.deck.title}
          )}>
            <Text style={styles.submitBtnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ Platform.OS ==='ios'? styles.iosSubmitBtn: styles.androidSubmitBtn}
            onPress={()=>{ this.props.resetQuizScore()
            this.props.navigation.navigate(
              'Quiz', {deckTitle: this.props.deck.title, questionNumber:0}
            )}}>
            <Text style={styles.submitBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles= StyleSheet.create({
  container: {flex:1,alignItems: 'center',justifyContent:'center'},
  row: {flex:1,flexDirection:'row'},
  info: {alignItems:'center',justifyContent: 'center'},
  title: {fontSize:48},
  cardCount: {fontSize:30,color:gray},
  footer: {alignItems:'center'},
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


function mapStateToProps ({decks},{navigation}){
  return{
    deck: Object.values(decks).filter(deck=> deck.title===navigation.state.params.deckTitle)[0]
  }
}

export default connect(mapStateToProps,actions)(DeckView)
