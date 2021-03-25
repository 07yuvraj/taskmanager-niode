const sgMail = require('@sendgrid/mail')

const sendgridAPIkey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIkey)

const sendWelcomeMail = (email, name) => {
    const msg = {
        to: email,
        from: 'yuvi.alphaai@gmail.com',
        subject: 'Welcome to task manager',
        text: 'hello',
        html: `<strong>Hey ${name}! Welcome to task manager app</strong>`,
    }
    sgMail.send(msg)
}

const sendDeleteMail = (email, name) => {
    const msg = {
        to: email,
        from: 'yuvi.alphaai@gmail.com',
        subject: 'Account deleted successfully',
        text: 'hello',
        html: `<strong>Hey ${name}! Your account has been deleted successfully.<br>Help us enhance our facilities by sharing your experience with us.</strong>`,
    }
    sgMail.send(msg)
}

module.exports = {
    sendWelcomeMail,
    sendDeleteMail
}