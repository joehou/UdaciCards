import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text,View,TextInput,TouchableOpacity} from 'react-native'
import {addNewDeck} from "../actions/index";
import {addDeck}from "../utils/api"
class AddDeckView extends Component{
  state ={
    deckTitle:""
  }

  render(){
    return (
      <View>
        <Text>Hello from add deck</Text>
        <TextInput
          onChangeText={(deckTitle)=>this.setState({deckTitle})}
          placeholder="Deck Title"
          value={this.state.deckTitle}
        />
        <TouchableOpacity onPress={()=>{
          this.props.dispatch(addNewDeck(this.state.deckTitle))
          addDeck(this.state.deckTitle)
          this.props.navigation.goBack()
        }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddDeckView)