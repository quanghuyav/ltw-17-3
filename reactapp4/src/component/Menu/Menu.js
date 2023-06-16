import clsx from 'clsx';
import styles from './style.module.scss';
import { useState } from 'react';
function Menu() {
    const [isMgl, setIsMgt] = useState(false);
    const classes = clsx(styles['menu-item'], styles.content, {
        mgl: isMgl,
        [styles.bgc]: false,
    });
    return (
        <>
            <button onClick={() => setIsMgt(!isMgl)}>Click</button>
            <div className={styles.menu}>Đây là menu</div>
            <div
                className={[styles['menu-item'], styles.content, 'mgl'].join(
                    ' ',
                )}
            >
                Đây là nội dung của menu
            </div>
            <div className={`${styles['menu-item']} ${styles.content} mgl`}>
                đây cũng là nội dung
            </div>
            <div className={classes}>đây cũng lại là nội dung</div>
            <div className={styles.container}>
                <div className={styles.item}>container item</div>
            </div>
        </>
    );
}

export default Menu;
