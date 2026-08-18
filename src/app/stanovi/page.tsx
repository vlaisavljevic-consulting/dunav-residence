// Puna lista/eksplorer svih 69 stanova (AvailabilityTable, sekcija 6 u
// PILOT_DUNAV_RESIDENCE.md). Podaci dolaze iz Postgres-a (Prisma) kad stignu
// pravi brojevi od investitora — za sad placeholder.

export default function StanoviPage() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-semibold text-zinc-800">
        Stanovi (AvailabilityTable — uskoro)
      </h1>
      <p className="mt-2 max-w-prose text-zinc-500">
        Ovde dolazi puna lista svih 69 stanova sa planom, kvadraturom, cenom i
        statusom (dostupno/rezervisano/prodato), filtrabilno po tipu i
        spratu. Čeka realne podatke iz Faze 1, tačka 1.
      </p>
    </main>
  );
}
