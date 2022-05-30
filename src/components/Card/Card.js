import React from "react";
import "./Card.scss";
import unliked from "../../img/unliked.svg";
import liked from "../../img/liked.svg";
const Card = ({ obj, setFavorites, favorites }) => {
   const [like, setLike] = React.useState(obj.like);
   const onAddToFavorite = (obj) => {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
         setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
         obj.like = false;
      } else {
         setFavorites((prev) => [...prev, obj]);
         obj.like = true;
      }
      setLike(!like);
   };
   return (
      <div
         className="cardWrap"
         style={{
            backgroundImage: `url(${obj.url})`,
         }}
      >
         <div className="likeBlock" style={{ display: like && "flex" }}>
            <img
               src={like ? liked : unliked}
               onClick={() => onAddToFavorite(obj)}
            ></img>
         </div>
      </div>
   );
};

export default Card;
