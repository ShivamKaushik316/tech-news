import { useContext } from "react";
import { AppContext } from "./Contextt"
import { useReducer } from "react";

const Card=()=>{
    const {hits,nbPages,removePost}=useContext(AppContext);
    // console.log(data);
    

    

    return (
        <>
            {hits.map((element)=>{
                const {title,author,objectID,url,num_comments}=element;
                return (
                    <>
                        <div className="stories-div ">
                        <div className="card">
                            <h2>{title}</h2>
                            <p>
                                By <span>{author}</span> | <span>{num_comments}</span> Comments
                            </p>

                            <div className="card-button">
                                <a href={url} target="_blank">Read More</a>
                                {/* <a href="#" onClick={removePost(objectID)}> Remove</a> */}
                                <button onClick={()=>{removePost(objectID)}}>Remove</button>
                            </div>
                        </div>
                        
                        
                         </div>

                    </>


                )
            })}
            
        </>
    )
}
export default Card;