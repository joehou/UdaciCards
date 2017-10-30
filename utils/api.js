import {AsyncStorage} from 'react-native'
import {getDummyData,CARDS_STORAGE_KEY} from "./helper"

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
      decks.React.questions=[...decks.React.questions,card]
      AsyncStorage.setItem(CARDS_STORAGE_KEY,JSON.stringify(decks))
    })

}