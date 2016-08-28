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

// This is our component that need to react to changes in the application STATE => is observer
@observer
class Todos extends React.Component<TodosProps,{}> {

  @observable inputvalue: string = ''; // This is the state of the React component => no more setState() !

  constructor( p: TodosProps) {
    super(p);
  }

  // This is an action changing the application state.
  handleAdd() {
    // const textInput = document.getElementById('val') as HTMLInputElement ;
    console.log(this.inputvalue);
    this.props.list.push({ id: counter++, name: this.inputvalue, isdone: false});
    this.inputvalue = '';
  }

  renderTodo( t: Task ) {
    return <li key={t.id}>
      {t.name}
      <span>: &raquo; </span>
      {!t.isdone?<button onClick={() => t.isdone=true }>do it!</button>:<span>done</span>}
    </li>
  }

  render() {
    const { list } = this.props;
    const outli = _.map( list , todo => this.renderTodo(todo) );
    return <div>
      <h3>Todos list</h3>
      <ul>{outli}</ul>
      <input type="text" value={this.inputvalue} onChange={ (e) => this.inputvalue = e.target.value } />
      <button onClick={this.handleAdd.bind(this)}>Add</button>
    </div>;
  }
}

// ================================= </Todos> =================================

let counter = 0;

// This is our application STATE => is observable
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
