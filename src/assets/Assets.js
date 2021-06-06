import logo from './svgs/logo.svg'
import logoAmazon from './svgs/logo-amazon.svg'
import logoFacebook from './svgs/logo-facebook.svg'
import logoGoogle from './svgs/logo-google.svg'
import logoLinkedin from './svgs/logo-linkedin.svg'
import logoMicrosoft from './svgs/logo-microsoft.svg'
import logoNetflix from './svgs/logo-netflix.svg'
// Imagenes.
import HeroImg from './images/img-01.png'

// Iconos.
import iconCheck from './icons/icon-check.svg'

// Logos.
export const Logo = ({className}) => {
    return (
        <img src={logo} alt="logo templune" className={className}/>
    )
}

export const LogoAmazon = ({className}) => {
    return (
        <img src={logoAmazon} alt='logos companies' className={className}/>
    )
}
export const LogoFacebook = ({className}) => {
    return (
        <img src={logoFacebook} alt='logos companies' className={className}/>
    )
}
export const LogoGoogle = ({className}) => {
    return (
        <img src={logoGoogle} alt='logos companies' className={className}/>
    )
}
export const LogoLinkedin = ({className}) => {
    return (
        <img src={logoLinkedin} alt='logos companies' className={className}/>
    )
}
export const LogoMicrosoft = ({className}) => {
    return (
        <img src={logoMicrosoft} alt='logos companies' className={className}/>
    )
}
export const LogoNetflix = ({className}) => {
    return (
        <img src={logoNetflix} alt='logos companies' className={className}/>
    )
}
// Terminan logos.

// Imagenes.
export const ImageHero =({className='img-fluid'}) => {
    return (
        <img src={HeroImg} alt='hero' className={className}/>
    )
}
// Terminan Imagenes.

// Iconos.
export const IconCheck = ({className}) => {
    return(
        <img src={iconCheck} alt='icon check' className={className}/>
    )
}
// Terminan Iconos.