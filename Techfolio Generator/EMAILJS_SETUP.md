# EmailJS Setup Guide

This guide will help you set up EmailJS to make your contact form functional.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Message from {{from_name}} Hello, You have received a
new message from your portfolio website: Name: {{from_name}} Email:
{{from_email}} Subject: {{subject}} Message: {{message}} --- This message was
sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key_here",
  SERVICE_ID: "your_actual_service_id_here",
  TEMPLATE_ID: "your_actual_template_id_here",
  TO_EMAIL: "kplcm27@gmail.com", // Your email address
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email to see if you received the message

## Troubleshooting

- **Form not sending**: Check that all credentials are correct in the config file
- **Email not received**: Check your spam folder and EmailJS dashboard for delivery status
- **CORS errors**: Make sure you're using the correct public key

## Security Notes

- The public key is safe to expose in client-side code
- Never share your private keys or service credentials
- EmailJS has rate limits on free accounts (200 emails/month)

## Alternative: Environment Variables

For better security, you can use environment variables:

1. Create a `.env` file in your project root:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

2. Update the config file:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  TO_EMAIL: "kplcm27@gmail.com",
};
```

3. Add `.env` to your `.gitignore` file to keep credentials private
