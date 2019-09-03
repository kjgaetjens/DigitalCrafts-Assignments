import React,{Component} from 'react';

class BookList extends Component {

    render() {

        let languageItems = this.props.languages.map(language => {
            return <li>{language}</li>
        })
        return(
            <div className="language-container">
                <ul>
                    {languageItems}
                </ul>
            </div>
        )
    }
}

export default BookList