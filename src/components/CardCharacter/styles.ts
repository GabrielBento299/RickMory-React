import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 2rem;
    border-radius: 7px;
    background-color: #151020;

    .image {
        width: 100%;
        height: 24.4rem;
        overflow: hidden;
        border-radius: 7px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        margin-top: 1.5rem;
    }

    h3 {
        font-size: 1.8rem;
        margin-bottom: 0.8rem;
    }

    ul {
        display: flex;
        list-style: none;

        li {
            display: block;
            font-size: 1.4rem;

            &:last-child {
                &::before {
                    content: '';
                    display: inline-block;
                    width: 4px;
                    height: 4px;
                    background-color: #FFF;
                    opacity: 0.4;
                    border-radius: 50%;
                    margin: 0 8px;
                    vertical-align: middle;
                }
            }
        }
    }
`;
