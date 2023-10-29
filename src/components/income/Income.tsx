import React from 'react';
import styles from "./Income.module.scss";
import { Icon } from '@iconify/react';

const Income = () => {

    // icon style
    const iconStyle = {
        fontSize: '60px',
        color: "#5c5c5c",
        cursor: "pointer",
        marginLeft: "10px"
    }

    return (
        <div className={styles.income}>
            <div className={styles.title}>
                <h2>داشبورد</h2>
                <h4>خلاصه</h4>
            </div>
            <div className={styles.content}>
                <div className={styles.item} id='item-1'>
                    <div className={styles.title}>
                        <p>فروش این ماه</p>
                        <h2>۲۴,۰۰۰,۰۰۰</h2>
                        <sup>تومان </sup>
                    </div>
                    <Icon icon="ph:bag-bold" style={iconStyle}/>
                </div>
                <div className={styles.item} id='item-2'>
                    <div className={styles.title}>
                        <p>سفارشات این ماه</p>
                        <h2>۳۰۰۰</h2>
                    </div>
                    <Icon icon="icon-park-outline:transaction-order" style={iconStyle}/>
                </div>
                <div className={styles.item} id='item-3'>
                    <div className={styles.title}>
                        <p>درآمد این ماه</p>
                        <h2>۱۲,۰۰۰,۰۰۰</h2>
                        <sup>تومان </sup>
                    </div>
                    <Icon icon="jam:coin" style={iconStyle}/>
                </div>
            </div>
        </div>
    );
};

export default Income;