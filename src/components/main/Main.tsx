import React, { FC } from 'react';
import styles from "./main.module.scss";
import { useMyContext } from '../../context/context';


// components
import Navbar from "../navbar/Navbar";
import Sidebar from '../sidebar/Sidebar';
import Income from '../income/Income';
import Products from '../products/Products';

const Main : FC = () => {
    return (
        <div className={styles.main}>
            <Navbar />
            <Sidebar />
            <Income />
            <Products />
        </div>
    );
};

export default Main;