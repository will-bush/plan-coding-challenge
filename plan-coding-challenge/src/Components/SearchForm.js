import React from 'react';
import './SearchForm.css'

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.props.setSearchQuery(this.state.value);
        this.props.clearSelectedResult();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="searchForm">
          <label>
            <strong>Search: </strong>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Please enter a movie title"/>
          </label>
          <input type="submit" value="Submit" id="submit"/>
        </form>
      );
    }
  }

  export default SearchForm;