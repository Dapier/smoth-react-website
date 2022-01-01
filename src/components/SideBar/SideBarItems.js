import styled from "styled-components";
import { IoClose  } from "react-icons/io5";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';


export const Blur = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 938;
    position: fixed;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;

`;
export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 85%;
    height: 100%;
    background: #393424;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' :  '0')};
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(IoClose)`
    color:#fff;
    
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarWrapper = styled.div`
    color: #fff;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center ;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    border-bottom: 0;
    
    &:hover{
        color: #8E05C2;
        border-bottom: 0.4rem solid white;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`;

export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #8E05C2;
    white-space: nowrap;
    color: #010606;
    padding: 1.5rem 4rem;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff; 
        color: #010606;
    }
`;