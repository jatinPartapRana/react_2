import React from "react";
import './SearchComponent.scss';


const SearchComponent = (props) =>{
    
    return (
        <input className="form-control mr-sm-2 Search" onChange={props.onInputChange} type="search" placeholder="Search" aria-label="Search"/>
    )
};

export default SearchComponent;