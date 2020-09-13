import React from 'react';
import { Flex, Box, TextType, TextField, Button } from '@root/src/Components/Atoms';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { callRegister } from '@root/src/Redux/ActionCreators';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        dispatch(callRegister({ ...values }));
    }

    return <Flex width="100%" height="100%" flexDirection="column" backgroundImage="/signup-bg.jpg" alignItems="center">
        <Box m="auto" r="15px" bg="white" width={['95%', '95%', '45%', '45%']} alignItems="center" px={['25px', '25px', '85px', '85px']} py="50px">
            <Box mb="40px">
                <TextType variant="header">Register</TextType>
            </Box>
            <Form
                onSubmit={handleSubmit}
                validate={values => {
                    const objErrors ={};
                    if(values.password){
                        if(values.password !== values.confirmPass)
                          objErrors.confirmPass = "Passwords do not match."
                    }
                    return objErrors;
                }}
                render={({ form, values, invalid, handleSubmit }) => {
                    return (<form onSubmit={handleSubmit}>
                        {console.log("values", values)}
                        <Flex justifyContent={['center', 'center', 'space-between', 'space-between']} flexDirection={['column', 'column', 'row', 'row']}>
                            <Box width={['100%', '100%', '47%', '47%']}>
                                <Field
                                    name="firstName"
                                    render={({ input, meta }) => (
                                        <TextField label="First Name" input={input} meta={meta} styleProps={{
                                            width:"100%",
                                            marginBottom: '16px'
                                        }} />
                                    )}
                                />
                            </Box>
                            <Box width={['100%', '100%', '47%', '47%']}>
                                <Field
                                    name="lastName"
                                    render={({ input, meta }) => (
                                        <TextField label="Last Name" input={input} meta={meta} styleProps={{
                                            width:"100%",
                                            marginBottom: '16px'
                                        }} />
                                    )}
                                />
                            </Box>
                        </Flex>
                        <Field
                            name="username"
                            render={({ input, meta }) => (
                                <TextField label="Username" input={input} meta={meta} styleProps={{
                                    width: '100%',
                                    marginBottom: '16px'
                                }} />
                            )}
                        />
                        <Field
                            name="password"
                            render={({ input, meta }) => (
                                <TextField label="Password" inputType="password" input={input} meta={meta} styleProps={{
                                    width: '100%',
                                    marginBottom: '16px'
                                }} />
                            )}
                        />
                        <Field
                            name="confirmPass"
                            render={({ input, meta }) => (
                                <TextField label=" Confirm Password" inputType="password" input={input} meta={meta} styleProps={{
                                    width: '100%',
                                    marginBottom: '50px'
                                }} />
                            )}
                        />

                        <Button size="medium" buttonType="submit">Register</Button>
                    </form>)
                }} />

        </Box>
    </Flex>
}

export default withRouter(Register);