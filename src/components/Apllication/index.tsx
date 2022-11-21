import CardCharacter from '../CardCharacter';
import { Container, Header, ContentCharcters } from './styles';

const Application = () => {
  return (
    <Container>
        <Header>
            <h1>Rick and Morty</h1>
            <span>N de personsagns: 825</span>
        </Header>

        <ContentCharcters>
            <div>
                <CardCharacter
                    id=""
                    image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    name="Rick Sanches"
                    genre="Male"
                    specie="Human"
                />
                <CardCharacter
                    id=""
                    image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    name="Rick Sanches"
                    genre="Male"
                    specie="Human"
                />
                <CardCharacter
                    id=""
                    image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    name="Rick Sanches"
                    genre="Male"
                    specie="Human"
                />
                <CardCharacter
                    id=""
                    image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    name="Rick Sanches"
                    genre="Male"
                    specie="Human"
                />
            </div>

            <button>Carregar Mais</button>
        </ContentCharcters>
    </Container>
  )
}

export default Application
