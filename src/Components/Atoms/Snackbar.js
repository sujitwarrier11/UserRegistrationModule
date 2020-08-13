import React from 'react';
import Flex from '@root/src/Components/Atoms/Flex';
import TextType from '@root/src/Components/Atoms/TextType';


const SnackBar = ({ variant, open, snackbarText, onClose, ...props }) => {
    const styleprops ={};
    if(variant === 'success'){
        styleprops.bg = 'success';
        
    } else if(variant === 'error'){
        styleprops.bg = 'error';
    }
    styleprops.height = '50px'
    styleprops.width = '100%';
  
return<> { open && <Flex {...styleprops} {...props} justifyContent="center"  position="fixed" style={{
    top: '0',
    zIndex: 30,
    boxShadow: '0 0 10 px 0 rgba(0, 0, 0, 0.4)'
}}>
    <Flex mx="auto">
   <TextType variant="status">
       {snackbarText}
   </TextType>
   </Flex>
</Flex>}</>

}

export default SnackBar;