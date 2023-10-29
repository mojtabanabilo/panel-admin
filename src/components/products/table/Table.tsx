import { useEffect, useState } from "react";
import styles from "./table.module.scss";
import { useMyContext } from '../../../context/context';
import { ICreateProduct } from '../../../utils/types/interface';
import { deleteItem, hasDuplicates, duplicateNotifyWarning } from "../../../utils/functions/functions";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = () : JSX.Element => {
    // context
    const {data, setData, userWidth, setUserWidth} = useMyContext();
    
    // lifecycle
    useEffect(() => {
        hasDuplicates(data);
        if(hasDuplicates(data)) duplicateNotifyWarning();
    }, [data]);

    return (
        <>
            {
                data.length === 0 ? <div className={styles.alert}>
                    <h2>محصولی وجود ندارد</h2>
                </div> : <div className={styles.table_container}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th id='th-1'>عملیات</th>
                                <th id='th-2'>قیمت</th>
                                <th id='th-3'>تعداد</th>
                                <th id='th-4'>محصول</th>
                                <th id='th-5'>ردیف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length > 0 && userWidth > 650 && data.map((item : ICreateProduct, index : any) => <tr key={index}>
                                        <td className={styles.edit_section}>
                                            <Link to={`/editItem/${index}`}>
                                                <Icon 
                                                    icon="fluent:edit-12-regular"
                                                    style={{
                                                        width: "25px",
                                                        height: "25px",
                                                        padding: "5px",
                                                        borderRadius: "5px",
                                                        color: "#fff",
                                                        background: "green",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </Link>
                                            <Icon 
                                                icon="majesticons:delete-bin-line" 
                                                onClick={() => deleteItem(index, data, setData)}
                                                style={{
                                                    width: "25px",
                                                    height: "25px",
                                                    padding: "5px",
                                                    borderRadius: "5px",
                                                    color: "#fff",
                                                    background: "red",
                                                    cursor: "pointer",
                                                    marginLeft: "5px",
                                                }}
                                            />
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{item.count}</td>
                                        <td>{item.name}</td>
                                        <td>{index + 1}</td>
                                    </tr>
                                )
                            }
                            {
                                data.length > 0 && userWidth < 650 && data.map((item : ICreateProduct, index : any) => <tr key={index}>
                                        <td data-cell="محصول">{item.name}</td>
                                        <td data-cell="قیمت">{item.price}</td>
                                        <td data-cell="تعداد">{item.count}</td>
                                        <td data-cell=" " className={styles.edit_section}>
                                            <Link to={`/editItem/${index}`}>
                                                <Icon 
                                                    icon="fluent:edit-12-regular"
                                                    style={{
                                                        width: "25px",
                                                        height: "25px",
                                                        padding: "5px",
                                                        borderRadius: "5px",
                                                        color: "#fff",
                                                        background: "green",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </Link>
                                            <Icon 
                                                icon="majesticons:delete-bin-line" 
                                                onClick={() => deleteItem(index, data, setData)}
                                                style={{
                                                    width: "25px",
                                                    height: "25px",
                                                    padding: "5px",
                                                    borderRadius: "5px",
                                                    color: "#fff",
                                                    background: "red",
                                                    cursor: "pointer",
                                                    marginLeft: "5px",
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }

            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Table;