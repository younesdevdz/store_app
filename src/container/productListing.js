import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "./productComponents";
import { setProducts } from "../redux/actions/productionActions";
import axios from "axios";

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get("http://younesdzdev.pythonanywhere.com/rest/viewsets/Product/?format=json").catch((err)=> {
            console.log("err"+ err)
        })
        dispatch(setProducts(response.data))
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
            fetchProducts()
    } ,[])

    console.log("product :" + products)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4  bg-yellow-100">
            
            <ProductComponents/>
        </div>
    )

}
export default ProductListing