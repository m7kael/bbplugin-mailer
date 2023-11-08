# Mailer
Smpt mail automaiton plugin for Budibase. 

# Description
This is a automation plugin for Budibase that integrates Nodemailer with Svelte Email. Send custom emails with smtp 

## Installation
To install the plugin for Budibase, follow these steps:

1. Copy the repository link 'https://github.com/m7kael/bbplugin-mailer.git'.
2. Open Budibase and navigate to the "Plugins" section.
3. Click add plugin.
4. Select GitHub source.
5. Put the link in the URL section

## Use

After the installation the plugin is ready to use with automations. Just enter the settings for your email provider and start sending mails. 

<b>Fields</b>

- <b>Host</b> - Your email provider smpt server (example smpt.mail.com)
- <b>Port</b> - Your email provider port (example 465)
- <b>User</b> - The username for auth 
- <b>Pass</b> - The password for auth
- <b>Email to</b> - The recipents, comma separated when multiple (example user@mail.com, user2@mail.com,...)
- <b>Email cc</b> - The cc recipents, same as email to
- <b>Email from</b> - the email to send from
- <b>Subject</b> - Subject of the email
- <b>Html</b> - The email content in html

Select attachment if to include attachment
- <b>Attachment</b> - The attachment, for example base64 string
- <b>Attachment name</b> - The name of the attachment (example attachment.pdf)
- <b>Attachment type</b> - The type of the attachment (example base64)

Example
<p><img src="src/images/screenshot.png"></p>

## Instructions

To build your new  plugin run the following in your Budibase CLI:
```
budi plugins --build
```

You can also re-build everytime you make a change to your plugin with the command:
```
budi plugins --watch
```
# bbplugin-mailer
