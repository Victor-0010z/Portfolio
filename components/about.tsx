"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Rocket, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Código limpo e eficiente com as melhores práticas",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces modernas e experiências intuitivas",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimização e velocidade em cada projeto",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe e comunicação efetiva",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div
              className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                Sou um jovem desenvolvedor de 18 anos apaixonado por tecnologia e programação. Comecei minha jornada aos 16 anos
                , quando tive meu primeiro contato com HTML, CSS e JavaScript, desenvolvendo meus primeiros projetos front-end.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Desde então, venho aprimorando minhas habilidades e explorando novas tecnologias. Hoje curso Análise e Desenvolvimento de Sistemas, onde estou concluindo meu primeiro semestre
                . Tenho experiência prática com React, Node.js e Java utilizando Spring Boot, além de dominar bem ferramentas como Git, GitHub e Postman.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Já realizei um projeto freelance para uma consultoria de TI, que fortaleceu minha experiência profissional. Busco constantemente aprender mais sobre desenvolvimento web e sistemas
                . Quero me tornar programador java e conquistar minha primeira oportunidade na área. Sou dedicado, curioso e apaixonado por resolver problemas através da programação.
              </p>
            </div>

            {/* Image Placeholder */}
            <div
              className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500" />
                <img
                  src="/sua-foto.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
