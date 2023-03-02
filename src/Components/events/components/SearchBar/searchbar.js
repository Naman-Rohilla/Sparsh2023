import { TextField } from "@mui/material"
// import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css';

const Searchbar=(props)=>{

    const [value,setValue]=useState(null);
    return (
    //     <input
    //     //   value={this.state.value}
    //       onChange={(e) => props.onSearchHandler(e.target.value)}
    //       style={{ 
    //         width:'300px' ,
    //          background:'transparent',
    //           height: '34px',
   
    
    // boxShadow: '0px 0px 2px 1px #20d1d1',
    // border:'none',
    // position: 'fixed',
    // right: '84px',
    // fontSize: '16px',
    // borderRadius: '0px',
    // padding:'0px 5px'
    //     }}
    //       placeholder="Search Event"
    //     //   onRequestSearch={() => doSomethingWith(this.state.value)}
    //     />

        <div class="search-box">
  <input class="search-input" type="text" name="" placeholder="Pesquise" onChange={(e) => props.onSearchHandler(e.target.value)}/>
  <a href="#" class="search-btn">
    <SearchIcon/>
  </a>     
</div>
      );
}

export default Searchbar