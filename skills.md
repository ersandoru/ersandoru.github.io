---
layout: page
title: Expertises & Proficiencies
permalink: /skills/
---

<div class="skills-page">
  <p class="section-description" style="margin-bottom: 50px; font-size: 1.1em; color: var(--grey-color);">
    A comprehensive overview of my technical stack and management capabilities. Over 20 years of hands-on experience in these domains.
  </p>

  {% for skill_category in site.data.skills %}
    <div class="skill-category" style="margin-bottom: 40px;">
      <h2 class="skill-category-name" style="font-size: 1.8em; margin-bottom: 25px; border-bottom: 1px solid var(--grey-light); padding-bottom: 10px;">
        {{ skill_category.name }}
      </h2>
      <div class="skill-tags">
        {% for item in skill_category.items %}
          <div class="skill-tag">
            {{ item.name }}
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>