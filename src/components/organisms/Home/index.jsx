import Image from "next/image";
import React from "react";
import Card from "../../atoms/Card";
import Slider from "react-slick";
import ContentWrapper from "../../atoms/ContentWrapper";
import Logo from "../../atoms/Logo";

const HomeView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <div className='c-home'>
      <ContentWrapper secondary>
        <div className='c-home__container'>
          <div className='c-home__title-section'>
            <h1>
              <span>BIENVENIDO A</span>
              <Logo white />
            </h1>
            <h2>LA PLATAFORMA QUE CONECTA EL POOL EN VENEZUELA</h2>
            <h2>
              PLANIFICA, PUBLICA Y GESTIONA TUS TORNEOS DE POOL CON NOSOTROS
            </h2>
          </div>
          <div className='c-home__image-section'>
            <Image
              src='/balls2.png'
              alt='Vercel Logo'
              width={500}
              height={580}
            />
          </div>
        </div>
      </ContentWrapper>
      <div >
        <Slider {...settings}>
          <Image src='/banner-public.png' width={1440}
              height={380}/>
               <Image src='/banner-public.png' width={1440}
              height={380}/>
        </Slider>
      </div>
      <ContentWrapper>
        <div className='c-second-section'>
          <div className='c-second-section__a'>
            <img
              className='c-second-section__a__image'
              src='/white-table.png'
              alt='white table'
            />
            <div className='c-second-section__a__text'>
              <h1>EL POOL AHORA MÁS CERCA</h1>
              <p>
                <strong>Billarhub</strong> es una plataforma que permite crear torneos fácilmente, ofreciendo esta funcionalidad como herramienta principal, que beneficiará tanto a organizadores como jugadores. ¿Por qué?, muy fácil: los torneos seran organizados de manera legitima con una herramienta automatizada y configurable por los organizadores, el acceso al estatus de cada match en tiempo real, estadisticas y rankings para los jugadores, aumentar la visibilidad del pool y el billar venezolano al resto del mundo a través de nuestro <strong>livestream</strong>.
              </p>
            </div>
          </div>
          <div className='c-second-section__b'>
            <Image
              style={{
                borderRadius: "40px",
                border: "15px solid #FFF !important",
              }}
              src='/group-people.png'
              alt='Vercel Logo'
              width={408}
              height={706}
            />
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper secondary>
        <div className='c-third-section'>
          <div className='c-third-section__title'>
            <h1>NUESTROS SERVICIOS</h1>
          </div>
          <div className='c-third-section__container'>
            <div className='c-third-section__image'>
              <img src='/trophy.png' />
              <h3>TORNEOS</h3>
            </div>
            <div className='c-third-section__image'>
              <img src='live-streaming.png' />
              <h3>LIVESTREAM</h3>
            </div>
            <div className='c-third-section__image'>
              <img src='/online-shop.png' />
              <h3>STORE</h3>
            </div>
            <div className='c-third-section__image'>
              <img src='/rankings.png' />
              <h3>RANKINGS</h3>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className='c-fourth-section'>
          <div className='c-fourth-section__a'>
            <div className='c-fourth-section__a__image'>
              <img src='/rating.png' />
            </div>
            <div className='c-fourth-section__a__text'>
              <h1>LOS QUE CONFÍAN EN NOSOTROS</h1>
            </div>
          </div>
          <div className='c-fourth-section__b'>
            <img src='/fvbillar.jpeg' />
            <img src='/lacaleta.png' />
            <img src='/gpool.jpeg' />
            {/* <img src='' /> */}
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper secondary>
        <div className='c-fifth-section'>
          <h1>Eventos</h1>
          <div className='c-fifth-section__container'>
            <div className='c-fifth-section__a'>
              <Image style={{
                borderRadius: "40px",
              }}
              alt='fvb'
              width={450}
              height={600}
              src='/fvb-tournament.jpeg' />
            </div>
            <div className='c-fifth-section__b'>
              <h3>
                CAMPEONATOS NACIONALES DE POOL BOLA 9 y BOLA 8, MASCULINO,
                FEMENINO Y JUVENILES
              </h3>
              <p>
                Fevebillar convoca a todas las Asociaciones y Clubes afiliados a
                participar en LOS CAMPEONATOS NACIONALES DE POOL BOLA 9 y BOLA 8
                en las categorías JUVENIL y MAXIMA (Femenino y Masculino). El
                evento se realizara en homenaje al billarista insigne JALAL
                YOUSEF por su destacada trayectoria dentro del billar venezolano
                y mundial. En el evento podrán participar todos los billaristas
                que debidamente sean inscritos por las entidades Regionales, y
                que se encuentren al día con el pago de la membrecía del año
                2022.
              </p>
              <a>Ver mas..</a>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HomeView;
