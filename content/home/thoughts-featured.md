---
widget: "pages"
headless: true
active: false
weight: 60

title: "Featured thoughts"
subtitle: "I think you should read these."

content:
  page_type: "post"
  count: 5
  offset: 0
  order: "desc"

  # Filter posts by a taxonomy term.
  filters:
    tag: ""
    category: ""
    publication_type: "post"
    exclude_featured: false
  
design:
  view: 2  # 1=list, 2=compact, 3=card
  background:  
    # Background color.
    # color: "navy"
    
    # Background gradient.
    # gradient_start: "DeepSkyBlue"
    # gradient_end: "SkyBlue"

    # Text color (true=light or false=dark).
    # text_color_light: false
  
advanced:
  css_style: ""
  css_class: ""
---
