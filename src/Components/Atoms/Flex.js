import React from 'react';
import { useBreakpoints } from '@root/src/Components/Atoms/Breakpoints';
import { getStyle } from '@root/Utilities';




const Flex = props => {
    const { breakSize } = useBreakpoints();
        
     const sizes = ['xs','sm','md','lg'];

    return  <div {...props} style={getStyle(props, sizes.indexOf(breakSize || 'lg'), true)}>{props && props.children}</div>;
      
}

export default Flex;