import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/usersContext';
import { AlertContext } from '../context/alertContext';

const Search = () => {

    const [keyword,setKeyword] = useState('');
    const { searchUsers, users, clearResults } = useContext(UsersContext);
    const { displayAlert } = useContext(AlertContext);


    const onChange = (e) => {
        setKeyword(e.target.value);
    }   

    const onSubmit = (e) => {
        e.preventDefault();

        if (keyword === '') {
            displayAlert( 'Please Enter the Keyword','danger');
        }
        else{
            searchUsers(keyword);
            setKeyword('');
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">   
                    <input type="text" value={keyword} onChange={onChange} className='form-control' placeholder='keyword' />
                    <button className="btn btn-primary" type="submit" >Search</button>
                </div>
            </form>

            {
                users.length > 0 && <button onClick={clearResults} className='btn btn-outline-danger mt-2 btn-block' >Clean Results</button>
            }

        </div>
    )
}

export default Search