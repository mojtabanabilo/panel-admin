import { useEffect } from "react";
import styles from "./tables.module.scss";
import { useMyContext } from '../../../context/context';
import { hasDuplicates, duplicateNotifyWarning } from "../../../utils/functions/functions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// component
import TBodyTable from "./tbody table/TBodyTable";

const Table = () : JSX.Element => {
    // context
    const { data } = useMyContext();
    
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
                            <tr className={styles.tr_thead_product}>
                                <th className={styles.th_thead_product}>عملیات</th>
                                <th className={styles.th_thead_product}>قیمت</th>
                                <th className={styles.th_thead_product}>تعداد</th>
                                <th className={styles.th_thead_product}>محصول</th>
                                <th className={styles.th_thead_product}>ردیف</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TBodyTable />
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