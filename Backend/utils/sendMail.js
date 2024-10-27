import nodemailer from "nodemailer";

async function sendMail(email, subject, emailHTML) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: `"Get Notify" ${process.env.GETNOTIFY_EMAIL}`,
      to: email,
      subject: subject,
      html: emailHTML,
    });
  } catch (err) {
    console.log(err);
  }
}

export default sendMail;
