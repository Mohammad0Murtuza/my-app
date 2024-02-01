import './BookCard.css';
import bookimg from './../assets/images.jpg'

function BookCard(props) {
  return (
    <div className="BookCard">
        <img src={bookimg}></img>
      <h3>Book Name : <span>{props.name}</span></h3>
      <h3>Price: <span>{props.price}</span></h3>

    </div>
  );
}

export default BookCard;