import { useState } from "react"
import { useParams } from "react-router-dom"

const TrackInfo = ({ track }) => {

    const { id } = useParams()

    const [isShowPlayer, setIsShowPlayer] = useState(false)

    const handlePlayer = () => {
        setIsShowPlayer(!isShowPlayer)
    }

  return (
    <div className="info__track">
    <article className="info__article">
        <header className="info__header">
            <img className="info__img"  src={track?.album.images[0].url} alt="" />
            <i onClick={handlePlayer} class='bx bx-play'></i>
        </header>
        <section className="info__song">
            <h3 className="info__song__name">{track?.name}</h3>
            <ul>
                {
                    track?.artists.map(artist => (
                        <li className="info__artist" key={artist.id}>{artist.name}</li>
                    ))
                }
            </ul>
            <p><span  className="info__detail">Album: </span>{track?.album.name}</p>
            <p><span className="info__detail">Release Date: </span>{track?.album.release_date}</p>
        </section>
    </article>
            {   
                isShowPlayer
                    && (<iframe style={{borderRadius: "12px"}} src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`} width="100%" height='200px'  frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    )
            }
    </div>
    )
}

export default TrackInfo