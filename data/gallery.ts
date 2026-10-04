export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'semua' | 'kegiatan-belajar' | 'pembinaan' | 'keberangkatan';
}

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    src: '/placeholder-1.jpg',
    alt: 'Kegiatan Belajar Bahasa Jepang',
    caption: 'Foto akan ditambahkan setelah izin LPK',
    category: 'kegiatan-belajar',
  },
  {
    id: '2',
    src: '/placeholder-2.jpg',
    alt: 'Pembinaan Mental dan Fisik',
    caption: 'Foto akan ditambahkan setelah izin LPK',
    category: 'pembinaan',
  },
  {
    id: '3',
    src: '/placeholder-3.jpg',
    alt: 'Persiapan Keberangkatan',
    caption: 'Foto akan ditambahkan setelah izin LPK',
    category: 'keberangkatan',
  },
  {
    id: '4',
    src: '/placeholder-4.jpg',
    alt: 'Kelas Bahasa Jepang',
    caption: 'Foto akan ditambahkan setelah izin LPK',
    category: 'kegiatan-belajar',
  },
  {
    id: '5',
    src: '/placeholder-5.jpg',
    alt: 'Pembinaan Budaya Kerja',
    caption: 'Foto akan ditambahkan setelah izin LPK',
    category: 'pembinaan',
  },
  {
    id: '6',
    src: '/placeholder-6.jpg',
    alt: 'Persiapan Berangkat ke Jepang',
    caption: 'Foto akan ditambahkan setelah izin LPK',
    category: 'keberangkatan',
  },
];
