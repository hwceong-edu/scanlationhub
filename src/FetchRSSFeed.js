import { Component } from "react";
import Entry from "./Entry";

class FetchRSSData extends Component{
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    fetchRSS() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                var myObj = JSON.parse(request.responseText);
                myObj.items.forEach(item => {
                    this.setState((state) => {
                        return {items: this.state.items.concat(item)}
                    });
                });
            }
        }
        const rss2json = 'https://api.rss2json.com/v1/api.json?rss_url=';
        request.open("GET", rss2json + this.props.url, true);
        request.send();
        
    }

    componentDidMount() {
        this.fetchRSS();
    }   

    render() {
        const feed = [].concat(this.state.items);
        // try {
        //     feed.sort((a,b) => {
        //         return a.pubDate < b.pubDate ? 1 : -1;
        //     });
        // } catch {}

        return (
            <div className="scrollable-container">
                {feed.map(item => (
                    <Entry title={item.title.split("-")[0]} chapter={item.title.split("-")[1]} date={item.pubDate} link={item.link}/>
                ))}
            </div>
        );
        
    }

}

export default FetchRSSData;