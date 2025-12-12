import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>My Learning App</h2>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Головна</Link>
        <Link to="/courses" style={styles.link}>Курси</Link>
        <Link to="/login" style={styles.link}>Увійти</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f5f5f5",
    borderBottom: "1px solid #ddd",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  logo: {
    margin: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  }
};
