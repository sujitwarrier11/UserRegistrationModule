import Text from '@material-ui/core/TextField';

const TextField = ({ error, validationMessage, label, behaviourProps, inputType }) => {
    return <Text 
    error={error}
    label={label}
    helperText={validationMessage}
    InputLabelProps={behaviourProps}
    type={inputType}
    />
}

export default TextField;