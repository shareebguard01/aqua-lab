// Central place for contact details so the navbar, contact section, and
// footer all stay in sync. Update here once.
export const CONTACTS = {
  nurina: {
    name: 'Nurina Patel',
    role: 'Co-Founder',
    phone: '082 855 4498',
    phoneRaw: '27828554498',
  },
  muhammed: {
    name: 'Muhammed Halim',
    role: 'Co-Founder',
    phone: '081 053 9335',
    phoneRaw: '27810539335',
  },
  email: 'info@aqualab1.co.za',
  location: 'Banghalor Drive, Ext 11 Lenasia, Johannesburg, Gauteng, South Africa',
  company: 'Specially packaged by Aqualabh2o Pty Ltd',
  accreditation: 'SANAS Approved - South African National Accreditation System',
  sourceAccuracy: 'Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source.',
  instagram: 'https://www.instagram.com/aqualab_h20?igsh=djU0cHppMHZqMnMx',
  foundedYear: '2024',
};

export function whatsappLink(phoneRaw: string, message: string) {
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`;
}
