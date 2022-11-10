import React from 'react'
import { Select, textDecoration } from '@chakra-ui/react'
import { Register } from '../Registration/Register'
import { Login } from '../Registration/Login'

const UpparSection = () => {
    return (
        <div>
            <div className="Mbox1" style={{ border: "1px solid gray", height: "40px", width: "80%" ,display:"flex",justifyContent:"space-evenly",overflow:"hidden",position:"fixed",top:"0", marginLeft: "10%",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",backgroundColor:"white"}}>

                <div className='Sbox11' style={{  height: "auto", width: "40%", margin: "auto" }}>
                   <Select className='country1' placeholder='Country' size='sm' width="120px"  border="none" color="black" >
                        <option value='option1'>INDIA</option>
                        <option value='option2'>USA</option>
                        <option value='option3'>RUSSIA</option>
                        <option value='option1'>CHINA</option>
                        <option value='option2'>JAPAN</option>
                        <option value='option3'>NEPAL</option>
                        <option value='option1'>BHUTAN</option>
                        <option value='option2'>FRANCE</option>
                        <option value='option3'>UK</option>
                        <option value='option1'>India</option>
                        <option value='option2'>Usa</option>
                        <option value='option3'>China</option>
                   </Select>
                    <div className='customer' style={{ marginTop: "-29px", marginLeft: "-110px" }}>
                        {/* <h5 style={{ color:"black"}}>CUSTOMER CARE</h5> */}
                        <p style={{fontSize:"13px",fontWeight:"bold",marginTop:"2px"}}>CUSTOMER CARE</p>
                    </div>


                </div>


                <div className='Sbox11' style={{  height: "auto", width: "40%", margin: "auto",display:"flex",justifyContent:"flex-end" }}>
                    <Register/>
                    <Login/>

                </div>
                

              



            </div>
          <div className='line'>
            <hr style={{ borderTop: "1px solid gray"}} />

          </div>

        </div>
    )
}

export default UpparSection