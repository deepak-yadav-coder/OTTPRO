
import { useState } from 'react';
import Cards from '../../components/video-card.jsx';
import movies from '../../../movie.json';

const VideoPage = () => {
  const [message, setMessage] = useState('')
  const [data, setData] = useState(movies)

  function handleKeyDown(e) {
    const filtredData = [];
    for (let value of movies) {
      if (((value.Title).toLowerCase()).includes((e.target.value).toLowerCase())) {
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
    <>
      <div style={styles.head}>
        <input
          style={styles.input}
          placeholder="Search..."
          value={message}
          onChange={(e) => handleOnChange(e)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div style={styles.container}>

        {
          data.map((value, idx) => (
            <label key={idx}>
              {<Cards value={value} />}
            </label>
          ))
        }

      </div>
    </>

  )
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  head: {
    height: '50px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: '15px',
    padding: '2px 10px',
    height: '40px',
    width: '40%',
    textAlign: 'center',
    borderRadius: "15px",
    outline: "none",
    border: "none",
    backgroundColor: "#1f2937",
    margin: '10px'
  }
}
export default VideoPage;