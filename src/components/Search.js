import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        keyword:''
      }
    }

    onChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }   

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.keyword === '') {
            this.props.displayAlert( 'Please Enter the Keyword','danger')
        }
        else{
            this.props.search(this.state.keyword);
            this.setState({
                keyword: ''
            });
        }

        
    }

    render() {
        return (
        <div className="container my-3">
            <form onSubmit={this.onSubmit}>
                <div className="input-group">   
                    <input type="text" value={this.state.keyword} onChange={this.onChange} className='form-control' placeholder='keyword' />
                    <button className="btn btn-primary" type="submit" >Search</button>
                </div>
            </form>

            {
                this.props.showClearButton && <button onClick={this.props.clearResults} className='btn btn-outline-danger mt-2 btn-block' >Clean Results</button>
            }

        </div>

        )
    }
}

export default Search