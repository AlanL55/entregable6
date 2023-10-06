import TrackCard from "../HomePage/TrackCard"
import "./styles/artistPage.css"

const ArtistSongsTop = ({ tracks }) => {



  return (
    <section>
        <h3 className="artist__topSong">Artist's Top Songs</h3>
        <div>
            {
               tracks?.map(trackInfo => (
                <TrackCard 
                    key={trackInfo.id}
                    track={trackInfo}
                />
               ))
            }
        </div>
    </section>
  )
}

export default ArtistSongsTop