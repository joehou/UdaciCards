import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addCardToDeck} from "../actions/index";
import {addCard} from "../utils/api";
import {View,Text,TextInput,TouchableOpacity} from 'react-native'

class AddCardView extends Component {
  state = {
    question: "",
    answer: ""
  }

  render(){
    return(
      <View>
        <Text>We be adding cards</Text>
        <TextInput
          onChangeText={(question)=>this.setState({question})}
          placeholder="question"
          value={this.state.question}
        />
        <TextInput
          onChangeText={(answer)=>this.setState({answer})}
          placeholder="Answer"
          value={this.state.answer}
        />
        <TouchableOpacity onPress={ ()=>{
          this.props.dispatch(addCardToDeck({deckTitle:this.props.navigation.state.params.deckTitle,question:this.state}))
          addCard(this.state)
          this.props.navigation.goBack()
        }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}




export default connect()(AddCardView)