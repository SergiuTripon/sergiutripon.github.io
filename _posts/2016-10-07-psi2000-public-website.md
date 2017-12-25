---
layout: post
title: "PSI2000 Public Website"
date: 2016-10-07 00:00:00 +0100
project:
    modal:
        id: modal-project-1
        aria:
            labelledby: project modal 1
            describedby: psi2000 public website
    title: PSI2000 Public Website
    description: In July 2013, I started a one-year industrial placement at PSI2000. Throughout the year, I had numerous achievements, a few of those I'm extremely proud of. This is one of them, as I was requested to work as part of the Marketing Department for a period of time, helping to develop the company's new public website. I went on to develop the entire website from scratch, and it was one of the best experience of my career thus far.
    client: PSI2000
    date: March 2014 - July 2014
    category:
        text: Web Development/Design
        icon: fa fa-code
    quote: |
        "The best website in the history of the company."
    quote_author: <b>Kaveh Mir, Managing Director, PSI2000</b>
    github_url: ""
    behance_url: https://www.behance.net/gallery/29076103/PSI2000-Public-Website
---

{% assign img_name = "psi2000-public-website-img" %}
{% assign img_path = "assets/img/projects/psi2000-public-website" %}

<img data-src="{{ site.baseurl }}{{ img_path }}/{{ img_name }}-1.png" alt="PSI2000 Public Website - Image 1" class="img-fluid modal-lazy"/>

During my Bachelor’s degree in Computer Science at City University London, I spent a year working as part of an
industrial placement for PSI2000, a leading provider of Risk Management solutions in the UK. My main role while
at PSI2000 was Support & Software Testing Apprentice, which meant I mostly communicated with the company’s clients
but I also got involved in a few exciting projects such as a Data Transfer Project for Leeds City Council and a
Support Call Improvement Project where I created a number of email based workflows which radically improved the
efficiency of creating and resolving cases and responding to the clients' requests within Microsoft Dynamics CRM.

However, while at PSI2000, I also had the opportunity to work within the Marketing Department. During my work as a
Marketing Assistant Apprentice, I conducted a full re-design of the PSI2000’s Public Website as well as created numerous
graphic design pieces and 6 animated videos for it. This project concentrates on the PSI2000 Public Website Re-design
Project.

<img data-src="{{ site.baseurl }}{{ img_path }}/{{ img_name }}-2.png" alt="PSI2000 Public Website - Image 2" class="img-fluid modal-lazy"/>

Both the old website and the new website are built using the Microsoft SharePoint CMS (Content Management System).
In comparison to the old website, the new website consists of the pages that were already available with a new design
plus a number of new exciting additions. One of the additions is the chat function. I implemented PureChat in order
to provide the clients visiting the website the ability to send us a message and receive a reply swiftly and directly.
The administrator has the ability to turn the chat off or on, therefore it’s just like office hours, but online! When
the chat is turned off, the client is still able to send us a message through email. Another exciting addition was the
Testimonials page which consists of a vast amount of videos which I collected and uploaded to Vimeo, and then embedded
onto the webpage. In addition to that, other additions include: the Careers page where visitors can apply for jobs at
PSI2000, the Download page which allows visitors to download one of the PSI2000 products (license required) and the
Support page which allows the PSI2000 Support Team to connect to a user’s computer remotely in order to discuss and
assess issues further.

In order to get a visual representation of the project, feel free to have a look at the images provided above and below.

{% for i in (3..30) %}
<img data-src="{{ site.baseurl }}{{ img_path }}/{{ img_name }}-{{ i }}.png" alt="PSI2000 Public Website - Image {{ i }}" class="img-fluid modal-lazy"/>
{% endfor %}