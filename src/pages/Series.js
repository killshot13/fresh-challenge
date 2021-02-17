import data from "../data.json";

const Series = () => {
  const displaySeries = () => {
    return data.entries
      .filter((entry) => entry.programType === "series")
      .map((entry) => <li>{entry.title}</li>);
  };
  return (
    <>
      <h3>Series</h3>
      <ul>{displaySeries()}</ul>
    </>
  );
};

export default Series;
