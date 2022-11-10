import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//import { seedDatabase } from "../seed";

//config

const config = {
	apiKey: "AIzaSyANxZFbneTSyzkhkHx5F4BtFkI6vjJJE9Y",
	authDomain: "ottwaapp-c3093.firebaseapp.com",
	projectId: "ottwaapp-c3093",
	storageBucket: "ottwaapp-c3093.appspot.com",
	messagingSenderId: "759719982879",
	appId: "1:759719982879:web:a8c549ad5d2b62de28a22a",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
