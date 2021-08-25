---
layout: layouts/blank
pagination: 
  data: collections.projects
  size: 10
---

{% for project in pagination.items %}
<div class="bg-white px-4 py-4 shadow">
  <h2 class="capitalize font-semibold">{{ project.data.name }}</h2>
  <p>{{ project.data.description }}</p>
  {% if project.data.image_link %}
  <section class="bg-gray-200 py-2 px-2">
  <img src="{{project.data.image_link}}" class="lg:max-w-xl mx-auto object-scale-down" />
  </section>
  {% endif %}
  {% if project.data.link %}
  <a href="{{ project.data.link }}" class="inline underline"> try it</a>
  {% endif %}
  <a href="{{ project.data.repo_link }}" class="inline underline">repo</a>
</div>
{% endfor %}

