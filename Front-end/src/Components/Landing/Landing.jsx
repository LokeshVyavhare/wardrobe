import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import styles from './Landing.module.css'
import UpparSection from './UpparSection'



const links = [


    { path: "/womens", title: "WOMEN", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_24_splash_W.jpg?634485886601286852" },
    { path: "/mens", title: "MENS", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_23_splash_M.jpg?634485886601286852" },
    { path: "/kids", title: "KIDS", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_18_splash_K.jpg?634485886601286852" },
    { path: "/design", title: "DESIGN+ART", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_16_splash_D.jpg?634485886601286852" }
];



export const Landing = () => {


    return <div style={{ height: "auto" }}>
        {/* <h1>Landing</h1> */}

        {/* uppar section */}
        <UpparSection />

        <div className={styles.logo} >
            <img src="https://i.postimg.cc/0Nzmz4DK/logo-wrdrb.png" alt="Logo" />
            <p >SHOP FASHION / DESIGN+ART</p>

        </div>

        <div className={styles.mainPages}>
            {links.map((link) => (
                <NavLink

                    className={({ isActive }) => {
                        return isActive ? styles.active : styles.default;
                    }}
                    key={link.path}
                    to={link.path}
                    end
                >

                    <img src={link.imgLink} alt="" />
                    <div style={{ backgroundColor: "#363636", height: "35px" }}></div>
                    <div style={{ backgroundColor: "#363636", height: "55px", color: "white", fontWeight: "bold" }}>
                        <p > {link.title}</p>
                    </div>
                    <Button  position=""  colorScheme='gray' size='sm' color="#333" marginTop="14px" fontWeight="bold" fontFamily="heading" fontSize="12px">
                    [ VIEW MORE ]
                    </Button>







                </NavLink>

            ))}




        </div>

        {/* <Footer/> */}






    </div>
}