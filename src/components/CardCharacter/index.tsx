import { Container } from './styles';

export interface ICharacterProps {
    image: string;
    name:string;
    gender: string;
    species: string;
    location: string;
}

const CardCharacter = ({image, name, gender, species, location}: ICharacterProps) => {
  return (

    <Container>
        <div className="image">
            <img src={image} alt={name} />
        </div>

        <div className="info">
            <h3>{name}</h3>
            <h3>{location}</h3>
            <ul>
                <li>Gênero: {gender} </li>
                <li>Espécie: {species}</li>
            </ul>
        </div>
    </Container>
  )
}

export default CardCharacter
