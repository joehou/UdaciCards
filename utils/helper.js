import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

export const CARDS_STORAGE_KEY = 'UdaciCards:cards'
export const NOTIFICATION_KEY ="UdaciCards:notifications"

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function getDummyData(){
  AsyncStorage.setItem(CARDS_STORAGE_KEY,JSON.stringify(initialData))
  return initialData
}

export function createEmptyDeck(deckName){
  return { [deckName]: {
      title: deckName,
      questions: []
    }
  }
}

export function clearLocalNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
export function createNotification(){
  return {
    title: "do your cards",
    body: "Dont forget to log your stats for today",
    ios: { sound:true},
    android: {
      sound:true,
      priority: 'high',
      sticky: 'false',
      vibrate: true
    }
  }
}
export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}