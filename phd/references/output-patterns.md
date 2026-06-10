# Output Patterns

Choose output forms based on the user's goal. Do not produce every artifact by default.

For durable research-site work, every output pattern should become an HTML page or a section inside an existing HTML page. Do not create standalone Markdown artifacts such as `actor-map.md`, `claims.md`, `notes.md`, or `todos.md` unless the user explicitly requests Markdown. Use `next-steps.html` for proposed todos and user confirmation.

## Background Brief

Use for quick orientation.

Structure:
- one-sentence definition
- why it matters
- key terms
- important context
- open uncertainties

## Related Work Matrix

Use for comparing papers, projects, products, organizations, or schools of thought.

Columns:
- work or actor
- core claim
- method or approach
- evidence type
- what it explains well
- what it misses
- assumptions
- relationship to current topic

## Concept Map

Use to show relationships among concepts.

Include:
- central concept
- adjacent concepts
- dependencies
- contrasts
- boundaries

Durable site location:
- `frameworks.html` for the map.
- `glossary.html` for definitions of important terms in the map.

## Taxonomy

Use when a field or topic needs categories.

Include:
- classification principle
- categories
- examples
- edge cases
- why the taxonomy is useful

Durable site location:
- `frameworks.html` for the taxonomy.
- `glossary.html` for recurring category definitions.

## Glossary

Use when a research site accumulates concepts, terms, abbreviations, methods, projects, metrics, datasets, people, or organizations that need stable definitions.

Include:
- term
- type
- definition
- why it matters
- related terms
- first seen or source
- status

Rules:
- Use `glossary.html`, not `glossary.md`.
- Keep definitions concise and useful for future readers.
- Mark disputed, draft, or evolving definitions clearly.
- Link glossary entries to relevant site pages when possible.

## Timeline

Use for historical or stage-based analysis.

Include:
- phases
- key events or artifacts
- transition triggers
- continuity and discontinuity
- current frontier

## Causal Model

Use for explaining mechanisms.

Include:
- variables
- causal links
- feedback loops
- confounders
- testable predictions

## Actor Map

Use for people, organizations, labs, companies, or communities.

Include:
- actor
- role
- contribution
- incentives
- relationships
- open questions

Durable site location:
- `actors.html`, `related-work.html`, or a clearly named actor section.
- Do not create `actor-map.md` by default.

## One-Page Framework

Use when the user wants a complete, concise cognitive frame.

Include:
- definition
- core components
- key relationships
- tensions
- related work clusters
- hypotheses
- next questions

## Insight Memo

Use for non-obvious observations.

Include:
- insight
- why it matters
- evidence or reasoning
- implications
- possible objections

## Hypothesis Set

Use for research directions and testable ideas.

Include:
- hypothesis
- rationale
- expected evidence
- falsifying evidence
- how to test
- confidence

Durable site location:
- `hypotheses.html`.
- Put proposed tests or follow-up work in `next-steps.html`.

## Open Question Tree

Use to organize uncertainty.

Include:
- root question
- subquestions
- dependencies
- evidence needed
- priority

Durable site location:
- `hypotheses.html`, `frameworks.html`, or `next-steps.html` depending on whether the question is conceptual or actionable.

## Next Steps Page

Use when the agent wants to propose todos, follow-up research, source gathering, experiments, synthesis passes, or site edits.

Include:
- priority
- proposed step
- rationale
- expected artifact
- dependencies
- confirmation status
- notes

Rules:
- Use `next-steps.html`, not `todos.md`.
- Default new steps to `proposed`.
- Let the user edit or confirm proposed steps before major expansion.
- Keep the list short enough to support momentum.

## Living Research Site Update

Use when enriching a durable HTML research site.

Include:
- pages updated
- new or changed claims
- new sources
- hypotheses added or revised
- log entry
- next enrichment target
- proposed next steps in `next-steps.html`
