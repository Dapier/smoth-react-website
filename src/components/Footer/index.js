import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterTitle,FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, FooterLegend, SocialIcons, SocialIconLink } from './FooterItems'
import { SiFacebook, SiYoutube, SiInstagram, SiLinkedin } from "react-icons/si";
import Logo from './../../images/Logo.png'
//React scroll
import {animateScroll as scroll} from 'react-scroll'
function Footer() {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterTitle>About Us</FooterTitle>
                                <FooterLink to="/signin">Works</FooterLink>
                                <FooterLink to="/signin">Opinions</FooterLink>
                                <FooterLink to="/signin">Common questions</FooterLink>
                                <FooterLink to="/signin">Porfolio</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterTitle>Contact Us</FooterTitle>
                                <FooterLink to="/signin">kan@sales.com</FooterLink>
                                <FooterLink to="/signin">kan@info.com</FooterLink>
                                <FooterLink to="/signin">Complanit</FooterLink>
                                <FooterLink to="/signin">+32 123125434</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterTitle>Terms of Service</FooterTitle>
                                <FooterLink to="/signin">Law</FooterLink>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Tiktok</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterTitle>Social</FooterTitle>
                                <FooterLink href="https://www.facebook.com/">Facebook <SiFacebook/> </FooterLink>
                                <FooterLink href="https://www.instagram.com/dapiers/">Instagram <SiInstagram /> </FooterLink>
                                <FooterLink href="https://www.youtube.com/">Youtube <SiYoutube /> </FooterLink>
                                <FooterLink href="https://www.linkedin.com/in/josue-alvarado-11b799166/">Linkedin <SiLinkedin/> </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                
            </FooterWrap>
            <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            <img src={Logo} height="60px" width="60px"/>
                        </SocialLogo>
                        <FooterLegend>
                            Copyright© {new Date().getFullYear()} KAN. All rights reserved.
                        </FooterLegend>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/">
                                <SiFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/">
                                <SiYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/dapiers/">
                                <SiInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/josue-alvarado-11b799166/">
                                <SiFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
