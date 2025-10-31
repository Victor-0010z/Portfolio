"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Projects() {
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

  const projects = [
    {
      title: "Cardápio",
      description: "Cardápio Digital com Carrinho para listar refeições e tela de Pagamento.",
      image: "/menu.jpg",
      tags: ["JavaScript", "jQuery", "Bootstrap", "Html", "Css"],
      github: "https://github.com/Victor-0010z/Menu.git",
      demo: "https://menu-chi-plum.vercel.app/",
    },
    {
      title: "Consultoria de T.I",
      description: "Site Freelance de uma consultoria de tecnologia.",
      image: "/consultoria-ti.jpg",
      tags: ["React", "TypeScript", "Html", "Css"],
      github: "https://github.com/Victor-0010z/Techline.git",
      demo: "https://techline.vercel.app/",
    },
    {
      title: "Banco Pagban",
      description: "Dashboard de um Banco ficticio com gráficos interativos e relatórios.",
      image: "/pagban.png",
      tags: ["Next", "TypeScript", "React", "Git"],
      github: "https://github.com/Victor-0010z/PagBan.git",
      demo: "https://pag-ban.vercel.app/",
    },
    {
      title: "CRUD em java",
      description: "Cadastro de usuarios feito com java.",
      image: "/crud-java.jpg",
      tags: ["Java", "SpringBoot", "h2 Database", "Maven", "Postman"],
      github: "https://github.com/Victor-0010z/crud-java.git",
      demo: "https://demo.com",
    },
    {
      title: "Nimbus - Acessoria de Segurança Digital",
      description: "Nimbus é um projeto de faculdade onde trabalhei com uma equipe de desenvolvedores, criamos uma acessoria em que passa segurança com programação e IoT.",
      image: "/nimbus.png",
      tags: ["Html", "Css", "Git", "JavaScript", "Firebase"],
      github: "https://github.com/Nimbus-Uni/front-end.git",
      demo: "https://nimbus-uni.github.io/front-end/index.html",
    },
    {
      title: "Jogo do Mario",
      description: "Jogo Interativo do personagem Mario e seu Mundo.",
      image: "/mario.png",
      tags: ["Html", "Sound", "Css", "JavaScript"],
      github: "https://github.com/Victor-0010z/Mario.git",
      demo: "https://mario-pink-ten.vercel.app/",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="hover:scale-110 transition-transform" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
