"use client";

import { useRouter } from "next/navigation";

export default function Pressel() {
  const router = useRouter();

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>⚠️ Conteúdo exclusivo</h1>
      <p>Somente maiores de 18 anos podem continuar.</p>

      <button onClick={() => router.push("/")}>
        Continuar
      </button>
    </div>
  );
}
