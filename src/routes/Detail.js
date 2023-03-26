import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();

      setMovie(json.data.movie);
      setLoading(false);
    };

    getMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              summary={movie.description_full}
              genres={movie.genres}
              rating={movie.rating}
              isDetailPage={true}
            />
          }
        </div>
      )}
    </div>
  );
}

export default Detail;
