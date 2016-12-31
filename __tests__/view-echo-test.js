import React from 'react';
import { shallow } from 'enzyme';
import Echo from '../src/view-echo';

function setUp () {
  const props = {
    onClick: jest.fn(),
    inputedVal: 'bar'
  };

  const component = shallow(
    <Echo {...props}/>
  );

  return {
    props: props,
    component: component,
    inputed: component.find('#inputedVal'),
    btn : component.find('#echoBtn'),
    outputed: component.find('#outputedVal')
  };
}

describe('echo view', () => {
  it('output value', () => {
    const { outputed } = setUp();
    expect(outputed.prop('value')).toMatch('bar');
  });

  it('button should call onClick', () => {
    const { btn, props } = setUp();
    btn.simulate('click');
    expect(props.onClick).toBeCalled();
  });

});
