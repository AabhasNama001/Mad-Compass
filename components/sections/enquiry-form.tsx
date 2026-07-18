"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

type FormState = {
  travelType: string;
  destination: string;
  style: string;
  budget: string;
  group: string;
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  notes: string;
};

const initialForm: FormState = {
  travelType: "",
  destination: "",
  style: "",
  budget: "",
  group: "",
  name: "",
  phone: "",
  email: "",
  preferredContact: "WhatsApp",
  notes: "",
};

const travelTypes = ["Domestic", "Overseas", "Expedition"];
const styleTags = ["Relaxation", "Adventure", "Culture", "Family", "Honeymoon", "Food & wine"];
const budgetBands = ["Under ₹3 lakh", "₹3–6 lakh", "₹6–10 lakh", "₹10 lakh+", "Flexible"];
const groupOptions = ["Couple", "Friends", "Family", "Solo", "Small group", "Large group"];

export function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const progress = ((step + 1) / 6) * 100;

  const handleNext = () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry");
      }

      setSubmitted(true);
      setStep(5);
    } catch {
      setSubmitted(true);
      setStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-[#f0d6d1] bg-white p-6 shadow-[0_24px_80px_rgba(20,15,10,0.08)] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Start your journey</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#17120f]">Tell us what kind of holiday you are craving.</h3>
        </div>
        <div className="rounded-full border border-[#f1d8d2] px-3 py-1 text-sm font-medium text-[#7a5048]">
          Step {step + 1} of 6
        </div>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#f7e8e5]">
        <div className="h-full rounded-full bg-[#d13b2f] transition-all" style={{ width: `${progress}%` }} />
      </div>

      {!submitted ? (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 0 ? (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">What kind of travel are you considering?</label>
              <div className="grid gap-3 sm:grid-cols-3">
                {travelTypes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField("travelType", option)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                      form.travelType === option
                        ? "border-[#d13b2f] bg-[#fff2ee] text-[#d13b2f]"
                        : "border-[#f0d6d1] bg-[#fffdfa] text-[#5d4944]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">What destination is on your mind?</label>
              <input
                required
                value={form.destination}
                onChange={(event) => updateField("destination", event.target.value)}
                className="w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm outline-none ring-0"
                placeholder="e.g. Japan, Bhutan, Kerala, or I am still exploring"
              />
            </div>
          ) : null}

          {step === 2 ? (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">What kind of experience appeals to you most?</label>
              <div className="flex flex-wrap gap-2">
                {styleTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => updateField("style", tag)}
                    className={`rounded-full border px-3 py-2 text-sm transition ${
                      form.style === tag
                        ? "border-[#d13b2f] bg-[#fff2ee] text-[#d13b2f]"
                        : "border-[#f0d6d1] text-[#5d4944]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">What comfort or budget band feels right?</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {budgetBands.map((band) => (
                  <button
                    key={band}
                    type="button"
                    onClick={() => updateField("budget", band)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                      form.budget === band
                        ? "border-[#d13b2f] bg-[#fff2ee] text-[#d13b2f]"
                        : "border-[#f0d6d1] bg-[#fffdfa] text-[#5d4944]"
                    }`}
                  >
                    {band}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">Who is travelling and when?</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {groupOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField("group", option)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                      form.group === option
                        ? "border-[#d13b2f] bg-[#fff2ee] text-[#d13b2f]"
                        : "border-[#f0d6d1] bg-[#fffdfa] text-[#5d4944]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <textarea
                value={form.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                className="mt-4 min-h-24 w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm outline-none"
                placeholder="Share rough dates, trip length, or anything you are dreaming of."
              />
            </div>
          ) : null}

          {step === 5 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">Your name</label>
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm"
                  placeholder="Aarav Sharma"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">Phone</label>
                <input
                  required
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm"
                  placeholder="+91 9711193458"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4b3b37]">Preferred contact</label>
                <select
                  value={form.preferredContact}
                  onChange={(event) => updateField("preferredContact", event.target.value)}
                  className="w-full rounded-2xl border border-[#f0d6d1] bg-[#fffdfa] px-4 py-3 text-sm"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                </select>
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-3 border-t border-[#f3e2dd] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-[#75635d]">
              {step === 5 ? "We will turn this into a thoughtful first recommendation." : "Your answers help us shortlist the right travel style."}
            </div>
            <div className="flex flex-wrap gap-3">
              {step > 0 ? (
                <Button type="button" variant="outline" onClick={handleBack} className="border-[#f0d6d1] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
                  Back
                </Button>
              ) : null}
              {step < 5 ? (
                <Button type="button" onClick={handleNext} className="bg-[#d13b2f] shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#b92f24] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)] text-white">
                  Continue <ArrowRight className="size-4" />
                </Button>
              ) : (
                <Button type="submit" className="bg-[#d13b2f] shadow-[0_16px_35px_rgba(194,11,11,0.22)] text-white hover:bg-[#b92f24] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send enquiry"}
                </Button>
              )}
            </div>
          </div>
        </form>
      ) : (
        <div className="mt-8 rounded-[1.5rem] border border-[#e8d8d4] bg-[#fffaf8] p-6 text-center">
          <CheckCircle2 className="mx-auto size-10 text-[#d13b2f]" />
          <h4 className="mt-4 text-2xl font-semibold text-[#17120f]">Thank you — your enquiry is in.</h4>
          <p className="mt-3 text-sm leading-7 text-[#6b534d]">
            We will be in touch soon with a tailored first recommendation and next steps. If you prefer, you can also reach us directly on WhatsApp at <a href={siteContent.whatsapp} className="font-semibold text-[#d13b2f]">{siteContent.phone}</a>.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-[#d13b2f] shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#b92f24] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]">
              <a href={siteContent.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> WhatsApp us
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#f0d6d1] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
              <a href="mailto:hello@madcompass.com">Email us</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
