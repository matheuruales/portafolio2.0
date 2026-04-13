import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-[100svh] grid place-items-center px-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/15 bg-black/45 backdrop-blur-md p-8 text-center">
        <p className="text-cyan-300 text-sm uppercase tracking-[0.2em]">404</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-zinc-100">
          Pagina no encontrada
        </h1>
        <p className="mt-4 text-zinc-300">
          La ruta que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-400/10 px-6 py-2 text-sm text-cyan-100 hover:bg-cyan-400/20 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

