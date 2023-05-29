import React from "react";
import { useSelector } from "react-redux";


const ProductDetail = () => {
    const product = useSelector((state) => state)

    return (
        <div className="for colum wide">
            <div className="ui link card">
                <div className="car">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ProductDetail