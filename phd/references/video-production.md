# Research Video Production

Use this reference when research should become a video-ready artifact integrated into a research site, or when the user asks to make a video from a research site, source set, paper, topic, idea, or argument.

The default goal is topic deconstruction, not promotion. The video should help viewers understand the purpose, content, structure, evidence, uncertainty, and research process behind a topic. Go-to-market, persuasion, fundraising, product marketing, and audience-growth framing are later optional directions, not the default.

Generated video work belongs in the research site by default. Do not leave scripts, storyboards, or production notes as standalone side artifacts unless the user explicitly asks for export. Create or update `video.html`, or a clearly named video section if the site is still small.

## Decide The Video Job

First identify:

- audience
- purpose
- format
- duration
- source: existing research site or user-proposed topic
- source material
- desired tone
- production constraints

Common formats:

- research walkthrough
- topic deconstruction
- explainer
- lecture or mini-course
- research briefing
- research site tour
- documentary-style research segment
- technical concept walkthrough

## Research-To-Video Workflow

1. If a research site exists, read the relevant pages first: overview, background, glossary, related work, frameworks, hypotheses, sources, next steps, and log.
2. If no site exists, build a compact research frame from the user's topic: purpose, core concepts, boundaries, context, lenses, evidence needs, and open questions.
3. Define the viewer outcome: what the viewer should understand after watching.
4. Select the research claims and explanations that belong in the video.
5. Mark claim type and evidence level for important or non-obvious claims.
6. Build a narrative spine: purpose, context, decomposition, mechanisms, evidence, uncertainty, implications, next research questions.
7. Convert the spine into scenes or chapters.
8. For each scene, specify narration, visual idea, source support, on-screen text, and transition.
9. List required assets: site screenshots, diagrams, charts, source excerpts, images, voiceover, captions, and optional music.
10. Integrate the result into the research site: update `video.html`, add source notes to `sources.html` when relevant, add unresolved production tasks to `next-steps.html`, and add a log entry.

## Tone Rules

- Be clear, patient, and precise.
- Prefer "what this means" over slogans.
- Show the work: name the decomposition, comparison dimensions, evidence limits, and open questions.
- Avoid exaggerated claims, hype language, heroic narratives, and product-pitch structure.
- Do not force a hook that distorts uncertainty.
- Treat go-to-market, adoption, monetization, and launch strategy as future optional analysis unless explicitly requested.

## Output Package

Use the smallest package that satisfies the request.

### Video Brief

Include:

- title or working title
- audience
- goal
- key message
- format and duration
- tone
- source site or topic
- constraints

### Script

Include:

- timecode or section timing
- voiceover or spoken text
- on-screen text
- source or claim note for important factual lines
- visual direction

Keep scripts speakable. Use short sentences. Avoid citation clutter in narration; keep source notes outside spoken lines. The script should introduce the topic deeply but accessibly: purpose first, then structure, then evidence, then uncertainty and next questions.

### Storyboard

Include:

- scene number
- approximate time
- scene purpose
- visual composition
- narration summary
- on-screen text
- evidence or source note
- transition

### Topic Deconstruction Plan

Include:

- root question
- why the topic matters intellectually or practically
- boundary: what is included and excluded
- concepts and terms to define
- decomposition dimensions
- evidence needed
- uncertain or disputed areas
- sequence for explaining the topic clearly

### Shot List

Include:

- shot
- asset type
- source or generation plan
- framing
- motion
- duration
- dependency or risk

### Edit Plan

Include:

- sequence order
- pacing notes
- B-roll or visual overlays
- chart or diagram moments
- caption notes
- music or sound direction when relevant
- export specs if known

## Durable Site Location

For living research sites:

- Put video briefs, scripts, storyboards, shot lists, and edit plans in `video.html` by default.
- If the site does not yet justify a full page, add a video section to `index.html`, `frameworks.html`, or `next-steps.html`, but prefer promoting it to `video.html` once the content becomes substantial.
- Store proposed production tasks in `next-steps.html`.
- Add source support and limitations to `sources.html`.
- Add a dated log entry after video artifacts are created or revised.
- Keep the video page linked from the site's navigation or from the most relevant overview page when maintaining navigation is in scope.

## Evidence And Uncertainty

Video compression can make uncertainty disappear. Preserve it deliberately:

- Label facts, inferences, interpretations, hypotheses, and speculation in production notes.
- Avoid making visuals imply evidence that the sources do not support.
- Keep uncertain claims out of hooks unless the uncertainty is the point.
- For generated visuals, state when they are illustrative rather than documentary.
- Name missing assets or missing evidence before claiming the video is production-ready.

## Default Non-Goals

Do not default to:

- promotional launch videos
- go-to-market strategy
- sales copy
- founder-story framing
- viral short-form optimization
- claims that the research is complete

Use these only when the user asks for them explicitly.

## Actual Rendering

If the user asks for a rendered video:

- Prefer deterministic, scriptable tools when they fit the task: Manim for explanatory animations and diagrams, FFmpeg for assembly/transcoding/caption muxing, browser capture for HTML scenes, and presentation rendering for slide-like explainers.
- Use available video, image, audio, browser, or presentation tools only when they are present and suitable.
- Do not make large model video generation a hard dependency. Treat generative image/video/audio models as optional asset helpers, not the core production pipeline.
- Prefer code-native diagrams, charts, and animations when they can explain the research accurately.
- Prefer a deterministic edit plan or storyboard when rendering tools or assets are unavailable.
- Do not claim the video file was created unless an actual video file was produced and verified.
- Report missing inputs such as voice, footage, music rights, brand assets, resolution, aspect ratio, or target platform.
- If a video file is produced, integrate it into the site with an HTML `<video>` embed or a clear local link, plus transcript, sources, and production notes.

## Tool Guidance

Choose tools by explanation need, not novelty:

- **Manim**: mathematical, conceptual, causal, system, timeline, graph, taxonomy, and mechanism animations.
- **FFmpeg**: stitch scenes, transcode, add audio, add captions, normalize resolution, and produce final exports.
- **HTML/CSS/Canvas plus browser capture**: site walkthroughs, interactive-looking diagrams, dashboards, and research maps.
- **Presentation tools**: lecture-style explainers where slide structure is the clearest medium.
- **Static diagrams and charts**: use when motion adds little.

When using Manim:

- Keep scenes modular and named after the research structure.
- Put explanatory text in captions or narration rather than crowding the canvas.
- Use visual hierarchy to show decomposition: topic, subquestions, mechanisms, evidence, uncertainty, and next questions.
- Render a short representative scene first before producing the full video.
- Store scripts and rendered outputs where the research site can link to them.

Recommended site organization when rendering files:

```text
site/
  video.html
  media/
    videos/
    images/
    captions/
  scripts/
    manim/
```
