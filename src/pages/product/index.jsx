import React, {useState, useEffect} from "react";
import Layout from "../../components/layout/Layout";
import { API_URL } from "../../constants/url";
import { useParams } from "react-router-dom";
import ViewProduct from "../../components/ViewProduct";

export default function Product() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {id} = useParams();

    useEffect(() => {
      async function getProduct(url) {
        try {
          setIsLoading(true);
          setIsError(false);
  
          const response = await fetch(url);
          const json = await response.json();

          setProduct(json);
        } catch(error) {
          console.log(error);
          setIsError(true);
        } finally {
          setIsLoading(false)
        }
      }
      
      getProduct(API_URL + "/" + `${id}`);
  
    }, [id]);
  
    if(isLoading) {
      return <div>Loading...</div>
    }
  
    if(isError) {
      return <div>Error</div>
    } 

    return (
        <div>
            <ViewProduct product={product}/>
        </div>
    )
}

