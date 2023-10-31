import React, { useState } from 'react';
import styles from "./products.module.scss";
import { ICreateProduct } from '../../utils/types/interface';

// components
import ButtonTitle from './buttonTitle/ButtonTitle';
import Table from './table/Tables';

const Products = () => {
    return (
        <div className={styles.products}>
            <ButtonTitle />
            <Table />
        </div>
    );
};

export default Products;