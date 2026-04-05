const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.footerBrand}>OtTpRo</p>
            <p style={styles.footerText}>© 2026 OtTpRo. OTT & Chat Application. All rights reserved.</p>
        </footer>
    )
}

const styles = {
    footer: {
        background: "#020617",
        color: "white",
        padding: "20px",
        textAlign: "center",
    },
    footerBrand: {
        fontWeight: "700",
        fontSize: "15px",
        marginBottom: "4px",
    },
    footerText: {
        fontSize: "13px",
        opacity: "0.5",
    },
}

export default Footer