import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let users = [
  { id: 1, name: "Lilia" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Alina" },
  { id: 4, name: "Kolia" },
  { id: 5, name: "Andrew" },
];

let messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Hi, how are you?" },
  { id: 3, message: "Please give me this book!" },
];

let posts = [
  { id: 1, post: "Hi, thank you!", likeCount: 3 },
  { id: 2, post: "Hi, thank you!", likeCount: 7 },
];

ReactDOM.render(
  <React.StrictMode>
    <App users={users} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
