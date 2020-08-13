import React from 'react';
import { Flex, Box, TextType, TextField, Button } from '@root/src/Components/Atoms';
import withAuth from '@root/src/Components/withAuth';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { login } from '@root/src/Redux/ActionCreators';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        dispatch(login({ ...values }));
    }

    const isRequired = value => value ? undefined : '* Required';

    return <Flex width="100%" height="100%" flexDirection="column" backgroundImage="/signup-bg.jpg" alignItems="center">
        <Box m="auto" r="15px" bg="white" width={['95%', '95%', '45%', '45%']} alignItems="center" px={['25px', '25px', '85px', '85px']} py="50px">
            <Box mb="40px">
                <TextType variant="header">Login</TextType>
            </Box>
            <Form
                onSubmit={handleSubmit}
                render={({ form, values, invalid, handleSubmit }) => {
                    return (<form onSubmit={handleSubmit}>
                        {console.log("values", values)}
                        <Field
                            name="username"
                            render={({ input, meta }) => (
                                <TextField label="Username" input={input} meta={meta} styleProps={{
                                    width: '100%',
                                    marginBottom: '16px'
                                }} />
                            )}
                            validate={isRequired}
                        />
                        <Field
                            name="password"
                            render={({ input, meta }) => (
                                <TextField label="Password" inputType="password" input={input} meta={meta} styleProps={{
                                    width: '100%',
                                    marginBottom: '50px'
                                }} />
                            )}
                            validate={isRequired}
                        />
                        <Button size="medium" buttonType="submit" disabled={invalid}>Login</Button>
                        <Box mt="15px">
                            <TextType variant="normal">
                               Sign up <Link to="/register">here</Link>.
                            </TextType>
                        </Box>
                    </form>)
                }} />

        </Box>
    </Flex>
}

export default withRouter(withAuth(Login));