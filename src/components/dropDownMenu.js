import '../App.scss'
import { useTranslation } from "react-i18next";
import menu from '../assets/img/portfolio/icons/menu.png'

export default function DropMenu (){
    const { t } = useTranslation();
  return(
<div className="dropdown">
  <button className="dropbtn">
    <img src={menu}/>
  </button>
  <div className="dropdown-content">
    <a className="nav-link" href="#about">
        {t('about')}
    </a>
    <a className="nav-link" href="#services">
        {t('services')}
    </a>
    <a className="nav-link" href="#portfolio">
        {t('projects')}
            </a>
    <a className="nav-link" href="#contact">
        {t('contact')}
    </a>
  </div>
</div>
  )
}