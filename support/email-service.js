const sgMail = require("@sendgrid/mail");


module.exports.sendEmail = async function (message) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const email = "info@mintitmedia.com"
  const msg = {
    text: message,
    html: message,
    subject: "Pump Status | Water Irrigation System",
    from: email,
    to: email,
  };
  
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(msg)
    console.log(error)
  }
};
