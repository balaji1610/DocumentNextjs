import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h1>HEADER</h1>
      {children}
      <h1>FOOTER</h1>
    </div>
  );
}
