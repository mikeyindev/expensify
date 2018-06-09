import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBJ1M7YNvDMe3638cfodgcodsxycXSdj-Q",
  authDomain: "expensify-3872d.firebaseapp.com",
  databaseURL: "https://expensify-3872d.firebaseio.com",
  projectId: "expensify-3872d",
  storageBucket: "expensify-3872d.appspot.com",
  messagingSenderId: "974331806528"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Mike Yin'
});