import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";


class App extends React.Component {
    async onSearchSubmit (term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers:{
                Authorization: 'Client-ID 9-pbcuV0eoQFJL3B2jVgbCrRME1Ly1vnD47QhBjUdgM',
            },
        })
        console.log(response.data.results);
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;