import React from 'react';

const UserItem = ({ user, getUserById, edit, setEdit }) => {
  return (
    <div className='card text-center '>
      <div className='card'>
        <div className='all-center'>
          <h1>Name: {user.name}</h1>
          <h3>Email: {user.email}</h3>
          <p>Location: {user.address.city}</p>
          <p>Street: {user.address.street}</p>
        </div>

        <button
          onClick={() => {
            getUserById(user.id);
            setEdit(!edit);
          }}
          style={style}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

const style = {
  color: '#fff',
  fontSize: '1rem',
  margin: '1rem',
  padding: '0.2rem 1.5rem',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  borderRadius: '20px',
  background: ' #003699',
};

export default UserItem;
