import React,{Component} from 'react'
import {View,Text,FlatList} from 'react-native'
import {connect} from 'react-redux'
import {getDecks} from '../utils/api'
import {receiveDecks} from "../actions/index";
import DeckItem from './DeckItem'

class DecksList extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    getDecks().then((decks)=>dispatch(receiveDecks(decks)))
  }

  render(){
    return(
      <View style={{flex:1}}>
        <FlatList data={this.props.decks}
                  renderItem={({item})=><DeckItem deck={item} navigation={this.props.navigation} />}
                  keyExtractor={(item) => item.title}
        />
      </View>
    )
  }
}

function mapStateToProps ({decks}) {
  return {
    decks: Object.values(decks)
  }

}

export default connect(mapStateToProps)(DecksList)