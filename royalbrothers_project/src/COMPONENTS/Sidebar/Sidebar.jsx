import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'


 export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
   const styles={
    border:"none",
    textAlign:"left",
    height:"40px",
    backgroundColor:"white",
    borderRadius:"none",
    fontWeight:"400",
    borderBottom:"1px solid #c4c4c4",
    scrollBehavior: "auto",
    cursor:"pointer"
   }
    return (
      <>
        <Button ref={btnRef} backgroundColor="white" onClick={onOpen} marginRight="6px" border="none" cursor="pointer" >
        <HamburgerIcon w={30} h={30} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
           
            <DrawerHeader></DrawerHeader>
  
            <DrawerBody display="flex" flexDirection="column" arginTop="1px" width="20%">
            <DrawerCloseButton style={styles} />
             <Button style={styles}>Tariff</Button>
             <Button style={styles}>Store</Button>
             <Button style={styles}>Carriers</Button>
             <Button style={styles}>Partner With Us</Button>
             <Button style={styles}>Blog</Button>
             <Button style={styles}>Indian Bike Routes</Button>
             <Button style={styles}>About us</Button>
             <Button style={styles}>Terms and conditions</Button>
             <Button style={styles}>privacy policy</Button>
             <Button style={styles}>FAQ</Button>
             <Button style={styles}>Reach us</Button>
             </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }