const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "17P31A0593@acet.ac.in",
    subject: "Thanks for joining in!",
    text: `Welcome to the app,${name}. let me know how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "17P31A0593@acet.ac.in",
    subject: "Sorry to see u go!",
    text: `Goodbye,${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail: sendWelcomeEmail,
  sendCancelEmail: sendCancelEmail,
};
