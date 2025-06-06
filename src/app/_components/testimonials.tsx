"use client"

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import manImage from '../../../public/homem1.jpg'
import womanImage from '../../../public/mulher1.jpg'
import womanImage2 from '../../../public/mulher2.jpg'
import Image from "next/image";


const testimonials = [
  {
    content: "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O ambiente é calmo, os profissionais são super atenciosos e cuidadosos. Dá pra ver que ela se sente segura e bem tratada. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: womanImage
  },
  {
    content: "O atendimento é simplesmente impecável. O Max costumava ficar nervoso em pet shops, mas aqui ele é tratado com tanto carinho que já entra abanando o rabo! A equipe sempre tira um tempo para conversar e explicar tudo. Me sinto muito confiante em trazer ele aqui.",
    author: "Carlos Henrique",
    role: "Tutor do Max (Bulldog Francês)",
    image: manImage
  },
  {
    content: "Tive que viajar às pressas e deixei a Mel na hospedagem. Confesso que estava preocupada, mas recebi fotos e atualizações diárias, o que me deixou super tranquila. Ela voltou pra casa calma, feliz e cheirosa! É ótimo saber que posso contar com um lugar assim.",
    author: "Fernanda Lima",
    role: "Tutora da Mel (Poodle)",
    image: womanImage2
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#F0E68C] py-16">
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-4xl font-bold mb-12 text-center">Depoimentos dos nossos clientes</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="flex-[0_0_100%] min-w-0 px-3" key={index}>
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4 px-4 ">
                      <div className="relative w-24 h-24">
                        <Image
                          src={testimonial.image}
                          alt={`Foto de ${testimonial.author}`}
                          sizes="96px"
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <p className="text-gray-200">{testimonial.content}</p>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
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
