import {useState} from "react";
import {useNavigate} from "react-router-dom";


function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()
   const handleSubmit = function(e){
    e.preventDefault();
    if(!searchQuery) return;
    navigate(`/order/${searchQuery}`)
    setSearchQuery("");
   }

//    useEffect(function(){
//     navigate(`/order${searchQuery}`)
      
//     }, [searchQuery, navigate])
    return (
        <form onSubmit = {handleSubmit}>

        <input placeholder = "Search Order By ID" value = {searchQuery} onChange = {(e)=> setSearchQuery(e.target.value)}/>
        </form>
            
        
    )
}

export default SearchOrder
