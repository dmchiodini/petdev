"use client"

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
    title: "Banho e Tosa",
    description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada.",
    duration: "1h",
    price: "R$50",
    icon: <Scissors />,
    linkText: "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações."
  },
  {
    title: "Consulta Veterinária",
    description: "Consulta de rotina para avaliação da saúde do seu pet, com exame clínico, atualização de vacinas e orientação sobre cuidados preventivos.",
    duration: "30min",
    price: "R$100",
    icon: <Syringe />,
    linkText: "Quero agendar uma consulta veterinária. Como posso proceder?"
  },
  {
    title: "Hospedagem",
    description: "Oferecemos um ambiente seguro e confortável para seu pet, com alimentação de qualidade e atenção constante durante a estadia.",
    duration: "Diária",
    price: "R$80/dia",
    icon: <Hotel />,
    linkText: "Gostaria de saber mais sobre as opções de hospedagem para meu pet."
  },
  {
    title: "Táxi Pet",
    description: "Serviço de transporte especializado para levar seu pet ao veterinário, pet shop ou qualquer outro local, com segurança e conforto.",
    duration: "2h",
    price: "R$80",
    icon: <CarTaxiFront />,
    linkText: "Tenho interesse Táxi pet e gostaria de mais informações."
  }
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3" key={index}>
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{service.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold my-1">{service.title}</h3>
                          <p className="text-sm text-gray-400 select-none">{service.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-5 h-5" />
                        <span>{service.duration}</span>
                      </div>

                      <a target="_blank" href={`https://wa.me/5511999996688?text=Olá vim pelo site e gostaria de mais informações sobre ${service.title}`} className="flex items-center justify-center gap-2 hover:bg-[#FF586D] px-4 py-1 rounded-md duration-300">
                        Entrar em Contato
                        <WhatsappLogoIcon />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button className="absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-200 w-10 h-10 cursor-pointer z-10" onClick={scrollPrev}>
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button className="absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 bg-white flex items-center justify-center rounded-full shadow-lg border border-gray-200 w-10 h-10 cursor-pointer z-10" onClick={scrollNext}>
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
