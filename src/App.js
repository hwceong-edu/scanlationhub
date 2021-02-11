import { Component } from 'react';
import './App.css';
import Scanlators from './Scanlators.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: [
          {
              name: "Leviatan Scans",
              url: "https%3A%2F%2Fleviatanscans.com%2Ffeed"
          },
          {
              name: "Method Scans",
              url: "https%3A%2F%2Fmethodscans.com%2Ffeed"
          }
      ]
  }
  }

  render() {
    return (
      <div className="container">
        {this.state.urls.map(item => (
          <Scanlators name={item.name} url={item.url}/>
        ))}
      </div>
    );
  }
  
}

export default App;
