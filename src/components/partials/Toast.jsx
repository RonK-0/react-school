import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Toast = ({setIsSuccess, message, setIsError}) => {

  const handleClose = () => {
    setTimeout(()=>{
      setIsSuccess(false)
    },1000)
  }

  handleClose()

  return (
    <div className={`fixed top-3 left-1/2 -translate-x-1/2 p-1 px-3 bg-secondary rounded-md border ${setIsError ? "border-green-500" : "border-red-500"}`}>
        <div className='flex gap-2 items-center'>
          <FaCheckCircle className={`${setIsError ? "text-green-500" : "text-red-500"}`}/> 
          <p className='mb-0 text-xs'>{message}</p>
        </div>
    </div>
  )
}

export default Toast