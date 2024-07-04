import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { deleteData, fetchDataFromApi, updateData } from '../../apis/api';
import Button from '@mui/material/Button';
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';

const CategoryList = () => {
  const [open, setOpen] = React.useState(false);
  const [catList, setCatList] = useState([]);
  const [dataId , setIdData] = useState(null);
  const [lodingOpen, setLodingOpen] = useState(false);
  const [delData , setDelData] = useState(false);
  useEffect(() => {
    fetchDataFromApi('/api/category').then((res) => {
      setCatList(res);
    })
  }, []
  )
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
  const changeImageInput = (e) =>{
    const arr = [];
    arr.push(e.target.value);
    setFormFields(({
      ...formFields,
      [e.target.name] : arr
    }))
  }
  const editCat=(id)=>{
    setFormFields({
      name: '',
      image: [],
      color: ''
    })
    setOpen(true);
    setIdData(id);
    fetchDataFromApi(`/api/category/${id}`).then((res) => {
      setFormFields({
        name:res.name,
        image:res.image,
        color:res.color
      });
      console.log(res);
    })
  }
  const handleClose =()=>{
    setOpen(false);
  }
  
  const updateCagegoty = (e)=>{
    e.preventDefault();
    setLodingOpen(true);
    updateData(`/api/category/${dataId}` , formFields).then((res)=>{
      fetchDataFromApi(`/api/category`).then((res)=>{
        setCatList(res);
        setOpen(false);
        setLodingOpen(false);
      })
    })
  }

  const deleteFunc = (id)=>{
    setDelData(true);
    deleteData(`/api/category/${id}`).then((res)=>{
      fetchDataFromApi(`/api/category`).then((res)=>{
        setCatList(res);
      })
    })
  }


  return (
    <>
    <div className='container p-3'>
      <h3>Category List</h3>
      <table className='w-[50%]'>
        <thead>
          <tr >
            <td className='text-danger'>Image</td>
            <td className='text-danger'>Name</td>
            <td className='text-danger'>Color</td>
            <td className='text-danger'>Remove/Edit</td>
          </tr>
        </thead>
        <tbody>
          {
            catList?.categoryList?.length !== 0 && catList?.categoryList?.map((item, index) => {
              return (
                <tr key={index}>
                  <td><img className='w-[20%]' src={item.image} alt="" /></td>
                  <td>{item.name}</td>
                  <td><span style={{display:"block" ,height:'20px', width:'20px' , background:item.color , borderRadius:'50%'}}></span></td>
                  <td>
                    <Button onClick={()=>editCat(item._id)}><RiEdit2Line /></Button>
                    <Button onClick={()=>deleteFunc(item._id)}><MdOutlineDelete /></Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    <Pagination count={10} />
    <Dialog className='updateData'
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <form>
        <DialogTitle>Update Data</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth 
            value={formFields.name}
            onChange={changeInput}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="image"
            name="image"
            label="Image"
            type="text"
            fullWidth
            value={formFields.image}
            onChange={changeImageInput}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="color"
            name="color"
            label="Color"
            type="text"
            fullWidth
            value={formFields.color}
            onChange={changeInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="button" onClick={updateCagegoty}>
            {
              lodingOpen===true ? <CircularProgress color="inherit" /> : 'Submit'
            }
            </Button>
        </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default CategoryList
