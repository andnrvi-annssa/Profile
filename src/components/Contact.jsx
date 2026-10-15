import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { personal, social } from '../data/portfolioData.js'
import { getIcon } from '../utils/iconMap.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Tulis nama Anda (minimal 2 huruf).'
  if (!emailPattern.test(values.email.trim())) errors.email = 'Tulis alamat email yang valid, mis. nama@email.com.'
  if (values.message.trim().length < 10) errors.message = 'Tulis pesan minimal 10 karakter.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  // Tanpa backend: pesan dikirim lewat aplikasi email pengguna (mailto:).
  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setNotice('')
      return
    }
    const subject = `Pesan dari website portfolio — ${values.name.trim()}`
    const body = `Nama: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setNotice(
      'Aplikasi email Anda akan terbuka dengan pesan yang sudah terisi. Pesan baru terkirim setelah Anda menekan tombol kirim di aplikasi email tersebut.',
    )
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `field ${errors[name] ? '!border-rose-600' : ''}`,
  })

  const errorText = (name) =>
    errors[name] ? (
      <p id={`contact-${name}-error`} className="mt-1.5 text-sm text-rose-700 dark:text-rose-300">
        {errors[name]}
      </p>
    ) : null

  return (
    <Section
      id="contact"
      title="Let's Connect"
      intro="Terbuka untuk berdiskusi tentang magang, kolaborasi project, organisasi, atau kesempatan belajar."
      tone="tint"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="space-y-8 lg:col-span-5">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Email</h3>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 break-all font-medium text-accent-ink underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              <Mail size={18} aria-hidden="true" /> {personal.email}
            </a>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Online</h3>
            <ul className="space-y-2">
              {social.map((s) => {
                const Icon = getIcon(s.icon)
                return (
                  <li key={s.id}>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 font-medium transition-colors hover:border-accent hover:text-accent-ink"
                      >
                        <Icon size={18} aria-hidden="true" /> {s.label}
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-line px-4 py-3 text-muted"
                      >
                        <span className="flex items-center gap-3">
                          <Icon size={18} aria-hidden="true" /> {s.label}
                        </span>
                        <span className="text-xs">Segera tersedia</span>
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            aria-label="Formulir kontak"
            className="space-y-5 rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8"
          >
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input type="text" autoComplete="name" {...fieldProps('name')} />
              {errorText('name')}
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input type="email" autoComplete="email" {...fieldProps('email')} />
              {errorText('email')}
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea rows={5} {...fieldProps('message')} />
              {errorText('message')}
            </div>

            <button type="submit" className="btn btn-primary">
              <Send size={16} aria-hidden="true" /> Send Message
            </button>

            <p className="text-xs leading-relaxed text-muted">
              Formulir ini tidak menyimpan pesan di server. Tombol kirim membuka aplikasi email Anda dengan pesan yang sudah terisi.
            </p>
            <p role="status" aria-live="polite" className="text-sm font-medium text-accent-ink">
              {notice}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
