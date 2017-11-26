---
layout: post
title: "Graphic Design Portfolio"
date: 2016-10-03 00:00:00 +0100
project:
    modal:
        id: modal-project-5
        aria:
            labelledby: project modal 5
            describedby: graphic design portfolio
    title: Graphic Design Portfolio
    description: Ever since 2012, Graphic Design and Photoshop became one of my passions, as I started to create various formats of graphic design such as logos, banners, backgrounds etc. Some of the pieces created over the years, I'm proud of so I thought I'll showcase them here.
    client: None (Own Portfolio)
    date: July 2012 - Present
    category:
        text: Graphic Design
        icon: fa fa-paint-brush
    quote: ""
    quote_author: ""
    github_url: ""
    behance_url: https://www.behance.net/gallery/29078135/Graphic-Design-Portfolio
---

{% assign img_name = "graphic-design-portfolio-img" %}
{% assign img_path = "assets/img/projects/graphic-design-portfolio" %}

Around 2012, I installed Adobe Photoshop and became passionate about graphic design. I started to “play around” in
Photoshop, by creating logos, adverts or wallpapers. I was proud of some of the designs that I created, and thought
I would compile them into a portfolio. I am looking to create designs for individuals and companies but, so far, I
haven’t taken part in any such work, although I haven’t advertised this as a service I can do either. I plan to create
a Graphic Design service on [fivesquid.com](https://www.fivesquid.com/) (freelance marketplace website where people can
trade skills and services) in the near future.

You can view the designs that form the Graphic Design Portfolio below.

{% for i in (1..22) %}
<img data-src="{{ site.baseurl }}{{ img_path }}/{{ img_name }}-{{ i }}.png" alt="Graphic Design Portfolio - Image {{ i }}" class="img-centered img-fluid modal-lazy"/>
{% endfor %}