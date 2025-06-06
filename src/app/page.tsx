import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Dev</title>
        <meta name="description" content="Oferecemos serviços profissionais de banho, tosa e cuidados para pets em São Paulo. Atendimento com amor e carinho!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.petdev.com/" />

        {/* Open Graph para redes sociais */}
        <meta property="og:title" content="Pet Dev - Serviços Pet em São Paulo" />
        <meta property="og:description" content="Cuidados completos para o seu pet: banho, tosa, estética animal e mais!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.petdev.com/" />
        {/* <meta property="og:image" content="https://www.petdev.com/og-image.jpg" /> */}

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pet Dev - Serviços Pet em São Paulo" />
        <meta name="twitter:description" content="Banho, tosa e muito carinho para seu pet!" />
        {/* <meta name="twitter:image" content="https://www.petdev.com/og-image.jpg" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PetStore",
              "name": "Pet Amor & Cuidado",
              "image": "https://www.petdev.com/logo.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Exemplo, 123",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "postalCode": "01234-567",
                "addressCountry": "BR"
              },
              "telephone": "+55-11-99999-9999",
              "url": "https://www.petdev.com",
              "priceRange": "R$",
              "openingHours": ["Mo-Sa 09:00-18:00"],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.55052,
                "longitude": -46.633308
              }
            }),
          }}
        />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
