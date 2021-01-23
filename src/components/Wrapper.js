import { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import NewsBox from "./NewsBox";
import Loader from "./Loader";

const Wrapper = () => {
  //   const apiKey = "0267e3515dae484b9335e3d1ec873f3f";
  const url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=0267e3515dae484b9335e3d1ec873f3f";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(4);

  const fechData = useCallback(async () => {
    await Axios.get(url)
      .then((response) => setData(response.data.articles))
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  useEffect(() => {
    fechData();
  }, [fechData]);

  const loadMore = () => {
    setShow(show + 4);
  };

  return (
    <>
      <div className="wrapper">
        {loading ? (
          <Loader />
        ) : (
          <NewsBox showData={show} data={data.length > 1 && data} />
        )}
      </div>
      {show < 20 && (
        <button onClick={loadMore} className="load-button">
          Load more
        </button>
      )}
    </>
  );
};

export default Wrapper;
