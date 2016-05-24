(function() {
	var Bot = require('slackbots');

	// create a bot
	var settings = {
	    token: 'xoxb-45540609922-9R1rlvBkCoORbiyO2xlgz78f',
	    name: 'catbot'
	};
	var bot = new Bot(settings);

	bot.on('message', onMessage);

	if (!String.prototype.startsWith) {
	    String.prototype.startsWith = function(searchString, position){
	      position = position || 0;
	      return this.substr(position, searchString.length) === searchString;
	  };
	}

	function onMessage(message) {
		if (message.type == "message") {
			if (message.user !== bot.id) {
				var text = message.text.toLowerCase();
				if (text.startsWith("gifme")) {
					var gifnum = text.split("gifme ")[1];
					bot.postMessageToChannel('catgifs', 'http://www.catgifpage.com/gifs/' + gifnum + '.gif');
				}
			}
		}
	}

	bot.on('start', function() {
		bot.id = bot.users.filter(function(user) {
			return user.name == 'catbot';
		}).map(function(user) {
			return user.id;
		});
	    //bot.postMessageToChannel('some-channel-name', 'Hello channel!');
	    //bot.postMessageToUser('erty', 'hello bro!');
	    //bot.postMessageToGroup('some-private-group', 'hello group chat!');
	});
}());
