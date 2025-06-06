"use client"

import { WhatsappLogoIcon } from '@phosphor-icons/react'
import dogImage from '../../../public/bg-hero2.png';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-[#FF586D] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImage}
          alt='Imagem de um cachorro'
          fill
          sizes='100vw'
          priority
          className='object-cover opacity-60 lg:hidden'
        />
        <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
      </div>

      <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10" data-aos="fade-down">Seu pet merece cuidado, carinho e atenção especial.</h1>
            <p className="lg:text-lg" data-aos="fade-right">Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.</p>

            <a target="_blank" href={`https://wa.me/5511999996688?text=Olá vim pelo site e gostaria de mais informações`} className="bg-green-500 px-5 py-2 rounded-ms font-semibold flex items-center justify-center w-fit gap-2 rounded-md shadow-md" data-aos="fade-up" data-aos-delay="200">
              <WhatsappLogoIcon className='w-5 h-5' />
              Contato via WhatsApp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
              </p>
            </div>
          </div>

          <div className='hidden md:block h-full relative'>
            <Image
              src={dogImage}
              alt="Imagem de um cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div >
    </section >
  )
}
