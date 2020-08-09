import React from 'react';
import { useBreakpoints } from '@root/src/Components/Atoms/Breakpoints';
import { getStyle } from '@root/Utilities';




const Box = props => {
    const { breakSize } = useBreakpoints();
        
    const sizes = ['xs','sm','md','lg'];

   return  <div style={getStyle(props, sizes.indexOf(breakSize || 'lg'))}>{props && props.children}</div>;
};

export default Box;