const reducer=(state,action)=>{
    switch(action.type){
        case "GETSTORIES":
            return {
                ...state,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages
            };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((element)=>{
                    
                 return  element.objectID != action.payload;
                }
                
                
                )
            }
            
            case "SEARCHPOST":
                return {
                    ...state,
                    query:action.payload
                }
    }
     return state;
    
    }


export default reducer