import React, { useCallback, useState } from "react";
import { Modal, Button, Select, InputNumber, Divider, DatePicker } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import moment from 'moment';

import airports from "../../configs/airports";

import getTotalPrice from '../../utils/getTotalPrice'

const getAirportObjFromIata = (iata) => airports.find((item) => item.iata === iata);

export default ({ setRoute, startModalVisible, setStartModalVisible }) => {
  const [loading, setLoading] = useState(false)

  const [startDate, setStartDate] = useState(moment())
  const [startAirport, setStartAirport] = useState(getAirportObjFromIata("WAW"));
  const [numberOfCities, setNumberOfCities] = useState(3);
  const [maxBudget, setMaxBudget] = useState(1000)

  const handleModalSubmit = useCallback(() => {
    setLoading(false);

    const temp = [];

    const getPrice = () => Math.floor(Math.random() * 300) + 100;
    const getFlightDate = (addedDays) => {
      const hours = Math.round(Math.random() * 23)
      const minutes = Math.floor(Math.random() * 59 / 5) * 5
      const flightTime = {
        hours: Math.round(Math.random() * 4) + 2,
        minutes: Math.floor(Math.random() * 59 / 5) * 5
      }

      if (addedDays) {
        return `${moment(startDate).add(addedDays, 'd').hours(hours).minutes(minutes).format("dddd, MMMM Do YYYY, HH:mm")} /
         ${moment(startDate).add(addedDays, 'd').hours(hours).minutes(minutes).add(flightTime).format("dddd, MMMM Do YYYY, HH:mm")}`
      }

      return `${moment(startDate).hours(hours).minutes(minutes).format("dddd, MMMM Do YYYY, HH:mm")} /
      ${moment(startDate).hours(hours).minutes(minutes).add(flightTime).format("dddd, MMMM Do YYYY, HH:mm")}`
    }

    for (let i = 0; i < numberOfCities; i++) {
      temp.push({
        airport: airports[Math.round(Math.random() * (airports.length + 1))],
        price: getPrice(),
        date: getFlightDate((i + 1) * 2),
      });
    }

    const tempRoute = [
      {
        airport: startAirport,
        price: getPrice(),
        date: getFlightDate(),
      },
      ...temp,
    ];

    if (getTotalPrice(tempRoute) > maxBudget) {
      Modal.error({
        title: 'We were unable to build a route with the specified parameters',
        content: 'Try changing your search parameters and try again',
      });
      return
    }

    setRoute(tempRoute);
    setStartModalVisible(false);
  }, [startDate, startAirport, numberOfCities, setRoute, setStartModalVisible, maxBudget]);

  const renderDatePicker = () => (
    <DatePicker
      style={{ width: "100%" }}
      defaultValue={startDate}
      format={"dddd, MMMM Do YYYY"}
      onChange={(date) => setStartDate(date)}
      disabled={loading}
    />
  )

  const renderStartAirportSelect = () => (
    <Select
      showSearch
      style={{ width: "100%" }}
      defaultValue={startAirport.iata}
      onChange={(value) => setStartAirport(getAirportObjFromIata(value))}
      disabled={loading}
    >
      {airports.map((item, index) => (
        <Select.Option value={item.iata} key={index}>
          {item.name} ({item.iata})
        </Select.Option>
      ))}
    </Select>
  )

  const renderNumberOfCitiesInput = () => (
    <InputNumber
      min={1}
      max={10}
      defaultValue={numberOfCities}
      onChange={(value) => setNumberOfCities(value)}
      disabled={loading}
    />
  )

  const renderBudgetInput = () => (
    <InputNumber
      min={1}
      max={10000}
      defaultValue={maxBudget}
      onChange={(value) => setMaxBudget(value)}
      disabled={loading}
    />
  )

  return (
    <Modal
      visible={startModalVisible}
      closable={false}
      centered
      title="Customize your ride"
      footer={[
        <Button 
          type="primary" 
          loading={loading}
          onClick={() => {
            setLoading(true)
            setTimeout(handleModalSubmit, 6000)
          }}
        >
          <RocketOutlined /> Generate
        </Button>,
      ]}
    >
      <p>Choose a start date</p>
      {renderDatePicker()}
      <Divider dashed />
      <p>Choose a start airport</p>
      {renderStartAirportSelect()}
      <Divider dashed />
      You can choose the number of cities {renderNumberOfCitiesInput()} or indicate your maximum budget {renderBudgetInput()} (USD)
    </Modal>
  );
};
