import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/ index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwmSfm6cIdsAJgrcfpMgAlGJh0aL1Jwj4",
  authDomain: "vite-project-37be3.firebaseapp.com",
  projectId: "vite-project-37be3",
  storageBucket: "vite-project-37be3.appspot.com",
  messagingSenderId: "173715233343",
  appId: "1:173715233343:web:d0ede4eb6d66abe8bd368a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createApp(App).use(VueRouter).mount("#app"); // 変更
