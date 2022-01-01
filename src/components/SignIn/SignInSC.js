import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: grid;
    place-items: center;
    background: rgb(224,236,234);
background: linear-gradient(39deg, rgba(224,236,234,1) 35%, rgba(255,253,246,1) 75%);
    object-fit: cover;
`;



export const Card = styled.div`
    display: flex;
    max-width: 80%;
    height: 700px;
    border-radius: 2rem;
    background: #fff;
    box-shadow: 16px 15px 15px -9px rgba(0,0,0,0.1);
    @media screen and (max-width: 768px){
        font-size: 3.4em;
    }

    @media screen and (max-width: 480px){
       flex-direction: column;
    }
`;

export const Col1 = styled.div`
    width: 50%;
    @media screen and (max-width: 768px){
        display: none;

    }
`;


export const Image = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem 0rem 0rem 2rem;
    box-shadow: 16px 15px 15px -9px rgba(0,0,0,0.1);

`;

export const Col2 = styled.div`
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    

    @media screen and (max-width: 768px){
        width: 100%;
    }

`;

export const LogoCompany = styled.img`
    width: 70px;
    height: 70px;
    margin-top: 1.5rem;
`;

export const NameCompany = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`


export const FormContent = styled.form`
    padding: 3rem;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

`;

export const InputField = styled.input`
    border-radius: 40px;
    outline: none;
    padding: 1rem 0rem 1rem 1rem;
    border: 1px solid rgba(0,0,0,0.4);
    font-size: 1rem;
    width: 80%;
    margin-bottom: 2rem;

    &:focus{
        border: 1px solid #51C4D3;
   transition:0.3s all ease-in-out;

    }

`;




export const BtnForm = styled.button`
    width: 7rem;
    height: 2rem;
    border: none;
    background: #51C4D3;
    border-radius: 2rem;
    font-size: 1rem;
    padding: 1rem 0rem 2rem 0rem;
   cursor: pointer;
   transition:0.3s all ease-in-out;
   color: #fff;


   &:hover{
       transition:0.3s all ease-in-out;
        background: #126E82;
   }
`;