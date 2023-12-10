
// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import style from './news.module.css';

// // function NewsList() {
// //   const [data, setData] = useState([]);
// //   useEffect(() => {
// //     axios
// //       .get('https://newsapi.org/v2/everything?q=tesla&from=2023-11-09&sortBy=publishedAt&apiKey=4f56938e531c4be0a844ca068ceade73')
// //       .then((res) => {
// //         setData(res.data.articles);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }, []);

// //   return (
// //     <div className={style.container}>
// //       {data ? (
// //         data.map((val, index) => (
// //           <div className={style.cards} key={index}>
// //             <img src={val.urlToImage} alt={val.title} />
// //             <p className={style.title}>{val.title}</p>
// //             <Link to={`/items/${encodeURIComponent(val)}`}>Read more</Link>
// //           </div>
// //         ))
// //       ) : (
// //         <h1>Loading</h1>
// //       )}
// //     </div>
// //   );
// // }

// // export default NewsList;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import style from './news.module.css';
// import Header from './Header';

// function NewsList() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://newsapi.org/v2/everything?q=apple&from=2023-12-09&to=2023-12-09&sortBy=popularity&apiKey=4f56938e531c4be0a844ca068ceade73')
//       .then((res) => {
//         setData(res.data.articles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//     <Header/>
//     <div className={style.container}>
//       {data ? (
//         data.map((val, index) => (
//           <div className={style.cards} key={index}>
//             <img src={val.urlToImage} alt={val.title} />
//             <p className={style.title}>{val.title}</p>
//             <Link className={style.button} to={`/items/${index}`}>Read more</Link>
//           </div>
//         ))
//       ) : (
//         <h1>Loading</h1>
//       )}
//     </div>
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
  // State for data, current page, articles per page, and search query
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);
  

  // Function to fetch data based on search query
  const fetchData = () => {
    axios
      .get(`https://newsapi.org/v2/everything?q=apple&from=2023-12-09&to=2023-12-09&sortBy=popularity&apiKey=4f56938e531c4be0a844ca068ceade73`)
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Trigger data fetching when searchQuery changes
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle search input change
 

  // Logic to get current articles for the selected page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      {/* Search Input */}
      
      {/* Display articles */}
      <div className={style.container}>
        {currentArticles.length > 0 ? (
          currentArticles.map((val, index) => (
            <div className={style.cards} key={index}>
              <img src={val.urlToImage} alt={val.title} />
              <p className={style.title}>{val.title}</p>
              <Link className={style.button} to={`/items/${index + indexOfFirstArticle}`}>
                Read more
              </Link>
            </div>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      {/* Pagination */}
      <div>
        {data.length > 0 && (
          <ul className={style.pagination}>
            {Array.from({ length: Math.ceil(data.length / articlesPerPage) }, (_, i) => i + 1).map((number) => (
              <li key={number} className="page-item">
                <button
                  onClick={() => paginate(number)}
                  className={`${style.pageLink} ${currentPage === number ? style.activePage : ''}`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NewsList;
