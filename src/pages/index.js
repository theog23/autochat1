import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="w-full border-b py-6 px-6 md:px-12 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">AutoChat</h1>
          <nav className="space-x-4">
            <a href="#features" className="hover:underline text-sm font-medium">Características</a>
            <a href="#planes" className="hover:underline text-sm font-medium">Planes</a>
            <a href="#contacto" className="hover:underline text-sm font-medium">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Automatiza tus mensajes de Instagram y WhatsApp con AutoChat
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Responde más rápido, gana más ventas y haz que tu negocio trabaje por ti 24/7.
          </p>
          <Button className="mt-8 px-6 py-3 text-lg bg-white text-purple-700 hover:bg-gray-100">
            Empezar ahora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section id="features" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">¿Qué puedes hacer con AutoChat?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-2">Mensajes automáticos</h4>
              <p>Responde al instante a tus clientes en WhatsApp o Instagram sin levantar un dedo.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-2">Flujos personalizados</h4>
              <p>Crea conversaciones que se adaptan a tu negocio fácilmente.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-2">Integraciones simples</h4>
              <p>Conecta con tu tienda online, Google Sheets, y más sin complicaciones.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-gray-900 text-white py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-lg font-bold mb-2">AutoChat</h5>
            <p className="text-sm">Plataforma de automatización para emprendedores modernos.</p>
          </div>
          <div className="text-sm">
            <p>Email: contacto@autochat.com</p>
            <p>Instagram: @autochat.lat</p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">© {new Date().getFullYear()} AutoChat. Todos los derechos reservados.</div>
      </footer>
    </main>
  );
}
