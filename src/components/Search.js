import React, { useState } from "react";

const Search=(props)=>{
    const [searchvalue,setSearchvalue]=useState("");
      const  change=(e)=>{
               setSearchvalue(e.target.value)
        }
        const kong=()=>{
                setSearchvalue("")
        }
      const  submit=(e)=>{
            e.preventDefault();
            props.search(searchvalue);
            kong()
        }
        return(
                <form>
                            <input type="text" value={searchvalue} onChange={change}/>
                            <input type="button" onClick={submit} value="click"/>
                </form>
        )
}

export default Search;