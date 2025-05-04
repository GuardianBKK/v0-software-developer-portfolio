'use client'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function EmailSender() {
    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
        .sendForm('service_a9d2ixs', 'template_nicuui8', form.current, 'eW2iyG1ICeVvRiZfG')
        .then(() => {
        alert('Message sent successfully!')
        form.current?.reset()
        })
        .catch((error) => {
        console.error('EmailJS error:', error)
        alert('Failed to send message.')
        })
    }

    return (
    <form ref={form} onSubmit={sendEmail} className="grid gap-4">
        <input name="user_name" type="text" placeholder="Your name" required className="border p-2" />
        <input name="user_email" type="email" placeholder="Your email" required className="border p-2" />
        <textarea name="message" placeholder="Your message" required className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
    </form>
    )
}
