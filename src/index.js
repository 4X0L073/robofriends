import React from 'react';
import ReactDOM from 'react-dom/client'; // better performance than 'react-dom' but only works for client side
import './index.css';
import App from './containers/App';
import 'tachyons';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      {
        robots.map((robot)=>(
          <CardList id={robot.id} name={robot.name} email={robot.email}/>))
      }
      </div>
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
