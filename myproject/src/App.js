
import './App.css';
import React from 'react'
import List from './List.js'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],

      text: '',
      key: '',
      date: '',
      title: ''

    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleTitle = this.handleTitle.bind(this);

  }
  handleTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  handleInput(e) {
    this.setState({
      text: e.target.value,
      key: new Date().toLocaleString(),
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = { text: this.state.text, key: this.state.key, title: this.state.title };
    console.log(newItem)


    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      console.log(newItems)
      this.setState({
        items: newItems,

        text: '',
        key: '',
        title: ''


      })
    }

  }

  deleteItem(key) {
    if (window.confirm("Are you sure you want to delete this message?")) {

      const filterItems = this.state.items.filter(item => item.key !== key);
      this.setState({
        items: filterItems
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container site-wrapper">
          <div className="row">

            <div className="col-12">
              <div className="form-wrapper shadow">
                <form id="notes-form" className="my-0" onSubmit={this.addItem}>
                  <div className="form-group">
                    <input className="form-control title-input" type="text"
                      placeholder="Title"
                      value={this.state.title}
                      onChange={this.handleTitle} ></input>
                    <textarea className="form-control text-input" type="text"
                      placeholder="Your Note.."
                      value={this.state.text}
                      onChange={this.handleInput} ></textarea>
                    <button type="submit" className="btn btn-primary form-btn">Add</button>
                  </div>
                </form>
              </div>

            </div>

          </div>
          <div className="row">
            <List items={this.state.items}
              deleteItem={this.deleteItem}
            // date={this.state.key}
            ></List>
          </div>
        </div>
      </div>


    )
  }
}

export default App;




