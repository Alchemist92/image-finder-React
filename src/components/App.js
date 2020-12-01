import React from "react";
import axios from "axios";
import Searchbar from './Searchbar';
import ImageList from './ImageList';


class App extends React.Component{
  state = {images: []};

  onSearchSubmit= async (term) =>{
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID 8S3MQiuQLjS4521oUlan-e5_NWxDIkLoUAwUaL2TrUM'
      }
    });

  this.setState({images: response.data.results});
  }

  render(){
    return (
      <div className = "ui container" style = {{marginTop: "10px"}}> 
        <Searchbar onSubmit = {this.onSearchSubmit}/>
        <ImageList images = {this.state.images}/>
     </div>
    )
  } 
}


export default App;