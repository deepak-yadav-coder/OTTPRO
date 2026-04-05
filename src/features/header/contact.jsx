import { useFormik } from "formik";
import Footer from "../../components/footer";

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        onSubmit: (values, { resetForm }) => {
            alert("Message Sent Successfully!");
            // console.log(values);
            resetForm();
        }
    });

    const { values, handleChange, handleSubmit } = formik;

    return (
        <div>

            {/* MAIN SECTION */}
            <main style={styles.container}>
                <h1 style={styles.heading}>Contact OtTpRo</h1>
                <p style={styles.subheading}>
                    OTT & Chat Platform - Connect with us anytime
                </p>

                <div style={styles.box}>

                    {/* CONTACT DETAILS */}
                    <div style={styles.details}>
                        <h2>Contact Info</h2>
                        <p>Mobile: 6351643640</p>
                        <p>Email: deepakyadav.coder@gmail.com</p>
                        <p>Address: Surat, Gujarat, India</p>
                    </div>

                    {/* CONTACT FORM */}
                    <div style={styles.formBox}>
                        <h2>Send Message</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={values.name}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={values.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={values.message}
                                onChange={handleChange}
                                required
                                style={styles.textarea}
                            />

                            <button type="submit" style={styles.button}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            {/* FOOTER */}
            <Footer />
        </div>
    );
};

const styles = {
    container: {
        padding: "50px 20px",
        textAlign: "center",
        background: "#0f172a",
        color: "white",
    },

    heading: {
        fontSize: "32px"
    },

    subheading: {
        color: "#94a3b8",
        marginBottom: "30px"
    },

    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
        flexDirection: window.innerWidth < 768 ? "column" : "row"
    },

    details: {
        padding: "20px",
        borderRadius: "10px",
        width: "260px",
        textAlign: "left",
        order: window.innerWidth < 768 ? 2 : 1,
    },

    formBox: {
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
        width: "260px",
        order: window.innerWidth < 768 ? 1 : 2
    },

    input: {
        width: "100%",
        padding: "8px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "none"
    },

    textarea: {
        width: "100%",
        padding: "8px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "none",
        height: "80px"
    },

    button: {
        width: "100%",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        background: "#38bdf8",
        cursor: "pointer",
        fontWeight: "bold"
    },
};

export default Contact;