import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { PiArchive } from "react-icons/pi";

const ModalConfirm = ({position}) => {
  return (
    <>
      <ModalWrapper position={position}>
        <div className="modal-main max-w-[401px] w-full">
            <div className="modal-header flex between-center bg-warning text-white p-3 px-4 rounded-t-md">
                <h4 className='mb-0 text-white'>Confirm</h4>
                <button type='button'><LiaTimesSolid/></button>
            </div>
            <div className="modal-body p-4 rounded-b-md bg-secondary text-content">
                <div className="flex gap-4 items-center">
                  <PiArchive  className='text-4xl text-warning mb-3'/>
                  <div>
                    <h2 className='mb-2'>Archiving Record</h2>
                    <p className='mb-5'>Are you sure you want to archive this record?</p>
                  </div>
                </div>
                
                <div className="flex gap-2 justify-end">
                  <button className="btn btn--warning btn-form w-1/4">Confirm</button>
                  <button className="btn btn--cancel btn-form w-1/4">Cancel</button>
                </div>
            </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalConfirm