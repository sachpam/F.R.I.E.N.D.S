import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import ShowDetails from "./components/ShowDetails";
import Episodes from "./components/Episodes";

function App() {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [items4, setItems4] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [query, setQuery] = useState("");

  const handleSearch = (str) => {
    // console.log(str);
    // console.log(items);
    if (str === "") {
      fetchItems();
    } else {
      const filteredArr = items.filter((item) => {
        console.log(item.person.name);
        return item.person.name.toLowerCase().includes(str.toLowerCase());
      });
      console.log(filteredArr);
      setItems(filteredArr);
    }
  };

  const fetchItems = async () => {
    const result = await axios(`https://api.tvmaze.com/shows/431/cast`);

    console.log(result.data);

    setItems(result.data);
    await fetchItems2();
    await fetchItems3();
    setIsLoading(false);
  };

  const fetchItems2 = async () => {
    const result2 = await axios(`https://api.tvmaze.com/shows/431`);

    console.log(result2.data);

    setItems2(result2.data);
    // setIsLoading(false);
  };
  const fetchItems3 = async () => {
    const result3 = await axios(` https://api.tvmaze.com/shows/431/seasons`);
    const result4 = await axios(`https://api.tvmaze.com/shows/431/episodes`);

    console.log(result3.data);
    console.log(result4.data);

    setItems3(result3.data);
    setItems4(result4.data);
  };

  useEffect(() => {
    fetchItems();
    // fetchItems2();
  }, []);

  return (
    <div width="100vw">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="App">
          <Header />

          <ShowDetails items2={items2} />
          <Search getQuery={(q) => handleSearch(q)} />
          <CardGrid isLoading={isLoading} items={items} />
          <Episodes items3={items3} items4={items4} />
        </div>
      )}
    </div>
  );
}

export default App;
