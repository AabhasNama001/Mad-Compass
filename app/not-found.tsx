import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#fffdfc] px-6 py-20 text-center text-[#17120f]">
      <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">Page not found</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">The route you were looking for has not been mapped yet.</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-[#655b4f]">
        It may have moved, or it may still be in our planning notes. Either way, you are only a step away from the heart of the site.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-full bg-[#c20b0b] px-6 py-3 font-medium text-white shadow-[0_16px_35px_rgba(194,11,11,0.22)]">
          Return home
        </Link>
        <Link href="/contact" className="rounded-full border border-[#efe2dc] bg-white px-6 py-3 font-medium text-[#17120f]">
          Start an enquiry
        </Link>
      </div>
    </main>
  );
}
