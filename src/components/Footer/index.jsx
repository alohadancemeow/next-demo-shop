import React from 'react'
import { FooterSection, FooterTitle, FooterSubtitle, FooterLink } from './styles'

const Footer = () => {
    return (
        <FooterSection>
            <FooterTitle>
                I will have order
            </FooterTitle>
            <FooterSubtitle>
                <span>© 2022 Created by {' '}</span>
                <FooterLink href='https://github.com/alohadancemeow' target='_blank'>
                    @alohadancemeow
                </FooterLink>
            </FooterSubtitle>
        </FooterSection>
    )
}

export default Footer