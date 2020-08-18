import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAgvKKWcthOXzdixnJdaIUFMNLd64xJD90",
    authDomain: "vue-calendar-a3f86.firebaseapp.com",
    databaseURL: "https://vue-calendar-a3f86.firebaseio.com",
    projectId: "vue-calendar-a3f86",
    storageBucket: "vue-calendar-a3f86.appspot.com",
    messagingSenderId: "502460097797",
    appId: "1:502460097797:web:7e04a1fed866707163036c"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
