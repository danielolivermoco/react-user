import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`
export const Image = styled.img`
    margin-top: 30px;
`
export const ContainerItens = styled.div`
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 61px 61px 0px 0px;
    backdrop-filter: blur(45px);
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 80px;
`
export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #ffffff;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
        transform: rotateY(180deg);
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`



