
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = ({bookingInfo}) => {

	const msg = {
		to: 'dorultanianosgyorgy@gmail.com',
		from: 'dorultanianosgyorgy@gmail.com',
		subject: `You have a new booking from ${bookingInfo.clientName}`,
		html: `<h2>A new booking from ${bookingInfo.clientName}</h2><br/><p>Client name: ${bookingInfo.clientName}</p><br/><p>Client Mobile: ${bookingInfo.clientMobile}<br/>Service: <bold>${bookingInfo.service.name}<bold/></p> Client Email: ${bookingInfo.clientEmail}`

	}

	sgMail

	.send(msg)

	.then(function(err, res){

		if(err) {
			return err;
		}

		console.log(res.statusCode);
		console.log(res.body);
		console.log(res.headers);
	})
 
}
