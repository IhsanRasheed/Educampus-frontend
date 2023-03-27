import React, { useState } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import { addStudentAPI } from "../../../Services/OfficeService";

const generatePassword = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

function AddStudent() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    parentName: "",
    parentPhone: "",
    education: "",
    institute: "",
    batch: "",
    houseName: "",
    place: "",
    post: "",
    pin: "",
    district: "",
    state: "",
  };

  const [formValues, setFormvalues] = useState(initialValues);
  const [error, setErrors] = useState({});

  const [value] = useState(null);

  const onChangeHandle = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormvalues({ ...formValues, [name]: value });
      setErrors({ ...error, [name]: "" });
    } else {
      const [value] = [e];
      const name = "gender";
      setFormvalues({ ...formValues, [name]: value });
      setErrors({ ...error, [name]: "" });
    }
  };

  // function onChangeHandle(e) {
  //   if (e && e.target && e.target.name) {
  //     console.log('hi')
  //     console.log(e)
  //     const { name, value } = e.target
  //     setFormvalues({ ...formValues, [name]: value });
  //     setErrors({ ...error, [name]: "" });
  //   }
  // }

  console.log(formValues);
  const handleSubmit = (event) => {
    event.preventDefault();

    const password = generatePassword(8); 
    setFormvalues({ ...formValues, password });

    const data = new FormData();

    data.append("name", formValues.name);
    data.append("phone", formValues.phone);
    data.append("email", formValues.email);
    data.append("password", formValues.password)
    data.append("dateOfBirth", formValues.dateOfBirth);
    data.append("gender", formValues.gender);
    data.append("parentName", formValues.parentName);
    data.append("parentPhone", formValues.parentPhone);
    data.append("education", formValues.education);
    data.append("institute", formValues.institute);
    data.append("batch", formValues.batch);
    data.append("houseName", formValues.house_name);
    data.append("place", formValues.place);
    data.append("post", formValues.post);
    data.append("pin", formValues.pin);
    data.append("district", formValues.district);
    data.append("state", formValues.state);
    data.append("file", formValues.file);

    addStudentAPI(formValues)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <p className="text-2xl font-semibold text-gray-500 mb-2"></p>

      <section className=" py-1 bg-blueGray-50 ">
        <div className="w-full lg:w-full px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Student
                </h6>
                {/* <button
                  className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Save
                </button> */}
              </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Name"
                        value={formValues.name}
                        onChange={onChangeHandle}
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Phone"
                        value={formValues.phone}
                        onChange={onChangeHandle}
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Email"
                        value={formValues.email}
                        onChange={onChangeHandle}
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        type="date"
                        label="Date of Birth"
                        value={formValues.dateOfBirth}
                        onChange={onChangeHandle}
                        name="dateOfBirth"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Select
                        label="Gender"
                        name="gender"
                        value={value}
                        onChange={onChangeHandle}
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Other">Other</Option>
                      </Select>
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Parent Name"
                        value={formValues.parentName}
                        onChange={onChangeHandle}
                        name="parentName"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Parent Phone"
                        value={formValues.parentPhone}
                        onChange={onChangeHandle}
                        name="parentPhone"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Education"
                        value={formValues.education}
                        onChange={onChangeHandle}
                        name="education"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Institute"
                        value={formValues.institute}
                        onChange={onChangeHandle}
                        name="institute"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="University/Board"
                        value={formValues.university}
                        onChange={onChangeHandle}
                        name="university"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Batch"
                        value={formValues.batch}
                        onChange={onChangeHandle}
                        name="batch"
                      />
                    </div>
                  </div>

                  {/* <div className="w-full lg:w-4/12 px-4 text-gray-500">
                  <div className="relative w-full mb-3">
                    <div className="form-outline input-group-lg">
                      <input
                        type="file"
                        id="profile"
                        name="profile"
                        className="form-control"
                        accept="image/png, image/jpg, image/jpeg"
                        required
                      />
                    </div>
                    <div className="form-text text-sm">
                      Max. 1MB size (500 X 500 ratio recommended)
                    </div>
                  </div>
                </div> */}
                </div>
                <p className="p-4 text-gray-700">Address</p>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="House Name"
                        value={formValues.houseName}
                        onChange={onChangeHandle}
                        name="houseName"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Place"
                        value={formValues.place}
                        onChange={onChangeHandle}
                        name="place"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Post"
                        value={formValues.post}
                        onChange={onChangeHandle}
                        name="post"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="Pin Code"
                        value={formValues.pin}
                        onChange={onChangeHandle}
                        name="pin"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="District"
                        value={formValues.district}
                        onChange={onChangeHandle}
                        name="district"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <Input
                        label="State"
                        value={formValues.state}
                        onChange={onChangeHandle}
                        name="state"
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full mb-4"
                >
                  Create student
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddStudent;
