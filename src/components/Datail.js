import React from "react";
import styled from "styled-components";

export default () => {
    return(
        <Container>
            <Background>
                <img src="https://1.bp.blogspot.com/-wYNIv7AFhyc/YUo476uNRnI/AAAAAAAACUw/XqViKy2wsbIjpAEFSEjiIiL0g1s4uloPwCLcBGAsYHQ/s1877/Luca-caio-Alberto-Luca-Short-LI.jpg" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1619566337756-F9C4OZ58Z286TEAWMSHD/logo.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
        </Container>
    );
}

const Container = styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;   
        object-fit: cover;
    }

`;

const ImageTitle = styled.div `
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height:100%;
        object-fit: contain;
    }
`;

const Controls = styled.div `
    display: flex;
    align-items: center;
`;

const PlayButton = styled.button `
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const TrailerButton = styled(PlayButton) `
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`;

const AddButton = styled.button `
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid rgb(249, 249, 249);
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: rgb(249, 249, 249);
    }
`;

const GroupWatchButton = styled(AddButton) `
    background: rgb(0, 0, 0);
`;