// Contact Form API Endpoint
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, organization, interest, message } = req.body

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    // Here you would typically:
    // 1. Send email via SendGrid, AWS SES, or similar
    // 2. Save to database
    // 3. Send to CRM (Salesforce, HubSpot, etc.)

    // Example with SendGrid (install: npm install @sendgrid/mail)
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: 'info@rcfi.co.ke',
      from: 'noreply@rcfi.co.ke',
      replyTo: email,
      subject: `Contact Form: ${interest} - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Organization: ${organization || 'Not provided'}
        Interest: ${interest}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    }

    await sgMail.send(msg)
    */

    // For now, just log the data (replace with actual email sending)
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      organization,
      interest,
      message,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again or email us directly.' 
    })
  }
}

// Rate limiting helper (optional)
// You can use packages like 'express-rate-limit' or implement your own
const rateLimit = new Map()

function checkRateLimit(ip) {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const max = 5 // max 5 requests per window

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  const record = rateLimit.get(ip)
  
  if (now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= max) {
    return false
  }

  record.count++
  return true
}