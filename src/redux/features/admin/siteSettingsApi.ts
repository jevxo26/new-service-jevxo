import { baseApi } from '@/redux/api/baseApi';

export interface SiteSettingsData {
  id?: number;
  companyName?: string;
  logoUrl?: string;
  faviconUrl?: string;
  email?: string;
  supportEmail?: string;
  phone?: string;
  altPhone?: string;
  address?: string;
  cityLocation?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  whatsappNumber?: string;
  metaTitle?: string;
  metaDescription?: string;
  footerDescription?: string;
}

export const siteSettingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSiteSettings: builder.query<{ statusCode: number; message: string; data: SiteSettingsData }, void>({
      query: () => '/logo',
      providesTags: ['SiteSettings'],
    }),
    updateSiteSettings: builder.mutation<{ statusCode: number; message: string; data: SiteSettingsData }, SiteSettingsData>({
      query: (data) => ({
        url: '/logo',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['SiteSettings'],
    }),
  }),
});

export const { useGetSiteSettingsQuery, useUpdateSiteSettingsMutation } = siteSettingsApi;
