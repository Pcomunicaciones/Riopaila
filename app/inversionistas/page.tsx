"use client"



import React, { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import {

  FileText, Download, ChevronDown, Menu, X, PieChart,

  Users, Building2, Scale, Info, Globe, ShieldCheck,

  Calendar, Tag, Phone, ExternalLink, User, MessageSquare,

  AlertCircle, Lightbulb, CheckCircle2, MapPin, Mail

} from "lucide-react"



/* --- 1. CONFIGURACIÓN DE ESTRUCTURAS --- */



const MENU_STRUCTURE = [

  {

    id: 'gobierno',

    label: 'GOBIERNO CORPORATIVO',

    icon: Building2,

    description: "Equipo Directivo, junta directiva y representantes legales.",

    subItems: [

      { id: 'estructura', label: 'ESTRUCTURA CORPORATIVA' },

      { id: 'buenas_practicas', label: 'BUENAS PRÁCTICAS' },

      { id: 'conglomerados', label: 'CONGLOMERADOS' },

      { id: 'info_relevante', label: 'INFORMACIÓN RELEVANTE' }

    ]

  },

  {

    id: 'asamblea',

    label: 'ASAMBLEA DE ACCIONISTAS',

    icon: Users,

    description: "Información oficial para el máximo órgano social.",

    subItems: [

      { id: 'convocatoria', label: 'CONVOCATORIA' },

      { id: 'info_general', label: 'INFORMACIÓN GENERAL' },

      { id: 'proyecto_dividendos', label: 'PROYECTO DISTRIBUCIÓN DE DIVIDENDOS' }

    ]

  },

  {

    id: 'control',

    label: 'ARQUITECTURA DE CONTROL',

    icon: Scale,

    description: "Mecanismos de supervisión y auditoría interna.",

    subItems: [] // 👈 Dejado vacío para que funcione como botón directo

  },

  {

    id: 'financiera',

    label: 'INFORMACIÓN FINANCIERA',

    icon: PieChart,

    description: "Resultados económicos y estados financieros consolidados.",

    subItems: [

      { id: 'estados_financieros', label: 'ESTADOS FINANCIEROS' },

      { id: 'informe_gestion', label: 'INFORME DE GESTIÓN' },

      { id: 'informes_trimestrales', label: 'INFORMES TRIMESTRALES' }

    ]

  },

  // 👇 AQUÍ ESTÁ LA NUEVA SECCIÓN AÑADIDA 👇

  {

    id: 'atencion',

    label: 'ATENCIÓN AL INVERSIONISTA',

    icon: Phone,

    description: "Canales de comunicación directa y soporte para nuestros accionistas.",

    subItems: [] // 👈 Dejado vacío para que funcione como botón directo

  }

]





/* --- SECCIÓN ACTUALIZADA: COMPONENTES DE DISEÑO --- */

const DataCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-8" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    {/* Fondo de cabecera cambiado a rojo muy claro */}
    <div className="bg-red-50/50 px-5 md:px-8 py-4 md:py-5 border-b border-gray-100">
      <h3 className="text-red-800 font-bold text-sm uppercase tracking-widest">{title}</h3>
    </div>
    <div className="p-5 md:p-8">{children}</div>
  </div>
)

// --- COMPONENTE: DocumentCell ACTUALIZADO (Solo vista previa) ---

