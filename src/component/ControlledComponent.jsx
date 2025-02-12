import React, { useState } from "react";

const initialState = {
  username: "",
  email: "",
  address: "",
};

const ControlledComponent = () => {
  const [formdata, setName] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName((prevFormdata) => ({ ...prevFormdata, [name]: value }));
    console.log(formdata)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formdata);
    setName(initialState); 
  };

  return (
    <div className="w-full h-[500px] bg-orange-500 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        onReset={() => setName(initialState)}
        className="bg-green-500 h-[400px] w-[300px] p-5 flex flex-col gap-2 rounded-lg"
      >
        <h1 className="text-neutral-700 text-center text-lg">Register Form</h1>
        <input
          className="p-2 "
          type="text"
          placeholder="Enter a name"
          name="username"
          value={formdata.username}
          onChange={handleChange}
          required
        />
        <input
          className="p-2"
          type="email"
          placeholder="Enter an email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 "
          type="text"
          placeholder="Enter an address"
          name="address"
          value={formdata.address}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          type="reset"
          className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ControlledComponent;
