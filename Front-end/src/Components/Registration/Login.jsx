import { Button } from "@chakra-ui/react"
import { BiLock } from 'react-icons/bi'
export const Login = () => {
    return <div>

        <div style={{display:"flex"}}>
            <BiLock  style={{height:"50px",width:"21%",marginTop:"-10"}}/>
            <Button colorScheme='gray' variant='ghost' color="black" size='sm' >
                Login
            </Button>

        </div>

    </div>
}