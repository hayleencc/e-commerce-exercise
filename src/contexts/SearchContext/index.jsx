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
  const [maxQuantityProduct, setMaxQuantityProduct] = useState(1);
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [order, setOrder] = useState("Name");
  const [categories, setCategories] = useState([]);
  const [selectedRate, setSelectedRate] = useState(1);
  const [rateProduct, setRateProduct] = useState(1);
  const [cartProducts, setCartProducts] = useState([]); // [ { id: 1, quantity: 1 }, { id: 2, quantity: 2 }
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

  const addProductToCart = (title, image, price, quantity, ) => {
    const productIndex = cartProducts.findIndex((cartProduct) => cartProduct.title === title);
    if (productIndex === -1) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, { title: title, image: image, price: price, quantity: quantity }]);
    } else {
      setCartProducts((prevCartProducts) => {
        const newCartProducts = [...prevCartProducts];
        newCartProducts[productIndex].quantity += quantity;
      });
    }
  }
  

  const searchedProducts = products
  .filter((product) => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  })
  .sort((a, b) => filterProductsByPriceOrName(a, b, order)).filter((product) => {
    if (categories.length === 0) {
      return product.rating.rate >= selectedRate;
    }
    return categories.includes(product.category) && product.rating.rate >= selectedRate;
  });


function filterProductsByPriceOrName(a, b, order) {
  if (order === "Name") {
    return a.title.localeCompare(b.title);
  }
  else if (order === "Price_Low") {
    return a.price - b.price;
  }
  else if (order === "Price_High") {
    return b.price - a.price;
  }
  else {
    console.warn("Invalid sorting order value");
    return 0;
  }
}

const modifyingCategories = (id) => {
  setCategories((prevCategories) => {
    const categoryExists = prevCategories.includes(id);

    if (categoryExists) {
      return prevCategories.filter((category) => category !== id);
    } else {
      return [...prevCategories, id];
    }
  });
};



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
        categories,
        setCategories,
        modifyingCategories,
        selectedRate,
        setSelectedRate,
        rateProduct,
        setRateProduct,
        quantityProduct,
        setQuantityProduct,
        maxQuantityProduct,
        setMaxQuantityProduct,
        cartProducts,
        setCartProducts,
        addProductToCart
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
