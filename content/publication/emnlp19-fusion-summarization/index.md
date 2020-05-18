---
title: Analyzing Sentence Fusion in Abstractive Summarization
authors: 
  - Logan Lebanoff
  - ionlights
  - Franck Dernoncourt
  - Doo Soon Kim
  - Seokhwan Kim
  - Walter Chang
  - Fei Liu
date: 2019-11-05T00:00:00-04:00 
doi: "10.18653/v1/D19-5413"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-08-13T00:00:00-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: >-
  Empirical Methods for Natural Language Processing: Proceedings of the 2nd
  Workshop on New Frontiers in Summarization
publication_short: EMNLP NewSum

abstract: >-
  Sentence fusion remains a challenging task for summarization systems. Multiple
  compatible sentences must be selected, then important content must be
  extracted from those sentences, and finally the content must be merged 
  together into a natural language sentence. In this paper, we analyze the
  outputs of five state-of-the-art neural abstractive summarizers, focusing on
  summary sentences that are formed by sentence fusion. We find that system 
  sentences are mostly grammatical, but often fail to remain faithful to the 
  original article. Additionally, we propose a new framework for generating 
  summary sentences that divides sub-tasks between two models: one which selects
  sentences and highlights words and phrases within those sentences, and the
  other generates a sentence using the previous model’s outputs as supplementary
  information. We achieve promising results using this distribution of tasks,
  which allows the generation model to better focus on fusing sentences
  effectively.


# Summary. An optional shortened abstract.
summary: "A new framework for generating summaries which stay true to their
source sentences."

# Summarizing documents is a challenging, but necessary, task. We use summaries
# on a daily basis to make decisions and learn new happenings. However, 
# summarization is challenging for humans and more so for machines. **We
# analyzed **

tags: ["nlp"]
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
