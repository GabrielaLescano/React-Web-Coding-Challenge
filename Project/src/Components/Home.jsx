import React, { useEffect, useState } from 'react';
import BikesCards from './BikesCards.jsx';
import SearchBar from './SearchBar.jsx';

const Home = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=10&stolenness=stolen')
            .then(response => response.json())
            .then(data => setBikes(data.bikes));
    }, [])

    return (
        <div>
            <SearchBar />
            <ol>
                <BikesCards bikes={bikes}></BikesCards>
            </ol>
        </div>
    )
}

export default Home;