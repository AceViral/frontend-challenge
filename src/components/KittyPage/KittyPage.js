import React from "react";
import Card from "../Card/Card";
import "./KittyPage.scss";
const KittyPage = ({ kitties, setFavorites, favorites }) => {
   return (
      <div className="kittiesWrap">
         {kitties.map((obj) => {
            return (
               <Card
                  obj={obj}
                  key={obj.id}
                  favorites={favorites}
                  setFavorites={setFavorites}
               />
            );
         })}
      </div>
   );
};

export default KittyPage;
