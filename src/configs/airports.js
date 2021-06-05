import airports from "../static/airports.json";

export default airports.filter((item) => {
  if (item.name && item.iata && item.continent === "EU" && item.size === "large" && item.lat && item.lon) {
    return item;
  }
});
