import { Component } from 'react';
import Scanlators from './Scanlators.js';

class Groups extends Component {
  constructor() {
    super();
    this.state = {
        urls: [
            {
                name: "Leviatan Scans",
                url: "https://leviatanscans.com/manga/feed/"
            },
            {
                name: "Method Scans",
                url: "https://methodscans.com/feed"
            },
            {
                name: "Zero Scans",
                url: "https://zeroscans.com/feed"
            },
            {
                name: "Hatigarm Scanz",
                url: "https://hatigarmscanz.net/feed"
            },
            {
                name: "SK Scans",
                url: "https://skscans.com/manga/feed/"
            },
            {
                name: "Edelgarde Scans",
                url: "https://edelgardescans.com/feed"
            },
            {
                name: "Asura Scans",
                url: "https://www.asurascans.com/feed"
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