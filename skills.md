---
layout: page
title: Skills
permalink: /skills/
---

<div class="skills-page">
  {% for skill_category in site.data.skills %}
    <div class="skill-category">
      <h2 class="skill-category-name">{{ skill_category.name }}</h2>
      <div class="skill-tags">
        {% for item in skill_category.items %}
          <div class="skill-tag-wrapper">
            <span class="skill-tag">{{ item.name }}</span>
            {% if item.endorsements %}
              <span class="skill-endorsement">{{ item.endorsements }} endorsements</span>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>