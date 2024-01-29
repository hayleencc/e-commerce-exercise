import { useState, useEffect, createContext } from "react";
import PropsTypes from "prop-types";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [order, setOrder] = useState("");

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  const searchedProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  }).sort((a, b) => {
    if (order === "Name") {
      return a.title.localeCompare(b.title);
    }
    if (order === "Price_Low") {
      return a.price - b.price;
    }
    if (order === "Price_High") {
      return b.price - a.price;
    }
  });




  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        order,
        setOrder,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropsTypes.node.isRequired,
};

export { SearchContext, SearchProvider };
