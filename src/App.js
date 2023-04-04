import './App.scss'
import { useTranslation } from "react-i18next";
import './languages/index'
import mob from './assets/img/portfolio/project section/mob.png';
import gm from './assets/img/portfolio/project section/gm.png';
import linkedin from './assets/img/portfolio/project section/linkedin.png';
import map from './assets/img/portfolio/project section/map.png';
import pic from './assets/img/portfolio/fullsize/personal-pic.png'
import shop from './assets/img/portfolio/project section/project covers/tech-shop.jpeg'
import service from './assets/img/portfolio/project section/project covers/car-service.jpeg'
import todo from './assets/img/portfolio/project section/project covers/todo.jpeg'
import LangChange from './languages/langChange'
import DropMenu from './components/dropDownMenu';


window.addEventListener('DOMContentLoaded', event => {

  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };
  navbarShrink();
  document.addEventListener('scroll', navbarShrink);
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });
});

export default function App() {
  const { t } = useTranslation();
  
 
 return(
  <>
  <section id='wlc'>
  <nav
    className="navbar navbar-expand-lg navbar-light fixed-top py-3"
    id="mainNav"
  >
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#wlc">
        Welcome
      </a>
      {/* <DropMenu/> */}
      <div className='lang-div dropMenu'>
        <DropMenu/>
        <LangChange/>
      </div>
      <div className="navbar-collapse ul-div" id="navbarResponsive">
        <ul className="navbar-nav ms-auto my-2 my-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#about">
             {t('about')}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
            {t('services')}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
            {t('projects')}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
            {t('contact')}
            </a>
          </li>
        </ul>
        <div className='lang-div'>
          <LangChange/>
        </div>
          {/* <button onClick={() => i18next.changeLanguage('ge')} onChange={() => LangChange()}>Ge</button>
          <button onClick={() => i18next.changeLanguage('en')} onChange={() => LangChange()}>En</button> */}
        
      </div>
    </div>
  </nav>
  </section>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container px-4 px-lg-5 h-100">
      <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-8 align-self-end">
          <h1 className="text-white font-weight-bold">
            Your Favorite Place for Free Bootstrap Themes
          </h1>
          <hr className="divider" />
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="text-white-75 mb-5">
            Start Bootstrap can help you build better websites using the
            Bootstrap framework! Just download a theme and start customizing, no
            strings attached!
          </p>
          <a className="btn btn-primary btn-xl" href="#about">
            Find Out More
          </a>
        </div>
      </div>
    </div>
  </header>
  {/* About*/}
  <section className="page-section bg-primary" id="about">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-lg-8 text-center">
          <img src={pic} className='pic'/>
          <h2 className="text-white mt-0">We've got what you need!</h2>
          <hr className="divider divider-light" />
          <p className="text-white-75 mb-4">
            Start Bootstrap has everything you need to get your new website up
            and running in no time! Choose one of our open source, free to
            download, and easy to use themes! No strings attached!
          </p>
          <a className="btn btn-light btn-xl" href="#services">
            Get Started!
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Services*/}
  <section className="page-section" id="services">
    <div className="container px-4 px-lg-5">
      <h2 className="text-center mt-0">At Your Service</h2>
      <hr className="divider" />
      <div className="row gx-4 gx-lg-5">
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <div className="mb-2">
              <i className="bi-gem fs-1 text-primary" />
            </div>
            <h3 className="h4 mb-2">Sturdy Themes</h3>
            <p className="text-muted mb-0">
              Our themes are updated regularly to keep them bug free!
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <div className="mb-2">
              <i className="bi-laptop fs-1 text-primary" />
            </div>
            <h3 className="h4 mb-2">Up to Date</h3>
            <p className="text-muted mb-0">
              All dependencies are kept current to keep things fresh.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <div className="mb-2">
              <i className="bi-globe fs-1 text-primary" />
            </div>
            <h3 className="h4 mb-2">Ready to Publish</h3>
            <p className="text-muted mb-0">
              You can use this design as is, or you can make changes!
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <div className="mb-2">
              <i className="bi-heart fs-1 text-primary" />
            </div>
            <h3 className="h4 mb-2">Made with Love</h3>
            <p className="text-muted mb-0">
              Is it really open source if it's not made with love?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Portfolio*/}
  <div id="portfolio">
    <div className="container-fluid p-0">
      <div className="row g-0 projects">
        <div className="col-lg-4 ">
          <a
            className="portfolio-box"
            href="assets/img/portfolio/fullsize/1.jpg"
            title="Project Name"
          >
            <img
              className="img-fluid"
              src={shop}
              alt="..."
            />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">Category</div>
              <div className="project-name">Tech shop (store)</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4">
          <a
            className="portfolio-box"
            href="assets/img/portfolio/fullsize/2.jpg"
            title="Project Name"
          >
            <img
              className="img-fluid"
              src={todo}
              alt="..."
            />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">Category</div>
              <div className="project-name">ToDo app</div>
            </div>
          </a>
        </div>
        <div className="col-lg-4">
          <a
            className="portfolio-box"
            href="assets/img/portfolio/fullsize/3.jpg"
            title="Project Name"
          >
            <img
              className="img-fluid"
              src={service}
              alt="..."
            />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">Category</div>
              <div className="project-name">Car service shop</div>
            </div>
          </a>
        </div>   
      </div>
    </div>
  </div>
  {/* Call to action*/}
  <section className="page-section bg-dark text-white">
    <div className="container px-4 px-lg-5 text-center">
      <h2 className="mb-4">See more on Github</h2>
      <a
        className="btn btn-light btn-xl"
        href="https://startbootstrap.com/theme/creative/"
      >
        Github
      </a>
    </div>
  </section>
  {/* Contact page*/}
  <section className="page-section" id="contact">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-lg-8 col-xl-6 text-center">
          <h2 className="mt-0">Let's Get In Touch!</h2>
          <hr className="divider" />
          <p className="text-muted mb-5">
            Ready to start your next project with us? Send us a messages and we
            will get back to you as soon as possible!
          </p>
        </div>
      </div>
      {/* <div className="row  gx-lg-5 justify-content-center mb-5"> */}
        <div class="contact-div">
            <div  className="flex-div">
                <div>
                    <a>
                        <img className='image'  src={mob} alt="phone"/>
                        <p className='text-muted mb-5'> +(995) 555-61-68-15 </p> 
                    </a>
                    <a target="_blank">
                        <img className='image'  src={linkedin} alt="facebook"/>
                        <p className='text-muted mb-5'> Kvirike Kemularia</p>
                    </a>
                </div>
                <div>
                    <a href="mailto:someone@example.com" target="_blank">
                        <img src={gm} alt="email"/>
                        <p className='text-muted mb-5'>kvirikekemularia@gmail.com</p> 
                    </a>
                    <a  target="_blank">
                        <img  src={map} alt="map"/>
                        <p className='text-muted mb-5'>Georgia, Tbilisi</p>
                    </a>
            </div>
        </div>
    </div>
        </div>
      {/* </div> */}
  </section>
  <footer className="bg-light py-5">
    <div className="container px-4 px-lg-5">
      <div className="small text-center text-muted">
        <p>"Stay hungry, stay foolish"</p>
        <p>-Steve jobs-</p>
      </div>
    </div>
  </footer>
  </>
 )
}
