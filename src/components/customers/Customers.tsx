import React from 'react';
import styles from "./customers.module.scss";
import Title from './title/Title';
import Table from './table/Table';

const Customers = () => {
    return (
        <div className={styles.customer}>
            <Title />
            <Table />
        </div>
    );
};

export default Customers;