const nodemailer = require("nodemailer");

module.exports = async (toEmail, fromEmail, contentEmail, subjectEmail) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "dummysmtpac@gmail.com",
        pass: "katasandi123",
      },
    });

    const options = {
      from: fromEmail, // sender address
      to: toEmail, // list of receivers
      subject: subjectEmail, // Subject line
      text: contentEmail, // plain text body
      html: "<b>Hello world?</b>", // html body
    };

    let info = await transport.sendMail(options);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
};
