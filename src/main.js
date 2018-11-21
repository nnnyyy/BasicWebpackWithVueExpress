/**
 * Created by nnnyyy on 2018-11-21.
 */
import './css/style.css'
import Vue from 'vue'
import App from './App.vue'
import Global from './global.js'

new Global();

new Vue({
    el: '#app',
    render: h => h ( App )
});