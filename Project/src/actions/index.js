export const dataFetched = "DATA_FETCHED";
export const fetchingData = "FETCHING_DATA";
export const fetchingError = "FETCHING_ERROR";
export const bikesFiltered = "BIKES_FILTERED"

export function fetchData(query, page) {
    return function (dispatch) {
        dispatch({
            type: fetchingData
        });
        
        fetch(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10&query=${encodeURIComponent(query)}&distance=10&stolenness=stolen`)
            .then(response => response.json())
            .then(bikes => {
                fetch(`https://bikeindex.org:443/api/v3/search/count?query=${encodeURIComponent(query)}&distance=10&stolenness=stolen`)
                    .then(response => response.json())
                    .then(bikes_count => {
                        dispatch({
                            type: dataFetched,
                            payload: {
                                bikes_counter: bikes_count.stolen,
                                ...bikes
                            }
                        })
                    })
                    .catch(() => dispatch({
                        type: fetchingError
                    }));
                }
            )
            .catch(() => dispatch({
                type: fetchingError
            }));
    };
}

export function filterBikes(bikes) {
    return function(dispatch) {
        dispatch({
            type: bikesFiltered,
            payload: bikes
        })
    }
}