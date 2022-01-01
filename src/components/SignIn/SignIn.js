import React from 'react'
import TeamworkPhoto from './../../images/teamwork.jpg'

//Logo
import Logo from '../../images/Logo.png'

//styledcomponents
import { Container, Card, Col1,Image ,Col2,LogoCompany,LogoLink, NameCompany,FormContent, InputField,BtnForm } from './SignInSC'
function SignInCard() {
    return (
        <Container>
            
            <Card>
                
                <Col1>  
                    <Image  src={TeamworkPhoto}/>
                </Col1>
                <Col2>
                    <LogoCompany src={Logo} to="/"/>
                    <NameCompany >Kan</NameCompany>
                    <FormContent>
                        <InputField  placeholder="Your First Name" />
                        <InputField  placeholder="Your Last Name" />
                        <InputField placeholder="Your email"/>
                        <BtnForm>
                            Submit
                        </BtnForm>
                    </FormContent>
                </Col2>
            </Card>
        </Container>
    )
}

export default SignInCard
