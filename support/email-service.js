const sgMail = require("@sendgrid/mail");
const logger = require("./logger")("plants-email");

module.exports.sendEmail = async function (message) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const email = "info@mintitmedia.com";
  const msg = {
    text: message,
    html: message,
    subject: "Pump Status | Water Irrigation System",
    from: email,
    to: email,
  };

  try {
    logger.info("email sent");
    await sgMail.send(msg);
  } catch (error) {
    logger.error(msg, error);
  }
};
