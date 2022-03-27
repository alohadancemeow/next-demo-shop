import React, { useState, useEffect } from 'react'
import getCommerce from '../../lib/commerce'

import { FormWrapper } from './styles'
import { Form, Input, Select } from 'antd';

const ShippingDetails = ({ checkoutToken, shippingData, setShippingData }) => {

  const commerce = getCommerce()

  // # States of shipping address
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')


  // # Fetching
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    // console.log('countries', countries);

    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchSubdidvision = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
    // console.log('subdivisions', subdivisions);

    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
    // console.log('options', options);

    setShippingOptions(options)
    setShippingOption(options[0].id)
  }

  // get key,name from countries  --> 'TH' : 'Thailand'
  const countries = Object.entries(shippingCountries)
    .map(([code, name]) => ({ id: code, label: name }))
  // console.log(countries);

  const subdivisions = Object.entries(shippingSubdivisions)
    .map(([code, name]) => ({ id: code, label: name }))
  // console.log(subdivisions);

  const options = shippingOptions.map(so => ({
    id: so.id,
    label: `${so.description} - (${so.price.formatted_with_symbol})`
  }))
  // console.log(options)


  const handleChange = (e) => {
    setShippingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  // # Getting affected 
  // # When shippingCountry,shippingSubdivision,shippingOption changing.
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])

  useEffect(() => {
    if (shippingCountry) fetchSubdidvision(shippingCountry)
  }, [shippingCountry])

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
  }, [shippingSubdivision])

  useEffect(() => {
    setShippingData((prev) => ({
      ...prev,
      shippingCountry,
      shippingSubdivision,
      shippingOption
    }))
  }, [shippingCountry, shippingSubdivision, shippingOption])



  return (
    <FormWrapper>
      <Form
        labelCol={{
          span: 8,
        }}
        // wrapperCol={{
        //   span: 16,
        // }}
        layout="horizontal"
      >
        <Form.Item label="Address" required>
          <Input
            placeholder='12/34 Sweet home'
            name='address'
            value={shippingData.address}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="City" required>
          <Input
            placeholder='Bangkok'
            name='city'
            value={shippingData.city}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Postal/Zip code" required>
          <Input
            placeholder='12345'
            name='postal'
            value={shippingData.postal}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Country" required>
          <Select value={shippingCountry} onChange={(value) => setShippingCountry(value)}>
            {countries.map(country => (
              <Select.Option
                value={country.id}
                key={country.id}
              >
                {country.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="State/Province" required>
          <Select value={shippingSubdivision} onChange={(value) => setShippingSubdivision(value)}>
            {subdivisions.map(subdivision => (
              <Select.Option
                value={subdivision.id}
                key={subdivision.id}
              >
                {subdivision.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Shipping Option" required>
          <Select value={shippingOption} onChange={(value) => setShippingOption(value)}>
            {options.map(option => (
              <Select.Option
                value={option.id}
                key={option.id}
              >
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </FormWrapper>
  )
}

export default ShippingDetails