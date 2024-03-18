// import { useEffect } from "react";
import React, { useReducer } from "react";
import { useEffect } from "react";
import reducer from './reducer'
let AppContext=React.createContext();

let AppProvider=({children})=>{
    const initialState={
        page:0,
        query:"html",
        nbPages:0,
        hits:[]
    }
    const [state,dispatch]=useReducer(reducer,initialState);


    
    const API="https://hn.algolia.com/api/v1/search?";

    const getData=async(api)=>{
        try{
            let res=await fetch(api);
            let data=await res.json();
            // console.log(data);
            dispatch({type:"GETSTORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                },
            });
        }
       catch(e){
            return e;
       }
    }

    
    const removePost=(post_id)=>{
        console.log(post_id)
        dispatch({type:"REMOVE_POST",
            payload:post_id,

        })

    }


    const SearchPost=(searchQuery)=>{
        dispatch({type:"SEARCHPOST",payload:searchQuery})
    }
    useEffect(()=>{
        getData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query])

    


    


    return (
        <AppContext.Provider value={{...state ,removePost,SearchPost}}>{children}</AppContext.Provider>
    )

}

export{AppContext,AppProvider};