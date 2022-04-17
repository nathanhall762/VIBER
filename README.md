# [VIBER](https://nathanhall762.github.io/VIBER/)

## README Navigation

- [Problem](#problem)
- [Solution Overview](#solution-overview)
- [Solution](#solution)
- [Specific Projects](#specifics)
	- [Question 1 - Pick some music you like and solve a puzzle](#music)
	- [Question 2 - Professional looking design](#color)
	- [Question 3 - Pick a timed puzzle to complete](#puzzle)
	- [Question 4 - Select names for products](#match)
	- [Question 5 - Where would you?](#place)
	- [Metadata](#metadata)
- [Future Steps](#future)
	- [Build/Update](#build)
	- [Data Gathering](#gather)
	- [Exploratory Data Analysis and Feature Modeling](#analysis)
	- [Release](#release)
- [Conclusion](#conclusion)
- [Resources](#resources)
- [Credits](#credits)

## Problem

1. On Demand Talent Matching

How can you allow brands and creators to match based on mutual preferences for roles' required skills, interests, values, and experience?

2. Inclusive Hiring and Recruitment

How can you create an equitable solution to speed up the recruiting and hiring process of freelancers by brands?

<h2 id="solution-overview">Solution Overview</h2>

Company culture is vital. But ineffable.

Both employees and employes want to find a culture match. But if you can't describe it, only feel it, how can you match? Culture is often based on vibes, and how well people vibe with each other.

It's our opinion that finding actual answers are impossible. Any real comparisons you can make between employees at a company are, at best, going to find similarities, which is often the exact opposite of what a successful or innovative individual or department wants.

So how to find value in an ineffable questions? Ineffable answers.

## Solution

Everything you see on the screen is designed to be a double-blind. Does the timer matter or does your decision to find 30 words or 4 numbers? Do you change your decisions often, unable to find the right electronic music to help you shuffle together a flower, or are you confident that this cat is green and pink striped?

We don't know the answers to the questions we ask. But we think data matters. We think we'll see relationships between different clusters of people. We think we'll see trends. What does it mean? We don't know. But people find meaning in everything.

Listen, we're fully aware that knowing without a doubt what a wutox looks like could mean nothing. But what if it does mean something? What if you make it mean something? What if your irritation at someone who can't recognize an adably means something?

## Specifics

Our projects consists of 5 templates, which we were able to prototype in the hackathon's 24 hours. They are:

- <p id="music"><strong>Question 1 - Pick some music you like and solve a puzzle</strong></p>

	Our thought here was that the candidate might assume that completing the puzzle is the important thing. The existing slide puzzle requires logic. But our real interest is the music.

	Does a specific type of lyricless unrecognizable music help you concentrate? Do you unlock the puzzle by clicking play on the first music player and get straight to work? Do you skip around between songs to find the right one? If you're struggling with the project, do you try a different type of music in search of inspiration?

	Theoretically, any of these scenarios could say something about an individual's personality or preferences.

- <p id="color"><strong>Question 2 - Professional looking design</strong></p>

	We had also originally not chosen a copyright-infringing cat. Instead, we were thinking candidates might choose 5ish colors to fill a simple abstract design for a questionp otentially based on color theory. Even more interesting might be candidates selecting both shapes and colors in an actual design.

	Time being what it was, we found the cat. We still prefer the idea of abstact colors and shapes. But we like the "random color" buttons we hadn't considered, which adds a fun data point. We also think there might be some people who see something recognizable and want to recreate it.

	Would a symmetric design encourage symmetric colors? Would stripes, as in the cat, inspire patterns? Would someone choose complimentary colors or contrasting? Would someone hear 'professional design' and make it corporate or ignore the instructions and make the ugliest design possible because it's fun?

	Our idea would be to save hexcodes for the different svg fills. While we're not sure what the data would tell us, even questions like these could potentially be answered.

- <p id="puzzle"><strong>Question 3 - Pick a timed puzzle to complete</strong></p>

	Our goal here was to introduce a timer to add pressure to the candidate. However, we're not actually that interested in the timer. We want to know about the candidate's puzzle choice.

	Our example puzzle choice is between finding 30 words or 4 numbers. While the wordsearch might appear easier, it's actually very time-consuming.
	
	Would a candidate self-report themselves as a math person and go on to prove it? Would someone initially go for the wordsearch, recognize how hard it is, and think the perfect square might be less intensive? Would someone recognize that the timer resets every time they switch between puzzles and game the system? Could we turn off the timer, have the candidate complete a similar puzzle, and see if the added pressure makes any difference?

	We like the idea of opposing concepts for the puzzles, as in the existing "wordsearch" and "magic square" puzzles. However, there are multiple options. What would someone choose between large complex maze vs a small simple-looking maze? What would someone choose between sudoku vs a crossword?

- <p id="match"><strong>Question 4 - Select names for products</strong></p>

	This was our personal favorite game/question just because we found that we had weirdly strong opinions about what connotations the word sounds had. We agreed on which specific shape an ablaby was and judged anyone who mistook it for a harocele of all things.

	Ben pointed out that words have shapes. A word like sharp k sounds might look pointy or have sharp angles. A word with round b or even s sounds might look curvy.

	Could sound association mean something about someone? We noticed there were word sounds we didn't enjoy. Often we linked those to the shapes we didn't like. Could the association of boring words help identify preference in some other way?

	Our initial goal was again to focus on abstract shapes rather than identifiable pictures. But we also considered adding pictures of zebras, for example. If not 'zebra' what other words does a zebra evoke? If 'zebra' is an option, is that the perfect option for a drawing in a specific style or is that more obviously a renaix? Does the artist's style have an impact on yamev-ness vs replail-ness?

	As mentioned, however, we're just theorizing about what choices would mean. We're not sure what the data would tell us.

- <p id="place"><strong>Question 5 - Where would you?</strong></p>

	This question is probably more straightforward and the only one that we thought a more traditional survey taking tool might be able to capture data on accurately.

	This question was based off of Nathan's experience with researching Holberton as a school. He decided to apply when he saw pictures of the PLD pods. Pretty obviously to him, they were places where people met to discuss. Congrats to the designers for making that clear. For Nathan, any school that encouraged discussion was a good culture fit for him.

	Thinking of trying to pin down openness to collaboration, our initial thought was 'this spot looks designed for one person at max' might appeal to someone who prefers to work alone while 'this spot looks facilitated for discussion' might appeal to someone who is more interested in collaboration. However, it's really hard to find pictures that evoke 'communication' and there are too many other factors to consider, such as room color theme, comfort level, and preconceived associations with similar rooms.

	As such, we tried to ask the same question multiple times. Studying and working are often similar activities. Do you choose the same place to do both? Would you like to teach in the same place you'd like to listen to a lecture? If asked if you'd rather work in a library in subsequent question groups, would it be your second choice depending on the options or does it depend on how quiet-looking the specific room looked? If given 3 pictures and 3 activities, would you think you could repeat or must have one of each?

	Because we wouldn't be able to account for the multiple factors involved in choosing a room to do specific activities in, this question, while appearing the most simple, might actually be the most difficult to find useful data for.

- <p id="metadata"><strong>Metadata</strong></p>

	Ideally, we would be able to collect some metadata about our users. Even 'did you answer the questions in order or did one in particular appeal to you?' might be useful information to gather. Did the candidate change their answers? How much time did they spend on each question?

## Future

The future of VIBER would be a cycle. We would iterate and release. While the initial outline is described in some detail below, release would be the start of a new iteration where we would update based on user feedback and add new features.

<h2 id="build">Build/Update</h2>

We think we've set up a pretty good outline of what each of our question templates would look like. Still to come would be expanding the templates into more questions. There is still quite a bit of frontend implementation and iteration to do.

Our 24-hour product was a frontend. We have not added a backend or any sort of memory to our application. Our next step would be to add a database in order to add memory, as well as find out how to add all of the relevant data points we've identified. Considering we would prefer a LOT, this would take time.

<h2 id="gather">Data Gathering</h2>

After setting up our structure, the next step would be to gather data from a variety of users. Again, we would need a LOT of users in order to find do the proper data modeling. Our results are very dependent on the relationships between individuals, individual tendencies, and overall trends.

Our first users would likely not have results. After launch and while iterating on the product, our user base would indeed find out that they have been grouped into the 'Quarbons' cluster, for example, but not at the initial preparatory stage. For them, it would hopefully be fun and thought-provoking.

Based on our results, we would likely iterate on our questions.

<h2 id="analysis">Exploratory 
Data Analysis 
and Feature 
Modeling</h2>

Here is where we would give the data we've gathered to very smart data scientists who would hopefully find interesting patterns. This is also where we would find out if we've spent months on the world's dumbest idea or hit on something incredible.

If it seems like we've hit on something, we would likely iterate on our questions.

<h2 id="release">Release</h2>

If it seems like we've hit on something, while iterating and deciding on cluster names and any information we could provide to candidates, we would begin working on the release stage, which would include the steps leading to launch.

Our goal, rather than a standalone website, would be integration into larger applications. We would start to gather corporate customers who would be interesting in learning what their 'vibe' is and how to attract either more or less people with that vibe.

We would love to add VIBER to job sites. Connecting individual Quarbons to companies where Quarbons thrive would be a win. Because candidates wouldn't be able to cheat their way into a Quarbons cluster, however, we would feel confident that adding a Quarbons stamp to a LinkedIn profile would have more meaning than something than a Myers-Briggs result, which is self-reporting and potentially inaccurate.

## Conclusion

We don't like surveys. We don't think self-reporting is an accurate or helpful way to find results. So obviously, we created a survey.

However, the thought we've put into our questions means that we think our data and results won't be the seeming nonsense they might appear to be. If nothing else, we think anyone who takes our not-a-survey survey will think about the vibe they give off and the vibes they mesh well with.

After all, companies are made of individuals. The company with the world's coolest goals can be undone by a bad manager in a key department. Most people have considered leaving a position based on a poor relationship with a co-worker or manager.

We are just looking for a unique way to match job applicants to companies that fit their core values, without asking someone to self-report that and without adding bias to the mixture.

And for all we know, maybe most successful CEOs are Quarbons.

But really, all we know is that ineffable questions like "what's your vibe?" or "what's your company culture?" can only have ineffable answers.

Find VIBER at: https://nathanhall762.github.io/VIBER/

## Resources

* [Coloring](https://codepen.io/MacEvelly/pen/YXyRVE)
* [Slide Puzzle](https://codepen.io/101Computing/embed/PdGgjM?height=465&theme-id=0&default-tab=js%2Cresult&user=101Computing&slug-hash=PdGgjM&pen-title=Sliding%20Puzzle&name=cp_embed_1)
* [Magic Square](https://codepen.io/cykurtz/pen/GRZJWrE)
* [Wordsearch](https://codepen.io/Conor092/pen/OZPMKd)
* [Timer](https://codepen.io/cathydutton/pen/xxpOOw)
* [Fake Word Generator](https://randomwordgenerator.com/fake-word.php)
* [Website Template](https://html5up.net/forty)

## Credits

- [Ben Dosch](mailto:Benjamindosch@gmail.com)
- [Nathan Hall](mailto:nathanhall762@gmail.com)
- [Rachel Lewis](mailto:RLewis11769@gmail.com)
