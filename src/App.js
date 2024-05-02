import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Search from './components/Search';
import UserList from './components/UserList';
import React from 'react'
import UsersContextProvider from './context/usersContext';
import AlertContextProvider from './context/alertContext';

const App = () => {
  return (
    <UsersContextProvider>
      <AlertContextProvider>
        <Navbar />
        <Search />
        <Alert />
        <div className='container mt-3'>
          <UserList/>
        </div>
      </AlertContextProvider>
    </UsersContextProvider>
  )
}

export default App
