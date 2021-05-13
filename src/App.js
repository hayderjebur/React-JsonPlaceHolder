import { useState, useEffect } from 'react';
import UserItem from './UserItem';
import Sliders from './Silders';
import './App.css';

const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json()
  );
};

function App({ slides }) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    address: {
      city: '',
      street: '',
    },
  });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchData().then((data) => setUsers(data));
  }, [user]);

  const onChange = (e) => {
    const name = e.target.name;
    if (name === 'name') {
      setUser({
        ...user,
        [name]: e.target.value,
      });
    } else if (name === 'city') {
      setUser({
        ...user,
        address: {
          ...user.address,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const getUserById = (id) => {
    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((response) => response.json())
    //   .then((user) => setUser(user));
    const foundUser = users.filter((user) => user.id === id);
    setUser(foundUser[0]);
  };

  const updateUser = (user) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    updateUser(user);
    setEdit(false);
  };
  console.log(user);
  return (
    <div className='App'>
      <Sliders slides={slides} />
      {edit ? (
        <form onSubmit={onSubmit} className='card text-center all-center'>
          <input
            style={{ width: '15rem' }}
            type='text'
            name='name'
            value={user.name}
            placeholder='First name'
            onChange={onChange}
          />
          <input
            style={{ width: '15rem' }}
            type='text'
            name='city'
            value={user.address.city}
            placeholder='Change city....'
            onChange={onChange}
          />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        users.map((user) => (
          <UserItem
            edit={edit}
            setEdit={setEdit}
            onChange={onChange}
            user={user}
            getUserById={getUserById}
            key={user.id}
          />
        ))
      )}
    </div>
  );
}

export default App;
