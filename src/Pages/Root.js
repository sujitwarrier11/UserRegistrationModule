import React from 'react';
import Flex from '@root/src/Components/Flex';

const Root = () => {
    return <Flex width="100%" height="100%" flexDirection="column" bg="bgBlue">
        <h1>Register</h1>
        <button onClick={()=> alert('clicked!!!!')}>Click!!!</button>
    </Flex>
}

export default Root;