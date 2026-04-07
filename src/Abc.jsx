import React from 'react'

const Abc = ({lal}) => {


  function motu()
  {
    console.log("calling")
  }
  lal.current=motu
  return (
    <div>
      hiii
      
    </div>
  )
}

export default Abc
