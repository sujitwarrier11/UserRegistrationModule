import React from 'react';
import { getTextStyles } from '@root/Utilities';
import TextField from './TextField';

const TextType = ({ children, variant }) => <p style={getTextStyles(variant)}>{children}</p>;

export default TextType;