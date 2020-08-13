import React,{ useRef } from 'react';
import { Flex, Box, TextType, TextField, Button, Snackbar } from '@root/src/Components/Atoms';
import { Form, Field } from 'react-final-form';

const Profile = () => {
     const ref = useRef(null);
    
    const handleSubmit = values => {
        console.log("img",ref.current);
    }
 
   return <Flex width="100%" height="100%" flexDirection="column" bg="bgBlue" alignItems="center">
    <Box m="auto" r="15px" bg="white" width={['95%', '95%', '45%', '45%']} alignItems="center" px={['25px', '25px', '85px', '85px']} py="50px">
        <Box mb="40px">
            <TextType variant="header">Profile</TextType>
        </Box>
        <Form
            onSubmit={handleSubmit}
            render={({ form, values, invalid, handleSubmit }) => {
                return (<form onSubmit={handleSubmit}>
                   <TextType variant="normal">
                       Upload your documents here.
                   </TextType>
                    <Field
                        name="upload"
                        render={({ input, meta }) => {
                            const onChange = e => {
                                input.onChange(e.target.files);
                            }
                           return  <input ref={ref} type="file" onChange={onChange} />
                        }}
                    />
                    <Button size="medium" buttonType="submit" disabled={invalid}>Upload</Button>
                </form>)
            }} />

    </Box>
    
</Flex>

}

export default Profile;