const DocumentCell = ({ title, fileName }: { title: string, fileName: string }) => (
  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 p-2.5 md:p-3 mt-2 border border-gray-100 bg-white rounded-xl hover:border-red-400 transition-all group shadow-sm">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-red-800 group-hover:bg-red-800 group-hover:text-white transition-colors shrink-0">
        <FileText size={16} />
      </div>
      <span className="text-xs font-bold text-gray-600 group-hover:text-red-800 transition-colors leading-tight">
        {title}
      </span>
    </div>

    <div className="flex w-full sm:w-auto shrink-0">
      <a
        href={`/docs/${fileName}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-red-50 text-red-800 hover:bg-red-800 hover:text-white rounded-lg text-[10px] font-bold transition-colors uppercase"
        title="Abrir documento en pestaña nueva"
      >
        <ExternalLink size={14} /> VER DOCUMENTO
      </a>
    </div>
  </div>
)



/* --- 3. VISTAS DE CONTENIDO --- */



// --- VISTA: ESTRUCTURA CORPORATIVA (COMPLETA) ---

const EstructuraView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Representantes Legales">
      <div className="grid gap-2 mb-6">
        {[
          { cargo: "PRINCIPAL", nombre: "GUSTAVO ADOLFO BARONA TORRES", id: "C.C. 6.404.843" },
          { cargo: "SUPLENTE", nombre: "JUAN CARLOS BEDOYA GARCÍA", id: "C.C. 16.757.005" },
          { cargo: "SUPLENTE", nombre: "MARÍA LEANI CARREÑO ALVARÁN", id: "C.C. 67.007.484" }
        ].map((rep, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 border-b border-gray-50 last:border-0 hover:bg-red-50/50 rounded-xl transition-colors">
            <div>
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{rep.cargo}</p>
              <p className="font-bold text-red-800 text-base">{rep.nombre}</p>
            </div>
            <p className="text-gray-400 font-bold text-xs mt-1 md:mt-0">{rep.id}</p>
          </div>
        ))}
      </div>
      <DocumentCell title="Nombramiento Representante Legal" fileName="RIOP-cambio-representante-legal-suplente.pdf" />
    </DataCard>

    <DataCard title="Junta Directiva 2025 - 2026">
      <p className="text-[11px] text-gray-500 mb-8 italic border-l-4 border-red-600 pl-4">
        La Junta Directiva mencionada está conformada en su totalidad por miembros independientes (Ley 964 de 2005). Elegida el 26 de marzo de 2025.
      </p>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {[
          { p: "RAFAEL GONZÁLEZ ULLOA", s: "BELISARIO CAICEDO CAPURRO" },
          { p: "JUAN GUILLERMO SALAZAR VALLECILLA", s: "SEBASTIAN ESTEBAN ALVAREZ CAICEDO" },
          { p: "MARIANA CAICEDO PÉREZ", s: "RODRIGO CAICEDO LOURIDO" },
          { p: "ANICETO GUZMÁN SÁNCHEZ", s: "MARIANA BOTERO PIEDRAHITA" },
          { p: "FELIPE VICTORIA GONZÁLEZ", s: "MARIA ALEJANDRA CABAL GONZÁLEZ" }
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between border-l-4 border-red-600 pl-3 py-1 bg-gray-50/30">
              <span className="font-bold text-red-800 text-sm">{item.p}</span>
              <span className="text-[9px] font-black text-red-600">PRINCIPAL</span>
            </div>
            <div className="flex justify-between border-l-4 border-gray-200 pl-3 py-1">
              <span className="text-gray-500 text-sm">{item.s}</span>
              <span className="text-[9px] font-black text-gray-300">SUPLENTE</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-gray-50 pt-6">
        <DocumentCell title="Reglamento Funcionamiento Junta Directiva" fileName="Junta-Directiva-2024-2025_-Riopaila-Agricola.pdf" />
      </div>
    </DataCard>

    <DataCard title="Principales Accionistas">
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left text-sm min-w-[500px]">
          <thead>
            <tr className="text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] border-b border-gray-100">
              <th className="pb-4 px-2">Accionista</th>
              <th className="pb-4 text-right">Acciones Ordinarias</th>
              <th className="pb-4 text-right">%</th>
            </tr>
          </thead>
          <tbody className="text-red-900">
            {[
              { n: "Santa Carolina Botero S.A.S.", a: "3.998.709", p: "11,85%" },
              { n: "Alianza Fiduciaria - Fideicomiso Orus", a: "2.527.379", p: "7,49%" },
              { n: "Aratamma S.A.S.", a: "2.009.040", p: "5,95%" },
              { n: "San Mateo y Cía. S.A.S.", a: "2.009.040", p: "5,95%" },
              { n: "San Antonio Botero S.A.S.", a: "1.989.841", p: "5,90%" },
              { n: "Inversiones Bellavista y Cía. S. en C.", a: "1.892.109", p: "5,61%" },
              { n: "González Holmann S.A.S", a: "1.247.727", p: "3,70%" },
              { n: "Proyectos González y Cía. S.C.A.", a: "1.247.706", p: "3,70%" },
              { n: "B.G. Ulloa y Cía. S.C.A.", a: "1.247.699", p: "3,70%" },
              { n: "F.G. Victoria y Cía. S.C.A.", a: "1.247.679", p: "3,70%" },
              { n: "B.G. Garrido S.A.S", a: "1.245.785", p: "3,69%" },
              { n: "J. M. C. & Cía. S.A.", a: "1.124.895", p: "3,33%" },
              { n: "Mauricio Herrera Herrera", a: "855.336", p: "2,53%" },
              { n: "La Campiña Caicedo & Cía. S. en C.", a: "847.561", p: "2,51%" },
              { n: "Babilonia Caicedo & Cía. S. en C.", a: "846.091", p: "2,51%" },
              { n: "Hacienda La Independencia S.A.S.", a: "803.595", p: "2,38%" },
              { n: "Alianza Fiduciaria S.A.- Fideicomiso 35351493 Acciones Cali", a: "713.937", p: "2,12%" },
              { n: "Federico Guillermo Pfeil Schneider Rodríguez", a: "703.433", p: "2,08%" },
              { n: "Circonia S.A.S.", a: "701.496", p: "2,08%" },
              { n: "Ingrid Beatriz Olga Pfeil Schneider Rodríguez", a: "701.495", p: "2,08%" },
              { n: "Inversiones González Cabal y Cía. S.C.A.", a: "608.525", p: "1,80%" },
              { n: "Inversiones González Garcés y Cía. S.C.A.", a: "608.525", p: "1,80%" },
              { n: "Valores González Tobón SAS", a: "540.361", p: "1,60%" },
              { n: "Valores González Peñaranda SAS", a: "524.133", p: "1,55%" },
              { n: "Farallones del Occidente S.A.S", a: "439.536", p: "1,30%" },
              { n: "Otros accionistas con menor participación", a: "3.063.044", p: "9,08%" },

            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-2 font-bold">{row.n}</td>
                <td className="py-3 text-right tabular-nums">{row.a}</td>
                <td className="py-3 text-right font-black text-red-600">{row.p}</td>
              </tr>
            ))}
            <tr className="bg-red-50/50 font-black border-t-2 border-red-800">
              <td className="py-4 px-4 text-red-900">GRAN TOTAL ACCS. SUSCRITAS, PAGADAS Y EN CIRCULACIÓN</td>
              <td className="py-4 text-right tabular-nums pr-2">33.744.677</td>
              <td className="py-4 text-right pr-2 text-red-900">100,00%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DataCard>

    <div className="grid md:grid-cols-2 gap-8">
      <DataCard title="Comités de Junta">
        <div className="space-y-6">
          {/* --- COMITÉ AUDITORÍA Y RIESGOS --- */}
          <div>
            <p className="text-[10px] font-black text-red-600 uppercase mb-3 tracking-widest">Comité Auditoría y Riesgos</p>
            <div className="text-sm font-bold text-red-800 space-y-2 mb-4">
              <p>Maria Alejandra Cabal González</p>
              <p>Juan Guillermo Salazar Vallecilla</p>
              <p>Rodrigo Caicedo Lourido</p>
            </div>
            <DocumentCell title="Reglamento Comité Auditoría y Riesgos" fileName="Reglamento-Comite-Auditoria-y-Riesgos.pdf" />
          </div>

          <div className="border-t border-gray-50 pt-4"></div> {/* Divisor sutil */}

          {/* --- COMITÉ SOSTENIBILIDAD Y GOBIERNO --- */}
          <div>
            <p className="text-[10px] font-black text-red-600 uppercase mb-3 tracking-widest">Sostenibilidad y Gobierno</p>
            <div className="space-y-3 mb-4">
              <div className="border-l-2 border-gray-100 pl-3">
                <p className="text-sm font-bold text-red-800">Felipe Victoria González</p>
                <p className="text-[11px] text-gray-500 font-medium">Principal <span className="mx-1">|</span> C.C. 16.828.594</p>
              </div>
              <div className="border-l-2 border-gray-100 pl-3">
                <p className="text-sm font-bold text-red-800">Juan Guillermo Salazar Vallecilla</p>
                <p className="text-[11px] text-gray-500 font-medium">Principal <span className="mx-1">|</span> C.C. 94.400.436</p>
              </div>
              <div className="border-l-2 border-gray-100 pl-3">
                <p className="text-sm font-bold text-red-800">Rodrigo Caicedo Lourido</p>
                <p className="text-[11px] text-gray-500 font-medium">Principal <span className="mx-1">|</span> C.C. 14.960.455</p>
              </div>
            </div>
            <DocumentCell title="Reglamento Comité Sostenibilidad" fileName="Reglamento-Comite-de-Sostenibilidad-y-Gobierno-Corporativo.pdf" />
          </div>
        </div>
      </DataCard>

      <DataCard title="Arquitectura de Control">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-widest uppercase">Revisor Fiscal</p>
            <p className="font-bold text-red-800 text-sm">ERNST & YOUNG AUDIT S.A.S</p>
            <p className="text-xs text-gray-500 mb-3">NIT. 860.008.890-5</p>

            <div className="space-y-2 border-l-2 border-gray-100 pl-3">
              <div>
                <p className="text-xs font-bold text-gray-700">Principal: PAOLA ANDREA VELASCO BETANCOURT</p>
                <p className="text-[11px] text-gray-500">C.C. 1.107.088.378 <span className="mx-1">|</span> T.P. 327263-T</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-700">Suplente: YULIETH YESENIA PENAGOS RENDON</p>
                <p className="text-[11px] text-gray-500">C.C. 1.143.831.377 <span className="mx-1">|</span> T.P. 233238-T</p>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-50">
            <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-widest uppercase">Auditoría Interna</p>
            <p className="font-bold text-red-800 text-sm mb-3">Holmes Carvajal Botero</p>
            <DocumentCell title="Estatuto Auditoría Interna" fileName="Estatuto-Auditoria-Interna.pdf" />
          </div>
        </div>
      </DataCard>
    </div>
  </div>
)

// --- VISTA: BUENAS PRÁCTICAS ---
const BuenasPracticasView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Buenas Prácticas Corporativas">
      <div className="grid gap-2">
        <DocumentCell title="Encuesta Código País año 2025" fileName="REPORTE-CODIGO-PAIS-RIOPAILA.pdf" />
        <DocumentCell title="Encuesta Código País año 2023" fileName="CAS2023CodigoPais.pdf" />
        <DocumentCell title="Encuesta Código País año 2022" fileName="CAS2022CodigoPais.pdf" />
        <DocumentCell title="Reforma de Estatutos" fileName="ESCRITURA-PUBLICA-2629.pdf" />
        <DocumentCell title="Encuesta Código País año 2021" fileName="RIOP-Encuesta-Codigo-Pais-2021.pdf" />
        <DocumentCell title="Estatutos Sociales" fileName="ESTUTOS-RIOPAILA-252-4-75.pdf" />
        <DocumentCell title="Código de Mejores Prácticas Corporativas" fileName="ESTUTOS-RIOPAILA-252-4-75.pdf" />
        <DocumentCell title="Documentos Anteriores" fileName="PO-BAC-002-CODIGO-DE-MEJORES-PRACTICAS-CORPORATIVAS-CAST.pdf" />
      </div>
    </DataCard>
  </div>
)

// --- VISTA: CONGLOMERADOS (RECONSTRUIDA CON TODA LA DATA) ---
const ConglomeradosView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Situación de Control">
      <div className="space-y-6">
        {[
          { fecha: "21 de Octubre de 2011", desc: "Se configura situación de control con las empresas: Agro Avelina S.A.S.; Agro La Balsa S.A.S.; Agro El Venado S.A.S.; Agro La Pampa S.A.S." },
          { fecha: "28 de Diciembre de 2012", desc: "Se configura situación de control con la empresa Bengala Agrícola S.A.S., inscrita ante cámara de comercio de Cali el 5 de marzo de 2013 bajo el No. 2472 de Libro IX." },
          { fecha: "27 de Septiembre de 2016", desc: "Se configura situación de control con la empresa Belmonte Agrícola S.A.S., inscrita ante la cámara de comercio de Cali el 9 de septiembre de 2016 bajo el No. 14665 del libro IX." },
          { fecha: "28 de Diciembre de 2012", desc: "Se configura situación de control con la empresa Bengala Agrícola S.A.S., inscrita ante cámara de comercio de Cali el 5 de marzo de 2013 bajo el No. 2473 de Libro IX." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 border-l-4 border-red-600 pl-4 md:pl-6 py-2">
            <div>
              <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">{item.fecha}</p>
              <p className="text-sm text-red-800 leading-relaxed mt-1 font-bold">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DataCard>

    <DataCard title="Grupo Empresarial">
      <div className="space-y-6">
        {[
          { fecha: "03 de Julio del 2012", desc: "La compañía configuró Grupo Empresarial con las sociedades: Agro Avelina S.A.S.; Agro El Venado S.A.S; Agro La Pampa S.A.S.; Agro La Balsa S.A.S.; Cauca Grande S.A. Inscripción 19 de julio 2012 bajo el número 8772 del libro IX." },
          { fecha: "28 de Diciembre de 2012", desc: "Se configura Grupo Empresarial con la empresa Bengala Agrícola S.A.S., inscrita ante cámara de comercio de Cali el 5 de marzo de 2013 bajo el No. 2472 de Libro IX." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 border-l-4 border-red-800 pl-4 md:pl-6 py-2">
            <div>
              <p className="text-[10px] font-black text-red-800 uppercase tracking-widest">{item.fecha}</p>
              <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DataCard>
  </div>
)

// --- VISTA: INFORMACIÓN RELEVANTE ---
const InfoRelevanteView = () => {
  const hechos = [
    // ================== 2026 ==================
    {
      f: "25/03/2026",
      t: "Novedades de los Directores y miembros de la Alta Gerencia.",
      r: "Se adjunta la composición de la nueva Junta Directiva de la sociedad Riopaila Agrícola S.A., correspondiente al período comprendido entre abril de 2026 y marzo de 2027, elegida por la Asamblea de Accionistas en la reunión ordinaria celebrada de manera mixta (presencial y virtual) el 25 de marzo de 2026.",
      doc: "JUNTA-DIRECTIVA-2026-2027_Riopaila-Agricola.pdf"
    },
    {
      f: "25/03/2026",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades del año 2025, aprobado en la reunión ordinaria de la Asamblea General de Accionistas, celebrada de manera mixta (presencial y virtual) el 25 de marzo de 2026.",
      doc: "Proyecto-Distribucion-Utilidades-2025_-Riopaila-Agricola-Fecha-de-Exdividendos.pdf"
    },
    {
      f: "5/03/2026",
      t: "Otros Eventos",
      r: "Con el fin de garantizar la claridad sobre el periodo ex-dividendo de conformidad con lo establecido en el Reglamento General de la BVC, la Sociedad presenta la actualización del Proyecto de Distribución de Utilidades 2025, el cual será sometido a consideración de la Asamblea General de Accionistas en reunión ordinaria programada para el 25 de marzo de 2026, en la ciudad de Cali, domicilio social de la Sociedad.",
      doc: "Proyecto-Distribucion-Utilidades-2025_-Riopaila-Agricola-Fecha-de-Exdividendos.pdf"
    },
    {
      f: "5/03/2026",
      t: "Decisiones adoptadas por la Asamblea de Inversionistas",
      r: "Riopaila Agrícola, informa al mercado de valores las decisiones aprobadas en la reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta (presencial y virtual) el día de hoy 5 de marzo de 2026.",
      doc: "REPORTE-DECISIONES-RELEVANTES-_RIOPAILA-AGRICOLA-SA.pdf"
    },
    {
      f: "2/03/2026",
      t: "Convocatoria Asamblea de Inversionistas",
      r: "Se adjunta la convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará el día 25 de marzo de 2026, en el domicilio social en Cali, bajo modalidad mixta (presencial y virtual).",
      doc: "Citacion-Reunion-Ordinaria-Asamblea-de-Accionistas-Riopaila-Agricola_mzo-25_2026.pdf"
    },
    {
      f: "2/03/2026",
      t: "Otros Eventos",
      r: "Se adjunta el Proyecto de Distribución de Utilidades correspondiente al ejercicio 2025, el cual será sometido a consideración de la Asamblea General de Accionistas en su reunión ordinaria programada para el 25 de marzo de 2026, en la ciudad de Cali, domicilio social de la Sociedad.",
      doc: "Proyecto-Distribucion-Utilidades-2025_-Riopaila-Agricola-Fecha-de-Exdividendos.pdf"
    },
    {
      f: "2/03/2026",
      t: "Otros Eventos",
      r: "Se adjunta comunicado mediante el cual se adoptan medidas y mecanismos orientados a prevenir prácticas ilegales, no autorizadas o inseguras en la representación de los Accionistas, con ocasión de la reunión ordinaria de la Asamblea General que se celebrará el 25 de marzo de 2026, en la ciudad de Cali, domicilio principal de la Sociedad.",
      doc: "Dcto-CE-003_RNVE_RIOPAILA-AGRICOLA_AGA-Mzo-25_2026.pdf"
    },
    {
      f: "2/03/2026",
      t: "Informe de fin de Ejercicio",
      r: "En cumplimiento de la Circular Externa 031 de 2021, se adjunta la información correspondiente al proyecto sobre prácticas, políticas, procesos e indicadores en materia social y ambiental, incluidos los aspectos climáticos, el cual será presentado junto con el Informe de Gestión y Sostenibilidad 2025 en la Asamblea General de Accionistas prevista para el 25 de marzo de 2026.",
      doc: "Proyecto-Asuntos-Sociales-y-Ambientales-incluidos-climaticos-2025_Riopaila-Agricola.pdf"
    },
    {
      f: "28/02/2026",
      t: "Otros Eventos",
      r: "Se adjunta comunicado en relación con la convocatoria a la reunión extraordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará en forma mixta (virtual y presencial), el día 5 de marzo de 2026, en Cali, domicilio de la Sociedad.",
      doc: "Comunicado-Riopaila-Agricola_feb-28_2026.pdf"
    },
    {
      f: "25/02/2026",
      t: "Convocatorias de Asambleas de Inversionistas.",
      r: "Convocatoria a reunión extraordinaria de la Asamblea General de Accionistas de Riopaila Agrícola S.A., que se celebrará el día 5 de marzo de 2026, bajo modalidad mixta (presencial y virtual), en la ciudad de Cali, domicilio principal de la Sociedad.",
      doc: "Riopaila-Convocatoria-RE-AGA_marzo-5_2026.pdf"
    },
    {
      f: "25/02/2026",
      t: "Otros Eventos",
      r: "Se adjunta comunicado mediante el cual se adoptan medidas y mecanismos orientados a prevenir prácticas ilegales, no autorizadas o inseguras en la representación de los Accionistas, con ocasión de la reunión extraordinaria de la Asamblea General que se celebrará el 5 de marzo de 2026, en la ciudad de Cali, domicilio principal de la Sociedad.",
      doc: "CE-003_RNVE_RIOPAILA-AGRICOLA_AGA-Mzo-5_2026.pdf"
    },
    // ================== 2025 ==================
    {
      f: "14/11/2025",
      t: "Informes de fin de Ejercicio",
      r: "Se presenta el informe correspondiente al Tercer Trimestre de 2025, en cumplimiento de lo establecido en la Circular Externa 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "RIOP_INFO-PERIODICO-III-TRIM-2025-EEFF.pdf"
    },
    {
      f: "15/08/2025",
      t: "Informes de fin de Ejercicio",
      r: "Se presenta el informe correspondiente al segundo trimestre de 2025, en cumplimiento de lo establecido en la Circular Externa 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "RIOPAILA-INFO-PERIODICO-II-TRIM-2025-Def.pdf"
    },
    {
      f: "16/05/2025",
      t: "Informes de fin de Ejercicio",
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se publica el Informe Periódico del primer trimestre del año 2025.",
      doc: "INFORME-PERIODICO-IER-TRIMESTRE-2025RIOPAILA.pdf"
    },
    {
      f: "9/05/2025",
      t: "Informes de fin de Ejercicio",
      r: "En cumplimiento a la CE 012 y CE 031 emitida por la Superintendencia Financiera de Colombia, se pública el informe periódico de fin de ejercicio al corte de diciembre 31 de 2024, aprobado en Asamblea General de Accionistas el 26 de marzo de 2025, el cual contiene la revelación de información sobre asuntos sociales y ambientales, incluidos los climáticos.",
      doc: "AS-4968-25-Riopaila-Agricola-EFFF-Completos-Consolidados-Marzo-2025.pdf"
    },
    {
      f: "26/03/2025",
      t: "Decisiones adoptadas por la Asamblea de Inversionistas",
      r: "Riopaila Agrícola, informa al mercado de valores, las decisiones aprobadas en reunión ordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 26 de marzo de 2025",
      doc: "Alcance_Decisiones-_Asamblea-Accionistas-mzo-26_2025_RIOPAILA-AGRICOLA.pdf"
    },
    {
      f: "26/03/2025",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades del año 2024, aprobado por la Asamblea General de Accionistas en reunión ordinaria, celebrada de manera mixta el día de hoy 26 de marzo de 2025.",
      doc: "RIOPAILA_PDU_AGA-MZO-26_2025.pdf"
    },
    {
      f: "26/03/2025",
      t: "Novedades de los Directores y miembros de la Alta Gerencia",
      r: "Se adjunta composición de la nueva Junta Directiva de la sociedad Riopaila Agrícola S.A., para el periodo comprendido entre marzo de 2025 a marzo de 2026, elegida por la Asamblea de Accionistas en la reunión ordinaria celebrada hoy 26 de marzo de 2025.",
      doc: "Junta-Directiva-2024-2025_-Riopaila-Agricola.pdf"
    },
    {
      f: "4/03/2025",
      t: "Otros Eventos",
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión ordinaria de Asamblea General el 26 de marzo de 2025, en Cali, domicilio de la Sociedad.",
      doc: "Riopaila-Carta.pdf"
    },
    {
      f: "3/03/2025",
      t: "Convocatoria Asamblea de Inversionistas",
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 26 de marzo de 2025, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día.",
      doc: "RIOPAILA-AGRICOLA-CITACION-AGA-ORDINARIA-26-MARZO-2025-1.pdf"
    },
    {
      f: "3/03/2025",
      t: "Informe de fin de Ejercicio",
      r: "En cumplimiento de la Circular Externa 031 de 2021, se adjunta información del proyecto dedicado a las prácticas, políticas, procesos e indicadores en relación con los asuntos sociales y ambientales, incluidos los climáticos, que será presentado con el informe de fin de ejercicio 2024 en la asamblea general de accionistas.",
      doc: "RIOPAILA-INFORME-PERIODICO-AMBIENTAL-ANO-2024_compressed.pdf"
    },
    {
      f: "3/03/2025",
      t: "Otros Eventos",
      r: "Se adjunta el Proyecto de Distribución de Utilidades del año 2024, que se presentará a consideración de la Asamblea General de Accionistas, en reunión ordinaria el 26 de marzo de 2025 en Cali, domicilio de la Sociedad.",
      doc: "RIOP_PDU_Util-2024_AGA_Mzo-26_2025.pdf"
    },
    // ================== 2024 ==================
    {
      f: "15/11/2024",
      t: "Informes de fin de Ejercicio",
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se publica el Informe Periódico del tercer Trimestre del año 2024.",
      doc: ""
    },
    {
      f: "15/08/2024",
      t: "Informe Periodico II Trimestre 2024",
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se da cumplimiento al Informe Periódico del segundo Trimestre del año 2024.",
      doc: "INFORME-PERIODICO-II-TRIM.2024-RIOPAILA-DEFINITIVO_compressed.pdf"
    },
    {
      f: "14/06/2024",
      t: "Decisiones adoptadas por la Asamblea de Inversionistas",
      r: "En alcance a la publicación de la decisión aprobada en reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 14 de junio de 2024, se informa, que realizado el reconteo de votos se ajustó la votación correspondiente.",
      doc: "Alcance_Desiciones-AGA_Extraor_junio14-de-2024_CASTILLA-AGRICOLA.pdf"
    },
    {
      f: "14/06/2024",
      t: "Decisiones adoptadas por la Asamblea de Inversionistas",
      r: "Riopaila Agrícola, informa al mercado de valores, la decisión aprobada en reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 14 de junio de 2024.",
      doc: "Alcance_Desiciones-AGA_Extraor_junio14-de-2024_CASTILLA-AGRICOLA.pdf"
    },
    {
      f: "14/06/2024",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades retenidas de año 2016 y anteriores, aprobado por la Asamblea General de Accionistas en reunión extraordinaria, celebrada de manera mixta el día de hoy 14 de junio de 2024.",
      doc: "PDU_Aprobado-AGA_extraor_Jun-14_2024.pdf"
    },
    {
      f: "5/06/2024",
      t: "Otros Eventos",
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión extraordinaria de Asamblea General el 14 de junio de 2024, en Cali, domicilio de la Sociedad.",
      doc: "Alcance_Desiciones-AGA_Extraor_junio14-de-2024_CASTILLA-AGRICOLA_reconteo-1.pdf"
    },
    {
      f: "4/06/2024",
      t: "Citación a Asamblea Extraordinaria",
      r: "Convocatoria Asamblea General de Accionistas de Riopaila Agrícola S.A en reunión extraordinaria, que se celebrará en forma Mixta (virtual y presencial), el 14 de junio de 2024 en Cali, domicilio de la Sociedad. Se someterá a consideración el proyecto de distribución de utilidades por liberación de reservas de utilidades de años anteriores.",
      doc: "CASTILLA-AGRICOLA-CITACION-14-JUN.-2024.pdf"
    },
    {
      f: "4/06/2024",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades por liberación de reservas de utilidades de años anteriores., que se presentará a consideración de la Asamblea General de Accionistas, en la reunión extraordinaria que se celebrará el día 14 de junio de 2024 en el domicilio de la sociedad.",
      doc: "CASTILLA-AGRICOLA-PDU-JUNIO-2024.pdf"
    },
    {
      f: "15/05/2024",
      t: "Informe Periodico I Trimestre 2024",
      r: "En cumplimiento a la CE 012 de 2022 de la Superintendencia Financiera de Colombia, se da cumplimiento al Informe Periódico del primer Trimestre del año 2024.",
      doc: "Informe-Riopaila-2023-unido.pdf"
    },
    {
      f: "16/04/2024",
      t: "Informes de fin de Ejercicio",
      r: "En cumplimiento a la CE 012 y CE 031 emitida por la Superintendencia Financiera de Colombia, se pública el informe periódico de fin de ejercicio al corte de diciembre 31 de 2023, aprobado en Asamblea General de Accionistas el 21 de marzo de 2024. el cual contiene la revelación de información sobre asuntos sociales y ambientales, incluidos los climáticos.",
      doc: "Informe-Riopaila-2023-unido.pdf"
    },
    {
      f: "21/03/2024",
      t: "Decisiones adoptadas por la Asamblea de Inversionistas",
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 21 de marzo de 2024, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día.",
      doc: "Alcance_Desiciones-Asamblea-General_mzo-21-de-2024_RIOPAILA-AGRICOLA.pdf"
    },
    {
      f: "21/03/2024",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades del año 2023, aprobado por la Asamblea General de Accionistas en reunión ordinaria, celebrada de manera mixta el día de hoy 21 de marzo de 2024.",
      doc: "PDU_Castilla-Agricola_aprob-AGA-marzo-21_2024.pdf"
    },
    {
      f: "21/03/2024",
      t: "Novedades de los Directores y miembros de la Alta Gerencia.",
      r: "Se adjunta composición de la nueva Junta Directiva de la sociedad Riopaila Agrícola S.A., para el periodo comprendido entre marzo de 2024 a marzo de 2025, elegida por la Asamblea de Accionistas en la reunión ordinaria celebrada hoy 21 de marzo de 2024.",
      doc: "Junta-Directiva-2024-2025_-Riopaila-Agricola.pdf"
    },
    {
      f: "28/01/2024",
      t: "Convocatoria Asamblea de Inversionistas",
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 21 de marzo de 2024, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día.",
      doc: "Convocatoria-Asamblea_Riopaila-Agricola.pdf"
    },
    {
      f: "28/01/2024",
      t: "Otros Eventos",
      r: "Se adjunta el Proyecto de Distribución de Utilidades del año 2023, que se presentará a consideración de la Asamblea General de Accionistas, en reunión ordinaria el 21 de marzo de 2024 en Cali, domicilio de la Sociedad.",
      doc: "RIOP_PDU_Util-2023_IR.pdf"
    },
    {
      f: "28/01/2024",
      t: "Otros Eventos",
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión de Asamblea General el 21 de marzo de 2024, en Cali, domicilio de la Sociedad.",
      doc: "Decisiones-_Asamblea-Ord-Accionistas-mzo-29_2023_RIOPAILA-AGRICOLA.pdf"
    },
    {
      f: "27/01/2024",
      t: "Informe de fin de Ejercicio",
      r: "En cumplimiento de la Circular Externa 031 de 2021, se adjunta información del proyecto dedicado a las prácticas, políticas, procesos e indicadores en relación con los asuntos sociales y ambientales, incluidos los climáticos, que será presentado con el informe de fin de ejercicio 2023 en la asamblea general de accionistas.",
      doc: "Proyecto-Informe-asuntos-sociales_ambientales-y-climatico_RIOPAILA-2023.pdf"
    },
    {
      f: "31/01/2024",
      t: "Códigos de Buen Gobierno",
      r: "En cumplimiento a la circular externa 028 de 2014 de la SFC, se informa que Riopaila Agrícola S.A. diligenció y trasmitió el día 31 de enero de 2024, la encuesta Código País correspondiente al año 2023.",
      doc: "RIOP_Encuesta-Codigo-Pais-2024.pdf"
    },
    // ================== 2023 ==================
    {
      f: "14/11/2023",
      t: "Informes de fin de Ejercicio",
      r: "Se da cumplimiento al tercer Trimestre del año 2023, del Informe Periódico Trimestral de conformidad con la CE 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "PDU-Dic-31_2022_RIOPAILA-AGRICOLA.pdf"
    },
    {
      f: "14/08/2023",
      t: "Informes de fin de Ejercicio",
      r: "Se da cumplimiento al segundo Trimestre del año 2023, del Informe Periódico Trimestral de conformidad con la CE 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "RIOPAILA-INFORME-PERIODICO-II-TRIM.AGO_.14-2023.pdf"
    },
    {
      f: "15/05/2023",
      t: "Informes de fin de ejercicio",
      r: "Se da cumplimiento al primer Trimestre del año 2023, del Informe Periódico Trimestral de conformidad con la CE 012 de 2022 de la Superintendencia Financiera de Colombia.",
      doc: "RIOPAILA-INFORME-PERIODICO-PRIMER-TRIMESTRE-2023.pdf"
    },
    {
      f: "28/04/2023",
      t: "Decisiones adoptadas por la Asamblea de Inversionistas",
      r: "Se da alcance a la información publicada el 29 de marzo de 2023, en atención a lo establecido en el numeral 5.5.del artículo 5.2.4.3.1.del Decreto 2555 de 2010.",
      doc: "Alcance_Decisiones-_Asamblea-Accionistas-mzo-29_2023_RIOPAILA-AGRICOLA.pdf"
    },
    {
      f: "21/04/2023",
      t: "Informes de fin de ejercicio",
      r: "Se adjunta informe periódico de fin de ejercicio 2022, en cumplimiento a la CE 012 de 2022 emitida por la Superintendencia Financiera de Colombia, el cual fue presentado en Asamblea General de Accionistas el 29 de marzo de 2023.",
      doc: "Decisiones-_Asamblea-Extraor-de-Accionistas-dic-22_2022_RIOPAILA.pdf"
    },
    {
      f: "29/03/2023",
      t: "Decisiones adoptadas por la Asamblea de Inversionistas",
      r: "Riopaila Agrícola, informa al mercado de valores, la decisión aprobada en reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 29 de marzo de 2023.",
      doc: "RIOPAILA_Informe-fin-de-ejercicio-2022.pdf"
    },
    {
      f: "29/03/2023",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades Acumuladas de noviembre a diciembre del año 2022, aprobado por la Asamblea General de Accionistas en reunión ordinaria, celebrada de manera mixta el día de hoy 29 de marzo de 2023.",
      doc: "Decisiones-_Asamblea-Ord-Accionistas-mzo-29_2023_RIOPAILA-AGRICOLA.pdf"
    },
    {
      f: "3/03/2023",
      t: "Citación a Asamblea Ordinaria",
      r: "Se adjunta convocatoria a la reunión ordinaria de la Asamblea de Accionistas de Riopaila Agrícola S.A., que se celebrará en forma Mixta (virtual y presencial), el día 29 de marzo de 2023, en Cali, domicilio de la Sociedad. Se incluye el Orden del Día",
      doc: "PDU-Castilla-Agricola-Util-ene-a-oct-2022-1.pdf"
    },
    //quede aqui con la cargaada de los datos, necesito mejorar los pdfs
    {
      f: "3/03/2023",
      t: "Otros Eventos",
      r: "Se adjunta Proyecto de Distribución de Utilidades -PDU- del periodo acumulado noviembre y diciembre de 2022, que se presentará a consideración de la Asamblea General de Accionistas, en la reunión ordinaria que se celebrará el día 29 de marzo de 2023.",
      doc: "RIOP_PDU_Util-acum-nov-dic-2022_Asamblea-mzo-2023.pdf"
    },
    {
      f: "6/03/2023",
      t: "Otros Eventos",
      r: "Se adjunta comunicado que adopta medidas y mecanismos orientados a evitar prácticas ilegales, no autorizadas e inseguras en la representación de los Accionistas en reunión de Asamblea General el 29 de marzo de 2023, en Cali, domicilio de la Sociedad.",
      doc: "RIOPAILA-AGRICOLA-CITACION-AGA-ORDINARIA-29-MARZO-2023.pdf"
    },
    {
      f: "2/02/2023",
      t: "Códigos de Buen Gobierno",
      r: "En cumplimiento a la circular externa 028 de 2014 de la SFC, se informa que Riopaila Agrícola S.A. diligenció y trasmitió el día 31 de enero de 2023, la encuesta Código País correspondiente al año 2022.",
      doc: "RIOP_Encuesta-Codigo-Pais-2022.pdf"
    },
    {
      f: "17/01/2023",
      t: "Informes de fin de Ejercicio",
      r: "Para conocimiento del Mercado Público de Valores, se adjunta Informe de Gestión al 31 octubre de 2022, incluye, además, Estados Financieros individuales y consolidados, Dictamen de Revisor Fiscal, y Certificaciones de Representante Legal y Contador.",
      doc: "RIOPAILA-INFORME-DE-GESTION-A-OCTUBRE-22-JUNTA-PAGINA-WEB.pdf"
    },
    // ================== 2022 ==================
    {
      f: "22/12/2022",
      t: "Asamblea Extraordinaria",
      r: "Riopaila Agrícola, informa al mercado de valores, la decisión aprobada en reunión extraordinaria de Asamblea General de Accionistas, celebrada de manera mixta el día de hoy 22 de diciembre de 2022.",
      doc: "Decisiones-_Asamblea-Extraor-de-Accionistas-dic-22_2022_RIOPAILA.pdf"
    },
    {
      f: "22/12/2022",
      t: "Proyecto Utilidad o Perdida aprobado por Asamblea",
      r: "Se adjunta Proyecto de Distribución de Utilidades Acumuladas de enero a octubre del año 2022, aprobado por la Asamblea General de Accionistas en reunión extraordinaria, celebrada de manera mixta el día de hoy 22 de diciembre de 2022.",
      doc: "Proyecto-Distribucion-Utilidades-enero-a-octubre-2022_RIOPAILA.pdf"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      <DataCard title="Hechos Relevantes">
        <div className="space-y-4">
          {hechos.map((h, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-red-400 transition-all">
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-3">

                {/* Fechas y Etiquetas */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-red-800">{h.f}</span>
                  <span className="text-[10px] font-black text-red-600 uppercase bg-red-50 px-2 py-1 rounded-md">{h.t}</span>
                </div>

                {/* Botonera Única */}
                <div className="flex w-full md:w-auto shrink-0">
                  <a
                    href={`/docs/${h.doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-red-50 text-red-800 hover:bg-red-800 hover:text-white rounded-lg text-[10px] font-bold transition-colors uppercase"
                    title="Abrir documento en pestaña nueva"
                  >
                    <ExternalLink size={14} /> VER DOCUMENTO
                  </a>
                </div>
              </div>

              {/* Descripción del Hecho Relevante */}
              <p className="text-sm text-gray-500 leading-relaxed">{h.r}</p>
            </div>
          ))}
        </div>
      </DataCard>
    </div>
  )
}

