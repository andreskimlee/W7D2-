import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); 
    debugger 
    this.props.receiveTodo({ todo: this.state })
  }

  handleChange(field) {
    return e => {
      // debugger 
      this.setState({ [field]: e.target.value });
    };
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Title">Title</label>
        <input type="text" onChange={this.handleChange('title')} value={this.state.title}/>
        <label htmlFor="Body">Body</label>
        <input type="text" onChange={this.handleChange('body')} value={this.state.body} />
        <input type="submit"/>
      </form>
    )
  }
}

export default TodoForm; 