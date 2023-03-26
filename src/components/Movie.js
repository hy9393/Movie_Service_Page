import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, rating, isDetailPage }) {
  return (
    <div key={id} className={styles.movie}>
      {isDetailPage ? (
        <img src={coverImg} alt={title} className={styles.movie__img__detail} />
      ) : (
        <img src={coverImg} alt={title} className={styles.movie__img} />
      )}
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__rating}>
          {rating === undefined ? null : <h3>Rating: {rating}</h3>}
        </h3>
        <p>{summary}</p>
        <ul className={styles.movie__year}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
  isDetailPage: PropTypes.bool,
};

export default Movie;
