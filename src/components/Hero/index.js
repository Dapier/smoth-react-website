import React , {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowBack, ArrowForward } from './HeroItems'
import Video from '../../videos/video.mp4'
import { Button } from '../BtnItem'
import TypewriterComponent from 'typewriter-effect'

const Hero = () => {
    const [hover, sethover] = useState(false);
    const onHover = () =>{
        sethover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Learn <TypewriterComponent className="typing"  loop={false} 
                    onInit={(typing) =>{
                        typing.typeString("Web Development")
                        .pauseFor(2000)
                        .deleteAll()
                        typing.typeString("UI/UX Design")
                        .pauseFor(2000)
                        .deleteAll()
                        typing.typeString("Front-end")
                        .pauseFor(2000)
                        .deleteAll()
                        typing.typeString("Back-end")
                        .pauseFor(2000)
                        .deleteAll()
                        typing.typeString("Full-stack")
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                    }}
                    options={{
                        loop: true,
                      }}
                />
                </HeroH1>
                
                <HeroP>
                    Learn and use tecnologies to create awesomes projects!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Discover now {hover ? <ArrowBack /> : <ArrowForward />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
