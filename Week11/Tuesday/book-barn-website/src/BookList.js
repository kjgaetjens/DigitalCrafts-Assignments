import React,{Component} from 'react';

class BookList extends Component {

    render() {

        let bookItems = this.props.books.map(book => {
            return <div className="book-item">
                    <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}/>
                    <div>{book.title} - {book.author}</div>
                </div>
        })

        return(
            <div className="book-container">
                {bookItems}
            </div>
        )
    }
}

export default BookList