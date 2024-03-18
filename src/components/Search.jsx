import { useContext } from "react";
import { AppContext } from "./Contextt";

const Search=()=>{
    const data=useContext(AppContext);
    const {query,SearchPost}=data;
    return (
        <>
            <div>
                <h1>Tech News </h1>
                <form >
                    <div>
                        <input type="text" placeholder="Search Here" onChange={(e)=>{SearchPost(e.target.value)}} value={query}/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Search;