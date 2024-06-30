import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { postData } from '../../apis/api';

const Dashboard = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    image: [],
    color: ''
  });

  const changeInput = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const addCategory = (e) => {
    e.preventDefault();
    console.log(formFields);
    postData('/api/category/create', formFields).then((res) => {
      console.log(res);
    });
  };

  const changeImageInput = (e) =>{
    const arr = [];
    arr.push(e.target.value);
    setFormFields(({
      ...formFields,
      [e.target.name] : arr
    }))
  }

  return (
    <div className="dashboard p-3">
      <form onSubmit={addCategory}>
        <div className="m-2">
          Name
          <input type="text" name="name" onChange={changeInput} />
        </div>
        <div className="m-2">
          Image Url
          <input type="text" name="image" onChange={changeImageInput} />
        </div>
        <div className="m-2">
          Color
          <input type="text" name="color" onChange={changeInput} />
        </div>
        <Button className="bg-white" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;
