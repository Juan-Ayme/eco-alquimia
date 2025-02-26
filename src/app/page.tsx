"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Leaf, Globe2, Users2, ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function Home() {
  const stats = [
    { number: "1k+", label: "Árboles Plantados" },
    { number: "5+", label: "Proyectos Activos" },
    { number: "1K+", label: "Voluntarios" },
    { number: "20+", label: "Distritos" },
  ];

  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: "Protección Ambiental",
      description: "Apoyando la conservación de la biodiversidad y los ecosistemas en todo el mundo."
    },
    {
      icon: <Globe2 className="h-6 w-6 text-green-600" />,
      title: "Impacto Global",
      description: "Marcando la diferencia en comunidades de todo el planeta."
    },
    {
      icon: <Users2 className="h-6 w-6 text-green-600" />,
      title: "Impulsado por la Comunidad",
      description: "Empoderando a las comunidades locales para proteger su entorno."
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
        <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Fondo principal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Juntos, Hagamos la Diferencia para las Futuras Generaciones
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Únete a nuestra misión de proteger y preservar los preciosos ecosistemas de nuestro planeta para las generaciones venideras.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donacion">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full">
                  Únete a nosotros <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Saber más <ArrowDownCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestras Áreas de Impacto</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Nos enfocamos en áreas clave donde podemos hacer la mayor diferencia en la conservación ambiental.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <div className="dark:bg-gray-800">
        <section className="py-20 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl shadow-lg mx-4 md:mx-0">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                ¿Listo para Hacer la Diferencia?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Únete a miles de personas que ya están generando un impacto. Cada acción cuenta.
              </p>
              <Link href="/donacion">
                <Button className="bg-white text-green-700 hover:bg-green-100 px-10 py-4 text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                  Comienza a Contribuir Hoy <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}