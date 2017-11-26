---
layout: post
title: "Photography Portfolio"
date: 2016-10-01 00:00:00 +0100
project:
    modal:
        id: modal-project-7
        aria:
            labelledby: project modal 7
            describedby: photography portfolio
    title: Photography Portfolio
    description: I love travelling and I love taking photos while travelling. In my opinion, some of the photos I've taken over the years are pretty good, while some are not so good, so I thought I'll show you the pretty good ones here.
    client: None (Own Portfolio)
    date: July 2010 - Present
    category:
        text: Photography
        icon: fa fa-camera-retro
    quote: ""
    quote_author: ""
    github_url: ""
    behance_url: https://www.behance.net/gallery/29078549/Photography-Portfolio
---

{% assign img_name = "photography-portfolio-img" %}
{% assign img_path = "assets/img/projects/photography-portfolio" %}

Ever since I started travelling, I started taking photographs. I am proud of some of the photographs that I took, so
I decided to compile all of the photographs into a Photography Portfolio. The portfolio mostly includes photos from
my summer and winter holidays and all the photos were taken with either a basic Kodak camera, iPhone 4s or iPhone 5s
and not a professional camera. Locations of the photos include: Greece, France, London, Spain, and Italy.

You can view the photos that form the Photography Portfolio below.

{% for i in (1..18) %}
<img data-src="{{ site.baseurl }}{{ img_path }}/{{ img_name }}-{{ i }}.png" alt="Photography Portfolio - Image {{ i }}" class="img-centered img-fluid modal-lazy"/>
{% endfor %}