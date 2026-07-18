import { packages } from "@/data/packages";

export default function GalleryPage() {
  return (
    <main className="flex-1 bg-[#fcf7f1]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b86b3d]">Gallery</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#1f1a17] sm:text-5xl">
            A preview of the mood, textures, and landscapes that shape our itineraries.
          </h1>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {packages.slice(0, 4).map((pkg, index) => (
            <div key={pkg.slug} className="overflow-hidden rounded-[2rem] border border-[#e8dccd] bg-white shadow-[0_20px_70px_rgba(20,15,10,0.06)]">
              <div className="h-56 w-full bg-[radial-gradient(circle_at_top_left,_rgba(184,107,61,0.22),_transparent_35%),linear-gradient(135deg,_#1f1a17,_#5f4330)]" />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#b86b3d]">{index + 1 < 2 ? "Signature stay" : "Scene"}</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#1f1a17]">{pkg.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#655b4f]">{pkg.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
