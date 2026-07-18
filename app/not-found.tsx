import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0f0c0b] px-6 text-center text-[#f8efe7]">
      <p className="text-sm uppercase tracking-[0.3em] text-[#dfa977]">Page not found</p>
      <h1 className="mt-4 text-4xl font-semibold">This page is still being shaped.</h1>
      <p className="mt-4 max-w-xl text-lg text-[#d9cab8]">
        The route exists in the roadmap, but the final copy and content are still pending your client review.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-[#b86b3d] px-6 py-3 font-medium text-white">
        Return home
      </Link>
    </main>
  );
}
