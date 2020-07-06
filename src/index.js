import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { YMaps, Map, GeoObject } from "react-yandex-maps";

import "./index.scss";

const App = () => {
  return (
    <React.Fragment>
      <YMaps>
        <Map className="maps-container" defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
          <GeoObject
            geometry={{
              type: "LineString",
              coordinates: [
                [55.76, 37.64],
                [52.51, 13.38],
              ],
            }}
            options={{
              geodesic: true,
              strokeWidth: 3,
              strokeColor: "#000",
            }}
          />
        </Map>
      </YMaps>
    </React.Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
