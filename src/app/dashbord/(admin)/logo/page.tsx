"use client";

import { useState, useEffect } from "react";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Upload,
  Save,
  RefreshCw,
  ShieldAlert,
  Share2,
  MessageSquare,
  Sparkles,
  Search,
  CheckCircle2,
} from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { uploadImage } from "@/lib/upload";
import { useGetSiteSettingsQuery, useUpdateSiteSettingsMutation } from "@/redux/features/admin/siteSettingsApi";

export default function CompanyBrandingPage() {
  const lang = useAppSelector((state) => state.lang.value);
  const role = useAppSelector((state) => state.auth.role) || "superadmin";

  const { data: settingsRes, isLoading: isFetching, refetch } = useGetSiteSettingsQuery();
  const [updateSettings, { isLoading: isSaving }] = useUpdateSiteSettingsMutation();
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    companyName: "",
    logoUrl: "",
    faviconUrl: "",
    email: "",
    supportEmail: "",
    phone: "",
    altPhone: "",
    address: "",
    cityLocation: "",
    facebookUrl: "",
    instagramUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    youtubeUrl: "",
    whatsappNumber: "",
    metaTitle: "",
    metaDescription: "",
    footerDescription: "",
  });

  useEffect(() => {
    if (settingsRes?.data) {
      setFormData((prev) => ({ ...prev, ...settingsRes.data }));
    }
  }, [settingsRes]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: "logoUrl" | "faviconUrl") => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Instant local preview
    const localPreviewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, [fieldName]: localPreviewUrl }));

    setIsUploading(true);
    try {
      const cloudUrl = await uploadImage(file);
      if (cloudUrl) {
        setFormData((prev) => ({ ...prev, [fieldName]: cloudUrl }));
        toast.success(lang === "bn" ? "ইমেজ আপলোড সফল হয়েছে!" : "Image uploaded successfully!");
      }
    } catch (err: any) {
      toast.error(err?.message || "Error uploading image.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateSettings(formData).unwrap();
      toast.success(lang === "bn" ? "কোম্পানির তথ্য সফলভাবে সেভ করা হয়েছে!" : "Company details saved successfully!");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to save company settings.");
    }
  };

  if (role !== "superadmin") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-center">
        <div className="p-4 bg-[#E6F0FA] rounded-2xl text-[#1E4E8C] mb-4">
          <ShieldAlert size={48} />
        </div>
        <h3 className="text-xl font-bold text-slate-800">{lang === "bn" ? "অ্যাক্সেস অস্বীকৃত" : "Access Denied"}</h3>
        <p className="text-sm text-slate-500 mt-2 max-w-sm">This panel is restricted to Administrators.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSave} className="space-y-8 w-full max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-3 duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#E6F0FA] text-[#1E4E8C] rounded-2xl shadow-sm border border-[#1E4E8C]/10">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {lang === "bn" ? "কোম্পানি ব্র্যান্ডিং ও সেটিংস" : "Company Branding & Settings"}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {lang === "bn"
                ? "কোম্পানির পরিচয়, লোগো, ইমেইল, ফোন নম্বর, ঠিকানা ও সোশ্যাল মিডিয়া লিঙ্ক ম্যানেজ করুন।"
                : "Manage global company identity, logo assets, contacts, physical address, and SEO metadata."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => refetch()}
            className="p-3 bg-white hover:bg-slate-50 text-slate-600 rounded-2xl border border-slate-200 shadow-sm transition-all flex items-center justify-center active:scale-95"
            title="Refresh settings"
          >
            <RefreshCw className={`w-4 h-4 ${isFetching ? "animate-spin" : ""}`} />
          </button>
          <button
            type="submit"
            disabled={isSaving || isUploading}
            className="px-8 py-3 bg-[#1E4E8C] hover:bg-[#123C73] text-white rounded-2xl text-xs font-extrabold tracking-wide transition-all shadow-md shadow-[#1E4E8C]/20 flex items-center gap-2.5 active:scale-95 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isSaving ? (lang === "bn" ? "সেভ হচ্ছে..." : "Saving Changes...") : lang === "bn" ? "পরিবর্তনসমূহ সেভ করুন" : "Save All Changes"}
          </button>
        </div>
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Branding Assets & Identity (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Logo & Favicon Card */}
          <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm space-y-5">
            <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1E4E8C]" />
              {lang === "bn" ? "কোম্পানি লোগো ও ব্র্যান্ডিং" : "Logo & Brand Assets"}
            </h3>

            {/* Logo Preview Container */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[160px] relative group overflow-hidden">
              <img
                src={formData.logoUrl || "/services.png"}
                alt="Company Logo Preview"
                className="max-h-20 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/services.png";
                }}
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-0.5 bg-slate-900/70 backdrop-blur-md rounded-md text-[9px] text-white font-mono">
                {formData.logoUrl ? "Custom Logo" : "Default Logo"}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Logo Image URL</label>
                <input
                  type="text"
                  name="logoUrl"
                  value={formData.logoUrl}
                  onChange={handleChange}
                  placeholder="https://example.com/logo.png"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-mono text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>

              <label className="flex items-center justify-center gap-2 px-4 py-3 bg-[#E6F0FA] hover:bg-[#E6F0FA]/80 text-[#1E4E8C] rounded-2xl cursor-pointer transition-all text-xs font-bold border border-[#1E4E8C]/10">
                <Upload className="w-4 h-4" />
                {isUploading ? "Uploading file..." : "Upload New Logo File"}
                <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "logoUrl")} className="hidden" />
              </label>
            </div>
          </div>

          {/* General Information Card */}
          <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm space-y-5">
            <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1E4E8C]" />
              {lang === "bn" ? "কোম্পানি পরিচিতি" : "Company Identity"}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Official Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Jevxo Services"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all font-semibold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Footer Description / Bio</label>
                <textarea
                  name="footerDescription"
                  rows={4}
                  value={formData.footerDescription}
                  onChange={handleChange}
                  placeholder="Write a brief overview of your platform for the footer section..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Contact & Locations & Socials (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Contact Details Card */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-5">
            <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-3">
              <Phone className="w-4 h-4 text-[#1E4E8C]" />
              {lang === "bn" ? "যোগাযোগ ও কন্টাক্ট ইনফরমেশন" : "Contact & Support Information"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1E4E8C]" /> Primary Official Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="info@jevxo.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1E4E8C]" /> Support Email
                </label>
                <input
                  type="email"
                  name="supportEmail"
                  value={formData.supportEmail}
                  onChange={handleChange}
                  placeholder="support@jevxo.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#1E4E8C]" /> Primary Hotline Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1613-410880"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Support Number
                </label>
                <input
                  type="text"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder="+8801613410880"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Physical Location Card */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-5">
            <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-3">
              <MapPin className="w-4 h-4 text-[#1E4E8C]" />
              {lang === "bn" ? "ঠিকানা ও হেড অফিস লোকেশন" : "Physical Address & Headquarters"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Head Office Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House #42, Road #11, Block-F, Banani, Dhaka-1213"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">City / Region</label>
                <input
                  type="text"
                  name="cityLocation"
                  value={formData.cityLocation}
                  onChange={handleChange}
                  placeholder="Dhaka, Bangladesh"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Social Profiles Card */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-5">
            <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-3">
              <Share2 className="w-4 h-4 text-[#1E4E8C]" />
              {lang === "bn" ? "সোশ্যাল মিডিয়া লিঙ্কসমূহ" : "Social Media Profiles"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Facebook Page URL</label>
                <input
                  type="text"
                  name="facebookUrl"
                  value={formData.facebookUrl}
                  onChange={handleChange}
                  placeholder="https://facebook.com/jevxo"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">Instagram Profile URL</label>
                <input
                  type="text"
                  name="instagramUrl"
                  value={formData.instagramUrl}
                  onChange={handleChange}
                  placeholder="https://instagram.com/jevxo"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">LinkedIn Profile URL</label>
                <input
                  type="text"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/company/jevxo"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1.5">YouTube Channel URL</label>
                <input
                  type="text"
                  name="youtubeUrl"
                  value={formData.youtubeUrl}
                  onChange={handleChange}
                  placeholder="https://youtube.com/@jevxo"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 focus:outline-none focus:border-[#1E4E8C] focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
