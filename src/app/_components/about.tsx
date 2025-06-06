"use client";

import Image from "next/image";
import about1 from '../../../public/about-catdog.png';
import about2 from '../../../public/about-cat.png';
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";


export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1}
                alt="foto de um gato e um cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image
                src={about2}
                alt="foto de um gato"
                fill
                quality={100}
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>Sabemos o quanto seu pet é especial. Por isso, oferecemos serviços pensados para garantir que seu amigo de quatro patas receba todo o cuidado, atenção e amor que merece. Com profissionais qualificados e produtos de alta qualidade, nosso objetivo é proporcionar a melhor experiência para o seu pet, seja na hora do banho, na hora do passeio ou até mesmo na escolha de produtos que ajudem no seu dia a dia.</p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a target="_blank" href={`https://wa.me/5511999996688?text=Olá vim pelo site e gostaria de mais informações`} className="text-white bg-[#FF586D] flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md shadow-md">
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2">
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