// --- VISTA: CONVOCATORIA (ASAMBLEA DE ACCIONISTAS) ---
const ConvocatoriaView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Convocatoria">
      <div className="grid gap-2">
        <DocumentCell
          title="Convocatoria – “Citación Asamblea General de Accionistas marzo 25 de 2026”"
          fileName="Citacion-Reunion-Ordinaria-Asamblea-de-Accionistas-Riopaila-Agricola_mzo-25_2026.pdf"
        />
        <DocumentCell
          title="Poder Personal Jurídica - Reunión Marzo 25 de 2026"
          fileName="PODER-ASAMBLEA-GENERAL-DE-ACCIONISTAS-RIOPAILA-AGRICOLA_PERSONA-JURIDICA-Y-NATURAL.pdf"
        />
        <DocumentCell
          title="Poder Personal Natural - Reunión Marzo 25 de 2026"
          fileName="PODER-ASAMBLEA-GENERAL-DE-ACCIONISTAS-RIOPAILA-AGRICOLA_PERSONA-JURIDICA-Y-NATURAL.pdf"
        />
      </div>
    </DataCard>
  </div>
)

// --- VISTA: INFORMACIÓN GENERAL (ASAMBLEA DE ACCIONISTAS) ---
const InfoGeneralView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Información General">
      <div className="grid gap-2">
        <DocumentCell
          title="Informe de Gestión"
          fileName="Riopaila-ENTREGDOCUMENTOFINAL21032026N-comprimido.pdf"
        />
        <DocumentCell
          title="Estados Financieros Separados al 31 de diciembre de 2023, con notas"
          fileName="RIOP-EEFF-Separados-Dic-2025-1.pdf"
        />
        <DocumentCell
          title="Estados Financieros Consolidados al 31 de diciembre de 2023, con notas"
          fileName="RIOP-EEFF-Consolidados-Dic-2025-2.pdf"
        />
      </div>
    </DataCard>
  </div>
)

