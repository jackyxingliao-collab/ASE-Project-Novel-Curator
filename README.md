# Novel Curator

**COMP 8117 — Advanced Software Engineering | SPLASH Learning Pathway**  
University of Windsor · Fall 2026 · Four-member team

## The problem

How can web-novel readers find a novel they would enjoy **faster and more effectively** than with their current discovery methods?

Readers may use Novel Updates, recommendation threads in r/noveltranslations, and suggestions from friends. We will investigate where these workflows succeed or fall short rather than assuming our proposed interface is better.

The problem domain (web-novel discovery) was discussed with and supported by the course professor. The proposed solution is **not yet validated**.

## Our initial experiment

We propose a mobile-friendly discovery interface showing one novel card at a time:

- See a title, synopsis, genre/tags, status and optional cover.
- **Skip** a card to see the next novel.
- **Shortlist** a card to save it for review.
- Follow a source link to explore a promising title.

A simple, documented selection method is sufficient for Version 0.1. More advanced recommendations are **future hypotheses**, not initial requirements.

## Version 0.1 definition of done

- [ ] A small sample catalogue is available in a consistent data format.
- [ ] A novel card shows useful metadata and handles missing fields.
- [ ] Skip advances to an eligible next novel.
- [ ] Shortlist saves the novel and displays the saved list during the session.
- [ ] The basic experience works on desktop and mobile.
- [ ] A working version is reachable at a public URL.
- [ ] The team records limitations, technical choices, and initial feedback.

The application must not be presented as a proven improvement until we compare it against a relevant baseline.

## Project organization

The **project lead makes final decisions** on scope, priorities and integration. Team members own delegated outcomes and are expected to raise blockers and technical risks promptly; decisions do not require unanimous agreement.

Workstreams for the first iteration:
1. Project leadership, user investigation, evaluation and reporting.
2. Novel metadata research and sample catalogue.
3. Novel-selection/application logic.
4. User interface and deployment.

See [Project Brief](docs/PROJECT_BRIEF.md), [Data Contract](docs/DATA_CONTRACT.md), and [Engineering Decision Log](docs/ENGINEERING_DECISIONS.md).

## Working process

- Track assigned work through GitHub Issues and the project board.
- Use a dedicated branch for each development issue and open a pull request to `main`.
- Describe testing, limitations and important engineering reasoning in the pull request.
- Do not commit API keys, passwords, respondent identities, or other sensitive information.
- Record substantial alternatives and trade-offs in the decision log.

## SPLASH checkpoints

- October 20, 2026 — proposed internal checkpoint.
- October 21, 2026 — target for submitting Expert Review 1 (the official date was indicative; delayed submission means delayed feedback).
- October 28 — indicative Expert Review 2.
- November 18 — indicative Expert Review 3.
- December 2–9 — final defense.

At expert reviews, the team provides a progress report, and each member provides an individual reflective report. The evidence must describe what really happened, not projected accomplishments.

## Status

**Initial setup.** The first task is to build the smallest working intervention, deploy it, and learn from readers.

This README is a working document; scope and technical decisions may change in response to evidence.
