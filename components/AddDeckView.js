import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text,View,TextInput,TouchableOpacity,StyleSheet,Platform} from 'react-native'
import {addNewDeck} from "../actions/index";
import {addDeck} from "../utils/api"
import {black,red,white,purple,gray} from '../utils/colors'



class AddDeckView extends Component{
  state ={
    deckTitle:""
  }

  render(){
    return (
      <View style={styles.center}>
        <Text style={styles.question}>What is the title of your new deck</Text>
        <TextInput
          style={styles.text}
          onChangeText={(deckTitle)=>this.setState({deckTitle})}
          placeholder="Deck Title"
          value={this.state.deckTitle}
        />
        <TouchableOpacity
          style={ Platform.OS ==='ios'? styles.iosSubmitBtn: styles.androidSubmitBtn}
          onPress={()=>{
            this.setState({deckTitle:""})
            this.props.dispatch(addNewDeck(this.state.deckTitle))
            addDeck(this.state.deckTitle)
            this.props.navigation.navigate(
              'Deck',{deckTitle: this.state.deckTitle}
              )
          }}>
          <Text style={styles.submitBtnText}>Submit</Text>
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

export default connect()(AddDeckView)