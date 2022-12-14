import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";


class App extends React.Component {
    state = {
        images: [],
    }

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers:{
                Authorization: 'Client-ID 9-pbcuV0eoQFJL3B2jVgbCrRME1Ly1vnD47QhBjUdgM',
            },
        })
        this.setState({images: response.data.results });
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;