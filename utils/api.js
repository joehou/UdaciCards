import {AsyncStorage} from 'react-native'
import {getDummyData,createEmptyDeck,CARDS_STORAGE_KEY} from "./helper"

export function getDecks() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(result =>{
        console.log(result)
        return result === null? getDummyData():JSON.parse(result)
      }
    )
}

export function addCard(card) {
  console.log(card)
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(result =>{
      const decks =JSON.parse(result)
      decks[card.deckTitle].questions=[...decks[card.deckTitle].questions,card.question]
      AsyncStorage.setItem(CARDS_STORAGE_KEY,JSON.stringify(decks))
    })
}

export function addDeck(Deck) {
  console.log(Deck)
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(result => {
      let decks= JSON.parse(result)
      decks = {...decks,...createEmptyDeck( Deck)}
      AsyncStorage.setItem(CARDS_STORAGE_KEY,JSON.stringify(decks))
    })
}