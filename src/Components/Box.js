import React from 'react';
import Breakpoints from '@root/src/Components/Breakpoints';
import { getStyle } from '@root/Utilities';




const Box = props => {
  return <>
      <Breakpoints xs>
          <div style={getStyle(props, 0)}>{props && props.children}</div>
      </Breakpoints>
      <Breakpoints sm>
          <div style={getStyle(props, 1)}>{props && props.children}</div>
      </Breakpoints>
      <Breakpoints md>
          <div style={getStyle(props, 2)}>{props && props.children}</div>
      </Breakpoints>
      <Breakpoints lg>
          <div style={getStyle(props, 3)}>{props && props.children}</div>
      </Breakpoints>
  </>
};

export default Box;