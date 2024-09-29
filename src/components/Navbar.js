'use client'
import logo from './media/logo.png'
import { motion } from "framer-motion";
import { useState,useEffect } from 'react'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
];


const links = [
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Certifica', href: '#certifi' },
  { name: 'Contact', href: '#contact' },
];

const stats = [
  { name: 'Projets réalisés', value: '0+' },
  { name: 'Années d\'expérience', value: '2' },
  { name: 'Technologies maîtrisées', value: '4+' },
  { name: 'Clients satisfaits', value: '0+' },
];


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsVisible(offset > 50); // Changez 50 à la valeur de défilement souhaitée
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  }
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <header className="fixed top-0 left-0 right-0 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 ">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={logo}
                className="h-8 w-auto border-blue-800 rounded-full border-2"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Contact me <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={logo}
                  className="h-8 w-auto border-blue-800 rounded-full border-2"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white-900 hover:bg-white-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                {links.map((link) => (
              <motion.a
                whileHover={{ scale: 1.1, color: "#FBBF24" }} 
                key={link.name}
                href={link.href}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </motion.a>
            ))}
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white-50"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <main className='pt-16'>
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#34E5FF] to-[#3B429F] opacity-60"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#34E5FF] to-[#3B429F] opacity-60"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

        
      <div className="mx-auto max-w-8xl lg:mx-0">
        {/* Texte et image avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5 }} 
          className="flex flex-col-reverse lg:flex-row items-center lg:space-x-20 lg:pr-8"
        >
          {/* Texte */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Bonjour, Je suis <span className='text-blue-800'>Youssef Bouhaja</span>

            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Full Stack web developer | Actuellement étudiant en première année à l'ENSAK,
              J'ai déjà développé des compétences solides en Python, Django, React, 
              et en technologies web front-end. En parallèle de mes études, je travaille 
              sur un projet personnel visant à [décrire brièvement votre projet]. 
              Ce projet m'a permis de mettre en pratique mes connaissances et de découvrir 
              de nouvelles facettes du développement web.
            </p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7 }}
            className="w-full lg:w-1/3 lg:ml-5"
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="w-full border-2 border-blue-800 rounded-full shadow-lg" 
            />

          </motion.div>
        </motion.div>

        {/* Liens avec effet hover de changement de couleur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.7 }}
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <motion.a
                whileHover={{ scale: 1.1, color: "#FBBF24" }} 
                key={link.name}
                href={link.href}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </motion.a>
            ))}
          </div>

          {/* Statistiques avec animation d'apparition */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.7 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <motion.dd
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.9 }}
                  className="text-2xl font-bold leading-9 tracking-tight text-white"
                >
                  {stat.value}
                </motion.dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

        </div>
      </main>
  </div>

  )
}
