import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { fetchDataFromApi } from '../../apis/api';

const CategoryList = () => {

  const [catList, setCatList] = useState([]);
  useEffect(() => {
    fetchDataFromApi('/api/category').then((res) => {
      setCatList(res);
      console.log(res);
    })
  }, []
  )
  return (
    <div className='container p-3'>
      <h3>Category List</h3>
      <table className='w-[30%]'>
        <thead>
          <tr >
            <td className='text-danger'>Image</td>
            <td className='text-danger'>Name</td>
            <td className='text-danger'>Color</td>
          </tr>
        </thead>
        <tbody>
          {
            catList.length !== 0 && catList?.map((item, index) => {
              return (
                <tr key={index}>
                  <td><img className='w-[20%]' src={item.image} alt="" /></td>
                  <td>{item.name}</td>
                  <td><span style={{display:"block" ,height:'20px', width:'20px' , background:item.color , borderRadius:'50%'}}></span></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default CategoryList
