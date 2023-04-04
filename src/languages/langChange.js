import i18next, { changeLanguage } from "i18next";
import './index'
import eng from '../assets/img/portfolio/icons/eng.png'
import geo from '../assets/img/portfolio/icons/geo.png'
import i18n from "./index";



export default function LangChange() {  
   if(i18n !== 'ge'){
    return(
      <img src={geo} onClick={() => i18next.changeLanguage('ge')}/>
    )
    }if(i18n !== 'en'){
      return(
        <img src={eng} onClick={() => i18next.changeLanguage('en')}/>
      )
    }
}