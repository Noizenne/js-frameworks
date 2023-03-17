import { useEffect, useState } from "react"
import { API_URL } from "../../constants/url";
import Layout from "../../components/layout/Layout"
import Products from "../../components/Products";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProducts(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        setProducts(json);
      } catch(error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false)
      }
    }
    
    getProducts(API_URL);

  }, []);

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError) {
    return <div>Error</div>
  }


  return (
  <div>
    <Layout />
    <h1>Products</h1>
    <Products products={products} />
  </div>
  )
}
  