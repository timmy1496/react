import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'YO'},
    {id: 4, message: 'YO'},
    {id: 5, message: 'YO'},
    {id: 6, message: 'YO'}
];

let postsData = [
    {id: 1, likeCount: 4, message: 'Hi, how are you?'},
    {id: 2, likeCount: 22, message: 'It\'s my first post'},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
