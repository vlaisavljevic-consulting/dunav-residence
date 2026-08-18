// Skelet glavne (one-pager) rute — Faza 2, tačka 6 (PILOT_DUNAV_RESIDENCE.md).
// Svaka sekcija je placeholder sa id-jem za sidro-navigaciju; prava
// komponenta i copy dolaze u Fazi 3/4. Redosled prati sekciju 6 pilot fajla.

function Section({
  id,
  label,
  component,
}: {
  id: string;
  label: string;
  component: string;
}) {
  return (
    <section
      id={id}
      className="flex min-h-40 flex-col justify-center gap-1 border-b border-dashed border-zinc-300 px-6 py-10"
    >
      <p className="text-xs font-mono uppercase tracking-wide text-zinc-400">
        {component}
      </p>
      <h2 className="text-xl font-semibold text-zinc-800">{label}</h2>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <Section id="hero" label="Hero — naziv, lokacija, CTA" component="Hero" />
      <Section
        id="brojevi"
        label="Trust traka — 24 vile, 69 stanova, 7.911m², 74 parking mesta"
        component="TrustBar"
      />
      <Section id="galerija" label="Galerija renderi/foto" component="Gallery" />
      <Section
        id="tipovi-stanova"
        label="Tipovi stanova (kartice po tipu → /stanovi)"
        component="UnitTypesGrid"
      />
      <Section
        id="specifikacija"
        label="Specifikacija i oprema"
        component="SpecList"
      />
      <Section
        id="sadrzaji"
        label="Zajednički sadržaji"
        component="AmenitiesGrid"
      />
      <Section
        id="lokacija"
        label="Lokacija — Kamenička Ada"
        component="LocationMap"
      />
      <Section
        id="dinamika-gradnje"
        label="Dinamika gradnje i dozvola"
        component="ConstructionTimeline"
      />
      <Section
        id="o-investitoru"
        label="O investitoru — ASP Invest / Zenon Invest"
        component="DeveloperInfo"
      />
      <Section id="kontakt" label="Kontakt / CTA forma" component="ContactForm" />
    </main>
  );
}
