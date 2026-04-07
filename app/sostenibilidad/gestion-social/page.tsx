"use client"

import { Users, ShieldCheck, ArrowRight, Sparkles, GraduationCap, Heart, Target, BookOpen, MapPin, Handshake, MonitorSmartphone } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --------------------------------------------------------------------------
   ANIMACIONES
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariants: Variants = {
  hidden: { filter: "grayscale(100%)", scale: 1.1 },
  visible: {
    filter: "grayscale(0%)",
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" }
  }
}

export default function GestionSocial() {
  const pilares = [
    {
      title: "Nuestra Gente",
      icon: Users,
      text: "El poder agrícola de la compañía nace de su gente; por ello, contamos con 309 colaboradores directos. Durante el periodo 2025, el 100% de nuestros trabajadores fue evaluado para fortalecer sus capacidades. El 89% de nuestro talento reside en los municipios de nuestra zona de influencia.",
      stats: "309 Colaboradores",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Bienestar Laboral y Cultura de Respeto",
      icon: ShieldCheck,
      text: "Promovemos entornos seguros bajo la estrategia 'Somos PODER Agrícola'. Logramos una cobertura del 83% en la encuesta de Riesgo Psicosocial con resultado de riesgo bajo. En 2025, reportamos cero casos de violencia de género o discriminación.",
      stats: "Cero Casos",
      color: "from-amber-500 to-orange-600"
    }
  ]

  const formacion = [
    {
      title: "Escuela de Liderazgo",
      value: "25",
      desc: "Líderes formados en gestión de equipos de alto desempeño.",
      icon: Users
    },
    {
      title: "Innovagro 360° IA",
      value: "25",
      desc: "Trabajadores certificados en competencias digitales estratégicas e IA.",
      icon: MonitorSmartphone
    },
    {
      title: "Sostenibilidad",
      value: "40",
      desc: "Trabajadores formados como multiplicadores de prácticas sostenibles.",
      icon: Sparkles
    }
  ]

  const desarrollo = [
    {
      title: "Inversión Social",
      value: "$47.4M",
      desc: "Destinados en apoyo a actividades culturales y deportivas en el territorio.",
      icon: Heart
    },
    {
      title: "Gestión Contratistas",
      value: "38",
      desc: "Empresas en total, 22 capacitadas en sostenibilidad y Design Thinking.",
      icon: Handshake
    },
    {
      title: "Empleo Indirecto",
      value: "219",
      desc: "Promedio de empleos mensuales, dinamizando la economía de la región.",
      icon: MapPin
    }
  ]

  return (
    <motion.div
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-16 pb-20 bg-[#fafbfc]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* SECCIÓN: TÍTULO CON DECORACIÓN */}
      <motion.div variants={itemVariants} className="relative px-6 max-w-7xl mx-auto pt-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-red-600" />
          <span className="text-red-600 font-bold text-xs uppercase tracking-[0.3em]">
            Valor Compartido y Gestión Social
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-red-900 tracking-tight not-italic">
          Nuestro Propósito
        </h1>

        <p className="text-gray-600 mt-8 text-xl leading-relaxed max-w-3xl font-normal">
          <strong className="text-red-800 uppercase tracking-widest text-xs block mb-2 font-bold focus:outline-none">Visión 2030</strong>
          Para el año 2030, nuestra meta es consolidarnos como una empresa líder nacional en producción agrícola, reconocida por sus altos niveles de productividad, innovación y generación de valor compartido. Integramos la sostenibilidad de manera transversal para asegurar que la operación genere valor a largo plazo y mitigue riesgos de impacto.
        </p>
      </motion.div>

      {/* SECCIÓN: BANNER INMERSIVO (Metodología ODS) */}
      <motion.div
        variants={itemVariants}
        className="relative h-[400px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl group max-w-7xl mx-auto mx-4 md:mx-auto"
      >
        <motion.img
          variants={imageVariants}
          src="/Imagenes/Multimedia.jpg"
          alt="Comunidad y Educación"
          className="w-full h-full object-cover"
        />

        {/* Overlay Inteligente en tonos rojos oscuros */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/70 to-transparent opacity-90" />

        <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold mb-4 border border-white/30">
              <Target size={16} className="text-yellow-400" /> Metodología ODS
            </div>
            <h2 className="text-white font-black text-3xl md:text-5xl leading-tight mb-4 tracking-tight">
              Comunidad y <span className="text-yellow-400">Educación</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Nuestra estrategia se alinea directamente con la agenda 2030 y la metodología SDG COMPASS de Pacto Global. Priorizamos <strong>9 ODS</strong>, destacando el <strong>ODS 8</strong> (Trabajo Decente) y el <strong>ODS 12</strong> (Producción y Consumo Responsables).
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* SECCIÓN: INTERACTIVE STACKED CARDS (Pilares de Talento Humano) */}
      <div className="grid gap-8 relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Línea vertical de fondo decorativa */}
        <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-red-50 via-red-300/50 to-transparent hidden md:block" />

        {pilares.map((pilar, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative flex flex-col md:flex-row items-center gap-8 p-10 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden md:ml-6"
          >
            {/* Gradiente de fondo en hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] bg-gradient-to-br ${pilar.color} transition-opacity duration-500`} />

            {/* Indicador Numérico Flotante */}
            <div className="relative shrink-0">
              <div className="text-7xl font-black text-red-50 group-hover:text-red-100 transition-colors duration-500 select-none">
                {(idx + 1).toString().padStart(2, '0')}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-50 group-hover:bg-red-800 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner group-hover:rotate-12">
                  <pilar.icon size={30} className="text-red-800 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 justify-center md:justify-start">
                <h3 className="font-bold text-3xl text-red-900">{pilar.title}</h3>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter bg-red-100 text-red-700 group-hover:bg-red-600 group-hover:text-white transition-colors`}>
                  {pilar.stats}
                </span>
              </div>
              <p className="text-gray-600 text-[17px] leading-relaxed font-normal max-w-3xl">
                {pilar.text}
              </p>
            </div>
            
            <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-10 transition-all duration-500 hidden md:block">
              <div className="w-12 h-12 rounded-full border border-red-300 flex items-center justify-center text-red-600">
                <ArrowRight size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SECCIÓN: ACCIONES CLAVES DE IMPACTO SOCIAL */}
      <motion.div variants={itemVariants} className="max-w-7xl mx-auto px-4 md:px-6 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-red-900 mb-4 tracking-tight">Acciones Claves de Impacto</h2>
          <p className="text-gray-500 text-lg">Fortalecimiento de Capacidades y Desarrollo Territorial</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Bloque Formación */}
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <GraduationCap size={16} /> En 2025 ejecutamos 3.581 horas totales
            </div>
            <h3 className="text-2xl font-bold text-red-900 mb-8">Fortalecimiento de Capacidades</h3>
            <div className="space-y-6">
              {formacion.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <span className="text-xl font-black text-red-600 leading-none">{item.value}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque Desarrollo Territorial */}
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <MapPin size={16} /> Dinamizando 6 municipios del Valle
            </div>
            <h3 className="text-2xl font-bold text-red-900 mb-8">Desarrollo Territorial</h3>
            <div className="space-y-6">
              {desarrollo.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-orange-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <span className="text-xl font-black text-orange-600 leading-none">{item.value}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>

    </motion.div>
  )
}