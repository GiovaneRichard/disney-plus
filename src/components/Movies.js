import React from "react";
import slider from "react-slick/lib/slider";
import styled from "styled-components";

export default () => {
    return(
        <Container>
            <h4>Recomendado para você</h4>
            <Content>
                <Wrap>
                    <img src="https://www.selecoes.com.br/wp-content/uploads/2020/07/Novo-Projeto-66-760x450.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://www.selecoes.com.br/wp-content/uploads/2020/07/Novo-Projeto-66-760x450.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://www.selecoes.com.br/wp-content/uploads/2020/07/Novo-Projeto-66-760x450.jpg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://www.selecoes.com.br/wp-content/uploads/2020/07/Novo-Projeto-66-760x450.jpg" alt="" />
                </Wrap>
            </Content>
        </Container>
    );
}

const Container = styled.div `

`;

const Content = styled.div `
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div `

    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;