import React from "react";
import { Link } from "react-router-dom";


const ProductCategory = ({category}) => {

    const categoryUrl = '/products/${category}';

    const handleClick = () =>{
        window.location.href = categoryUrl;
    }
    

    return(
        <button onClick={handleClick}>
            <Link to={categoryUrl}>{category}</Link>
        </button>
    )
};

export default ProductCategory;