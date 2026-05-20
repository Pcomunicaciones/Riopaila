"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  tipoDenuncia: z.enum(["anonima", "publica"]),
  nombre: z.string().optional(),
  apellidos: z.string().optional(),
  telefono: z.string().optional(),
  denuncia: z.string().min(10, {
    message: "La denuncia debe tener al menos 10 caracteres.",
  }),
  acepto: z.string().regex(/^si$/, {
    message: "Debes aceptar el tratamiento de datos para enviar la denuncia.",
  }),
  captcha: z.string().min(1, { message: "Por favor, resuelve la suma de seguridad." }),
})

export function TransparencyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [reportId, setReportId] = useState<string | null>(null)

  // Captcha state
  const [captchaChallenge, setCaptchaChallenge] = useState({ a: 0, b: 0 })
  const [captchaCorrect, setCaptchaCorrect] = useState(false)

  // Generar un nuevo captcha al cargar o resetear
  const generateCaptcha = React.useCallback(() => {
    setCaptchaChallenge({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1
    })
    setCaptchaCorrect(false)
  }, [])

  React.useEffect(() => {
    generateCaptcha()
  }, [generateCaptcha])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipoDenuncia: "anonima",
      nombre: "",
      apellidos: "",
      telefono: "",
      denuncia: "",
      acepto: "no",
      captcha: "",
    },
  })

  // Vigilar el campo del captcha para validar en tiempo real
  const captchaValue = form.watch("captcha")
  React.useEffect(() => {
    if (parseInt(captchaValue) === captchaChallenge.a + captchaChallenge.b) {
      setCaptchaCorrect(true)
    } else {
      setCaptchaCorrect(false)
    }
  }, [captchaValue, captchaChallenge])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!captchaCorrect) {
      toast.error("La suma de seguridad es incorrecta.")
      return
    }

    const generatedId = `RT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`

    setIsSubmitting(true)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Nuevo Reporte [${generatedId}] - Riopaila Agrícola`,
          from_name: "Línea Transparente - Reporte Anónimo",
          report_id: generatedId,
          tipo_denuncia: values.tipoDenuncia === "anonima" ? "Anónima" : "Pública",
          nombre: values.tipoDenuncia === "anonima" ? "Anónimo" : (values.nombre?.trim() || "No proporcionado"),
          apellidos: values.tipoDenuncia === "anonima" ? "Anónimo" : (values.apellidos?.trim() || "No proporcionado"),
          telefono: values.tipoDenuncia === "anonima" ? "No proporcionado" : (values.telefono?.trim() || "No proporcionado"),
          denuncia: values.denuncia,
          acepto: values.acepto,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || "Error al enviar el reporte")
      }

      setReportId(generatedId)
      setIsSubmitted(true)
      toast.success("Denuncia enviada exitosamente")
    } catch (error: any) {
      console.error(error)
      toast.error(`Error: ${error.message || "Hubo un error al enviar la denuncia. Por favor intenta de nuevo."}`)
      generateCaptcha() // Regenerar en caso de error
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2rem] border border-green-100 p-12 text-center shadow-xl shadow-green-900/5"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Reporte Enviado!</h3>
        <div className="bg-gray-50 rounded-xl p-4 mb-6 inline-block px-10 border border-gray-100">
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter mb-1">ID de Seguimiento</p>
          <p className="text-2xl font-black text-red-800 tracking-tighter font-mono">{reportId}</p>
        </div>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed text-sm">
          Tu denuncia ha sido recibida de manera anónima con el ID anterior. Por favor, guárdalo para cualquier seguimiento futuro.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            form.reset()
            generateCaptcha()
          }}
          className="mt-8 bg-green-600 hover:bg-green-700 text-white rounded-xl px-8"
        >
          Enviar otro reporte
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-red-900/5 overflow-hidden">
      {/* Cabecera del Formulario - Estilo Premium */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 px-8 py-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="relative z-10 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
              <Send size={20} className="text-red-200" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-[0.2em] italic">Formulario de Denuncia</h3>
          </div>
          <p className="text-red-100/70 text-xs italic tracking-wide">
            Toda la información proporcionada será tratada con absoluta confidencialidad y reserva.
          </p>
        </div>
      </div>

      <div className="p-8 md:p-12 lg:p-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <FormField
              control={form.control}
              name="tipoDenuncia"
              render={({ field }) => (
                <FormItem className="space-y-3 bg-red-50/50 p-6 rounded-2xl border border-red-100">
                  <FormLabel className="text-sm font-bold text-gray-900">¿Cómo deseas realizar tu denuncia?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-8"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 bg-white px-4 py-3 rounded-xl border border-gray-200 flex-1 cursor-pointer transition-all hover:border-red-300">
                        <FormControl>
                          <RadioGroupItem value="anonima" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer text-gray-700 w-full">Anónima (Ocultar mis datos)</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 bg-white px-4 py-3 rounded-xl border border-gray-200 flex-1 cursor-pointer transition-all hover:border-red-300">
                        <FormControl>
                          <RadioGroupItem value="publica" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer text-gray-700 w-full">Pública (Proporcionar mis datos)</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <AnimatePresence>
              {form.watch("tipoDenuncia") === "publica" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Nombre</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nombre"
                              className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="apellidos"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Apellidos</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Apellidos"
                              className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Teléfono</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Teléfono"
                              className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <FormField
              control={form.control}
              name="denuncia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold flex items-center gap-1">
                    Denuncia <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escribe aquí los detalles de la situación..."
                      className="min-h-[150px] rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500/20 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Autorización para el tratamiento de datos personales</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-6">
                En cumplimiento de la Ley Estatutaria 1581 de 2012, "Por la cual se dictan disposiciones generales para la protección de datos personales", el Decreto 1377 de 2013, "Por el cual se reglamenta parcialmente la Ley 1581 de 2012", y el Decreto 1074 de 2015 "Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo", y demás normas concordantes, me permito informarle que, mediante el registro de sus datos en el presente formulario, autoriza a la Empresa <strong>Riopaila Agrícola S.A.</strong> para realizar el tratamiento de sus datos personales.
                <br /><br />
                El tratamiento que se realizará con la información personal suministrada será el siguiente: Recolección, Almacenamiento, uso y circulación; lo anterior de conformidad con las siguientes finalidades: i) Gestionar trámites (solicitudes, quejas, reclamos). ii) Contactar al Titular a través de medios telefónicos y/o electrónicos, para el envío de noticias relacionadas con tramites, campañas y mejora del servicio. iii) Contactar al Titular a través de medios telefónicos y/o electrónicos para realizar encuestas, estudios y/o confirmación de datos personales.
              </p>

              <FormField
                control={form.control}
                name="acepto"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-sm font-bold text-gray-700">Acepto</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row gap-6"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="si" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">Sí</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row items-end gap-6 border-t border-gray-100 pt-8">
              <FormField
                control={form.control}
                name="captcha"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-gray-700 font-bold flex items-center gap-2">
                      <AlertCircle size={16} className="text-red-600" />
                      Validación de Seguridad
                    </FormLabel>
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 px-6 py-2 rounded-xl font-bold text-xl text-red-800 border border-gray-200 tracking-tighter">
                        {captchaChallenge.a} + {captchaChallenge.b} = ?
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Resultado"
                          className={cn(
                            "rounded-xl w-32 font-bold text-center text-lg transition-all",
                            captchaCorrect ? "border-green-500 bg-green-50 ring-green-500/20" : "border-gray-200"
                          )}
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting || !captchaCorrect}
                className="w-full md:w-fit px-12 py-7 bg-red-800 hover:bg-red-900 text-white rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-red-900/20 disabled:bg-gray-400 disabled:shadow-none h-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Denuncia"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
