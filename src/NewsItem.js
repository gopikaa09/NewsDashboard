import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./news.module.css"

function NewsItem() {
  const { index } = useParams();
  const [itemData, setItemData] = useState();
  console.log(index);
  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/everything?q=tesla&from=2023-11-09&sortBy=publishedAt&apiKey=4f56938e531c4be0a844ca068ceade73')
      .then((res) => {
        setItemData(res.data.articles[index]); // Fetching specific item data using index
      })
      .catch((err) => {
        console.log(err);
      });
  }, [index]);
  console.log(itemData);
  return (
    <div className={style.main}>
      {itemData ? (
        <div className={style.itemcontainer}>
          <div className={style.leftcon}>
          <img src={itemData.urlToImage}></img>
          </div>
          <div className={style.rightcon}>
          <h2>{itemData.title}</h2>
          <p>Author name : {itemData.author}</p>
          <p>Published At : {itemData.publishedAt}</p>
          <p>{itemData.description}</p>
          <a href={itemData.url}>Learn More...</a>
          </div>
          
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default NewsItem;


