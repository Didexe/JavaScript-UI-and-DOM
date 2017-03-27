function solve() {
	return function() {
		var template = [
			'<h1>{{title}}</h1>',
			 '<ul>',
			 	'{{#posts}}',
				 '<li>',
					 '<div class="post">',
						 '<p class="author">',
							 '{{#if author}}',
							 '<a href="/user/{{author}}" class="user">{{author}}</a>',
							 '{{else}}',
							 '<a class="anonymous">Anonymous</a>',
							 '{{/if}}',
						 '</p>',
						 '<pre class="content">{{{text}}}</pre>',
					 '</div>',
					 '{{#if comments}}',
							'<ul>',
								'{{#comments}}',
									'{{#unless deleted}}',
									'<li>',
										'<div class="comment">',
											'<p class="author">',
												'{{#if author}}',
												'<a href="/user/{{author}}" class="user">{{author}}</a>',
												'{{else}}',
												'<a class="anonymous">Anonymous</a>',
												'{{/if}}',
											'</p>',
											'<pre class="content">{{{text}}}</pre>',
										'</div>',
									'</li>',
									'{{else}}',
									'{{/unless}}',
								'{{/comments}}',
							'</ul>',
					 '{{/if}}',
				 '</li>',
				'{{/posts}}',
			'</ul>'
		].join('\n');

		return template;
	}
}

// submit the above

if(typeof module !== 'undefined') {
	module.exports = solve;
}
