"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem("promoShown")
    if (!hasBeenShown) {
      const timer = setTimeout(() => setIsOpen(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    sessionStorage.setItem("promoShown", "true")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-sm bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 p-1.5 bg-black/10 hover:bg-black/30 text-white rounded-full transition-all"
            >
              <X size={18} />
            </button>

            {/* Imagen */}
            <div className="relative w-full" style={{ aspectRatio: "1 / 0.75" }}>
              <Image
                src="/Imagenes/IMG_5924.jpg"
                alt="Castilla Agrícola"
                fill
                className="object-cover"
                sizes="(max-width: 384px) 100vw, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7f1d1d]/60 to-transparent" />
            </div>

            {/* Sección proveedores */}
            <div className="px-6 py-5 border-t border-[#fee2e2] bg-[#fef2f2]">
              <p className="text-sm text-[#7f1d1d] leading-relaxed text-center">
                ¿Eres proveedor y necesitas descargar los certificados de retención? Accede a nuestro portal desde la sección{" "}
                <Link
                  href="/grupos-de-interes/proveedores-clientes"
                  onClick={closeModal}
                  className="text-[#dc2626] font-bold underline hover:text-[#7f1d1d] transition-colors"
                >
                  Grupos de Interés
                </Link>{" "}
                o presionando el siguiente link:
              </p>
              <a
                href="http://200.29.239.178:8283/Intranet-Proveedores/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[#dc2626] text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-[#7f1d1d] transition-colors"
              >
                Ir al Portal de Proveedores
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}