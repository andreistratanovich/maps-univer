import React from "react";
import { YMaps, Map, GeoObject } from "react-yandex-maps";
import "./YMaps.scss";

export default (props) => {
  const routes = [];

  for (let i = 1; i < props.data.length; i++) {
    routes.push(
      <GeoObject
        geometry={{
          type: "LineString",
          coordinates: [
            [props.data[i - 1].lat, props.data[i - 1].lon],
            [props.data[i].lat, props.data[i].lon],
          ],
        }}
        options={{
          geodesic: true,
          strokeWidth: 3,
          strokeColor: "#1890ff",
        }}
      />
    );
  }

  return (
    <YMaps query={{ lang: "en_RU" }}>
      <Map className="maps-container" defaultState={{ center: [47.57, 21.1], zoom: 5 }}>
        {routes}
      </Map>
    </YMaps>
  );
};
