// import React from "react"
// import  { PopoverCloseButton,PopoverFooter,PopoverContent,Box, Button, PopoverBody, PopoverHeader,Popover, PopoverTrigger, Portal } from "@chakra-ui/react"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'



// function ButtonPopup() {
//     const initRef = React.useRef()
//     return (
//       <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
//         {({ isOpen, onClose }) => (
//           <>
//             <PopoverTrigger>
//               <Button marginTop="-50px" size='lg'> {isOpen ? 'close' : 'Signup'}</Button>
//             </PopoverTrigger>
//             <Portal>
//               <PopoverContent>
//                 {/* <PopoverHeader>This is the header</PopoverHeader> */}
//                 <PopoverCloseButton />
//                 <PopoverBody>
//                   <Box>
//                   Sign up for the newsletter
//                   </Box>
//                   <Button
//                     mt={4}
//                     colorScheme='blue'
//                     onClick={onClose}
//                     ref={initRef}
//                   >
//                     Apply
//                   </Button>
//                 </PopoverBody>
                
//               </PopoverContent>
//             </Portal>
//           </>
//         )}
//       </Popover>
//     )
//   }

// export default ButtonPopup


function ButtonPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {/* <Button onClick={onOpen} marginTop="-50px" w="200px" bg="#333333" color="white">SIGN UP</Button> */}
      <Button onClick={onOpen}  w="200px" bg="#333333" color="white" borderRadius='0' colorScheme='black' >
      SIGN UP
        </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Signup Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             <p>Sign up for the newsletter and discover the latest arrivals and promotions</p>
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Apply
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ButtonPopup