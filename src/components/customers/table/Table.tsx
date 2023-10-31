import React from 'react';
import styles from "./table.module.scss";
import { customers, customersHeader } from '../../../config/customerTable';

const Table = () => {
    return (
        <div className={styles.table_container}>
            <table className={styles.table_customer}>
                <thead>
                    <tr className={styles.tr_thead_customer}>
                        {
                            customersHeader.map(i => <th className={styles.th_thead_customer}>{i}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((i, index) => <tr className={styles.tr_tbody_customer} key={index}>
                            <td className={styles.td_tbody_customer}>{i.ID}</td>
                            <td className={styles.td_tbody_customer}>{i.userName}</td>
                            <td className={styles.td_tbody_customer}>{i.email}</td>
                            <td className={styles.td_tbody_customer} style={{direction: "ltr"}}>{i.phoneNumber}</td>
                            <td className={styles.td_tbody_customer}>{i.totalOrders}</td>
                            <td className={styles.td_tbody_customer}>{i.totalSpend}</td>
                            <td className={styles.td_tbody_customer}>{i.location}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;