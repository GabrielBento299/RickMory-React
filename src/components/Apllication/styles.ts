import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1246px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    color: #fff;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);

    h1 {
        font-size: 32px;
    }

    span {
        font-size: 16px;
        opacity: 0.7;
    }
`;

export const ContentCharcters = styled.div`
    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.5rem;
    }

    button {
        display: block;
        line-height: 6.5rem;
        background-color: #5B1FA6;
        color: #FFF;
        border-radius: 7px;
        width: 30rem;
        margin: 0 auto;
        margin-top: 4.8rem;
        cursor: pointer;
        border: none;
        font-size: 1.8rem;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(1.2);
        }

    }
`;
