---
layout: layouts/main
pagination: 
  data: collections.projects
  size: 10
---

{% for project in pagination.items %}
<div class="bg-white px-4 py-4 shadow">
  <h2 class="capitalize font-semibold">{{ project.data.name }}</h2>
  <p>{{ project.data.description }}</p>
  {% if project.data.image_link %}
  <section class="bg-gray-200 py-2 px-2 my-4">
  <img src="{{project.data.image_link}}" class="lg:max-w-xl mx-auto object-scale-down" />
  </section>
  {% endif %}
  <div class="flex gap-2">
  {% if project.data.link %}
  <a href="{{ project.data.link }}" class="bg-red-500 px-2 py-2 text-white capitalize"> try it</a>
  {% endif %}
  <a href="{{ project.data.repo_link }}" class="bg-red-500 px-2 py-2 text-white capitalize">repo</a>
  </div>
</div>
{% endfor %}

