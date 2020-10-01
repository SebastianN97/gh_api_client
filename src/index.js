
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

 let apiUrl;
 if (process.env.NODE_ENV == "production") {
   apiUrl = "https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000"
 } else {
   apiUrl = ""
 }

 axios.defaults.baseUrl = apiUrl;
 ReactDOM.render(<App />, document.getElementById("root"));

 serviceWorker.unregister();