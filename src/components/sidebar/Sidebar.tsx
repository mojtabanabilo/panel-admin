import { FC, useState} from 'react';
import styles from "./sidebar.module.scss";
import { Icon } from '@iconify/react';
import sidebarNav from '../../config/sidebarNav';
import { handleMouseEvent } from '../../utils/functions/functions';

const Sidebar : FC = () => {
    // states
    const [click, setClick] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);    
    
    // icon styles
    const iconStyle = {
        fontSize: '30px',
        color: "#5c5c5c",
        cursor: "pointer"
    }

    return (
            <div className={click === false ? styles.sidebar_close : styles.sidebar_open}>
                {
                    click === false ? <div className={styles.title_sidebar_close}>
                        <Icon icon="ic:round-menu" 
                            style={{ 
                                fontSize: '30px', 
                                cursor: "pointer",
                                transform: isHovered ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
                                transition: 'all .5s'
                            }}
                            onClick={() => setClick(true)}
                            onMouseEnter={() => handleMouseEvent(setIsHovered, isHovered)}
                            onMouseLeave={() => handleMouseEvent(setIsHovered, isHovered)}
                        /> 
                    </div> : <div className={styles.title_sidebar_open}>
                        <Icon 
                            icon="mdi:cancel-box-outline"
                            style={iconStyle}
                            onClick={() => {
                                setClick(false)
                            }}
                        />
                        <h2>فهرست</h2>
                    </div>
                }
                {
                    click === false ? <div className={styles.items_icons}>
                        {
                            sidebarNav.map((i, index) => <Icon 
                                    icon={i.icon}
                                    style={iconStyle}
                                    key={index}
                                />
                            )
                        }
                    </div> : <div className={styles.items_sidebar}>
                        {
                            sidebarNav.map((i, index) => <div className={styles.items} key={index}>
                                <Icon 
                                    icon={i.icon}
                                    style={iconStyle}
                                />
                                <p>{i.text}</p>
                            </div>
                            )
                        }
                    </div>
                }
                {
                    click === false ? <div className={styles.signout_close}>
                            <Icon 
                                icon="ph:sign-out-bold"
                                style={iconStyle}
                            />
                        </div> : <div className={styles.signout_open}>
                        <Icon 
                            icon="ph:sign-out-bold"
                            style={iconStyle}
                        />
                        <p>خروج</p>
                    </div>
                }
            </div>
    );
};

export default Sidebar;