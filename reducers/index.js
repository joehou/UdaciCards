import {RECEIVE_DECKS,ADD_QUIZ_SCORE,RESET_QUIZ_SCORE,ADD_CARD_TO_DECK,ADD_NEW_DECK} from '../actions'

function decks (state={},action){
  switch(action.type){
    case ADD_NEW_DECK:
      console.log('from reducers')
      console.log(action.deck)
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD_TO_DECK:
      console.log(action)
      return {
        ...state,
        [action.card.deckTitle]: {...state[action.card.deckTitle],
          questions: [...state[action.card.deckTitle].questions,action.card.question]
        }
      }
    case RECEIVE_DECKS:
      return{
        ...state,
        ...action.decks
      }
  default:
    return state
  }
}

function quiz(state={questionsCorrect:0},action){
  switch(action.type){
    case ADD_QUIZ_SCORE:
      return{
        ...state,
        questionsCorrect: state.questionsCorrect+1
      }
    case RESET_QUIZ_SCORE:
      return{
        ...state,
        questionsCorrect: 0
      }
    default:
      return state
  }
}

export default {decks,quiz}