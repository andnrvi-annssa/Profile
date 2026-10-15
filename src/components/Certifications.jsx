import { useState } from 'react'
import { Award, Eye, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolioData.js'
import { assetUrl } from '../utils/assetUrl.js'
import { useImageStatus } from '../hooks/useImageStatus.js'
import Reveal from './Reveal.jsx'
import SafeImage from './SafeImage.jsx'
import Lightbox from './Lightbox.jsx'

function CertificationCard({ cert }) {
  const [index, setIndex] = useState(null)
  const status = useImageStatus(cert.image)
  const ready = status === 'ok'

  return (
    <article className="grid gap-8 rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        {ready ? (
          <button
            type="button"
            onClick={() => setIndex(0)}
            aria-label={`Perbesar sertifikat ${cert.title}`}
            className="block w-full overflow-hidden rounded-xl border border-line bg-white p-2 shadow-lift transition-transform duration-300 hover:scale-[1.01]"
          >
            <SafeImage src={cert.image} alt={`Sertifikat ${cert.title}`} className="h-auto w-full rounded-lg" />
          </button>
        ) : (
          <SafeImage
            src=""
            alt={`Sertifikat ${cert.title}`}
            fallbackLabel="File sertifikat belum ditambahkan"
            fallbackIcon={Award}
            className="aspect-[4/3] w-full rounded-xl border border-dashed border-accent/50"
          />
        )}
      </div>

      <div className="flex flex-col justify-center lg:col-span-5">
        <span className="chip w-fit border-accent/40 bg-accent/10 text-accent-ink">Certification — {cert.year}</span>
        <h4 className="mt-4 text-2xl font-semibold leading-snug">{cert.title}</h4>
        <p className="mt-2 font-medium text-accent-ink">{cert.issuer}</p>
        {cert.description && <p className="mt-3 text-sm leading-relaxed text-ink/85">{cert.description}</p>}
        {cert.showCredentialId && cert.credentialId && (
          <p className="mt-3 text-sm text-muted">No. sertifikat: {cert.credentialId}</p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {ready ? (
            <>
              <button type="button" className="btn btn-primary" onClick={() => setIndex(0)}>
                <Eye size={16} aria-hidden="true" /> View Certificate
              </button>
              <a href={assetUrl(cert.image)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View Full Image <ExternalLink size={14} aria-hidden="true" />
              </a>
            </>
          ) : (
            <>
              <button type="button" disabled className="btn btn-disabled">
                <Eye size={16} aria-hidden="true" /> View Certificate
              </button>
              <button type="button" disabled className="btn btn-disabled">
                View Full Image
              </button>
            </>
          )}
        </div>
        {!ready && status !== 'loading' && (
          <p className="mt-3 text-xs text-muted">
            Tombol aktif otomatis setelah file sertifikat diletakkan di folder public/images/certificates/.
          </p>
        )}
      </div>

      <Lightbox
        items={[{ src: cert.image, title: cert.title, caption: `${cert.issuer} — ${cert.year}` }]}
        index={index}
        onClose={() => setIndex(null)}
        onChange={setIndex}
      />
    </article>
  )
}

export default function Certifications() {
  const items = certifications.filter((c) => c.visible !== false)
  if (!items.length) return null
  return (
    <div>
      <Reveal>
        <h3 className="mb-6 text-2xl font-semibold">Certification</h3>
      </Reveal>
      <div className="space-y-8">
        {items.map((cert) => (
          <Reveal key={cert.id}>
            <CertificationCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
