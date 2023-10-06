import AlbumCard from "./AlbumCard"
import "./styles/artistPage.css"

const ArtistAlbums = ({ albums }) => {


  return (
    <section className="artist__albums">
        <h3 className="artist__albumTitle">Artist's Album</h3>
        <div className="artist__albumContainer">
            {
                albums?.map(albumInfo => (
                    <AlbumCard 
                        key={albumInfo.id}
                        album={albumInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ArtistAlbums