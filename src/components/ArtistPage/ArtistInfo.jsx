import "./styles/artistPage.css"

const ArtistInfo = ({ artist }) => {



  return (
    <section className="artist__infoSection">
        <header className="artist__infoHeader">
            <img className="artist__infoImg" src={artist?.images[0].url} alt="" />
        </header>
        <article className="artist__infoArticle">
            <h2 className="artist__infoName">{artist?.name}</h2>
            <ul className="artist__list">
                <li className="artist__list__item"><span className="artist__span">Followers: </span><span className="artist__list__span">{artist?.followers.total}</span></li>
                <li className="artist__list__item"><span className="artist__span"> Popularity: </span><span className="artist__list__span">{artist?.popularity}</span></li>
                <li className="artist__list__item">
                    <span className="artist__span">Genres: </span>
                    <ul className="artist__list2">
                        {
                            artist?.genres.map(genre => (
                                <li className="artist__list__item2" key={genre}>{genre}</li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </article>
    </section>
  )
}

export default ArtistInfo