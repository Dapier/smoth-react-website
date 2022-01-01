import styled from "styled-components";
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;
    margin-top: -80px;

    ::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
         linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
         z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 480px){
    display: flex;
        align-items: flex-start;
        

    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 9em;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 3.4em;
    }

    @media screen and (max-width: 480px){
        text-align: left;
        font-size: 3.3em;
        max-width: 480px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
        text-align: left;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;



export const ArrowBack = styled(IoArrowBack)`
    font-size: 2em;
    margin-left: 8px;
`;

export const ArrowForward = styled(IoArrowForward)`
    font-size: 2em;
    margin-left: 8px;

`;



