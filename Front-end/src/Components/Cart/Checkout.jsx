// import style from './cart.module.css';
// import { 
//     Box,
//     Flex
//  } from '@chakra-ui/react';
// export const Checkout = () => {
//     return <div className={style.checkoutPage}>
//         <Flex direction={['column', 'column','column','row-reverse']} className={style.checkoutPage1}>
//             <Box className={style.details} w={['90%', "85%", "80%", "30%"]} minH='200px' bg='#fff'>

//             </Box>
//             <Box className={style.checkout} w={['90%', "85%", "80%", "50%"]} minH='200px' bg='#fff'>

//             </Box>
//         </Flex>
        
//     </div>
// }
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    Text,
} from '@chakra-ui/react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useDisclosure } from '@chakra-ui/react'
import style from './cart.module.css'
import React from 'react';
import { empty_Cart } from '../../Redux/Cart/actions';
import { useDispatch } from 'react-redux';

export function AlertDialogExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const dispatch = useDispatch();

    const checkout = () => {
        dispatch(empty_Cart)
        onClose();
    }
  
    return (
      <>
        <Button display='flex' onClick={onOpen} className={style.proceedToOrder}>
        <Text>PROCEED WITH ORDERS</Text>
        <RiArrowRightSLine className={style.icon} />
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={checkout} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }