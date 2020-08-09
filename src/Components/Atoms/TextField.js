import React from 'react';
import Text from '@material-ui/core/TextField';

const TextField = ({ error, validationMessage, label, behaviourProps, inputType, styleProps ,input, meta }) => {
    return <Text 
    {...input}
    error={error}
    label={label}
    helperText={validationMessage}
    InputLabelProps={{
        ...behaviourProps
    }}
    type={inputType}
    style={styleProps}
    />
}

export default TextField;