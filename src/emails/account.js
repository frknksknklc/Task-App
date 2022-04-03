const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, // Change to your recipient
        from: 'furkankeskinkilic97@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: `Welcome to my app, ${name}. Let me know you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from : 'furkankeskinkilic97@gmail.com',
        subject: 'Sorry to see you go!',
        text: `GoodBye ${name}. I hope to see you back soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


