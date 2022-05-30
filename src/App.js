import "./App.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router";
import KittyPage from "./components/KittyPage/KittyPage";
import Favorites from "./components/Favorites/Favorites";
import LoadPage from "./components/LoadPage/LoadPage";
function App() {
   const [kitties, setKitties] = useState([]);
   const [favorites, setFavorites] = useState([]);
   const [count, setCount] = useState(10);
   const [isFetching, setIsFetching] = useState([false]);
   const api_key = "5ea89645-e957-4b76-b5df-4065a5866b23";
   let instance = axios.create({
      headers: { "x-api-key": api_key },
   });
   useEffect(() => {
      try {
         const fetchData = async () => {
            setIsFetching(true);
            await instance
               .get(`https://api.thecatapi.com/v1/images/search?limit=${10}`)
               .then((res) => {
                  const data = res.data.map((item) => ({
                     ...item,
                     like: false,
                  }));
                  console.log(data);
                  if (kitties.length === 0) {
                     setKitties(data);
                  } else setKitties([...kitties, data].flat());
                  setIsFetching(false);
               });
         };
         fetchData();
      } catch (error) {
         console.log("ERROR!");
      }
   }, [count]);
   return (
      <div className="App">
         <NavBar />
         <div className="Content">
            <Routes>
               <Route path="/" element={<LoadPage />} />
               <Route
                  path="/kitties"
                  element={
                     isFetching ? (
                        <LoadPage />
                     ) : (
                        <KittyPage
                           kitties={kitties}
                           setFavorites={setFavorites}
                           favorites={favorites}
                        />
                     )
                  }
               />
               <Route
                  path="/favorites"
                  element={
                     <Favorites
                        favorites={favorites}
                        setFavorites={setFavorites}
                     />
                  }
               />
            </Routes>
         </div>
         <div className="footer">
            <button onClick={() => setCount(count + 10)}>
               Добавить еще котиков!!!
            </button>
            <b>Котиков на данный момент: {count}</b>
         </div>
      </div>
   );
}

export default App;
