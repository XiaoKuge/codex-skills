# Living Research Site

Default durable output for this skill is a static HTML research site that can be continuously enriched.

Do not create standalone Markdown research artifacts by default. Files such as `actor-map.md`, `claims.md`, `notes.md`, `todos.md`, and `hypotheses.md` make the research harder to browse and slow down progress. Put durable research output into HTML pages or sections. Use JSON only as optional structured backing data for those pages. Use Markdown only when the user explicitly asks for Markdown export or when authoring skill reference files.

## Purpose

The site should help humans and agents return to a topic, understand the current state of knowledge, see what changed, and continue research without starting from zero.

## Minimal Site Shape

Start small:

```text
site/
  index.html
  background.html
  glossary.html
  related-work.html
  frameworks.html
  hypotheses.html
  video.html
  next-steps.html
  sources.html
  log.html
  data/
    site-state.json
```

Add pages only when they have a clear role.

## Update Rules

When enriching an existing site:
- Read relevant existing pages first.
- Preserve useful prior work.
- Mark newly added or materially changed content.
- Add a dated entry to `log.html`.
- Add proposed next actions to `next-steps.html` instead of creating `todos.md`.
- Integrate generated video work into `video.html` or a clearly named video section; do not leave it as a detached artifact by default.
- Add or update terms in `glossary.html` when new concepts, abbreviations, named methods, or domain-specific vocabulary appear.
- Do not execute major next steps merely because they are listed; leave them for user review unless the user has already authorized them.
- Update structured data files if they exist.
- Keep navigation links working.
- Keep pages concise enough to scan.

## Page Roles

`index.html`:
- summary of the topic
- current framework
- key findings
- latest changes
- links to deeper pages

`background.html`:
- concepts
- terms
- context
- prerequisites
- boundary conditions

`glossary.html`:
- concepts and terms that appear in the research
- abbreviations and acronyms
- short definitions
- why the term matters
- related terms
- source or page where the term appears

`related-work.html`:
- clusters of prior work
- comparison tables
- people, organizations, projects, papers, or products

`frameworks.html`:
- conceptual framework
- taxonomies
- causal models
- timelines
- multi-lens analysis

`hypotheses.html`:
- insights
- hypotheses
- gaps
- open questions
- tests and falsification criteria

`video.html`:
- video briefs
- narrative spines
- scripts
- storyboards
- shot lists
- visual and asset plans
- tool plans, such as Manim scenes, FFmpeg assembly, browser capture, or presentation rendering
- edit notes
- production risks and missing inputs
- embedded or linked rendered video files when they exist
- transcripts and source notes for the video

`next-steps.html`:
- proposed next research steps
- why each step matters
- expected output
- dependencies or required sources
- status: proposed, confirmed, in progress, done, skipped
- user-editable confirmation notes

`sources.html`:
- bibliography
- source notes
- claim support
- source limitations

`log.html`:
- dated updates
- changed claims
- added sources
- next research targets

## Design Rules

- Use static HTML, CSS, and optional JSON data.
- Prefer semantic markup and tables where useful.
- Create or update HTML pages for all durable research artifacts.
- Avoid creating Markdown side files for claims, actor maps, notes, or todos.
- Use `video.html` by default for generated video artifacts; use a video section only for small early drafts.
- Avoid heavy dependencies unless the user asks.
- Use visible change markers for new or revised material.
- Make every page navigable from every other page.
- Keep the site suitable for file:// browsing.

## Glossary Page

Every living research site should have `glossary.html` once more than a few concepts or technical terms appear. Treat it as the shared vocabulary layer for both humans and agents.

Recommended table columns:
- term
- type: concept, acronym, method, project, person, organization, metric, dataset, or other
- definition
- why it matters
- related terms
- first seen or source
- status: draft, stable, disputed, deprecated

For agent behavior:
- Add a term when it is central, ambiguous, repeated, domain-specific, or likely to confuse future readers.
- Keep definitions short and operational.
- Link terms back to relevant pages when possible.
- Mark disputed or evolving meanings instead of flattening disagreements.
- Do not let glossary work interrupt the main research flow; add concise entries as part of normal enrichment.

## Next Steps Page

Every living research site should have `next-steps.html` once the research begins to branch. Treat it as the user's control surface for future work.

Recommended table columns:
- priority
- proposed step
- rationale
- expected artifact
- dependencies
- confirmation status
- notes

Use statuses consistently:
- `proposed`: agent suggested it, user has not confirmed it
- `confirmed`: user approved it
- `in progress`: currently being worked on
- `done`: completed
- `skipped`: intentionally not doing it

For agent behavior:
- Add proposed work to `next-steps.html` instead of immediately expanding scope.
- Prefer a small set of high-leverage proposed steps.
- Ask the user to confirm or edit the page when next actions affect direction, scope, or time investment.
- When the user confirms a step, update its status before starting.

## Enrichment Report

After updating a site, report:
- pages changed
- major additions
- claims or hypotheses changed
- sources added
- next steps added or updated
- which next steps need user confirmation
