import MovieCard from "../components/MovieCard";
import HeroCarousel from "../components/hero";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMOVIES } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMOVIES();
        setMovies(popularMovies);
      } catch (erro) {
        setError("Erro ao carregar filmes...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      setError("Erro ao buscar filmes...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <HeroCarousel movies={movies.slice(0, 5)} /> {/* só os 5 primeiros */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Procure um filme..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Procurar
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
