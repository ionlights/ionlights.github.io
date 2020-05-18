---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Migrating AI@UCF to PyInvoke"
summary: >-
  A club I co-founded in undergrad used a custom-built automation system
  to handle many day-to-day tasks and ensure that the student's experience
  was predictable. Before moving on, I migrated that system to PyInvoke
  and GitHub Actions.

url: pyinvoke-ucfai

authors: [ionlights]
tags: [ucfai, automation]
categories: [ucfai]
date: 2020-04-30T04:56:53-04:00
draft: true

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
  - name: Code
    url: https://github.com/ucfai/tasks
    icon_pack: fab
    icon: github
  - name: Documentation
    url: https://ucfai.org/docs/autobot/
    icon_pack: fas
    icon: terminal

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

When I co-founded [AI@UCF][ucfai], I didn't quite realize how much work would
go into standardizing presentation, setting up (and updating) the website,
distributing content, and a host of other tasks. 

Given a penchant for over-engineering, I chose to solve this through
automation. Building a tool that generates and standardizes presentation,
cross-compiles non-Markdown files into Markdown-ready content and distributes
all our content to the appropriate places was no simple feat, but this 
system has allowed the Coordinators (Officers) of AI@UCF to focus much more
on content creation and curation, rather than on tiny (but important0 details
like presentation consistency. 

[ucfai]: https://ucfai.org/
