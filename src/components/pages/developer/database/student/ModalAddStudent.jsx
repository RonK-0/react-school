import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'

const ModalAddStudent = () => {
  return (
    <ModalWrapper>
        <div className="main-modal w-[300px] bg-secondary text-content h-full">
            <div className="modal-header p-4 relative">
                <h2>New Student</h2>
                <button className="absolute top-[25px] right-4"><LiaTimesSolid/></button>
            </div>
            <div className="modal-body p-4">
                <form action="" className='flex flex-col h-[calc(100vh-110px)]'>
                    <div className='grow overflow-y-auto'>
                        <div className="input-wrap">
                            <label htmlFor="">Name</label>
                            <input type="text" name="" id="" required />
                            <small className="error-msg">Required*</small>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="">Class</label>
                            <input type="text" name="" id="" required />
                            <small className="error-msg">Required*</small>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="">Gender</label>
                            <select name="" id="" required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <small className="error-msg">Required*</small>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="">Age</label>
                            <input type="number" name="" id="" required />
                            <small className="error-msg">Required*</small>
                        </div>
                    </div>
                    <div className="form-action">
                        <button className='btn btn-form btn--accent'> Add <SpinnerButton/></button>
                        <button className='btn btn-form btn--cancel'> Cancel </button>
                    </div>
                </form>
            </div>
        </div>
    </ModalWrapper>
  )
}

export default ModalAddStudent