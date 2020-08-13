import React from 'react';
import Text from '@material-ui/core/TextField';


const TextField = ({ error, validationMessage, label, behaviourProps, inputType, styleProps ,input, meta }) => {
     const metaProps = {};
    if(meta.error){
        if(meta.touched){
            metaProps.error = true;
            metaProps.helperText = meta.error;
        }
    }
    console.log("metaprops",metaProps)
    console.log("metaprops",meta.touched)
    return <Text 
    {...input}
    label={label}
    InputLabelProps={{
        ...behaviourProps
    }}
    type={inputType}
    style={styleProps}
    {...metaProps}
    />
}

export default TextField;