---
layout: post
title: "Student Portal"
date: 2016-10-06 00:00:00 +0100
project:
    modal:
        id: modal-project-2
        aria:
            labelledby: project modal 2
            describedby: student portal
    title: Student Portal
    description: As part of my final year at University, I had to come up with a design and build project which would be my Individual Project (also known as dissertation). I decide to create "Student Portal", a web application which allows student and the academic staff of a university to access university-related resource.
    client: None (Individual Project at University)
    date: November 2014 - May 2015
    category:
        text: Web Development/Design
        icon: fa fa-code
    quote: |
        "Overall, a very competent project report showing evidence that the requirements above have been met and the
        module's learning outcomes achieved.<br><br>The work done demonstrates clarity of thought; good organisation
        of work, artefacts and the report; some degree of originality and depth of knowledge. The project report is
        clear and well organised."
    quote_author: <b>Vladimir Stankovic, Lecturer, City University London</b>
    github_url: https://github.com/SergiuTripon/bsc-dissertation-student-portal
    behance_url: https://www.behance.net/gallery/29076855/Student-Portal
---

{% assign img_name = "student-portal-img" %}
{% assign img_path = "assets/img/projects/student-portal" %}

<img data-src="{{ site.baseurl }}{{ img_path }}/{{ img_name }}-1.png" alt="Student Portal - Image 1" class="img-centered img-fluid modal-lazy"/>

In most university degrees, the final year of the degree consists of the same amount of modules as the previous years
with the exception of an individual project, also known as a dissertation. The Individual Project module runs through
the whole of the final year of university and involves substantial amounts of work and numerous meetings with a supervisor
which at the end of the academic year marks the dissertation alongside a second marker.

The idea behind my individual project was to create an app or website which would allow students and the academic staff
of a university to access university-related resources. In the end, I made the decision to develop a website. I started
the project in November 2014 and completed it in April 2015. Throughout the project, I conducted extended research and
learning phases in order to cover the missing knowledge I had in terms of specific tools, programming languages or
syntaxes. The main programming language used throughout the project is PHP (PHP: Hypertext Preprocessor). The relational
database management system (RDBMS) used is MySQL. The project was built to be integrations heavy with some of the most
important third-party integrations being: PayPal PHP Class, TFL (Transport for London) API, Google Maps API and
Bootstrap. It also included other smaller components such as the DataTables table plugin and the select2 select box
plugin.

<img data-src="{{ site.baseurl }}{{ img_path }}/{{ img_name }}-2.png" alt="Student Portal - Image 2" class="img-centered img-fluid modal-lazy"/>

Overall, this was the project I enjoyed the most which is probably due to amount of control I had over its direction,
due to its stressful and challenging progress which always kept me in motion and gave me the hunger to try and achieve
my best. Once it was complete, the feeling of accomplishment made me realise that I achieved something special which
won’t have been possible without the hard work and dedication that I put into the project. The project was worth 4
standard university modules and was awarded 69%.

In order to get a visual representation of the project, feel free to have a look at the images provided above and below.

{% for i in (3..31) %}
<img data-src="{{ site.baseurl }}{{ img_path }}/{{ img_name }}-{{ i }}.png" alt="Student Portal - Image {{ i }}" class="img-centered img-fluid modal-lazy"/>
{% endfor %}