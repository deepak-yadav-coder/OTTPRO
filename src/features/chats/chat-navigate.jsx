import profileIcon from "../../assets/icons/favicon.ico";
import Chat from "./chat-page";
import { useState } from "react";


const ChatNavigate = () => {

  let userData = localStorage.getItem('users') || '[]';
  userData = JSON.parse(userData);

  const [message, setMessage] = useState('')
  const [data, setData] = useState(userData)


  function handleKeyDown(e) {
    const filtredData = [];
    for (let value of userData) {
      if (((value.name).toLowerCase()).includes((e.target.value).toLowerCase())) {
        filtredData.push(value);
      }
    }

    setData(filtredData)
  }
  function handleOnChange(e) {
    setMessage(e.target.value)
    handleKeyDown(e)
  }

  return (
    <div style={styles.container}>

      <div style={styles.sidebarLeft}>
        <div style={{ height: '50px' }}>
          <input
            style={styles.input}
            placeholder="Search..."
            value={message}
            onChange={(e) => handleOnChange(e)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {data.map((ele, index) => (
          <label style={styles.label} key={index}>
            <img src={profileIcon} alt="profile" style={styles.img} />
            {ele.name}
          </label>
        ))}
      </div>

      <div style={styles.sidebarRight}>
        <Chat />
      </div>

    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "calc(100vh - 70px)",
    overflow: "hidden"
  },
  sidebarLeft: {
    width: "30%",
    backgroundColor: "grey",
    padding: "10px 10px 1px 10px",
    overflowY: "auto",
    height: "100%",
  },

  sidebarRight: {
    width: "70%",
    backgroundColor: "black",
    height: "100%",

  },

  input: {
    fontSize: '15px',
    padding: '2px 10px',
    height: '40px',
    width: '100%',
    textAlign: 'center',
    borderRadius: "8px",
    outline: "none",
    border: "none",
    backgroundColor: "#1f2937",
    margin: '0px'
  },

  label: {
    display: "block",
    // padding: "10px",
    // color: "white",
    backgroundColor: "#1f2937",
    color: "#e5e7eb",
    padding: "10px 14px",
    margin: '10px',
    borderRadius: "12px",
  },

  img: {
    borderRadius: "30px",
    marginRight: "10px"
  }
};
export default ChatNavigate;