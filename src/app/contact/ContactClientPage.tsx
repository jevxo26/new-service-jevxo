"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, HelpCircle, ChevronDown, Phone, Mail, MapPin, Sparkles, MessageCircle, HelpCircle as QuestionIcon, ArrowRight, ShieldCheck, Zap, Headphones, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactState } from "@/app/contact/hooks/useContactState";
import { TRUST_BARS, FAQS, OFFICE_HOURS, RevealSection } from "@/app/contact/components/ContactComponents";
import { ContactForm } from "@/app/contact/components/ContactForm";
import { useGetSiteSettingsQuery } from "@/redux/features/admin/siteSettingsApi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function ContactClientPage() {
  const { form, errors, submitted, setSubmitted, activeFaq, setActiveFaq, isLoading, heroRef, glowY, glowY2, user, isAuthenticated, handleChange, handleSubmit } = useContactState();

  const { data: siteSettingsRes } = useGetSiteSettingsQuery();
  const siteSettings = siteSettingsRes?.data;

  const companyName = siteSettings?.companyName || "Jevxo Services";
  const emailVal = siteSettings?.email || "info@jevxo.com";
  const phoneVal = siteSettings?.phone || "+880 1613-410880";
  const whatsappVal = siteSettings?.whatsappNumber || siteSettings?.phone || "+8801613410880";
  const addressVal = siteSettings?.address
    ? `${siteSettings.address}${siteSettings.cityLocation ? `, ${siteSettings.cityLocation}` : ''}`
    : "House #42, Road #11, Block-F, Banani, Dhaka-1213";

  const contactChannels = [
    { icon: Phone, label: "Call Hotline", primary: phoneVal, href: `tel:${phoneVal.replace(/[^0-9+]/g, '')}`, secondary: "24/7 Priority Support", badge: "Immediate Response" },
    { icon: Mail, label: "Email Support", primary: emailVal, href: `mailto:${emailVal}`, secondary: "Official Desk Query", badge: "Replies in 4 hrs" },
    { icon: MapPin, label: "Headquarters", primary: addressVal, href: `https://maps.google.com/?q=${encodeURIComponent(addressVal)}`, secondary: siteSettings?.cityLocation || "Dhaka, Bangladesh", badge: "Office Hours (9AM-6PM)" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: siteSettings?.facebookUrl || "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: siteSettings?.instagramUrl || "https://instagram.com", label: "Instagram" },
    { icon: FaWhatsapp, href: whatsappVal.startsWith("http") ? whatsappVal : `https://wa.me/${whatsappVal.replace(/[^0-9]/g, '')}`, label: "WhatsApp" },
    { icon: FaLinkedinIn, href: siteSettings?.linkedinUrl || "https://linkedin.com", label: "LinkedIn" },
    { icon: FaYoutube, href: siteSettings?.youtubeUrl || "https://youtube.com", label: "YouTube" },
  ];

  return (
    <div className="relative bg-transparent flex-1 flex flex-col">
      <div className="absolute inset-0 bg-[url('/bg-icons-design.png')] bg-repeat opacity-10 pointer-events-none z-0" style={{ backgroundSize: 'auto' }} />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-12 pb-10 md:pt-16 md:pb-12">
        <motion.div style={{ y: glowY }} className="pointer-events-none absolute -top-32 right-0 w-[500px] h-[500px] bg-[#1E4E8C]/5 blur-[120px] rounded-full" />
        <motion.div style={{ y: glowY2 }} className="pointer-events-none absolute -bottom-16 left-1/4 w-[300px] h-[300px] bg-[#1E4E8C]/4 blur-[100px] rounded-full" />
        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 border-l border-b border-[#1E4E8C]/6 rounded-bl-full" />
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 text-[10px] font-extrabold text-[#1E4E8C] uppercase tracking-[.12em] bg-[#E6F0FA] px-3.5 py-1.5 rounded-full border border-[#1E4E8C]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E4E8C] animate-pulse" />
            {companyName} Support Center
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.12] mb-4">
            How can we <span className="relative inline-block text-[#1E4E8C]">help you today?<span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#1E4E8C]/15 rounded-full" /></span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }} className="text-sm font-semibold text-slate-600 max-w-md mx-auto leading-[1.75] mb-7">
            Reach our customer desk for bookings, billing, partner inquiries, or warranty claims. We reply within 4 hours.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }} className="flex flex-wrap justify-center gap-2">
            {TRUST_BARS.map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
                <Icon className="w-3.5 h-3.5 text-[#1E4E8C]" />{text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DYNAMIC CONTACT CHANNELS */}
      <section className="py-6 md:py-8 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <RevealSection>
            <div className="grid md:grid-cols-3 gap-4">
              {contactChannels.map(({ icon: Icon, label, primary, href, secondary, badge }) => (
                <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group relative bg-white border border-slate-200/80 rounded-2xl p-5 flex items-start gap-4 hover:border-[#1E4E8C]/30 hover:shadow-[0_8px_24px_rgba(30,78,140,0.1)] transition-all duration-300 overflow-hidden shadow-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E4E8C]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="relative p-3 rounded-2xl bg-[#E6F0FA] text-[#1E4E8C] flex-shrink-0 border border-[#1E4E8C]/15 group-hover:scale-110 transition-transform duration-300"><Icon className="w-5 h-5" /></span>
                  <div className="relative min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-black text-[10px] uppercase tracking-[.12em] text-slate-400">{label}</h3>
                      <span className="text-[10px] font-extrabold text-[#1E4E8C] bg-[#E6F0FA] border border-[#1E4E8C]/20 px-2.5 py-0.5 rounded-full whitespace-nowrap">{badge}</span>
                    </div>
                    <p className="text-sm font-black text-slate-900 group-hover:text-[#1E4E8C] transition-colors truncate">{primary}</p>
                    <p className="text-xs text-slate-500 font-semibold">{secondary}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-8 md:py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <RevealSection className="lg:col-span-7">
              <ContactForm form={form} errors={errors} submitted={submitted} setSubmitted={setSubmitted} isLoading={isLoading} user={user} isAuthenticated={isAuthenticated} handleChange={handleChange} handleSubmit={handleSubmit} />
            </RevealSection>

            <RevealSection className="lg:col-span-5 flex flex-col gap-4" delay={0.1}>
              {/* Headquarters Card with Dynamic Name & Address */}
              <div className="relative rounded-2xl overflow-hidden h-[220px] border border-slate-200/80 shadow-sm">
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt={companyName} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <span className="inline-block text-[10px] font-black tracking-[.12em] text-[#1E4E8C] bg-white/95 px-3 py-1 rounded-full uppercase mb-2 w-fit shadow-xs">Headquarters</span>
                  <h3 className="font-extrabold text-sm text-white mb-1">{companyName} Operations Center</h3>
                  <p className="text-xs text-slate-200 font-semibold">{addressVal}</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 mb-4"><div className="p-2 rounded-xl bg-[#E6F0FA]"><Clock className="w-4 h-4 text-[#1E4E8C]" /></div><h4 className="font-black text-xs text-slate-900 uppercase tracking-[.1em]">Office Hours</h4></div>
                <ul className="space-y-2.5">
                  {OFFICE_HOURS.map(([day, time], idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs pb-2.5 border-b border-slate-100 last:border-0 last:pb-0"><span className="text-slate-500 font-semibold">{day}</span><span className="font-black text-slate-900">{time}</span></li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Social Community Links */}
              <div className="bg-gradient-to-br from-[#E6F0FA] to-[#F0F6FF] border border-[#1E4E8C]/15 rounded-2xl p-5 shadow-xs">
                <h4 className="font-black text-xs text-slate-900 mb-1.5">Join Our Community</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">Follow {companyName} on social channels for instant support & updates.</p>
                <div className="flex gap-2.5 flex-wrap">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-xl bg-white border border-[#1E4E8C]/20 text-[#1E4E8C] flex items-center justify-center hover:bg-[#1E4E8C] hover:text-white hover:border-[#1E4E8C] transition-all duration-200 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* MODERN SPLIT-LAYOUT SECTION: FAQ (LEFT) + SUPPORT & GUARANTEE BANNER (RIGHT) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 border-t border-slate-200/60 relative overflow-hidden">
        {/* Subtle Ambient Background Accents */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#1E4E8C]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: FAQ Accordion (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <RevealSection>
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 text-xs font-black text-[#1E4E8C] uppercase tracking-widest bg-[#E6F0FA] px-4 py-1.5 rounded-full border border-[#1E4E8C]/20 shadow-xs">
                    <QuestionIcon className="w-4 h-4 text-[#1E4E8C]" />
                    Help & FAQ Center
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                    Quick answers to common support queries regarding service bookings, verified technicians, pricing, and protection coverage.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={0.08}>
                <div className="space-y-3.5 pt-2">
                  {FAQS.map((faq, i) => {
                    const isOpen = activeFaq === i;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? "bg-white border-[#1E4E8C]/40 shadow-lg shadow-[#1E4E8C]/5 ring-1 ring-[#1E4E8C]/20"
                            : "bg-white/90 backdrop-blur-md border-slate-200/90 hover:border-slate-300 hover:bg-white shadow-xs"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveFaq(isOpen ? null : i)}
                          className="w-full flex items-center justify-between gap-4 p-5 text-left outline-none cursor-pointer group"
                        >
                          <div className="flex items-center gap-3.5">
                            <span className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center text-xs font-black transition-all ${
                              isOpen ? "bg-[#1E4E8C] text-white" : "bg-[#E6F0FA] text-[#1E4E8C] group-hover:bg-[#1E4E8C]/15"
                            }`}>
                              0{i + 1}
                            </span>
                            <div>
                              <span className="text-[10px] font-black text-[#1E4E8C] uppercase tracking-wider block mb-0.5">
                                {faq.category}
                              </span>
                              <span className={`text-sm md:text-base font-extrabold transition-colors ${
                                isOpen ? "text-[#1E4E8C]" : "text-slate-900 group-hover:text-[#1E4E8C]"
                              }`}>
                                {faq.question}
                              </span>
                            </div>
                          </div>

                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen ? "bg-[#E6F0FA] text-[#1E4E8C] rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                          }`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-3 text-sm font-medium text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </RevealSection>
            </div>

            {/* RIGHT COLUMN: Interactive Support & Trust Banner (5 Cols, Sticky) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <RevealSection delay={0.12}>
                <div className="bg-gradient-to-br from-[#1E4E8C] via-[#153B6C] to-[#0E284A] rounded-3xl p-7 text-white shadow-xl shadow-[#1E4E8C]/20 relative overflow-hidden space-y-6">
                  {/* Background Decorative Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/15 px-3.5 py-1.5 rounded-full border border-white/20 text-white backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      Instant Assistance
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                      Still have questions or need custom service help?
                    </h3>
                    <p className="text-xs font-medium text-slate-200 leading-relaxed">
                      Our dedicated support team is available 24/7. Get in touch directly via Live Chat or Hotline for booking assistance.
                    </p>
                  </div>

                  {/* Trust Highlights */}
                  <div className="space-y-3.5 pt-2 relative z-10 border-t border-white/15">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/10 rounded-xl text-emerald-400 border border-white/10 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">100% Service Protection</h4>
                        <p className="text-[11px] text-slate-300 font-medium">Covered up to ৳10,000 against damage.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/10 rounded-xl text-amber-300 border border-white/10 shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">4-Hour Response Time</h4>
                        <p className="text-[11px] text-slate-300 font-medium">Guaranteed swift customer care reply.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/10 rounded-xl text-blue-300 border border-white/10 shrink-0">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Verified Technician Network</h4>
                        <p className="text-[11px] text-slate-300 font-medium">NID & Background checked experts.</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 relative z-10">
                    <Link
                      href="/dashbord/live-chat"
                      className="flex-1 px-5 py-3.5 bg-white hover:bg-slate-100 text-[#1E4E8C] rounded-2xl text-xs font-black uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Start Live Chat
                    </Link>
                    <a
                      href={`tel:${phoneVal.replace(/[^0-9+]/g, '')}`}
                      className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-black uppercase tracking-wider border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <Phone className="w-4 h-4" />
                      Call Hotline
                    </a>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}