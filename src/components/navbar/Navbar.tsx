import { useState, FC } from 'react';
import styles from "./Navbar.module.scss";
import { Icon } from '@iconify/react';
import { setStateSearchBar, detectTextDirection } from '../../utils/functions/functions';
import { useMyContext } from '../../context/context';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const Main : FC = () => {
    // states
    const [searchBar, setSearchBar] = useState<string>();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // context
    const {setSidebar} = useMyContext();

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
                            left: "99%",
                            transform: "translate(-99% , -50%)",
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
                        marginLeft: "5px",
                        transform: isHovered ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
                        transition: 'all .5s'
                    }}
                    onClick={() => setSidebar(true)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </section>
            <section className={styles.language}>
                <div className={styles.theme}>
                    <Icon icon="gg:dark-mode" style={{fontSize: "25px", marginRight: "5px"}}/>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                    />
                </div>
                <Dropdown style={{margin: "0 20px"}}>
                    <Dropdown.Toggle id="dropdown-basic">
                        زبان
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">فارسی</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">انگلیسی</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </section>
        </header>
    );
};

export default Main;