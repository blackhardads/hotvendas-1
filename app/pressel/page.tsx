"use client";

import { useRouter } from "next/navigation";

export default function Pressel() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-white to-[#ffe8c2] flex items-center justify-center px-4">
      <div className="w-full max-w-[430px] rounded-[28px] bg-white shadow-2xl border border-orange-100 p-6 text-center">
        
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#e89c30]/15 text-4xl">
          ⚠️
        </div>

        <h1 className="text-3xl font-extrabold text-black mb-3">
          Conteúdo exclusivo
        </h1>

        <p className="text-gray-700 text-[17px] leading-relaxed">
          Esse perfil é privado!
        </p>

        <p className="mt-2 text-gray-700 text-[17px] leading-relaxed">
          Apenas maiores de 18 anos podem continuar.
        </p>

        <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-200 p-4">
          <p className="text-sm font-semibold text-orange-700">
            Confirme sua idade para acessar a página oficial.
          </p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-7 w-full rounded-2xl bg-[#e89c30] px-6 py-4 text-lg font-extrabold text-black shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-[#f5ad3e] active:scale-[0.98]"
        >
          CONTINUAR AGORA →
        </button>

        <p className="mt-4 text-xs text-gray-400">
          Ao continuar, você confirma que possui mais de 18 anos.
        </p>
      </div>
    </main>
  );
}
