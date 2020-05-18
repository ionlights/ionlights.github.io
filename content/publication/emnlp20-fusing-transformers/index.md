---
title: "Learning to Fuse Sentences with Transformers for Abstractive Summarization"
authors: [Logan Lebanoff, ionlights, Franck Dernoncourt, Doo Soon Kim, 
Lidan Wang, Walter Chang, Fei Liu]
date: 2020-11-16T00:00:00-04:00 
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2020-09-14T00:00:00-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Empirical Methods for Natural Language Processing"
publication_short: "EMNLP"

abstract: >-
  It is important for a summarizer to acquire the skill of sentence fusion,
  which allows two or more sentences to be combined into one effective sentence.
  The ability to fuse sentences is attractive as it is a key step to produce
  succinct and reliable abstracts. However, abstractive summarizers to date have
  tended to fail on sentence fusion. These summarizers produce few summary
  sentences by fusion, or even worse, generate incorrect fusions that lead the
  summary to fail to retain the original meaning. In this paper, we investigate
  the ability of Transformers to fuse sentences and propose novel algorithms to
  enhance their ability to perform sentence fusion by leveraging the knowledge
  of points of correspondence between sentences. Further, we introduce a novel
  dataset to support modeling and evaluation of sentence fusion, covering a
  number of types of correspondence provided by the theory of text cohesion.
  Through extensive experiments we investigate the effects of design choices on
  Transformer model performance. Our findings shed light on the importance of
  modeling points of correspondence between sentences for effective sentence
  fusion.


# Summary. An optional shortened abstract.
summary: "A new framework for generating summaries which stay true to their
source sentences."

# Summarizing documents is a challenging, but necessary, task. We use summaries
# on a daily basis to make decisions and learn new happenings. However, 
# summarization is challenging for humans and more so for machines. **We
# analyzed **

tags: ["nlp", "points-of-correspondence", ]
categories: ["research"]
featured: false

url_code: https://github.com/loganlebanoff/correct_summarization

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false
---
