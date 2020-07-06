import React, { useState } from "react";

import "./App.scss";
import "antd/dist/antd.css";
import { RocketOutlined, ReloadOutlined } from "@ant-design/icons";
import { Card, Timeline, Modal, Button, Select, InputNumber, Divider } from "antd";
import YMaps from "./components/YMaps/YMaps";

import airports from "./configs/airports";

export default () => {
  const getAirportObjFromIata = (iata) => airports.find((item) => item.iata === iata);

  const [modalVisible, setModalVisible] = useState(true);
  const [startAirport, setStartAirport] = useState(getAirportObjFromIata("MSQ"));
  const [numberOfCities, setNumberOfCities] = useState(3);
  const [route, setRoute] = useState([]);

  const handleModalSubmit = () => {
    const temp = [];

    for (let i = 0; i < numberOfCities; i++) {
      temp.push(airports[Math.round(Math.random() * (airports.length + 1))]);
    }

    setRoute([startAirport, ...temp]);
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      {!modalVisible ? (
        <Card style={{ zIndex: 1, width: 340, margin: 10 }}>
          <Timeline>
            {route.map((item, index) => (
              <Timeline.Item key={index}>
                {item.name} ({item.iata})
              </Timeline.Item>
            ))}
          </Timeline>
          <Button type="primary" onClick={() => setModalVisible(true)}>
            <ReloadOutlined /> Start over
          </Button>
        </Card>
      ) : null}
      <Modal
        title="Customize your ride"
        footer={[
          <Button type="primary" onClick={handleModalSubmit}>
            <RocketOutlined /> Generate
          </Button>,
        ]}
        centered
        closable={false}
        visible={modalVisible}
      >
        <p>Choose a start airport</p>
        <Select style={{ width: "100%" }} defaultValue={startAirport.iata} showSearch onChange={(value) => setStartAirport(getAirportObjFromIata(value))}>
          {airports.map((item, index) => (
            <Select.Option value={item.iata} key={index}>
              {item.name} ({item.iata})
            </Select.Option>
          ))}
        </Select>
        <Divider dashed />
        <p>Choose the number of cities</p>
        <InputNumber min={1} max={10} defaultValue={numberOfCities} onChange={(value) => setNumberOfCities(value)} />
      </Modal>
      <YMaps data={route} />
    </React.Fragment>
  );
};
