"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Experience() {
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

  const experiences = [
    {
      company: "Universidade de T-ADS — 1º semestre",
      position: "Desenvolvedor Full Stack em Formação",
      period: "2025 — 18 anos",
      description:
        "Início da graduação de Tecnologia em Análise e Desenvolvimento de Sistemas e criação de projetos pessoais com React, Node.js, Java e com C++.",
      achievements: [
        "Aprendeu a desenvolver projetos de IoT",
        "Liderou projeto Nimbus da faculdade na parte front-end",
        "Montou projeto freelance para consultoria de TI",
      ],
    },
    {
      company: "Cursando Full Stack Java na EBAC",
      position: "Full Stack Developer",
      period: "2024 - 17 anos",
      description:
        "Desenvolvimento de aplicações front-end e back-end. Trabalhando com React, Java e bancos de dados SQL.",
      achievements: ["Desenvolveu 70 projetos", "Aprendeu conceitos de APIs e servidores", "Implementou testes automatizados"],
    },
    {
      company: "Início na programação",
      position: "Frontend Developer Júnior",
      period: "2023 - 16 anos",
      description:
        "Criação dos primeiros projetos front-end e início nos estudos de desenvolvimento web. explorando a base do front-end moderno.",
      achievements: ["Desenvolveu primeiros sites e interfaces estáticas", "Aprendeu fundamentos de responsividade e design web", "Iniciou lógica de programação com JavaScript"],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minha <span className="text-primary">Experiência</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trajetória profissional e conquistas ao longo dos anos
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    {/* Left Side (odd items) */}
                    <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                            <p className="text-primary font-semibold mb-2">{exp.company}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
