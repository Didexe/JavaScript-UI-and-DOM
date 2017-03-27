window.onload = function () {
    // var data = {
	// 	title: 'Conspiracy Theories',
	// 	posts: [{
	// 		author: '',
	// 		text: 'Dear God,',
	// 		comments: [{
	// 			author: 'G',
	// 			text: 'Yes, my child?'
	// 		}, {
	// 			author: '',
	// 			text: 'I would like to file a bug report.'
	// 		}]
	// 	}, {
	// 		author: 'Cuki',
	// 		text: '<a href="https://xkcd.com/258/">link</a>',
	// 		comments: []
	// 	}]
	// };

	// Sample test 2

	var data = {
		title: 'JS UI & DOM 2016',
		posts: [{
			author: 'Cuki',
			text: 'Hello guys',
			comments: [{
				author: 'Kon',
				text: 'Hello'
			}, {
				text: 'Hello'
			}]
		}, {
			author: 'Cuki',
			text: 'This works',
			comments: [{
				author: 'Cuki',
				text: 'Well, ofcourse!\nRegards'
			}, {
				text: 'You are fat',
				deleted: true
			}]
		}, {
			author: 'Pesho',
			text: 'Is anybody out <a href="https://facebook.com/">there</a>?',
			comments: []
		}]
	};
	
    var forumListContainer = document.getElementById('forum-container');
    var forumListTemplate = Handlebars.compile((document.getElementById('forum-template')).innerHTML);

    forumListContainer.innerHTML = forumListTemplate(data);
};