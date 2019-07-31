import React, { Component } from "react";
import API from "../utils/API"
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

class Detail extends Component {
    state = {
      userFavs: {}
    };

    componentDidMount() {
        // API.getBook(this.props.match.params.id)
        //   .then(res => this.setState({ book: res.data }))
        //   .catch(err => console.log(err));
      }

      render() {
        return (
       <Jumbotron>
           <h1> Welcome to The Easy Stock Tracker</h1>
       </Jumbotron>
        );
      }
    }
    
    export default Detail;
    












