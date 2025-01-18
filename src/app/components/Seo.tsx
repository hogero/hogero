import React from "react";
import { URL_GP } from "../services/variables";

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<LayoutProps> = ({
  title = "HOGERO",
  description = "HOGERO ofrece servicios gerontológicos a domicilio en manos de Karla Itzel Ramos Romero. Agenda tu cita fácilmente a través de nuestro sitio web.",
  image = `${URL_GP}/LogoHogeroLT.svg`,
  url = URL_GP,
}) => {
  return (
    <>
      
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content="HOGERO, servicios gerontológicos, cuidado de adultos mayores, gerontología a domicilio, Karla Itzel Ramos Romero, citas en línea, salud gerontológica, cdmx, CDMX" />
        <meta name="author" content="Karla Itzel Ramos Romero" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph para Redes Sociales */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <meta name="google-site-verification" content="Vv220su-qh7Z7umMM_1gM9HvQyH6CawuPZL2iCwYPAg" />

        <title>{title}</title>
        <link rel="icon" href="/hogero/favicon.ico" />
      
    </>
  );
};

export default Seo;
