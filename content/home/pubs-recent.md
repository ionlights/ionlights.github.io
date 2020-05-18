---
widget: "pages"
headless: true
active: true
weight: 40

title: "Recent works"
subtitle: "Recently released research"

content:
  page_type: "publication"
  count: 5
  offset: 0
  order: "desc"

  # Filter posts by a taxonomy term.
  filters:
    tag: ""
    category: ""
    publication_type: ""
    exclude_featured: false
  
design:
  # Toggle between the various page layout types.
  #   1: List
  #   2: Compact
  #   3: Card
  #   4: Citation (publication only)
  view: 3
  
  background:
    # Background color.
    # color: "navy"
    
    # Background gradient.
    # gradient_start: "DeepSkyBlue"
    # gradient_end: "SkyBlue"
    
    # Background image.
    # image: "background.jpg"  # Name of image in `static/img/`.
    # image_darken: 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

    # Text color (true:light or false:dark).
    # text_color_light: true  
  
advanced:
 css_style: ""
 css_class: ""
---

{{% alert note %}}
Quickly discover relevant content by [filtering publications]({{< ref "/publication/_index.md" >}}).
{{% /alert %}}
