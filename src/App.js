import React, { useState } from "react";

import "./App.scss";

import YMaps from "./components/YMaps/YMaps";
import StartModal from './components/StartModal/StartModal'
import SummaryBlock from './components/SummaryBlock/SummaryBlock'
import RegisterModal from './components/RegisterModal/RegisterModal'

export default () => {
  const [startModalVisible, setStartModalVisible] = useState(true);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [route, setRoute] = useState([]);

  return (
    <React.Fragment>
      {!startModalVisible && (
        <SummaryBlock
          route={route} 
          setStartModalVisible={setStartModalVisible} 
          setRegisterModalVisible={setRegisterModalVisible} 
        />
      )}
      <StartModal
        startModalVisible={startModalVisible} 
        setStartModalVisible={setStartModalVisible}
        setRoute={setRoute} />
      <RegisterModal
        registerModalVisible={registerModalVisible}
        setRegisterModalVisible={setRegisterModalVisible}
        setStartModalVisible={setStartModalVisible}
      />
      <YMaps data={route} />
    </React.Fragment>
  );
};
