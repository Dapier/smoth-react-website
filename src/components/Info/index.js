import React , {useState} from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Col1, Col2, TextWrapper, TopLine, Heading, Sub, BtnWrap, Img, ImgWrap } from './InfoItems'
import { Button } from '../BtnItem'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
const Info = ({lightBg, lightText,id, imgStart, topLine, headline, darkText, description,buttonLabel, img, alt, primary, dark, dark2}) => {
    const [hover, sethover] = useState(false);
    const onHover = () =>{
        sethover(!hover)
    }
    return (
        
        <>
            <InfoContainer lightBg= {lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart= {imgStart}>
                        <Col1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Sub darkText={darkText}>{description}</Sub>
                                <BtnWrap>
                                    <Button to="home" 
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact= "true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel} {hover ? <IoArrowBack /> : <IoArrowForward />}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <ImgWrap>
                                <Img src={img} alt={alt} autoPlay loop muted type='video/mp4'/>
                            </ImgWrap>
                        </Col2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
