import './HomeCard.css'
const HomeCard = (props: any) => {
  const { title, image } = props

  console.log(image)

  return (
    <div className="card-new">
      <main style={{ backgroundImage: `url(${image})` }} className="card__body"></main>
      <h1 className="card__title">{title}</h1>
      <div className="title_content">
        <span className="timeSpan">2hr 13min</span>
        <span className="category">Action</span>
      </div>
    </div>
  )
}

export default HomeCard
