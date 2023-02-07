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
           
            {/* <DrawerHeader></DrawerHeader> */}
  
            <DrawerBody display="flex" flexDirection="column" marginTop="50px" width="20%">
            <DrawerCloseButton height="40px" textAlign="right" />
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Store</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Partner With Us</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             <Button textAlign="left" height="40px" backgroundColor="white"  borderRadius="none" fontWeight="400" borderBottom="1px solid #c4c4c4">Tariff</Button>
             </DrawerBody>
  
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }