import classes from './Movie.module.css'

const MovieCard = (props: any) => {
  const { title, image_url, vote_average } = props.item

  return (
    <div className={classes.card_movie}>
      <div
        className={classes.thumb}
        style={{
          backgroundImage: image_url && `url(${image_url})`,
        }}
      ></div>
      <div>
        <span>{vote_average}</span>
      </div>

      <div>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default MovieCard
