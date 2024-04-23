import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { useAppContextValue } from "./AppContextProvider";
import "./Show.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Show = () => {
  const { data, deleteData,} = useAppContextValue();
  const[message, setMessage]=useState(false)
const navigate=useNavigate();

useEffect(()=>{
  console.log('data in Show', data);
 if(data.length===0){
  setMessage(true)
 }else{
  setMessage(false)
 }
},[data])

const handleDelete=(id)=>{
  deleteData(id)
}
const handleEdit=(id)=>{
  console.log('edit', id);
  navigate(`/edit/${id}`)
}
  return (
    <div className="show-container">
      {message? (
        <h4>No details yet</h4>
      ):(
        <>
       
          {data.map((input) => (
            <div className="card" style={{ width: '18rem' }} key={input.id}>
              <div className="card-body">
                <h5 className="card-title">Student Details</h5>
             
                <p>Name: {input.name}</p>
                <p>Age: {input.age}</p>
                <p>Email address: {input.emailAddress}</p>
                <p>Country: {input.country}</p>
              <div className="buttons">
                <button className="delete-button" onClick={()=>{handleDelete(input.id)}}>
                  <RiDeleteBin5Line  />
                </button>
                <button className="edit-button" onClick={()=>{handleEdit(input.id)}}>
                  <MdEdit />
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
      )}
      
    </div>
  );
};

export default Show;
