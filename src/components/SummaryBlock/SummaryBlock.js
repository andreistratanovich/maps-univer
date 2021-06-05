import React, { Fragment } from "react";
import { Card, Timeline, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import './SummaryBlock.scss'

import getTotalPrice from '../../utils/getTotalPrice'

export default ({ route, setStartModalVisible, setRegisterModalVisible }) => {

  const handleStartOver = () => setStartModalVisible(true)

  const renderTimelines = () => (
    <Timeline>
      { route.map((item, index) => (
        <Timeline.Item key={index}>
          <p className='route__airport'>{item.airport.name} ({item.airport.iata})</p>
          { index < route.length - 1 && (
            <Fragment>
              <p className='route__date'>Dep: {item.date.split('/')[0]}</p>
              <p className='route__date'>Arr: {item.date.split('/')[1]}</p>
              <p className='route__price'>${item.price}</p>
            </Fragment>
          )}
        </Timeline.Item>
      )) }
    </Timeline>
  )

  return (
    <Fragment>
      <Card className='summary-block__route'>
        {renderTimelines()}
        <Button type="primary" onClick={handleStartOver}><ReloadOutlined /> Start over</Button>
      </Card>
      <Card className='summary-block__total'>
        <div className='total__container'>
          <p>Total for this route</p>
          <p className='total__price'>${getTotalPrice(route)}</p>
        </div>
        <Button type="primary" onClick={() => setRegisterModalVisible(true)}>Buy tickets</Button>
      </Card>
    </Fragment>
  );
};
