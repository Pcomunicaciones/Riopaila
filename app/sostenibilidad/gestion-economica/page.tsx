"use client"

import { TrendingDown, ShieldCheck, Briefcase, BarChart3, PieChart, ArrowDownRight, Wallet, Landmark, CheckCircle, Leaf, Building } from "lucide-react"
import { motion, Variants } from "framer-motion"

/* --------------------------------------------------------------------------
   ANIMACIONES: ECONOMIC SOLVENCY SYSTEM
   -------------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function GestionEconomica() {
  return (
    <motion.div 
      style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}
      className="space-y-12 pb-16 bg-[#fafbfc]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* TÍTULO CON INDICADOR DE MERCADO */}
      <motion.div variants={itemVariants} className="relative px-6 max-w-7xl mx-auto pt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-red-600" />
            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.3em]">Resultados Financieros</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-red-900 tracking-tight not-italic">
            Gestión Económica
          </h1>
        </div>
        <div className="hidden md:block text-right mb-2">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Crecimiento Interanual</p>
          <p className="text-sm font-bold text-red-600 flex items-center gap-2 justify-end">
            EBITDA -3.9% <ArrowDownRight size={16} />
          </p>
        </div>
      </motion.div>
      
      {/* GRID PRINCIPAL: BENTO BOX STYLE */}
      <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        
        {/* BLOQUE: EVOLUCIÓN DEL EBITDA (Principal) */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-red-900 to-red-950 text-white p-10 rounded-[3.5rem] lg:col-span-2 shadow-2xl shadow-red-900/30 relative overflow-hidden group border border-white/5"
        >
          {/* Elemento Decorativo: Gráfico de fondo */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
            <BarChart3 size={300} />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500">
              <TrendingDown size={32} className="text-yellow-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Evolución del EBITDA</h2>
            <p className="text-white/80 leading-relaxed text-xl max-w-2xl font-normal">
              La Compañía alcanzó un EBITDA de <span className="text-yellow-400 font-bold">$79.093 millones</span>, 
              lo que representa una disminución del <strong className="text-white">-3.9%</strong> frente a los resultados obtenidos en el año 2024 ($82.267 millones). Esta variación fue impactada principalmente por una caída del 15% en el precio de liquidación de la caña y un entorno climático retador.
            </p>
            
            {/* Comparativa de Cifras */}
            <div className="mt-10 flex gap-12 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 mb-1">EBITDA 2024</p>
                <p className="text-2xl font-bold text-white/70">82.267 <span className="text-sm font-normal">M</span></p>
              </div>
              <div className="relative">
                {/* Flecha indicadora de decrecimiento */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-red-500">
                  <ArrowDownRight size={20} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 mb-1">EBITDA 2025</p>
                <p className="text-3xl font-black">79.093 <span className="text-sm font-normal text-white/80">M</span></p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* BLOQUE: MARGEN EBITDA (Vertical) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="bg-white border border-gray-100 p-10 rounded-[3.5rem] flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-500 group"
        >
          <div className="space-y-6">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-800 transition-colors duration-500">
              <PieChart size={32} className="text-red-700 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-2xl text-red-900 tracking-tight">Margen Operativo</h3>
            <p className="text-gray-500 text-base leading-relaxed font-normal">
              A pesar de la volatilidad del mercado, la empresa mantuvo una gestión disciplinada de costos y gastos para proteger la rentabilidad operativa.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-3xl border-2 border-dashed border-red-200 text-center">
            <p className="text-5xl font-black text-red-800">80%</p>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Margen EBITDA</p>
          </div>
        </motion.div>
      </div>

      {/* SECCIÓN DESGLOSADA: Liquidez y Solidez */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h3 className="font-black text-red-900 text-4xl mb-4 tracking-tight">Liquidez y Solidez Financiera</h3>
          <p className="text-gray-600 text-lg font-normal max-w-3xl mx-auto">
            Cerramos el periodo enfocados en asegurar la continuidad del negocio en un entorno complejo, cumpliendo con nuestras obligaciones apalancados en eficiencias clave.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Landmark className="text-red-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <p className="text-3xl font-black text-red-900 mb-1">$78.897 <span className="text-sm font-bold text-gray-400">M</span></p>
              <h4 className="font-bold text-gray-800 text-sm mb-2 uppercase tracking-wide">Deuda</h4>
            </div>
            <p className="text-gray-500 text-sm mt-4">Incremento del 14% vs 2024, gestionado estratégicamente para sostener las operaciones.</p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <CheckCircle className="text-amber-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <p className="text-3xl font-black text-amber-600 mb-1">$20.277 <span className="text-sm font-bold text-gray-400">M</span></p>
              <h4 className="font-bold text-gray-800 text-sm mb-2 uppercase tracking-wide">Pagos Cumplidos</h4>
            </div>
            <p className="text-gray-500 text-sm mt-4">Abono riguroso a principal e intereses de obligaciones financieras contraídas.</p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <Leaf className="text-emerald-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <p className="text-3xl font-black text-emerald-700 mb-1">+12% <span className="text-sm font-bold text-gray-400">TCH</span></p>
              <h4 className="font-bold text-gray-800 text-sm mb-2 uppercase tracking-wide">Eficiencia Operativa</h4>
            </div>
            <p className="text-gray-500 text-sm mt-4">Mayor productividad agrícola y reducción del 16% global en los costos de inversión.</p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Building className="text-blue-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <p className="text-3xl font-black text-blue-700 mb-1">$4.935 <span className="text-sm font-bold text-gray-400">M</span></p>
              <h4 className="font-bold text-gray-800 text-sm mb-2 uppercase tracking-wide">Venta Activos</h4>
            </div>
            <p className="text-gray-500 text-sm mt-4">Ingresos extraordinarios generados por la venta estratégica del lote Cooperativa.</p>
          </motion.div>

        </div>
      </div>

    </motion.div>
  )
}