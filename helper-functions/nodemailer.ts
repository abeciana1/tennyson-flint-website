import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { ContactFormDataI } from '@/definitions/interfaces/_sections'

export const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDR,
    pass: process.env.EMAIL_PASS,
  }
})

export const sendEmail = async ({
  firstName,
  lastName,
  email,
  textBody,
}: ContactFormDataI) => {
  const mailOptions: Mail.Options = {
    from: email, // process.env.MY_EMAIL,
    to: process.env.EMAIL_ADDR,
    subject: `Message from ${firstName} ${lastName}`,
    text: textBody,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });
  await sendMailPromise();
}