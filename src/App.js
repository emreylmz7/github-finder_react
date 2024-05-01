import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Search from './components/Search';
import UserList from './components/UserList';
import React, { useReducer, useState } from 'react'
import UsersReducer from './reducers/usersReducer';

const App = () => {

  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);

  const initialState = {
    users: [],
    loading: false
  }
  const [state, dispatch] = useReducer(UsersReducer, initialState);
  const [error, setError] = useState(null);
 
  const searchUsers = (keyword) => {
    setLoading();
    
    fetch("https://api.github.com/search/users?q=" + keyword)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: "SEARCH_USERS",
          users: data.items
        })
      } ); 
  }

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING"
    });
  }
  const clearResults = () => {
    dispatch({
      type: "CLEAR_USERS"
    });
  }

  const displayAlert = (msg, type) => {
    setError({ msg:msg,type:type });
    
    setTimeout(() => {
      setError(null);
    }, 3000)

  }

  return (
    <div>
      <Navbar/>
      <Search 
        search = {searchUsers} 
        clearResults = {clearResults} 
        showClearButton = {state.users.length > 0 ? true:false}
        displayAlert = {displayAlert}
      />
      <Alert error ={error}/>
      <div className='container mt-3'>
        <UserList users= { state.users} loading= {state.loading} />
      </div>
    </div>
    )
}

export default App
