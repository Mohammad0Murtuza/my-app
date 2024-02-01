import './App.css';
import BookCard from './Components/BookCard';
import Navbar from './Components/Navbar';
import Quotation from './Components/Quotation';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='QuotationContainer'>
          <Quotation />
          <Searchbar />
      </div>
      
      <div className='BooksContainer'>
        <BookCard name="Physics" price="Rs.420"/>
        <BookCard name="Chemistry"/>
        <BookCard name="Math"/>
        <BookCard name="Computer"/>
      </div>
      
    </div>
  );
}

export default App;
