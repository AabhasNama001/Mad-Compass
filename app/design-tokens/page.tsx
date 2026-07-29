export default function DesignTokensPage() {
  return (
    <main className="flex-1 bg-[#fcf7f1] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#b86b3d]">Design tokens</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#1f1a17] sm:text-5xl">
          Placeholder brand system for quick swapping later.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#655b4f]">
          These are placeholder tokens pending final client brand guidance. Update them in one place in the Tailwind theme when the brand direction is confirmed.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-4xl border border-[#eadfce] bg-white p-6">
            <div className="h-16 rounded-[1.25rem] bg-[#0f0c0b]" />
            <p className="mt-4 font-semibold text-[#1f1a17]">Deep neutral</p>
            <p className="text-sm text-[#655b4f]">Near-black / charcoal foundation.</p>
          </div>
          <div className="rounded-4xl border border-[#eadfce] bg-white p-6">
            <div className="h-16 rounded-[1.25rem] bg-[#b86b3d]" />
            <p className="mt-4 font-semibold text-[#1f1a17]">Warm accent</p>
            <p className="text-sm text-[#655b4f]">Rust-red / copper CTA tone.</p>
          </div>
          <div className="rounded-4xl border border-[#eadfce] bg-white p-6">
            <div className="h-16 rounded-[1.25rem] bg-[#f8efe7]" />
            <p className="mt-4 font-semibold text-[#1f1a17]">Warm ivory</p>
            <p className="text-sm text-[#655b4f]">Soft text and surface tone.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