// --- VISTA: PROYECTO DISTRIBUCIÓN DE DIVIDENDOS (ASAMBLEA DE ACCIONISTAS) ---
const ProyectoDividendosView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Proyecto Distribución de Utilidades">
      <div className="grid gap-2">
        <DocumentCell
          title="Proyecto de Distribución de Utilidades 2025, aprobado por la Asamblea General de Accionistas en reunión ordinaria del 25 de marzo de 2026, incluye fecha de exdividendos."
          fileName="PDU-2025_-Riopaila-Agricola-Fecha-de-Exdividendos.pdf"
        />
        <DocumentCell
          title="Proyecto de Distribución de Utilidades 2024, aprobado por la Asamblea"
          fileName="PDU_Aprobado-Asamblea-mzo-21_2024.pdf"
        />
        <DocumentCell
          title="Fecha de Ex – Dividendos"
          fileName="Fecha-Exdividendos_RIOPAILA_2022-a-2023.pdf"
        />
      </div>
    </DataCard>
  </div>
)

// --- VISTA: ARQUITECTURA DE CONTROL (SIN SUBMENÚ) ---
const ArquitecturaControlView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Arquitectura de Control">
      <div className="grid gap-2">
        <DocumentCell
          title="Estatutos de Auditoria Interna"
          fileName="Estatuto-Auditoria-Interna.pdf"
        />
        <DocumentCell
          title="Reglamento Comité de Auditoría y Riesgos"
          fileName="Reglamento-Comité-Auditoria-y-Riesgos.pdf"
        />
        <DocumentCell
          title="Reglamento Comité de Sostenibilidad y Gobierno Corporativo"
          fileName="Reglamento-Comité-de-Sostenibilidad-y-Gobierno-Corporativo.pdf"
        />
        <DocumentCell
          title="Política General de Control y Gestión de Riesgos"
          fileName="PO-BGR-001-General-de-Control-y-de-Riesgos-Cast-1.pdf"
        />
      </div>
    </DataCard>
  </div>
)

