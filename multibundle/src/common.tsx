/// <reference path="../typings/index.d.ts"/>

import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// ================================= <Page> =================================

interface PageProps {
  name: string;
  link: {
    name: string;
    href: string;
  }
}

class Page extends React.Component<PageProps,{}> {
  constructor( p: PageProps) {
    super(p);
  }

  render() {
    const { name, link } = this.props;
    return <div>
      <h3>This is {name} React Component</h3>
      <p>Go to <a href={link.href}>{link.name}</a></p>
    </div>;
  }
}

// ================================= <PageA> =================================

interface PageAProps {}
interface PageAState {}

export class PageA extends React.Component<PageAProps,PageAState> {
  constructor( p: PageAProps) {
    super(p);
    this.state = {};
  }

  render() {
    return <Page name="PageA" link={ {name: 'PageB', href:'/static/pageb.html' }} />;
  }
}

// ================================= <PageB> =================================

interface PageBProps {}
interface PageBState {}

export class PageB extends React.Component<PageBProps,PageBState> {
  constructor( p: PageBProps) {
    super(p);
    this.state = {};
  }

  render() {
    return <Page name="PageB" link={ {name: 'PageA', href:'/static/pagea.html' }} />;
  }
}