import { useParams } from 'react-router-dom';
import './Input.css'
import { useAppContextValue } from './AppContextProvider';
import { useEffect, useState } from 'react';


const Edit = () => {
    const {data, editData}= useAppContextValue();
    const [message, setMessage] = useState(false);
    const [edit, setEdit]=useState({});
    const {id}=useParams();

   

    useEffect(() => {
      if (data) {
        const editItem = data.find((item) => item.id === Number(id));
        console.log('editItem:', editItem);
        setEdit(editItem || {});
        
      }
    }, [data, id]);

    const handleChange=(e)=>{
      console.log({...edit,[e.target.name]:e.target.value})
      setEdit({...edit,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
   editData(edit.id, edit)
   setMessage(true)

 }

  return (
    <div className="input-container">
    {message?<h2 className='saved-text'>Your details have been saved!</h2>:null}
   <form onSubmit={handleSubmit}>
   <div className="mb-3">
         <label htmlFor="name-input" className="form-label">Name</label>
         <input type="text" name='name' className="form-control" id="name-input" placeholder="John Doe" value={edit.name || ''}   onChange={handleChange} />
      </div>
      <div className="mb-3">
         <label htmlFor="age-input" className="form-label">Age</label>
         <input type="number" name='age' className="form-control" id="age-input" placeholder="18" value={edit.age || ''} onChange={handleChange} />
      </div>
      
      <div className="mb-3">
         <label htmlFor="email-input" className="form-label">Email address</label>
         <input type="email" name='emailAddress' className="form-control" id="email-input" placeholder="name@example.com"  value={edit.emailAddress || ''}  onChange={handleChange} />
      </div>
      <div className="mb-3">
         <label htmlFor="country-input" className="form-label">Country</label>
         <input type="text" name='country' className="form-control" id="country-input" placeholder="India" value={edit.country || ''}   onChange={handleChange} />
      </div>
      <div className="button">
         <button type="submit" className="btn update">Update data</button>
      </div>
   </form>
</div>
  )
}

export default Edit