// VISTA: INFORME DE GESTIÓN
const InformeGestionView = () => (
  <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
    <DataCard title="Informes de Gestión Anual">
      <div className="grid gap-2">
        <DocumentCell
          title="Informe de Gestión y Sostenibilidad 2025"
          fileName="Riopaila-ENTREGDOCUMENTOFINAL21032026N-comprimido.pdf"
        />
        <DocumentCell
          title="Informe de Gestión y Sostenibilidad 2024"
          fileName="1-Riopaila-Informe-de-gestion-y-sostenibilidad-2024-DEFINITIVO.pdf"
        />
        <DocumentCell
          title="Informe de Gestión y Sostenibilidad 2023"
          fileName="Informe-Riopaila-2023-unido.pdf"
        />
        <DocumentCell
          title="Informe de Gestión 2022"
          fileName="Informe-de-gestion-RIOPAILA-2022.pdf"
        />
        <DocumentCell
          title="Informe de Gestión 2021"
          fileName="INFORME-DE-GESTION-RIOPAILA-2021-ASAMBLEA.pdf"
        />
        <DocumentCell
          title="Informe de Gestión 2020"
          fileName="ESTADOS-FINANCIEROS-RIOPAILA-2020.pdf"
        />
      </div>
    </DataCard>
  </div>
)
//VISTA: ESTADOS FINANCIEROS
const EstadosFinancierosView = () => {
  const archivos = [
    { year: "2025", file: "RIOP-EEFF-Consolidados-Dic-2025-2-1.pdf" },
    { year: "2024", file: "RIOP-EEFF-Consolidados-Junio-2024-PROJD.pdf" },
    { year: "2023", file: "Riopaila-Estados-Financieros-Ano-2023.pdf" },
    { year: "2022", file: "RIOPAILA-EEFF-Separados-y-Consolidados.pdf" },
    { year: "2021", file: "EEFF2021AsambleaRiopaila.pdf" },
    { year: "2020", file: "ESTADOS-FINANCIEROS-RIOPAILA-2020.pdf" }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      <DataCard title="Estados Financieros con Notas y Dictamen del Revisor Fiscal">
        <div className="grid gap-2">
          {archivos.map((item) => (
            <DocumentCell
              key={item.year}
              title={`Año ${item.year}`}
              fileName={item.file}
            />
          ))}
          <DocumentCell
            title="Históricos de Estados Financieros"
            fileName="historico_estados_financieros.pdf"
          />
        </div>
      </DataCard>
    </div>
  )
}

