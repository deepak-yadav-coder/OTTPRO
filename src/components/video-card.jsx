import thumbnail from "../assets/icons/favicon.ico";
import movies from "../../movie.json";
// console.log(movies);
const Cards = ({ value = [], align = "left" }) => {

    let { Title, Year, Rated, Released, Runtime, Genre, Actors, Plot, Language, Poster, imdbRating, Images } = value

    function trackActivity() {

        let prevActivity = localStorage.getItem('recentWatched') || '[]';
        prevActivity = JSON.parse(prevActivity);
        let isExists = false;
        prevActivity.forEach((ele, idx) => {

            if (ele.Title == value.Title) {
                isExists = true;
            }
        })

        if (!isExists && Title) {

            prevActivity = [...prevActivity, value];
            localStorage.setItem('recentWatched', JSON.stringify(prevActivity))
        }
    }
    return (
        <div
            style={{
                ...styles.card,
                alignSelf: align === "right" ? "flex-end" : "flex-start",
                backgroundColor: align === "right" ? "#2563eb" : "#1f2937",
            }}
            onClick={trackActivity}
        >
            <a
                href={Poster}
                alt='recent watched'
                target="_blank"
                // rel="noopener noreferrer"
                style={styles.link}
            >
                <img src={Images && Images[0]} alt={Title} style={styles.img} />
                <p style={styles.text}>
                    {
                        Title ? <>
                            <b>Titile</b>: {Title} ({Year})<br />
                            <b>Genre:</b> {Genre}<br />
                            <b>Plot:</b> {Plot}<br />
                            <b>imdbRating:</b> {imdbRating}
                        </> : <>Last watched={'>>'}</>
                    }
                </p>
            </a>
        </div >
    );
};

const styles = {
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#e5e7eb",
        padding: "0px",
        borderRadius: "12px",
        width: "220px",
        height: "300px",
        margin: "20px",
        gap: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    },
    img: {
        height: "175px",
        width: "100%",
        objectFit: "cover",
        borderRadius: "8px",
        cursor: "pointer",
    },
    text: {
        fontSize: "14px",
        padding: '10px 15px',

        lineHeight: "1.4",
        overflowY: "auto",
        scrollbarWidth: "none",
    },
    link: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textDecoration: "none",
        color: "inherit",
    }
};



export default Cards;