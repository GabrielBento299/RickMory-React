import { Container } from './styles';

export interface IProps {
    id: string;
    image: string;
    name:string;
    genre: string;
    specie: string;
}

const CardCharacter = ({image, name, genre, specie}: IProps) => {
  return (
    <Container>
        <div className="image">
            <img src={image} alt={name} />
        </div>

        <div className="info">
            <h3>{name}</h3>
            <ul>
                <li>Gênero: {genre} </li>
                <li>Espécie: {specie}</li>
            </ul>
        </div>
    </Container>
  )
}

export default CardCharacter
