import "../css/Favorites.css";
import { useMovieContext } from "../context/Movie.Context";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Seus Filmes Favoritos</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>Sem Favoritos</h2>
      <p>Adicione...</p>
    </div>
  );
}

export default Favorites;
