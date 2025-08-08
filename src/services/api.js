const API_KEY = "6a9409c337eb7decadbcd26d6422c6d9";
const BASE_URL = "https://api.themoviedb.org/3";

// Buscar filmes populares
export const getPopularMOVIES = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Buscar filmes com base na pesquisa
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
