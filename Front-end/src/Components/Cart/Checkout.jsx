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
import { Empty_Cart_Item } from '../../Redux/Cart/actions';
import { useDispatch, useSelector } from 'react-redux';

export function AlertDialogExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const dispatch = useDispatch();
    const token = useSelector(store=>store.auth.data.token)

    const checkout = () => {
        dispatch(Empty_Cart_Item(token))
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
                Checkout
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You want to Checkout?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='green' onClick={checkout} ml={3}>
                  CheckOut
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }