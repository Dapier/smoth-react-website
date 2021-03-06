import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #242424;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;
export const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #D8E3E7;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;
export const FooterTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 16px;
`


export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover{
        color: #51C4D3;
        transition: 0.3s ease-in-out;
    }
`

export const SocialMedia = styled.section`
    background-color: #fff;
    display: flex;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1100px;
    margin: 10px auto 0 auto;

    flex-direction: column;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    display: flex;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: 242424;
    width: 110px;
    cursor: pointer;

    
`;

export const SocialIconLink = styled.a`
    color: 242424;
    &:hover{
        color: #51C4D3;
        transition: 0.3s all ease-in;
    }
`;

export const FooterLegend = styled.small`
    text-align: center;
    color: 242424;
    margin-bottom: 16px;
`;