//INFORMES FINANCIEROS TRIMESTRALE
const InformesTrimestralesView = () => {

  const informesList = [
    // 2025
    { title: "EEFF Consolidados Septiembre 2025", doc: "AS-8294-25-Riopaila-Agricola-EFFF-completos-Consolidados-Septiembre-2025.pdf" },
    { title: "EEFF Separados Septiembre 2025", doc: "AS-8285-25-Riopaila-Agricola-EEFF-completos-Separados-Septiembre-2025.pdf" },
    { title: "EEFF Consolidados Junio 2025", doc: "AS-6883-25-RIOPAILA-AGRICOLA-S.-A.-Y-SUS-SUBSIDIARIAS-EFFF-Consolidados-Junio-2025-V-12-08-2025.pdf" },
    { title: "EEFF Separados Junio 2025", doc: "AS-6865-25-Riopaila-Agricola-S.A.-EEFF-Separados-Junio-2025.pdf" },
    { title: "EEFF Consolidados Marzo 2025", doc: "AS-4968-25-Riopaila-Agricola-EFFF-Completos-Consolidados-Marzo-2025.pdf" },
    { title: "EEFF Separados Marzo 2025", doc: "AS-4968-25-Riopaila-Agricola-EFFF-Completos-Consolidados-Marzo-2025.pdf" },

    // 2024
    { title: "EEFF Consolidados Septiembre 2024", doc: "RIOPAILA-EEFF-Consolidados-Septiembre-2024VSPROT.pdf" },
    { title: "EEFF Separados Septiembre 2024", doc: "RIOP-EEFF-Separados-Septiembre-2024_SGN.pdf" },
    { title: "EEFF Consolidados Junio 2024", doc: "RIOP-EEFF-Consolidados-Junio-2024-PROJD.pdf" },
    { title: "EEFF Separados Junio 2024", doc: "RIOP-EEFF-Separados-Junio-2024PROJD.pdf" },
    { title: "EEFF Consolidados Marzo 2024", doc: "RIOPAILA-INFORME-PERIODICO-Ier.TRIMESTRE-2024-2-comprimido.pdf" },
    { title: "EEFF Separados Marzo 2024", doc: "RIOPAILA-INFORME-PERIODICO-Ier.TRIMESTRE-2024-2-comprimido.pdf" },

    // 2023
    { title: "EEFF Consolidados Septiembre 2023", doc: "RIOP-EEFF-Consolidados-Septiembre-2023.pdf" },
    { title: "EEFF Separados Septiembre 2023", doc: "RIOP-EEFF-Separados-Septiembre-2023.pdf" },
    { title: "EEFF Consolidados Junio 2023", doc: "RIOP-EEFF-Consolidados-Junio-2023.pdf" },
    { title: "EEFF Separados Junio 2023", doc: "RIOP-EEFF-Separados-Junio-2023.pdf" },
    { title: "EEFF Consolidados Marzo 2023", doc: "RIOP-EEFF-Consolidados-Marzo-2023.pdf" },
    { title: "EEFF Separados Marzo 2023", doc: "RIOP-EEFF-Separados-Marzo-2023.pdf" },

    // 2022
    { title: "EEFF Consolidados Septiembre 2022", doc: "RIOP-EEFF-Consolidados-Septiembre-2022.pdf" },
    { title: "EEFF Separados Septiembre 2022", doc: "EEFF-Riopaila-Separados-Septiembre-2022.pdf" },
    { title: "EEFF Consolidados Junio 2022", doc: "Riopaila-Estados-Financieros-Consolidados-Junio-2022-Rvdo-LR-10-08-2022.pdf" },
    { title: "EEFF Separados Junio 2022", doc: "EEFF-Riopaila-Separados-Junio-2022-Revision-LR-10-08-2022.pdf" },
    { title: "EEFF Consolidados Marzo 2022", doc: "Riopaila-Estados-Financieros-Consolidados-Marzo-2022.pdf" },
    { title: "EEFF Separados Marzo 2022", doc: "EEFF-Riopaila-Separados-Marzo-2022.pdf" },

    // 2021
    { title: "EEFF Consolidados Septiembre 2021", doc: "Riopaila-Estados-Financieros-Consolidados-Septiembre-2021-Rev-LR-111121PA.pdf" },
    { title: "EEFF Separados Septiembre 2021", doc: "EEFF-Riopaila-Separados-Septiembre-2021Rev-LR-111121PA.pdf" },
    { title: "EEFF Consolidados Junio 2021", doc: "Riopaila-EEFF-Consolidados-Junio-2021-V-04-08-2021.pdf" },
    { title: "EEFF Separados Junio 2021", doc: "EEFF-Riopaila-Separados-Junio-30-de-2021-V-03-08-2021.pdf" },
    { title: "EEFF Consolidados Marzo 2021", doc: "EEFF-Riopaila-Consolidados-Marzo-2021.pdf" },
    { title: "EEFF Separados Marzo 2021", doc: "EEFF-Riopaila-Separados-Marzo-31-de-2021.pdf" },

    // 2020
    { title: "EEFF Consolidados Septiembre 2020", doc: "EE.FF-RIOP-CONSOLIDADOS-TERCER-TRIMESTRE-2020-1.pdf" },
    { title: "EEFF Separados Septiembre 2020", doc: "EE.FF-RIOP-SEPARADOS-TERCER-TRIMESTRE-2020.pdf" },
    { title: "EEFF Consolidados Junio 2020", doc: "Riopaila-Agricola-S.A.-Estados-Financieros-Consolidados-Ano-2020.pdf" },
    { title: "EEFF Separados Junio 2020", doc: "Riopaila-Agricola-S.A.-Estados-Financieros-Separados-Ano-2020.pdf" },
    { title: "EEFF Consolidados Marzo 2020", doc: "EEFF-Consolidados-Marzo-2020.pdf" },
    { title: "EEFF Separados Marzo 2020", doc: "EEFF-Separados-Marzo-2020.pdf" },

    // Historical
    { title: "Históricos", doc: "historico_estados_financieros.pdf" }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      <DataCard title="Informes Financieros Trimestrales e Históricos">
        <div className="grid gap-2">
          {informesList.map((item, i) => (
            <DocumentCell
              key={i}
              title={item.title}
              fileName={item.doc}
            />
          ))}
        </div>
      </DataCard>
    </div>
  )
}

