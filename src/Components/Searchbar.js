import './Searchbar.css';
function Searchbar() {
    return (
        <div className="Searchbar">
            <h2 className="SearchbarText">Search</h2>
            <input type='text' placeholder='Search Your Book'></input>
        </div>
      );
    }


export default Searchbar;