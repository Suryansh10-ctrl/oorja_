import { useEffect, useState } from 'react'

export default function LegacySite() {
  const [html, setHtml] = useState('')

  useEffect(() => {
    let cancelled = false

    async function mountLegacySite() {
      const response = await fetch('/site-body.html')
      const markup = await response.text()
      if (cancelled) return
      setHtml(markup)

      // Wait for React to commit the markup, then run the original site logic
      // in the browser so all existing interactions remain functional.
      requestAnimationFrame(() => {
        const script = document.createElement('script')
        script.src = '/legacy.js'
        script.dataset.oorjaLegacy = 'true'
        document.body.appendChild(script)
      })
    }

    mountLegacySite()
    return () => {
      cancelled = true
      document.querySelector('script[data-oorja-legacy="true"]')?.remove()
    }
  }, [])

  return <div id="oorja-app" dangerouslySetInnerHTML={{ __html: html }} />
}