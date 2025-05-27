"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiErrorCircle, BiLoaderAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

// Esquema de validación con zod
const formSchema = z.object({
    nombre: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre no puede exceder los 50 caracteres")
        .refine((val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(val), {
            message: "El nombre solo debe contener letras",
        }),
    email: z.string().email("Introduce un email válido"),
    telefono: z
        .string()
        .optional()
        .refine((val) => !val || /^(\+?\d{1,3})?[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{3}$/.test(val), {
            message: "Introduce un número de teléfono válido (solo números)",
        }),
    empresa: z.string().optional(),
    asunto: z
        .string()
        .min(3, "El asunto debe tener al menos 3 caracteres")
        .max(100, "El asunto no puede exceder los 100 caracteres"),
    mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
    como_nos_conocio: z
        .enum(["busqueda", "recomendacion", "redes_sociales", "publicidad", "otro"], {
            errorMap: () => ({ message: "Selecciona una opción válida" }),
        })
        .optional(),
    politica: z.boolean().refine((val) => val === true, {
        message: "Debes aceptar la política de privacidad",
    }),
});

// Tipo inferido del esquema
type FormValues = z.infer<typeof formSchema>;

// Componente de error personalizado
const ErrorMessage = ({ message }: { message: string }) => (
    <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mt-1 text-sm text-red-400 flex items-center"
        style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
        }}
    >
        <BiErrorCircle className="w-3 h-3 mr-1 flex-shrink-0" />
        {message}
    </motion.p>
);

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [telefonoError, setTelefonoError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: "",
            email: "",
            telefono: "",
            empresa: "",
            asunto: "",
            mensaje: "",
            como_nos_conocio: undefined,
            politica: false,
        },
        mode: "onChange",
    });

    // Observar cambios en nombre y teléfono
    const nombreValue = watch("nombre");
    const telefonoValue = watch("telefono");

    // Validación dinámica del nombre
    useEffect(() => {
        if (nombreValue) {
            if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(nombreValue)) {
                setNombreError("El nombre solo debe contener letras");
            } else if (nombreValue.length < 2) {
                setNombreError("El nombre debe tener al menos 2 caracteres");
            } else if (nombreValue.length > 50) {
                setNombreError("El nombre no puede exceder los 50 caracteres");
            } else {
                setNombreError("");
            }
        } else {
            setNombreError("");
        }
    }, [nombreValue]);

    // Validación dinámica del teléfono
    useEffect(() => {
        if (telefonoValue) {
            if (!/^(\+?\d{1,3})?[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{3}$/.test(telefonoValue)) {
                setTelefonoError("Introduce un número de teléfono válido (solo números)");
            } else {
                setTelefonoError("");
            }
        } else {
            setTelefonoError("");
        }
    }, [telefonoValue]);

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            // Aquí iría la lógica para enviar el formulario a un API
            console.log("Datos del formulario:", data);

            // Simulamos un retraso para mostrar el estado de carga
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Éxito
            setIsSuccess(true);
            reset();

            // Después de 5 segundos, ocultamos el mensaje de éxito
            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setErrorMessage("Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[var(--lime)] via-white to-[var(--lime)] bg-clip-text text-transparent">
                Envíanos un mensaje
            </h2>

            {isSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-[var(--lime)]/10 text-[var(--lime)] p-4 rounded-lg mb-6 border border-[var(--lime)]/20"
                    style={{
                        willChange: 'transform, opacity',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                >
                    <div className="flex items-center">
                        <BsCheckCircle className="w-5 h-5 mr-2" />
                        <p className="font-medium">¡Mensaje enviado con éxito!</p>
                    </div>
                    <p className="text-sm mt-1 ml-7">Nos pondremos en contacto contigo lo antes posible.</p>
                </motion.div>
            )}

            {errorMessage && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-red-500/10 text-red-400 p-4 rounded-lg mb-6 border border-red-500/20"
                    style={{
                        willChange: 'transform, opacity',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                >
                    <div className="flex items-center">
                        <BiErrorCircle className="w-5 h-5 mr-2" />
                        <p className="font-medium">Error</p>
                    </div>
                    <p className="text-sm mt-1 ml-7">{errorMessage}</p>
                </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-gray-300">
                            Nombre <span className="text-[var(--lime)]">*</span>
                        </label>
                        <input
                            id="nombre"
                            type="text"
                            className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/50 ${
                                errors.nombre || nombreError 
                                    ? "border-red-500/50 bg-red-500/5" 
                                    : "border-[var(--lime)]/20 hover:border-[var(--lime)]/40"
                            } text-white placeholder-gray-500 transition-colors duration-200`}
                            placeholder="Tu nombre"
                            {...register("nombre")}
                            disabled={isSubmitting}
                        />
                        {nombreError && <ErrorMessage message={nombreError} />}
                        {errors.nombre && !nombreError && (
                            <ErrorMessage message={errors.nombre.message || "Error en el campo nombre"} />
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                            Email <span className="text-[var(--lime)]">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/50 ${
                                errors.email 
                                    ? "border-red-500/50 bg-red-500/5" 
                                    : "border-[var(--lime)]/20 hover:border-[var(--lime)]/40"
                            } text-white placeholder-gray-500 transition-colors duration-200`}
                            placeholder="tu@email.com"
                            {...register("email")}
                            disabled={isSubmitting}
                        />
                        {errors.email && <ErrorMessage message={errors.email.message || "Error en el campo email"} />}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="telefono" className="block text-sm font-medium mb-2 text-gray-300">
                            Teléfono
                        </label>
                        <input
                            id="telefono"
                            type="tel"
                            className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/50 ${
                                errors.telefono || telefonoError 
                                    ? "border-red-500/50 bg-red-500/5" 
                                    : "border-[var(--lime)]/20 hover:border-[var(--lime)]/40"
                            } text-white placeholder-gray-500 transition-colors duration-200`}
                            placeholder="+34 000 000 000"
                            {...register("telefono")}
                            disabled={isSubmitting}
                        />
                        {telefonoError && <ErrorMessage message={telefonoError} />}
                        {errors.telefono && !telefonoError && (
                            <ErrorMessage message={errors.telefono.message || "Error en el campo teléfono"} />
                        )}
                    </div>

                    <div>
                        <label htmlFor="empresa" className="block text-sm font-medium mb-2 text-gray-300">
                            Empresa
                        </label>
                        <input
                            id="empresa"
                            type="text"
                            className="w-full px-4 py-3 bg-black/50 border border-[var(--lime)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/50 text-white placeholder-gray-500 hover:border-[var(--lime)]/40 transition-colors duration-200"
                            placeholder="Nombre de tu empresa"
                            {...register("empresa")}
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="asunto" className="block text-sm font-medium mb-2 text-gray-300">
                        Asunto <span className="text-[var(--lime)]">*</span>
                    </label>
                    <input
                        id="asunto"
                        type="text"
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/50 ${
                            errors.asunto 
                                ? "border-red-500/50 bg-red-500/5" 
                                : "border-[var(--lime)]/20 hover:border-[var(--lime)]/40"
                        } text-white placeholder-gray-500 transition-colors duration-200`}
                        placeholder="Asunto de tu consulta"
                        {...register("asunto")}
                        disabled={isSubmitting}
                    />
                    {errors.asunto && <ErrorMessage message={errors.asunto.message || "Error en el campo asunto"} />}
                </div>

                <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2 text-gray-300">
                        Mensaje <span className="text-[var(--lime)]">*</span>
                    </label>
                    <textarea
                        id="mensaje"
                        rows={5}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/50 ${
                            errors.mensaje 
                                ? "border-red-500/50 bg-red-500/5" 
                                : "border-[var(--lime)]/20 hover:border-[var(--lime)]/40"
                        } text-white placeholder-gray-500 transition-colors duration-200 resize-none`}
                        placeholder="Describe tu proyecto o necesidad con el mayor detalle posible"
                        {...register("mensaje")}
                        disabled={isSubmitting}
                    ></textarea>
                    {errors.mensaje && <ErrorMessage message={errors.mensaje.message || "Error en el campo mensaje"} />}
                </div>

                <div>
                    <label htmlFor="como_nos_conocio" className="block text-sm font-medium mb-2 text-gray-300">
                        ¿Cómo nos conociste?
                    </label>
                    <select
                        id="como_nos_conocio"
                        className="w-full px-4 py-3 bg-black/50 border border-[var(--lime)]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/50 text-white placeholder-gray-500 hover:border-[var(--lime)]/40 transition-colors duration-200"
                        {...register("como_nos_conocio")}
                        disabled={isSubmitting}
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="busqueda">Búsqueda en Google</option>
                        <option value="recomendacion">Recomendación</option>
                        <option value="redes_sociales">Redes Sociales</option>
                        <option value="publicidad">Publicidad</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="politica"
                            type="checkbox"
                            className={`w-4 h-4 border rounded focus:ring-2 focus:ring-[var(--lime)]/50 bg-black/50 ${
                                errors.politica 
                                    ? "border-red-500/50" 
                                    : "border-[var(--lime)]/20 hover:border-[var(--lime)]/40"
                            } transition-colors duration-200`}
                            {...register("politica")}
                            disabled={isSubmitting}
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label
                            htmlFor="politica"
                            className={`font-medium ${errors.politica ? "text-red-400" : "text-gray-300"}`}
                        >
                            Acepto la{" "}
                            <Link
                                href="/politica-privacidad"
                                className="text-[var(--lime)] font-bold hover:text-[var(--lime)]/80 transition-colors duration-200"
                            >
                                política de privacidad
                            </Link>{" "}
                            <span className="text-[var(--lime)]">*</span>
                        </label>
                        <p className="text-gray-400 text-xs mt-1">
                            Al enviar este formulario, aceptas que tus datos sean procesados según nuestra política de
                            privacidad.
                        </p>
                        {errors.politica && (
                            <ErrorMessage
                                message={errors.politica.message || "Debes aceptar la política de privacidad"}
                            />
                        )}
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--lime)] text-black py-4 px-6 rounded-lg font-bold text-lg hover:bg-[var(--lime)]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--lime)]/50 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-[var(--lime)]/20"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <BiLoaderAlt className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                Enviando...
                            </span>
                        ) : (
                            "Enviar mensaje"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
