import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import "./CitiesList.scss";

export default () => {
  return (
    <div className="cities-list-container">
      <div className="cities-list-element">
        <div className="cities-list-element__airport-information">
          <p className="cities-list-element__airport-code">MSK</p>
          <p className="cities-list-element__city">Москва</p>
        </div>
        <DoubleRightOutlined style={{ color: "#607d8b" }} />
        <div className="cities-list-element__airport-information">
          <p className="cities-list-element__airport-code">MSK</p>
          <p className="cities-list-element__city">Москва</p>
        </div>
      </div>
      <div className="cities-list-element">
        <div className="cities-list-element__airport-information">
          <p className="cities-list-element__airport-code">MSK</p>
          <p className="cities-list-element__city">Москва</p>
        </div>
        <DoubleRightOutlined style={{ color: "#607d8b" }} />
        <div className="cities-list-element__airport-information">
          <p className="cities-list-element__airport-code">MSK</p>
          <p className="cities-list-element__city">Москва</p>
        </div>
      </div>
    </div>
  );
};
