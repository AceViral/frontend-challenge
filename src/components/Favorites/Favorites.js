import React from "react";
import Card from "../Card/Card";
import "./Favorites.scss";
const Favorites = ({ favorites, setFavorites }) => {
   return (
      <div className="kittiesWrap">
         {favorites
            ? favorites.map((obj) => {
                 return (
                    <Card
                       obj={obj}
                       key={obj.id}
                       favorites={favorites}
                       setFavorites={setFavorites}
                       likeIs={true}
                    />
                 );
              })
            : null}
      </div>
   );
};

export default Favorites;
