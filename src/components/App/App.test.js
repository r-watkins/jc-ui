import React from 'react';

import App from './App';
import Header from '../Header';
import UserList from '../UserList';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('render main components', () => {
  it('renders the App component', () => {
    shallow(<App />);
  });

  it('renders the Header component within the App component', () => {
    const container = shallow(<App />);

    expect(container.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders the UserList component within the App component', () => {
    const container = shallow(<App />);

    expect(container.containsMatchingElement(<UserList />)).toEqual(true);
  });
});

describe('snapshots', () => {
  it('App snapshot', () => {
    const snap = shallow(<App />);
    expect(toJson(snap)).toMatchSnapshot();
  });
});
