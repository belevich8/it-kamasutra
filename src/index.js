import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: "9" },
    { id: 2, message: "I'm fine thank you!", likesCount: "12" },
    { id: 2, message: "blablabla", likesCount: "4" },
    { id: 2, message: "hahaha", likesCount: "8" },
]
let users = [
    { id: 1, user: "Vasilich" },
    { id: 2, user: "Katya" },
    { id: 3, user: "Andrey" },
    { id: 4, user: "Dmitriy" },
    { id: 5, user: "Sveta" },
    { id: 6, user: "Masha" }
]
let messages = [
    { id: 1, message: "Hello!" },
    { id: 2, message: "Hi!" },
    { id: 3, message: "How, are you?" },
    { id: 4, message: "I'm fine, and you?" },
    { id: 5, message: "I'm fine too;)" },
    { id: 5, message: "Oo, thats cool" }
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} users={users} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
