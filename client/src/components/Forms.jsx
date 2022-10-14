import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCargo } from "../slice/cargoSlice";
const validate = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Required";
  }
  if (!values.color) {
    errors.color = "Required";
  }
  if (!values.weight) {
    errors.weight = "Required";
  } else if (values.weight < 0) {
    errors.weight = "enter a valid number ";
  }

  return errors;
};
function Forms() {
  const [country, setCountry] = useState("");
  const hello = (e) => {
    setCountry(e.target.value);
    console.log(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      fullName: "",
      weight: "",
      color: "",
      country: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
      const userData = {
        fullName: values.fullName,
        weight: values.weight,
        color: values.color,
        country,
      };
      dispatch(createCargo(userData));
      navigate('/table')
    },
  });

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={formik.handleSubmit} class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Full Name
            </label>
            <input
              value={formik?.values?.fullName}
              onChange={formik?.handleChange("fullName")}
              onBlur={formik?.handleBlur("fullName")}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter your full name"
            />
            <div className="text-red-500">
              {formik.touched.fullName && formik.errors.fullName}
            </div>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Weight
            </label>
            <input
              value={formik?.values?.weight}
              onChange={formik?.handleChange("weight")}
              onBlur={formik?.handleBlur("weight")}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="weight"
              type="number"
              placeholder="Enter weight"
            />
            <div className="text-red-500">
              {formik.touched.weight && formik.errors.weight}
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              color
            </label>
            <input
              value={formik?.values?.color}
              onChange={formik?.handleChange("color")}
              onBlur={formik?.handleBlur("color")}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-color"
              type="color"
              placeholder="Albuquerque"
            />
            <div className="text-red-500">
              {formik.touched.color && formik.errors.color}
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Country
            </label>
            <div class="relative">
              <select
                onChange={hello}
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>SELECT</option>
                <option value={"sweden"}>SWEDEN</option>
                <option value={"china"}>CHINA</option>
                <option value={"brazil"}>BRAZIL</option>
                <option value={"australia"}>AUSTRALIA</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="text-red-500">
              {formik.touched.country && formik.errors.country}
            </div>
          </div>
          <div class="w-full md:mt-6 md:w-1/3 px-3 mb-6 md:mb-0 flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-900 text-white h-3/4 border-none rounded-md px-6"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forms;
