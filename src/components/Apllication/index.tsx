import { useEffect, useState } from 'react';
import api from '../../services/api';
import CardCharacter from '../CardCharacter';
import { Container, Header, ContentCharcters, Loader } from './styles';

import teste from '../../assets/giphy.gif';
interface ICharacter {
    id: string;
    image: string;
    name:string;
    gender: string;
    species: string;
    location: {
        name: string;
    }
}

const Application = () => {

  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(null);
  const [quantityCharacters, setQuantityCharacters] = useState('');

  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        const handleCharacters = async () => {
            try {
                const response = await api.get(`/character?page=${page}`)
                const character = response.data.results;

                const pagination = [... characters, ...character];

                setCharacters(pagination);
                setCountPages(response.data.info.pages);
                setQuantityCharacters(response.data.info.count)
                setIsLoader(false);

            } catch(error) {
            }
        }
        handleCharacters();
    }, 750);

  }, [page]);


  return (
    <>
    {isLoader &&
        <Loader>
            <img src={teste} />
        </Loader>
    }

    <Container>
        <Header>
            <h1>Rick and Morty</h1>
            <span>N° de personagens: {quantityCharacters}</span>
        </Header>

        <ContentCharcters>

        <div>
            {characters.map((charcter) => (
                <CardCharacter
                    key={charcter.id}
                    image={charcter.image}
                    name={charcter.name}
                    gender={charcter.gender}
                    species={charcter.species}
                    location={charcter.location.name}
                 />
            ))}

        </div>

            <span className="infoPageActual">Pagina atual: {page}</span>
            {
                (!(page == countPages)) ? <button onClick={() => setPage(page + 1)}>Carregar Mais</button> : <button>Fim (:</button>
            }

        </ContentCharcters>
    </Container>
    </>
  )
}

export default Application;
