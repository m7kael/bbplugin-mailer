import { AutomationStepInput } from "@budibase/types"
import nodemailer from 'nodemailer'

export default async function run({ inputs }: AutomationStepInput) {

  const transporter = nodemailer.createTransport({
    host: inputs.host,
    port: inputs.port,
    secure: true,
    auth: {
      user: inputs.user,
      pass: inputs.pass
    }
  })

  const options = {
    from: inputs.emailFrom,
    to: inputs.emailTo,
    subject: inputs.subject,
    html: inputs.html,
    attachments: [
      {
        filename: inputs.attachmentName,
        content: inputs.attachment,
        encoding: inputs.attachmentType
      }
    ]
  }
  
  try {
    const info = await transporter.sendMail(options);
    const message = JSON.stringify(info);
    console.log(message);
    return {
      success: true,
      message,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Error sending email: ' + error,
    };
  }
  
}
