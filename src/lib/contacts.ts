// Central place for contact details so the navbar, contact section, and
// footer all stay in sync. Update here once.
export const CONTACTS = {
  nurina: {
    name: 'Nurina Patel',
    role: 'Co-Founder',
    phone: '082 855 4498',
    phoneRaw: '27828554498',
    email: 'info@aqualab1.co.za',
  },
  muhammed: {
    name: 'Muhammed Halim',
    role: 'Co-Founder',
    /** Voice / call-only line */
    phone: '081 053 9335',
    phoneRaw: '27810539335',
    /** Primary WhatsApp for dealership & general enquiries */
    whatsapp: '061 519 4070',
    whatsappRaw: '27615194070',
  },
  email: 'info@aqualab1.co.za',
  location: 'Banghalor Drive, Ext 11 Lenasia, Johannesburg, Gauteng, South Africa',
  company: 'Specially packaged by Aqualabh2o Pty Ltd',
  accreditation: 'SANAS Compliant - South African National Accreditation System',
  sourceAccuracy: 'Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source.',
  instagram: 'https://www.instagram.com/aqualab_h20?igsh=djU0cHppMHZqMnMx',
  foundedYear: '2024',
};

export function whatsappLink(phoneRaw: string, message: string) {
  return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function telLink(phoneRaw: string) {
  return `tel:+${phoneRaw}`;
}

export function buildWebsiteEnquiryMessage(params: {
  name: string;
  contact: string;
  enquiryLabel: string;
  message: string;
  representative: string;
  attachmentName?: string;
}) {
  const lines = [
    'Hello AquaLab! I would like to make an inquiry from the website:',
    `- Name: ${params.name}`,
    `- Contact: ${params.contact}`,
    `- Preferred Representative: ${params.representative}`,
    `- Enquiry Type: ${params.enquiryLabel}`,
    `- Message: ${params.message}`,
  ];
  if (params.attachmentName) {
    lines.push(`- Attachment: ${params.attachmentName} (please attach this file in chat)`);
  }
  return lines.join('\n');
}
