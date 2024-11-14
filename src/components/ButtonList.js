import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="History"/>
        <Button name="Science"/>
        <Button name="VSauce"/>
        <Button name="News"/>
        <Button name="Politics"/>
        <Button name="Weather"/>
        <Button name="Maths"/>
        


    </div>
  )
}

export default ButtonList
