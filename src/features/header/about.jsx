import Footer from "../../components/footer";

const About = () => {
    return (
        <div style={styles.page}>
            <div style={styles.wrapper}>

                {/* HERO */}
                <p style={styles.sectionLabel}>About</p>
                <h1 style={styles.heading}>OtTpRo</h1>
                <p style={styles.subheading}>
                    A mobile-first OTT streaming and real-time chat platform.
                    Login with your phone number — no passwords, no hassle.
                </p>

                <hr style={styles.divider} />

                {/* WHO WE ARE */}
                <p style={styles.sectionLabel}>Who we are</p>
                <p style={styles.bodyText}>
                    OtTpRo is built for users who want a simple, fast, and unified experience —
                    stream movies and shows while staying connected with friends via real-time chat.
                    All from one app, all starting with just your mobile number.
                </p>
                <p style={{ ...styles.bodyText, marginBottom: "40px" }}>
                    We believe good entertainment should be accessible and social. OtTpRo combines
                    the best of content streaming and instant messaging into one seamless platform.
                </p>

                <hr style={styles.divider} />

                {/* FEATURES */}
                <p style={styles.sectionLabel}>Core features</p>
                <div style={styles.featureGrid}>
                    {features.map((f) => (
                        <div key={f.title} style={{ ...styles.featureCard, borderLeft: `3px solid ${f.color}` }}>
                            <p style={styles.featureTitle}>{f.title}</p>
                            <p style={styles.featureDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>

                <hr style={styles.divider} />

                {/* HOW IT WORKS */}
                <p style={styles.sectionLabel}>How it works</p>
                <div style={{ marginTop: "16px", marginBottom: "48px" }}>
                    {steps.map((step, i) => (
                        <div key={i} style={styles.step}>
                            <div style={styles.stepNumber}>{i + 1}</div>
                            <div>
                                <p style={styles.stepTitle}>{step.title}</p>
                                <p style={styles.stepDesc}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* FOOTER */}
            <Footer/>
        </div>
    );
};

const styles = {
    page: {
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
    wrapper: {
        maxWidth: "720px",
        margin: "0 auto",
        padding: "48px 24px 0",
    },
    sectionLabel: {
        fontSize: "11px",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        color: "#64748b",
        marginBottom: "8px",
    },
    heading: {
        fontSize: "32px",
        fontWeight: "700",
        color: "white",
        marginBottom: "8px",
    },
    subheading: {
        fontSize: "16px",
        color: "#94a3b8",
        lineHeight: "1.7",
        marginBottom: "32px",
    },
    divider: {
        border: "none",
        borderTop: "1px solid #1e293b",
        margin: "40px 0",
    },
    bodyText: {
        fontSize: "15px",
        color: "#cbd5e1",
        lineHeight: "1.8",
        marginBottom: "16px",
    },

    statCard: {
        background: "#1e293b",
        borderRadius: "10px",
        padding: "16px",
    },
    statLabel: {
        fontSize: "11px",
        color: "#64748b",
        marginBottom: "4px",
    },
    statValue: {
        fontSize: "15px",
        fontWeight: "600",
    },

    // Feature grid
    featureGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        marginTop: "16px",
        marginBottom: "40px",
    },
    featureCard: {
        background: "#1e293b",
        borderRadius: "10px",
        padding: "20px",
    },
    featureTitle: {
        fontSize: "14px",
        fontWeight: "600",
        color: "white",
        marginBottom: "6px",
    },
    featureDesc: {
        fontSize: "13px",
        color: "#94a3b8",
        lineHeight: "1.6",
    },

    // Steps
    step: {
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
        marginBottom: "20px",
    },
    stepNumber: {
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        background: "#1224ca",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
        fontWeight: "700",
        flexShrink: 0,
    },
    stepTitle: {
        fontSize: "14px",
        fontWeight: "600",
        color: "white",
        marginBottom: "4px",
    },
    stepDesc: {
        fontSize: "13px",
        color: "#94a3b8",
    },
};


const features = [
    {
        title: "Mobile Login",
        color: "#3b82f6",
        desc: "Sign in with your phone number. No email or password needed. Returning users are recognized automatically.",
    },
    {
        title: "OTT Streaming",
        color: "#a78bfa",
        desc: "Watch movies, web series, and live content. Clean player UI with fast buffering and responsive layout.",
    },
    {
        title: "Real-time Chat",
        color: "#34d399",
        desc: "Instant messaging built into the platform. Chat with friends while watching or browse independently.",
    },
    {
        title: "Simple UI",
        color: "#fb923c",
        desc: "Minimal, fast, and easy to navigate. Designed for all age groups with clear icons and smooth transitions.",
    },
];

const steps = [
    {
        title: "Enter your mobile number",
        desc: "New users are registered automatically. Returning users go straight to the home feed.",
    },
    {
        title: "Browse content",
        desc: "Explore the OTT library — movies, shows, and live streams organized by category.",
    },
    {
        title: "Stream & chat",
        desc: "Watch content and chat with other users in real time — all in the same app.",
    },
];

export default About;