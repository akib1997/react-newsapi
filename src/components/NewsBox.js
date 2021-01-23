const NewsBox = ({ data: allData, showData }) => {
  console.log(allData);
  return allData.slice(0, showData).map((data, index) => (
    <div className="news-box" key={index}>
      <img src={data.urlToImage} className="news-image" alt={data.title} />
      <div className="news-content">
        <h2 className="news-title">
          {`${data.title.split(" ").slice(0, 5).join(" ")} ...`}
        </h2>
        <p className="news-text">
          {`${data.description.split(" ").slice(0, 15).join(" ")} ...`}
        </p>
      </div>
    </div>
  ));
};

export default NewsBox;
