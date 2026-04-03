
import Cards from '../../components/video-card.jsx';
import movies from '../../../movie.json';
import { useState } from 'react';

const HomePage = () => {

  let recentWatched = localStorage.getItem('recentWatched') || '[]';
  recentWatched = JSON.parse(recentWatched)


  return (

    <div style={styles.container}>
      <Cards />
      {
        recentWatched.map((value, idx) => (
          <Cards key={idx} value={value} />
        ))
      }
    </div>
  )

}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  }
}


export default HomePage;