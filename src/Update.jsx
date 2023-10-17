import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './UserReducer';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  const [uname, setName] = useState(existingUser[0].name);
  const [uemail, setEmail] = useState(existingUser[0].email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }));
    navigate('/');
  };

  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
          <h2>Update User</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" className="form-control" placeholder='Enter name' value={uname} onChange={e => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" className="form-control" placeholder='Enter email' value={uemail} onChange={e => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;