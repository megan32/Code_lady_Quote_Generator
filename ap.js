/* quote sources: http://www.harpersbazaar.com/culture/features/a4056/empowering-female-quotes/ , https://skillcrush.com/2016/02/23/advice-from-women-in-tech/ , https://www.goodreads.com/work/quotes/21585451-you-are-a-badass-how-to-stop-doubting-your-greatness-and-start-living-a*/
var quotes = [
"Strippers do nothing for me. I like a strong salt-of-the-earth\, self-possessed woman at the top of her field\, your Steffi Graf\’s, Sheryl Swoopes\’s, but I will take a free breakfast buffet anytime\, anyplace. -Ron Swanson",
"There are only three ways to motivate people\: money, fear, and hunger. -Ron Swanson",
"Stay afraid, but do it anyway. What\’s important is the action. You don\’t have to wait to be confident. Just do it and eventually the confidence will follow. -Carrie Fisher",
"There\’s nothing as unstoppable as a freight train full of fuck-yeah. -Jen Sincero",
"We are all perfect in our own, magnificent, fucked-up ways. Laugh at yourself. Love yourself and others. Rejoice in the cosmic ridiculousness. -Jen Sincero",
"Say nice things about your body, dress it up, and take it out. Give it hot sex, luxurious baths, and massages. Move it, stretch it, nourish it, hydrate it, pay attention to it—The better our bodies feel, the happier and more productive we are. -Jen Sincero",
"I\’m tough, I\’m ambitious, and I know exactly what I want. If that makes me a bitch, okay. —Madonna",
"I also say to my team: Do ten percent of your job shittily. It\’s okay to do something shittily. Perfectionism prevents us from taking double steps in our career. We think we have to be perfect, but we don\’t. -Reshma Saujana",
"Life doesn\’t always present you with the perfect opportunity at the perfect time. Opportunities come when you least expect them, or when you\’re not ready for them. Rarely are opportunities presented to you in the perfect way, in a nice little box with a yellow bow on top. … Opportunities, the good ones, they\’re messy and confusing and hard to recognize. They\’re risky. They challenge you. -Susan Wojcicki", "A feminist is anyone who recognizes the equality and full humanity of women and men. -Gloria Steinem", "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass. -Maya Angelou", "I raise up my voice—not so I can shout, but so that those without a voice can be heard...we cannot succeed when half of us are held back. -Malala Yousafzai", "Feminism isn't about making women strong. Women are already strong. It's about changing the way the world perceives that strength. -G.D. Anderson", "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent. -Madeleine Albright", "I am a Woman Phenomenally. Phenomenal Woman, that's me. -Maya Angelou"
]
function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function reTweet() {
 window.open("http://www.twitter.com/intent/tweet?text=" + $("h3").html());
}
