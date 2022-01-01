import React, { useState } from "react";
//import styles
import {
  ServicesContainer,
  ServicesTitle,
  ServicesWrapper,
  ServiceCard,
  ServicesSub,
  ServicesDescription,
  ServicesIcon,
  AccordionWrapper,
  InternalWrapper,
  Icon,
  GoogleIco,
  CreativeIco,
  CodeIco,
  Line,
  SalesIco
} from "./ServicesItems";

//icons

function Services() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ServicesContainer id="services">
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesWrapper>
          <ServiceCard>
            <ServicesIcon> 
                <GoogleIco width='50px' height='50px'/>
            </ServicesIcon>
            <ServicesSub>SEO</ServicesSub>
            <ServicesDescription>
              We help you in SEO to be top search, we optimize your website to be more relevant in google for instance
            </ServicesDescription>
            <Line/>
            <ServicesDescription>
            Increase its visibility on internet for your company website
            </ServicesDescription>
            <AccordionWrapper>
              
            </AccordionWrapper>
          </ServiceCard>

          <ServiceCard>
            <ServicesIcon >
                 <CreativeIco />
            </ServicesIcon>
            <ServicesSub>Design</ServicesSub>
            <ServicesDescription>
              Create your branding, user interface and user experiencie of your
              future site{" "}
            </ServicesDescription>
            <Line/>
            <ServicesDescription>
            We provides you awesome and beautiful differents designs, or instead, you shows off your design and we build!
            </ServicesDescription>

          </ServiceCard>

          <ServiceCard>
            <ServicesIcon >
                <CodeIco />
            </ServicesIcon>
            <ServicesSub>Landing pages & App webs</ServicesSub>
            <ServicesDescription>
              We help you in SEO to be top search{" "}
            </ServicesDescription>
            <Line/>
            <ServicesDescription>
            Increase its visibility on internet for your company website
            </ServicesDescription>
          </ServiceCard>

          <ServiceCard>
            <ServicesIcon>
            <SalesIco />
            </ServicesIcon>
            <ServicesSub>Digital Marketing</ServicesSub>
            <ServicesDescription>
              Working with Google Ads , we can deploy your sales with campaings for your sales!
            </ServicesDescription>
            <Line/>
            <ServicesDescription>
            Increase its visibility on internet for your company website
            </ServicesDescription>
          </ServiceCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
