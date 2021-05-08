import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input
                className="form-control"
                placeholder="Enter a Movie Name..."
                value={props.value}
                onChange={(event) => props.setSearchText(event.target.value)}>
            </input>
        </div>
    )
}

export default SearchBox;