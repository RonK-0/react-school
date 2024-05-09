import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
// import * as Yup from 'yup'
import { object, string, number } from "yup";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";

const ModalAddStudent = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/student/${itemEdit.student_aid}` : `/v1/student`,
        itemEdit ? "put" : "post",
        // `/v1/student`,
        // `post`,
        values
      ),
    // ;
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["student"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfuly updated.`));
      } else {
        setIsError(true);
        dispatch(setMessage(`Failed updating database.`));
      }
    },
  });

  const initVal = {
    student_name: itemEdit ? itemEdit.student_name : "",
    student_class: itemEdit ? itemEdit.student_class : "",
    student_age: itemEdit ? itemEdit.student_age : "",
    student_gender: itemEdit ? itemEdit.student_gender : "",
    student_email: itemEdit ? itemEdit.student_email : "",
    student_about: itemEdit ? itemEdit.student_about : "",
  };
  const yupSchema = object({
    student_name: string().required("Name Required*"),
    student_class: string().required("Class Required*"),
    student_gender: string().required("Gender Required*"),
    student_age: number().required("Age Required*"),
    student_email: string().required("Email Required*").email("Invalid Email"),
    student_about: string().required("About Info Required*"),
  });

  return (
    <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full">
        <div className="modal-header p-4 relative">
          <h2>New Student</h2>
          <button
            className="absolute top-[25px] right-4"
            // onClick={handleAddStudent}
            onClick={handleClose}
          >
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body p-4">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate(values);
            }}
          >
            <Form action="" className="flex flex-col h-[calc(100vh-110px)]">
              <div className="grow overflow-y-scroll">
                <div className="input-wrap">
                  <InputText label="Name" type="text" name="student_name" />
                </div>
                <div className="input-wrap">
                  <InputText label="Class" type="text" name="student_class" />
                </div>
                <div className="input-wrap">
                  <InputSelect label="Gender" name="student_gender">
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </InputSelect>
                </div>
                <div className="input-wrap">
                  <InputText label="Email" type="text" name="student_email" />
                </div>
                <div className="input-wrap">
                  <InputText label="Age" type="text" name="student_age" />
                </div>
                <div className="input-wrap">
                  <InputTextArea
                    label="About"
                    type="text"
                    name="student_about"
                  />
                </div>
              </div>
              <div className="form-action">
                <button className="btn btn-form btn--accent" type="submit">
                  {mutation.isPending ? <SpinnerButton /> : "Add"}
                </button>
                <button
                  className="btn btn-form btn--cancel"
                  type="button"
                  onClick={handleClose}
                >
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

export default ModalAddStudent;
