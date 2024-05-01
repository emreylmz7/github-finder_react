import React, { useState } from 'react'

const Search = ({displayAlert, search, showClearButton, clearResults}) => {

    const [keyword,setKeyword] = useState('');

    const onChange = (e) => {
        setKeyword(e.target.value);
    }   

    const onSubmit = (e) => {
        e.preventDefault();

        if (keyword === '') {
            displayAlert( 'Please Enter the Keyword','danger');
        }
        else{
            search(keyword);
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
                showClearButton && <button onClick={clearResults} className='btn btn-outline-danger mt-2 btn-block' >Clean Results</button>
            }

        </div>
    )
}

export default Search