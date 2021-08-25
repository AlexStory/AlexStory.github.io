---
layout: layouts/blank
pagination:
  data: collections.posts
  size: 10
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
---

{% for item in pagination.items %}
<div class="bg-white shadow px-4 py-4">
  <h2 class="capitalize inline-block mr-2 mb-2">{{ item.data.title }}</h2><span>{{ item.date | prettyDate }}</span>
  {% for tag in item.data.tags %}
  <span class="bg-gray-200 rounded-full px-2 py-1">{{ tag }}</span>
  {% endfor %}
  <p>{{ item.data.summary }}</p>
  <a href="{{ item.url }}" class="underline" >read now </a>
</div>
{% endfor %}