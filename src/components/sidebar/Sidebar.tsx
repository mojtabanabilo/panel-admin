import { FC } from 'react';
import styles from "./sidebar.module.scss";
import { Icon } from '@iconify/react';
import { useMyContext } from '../../context/context';

const Sidebar : FC = () => {
    // context
    const { setSidebar } = useMyContext();

    // icon styles
    const iconStyle = {
        fontSize: '30px',
        color: "#5c5c5c",
        cursor: "pointer"
    }
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.title_sidebar}>
                <Icon 
                    icon="mdi:cancel-box-outline"
                    style={iconStyle}
                    onClick={() => setSidebar(false)}
                />
                <h2>فهرست</h2>
            </div>
            <div className={styles.items_sidebar}>
                <div className={styles.items}>
                    <Icon 
                        icon="material-symbols:dashboard-outline"
                        style={iconStyle}
                    />
                    <p>داشبورد</p>
                </div>
                <div className={styles.items}>
                    <Icon 
                        icon="fluent-mdl2:product"
                        style={iconStyle}
                    />
                    <p>محصولات</p>
                </div>
                <div className={styles.items}>
                    <Icon 
                        icon="mdi:human-greeting"
                        style={iconStyle}
                    />
                    <p>مشتریان</p>
                </div>
                <div className={styles.items}>
                    <Icon 
                        icon="icon-park-outline:transaction-order"
                        style={iconStyle}
                    />
                    <p>سفارشات</p>
                </div>
                <div className={styles.items}>
                    <Icon 
                        icon="prime:chart-line"
                        style={iconStyle}
                    />
                    <p>آنالیزها</p>
                </div>
                <div className={styles.items}>
                    <Icon 
                        icon="tabler:discount"
                        style={iconStyle}
                    />
                    <p>تخفیفات</p>
                </div>
                <div className={styles.items}>
                    <Icon 
                        icon="material-symbols:inventory"
                        style={iconStyle}
                    />
                    <p>موجودی انبار</p>
                </div>
            </div>
            <div className={styles.signout}>
                <Icon 
                    icon="ph:sign-out-bold"
                    style={iconStyle}
                />
                <p>خروج</p>
            </div>
        </div>
    );
};

export default Sidebar;