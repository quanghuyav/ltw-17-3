import styles from './style.module.css';
import clsx from 'clsx';

function Sidebar() {
    return (
        <>
            <div className={styles.sidebar}>Đây là Sidebar</div>
            <div className={styles.content}>Đây là nội dung của sidebar</div>
        </>
    );
}

export default Sidebar;
