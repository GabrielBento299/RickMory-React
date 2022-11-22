import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1246px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    color: #fff;

    .infoPageActual {
        display: block;
        font-size: 16px;
        font-weight: bold;
        margin-top: 8px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);

    @media (max-width: 425px) {
            display: flex;
            flex-direction: column;
            gap: 12px;
    }

    h1 {
        font-size: 32px;
    }

    span {
        font-size: 16px;
        color: #ccc;
    }
`;

export const ContentCharcters = styled.div`
    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.5rem;

        @media (max-width: 425px) {
            display: flex;
            flex-direction: column;
        }
    }

    button {
        display: block;
        line-height: 6.5rem;
        background-color: #5B1FA6;
        color: #FFF;
        border-radius: 7px;
        width: 30rem;
        margin: 30px auto;
        cursor: pointer;
        border: none;
        font-size: 1.8rem;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(1.2);
        }

    }
`;

export const Loader = styled.div`
    background-color: #040011;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
