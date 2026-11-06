# PARC — Perfect Accident Repair Centre

This is the Astro source for the Ennis website redesign. It builds to static HTML, CSS and JavaScript. No Astro server is needed to host the built site. The supplied Toyota film and archival photographs are included as local assets.

```sh
npm ci
npm run dev
npm run build
npm run verify
npm run preview
```

Use Node 22.12 or newer. Scroll down through the homepage and back up to review the film. The first half takes the car apart, and the second half reverses the same frames to put it back together. Scroll position selects the frame drawn on the canvas and reveals links to separate pages. The device’s reduced-motion setting removes decorative transitions. The browser loads nearby WebP frame sheets as needed.

To regenerate the 25 frame sheets from the ten-second MP4, run FFmpeg from the project root.

```sh
ffmpeg -y -i public/assets/toyota-yaris-cross.mp4 -vf "fps=20,scale=960:540:flags=lanczos,tile=4x2" -an -c:v libwebp -quality 72 -compression_level 4 -start_number 0 "public/assets/film/frames-%02d.webp"
```

## Static hosting and launch

- Upload the contents of `dist/` to the document root, including hidden files. Apache/cPanel can use the supplied `.htaccess` for HTTP 301 redirects and security headers. If your host disallows the `Options` directive, remove that directive and disable indexes in the hosting panel. Hosts that support `_redirects` can use that file. The old page paths also have static redirect documents as a fallback. Check the actual 301 responses on the target host.
- The private preview is set to noindex. Set `PARC_SITE_URL` to the confirmed canonical domain and `PUBLIC_PARC_LAUNCH=true` only after the launch checks. For production builds, a valid estimate endpoint is required. Review `.env.example`.
- The address, Eircode, phone, recovery number and email were corroborated by the existing website and a [repair network listing](https://www.123.ie/car-insurance/approved-repairer-network-map). Confirm hours with PARC: the [legacy About page](https://www.parc.ie/about.html) and site footer list weekdays 8–5, while the [legacy contact page](https://www.parc.ie/contact.html) lists 8–6 and Saturday by appointment. The preview follows the brief’s 8–5 hours.
- The preview reuses photographs from the original site. Confirm permission to republish them and check for any plates, identifiable customers, or archive material the owner wants removed. Confirm video usage rights for public publication. Supply current team photography, approved matching before-and-after images and any additional dated milestones. No fake comparisons or named testimonials have been added. Confirm wording and permission before adding attributed testimonials.
- Confirm current warranty terms, exclusions, accreditations and any claims about equipment or partnerships before adding them. The preview does not advertise the legacy five-year warranty, headcounts, or a certification badge.

## Estimate form

The preview composes an email on the visitor’s device; it does not transmit an enquiry or upload an image. A selected photograph must be attached in the mail application. Phone and email links remain available.

To accept submissions in production, set `PUBLIC_PARC_ESTIMATE_ENDPOINT` to an approved same-origin HTTPS route such as `/api/estimate`. It receives a multipart POST with `name`, `email`, `phone`, `vehicle`, `registration`, `service`, `details` and optional `photo`. The browser expects a 2xx response with JSON `{"ok":true}` only after the enquiry is accepted; return a non-2xx response for errors. Supply a useful HTML response or a redirect for non-JavaScript submissions that do not request JSON.

The configured service must validate and rate-limit requests on the server, restrict requests to the approved origin, verify image content and enforce size limits (5 MiB for the image), and deliver enquiries through an approved mailbox or processor. Keep attachments out of public web storage and do not log enquiry contents. Configure retention and deletion with PARC and update the privacy notice with the live processor, retention details and the owner’s approved wording. Test delivery, file rejection and failure states before switching on public indexing.

## Content sources

The [original homepage](https://www.parc.ie/), [About](https://www.parc.ie/about.html), [Our Work](https://www.parc.ie/work.html), [Services](https://www.parc.ie/services.html), [Testimonials](https://www.parc.ie/testimonial.html), [repair guide](https://www.parc.ie/tenthings.html), [FAQs](https://www.parc.ie/faq.html) and [Contact](https://www.parc.ie/contact.html) inform the redesign. Image labels in the site identify the archives. See `ARCHIVE.md` for the mapping to the original photographs. The film is the supplied Toyota Yaris Cross clip.
