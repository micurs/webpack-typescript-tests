
import * as _ from 'lodash';
import * as React from 'react';


export default class Todos extends React.Component {
    constructor( p ) {
    super(p);
    this.state = {
      nexttodo: '',
      todos: []
    };
  }

  handleAddTodo() {
    if ( this.state.nexttodo.length>0 ) {
      var st = _.clone(this.state);
      st.nexttodo = '';
      st.todos.push(this.state.nexttodo);
      this.setState( st );
    }
  }

  handleReturn( e  ) {
    if ( e.key == 'Enter' )
      this.handleAddTodo();
  }

  handleChange( e ) {
    this.setState({ nexttodo: e.target.value });
  }

  renderTodos() {
    return _.map(this.state.todos, (td,idx) => <li key={idx}>{td}</li> );
  }

  render() {
    return <div>
            <h2>Todos</h2>
            <input type="text" value={this.state.nexttodo} ref={ (i) => i && i.focus()}
                   onChange={this.handleChange.bind(this)} onKeyUp={this.handleReturn.bind(this)}/>
            <button onClick={this.handleAddTodo.bind(this)}>add</button>
            <ul>{this.renderTodos()}</ul>
           </div>;
  }
}
