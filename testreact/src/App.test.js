import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Link from './Link';


import {render} from 'react-dom'


var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

//run tests using npm test command

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



describe('Link', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Link title="mockTitle" onClick={[Function]} url="mockUrl" />
    );
   // console.log("output : "+ shallowToJson(output));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should handle the click event', () => {
    window.alert = jest.fn();
    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked');
  });
  
  
  it('should handle state changes', () => {
    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    
    expect(output.state().clicked).toEqual(false);
    output.simulate('click');
    expect(output.state().clicked).toEqual(true);
  });
  
});

//      <Link title="mockTitle" url="mockUrl" />, 'element-node'

// jest.mock('react-dom');
// describe('Link', () => {
//   it('should render correctly with mock', () => {

    

//     expect(render).toHaveBeenCalledWith(
//       <App />, <div />
//     );




//     expect(render).toHaveBeenCalledTimes(1);
//   });
// });