// Central place for contact details so the navbar, contact section, and
// footer all stay in sync. Update here once.
export const CONTACTS = {
  muhammed: {
    name: 'Muhammed Halim',
    role: 'Co-Founder',
    phone: '(+27) 081 053 9335',
    phoneRaw: '27810539335',
  },
  nurina: {
    name: 'Nurina Patel',
    role: 'Co-Founder',
    phone: '(+27) 082 555 4498',
    phoneRaw: '27825554498',
  },
  email: 'info@aqualab1.co.za',
  location: 'Johannesburg, South Africa',
};

export function whatsappLink(phoneRaw: string, message: string) {
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`;
}
