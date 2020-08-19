import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBr6C9lye_A2DVCylZKcIwM7TDLUc37dWk',
  authDomain: 'chatbox-app-e9211.firebaseapp.com',
  databaseURL: 'https://chatbox-app-e9211.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
