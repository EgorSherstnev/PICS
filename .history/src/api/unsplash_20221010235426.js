import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID 9-pbcuV0eoQFJL3B2jVgbCrRME1Ly1vnD47QhBjUdgM',
    },
})