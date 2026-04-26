"use client";

export default function Pressel() {
  const handleClick = () => {
    window.location.href = "https://vexfull.com/live/"; // 🔥 seu link
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-white to-[#ffe8c2] flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] rounded-[28px] bg-white shadow-2xl border border-orange-100 p-6 text-center">
        
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e89c30]/15 text-3xl">
          🔒
        </div>

        <h1 className="text-2xl font-extrabold text-black leading-tight">
          Acesso restrito liberado
        </h1>

        <p className="mt-3 text-gray-700 text-[16px]">
          Clique no botão abaixo para liberar seu acesso ao conteúdo.
        </p>

        <div className="mt-5 rounded-xl bg-orange-50 border border-orange-200 py-2 px-3">
          <p className="text-sm font-semibold text-orange-700">
            🔥 +1.284 pessoas acessaram hoje
          </p>
        </div>

        <button
          onClick={handleClick}
          className="mt-6 w-full rounded-2xl bg-[#e89c30] px-6 py-4 text-lg font-extrabold text-black shadow-xl animate-pulse transition-all duration-200 hover:scale-[1.06] hover:bg-[#f5ad3e] active:scale-[0.95]"
        >
          👉 CONTINUAR PARA LIBERAR
        </button>

        <p className="mt-4 text-xs text-red-500 font-semibold">
          ⚠️ Acesso pode expirar a qualquer momento
        </p>

        <p className="mt-3 text-xs text-gray-400">
          Ao continuar, você confirma que possui mais de 18 anos.
        </p>
      </div>
    </main>
  );
}
