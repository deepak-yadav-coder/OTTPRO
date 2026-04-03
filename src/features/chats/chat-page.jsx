import { useState } from "react";
import profileIcon from "../../assets/icons/favicon.ico";

const Chat = () => {

    const [message, setMessage] = useState('');
    const [updateUi, setUi] = useState('');

    function handleMessage() {
        console.log(message);
        if (message) { setMessage(message) }

        localStorage.setItem('message', message)
        setUi(message)
        setMessage('');

    }
    function handleKeyDown(e) {
        if (e.key == 'Enter') {
            handleMessage()
        }
    }
    // get = localStorage.getItem('message')
    function handleOnChange(e) {
        { setMessage(e.target.value) }

    }
    return (
        <div style={styles.chatContainer}>

            {/* Header */}
            <div style={styles.header}>
                <img
                    src={profileIcon}
                    alt="user"
                    style={styles.avatar}
                />
                <span style={styles.username}>Deepak</span>
            </div>

            {/* Messages */}
            <div style={styles.messages}>

                {/* Left message */}
                <div style={styles.messageLeft}>
                    Hello 👋
                </div>

                {/* Right message */}
                <div style={styles.messageRight}>
                    {updateUi}😎
                </div>

            </div>

            {/* Input */}
            <div style={styles.inputBox}>
                <input
                    style={styles.input}
                    placeholder="Type a message"
                    onChange={(e) => handleOnChange(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    value={message}
                />
                <button style={styles.sendBtn}
                    onClick={handleMessage}

                >➤</button>
            </div>

        </div>
    );
};

const styles = {
    chatContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#0f172a"
    },
    avatar: {
        borderRadius: "50%",
        marginRight: "10px"
    },
    header: {
        height: "60px",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        fontSize: "18px",
        fontWeight: "600",
        color: "#e5e7eb",
        borderBottom: "1px solid #1f2937"
    },
    username: {
        fontSize: "18px"
    },
    messages: {
        flex: 1,
        overflowY: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    },

    messageLeft: {
        alignSelf: "flex-start",
        backgroundColor: "#1f2937",
        color: "#e5e7eb",
        padding: "10px 14px",
        borderRadius: "12px",
        maxWidth: "60%"
    },

    messageRight: {
        alignSelf: "flex-end",
        backgroundColor: "#2563eb",
        color: "white",
        padding: "10px 14px",
        borderRadius: "12px",
        maxWidth: "60%"
    },

    inputBox: {
        display: "flex",
        padding: "15px",
        borderTop: "1px solid #1f2937"
    },

    input: {
        flex: 1,
        padding: "10px 15px",
        borderRadius: "8px",
        border: "none",
        outline: "none",
        backgroundColor: "#1f2937",
        color: "white"
    },

    sendBtn: {
        marginLeft: "10px",
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#2563eb",
        color: "white",
        cursor: "pointer"
    }
};

export default Chat;