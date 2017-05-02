import React, { Component } from 'react';

import '../App.css';
import ListCard from './ListCard';
import SearchAPI from './SearchAPI';


class Home extends Component {

  constructor(props){
      super(props);
      this.state = {
        data: []
      }
      // this.addOneData = this.addOneData.bind(this);
  }

  // addOneData(type, item){
  //   console.log(item);
  //   fetch(`http://swapi.co/api/${type}/${item}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     this.setState({data: this.state.data.concat(data)});
  //   })
  //   .catch(err => console.error(err))
  //
  // }



  render() {
    return (
      <div className="App">
        <ListCard  />
      </div>
    );
  }
}

export default Home;
