import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state.inputValue);
  }

  onUsernameChange(event) {
    const value = event.target.value;
    this.setState({ inputValue: value });
  }

  render() {
    return (
      <form onSubmit={(event) => this.onSubmit(event)}>
        <input
          name="username"
          type="text"
          onClick={(event) => this.onUsernameChange(event)}
        />
        <input type="submit" value="add" />
        {<h1>{this.state.inputValue}</h1>}
      </form>
    )
  }
}


// function App() {
//   return (
//     <div className="container">
//       <form className="form-group w-50 p-3 mx-auto">
//         <textarea className="form-control" rows="3"></textarea>
//         <input className="btn btn-primary mt-2" type="submit" value="Submit"></input>
//       </form>
//     </div>
//   );
// }

export default SearchForm;


