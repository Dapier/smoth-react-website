import React from 'react'
import { Blur, SideBarContainer, CloseIcon, Icon, SideBarWrapper, SideBarMenu,SideBarLink, SideBarRoute, SideBtnWrap } from './SideBarItems'

const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="works" onClick={toggle}>
                        Works
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to="contact" onClick={toggle}>
                        Contact
                    </SideBarLink>
                    
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/signup">
                        Download
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
