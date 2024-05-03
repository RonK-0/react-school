import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import { InputText } from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
// import * as Yup from 'yup'
import { object, string, number } from 'yup';

const ModalAddStaff = ({ setAddStaff, showAddStaff }) => {
  const handleAddStaff = () => setAddStaff(!showAddStaff);
  const initVal = {
    staff_name: "",
    staff_class: "",
    staff_age: "",
    staff_email: "",
  };
  const yupSchema = object({
    staff_name: string().required("Name Required*"),
    staff_class: string().required("Class Required*"),
    staff_age: number().required("Age Required*"),
    staff_email: string().required("Email Required*").email("Invalid Email"),
  })
  return (
    <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full">
        <div className="modal-header p-4 relative">
          <h2>New Staff</h2>
          <button
            className="absolute top-[25px] right-4"
            onClick={handleAddStaff}
          >
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body p-4">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            <Form action="" className="flex flex-col h-[calc(100vh-110px)]">
              <div className="grow overflow-y-auto">
                <div className="input-wrap">
                  <InputText label="Name" type="text" name="staff_name" />
                </div>
                <div className="input-wrap">
                  <InputText label="Class" type="text" name="staff_class" />
                </div>
                <div className="input-wrap">
                  <InputText label="Email" type="email" name="staff_email" />
                </div>
                <div className="input-wrap">
                  {/* <label htmlFor="">Gender</label>
                  <select name="" id="" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <small className="error-msg">Required*</small> */}
                </div>
                <div className="input-wrap">
                  <InputText label="Age" type="number" name="staff_age" />
                </div>
              </div>
              <div className="form-action">
                <button className="btn btn-form btn--accent" type="submit">
                  Add <SpinnerButton />
                </button>
                <button className="btn btn-form btn--cancel" type="button">
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddStaff;
