import React from "react";
import { YMaps, Map, GeoObject } from "react-yandex-maps";
import "./YMaps.scss";

export default () => (
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
          strokeColor: "#007AFF",
        }}
      />
      <GeoObject
        geometry={{
          type: "LineString",
          coordinates: [
            [52.51, 13.38],
            [53.910402, 27.560451],
          ],
        }}
        options={{
          geodesic: true,
          strokeWidth: 3,
          strokeColor: "#007AFF",
        }}
      />
      <GeoObject
        geometry={{
          type: "LineString",
          coordinates: [
            [53.910402, 27.560451],
            [59.325, 18.070897],
          ],
        }}
        options={{
          geodesic: true,
          strokeWidth: 3,
          strokeColor: "#007AFF",
        }}
      />
    </Map>
  </YMaps>
);
