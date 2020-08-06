import React from 'react';
import Box from '@root/src/Components/Box';
import Breakpoints from '@root/src/Components/Breakpoints';
import { getStyle } from '@root/Utilities';

console.log("getStyle",getStyle);


const Flex = props => {
    return <>
        <Breakpoints xs>
            <div style={getStyle(props, 0, true)}>{props && props.children}</div>
        </Breakpoints>
        <Breakpoints sm>
            <div style={getStyle(props, 1, true)}>{props && props.children}</div>
        </Breakpoints>
        <Breakpoints md>
            <div style={getStyle(props, 2, true)}>{props && props.children}</div>
        </Breakpoints>
        <Breakpoints lg>
            <div style={getStyle(props, 3, true)}>{props && props.children}</div>
        </Breakpoints>
    </>
}

export default Flex;