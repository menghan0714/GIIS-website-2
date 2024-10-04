import styles from './Header.module.css';

function Footer() {
    return (
        <footer className={styles.header}>
            Copyright&copy; {new Date().getFullYear()} Genesis of Ideas International School. All rights reserved.
        </footer>
    )
}
export default Footer;
