import React from 'react';

function NoResults() {
    return (
        <div style={{display:'flex', padding:'20px', justifyContent:'center', flexDirection:'column'}} >
            <span style={{alignSelf:'center'}} >No results :( </span>
            <br />
            <span>Try another Search.</span>
        </div>
    )
}

export default NoResults;