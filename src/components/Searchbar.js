import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SeachBar() {
        const {term, handleSearch} = useContext(SearchContext)

        return (
            <form>
                <input ref={term} type='text' placeholder="Search Here" />
                <button onClick={(e)=> handleSearch(e,term.current.value)}>Submit</button>
            </form>
        )

}

export default SeachBar;