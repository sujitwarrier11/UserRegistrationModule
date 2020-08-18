import React,{ useRef, useState } from 'react';
import { Flex, Box, TextType, TextField, Button, Snackbar } from '@root/src/Components/Atoms';
import { Form, Field } from 'react-final-form';

const Profile = () => {
     const ref = useRef(null);

     const [currImage ,setCurrentImage] = useState('');
    
    const handleSubmit = values => {
        console.log("img",ref.current);
    }

    const readerLoad = e => {
        setCurrentImage(e.target.result);
    }

    const fileUploadChange = e => {
        const reader = new FileReader();
        reader.addEventListener("load",readerLoad);
        reader.readAsDataURL( e.target.files[0] );
    }



 
   return <Flex width="100%" height="100%" flexDirection="column" bg="bgBlue" alignItems="center">
    <Box m="auto" r="15px" bg="white" width={['95%', '95%', '45%', '45%']} alignItems="center" px={['25px', '25px', '85px', '85px']} py="50px">
        <Box mb="40px">
            <Flex flexDirection="column" alignItems="center">
            <TextType variant="header">Profile</TextType>
            <TextType variant="normal">Upload your relevant documents for verification.</TextType>
            </Flex>
        </Box>
       <input ref={ref} type="file" style={{
           display: 'none'
       }} onChange={fileUploadChange} />
       <Flex style={{
           cursor: 'pointer',
           borderStyle: 'dashed'
       }} mx="auto" onClick={() => ref.current.click()}  alignItems="center" width={['90%','90%','70%','70%']} height={['70px','70px','400px','400px']}>
           {
               currImage ? <img src={currImage} style={{
                   width: '100%',
                   height:'100%'
               }} /> : <Box m="auto"><TextType variant="normal">Click to Upload</TextType></Box>
           }
       </Flex>
       <Flex alignItems="center" mt="25px">
       <Button  buttonType="button" style={{
           marginLeft: 'auto',
           marginRight: 'auto'
       }} onClick={()=> console.log("currImage", currImage)}>Save</Button>
       </Flex>
    </Box>
    
</Flex>

}

export default Profile;