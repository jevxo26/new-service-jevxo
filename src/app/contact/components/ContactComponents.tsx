"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, MessageSquare, Shield, Headphones,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const TRUST_BARS = [
  { icon: Shield, text: "100% Encrypted Enquiry" },
  { icon: Headphones, text: "Dedicated Support Specialist" },
  { icon: MessageSquare, text: "Response Within 4 Hours" },
];

export const FAQS = [
  {
    category: "Booking & Services",
    question: "How do I schedule a service?",
    answer: "Browse our verified service catalog, select your required package, and choose your convenient date/time slot. A background-checked professional will be dispatched to your location."
  },
  {
    category: "Safety & Quality",
    question: "What background checks do your service providers undergo?",
    answer: "Every service professional undergoes mandatory NID/biometric verification, police background verification, and hands-on technical skill certification before joining our network."
  },
  {
    category: "Pricing & Payments",
    question: "Are there any hidden costs or cancellation fees?",
    answer: "No. All prices are transparently displayed before booking. You can reschedule or cancel any booking free of charge up to 2 hours prior to your scheduled slot."
  },
  {
    category: "Warranty & Guarantee",
    question: "What protection guarantee do you provide for completed jobs?",
    answer: "All services booked through our platform come with a 7-day service warranty and up to ৳10,000 protection coverage against accidental property damage."
  },
  {
    category: "Customer Support",
    question: "How can I reach support for an urgent issue during an active job?",
    answer: "You can call our 24/7 hotline directly or use the instant Live Chat feature inside your dashboard for real-time priority assistance."
  }
];

export const OFFICE_HOURS = [
  ["Saturday – Thursday", "9:00 AM – 6:00 PM"],
  ["Friday Hotline Support", "10:00 AM – 2:00 PM"],
  ["Urgent Appliance Repairs", "24/7 Priority Dispatch"]
];

export function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, ease: "easeOut", delay }} className={className}>
      {children}
    </motion.div>
  );
}
