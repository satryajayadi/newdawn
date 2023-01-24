import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'about', label: 'About' },
  { value: 'product', label: 'Product' },
  { value: 'pricelist', label: 'Pricelist' }
]

 export const MyComponent = () => (
  <Select options={options} />
)