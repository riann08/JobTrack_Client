import React from "react";
import axios from "axios";


class SearchBar extends React.Component {
  state = {
    searchValue :  "",
  };

  handleSearch = (event) => {
    const {name , value} = event.target;
       this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get("/search", {
        value: this.state.searchValue,
      })

      .then((apiResponse) => {
        console.log(apiResponse);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  render() {
    return (
      <form className="Searchbar flex--row" onSubmit={this.handleSubmit}>
        <div>
          <input id="search" onChange={this.props.search} type="search" name="search" value={this.props.value} placeholder={this.props.value} />
        </div>
        <input type="submit" value="search" />      
        </form>
    );
  }
}

export default SearchBar

