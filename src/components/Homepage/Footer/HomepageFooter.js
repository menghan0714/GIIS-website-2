import styles from './HomepageFooter.module.css';

function HomepageFooter() {
    return (
        <footer className={styles.pageFooter}>
            Copyright&copy; {new Date().getFullYear()} Genesis of Ideas International School. All rights reserved.
        </footer>
    )
}
export default Footer;
