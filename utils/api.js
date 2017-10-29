import {AsyncStorage} from 'react-native'
import {getDummyData,CARDS_STORAGE_KEY} from "./helper"

export function getDecks() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY)
    .then(getDummyData)
}

export function getDeck() {

}