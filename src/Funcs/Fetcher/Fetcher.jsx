import { useQuery, gql } from '@apollo/client';

function Fetcher(offset = 0) {
    const POKE_QUERY = gql`{
        pokemon_v2_pokemon(limit: 8, offset: ${offset}) {
            id
            name
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
        }
    }`;

    const { loading, error, data } = useQuery(POKE_QUERY);


    return [loading, error, data]
}

export default Fetcher