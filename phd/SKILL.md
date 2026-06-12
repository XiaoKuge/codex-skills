---
name: phd
description: "Use when Codex should perform systematic research thinking for a concept, topic, field, question, corpus, paper set, project, or complex information bundle, or turn a research site or user-proposed topic into a clear research walkthrough video integrated into the site. Supports background mapping, related work survey, conceptual frameworks, synthesis, multi-lens analysis, insights, hypotheses, gaps, and research directions. For video, produce serious non-promotional topic deconstruction, plain-language scripts, storyboards, narration plans, shot lists, tool plans such as Manim/FFmpeg, and `video.html` updates without making large model video generation a hard dependency. Default durable output is a continuously enriched static HTML research site."
---

# PhD

Use this skill as a composable research cognition system. Do not force every task through one linear workflow. Select the operators, lenses, and output artifacts that fit the user's request, available evidence, time budget, and desired depth.

## Core Stance

- Treat research as iterative enrichment, not one-shot answering.
- Separate background facts, interpretations, hypotheses, open questions, and design choices.
- Build compact frameworks that make a topic easier to think with.
- Prefer explicit structure over prose when comparing, decomposing, tracing, or synthesizing.
- Preserve uncertainty. Do not make confident claims without evidence or a clear reasoning path.
- When creating durable output, build or update a static HTML research site. Do not create standalone Markdown research artifacts such as `claims.md`, `actor-map.md`, `notes.md`, or `todos.md` unless the user explicitly asks for Markdown.

## Choose The Mode

Before producing output, decide which mode applies:

- **Understand**: Quickly form a complete, concise cognitive frame for a topic.
- **Survey**: Compare related work, prior art, people, organizations, schools, projects, or methods.
- **Synthesize**: Compress complex material into abstractions, mechanisms, tensions, and implications.
- **Enrich**: Update an existing research site with new sources, claims, hypotheses, or analysis.
- **Generate**: Produce insights, hypotheses, gaps, future directions, or next research moves.
- **Research Video**: Convert a research site or user-proposed topic into a clear, non-promotional walkthrough integrated into the site, explaining the purpose, content, structure, and decomposition of the topic.

Modes can be combined. State the chosen mode briefly when useful.

## Select Operators

Use `references/operators.md` when the task requires choosing among research actions such as background mapping, related work survey, conceptual framework building, abstraction, expansion, comparison, synthesis, gap finding, insight generation, or hypothesis generation.

Do not load every reference by default. Load only the files needed for the task.

## Select Lenses

Use `references/lenses.md` when the topic benefits from multi-dimensional structuring. Pick one or more lenses:

- spatial/module
- temporal/stage
- causal/mechanistic
- historical/genealogical
- actor/person/organization
- method/technical route
- problem-solution
- economic/incentive
- governance/power
- adoption/diffusion
- failure mode

## Select Output Artifacts

Use `references/output-patterns.md` to choose an output form:

- background brief
- related work matrix
- concept map
- taxonomy
- timeline
- causal model
- actor map
- one-page framework
- insight memo
- hypothesis set
- open question tree
- living research site update
- next steps page
- research video walkthrough

Prefer concise artifacts that can be integrated into future work. For durable work, integrate artifacts into HTML pages rather than scattering Markdown files.

## Research Video

Use `references/video-production.md` when the user asks to make a video from a research site, review a research site for video content, introduce a topic in an accessible way, explain the purpose and contents of a research project, produce a script, storyboard, narration, shot list, or show how to systematically deconstruct a topic.

Research video work should remain serious and research-backed:

- Start by reading the existing research site when one exists, or by constructing a compact research framework from the user's topic.
- Explain purpose, context, core concepts, structure, evidence, uncertainty, and open questions in plain language.
- Make the research process visible: how the topic was decomposed, compared, traced, and synthesized.
- Avoid hype, persuasion, or go-to-market framing unless the user explicitly asks for that later.
- Convert the framework into a time-coded structure with scenes, claims, evidence, visuals, narration, and transitions.
- For actual rendering, prefer deterministic tools such as Manim, FFmpeg, browser capture, or presentation rendering when they fit; do not make large model video generation a hard dependency.
- Produce a script, tool plan, or production package when actual rendering tools, footage, voice, music, or brand assets are missing.
- Integrate generated video artifacts into the research site by default: create or update `video.html`, link it from relevant pages when navigation is being maintained, update sources and next steps when needed, and log the update.

## Evidence Discipline

Use `references/evidence-and-uncertainty.md` for claims that depend on evidence quality, source comparison, or uncertain inference.

For non-obvious claims:

- Mark whether the claim is a fact, inference, hypothesis, speculation, or open question.
- Note the evidence level when useful.
- Separate observation from interpretation.
- Name missing data or disconfirming evidence when relevant.
- Prefer falsifiable hypotheses.

## Living Research Site

Default durable output is a static HTML research site. Use `references/living-research-site.md` when creating or enriching such a site.

Durable research artifacts should be HTML-first:

- Put claims in `claims.html` or a claims section.
- Put actor maps in `actors.html` or an actor section.
- Put concepts, terms, abbreviations, and domain vocabulary in `glossary.html`.
- Put notes and synthesis in appropriate HTML pages.
- Put proposed todos and follow-up work in `next-steps.html`.
- Use JSON only as optional structured backing data for HTML pages.
- Use Markdown only for skill references, source excerpts when explicitly requested, or user-requested export.

When an existing site is present:

- Read the relevant HTML pages and data files first.
- Preserve prior research unless it is superseded.
- Mark new or changed material where appropriate.
- Add a dated log entry.
- Update `next-steps.html` with proposed follow-up tasks that need user confirmation.
- Keep pages cross-linked and concise.
- Update structured data files if present.

When creating a new site:

- Start with a small, navigable HTML file group.
- Include an overview page, background, glossary, related work, frameworks, hypotheses, sources, next steps, and log when relevant.
- Keep the site easy for humans and agents to update.

## Response Shape

For chat-only work, produce the chosen artifact directly.

For durable research-site work, report:

- pages created or updated
- key additions
- evidence or uncertainty notes
- proposed next steps, including whether they need user confirmation

Avoid claiming completeness. Research sites should remain open to revision.
