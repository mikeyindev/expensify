import * as firebase from 'firebase';
import api from '../util';

const config = {
  apiKey: config.apiKey,
  authDomain: "expensify-3872d.firebaseapp.com",
  databaseURL: "https://expensify-3872d.firebaseio.com",
  projectId: "expensify-3872d",
  storageBucket: "expensify-3872d.appspot.com",
  messagingSenderId: "974331806528"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Mike Yin'
}).then(() => {
  console.log('Data is saved.');
}).catch((error) => {
  console.log('This failed: ', error);
});

