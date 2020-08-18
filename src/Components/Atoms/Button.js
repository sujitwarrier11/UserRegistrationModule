import React from 'react';
import MatButton from '@material-ui/core/Button';


const Button = ({ children, variant, size, color, buttonType, ...props }) => <MatButton {...props} variant={variant || "contained"} color={color || "primary"} size={size} type={buttonType || "submit"}>
    {children}
</MatButton>

export default Button;