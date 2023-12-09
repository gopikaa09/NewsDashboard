
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import style from './news.module.css';

// function NewsList() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get('https://newsapi.org/v2/everything?q=tesla&from=2023-11-09&sortBy=publishedAt&apiKey=4f56938e531c4be0a844ca068ceade73')
//       .then((res) => {
//         setData(res.data.articles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className={style.container}>
//       {data ? (
//         data.map((val, index) => (
//           <div className={style.cards} key={index}>
//             <img src={val.urlToImage} alt={val.title} />
//             <p className={style.title}>{val.title}</p>
//             <Link to={`/items/${encodeURIComponent(val)}`}>Read more</Link>
//           </div>
//         ))
//       ) : (
//         <h1>Loading</h1>
//       )}
//     </div>
//   );
// }

// export default NewsList;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './news.module.css';
import Header from './Header';

function NewsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/everything?q=tesla&from=2023-11-09&sortBy=publishedAt&apiKey=4f56938e531c4be0a844ca068ceade73')
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
    <Header/>
    <div className={style.container}>
      {data ? (
        data.map((val, index) => (
          <div className={style.cards} key={index}>
            <img src={val.urlToImage} alt={val.title} />
            <p className={style.title}>{val.title}</p>
            <Link className={style.button} to={`/items/${index}`}>Read more</Link>
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
    </div>
  );
}

export default NewsList;
