import React from "react";

function ResultItem({ MovieData, viewResult}) {
    return (
        <div className="resultListItem" onClick={() => viewResult(MovieData)}>
    <h3>{MovieData.Title}</h3>
</div>
    );
};

export default ResultItem;

