import './Card.css'

const Card = ({title="Dog", src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=600"}) => {

    return(
        <div className="card">
            <img src={src} alt="dog card" />
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus similique eum, porro odio quisquam nihil quasi culpa quam ipsum aperiam nulla, dignissimos voluptas fuga asperiores facilis in perspiciatis omnis?</p>
        </div>
    )
}
export default Card;