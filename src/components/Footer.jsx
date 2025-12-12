export default function Footer() {
  return (
    <footer style={styles.footer}>
      © 2025 My Learning App. Всі права захищені.
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    textAlign: "center",
    background: "#f5f5f5",
    color: "#555",
    borderTop: "1px solid #ddd",
  }
};
