// for now this is not all compalte 
// in the future i may add more featrue for the email just in case if I will bulid the template i will use the react-email package

import { Resend } from "resend";
import { EmailTemplate } from "app/_components/email-template";
const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['aoshap89@gmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};