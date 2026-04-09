"use client";

import React from 'react';
import { Shield, Mail, MapPin, Phone, FileText, MessageSquare, AlertCircle, HelpCircle, CheckCircle2, Globe, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function ProteccionDatosPage() {
  const pqrsItems = [
    {
      title: "PETICIÓN",
      icon: <HelpCircle className="text-blue-500" />,
      bgIcon: "bg-blue-50",
      description: "Solicitud expresa que presenta el titular de los datos a fin de obtener información o respuesta conforme a los derechos y deberes del titular de la información."
    },
    {
      title: "QUEJA",
      icon: <AlertCircle className="text-orange-500" />,
      bgIcon: "bg-orange-50",
      description: "Es la manifestación de protesta, censura, descontento o inconformidad que formula el titular de los datos en relación con una conducta que considera irregular en el uso de sus datos personales."
    },
    {
      title: "RECLAMO",
      icon: <MessageSquare className="text-red-500" />,
      bgIcon: "bg-red-50",
      description: "Expresión de insatisfacción del titular de datos con respecto al uso de sus datos personales."
    },
    {
      title: "SUGERENCIAS",
      icon: <FileText className="text-purple-500" />,
      bgIcon: "bg-purple-50",
      description: "Cualquier expresión que tiene por objeto mejorar el servicio o gestión de la compañía, cuyo objeto se encuentra relacionado con el uso de sus datos personales. Asimismo, el titular de los datos podrá expresar su agrado o satisfacción."
    }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-32 pb-20 font-sans">
      
      {/* 1. HEADER SECTION (CENTERED) */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-red-800 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-red-100">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1a2e35] tracking-tight leading-tight mb-6">
            PROTECCIÓN TRATAMIENTO <br/>
            <span className="text-red-700">DE DATOS PERSONALES</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl px-4">
            Le damos la bienvenida al servicio de <span className="font-bold text-red-700">PQRS (Peticiones, Quejas, Reclamos y Sugerencias)</span>, canal de atención al titular de datos para ejercer sus derechos de acceso, corrección, supresión o revocación del tratamiento de datos personales.
          </p>
        </motion.div>
      </section>

      {/* 2. PQRS GRID */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium italic tracking-wide">A través de este servicio, usted puede enviar lo siguiente:</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {pqrsItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
            >
              <div className={`w-14 h-14 ${item.bgIcon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-2xl font-black text-[#1a2e35] mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. REQUISITOS & CANALES SECTION */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-24 items-stretch">
        
        {/* Left: Requisitos (Boxed) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-red-800 text-white p-10 md:p-14 rounded-[40px] shadow-2xl shadow-red-900/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-10 bg-yellow-400 rounded-full"></div>
              <h2 className="text-3xl font-black tracking-tight">Requisitos de la Solicitud</h2>
            </div>
            
            <p className="text-red-100 mb-10 font-medium opacity-90 leading-relaxed">
              La solicitud deberá contener como mínimo la siguiente información:
            </p>
            
            <ul className="space-y-6">
              {[
                "El nombre y domicilio del Titular o representante o cualquier otro medio para recibir la respuesta a su solicitud.",
                "Los documentos que acrediten la identidad o la representación del Titular de los datos personales.",
                "Descripción clara y precisa de los datos personales y de los hechos que dan lugar al reclamo.",
                "Los documentos que se desean hacer valer en la reclamación. (opcional)"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 size={24} className="text-yellow-400 flex-shrink-0" />
                  </div>
                  <span className="text-[15px] leading-relaxed text-red-50 font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right: Canales */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center py-4"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-10 bg-red-700 rounded-full"></div>
            <h2 className="text-3xl font-black text-[#1a2e35] tracking-tight">Canales de Comunicación</h2>
          </div>
          
          <p className="text-gray-600 mb-10 leading-relaxed text-[15px]">
            Los titulares de los Datos personales podrán en cualquier momento solicitar la actualización, ratificación o supresión de dicha información e incluso revocar la autorización otorgada mediante los siguientes canales:
          </p>

          <div className="space-y-5">
            {[
              { icon: <MapPin />, text: "Comunicación escrita radicada en la carrera 1 N° 24-56 Edificio Colombina piso 7 oficina 722 de Santiago de Cali." },
              { icon: <Mail />, text: "A través del Correo electrónico:", highlight: "administracion.corp@agroriocas.com" },
              { icon: <Globe />, text: "En la Página Web de la Empresa", highlight: "(https://agroriocas.com)" }
            ].map((canal, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-3xl hover:border-red-100 hover:shadow-lg hover:shadow-gray-100 transition-all group">
                <div className="w-14 h-14 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-colors">
                  {React.cloneElement(canal.icon as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <p className="text-gray-700 font-bold leading-tight text-[15px]">
                    {canal.text}
                    {canal.highlight && <span className="block text-red-700 mt-1">{canal.highlight}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. OFICIAL PROTECCIÓN DE DATOS (BOTTOM BOX) */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-50 p-12 md:p-16 rounded-[48px] shadow-2xl shadow-gray-200/40 text-center relative overflow-hidden"
        >
          {/* Subtle Background Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          
          <div className="w-20 h-20 bg-red-50 text-red-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Briefcase size={40} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2e35] mb-12 tracking-tight uppercase">
            Oficial Protección de Datos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-700 mb-4 opacity-50">
                <MapPin size={24} />
              </div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dirección</p>
              <p className="text-gray-800 font-bold leading-relaxed px-4">
                Carrera 1 No. 24-56 oficina 722 Edificio Colombina - Cali, Colombia
              </p>
            </div>
            
            <div className="space-y-4 relative">
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gray-100"></div>
              <div className="mx-auto w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-700 mb-4 opacity-50">
                <Phone size={24} />
              </div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Teléfono</p>
              <p className="text-[22px] text-gray-800 font-black leading-tight">
                (602) 4855974
              </p>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gray-100"></div>
            </div>
            
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-700 mb-4 opacity-50">
                <Mail size={24} />
              </div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</p>
              <a 
                href="mailto:administracion.corp@agroriocas.com" 
                className="text-lg text-red-700 font-black hover:underline break-all transition-all"
              >
                administracion.corp@agroriocas.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
