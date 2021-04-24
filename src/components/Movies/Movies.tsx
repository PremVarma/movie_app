import Movie from './SingleMovie/Movie'
import classes from './Movies.module.css'
import HomeCard from './SingleMovie/HomeCard'

const Movies = ({ list, type = 0 }: any) => {
  let cards: any = <h3>Loading...</h3>

  if (list && type === 0) {
    cards = list.map((data: any, index: number) => <Movie key={index} item={data} />)
  } else {
    cards = list.map((data: any, index: number) => (
      <HomeCard title={data.title} image={data.image} />
    ))
  }

  return <div className={classes.band}>{cards}</div>
}

export default Movies
