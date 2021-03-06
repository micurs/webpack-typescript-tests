/// <reference path="../typings/index.d.ts"/>

import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, reaction } from 'mobx';
import {observer} from 'mobx-react';


interface Task {
  id: number;
  name: string;
  isdone: boolean;
};

// ================================= <Todos> =================================

interface TodosProps {
  list: Task[];
}

// This component needs to react to changes in the application STATE => it is the observer
@observer
class Todos extends React.Component<TodosProps,{}> {

  @observable inputvalue: string = ''; // This is the state of the React component => no more setState() !

  constructor( p: TodosProps) {
    super(p);
  }

  // This is an action changing the application state directly.
  handleAdd() {
    console.log(this.inputvalue);
    this.props.list.push({ id: counter++, name: this.inputvalue, isdone: false});
    this.inputvalue = '';
  }

  handleAddOnReturn( e ) {
    if ( e.which === 13 ) {
      this.handleAdd();
    }
  }

  renderTodo( t: Task ) {
    return <li key={t.id}>
      <input type="checkbox" checked={t.isdone} onChange={ () => t.isdone = !t.isdone }/>
      {t.name}
      { t.isdone? <small><em> congrats!</em></small> : <span/> }
    </li>;

  }

  render() {
    const { list } = this.props;
    const outli = _.map( list , todo => this.renderTodo(todo) );
    return <div>
      <h3>Todos list</h3>
      <ul>{outli}</ul>
      <input type="text" value={this.inputvalue} onKeyPress={this.handleAddOnReturn.bind(this)} onChange={ (e) => this.inputvalue = e.target.value } />
      <button onClick={this.handleAdd.bind(this)}>Add</button>
    </div>;
  }
}

// ================================= </Todos> =================================

let counter = 0;

// This is our application STATE => it is the observable
const list = observable([
  { id: counter++, name: 'test1', isdone: false },
  { id: counter++, name: 'test2', isdone: true }
]);

const reaction1 = reaction(
    () => list.length,
    count => console.log("Change in todo number:", count )
);

const reaction2 = reaction(
    () => _.filter(list, t => t.isdone ),
    completed => console.log("Change in completed todos:", completed.length )
);

// Instantiate the React component in the div#main element
ReactDOM.render(<Todos list={list}/>, document.getElementById('main') );
