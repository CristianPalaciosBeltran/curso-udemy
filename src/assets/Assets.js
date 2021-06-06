import logo from './svgs/logo.svg'
import HeroImg from './images/img-01.png'

export const Logo = ({className}) => {
    return (
        <img src={logo} alt="logo templune" className={className}/>
    )
}

export const ImageHero =({className='img-fluid'}) => {
    return (
        <img src={HeroImg} alt='hero' className={className}/>
    )
}