import React from 'react';

class ResultsList extends React.Component {

    render() {

        return (
            <div>
                {this.props.results.Search.map(result => <h1>{result.Title}</h1>)}
            </div>
        )
    }
}

export default ResultsList;