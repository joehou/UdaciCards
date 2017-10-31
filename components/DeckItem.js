import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Platform} from 'react-native'
import {white,purple} from '../utils/colors'

class DeckItem extends Component {
  render () {
    return(
      <View style={styles.item} key={this.props.deck.title}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(
          'Deck',{deckTitle: this.props.deck.title}
        )}>
          <Text>{this.props.deck.title}</Text>
          <Text>{this.props.deck.questions.length} Cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  item:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:white,
    borderRadius: Platform.OS==="ios" ? 16: 2,
    padding:20,
    marginLeft:10,
    marginRight:10,
    marginTop: 17,
    justifyContent:'center',
    shadowRadius: 3,
    shadowOpacity:0.8,
    shadowColor: '(rgba(0,0,0,25)',
    shadowOffset: {
      width: 0,
      height:3
    }
  },
  noDataText:{
    fontSize:20,
    paddingTop:20,
    paddingBottom:20
  }
})

export default DeckItem