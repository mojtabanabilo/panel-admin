import { useState } from 'react';
import styles from "./Navbar.module.scss";
import { Icon } from '@iconify/react';
import { setStateSearchBar, detectTextDirection } from '../../utils/functions/functions';

const Main = () => {
    // states
    const [searchBar, setSearchBar] = useState<string>();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // functions
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <header className={styles.container}>
            <section className={styles.searchbar_menu}>
                <div className={styles.searchbar}>
                    <Icon icon="ic:baseline-search" style={{ 
                            fontSize: '20px',
                            position: "absolute", 
                            top: "50%", 
                            left: "98%",
                            transform: "translate(-98% , -50%)",
                            color: "#acacac"
                        }}
                    />
                    <input 
                    type="text" 
                    onChange={(e) => setStateSearchBar(setSearchBar, e)}
                    style={{direction: detectTextDirection(searchBar)}}
                    placeholder='جستجو'
                    />
                </div>
                <Icon icon="ic:round-menu" 
                    style={{ 
                        fontSize: '30px', 
                        cursor: "pointer",
                        marginLeft: "40px",
                        transform: isHovered ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
                        transition: 'all .5s'
                    }} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </section>
            <section>
                
            </section>
        </header>
    );
};

export default Main;