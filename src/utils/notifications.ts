import { COMPANY_INFO } from '../data/content';

interface NotificationPayload {
  formType: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  date?: string;
  time?: string;
  message?: string;
}

export async function sendInquiryNotification(data: NotificationPayload) {
  // 1. Primary: Send Email via FormSubmit AJAX API directly to luminex.tech.rw@gmail.com
  try {
    await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `🚨 Luminex New Inquiry: ${data.formType} - ${data.name}`,
        Form_Type: data.formType,
        Client_Name: data.name,
        Email_Address: data.email,
        Phone_WhatsApp: data.phone,
        Company_Organization: data.company || 'N/A',
        Project_Type: data.projectType || 'N/A',
        Budget_Estimate: data.budget || 'N/A',
        Timeline: data.timeline || 'N/A',
        Preferred_Date: data.date || 'N/A',
        Preferred_Time: data.time || 'N/A',
        Client_Message: data.message || 'N/A'
      })
    });
  } catch (err) {
    console.error('Email notification dispatch error:', err);
  }

  // 2. Simultaneous Secondary: Pre-filled WhatsApp notification to Phone (+250 781 367 769)
  const whatsappText = `*🚨 New Luminex Project Inquiry*
--------------------------------
*Form:* ${data.formType}
*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
${data.company ? `*Organization:* ${data.company}\n` : ''}${data.projectType ? `*Project:* ${data.projectType}\n` : ''}${data.budget ? `*Budget:* ${data.budget}\n` : ''}${data.timeline ? `*Timeline:* ${data.timeline}\n` : ''}${data.date ? `*Date/Time:* ${data.date} at ${data.time}\n` : ''}${data.message ? `*Message:* ${data.message}\n` : ''}
--------------------------------
*Website:* https://luminex.rw`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(whatsappText)}`;
  
  // Open pre-filled WhatsApp alert on user phone/desktop window
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
