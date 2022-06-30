const Card = ({pokemon}) => {
  return (
      <div>
        <span>
            {pokemon.name}
        </span>
        <span>
            {pokemon.id}
        </span>
      </div>
  )
}

export default Card