import "./styles/artistPage.css"

const AlbumCard = ({ album }) => {

    const yearReleaseDate = (new Date(album.release_date)).getFullYear()

  return (
    <article className="album__card">
        <header className="album__header">
            <img className="album__img" src={album.images[0].url} alt="" />
        </header>
        <h4 className="album__name">{album.name}</h4>
        <span className="album__release">{yearReleaseDate}</span>
    </article>
  )
}

export default AlbumCard