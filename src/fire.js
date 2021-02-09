import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBzTwk_zBphaR3TKCvLMmu0mhDRpPEEMUo",
    authDomain: "family-budget-planner.firebaseapp.com",
    projectId: "family-budget-planner",
    storageBucket: "family-budget-planner.appspot.com",
    messagingSenderId: "469422477623",
    appId: "1:469422477623:web:4203e643a4971f85278ab2"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;