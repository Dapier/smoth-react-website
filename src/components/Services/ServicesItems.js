import styled from "styled-components";
import { FcGoogle ,FcSelfServiceKiosk, FcIdea, FcSalesPerformance} from "react-icons/fc";
import { BsCodeSlash, BsBrush } from "react-icons/bs";

export const ServicesContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d8e3e7;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:2rem;
  box-shadow: 7px 19px 42px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  max-height: 1000px;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesTitle = styled.div`
  font-size: 5rem;
  font-weight: 700;
  padding: 1rem 0rem 3rem;

  @media screen and (max-width: 768px) {
  font-size: 3rem;
    
  }
`;

export const ServicesSub = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.4rem;
`;


export const ServicesDescription = styled.div`
  padding-top: 0.5rem;
  font-size: 1.2rem;
  font-size: 700;
  color: #132C33;
`;

export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--Secondary-color-dark);
    border-radius: 10px;
    height: auto;
    padding: 2%;
    text-align: center;
    transition: all 0.6s ease-in-out;
`;

export const InternalWrapper = styled.div`
    width: 100%;
    max-height: ${(props) => (props.open ? '100%' : '0')};
    transition: all 1s ease-in-out;
    overflow: hidden;
    `;

export const ServicesIcon = styled.div`
  margin-top: -4rem;
  position: absolute;

`;
export const GoogleIco = styled(FcGoogle)`
    background: #fff;
    border-radius: 2rem;
    width: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
    box-shadow: 0px 10px 68px -3px rgba(0,0,0,0.1);
`
export const CreativeIco = styled(FcIdea)`
    background: #fff;
    border-radius: 2rem;
    width: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
    box-shadow: 0px 10px 68px -3px rgba(0,0,0,0.1);
`
export const CodeIco = styled(FcSelfServiceKiosk)`
    background: #fff;
    border-radius: 2rem;
    width: 4rem;
    height: 4rem;
    white-space: nowrap;
    padding: 0.3rem;
    margin-bottom: 1rem;
    box-shadow: 0px 10px 68px -3px rgba(0,0,0,0.1);
`
export const SalesIco = styled(FcSalesPerformance)`
    background: #fff;
    border-radius: 2rem;
    width: 4rem;
    height: 4rem;
    white-space: nowrap;
    padding: 0.3rem;
    margin-bottom: 1rem;
    box-shadow: 0px 10px 68px -3px rgba(0,0,0,0.1);
`

export const Line = styled.hr`
  margin-top: 1rem;
  color: rgba(0,0,0,0.1);
  width: 100%;
  box-shadow: 0px 10px 68px -3px rgba(0,0,0,0.1);
  
`;