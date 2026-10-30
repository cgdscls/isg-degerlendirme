"use client";

// Server action'ları bir <form action={...}> ile çağırırken tarayıcıda
// onay (confirm) penceresi göstermek için küçük bir client wrapper.
// Server Component'ler içinde doğrudan onSubmit kullanılamadığı için
// bu bileşen ayrıca tanımlandı.
export default function OnayliSilForm({
  action,
  confirmMesaji,
  butonMetni,
  className,
}: {
  action: (formData: FormData) => void | Promise<void>;
  confirmMesaji: string;
  butonMetni: string;
  className?: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmMesaji)) {
          e.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className={className ?? "text-sm font-medium text-red-600 hover:underline"}
      >
        {butonMetni}
      </button>
    </form>
  );
}
