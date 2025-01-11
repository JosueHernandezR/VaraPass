import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {
  ArrowsRightLeftIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: BanknotesIcon,
    title: "Tus tickets generan ganancias mientras esperas el evento",
    headline: "Gana automáticamente mientras esperas",
    description:
      "Cada ticket que compras se convierte en una inversión inteligente. Nuestro sistema de staking automático genera recompensas en tokens VARA sin que tengas que hacer nada extra. Es como tener un ticket que trabaja para ti.",
    points: [
      "Genera recompensas desde el momento de la compra",
      "Sin pasos adicionales ni conocimientos técnicos",
      "Monitorea tus ganancias en tiempo real",
    ],
    tooltipTech: "Staking automático en la red Vara con APY variable",
    cta: "Descubre cómo funciona el staking",
  },
  {
    icon: TicketIcon,
    title: "Colecciona momentos, no solo tickets",
    headline: "Cada entrada es una pieza única de colección",
    description:
      "Tus tickets son más que entradas digitales: son NFTs coleccionables únicos que permanecen en tu wallet como recuerdo del evento. Cada uno tiene arte exclusivo y metadatos verificables que cuentan la historia de tu experiencia.",
    points: [
      "Arte digital único para cada evento",
      "Metadatos verificables en blockchain",
      "Colección permanente en tu wallet",
    ],
    tooltipTech:
      "NFT ERC-721 con metadatos enriquecidos y arte generativo único",
    cta: "Explora tu futura colección",
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Transfiere tickets sin complicaciones",
    headline: "¿Cambió tu agenda? No hay problema",
    description:
      "Transfiere tus tickets de forma segura y sencilla a quien quieras. Solo pagas el gas de la red, sin comisiones adicionales. El proceso es tan simple como enviar un mensaje, pero con toda la seguridad de la blockchain.",
    points: [
      "Transferencias verificables y seguras",
      "Sin comisiones extra de reventa",
      "Historial de transferencias transparente",
    ],
    tooltipTech: "Transferencias P2P en red Vara con gas optimizado",
    cta: "Aprende a transferir tickets",
  },
  {
    icon: ShieldCheckIcon,
    title: "Adiós a los tickets falsos",
    headline: "Autenticidad verificable al instante",
    description:
      "La tecnología blockchain garantiza que cada ticket sea 100% auténtico y verificable. Los organizadores pueden rastrear cada ticket y los compradores tienen la certeza de que su entrada es legítima. Es la revolución en la seguridad de eventos.",
    points: [
      "Verificación instantánea de autenticidad",
      "Registro inmutable en blockchain",
      "Cero posibilidad de duplicación",
    ],
    tooltipTech: "Smart contracts auditados con verificación en tiempo real",
    cta: "Verifica la seguridad",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative isolate px-6 pt-14 lg:px-8 min-h-svh lg:h-svh flex flex-col justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex h-full justify-center items-center m-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-7xl">
              Tus eventos favoritos, potenciados por blockchain
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Compra tickets seguros, colecciónalos y gana recompensas
              automáticas
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explorar Eventos
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
              Beneficios Principales
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
              Descubre cómo VaraPass revoluciona la experiencia de comprar
              tickets combinando la seguridad de blockchain con beneficios
              únicos.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold">
                    <benefit.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-indigo-400"
                    />
                    {benefit.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center py-24  sm:py-32"></section>
      <Footer />
    </>
  );
}

