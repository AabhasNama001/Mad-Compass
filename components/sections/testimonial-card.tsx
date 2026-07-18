"use client";

type TestimonialCardProps = {
  name: string;
  location: string;
  quote: string;
  trip: string;
};

export function TestimonialCard({ name, location, quote, trip }: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-[#ece7e4] bg-white p-6 shadow-[0_24px_90px_rgba(17,17,17,0.08)] transition duration-300 hover:-translate-y-1">
      <p className="text-base leading-8 text-[#3e3935]">“{quote}”</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c20b0b] text-sm font-semibold text-white">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-[#111111]">{name}</p>
          <p className="text-sm text-[#6b5d57]">
            {location} · {trip}
          </p>
        </div>
      </div>
    </article>
  );
}
