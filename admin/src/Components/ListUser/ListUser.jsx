import React, { useEffect, useState } from 'react';
import './ListUser.css';

const ListUser = () => {

const [alluser,setAllUsers] = useState ([]);

const fetchInfo = async ()=>{
  await fetch('http://localhost:4000/allusers')
  .then((res)=>res.json())
  .then((data)=>{setAllUsers(data)});
}

useEffect(()=>{
  fetchInfo();
},[])

  return (
    <div className='list-user'>
      <h1>All User List</h1>
      <div className="listuser-format-main">
        <p>User Id</p>
        <p>User Name</p>
        <p>User Email</p>
        <p>User Password</p>
      </div>
      <div className="listuser-allusers">
        <hr />
        {alluser.map((user,index)=>{
          return <>
          <div key={index} className='listuser-format-main listuser-format'>
            <p>{user._id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
};

export default ListUser;