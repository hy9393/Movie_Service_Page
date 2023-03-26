import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";
import styles from "./Home.module.css";

function Home() {
  const summaryMaximumLength = 250;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const responseJson = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovies(responseJson.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={
                movie.summary.length > summaryMaximumLength
                  ? `${movie.summary.slice(0, summaryMaximumLength)}...`
                  : movie.summary
              }
              genres={movie.genres}
              isDetailPage={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
