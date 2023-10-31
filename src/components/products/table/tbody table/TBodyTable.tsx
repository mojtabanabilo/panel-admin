import React from 'react';
import { useMyContext } from '../../../../context/context';
import styles from "./tbodytable.module.scss"
import { deleteItem } from '../../../../utils/functions/functions';
import { ICreateProduct } from '../../../../utils/types/interface';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react'; 

const TBodyTable = () => {

    // context
    const { data, setData, userWidth } = useMyContext();

    return (
        <>
            {
                data.length > 0 && userWidth > 650 && data.map((item : ICreateProduct, index : any) => <tr className={styles.tr_product_body} key={index}>
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
                data.length > 0 && userWidth < 650 && data.map((item : ICreateProduct, index : any) => <tr className={styles.tr_product_body} key={index}>
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
        </>
    );
};

export default TBodyTable;