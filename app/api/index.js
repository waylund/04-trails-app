import firebase from 'firebase';
// Required for side-effects
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyASPY2Mft8wg27cj-Db_B2MjU4ycvVYnmE',
  authDomain: 'brcn-trails-app.firebaseapp.com',
  projectId: 'brcn-trails-app',
});

const db = firebase.firestore();

export const getConditionsApi = () =>
  db
    .collection('conditions')
    .get()
    .then(querySnapshot => {
      const conditions = [];

      querySnapshot.forEach(doc => conditions.push({ id: doc.id, ...doc.data() }));

      return conditions;
    });

export const postConditionApi = newCondition => db.collection('conditions').add(newCondition);
