import React from 'react'

const CustomInput = (props) => {
    const { type, name, placeholder, classname } = props;
  return (
    <div>
        <input type="text" name='name' placeholder='Name' className='form-control' />
    </div>
  )
}

export default CustomInput