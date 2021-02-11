import { Component } from 'react';
import Scanlators from './Scanlators.js';

class Groups extends Component {
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
            },
            {
                name: "Zero Scans",
                url: "https%3A%2F%2Fzeroscans.com%2Ffeed"
            },
            {
                name: "Hatigarm Scanz",
                url: "https%3A%2F%2Fhatigarmscanz.net%2Ffeed"
            },
            {
                name: "SK Scans",
                url: "https%3A%2F%2Fskscans.com%2Ffeed"
            },
            {
                name: "Edelgarde Scans",
                url: "https%3A%2F%2Fedelgardescans.com%2Ffeed"
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

export default Groups;