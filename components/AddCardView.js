import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addCardToDeck} from "../actions/index";
import {addCard} from "../utils/api";
import {View,Text,TextInput,TouchableOpacity,Platform,StyleSheet} from 'react-native'
import {black,red,white,purple,gray} from '../utils/colors'

class AddCardView extends Component {
  state = {
    question: "",
    answer: ""
  }

  render(){
    return(
      <View style={styles.center}>
        <Text style={styles.quesetion}>Add Card Info</Text>
        <TextInput
          style={styles.text}
          onChangeText={(question)=>this.setState({question})}
          placeholder="question"
          value={this.state.question}
        />
        <TextInput
          style={styles.text}
          onChangeText={(answer)=>this.setState({answer})}
          placeholder="Answer"
          value={this.state.answer}
        />
        <TouchableOpacity
          style={ Platform.OS ==='ios'? styles.iosSubmitBtn: styles.androidSubmitBtn}
          onPress={ ()=>{
          this.props.dispatch(addCardToDeck({deckTitle:this.props.navigation.state.params.deckTitle,question:this.state}))
          addCard({deckTitle:this.props.navigation.state.params.deckTitle,question:this.state})
          this.props.navigation.goBack()
        }}>
          <Text style={styles.submitBtnText}>Submitted</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {flex:1,},
  center: {flex:1,flexDirection:'column',justifyContent:'flex-start'},
  header: {alignSelf:'stretch',width:100,paddingTop:10,alignItems: 'flex-start',justifyContent:'flex-start'},
  content: {padding:10,alignItems: 'center',justifyContent:'center'},
  question: {fontSize:30,paddingTop:30,paddingBottom:30},
  footer: {alignItems:'center',justifyContent:'center'},
  text: {
    marginTop:10,
    marginLeft:10,
    marginLeft:10,
    marginRight:10,
    borderRadius: 2,
    borderColor:black,
    borderWidth:1,
    borderStyle: 'solid'
  },
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
    marginTop:10,
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


export default connect()(AddCardView)