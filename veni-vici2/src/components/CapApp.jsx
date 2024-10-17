import { useState, useEffect } from "react";
import "veni-vici2/src/style/CatApp.css";

const CatApp = () => {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;


  const fetchCat = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?has_breeds=1",
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      const data = await response.json();
      setCat(data[0]);
    } catch (error) {
      console.error("Error fetching cat:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="cat-app">
      <h1>Cat Information</h1>
      {loading ? (
        <p>Loading...</p>
      ) : cat ? (
        <div className="cat-card">
          <h2>{cat.breeds[0].name}</h2>
          <p className="origin">{cat.breeds[0].origin}</p>
          <img src={cat.url} alt="Cat" className="cat-image" />
          <p>
            <strong>Temperament:</strong> {cat.breeds[0].temperament}
          </p>
          <p>
            <strong>Life Span:</strong> {cat.breeds[0].life_span} years
          </p>
          <p>
            <strong>Weight:</strong> {cat.breeds[0].weight.metric} kg
          </p>
          <button onClick={fetchCat} className="get-cat-button">
            Get Another Cat
          </button>
        </div>
      ) : (
        <p>No cat data available</p>
      )}
    </div>
  );
};

export default CatApp;
