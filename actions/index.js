import {createEmptyDeck} from '../utils/helper.js'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_QUIZ_SCORE = 'ADD_QUIZ_SCORE'
export const RESET_QUIZ_SCORE = 'RESET_QUIZ_SCORE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const ADD_NEW_DECK = 'ADD_NEW_DECK'



export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addQuizScore(){
  return {
    type: ADD_QUIZ_SCORE
  }
}

export function resetQuizScore(){
  return {
    type: RESET_QUIZ_SCORE
  }
}

export function addCardToDeck(card){
  return {
    type: ADD_CARD_TO_DECK,
    card
  }
}

export function addNewDeck(deck){
  console.log(deck)
  return {
    type: ADD_NEW_DECK,
    deck: createEmptyDeck(deck)
  }
}