const AtencionInversionistaView = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-20" style={{ fontFamily: 'Tahoma, sans-serif' }}>

      {/* TARJETA 1: CONTACTO PRINCIPAL */}
      <DataCard title="Secretaría General">
        <div className="flex items-start gap-4 mb-6 p-6 bg-slate-50 rounded-2xl border border-gray-100">
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-800 shrink-0">
            <User size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-red-800">VICTOR HUGO URDANETA TOLOSA</h4>
            <p className="text-[11px] font-black text-red-600 uppercase tracking-widest mb-4">Secretario General</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Building2 size={16} className="text-gray-400" />
                <span>Carrera 1 N° 24-56 Edificio Colombina. Cali - Colombia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={16} className="text-gray-400" />
                <span>(602) 8836020</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:secretario@riopaila-castilla.com" className="hover:text-red-800 hover:underline font-bold transition-colors">
                  secretario@riopaila-castilla.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </DataCard>

      {/* TARJETA 2: ACCESO AL INVERSIONISTA (PQRS) */}
      <DataCard title="Acceso al Inversionista (PQRS)">
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          Le damos la bienvenida al servicio de <strong>PQRS (Peticiones, Quejas, Reclamos y Sugerencias)</strong>, canal de atención al titular de datos para ejercer sus derechos de acceso, corrección, supresión o revocación del tratamiento de datos personales. A través del servicio de PQRS, usted puede enviar lo siguiente:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 border border-gray-100 rounded-xl bg-white hover:border-red-400 transition-colors shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={16} className="text-red-800" />
              <h5 className="font-bold text-red-800 text-sm uppercase">Petición</h5>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Solicitud expresa que presenta el titular de los datos a fin de obtener información o respuesta conforme a los derechos y deberes del titular de la información.</p>
          </div>

          <div className="p-5 border border-gray-100 rounded-xl bg-white hover:border-red-400 transition-colors shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} className="text-orange-500" />
              <h5 className="font-bold text-red-800 text-sm uppercase">Queja</h5>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Manifestación de protesta censura, descontento o inconformidad que formula el titular en relación con una conducta que considera irregular en el uso de sus datos personales.</p>
          </div>

          <div className="p-5 border border-gray-100 rounded-xl bg-white hover:border-red-400 transition-colors shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} className="text-red-500" />
              <h5 className="font-bold text-red-800 text-sm uppercase">Reclamo</h5>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Expresión de insatisfacción del titular de datos con respecto al uso de sus datos personales.</p>
          </div>

          <div className="p-5 border border-gray-100 rounded-xl bg-white hover:border-red-400 transition-colors shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={16} className="text-yellow-500" />
              <h5 className="font-bold text-red-800 text-sm uppercase">Sugerencias</h5>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Expresión para mejorar el servicio o gestión de la compañía relacionada con datos personales. También para expresar agrado o satisfacción.</p>
          </div>
        </div>

        <div className="bg-red-50/50 p-4 md:p-6 rounded-2xl border border-red-50">
          <h5 className="text-[11px] font-black text-red-800 uppercase tracking-widest mb-4">La solicitud deberá contener como mínimo:</h5>
          <ul className="space-y-3">
            {[
              "El nombre y domicilio del Titular o representante o cualquier otro medio para recibir la respuesta.",
              "Los documentos que acrediten la identidad o la representación del Titular de los datos personales.",
              "Descripción clara y precisa de los datos personales y de los hechos que dan lugar al reclamo.",
              "Los documentos que se desean hacer valer en la reclamación. (Opcional)"
            ].map((req, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-red-600 mt-0.5 shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </DataCard>

      {/* TARJETA 3: CANALES DE COMUNICACIÓN */}
      <DataCard title="Canales de Comunicación">
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Los titulares de los Datos personales podrán en cualquier momento solicitar la actualización, ratificación o supresión de dicha información e incluso revocar la autorización otorgada mediante los siguientes canales:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-red-800 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h5 className="font-bold text-sm text-red-800 mb-1">Comunicación Escrita</h5>
              <p className="text-xs text-gray-500">Radicada en la Carrera 1 N° 24-56 Edificio Colombina, piso 7, oficina 722 de Santiago de Cali.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-red-400 transition-colors">
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-800 shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <h5 className="font-bold text-sm text-red-800 mb-1">Correo Electrónico</h5>
              <a href="mailto:administracion.corp@agroriocas.com" className="text-xs font-bold text-gray-500 hover:text-red-800 transition-colors break-all">
                administracion.corp@agroriocas.com
              </a>
            </div>
          </div>
        </div>
      </DataCard>

    </div>
  )
}


/* --- 4. LAYOUT PRINCIPAL (TAHOMA FULL) --- */



export default function InversionistasPage() {
  const [openMenuId, setOpenMenuId] = useState<string | null>('gobierno')
  const [activeSubItem, setActiveSubItem] = useState<string>('estructura')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="flex bg-[#fcfdfc] min-h-screen overflow-x-hidden" style={{ fontFamily: 'Tahoma, sans-serif' }}>
      {/* SIDEBAR INVERSIONISTAS */}
      <aside className={`fixed lg:sticky top-0 lg:top-28 left-0 h-screen lg:h-[calc(100vh-8rem)] w-[280px] xs:w-[320px] sm:w-[360px] bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 z-50 lg:z-40 shadow-2xl lg:shadow-none self-start ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>



        {/* ENCABEZADO FIJO */}

        {/* ENCABEZADO FIJO */}
        <div className="p-8 md:p-12 pb-6 md:pb-8 border-b border-gray-50 shrink-0">
          <span className="text-[10px] font-bold text-red-600 tracking-[0.3em] uppercase block mb-2 md:mb-3">Riopaila Agrícola</span>
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 not-italic uppercase tracking-tight leading-none">Inversionistas</h2>
        </div>



        {/* ÁREA DE BOTONES CON SCROLL INTERNO */}

        <nav className="p-6 space-y-4 flex-1 overflow-y-auto">

          {MENU_STRUCTURE.map((menu) => (

            <div key={menu.id}>

              <button
                onClick={() => {
                  if (menu.subItems && menu.subItems.length > 0) {
                    setOpenMenuId(openMenuId === menu.id ? null : menu.id);
                  } else {
                    setOpenMenuId(menu.id);
                    setActiveSubItem(menu.id);
                    setIsSidebarOpen(false);
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl transition-all ${openMenuId === menu.id ? 'bg-red-800 text-white shadow-xl shadow-red-900/10' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-4">
                  <menu.icon size={20} className={openMenuId === menu.id ? "text-red-300" : "text-gray-300"} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">{menu.label}</span>
                </div>
                {menu.subItems && menu.subItems.length > 0 && (
                  <ChevronDown size={16} className={openMenuId === menu.id ? "rotate-180" : ""} />
                )}
              </button>



              <AnimatePresence>

                {openMenuId === menu.id && menu.subItems && menu.subItems.length > 0 && (

                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">

                    <div className="py-4 px-4 sm:px-8 space-y-2">

                      {menu.subItems.map((sub) => (

                        <button
                          key={sub.id}
                          onClick={() => { setActiveSubItem(sub.id); setIsSidebarOpen(false); }}
                          className={`w-full text-left py-2.5 px-4 text-[10px] font-bold uppercase rounded-xl transition-all ${activeSubItem === sub.id ? 'bg-red-50 text-red-800' : 'text-gray-400 hover:text-red-800'}`}
                        >
                          {sub.label}
                        </button>
                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </nav>

      </aside>



      {/* ÁREA DE CONTENIDO */}

      <main className="flex-1 px-4 sm:px-8 lg:px-20 pt-24 md:pt-32 lg:pt-40 pb-20 overflow-x-hidden">

        {/* 👇 AQUÍ ESTÁ EL CAMBIO: Quité h-[280px] y puse min-h-[160px] con py-10. También ajusté el borde a rounded-3xl 👇 */}




        {/* 👇 BANNER PRINCIPAL ACTUALIZADO A ROJO 👇 */}
        <div className="relative w-full min-h-[120px] md:min-h-[160px] py-8 md:py-10 bg-red-800 rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-10 flex items-center px-6 md:px-10 shadow-xl shadow-red-900/10">
          <div className="relative z-10 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase not-italic tracking-tight leading-tight md:leading-none">
              {MENU_STRUCTURE.find(m => m.id === openMenuId)?.label || "INVERSIONISTAS"}
            </h1>

            {MENU_STRUCTURE.find(m => m.id === openMenuId)?.description && (
              <p className="text-white/80 text-base md:text-lg border-l-4 border-red-400 pl-5 max-w-2xl mt-4">
                {MENU_STRUCTURE.find(m => m.id === openMenuId)?.description}
              </p>
            )}
          </div>
        </div>


        {/* AQUÍ ESTÁN LAS VISTAS CONECTADAS */}

        <AnimatePresence mode="wait">

          {activeSubItem === 'estructura' && <EstructuraView key="estructura" />}

          {activeSubItem === 'buenas_practicas' && <BuenasPracticasView key="buenas_practicas" />}

          {activeSubItem === 'conglomerados' && <ConglomeradosView key="conglomerados" />}

          {activeSubItem === 'info_relevante' && <InfoRelevanteView key="info_relevante" />}

          {activeSubItem === 'convocatoria' && <ConvocatoriaView key="convocatoria" />}

          {activeSubItem === 'info_general' && <InfoGeneralView key="info_general" />}

          {activeSubItem === 'proyecto_dividendos' && <ProyectoDividendosView key="proyecto_dividendos" />}

          {activeSubItem === 'control' && <ArquitecturaControlView key="control" />}

          {activeSubItem === 'informe_gestion' && <InformeGestionView key="informe_gestion" />}

          {activeSubItem === 'estados_financieros' && <EstadosFinancierosView key="estados_financieros" />}

          {activeSubItem === 'informes_trimestrales' && <InformesTrimestralesView key="informes_trimestrales" />}



          {/* 👇 ESTA ES LA LÍNEA QUE FALTABA PARA MOSTRAR LA VISTA 👇 */}

          {activeSubItem === 'atencion' && <AtencionInversionistaView key="atencion" />}

          {/* 👇 TAMBIÉN FALTABA AGREGAR 'atencion' A ESTA LISTA DE EXCLUSIÓN 👇 */}
          {!['estructura', 'buenas_practicas', 'conglomerados', 'info_relevante', 'convocatoria', 'info_general', 'proyecto_dividendos', 'control', 'informe_gestion', 'estados_financieros', 'informes_trimestrales', 'atencion'].includes(activeSubItem) && (

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center py-20">

              <Info className="mx-auto text-gray-100 mb-6" size={64} />

              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Información en actualización</p>

            </motion.div>

          )}

        </AnimatePresence>

      </main>



      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        className="lg:hidden fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-red-600 text-white p-4 md:p-5 rounded-full shadow-2xl border-2 border-red-400 active:scale-90 transition-transform"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>



    </div>

  )

}
