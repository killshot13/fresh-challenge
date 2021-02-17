import data from "../data.json";

const Movies = () => {
  const displayMovies = () => {
    return data.entries
      .filter((entry) => entry.programType === "movie")
      .map((entry) => <li>{entry.title}</li>);
  };
  return (
    <>
      <h3>Movies</h3>
      <ul>{displayMovies()}</ul>
    </>
  );
};

export default Movies;
