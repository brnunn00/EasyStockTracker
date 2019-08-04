import React, { Component } from "react";
import API from "../utils/API"
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import StockSearch from "../components/StockSearch"
import Button from "../components/Button"
class Detail extends Component {
    state = {
        searchTerm:'',
      userFavs: {}
    };

    componentDidMount() {
        // API.getBook(this.props.match.params.id)
        //   .then(res => this.setState({ book: res.data }))
        //   .catch(err => console.log(err));
      }

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit(event){
          event.preventDefault();
          alert("HIT")
      }
      render() {
        return (
       <Jumbotron>
           <h1> Welcome to The Easy Stock Tracker</h1>
          <StockSearch
             value={this.state.searchTerm}
          name="searchTerm"
          onChange={this.handleInputChange}
          
          />
          <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
       </Jumbotron>
        );
      }
    }
    
    export default Detail;
    












