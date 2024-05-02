import UsersReducer from '../reducers/usersReducer';
import React, { useReducer } from 'react'

export const UsersContext = React.createContext();

const UsersContextProvider = (props) => { 
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(UsersReducer, initialState);
  
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

    return (
        <UsersContext.Provider value={{
                users: state.users,
                loading: state.loading,
                searchUsers,
                clearResults
        }}>
            { props.children }
            
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;