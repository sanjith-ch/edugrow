# Edugrow website

A static website (plain HTML, CSS and JavaScript, no build step) for Edugrow.

## Preview locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About Us (team for 2026–27, 2024–25, 2021–23) | `about.html` |
| Schools (filter + search) | `schools.html` |
| Support → School Needs | `school-needs.html` |
| Support → Volunteer (embedded Google Form + FAQ) | `volunteer.html` |
| Support → Donate | `donate.html` |
| Explore → Gallery (filters + lightbox) | `gallery.html` |
| Explore → Success Stories | `success-stories.html` |
| Explore → Edugrow Talent Show | `talent-show.html` |
| Explore → FAQs | `faqs.html` |
| Upcoming | `upcoming.html` |

## Editing

- **Navigation, footer, email, social links and the volunteer form link** live in one place:
  the top of `assets/js/main.js` (`EMAIL`, `VOLUNTEER_FORM`, `SOCIAL`, `NAV`).
- **Colours** are the Edugrow brand colours, defined at the top of `assets/css/style.css`
  (`--navy #0C354D`, `--sky #86BFDA`, `--sun #FFE33C`).
- **Photos** are in `assets/img/photos/` (from the Edugrow Drive folder, resized for the web)
  and `assets/img/team/`.
- To add a gallery photo, copy any `<figure>` in `gallery.html` and set `data-tags` to one of the
  filter names (for example `diya`, `origami`, `ups-tech`).
- To add a success story, copy an `<article class="story">` block in `success-stories.html` and add
  a matching link in the `story-nav` at the top.

## Hosting

Any static host works: GitHub Pages, Netlify, Vercel or Cloudflare Pages. Upload the whole folder and
point the `edugrow.org.in` domain at it.
