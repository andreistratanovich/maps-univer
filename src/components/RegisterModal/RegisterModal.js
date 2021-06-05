import React, { useState } from "react";
import { Modal, Button, Select, DatePicker, Input } from "antd";
import "antd/dist/antd.css";

import './RegisterModal.scss'

const { Option } = Select;

const nationalitiesJSON = require('../../static/nationalities.json')

export default ({ registerModalVisible, setRegisterModalVisible, setStartModalVisible }) => {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState({
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    gender: null,
    nationality: null,
    passport: null,
    expDate: null,
    phoneNumber: null,
    eMail: null
  })

  const handleChange = ({ key, value }) => setUserData({ ...userData, [key]: value })

  const handleModalSubmit = () => {
    for (let key in userData) {
      if (userData[key] === null) {
        Modal.error({
          title: 'All fields are required',
          content: 'Please fill in all required fields and try again',
        });
        return
      }
    }

    setLoading(true)

    setTimeout(() => {
      Modal.success({
        content: 'You have successfully purchased your tickets.',
        onOk: () => {
          setLoading(false)
          setRegisterModalVisible(false)
          setStartModalVisible(true)
        }
      });
    }, 5000)
  }

  return (
    <Modal
      visible={registerModalVisible}
      width={650}
      centered
      title="Passenger information"
      footer={[
        <Button type="primary" onClick={handleModalSubmit} loading={loading}>
          Proceed to checkout
        </Button>,
      ]}
      onCancel={() => {
        if (!loading) setRegisterModalVisible(false)
      }}
    >
      <div className='register-modal__container'>
        <div className='register-modal__column'>
          <div className='register-modal__row'>
            <div className='register-modal__section'>
              <p>First name</p>
              <Input
                placeholder="First name" 
                disabled={loading} 
                onChange={(value) => handleChange({ key: 'firstName', value })}
              />
            </div>
          </div>
          <div className='register-modal__row'>
            <div className='register-modal__section'>
              <p>Nationality</p>
              <Select 
                placeholder="Nationality" 
                style={{ width: '100%' }} 
                disabled={loading} 
                onChange={(value) => handleChange({ key: 'nationality', value })}
              >
                {Object.keys(nationalitiesJSON).map(key => (
                  <Option value={nationalitiesJSON[key]}>{nationalitiesJSON[key]}</Option>
                ))}
              </Select>
            </div>
            <div className='register-modal__section'>
              <p>Gender</p>
              <Select 
                placeholder="Gender" 
                style={{ width: '100%' }} 
                disabled={loading} 
                onChange={(value) => handleChange({ key: 'gender', value })}
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </div>
          </div>
          <div className='register-modal__row'>
            <div className='register-modal__section'>
              <p>Passport series and number</p>
              <Input 
                placeholder="Passport series and number" 
                disabled={loading}
                onChange={(value) => handleChange({ key: 'passport', value })}
              />
            </div>
          </div>
          <div className='register-modal__row'>
            <div className='register-modal__section'>
              <p>Phone number</p>
              <Input 
                placeholder="Phone number" 
                disabled={loading} 
                onChange={(value) => handleChange({ key: 'phoneNumber', value })}
              />
            </div>
          </div>
        </div>
        <div className='register-modal__column'>
          <div className='register-modal__row'>
            <div className='register-modal__section'>
              <p>Last name</p>
              <Input 
                placeholder="Last name" 
                disabled={loading} 
                onChange={(value) => handleChange({ key: 'lastName', value })}
              />
            </div>
          </div>
          <div className='register-modal__row'>
            <div className='register-modal__section'>
              <p>Date of birth</p>
              <DatePicker
                format={'DD.MM.YYYY'} style={{ width: '100%' }} 
                disabled={loading}
                onChange={(value) => handleChange({ key: 'dateOfBirth', value })}
              />
            </div>
          </div>
          <div className='register-modal__row'>
            <div className='register-modal__section'>
              <p>Expiration date</p>
              <DatePicker
                format={'DD.MM.YYYY'} 
                style={{ width: '100%' }} 
                disabled={loading} 
                onChange={(value) => handleChange({ key: 'expDate', value })}
              />
            </div>
          </div>
          <div className='register-modal__row'>
            <div className='register-modal__section'>
              <p>E-mail</p>
              <Input 
                placeholder="example@mail.com" 
                disabled={loading} 
                onChange={(value) => handleChange({ key: 'eMail', value })}
              />
              <p className='register-modal__small-text'>We will send tickets to the specified mail</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
