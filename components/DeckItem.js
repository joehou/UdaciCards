import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

class DeckItem extends Component {
  render () {
    return(
      <View key={this.props.deck.title}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(
          'Deck',{deckTitle: this.props.deck.title}
        )}>
          <Text>{this.props.deck.title}</Text>
          <Text>{this.props.deck.questions.length} cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckItem