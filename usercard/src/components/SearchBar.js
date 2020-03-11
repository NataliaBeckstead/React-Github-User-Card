import React, {Component} from 'react';

class SearchBar extends Component {

    render(){
        return(
            <form className='col-3 search' onSubmit={this.props.formHandler}>
                <input type='text' value={this.props.search} onChange={this.props.changeHandler} className="empty" placeholder='&#xF002; Profile name' />
                <button>Show!</button>
            </form>

        )
    }
}

export default SearchBar