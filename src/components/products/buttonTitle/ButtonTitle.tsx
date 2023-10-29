import React from 'react';
import styles from "./buttonTitle.module.scss";
import { Icon } from '@iconify/react';
import { useMyContext } from '../../../context/context';
import { useNavigate } from 'react-router-dom';

// components
import ModalCreateItem from '../../modal/ModalCreateItem';

const ButtonTitle = () => {
    // context
    const {setModalAdd, modalAdd} = useMyContext();

    // navigator
    const navigate = useNavigate()

    return (
        <div className={styles.title_button}>
            <button className={styles.plus} onClick={() => {
                setModalAdd(!modalAdd)
            }}>
                <Icon icon="icon-park-outline:add" style={{
                    fontSize: "30px",
                    color: "green"
                }}/>
            </button>
            <h2>محصولات</h2>
        </div>
    );
};

export default ButtonTitle;