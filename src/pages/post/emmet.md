# Preferences Emmet di Sublime Text untuk Coding Lebih Cepat

```json
{
	"config": {
		"markup": {
			"snippets": {
				"extends": "{{% extends '' %}}",
				"block": "{{% block  %}\n\t\n{% endblock %}}",
				"blockinline": "{{% block  %}{% endblock %}}",
				"macro": "{{% macro  %}\n\t\n{% endmacro %}}",
				"raw": "{{% raw %}{% endraw %}}",
				"persen": "{{%  %}}",
				"from": "{{% from '' import  %}}",
				"var": "{{\\$  \\$}}",
				"vp": "{{{  }}}",
				"include": "{{% include '' %}}",
				"markdown": "{@markdown\n\t\n@endmarkdown}",
				"windi": "style[lang=windi]",
				"petite": "script>{PetiteVue.createApp({\n\t\n}).mount('')\n}",
			},
			"options": {
				"output.selfClosingStyle": "xhtml"
			}
		}
	}
}
```