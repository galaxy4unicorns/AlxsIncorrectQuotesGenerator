const quotesLibrary = {
  nothing: [ 
    { text: "{Name A}<b>:</b> It's dark in here, anyone got a torch?<br>{Name B}<b>:</b> yeah, two secs<br>{Name B}, cracks {Name C}'s back like a glow stick<b>:</b><br>{Name C}, starts glowing<b>:</b><br>{Name A}, horrified<b>:</b>", tags: [] },
    { text: "texting<br>{Name A}<b>:</b> HI!<br>{Name B}<b>:</b> Hey!<br>{Name A}<b>:</b> HOW ARE YOU?<br>{Name B}<b>:</b> I'm great! But why are you typing in capitals?<br>{Name A}<b>:</b> YOU SAID YOU HATED SMALL TALK SO I MADE IT BIG JUST FOR YOU <b>:</b>)<br>{Name A}<b>:</b> {Name B}?<br>{Name A}<b>:</b> WHY AREN'T YOU REPLYING?<br>{Name C} on {Name B}'s phone<b>:</b> {Name A}, it's {Name C}, {Name B} is currently crying", tags: [] },
    { text: "{Name A}<b>:</b> {Name B}, I want to give you some advice<br>{Name B}<b>:</b> ... right okay<br>{Name A}<b>:</b> If a door ever says 'push', you pull. It's not directions, it's a challenge.", tags: [] },
    { text: "{Name A}, Holding a python<b>:</b> Guys, I impulsively bought a snake, what do I name him<br>{Name B}<b>:</b> You did WHAT-<br>{Name C}<b>:</b> William Snakespeare", tags: [] },
    { text: "{Name A}<b>:</b> Bro, I wanna give you the world but I only have like... 20 dollars<br>{Name B}<b>:</b> Come over here<br>{Name A}, goes closer<b>:</b><br>{Name B} hugs {Name A}<b>:</b><br>{Name B}<b>:</b> I ain't got no cash on me but I got the world right here in my arms<br>{Name A}<b>:</b> Bruh<br>{Name B}<b>:</b> Bruh??", tags: [] },
    { text: "{Name A}<b>:</b> {Name B} and I are having a baby<br>{Name C}<b>:</b> That's gre-<br>{Name A}, Slamming adoption papers on the table<b>:</b> It's you, sign here", tags: [] },
    { text: "{Name A}, Looking over at their dinner<b>:</b> Man, Budapest is going to love this!<br>{Name B}<b>:</b> ...Budapest?<br>{Name A}<b>:</b> I named my stomach Budapest<br>{Name B}<b>:</b><br>{Name A}<b>:</b> Because it's the capital of HUNGRY<br>{Name B}, flipping the table<b>:</b> BRO-", tags: [] },
    { text: "{Name A}<b>:</b> You really put aside everything and came all this way for me? How did you even get here so fast?<br>{Name B}<b>:</b> Several traffic violations<br>{Name C}<b>:</b> Three counts of resisting arrest<br>{Name D}<b>:</b> Roughly thirteen cans of energy drinks<br>{Name E}<b>:</b> Also, that's not our car", tags: [] },
    { text: "{Name A}<b>:</b> {Name B} isn't answering their phone<br>{Name C}<b>:</b> I'll call<br>{Name A}<b>:</b> {Name D} and I have both tried six times each, what makes you thi-<br>{Name B}<b>:</b> Hello?", tags: [] },
    { text: "{Name A}<b>:</b> I currently have 7 empty notebooks and I have no clue what to put in them. Suggestions?<br>{Name B}<b>:</b> Put spaghetti in it<br>{Name A}<b>:</b> I'm currently taking suggestions from literally anyone but you<br>{Name C}<b>:</b> Put spaghetti in it<br>{Name A}<b>:</b> I'm currently taking suggestions from literally anyone but you two<br>{Name D}<b>:</b> Put spaghetti in it<br>{Name A}<b>:</b> I'm no longer taking suggestions", tags: [] },
    { text: "{Name A}, driving {Name B} and {Name C}<b>:</b> So how was your day?<br>{Name B}<b>:</b> We almost got surprise adopted!<br>{Name A}<b>:</b> What?<br>{Name C}<b>:</b> We almost got kidnapped<br>{Name A}<b>:</b> Oh, okay<br>{Name A}, slams on brakes<b>:</b> WAIT WHAT?!", tags: [] },
    { text: "{Name A}<b>:</b> In my defense, I was left unsupervised<br>{Name B}<b>:</b> Wasn't {Name C} with you?<br>{Name C}<b>:</b> In my defense, I was also left unsupervised", tags: [] },
    { text: "{Name A}<b>:</b> Are you high?<br>{Name B}<b>:</b> Am I what?<br>{Name A}<b>:</b> High<br>{Name B}<b>:</b> Hello!", tags: [] },
    { text: "{Name A}, staring out of the window thinking<br>{Name B}<b>:</b> They are so beautiful and thoughtful. I wonder what brilliant insights are crossing their mind today.<br>{Name A}<b>:</b> Wens-day ... Whens-day ... Weds-ne-day??", tags: [] },
    { text: "{Name A}<b>:</b> Do you think birds get sad for not having arms?<br>{Name B}<b>:</b> Well, do you get sad for not having wings?<br>{Name A}, Choked up<b>:</b> Every single day.", tags: [] },
    { text: "{Name A}, on the phone<b>:</b> Hey {Name B}, can I borrow 5,000 bucks?<br>{Name B}<b>:</b> Why the hell do you need 5,000 bucks?<br>{Name A}<b>:</b> For an escape room.<br>{Name B}<b>:</b> What kind of escape room costs 5,000?<br>{Name A}<b>:</b><br>{Name A}<b>:</b> Jail.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Is that vodka?<br>{Name B}<b>:</b> Yeah.<br>{Name A}<b>:</b> Straight?<br>{Name B}<b>:</b> No, Gay.<br>{Name A}<b>:</b> The vODKA NOT YOU!", tags: [] },
    { text: "{Name A}<b>:</b> With great power comes great need to take a nap. Wake me up later.", tags: [] },
    { text: "{Name A}<b>:</b> Some of you may die, but that's a sacrifice I'm willing to make.", tags: [] },
    { text: "Squad reactions to being told 'I love you'<br>{Name A}<b>:</b> Thanks fam!<br>{Name B}<b>:</b> Oh no<br>{Name C}, crying<b>:</b> I love you too<br>{Name D}<b>:</b> Sounds fake but okay<br>{Name E}, just a flustered mess<b>:</b><br>{Name F}<b>:</b> Can I get a refund?", tags: [] },
    { text: "{Name A}<b>:</b> What is your darkest desire?<br>{Name B}<b>:</b> I wanna stare at someone from across the street then disappear when a bus passes", tags: [] },
    { text: "Texting<br>{Name A}<b>:</b> Hey, I'm at the shops. They're out of oat milk, do you want another kind?<br>{Name B}<b>:</b> What are my choices?<br>{Name A}<b>:</b> Almond?<br>{Name A}<b>:</b> Skim?<br>{Name A}<b>:</b> 1%?<br>{Name A}<b>:</b> 2%?<br>{Name A}<b>:</b> Whole?<br>{Name B}<b>:</b> That's a lot of options<br>{Name A}<b>:</b> That's modern milk for ya<br>{Name A}<b>:</b> What a time to be alive", tags: [] },
    { text: "{Name A}<b>:</b> High difficulty level escape room concept<b>:</b> u are  laying in bed and u have one hour to get out of bed", tags: [] },
    { text: "{Name A}<b>:</b> In marriage, whoever has the cooler last name gets to continue their legacy. Reject tradition", tags: [] },
    { text: "{Name A}<b>:</b> Do you or do you not feel Bonita?<br>{Name B}, face covered in messy makeup<b>:</b> ... I feel Bonita.<br>{Name A}<b>:</b> Wonderful, because you look Bonita!", tags: [] },
    { text: "{Name A}<b>:</b> I think we're missing something<br>{Name B}<b>:</b> Teamwork?<br>{Name C}<b>:</b> Cohesion?<br>{Name D}<b>:</b> A general sense of what we're doing?", tags: [] },
    { text: "{Name A}<b>:</b> What is two plus 2?<br>{Name B}<b>:</b> Math.<br>{Name A}<b>:</b> ... I will accept that answer", tags: [] },
    { text: "{Name A}<b>:</b> Goodnight Moon<br>{Name A}<b>:</b> Goodnight tree<br>{Name A}<b>:</b> Goodnight monsters that only I can see", tags: [] },
    { text: "{Name A}<b>:</b> Let's just agree to both say we're sorry on the count of 3<br>{Name A}<b>:</b> 1.. 2.. 3<br>{Name A} and {Name B}<b>:</b><br>{Name A}<b>:</b> See, now I'm just disappointed in the both of us.", tags: [] },
    { text: "{Name A}<b>:</b> How would you describe my leadership skills?<br>{Name B}<b>:</b> Nonexistent.<br>{Name B}<b>:</b> Otherwise, excellent", tags: [] },
    { text: "{Name A}<b>:</b> I love cheating, If you don't cheat then what the hell is wrong with you?<br>{Name B}<b>:</b> Have you ever been cheated on?<br>{Name A}<b>:</b> I forgot some people are in relationships, to clarify, I love to violate academic integrity on exams", tags: [] },
    { text: "{Name A}<b>:</b> Listen up, fives!<br>{Name A}<b>:</b> A ten is speaking!", tags: [] },
    { text: "{Name A}<b>:</b> Why isn't the statue smirking at me?<br>{Name B}<b>:</b> It isn't smirking at anyone, they're all just imagining it<br>{Name A}<b>:</b> Three of us saw it, {Name B}. How do you explain that?<br>{Name B}, points at {Name C}<b>:</b> Sleep deprivation<br>{Name B}, points at {Name D}<b>:</b> Paranoia<br>{Name B}, points at {Name E}<b>:</b> Delusional personality disorder", tags: [] },
    { text: "{Name A}<b>:</b> Sorry guys, I need to be alone for a bit<br>{Name A}, grabs {Name B}'s hand and begins to walk away<b>:</b><br>{Name C}<b>:</b> But... but you just said you wanted to be alone, why are you going with {Name B}?<br>{Name A}<b>:</b> I don't follow", tags: [] },
    { text: "{Name A}<b>:</b> Truth or dare?<br>{Name B}<b>:</b> Truth<br>{Name A}<b>:</b> How many hours have you slept this week?<br>{Name B}<b>:</b><br>{Name B}<b>:</b> Dare<br>{Name A}<b>:</b> Go to sleep.<br>{Name B}<b>:</b> I don't like this game", tags: [] },
    { text: "{Name A}<b>:</b> Change is inedible<br>{Name B}<b>:</b> You mean inevitable?<br>{Name A}, spits out coins<b>:</b> No. No, I did not", tags: [] },
    { text: "{Name A}<b>:</b> Some people are like clouds. If they disappear, it's a beautiful day", tags: [] },
    { text: "{Name A}<b>:</b> What's a word that's a mix between 'sad' and 'mad'?<br>{Name B}<b>:</b> Disgruntled, miserable, desolated-<br>{Name C}<b>:</b> Smad<br>{Name B}<b>:</b>", tags: [] },
    { text: "{Name A}<b><b>:</b></b> Bye {Name B}! Bye {Name C} Bye {Name D}! Bye {Name E}! Bye {Name F}!  Bye {Name B}!<br>{Name C}<b>:</b> You said 'bye {Name B}' twice<br>{Name A}<b>:</b> I like {Name B}", tags: [] },
    { text: "{Name A}, setting down a card<b>:</b> Ace of spades!<br>{Name B}, Pulling out an Uno card<b>:</b> +4!<br>{Name C}, pulling out a Pokemon card<b>:</b> Jolteon, I choose you!!<br>{Name D}, trembling<b>:</b> What are we playing...", tags: [] },
    { text: "{Name A}<b>:</b> When I die, I want {Name B} to lower me into my grave<br>{Name A}<b>:</b> So they can let me down one last time", tags: [] },
    { text: "{Name A}<b>:</b> Do you ever want to talk about your emotions, {Name B}?<br>{Name B}<b>:</b> ... no.<br>{Name C}<b>:</b> I do!<br>{Name A}<b>:</b> I know, {Name C}<br>{Name C}<b>:</b> I'm sad!<br>{Name A}<b>:</b> I know, {Name C}", tags: [] },
    { text: "{Name A}, gently taps table<b>:</b><br>{Name B}, taps back<b>:</b><br>{Name C}<b>:</b> What are they doing?<br>{Name D}<b>:</b> Morse code<br>{Name A}, aggressively taps table<b>:</b><br>{Name B}, slams hands down<b>:</b> YOU TAKE THAT BACK-", tags: [] },
    { text: "{Name A}<b>:</b> I need relationship advice<br>{Name B}, who's never felt the touch of a woman in their life<b>:</b> You've come to the right place", tags: [] },
    { text: "{Name A}<b>:</b> We've been conducting an ongoing study to see what {Name C} will and will not eat<br>{Name B}<b>:</b> Grass? Yes!<br>{Name A}<b>:</b> Moss? Yes!!<br>{Name B}<b>:</b> Leaves? Ohh, yes!<br>{Name A}<b>:</b> Shoelaces? Strange but true!<br>{Name B}<b>:</b> Worms? Sometimes!<br>{Name A}<b>:</b> Rocks? Usually nah<br>{Name B}<b>:</b> Twigs? Usually!<br>{Name A}<b>:</b> {Name E}'s cooking? Inconclusive!<br>{Name D}<b>:</b> How did you.. test this?<br>{Name A}<b>:</b> You just hand them stuff and say 'eat this' and if they eat it, they eat it<br>{Name D}<b>:</b> ... I don't know how to feel about this<br>{Name E}<b>:</b> IS THAT WHERE ALL MY SPARE SHOELACES WENT", tags: [] },
    { text: "{Name A}<b>:</b> My father is not a man.<br>{Name A}<b>:</b> He is a one-spot Yelp review come to life", tags: [] },
    { text: "{Name A}<b>:</b> {Name C} is mad at me, and I'm not sure why<br>{Name B}<b>:</b> Okay, did you talk before they got upset?<br>{Name A}<b>:</b> ... yes?<br>{Name B}<b>:</b> That's probably it", tags: [] },
    { text: "{Name A}, entering the room<b>:</b><br>{Name A} seeing {Name B} and immediately leaves<b>:</b><br>{Name B}, watching {Name A} leave<b>:</b> There's my monthly dose of {Name A}...", tags: [] },
    { text: "{Name A}<b>:</b> What are your goals?<br>{Name B}<b>:</b> To pet all dogs<br>{Name A}<b>:</b> No, fitness goals<br>{Name B}<b>:</b> To be able to run fast enough to pet all the dogs", tags: [] },
    { text: "{Name A}<b>:</b> I don't even have time to tell you how wrong you are<br>{Name A}<b>:</b> Actually, it's gonna bug me if I don't", tags: [] },
    { text: "{Name A}<b>:</b> {Name B}, may I speak with you for just a moment?<br>{Name B}<b>:</b> Ooo someone's in trouble<br>{Name B}<b>:</b> It's me. I don't know why I did that", tags: [] },
    { text: "{Name A}<b>:</b> My policy is if you see something, say something!<br>{Name B}<b>:</b> I saw a squirrel in a tree today!<br>{Name A}, with the tone of someone who is used to {Name B}<b>:</b> Outstanding.<br>{Name A}<b>:</b> This is what I'm talking about people", tags: [] },
    { text: "{Name A}<b>:</b> Am I in trouble<br>{Name B}<b>:</b> Take a guess<br>{Name A}<b>:</b> No?<br>{Name B}<b>:</b> take another guess", tags: [] },
    { text: "{Name A}<b>:</b> Man sure is dark in here<br>{Name B}<b>:</b><br>{Name A}<b>:</b> I'm not scared or anything<br>{Name B}<b>:</b><br>{Name A}<b>:</b> I mean who is scared of the dark these days? Not me no sir<br>{Name B}<b>:</b> Do you want me to hold your hand?<br>{Name A}<b>:</b> Yes please.", tags: [] },
    { text: "{Name A} and {Name B} turn up at {Name C}'s house and knock<b>:</b><br>{Name A}<b>:</b> Can we stay with you tonight<br>{Name C}<b>:</b> Both of you? What happened?<br>{Name B}<b>:</b> Someone was playing with an ouija board and cursed the whole house<br>{Name A}<b>:</b> {Name D} wasn't any help. He doesn't know how to banish spirits. So he's just throwing salt at them yelling 'Does this look like a hotel to you?!'", tags: [] },
    { text: "{Name A}<b>:</b> Are you ok?<br>{Name B}<b>:</b> I have this headache that comes and goes<br>{Name C}<b>:</b> Hello {Name B}!<br>{Name B}<b>:</b> Oh no, it's back", tags: [] },
    { text: "{Name A}<b>:</b> If I see the word gaslight one more time... I'm getting off the internet forever<br>{Name B}<b>:</b> You're not even seeing it that much<br>{Name C}<b>:</b> Yeah, it's all in your head", tags: [] },
    { text: "{Name A}<b>:</b> I'll never talk!<br>{Name B}, sharpening a knife<b>:</b> I have ways of making people talk<br>{Name A}<b>:</b><br>{Name B}, cutting a piece of cake<b>:</b><br>{Name A}<b>:</b> ... Can I have some?<br>{Name B}<b>:</b> Cake is for talkers", tags: [] },
    { text: "{Name A}<b>:</b> Have you ever heard the expression 'Don't judge a book by its cover'?<br>{Name B}<b>:</b> No<br>{Name A}<b>:</b> What about 'It's what's on the inside that counts'?<br>{Name B}<b>:</b> Nuh-uh<br>{Name A}<b>:</b> 'Looks can be deceiving'?<br>{Name B}<b>:</b> Doesn't ring a bell<br>{Name A}<b>:</b> What's wrong with you??<br>{Name B}<b>:</b> Oh, that one I've heard!", tags: [] },
    { text: "{Name A}, putting their hands over {Name B}'s eyes<b>:</b> Guess who!<br>{Name B}<b>:</b> It's either {Name A} or the cold, clammy hands of death<br>{Name A}, pulling their hands away<b>:</b> It's {Name A}!<br>{Name B}<b>:</b> Dammit", tags: [] },
    { text: "{Name A}<b>:</b> Look at this thing, I'm gonna call it a long horse<br>{Name B}<b>:</b> That's a giraffe<br>{Name A}<b>:</b> Oh<br>{Name A}<b>:</b><br>{Name A}<b>:</b> Long horse it better", tags: [] },
    { text: "{Name A}<b>:</b> Were you dropped on your head as a child?<br>{Name B}<b>:</b> Bold of you to assume I was even held<b>:</b><br>{Name A}<b>:</b><br>{Name C}<b>:</b> {Name B}, we talked about this-", tags: [] },
    { text: "{Name A}<b>:</b> Good morning, cruel world!<br>{Name B}<b>:</b> That's not the phrase, Did you mean 'Goodbye'?<br>{Name A}<b>:</b> No, I meant good morning<br>{Name A}<b>:</b> This world may be cruel, but I'm still kickin'!<br>{Name B}<b>:</b> That really cheered me up!", tags: [] },
    { text: "{Name A}<b>:</b> I'm not mean, Name one mean thing I've ever done<br>{Name B}<b>:</b> When we were younger, you convinced me eggs weren't real<br>{Name A}<b>:</b> They're not<br>{Name B}<b>:</b> Haha, very funny<br>{Name A}<b>:</b> I'm serious, didn't you hear?<br>{Name B}<b>:</b> No... what happened?<br>{Name A}<b>:</b> ... Why would you fall for this again-", tags: [] },
    { text: "{Name A}<b>:</b> I swear, no matter how long I've been friends with people, there's always someone who's surprised that I'm left-handed<br>{Name B}<b>:</b> You're left-handed!?<br>{Name A}<b>:</b><br>{Name A}, punches a wall<b>:</b>", tags: [] },
    { text: "{Name A}<b>:</b> What do people like you get from stealing from others?<br>{Name B}<b>:</b> I get what I stole<br>{Name B}<b>:</b> What kind of dumb question is that?", tags: [] },
    { text: "{Name A}<b>:</b> Are you religious? I'd like to introduce you to my religion<br>{Name B}, sighing<b>:</b> What is your religion?<br>{Name A}, shows a picture of {Name C} doing something chaotic<b>:</b><br>{Name B}<b>:</b> I'm interested...", tags: [] },
    { text: "Kidnapper<b>:</b> We have your partner<br>{Name A}<b>:</b> You have {Name B}?<br>Kidnapper<b>:</b> Yeah<br>{Name A}<b>:</b> Good luck with that", tags: [] },
    { text: "{Name A}<b>:</b> Gods are stubborn<br>{Name A}<b>:</b> So am I", tags: [] },
    { text: "{Name A}, laying in bed<b>:</b> Get out of my room<br>{Name B}, standing just outside of the door frame with a smirk<b>:</b> I'm not in your room", tags: [] },
    { text: "{Name A}<b>:</b> I trust {Name B}<br>{Name C}<b>:</b> You think they knows what their doing?<br>{Name A}<b>:</b> I wouldn't go that far", tags: [] },
    { text: "{Name A}<b>:</b> Why me?<br>{Name B}<b>:</b> Because people like you. You're quiet, you say 'excuse me', you look like little birds help you get dressed in the morning", tags: [] },
    { text: "{Name A}<b>:</b> I have everything under control<br>{Name B}<b>:</b> Is that why everything is on fire?", tags: [] },
    { text: "{Name A}<b>:</b> Hey, what's wrong buddy?<br>{Name B}, drunk and crying as they pet like 5 different cats<b>:</b> I don't have enough hands", tags: [] },
    { text: "{Name A}, very seriously<b>:</b> You need to stop doing weird things to cope with the stress. Going outside might help<br>{Name B}<b>:</b> I went to the park today<br>{Name A}<b>:</b> There you go! I hope you got something from that<br>{Name B}, opening coat<b>:</b> This duck!", tags: [] },
    { text: "{Name A}<b>:</b> ..... am I going too far?<br>{Name B}<b>:</b> No no no, you went too far like 7 hours ago. Now you're going to jail", tags: [] },
    { text: "{Name A}<b>:</b> Why stop at capitalism? Destroy everything", tags: [] },
    { text: "{Name A}<b>:</b> Guys, it's been three weeks since I've eaten a vegetable", tags: [] },
    { text: "{Name A}<b>:</b> At least we have memes to dull the pain of existence", tags: [] },
    { text: "{Name A}<b>:</b> Oh my god<br>{Name A}<b>:</b> I thought seven was less than six", tags: [] },
    { text: "{Name A}<b>:</b> If cows ruled the world, would they drink human milk?", tags: [] },
    { text: "{Name A}<b>:</b> My calculator is broken<br>{Name B}<b>:</b> Your calculator isn't broken<br>{Name B}<b>:</b> You're broken", tags: [] },
    { text: "{Name A}<b>:</b> Has anyone ever been to New Orleans?<br>{Name B}<b>:</b> Does Popeyes count?", tags: [] },
    { text: "{Name A}<b>:</b> My word count on this paper isn't very high, but I certainly am", tags: [] },
    { text: "{Name A}<b>:</b> We're in adult limbo. I'm not a teen and I'm not an adult. I'M SUFFERING, THAT'S WHAT I AM", tags: [] },
    { text: "{Name A}<b>:</b> Look at my<br>{Name A}, swinging up leg to show shorts<b>:</b> pants", tags: [] },
    { text: "{Name A}<b>:</b> You really think that this will work?<br>{Name B}<b>:</b> No, not at all<br>{Name A}<b>:</b> Then why the heck are we doing it!?<br>{Name B}<b>:</b> It sounded fun<br>{Name A}<b>:</b> We're all gonna die", tags: [] },
    { text: "{Name A}<b>:</b> You're... alive<br>{Name B}<b>:</b> Great observation, genius<br>{Name A}<b>:</b> but, you were dead<br>{Name A}<b>:</b> Well luckily you really are a failure", tags: [] },
    { text: "{Name A}<b>:</b> I hate you<br>{Name B}<b>:</b> Hate is a strong word<br>{Name A}<b>:</b> Well, I have strong emotions", tags: [] },
    { text: "{Name A}<b>:</b> I don't believe in never<br>{Name B}<b>:</b> I don't believe in always<br>{Name A}<b>:</b> Well, opposites attract<br>{Name B}, raising an eyebrow<b>:</b> Never<br>{Name A}, smirking<b>:</b> Always", tags: [] },
    { text: "-Loud crash-<br>{Name A}<b>:</b> I'm having a problem", tags: [] },
    { text: "{Name A}<b>:</b> Can I bother you for a second?<br>{Name B}<b>:</b> You always bother me, but go ahead", tags: [] },
    { text: "{Name A}<b>:</b> I just saw {Name B} in the library cry for like five or six minutes and then their phone alarm went off and they just?? Stopped crying?? And went right back to work???<br>{Name C}<b>:</b> It's called time management, {Name A}", tags: [] },
    { text: "{Name A}<b>:</b> It's in times like these that I really wish I had listened to what {Name B} told me when I was young<br>{Name C}<b>:</b> Why? What did they say?<br>{Name A}<b>:</b> I don't know, I didn't listen", tags: [] },
    { text: "{Name A}<b>:</b> We are seven months into the year, what have you accomplished?<br>{Name B}<b>:</b> I don't like your tone.", tags: [] },
    { text: "{Name A}<b>:</b> I'm old enough to do what I want<br>{Name B}<b>:</b> I'm calling {Name C}<br>{Name A}<b>:</b> WAIT! NO-", tags: [] },
    { text: "{Name A}<b>:</b> Who broke the toaster<br>{Name B}<b>:</b> {Name E} broke it<br>{Name C}<b>:</b> It was {Name E}<br>{Name D}<b>:</b> {Name E} did it<br>{Name E}, feeling betrayed<b>:</b> ...<br>{Name E}<b>:</b> YOU PROMISED-", tags: [] },
    { text: "{Name A}<b>:</b> I was thinking in the shower<b>:</b> If 666 is evil, then 25.806975801127 is the root of all evil<br>{Name B}<b>:</b> Do you have a calculator in your SHOWER?", tags: [] },
    { text: "{Name A}<b>:</b> You're up to something aren't you?<br>{Name B}<b>:</b> You don't sound particularly upset about that<br>{Name A}<b>:</b> ...I'm not<br>{Name B}<b>:</b> And yet your eyes still hold displeasure<br>{Name A}<b>:</b> <br>{Name B}<b>:</b> You're upset I didn't include you, aren't you?<br>{Name A}<b>:</b> ... A little", tags: [] },
    { text: "{Name A}, heading out for their 5am run<b>:</b><br>{Name B}, going to bed<b>:</b>", tags: [] },
    { text: "{Name A}<b>:</b> Lily?<br>{Name B}<b>:</b> What?<br>{Name A}<b>:</b> James hasn't texted either of us in five hours<br>{Name B}<b>:</b> I'll call hospitals, you call the police station", tags: [] },
    { text: "{Name}<b>:</b> I hope no one lowkey hates me<br>{Name}<b>:</b> Highkey hate me, Hate me with every fiber of your being<br>{Name}<b>:</b> Go big or go home", tags: [] },
    { text: "{Name A} putting a get well soon card in an envelope and signing it to {Name B}<b>:</b><br>{Name C}<b>:</b> Oh, is {Name B} sick?<br>{Name A}<b>:</b> No<br>{Name A}<b>:</b> I just think {Name B} could do better<br>{Name C}<b>:</b> Real", tags: [] },
    { text: "{Name A}, walking out in the most obnoxious flares<b>:</b><br>{Name B}<b>:</b> Oh my god<br>{Name C}, giggling<b>:</b> Oh lord that's so embarrassing<br>{Name B}<b>:</b> They're definitely buying them<br>{Name D}, walking out in a matching pair<b>:</b><br>{Name C}<b>:</b> <br>{Name B}<b>:</b> Not so funny now is it?<br>{Name C}<b>:</b> They are definitely buying those too<br>{Name D} and {Name A}, giggling and posing in the mirrors together<b>:</b>", tags: [] },
    { text: "{Name A}<b>:</b> Hey {Name B}, can you do the thing?<br>{Name B}<b>:</b> What thing?<br>{Name A}<b>:</b> The thing that makes me smile<br>{Name B}<b>:</b> Oh!-<br>{Name B}, smiling<b>:</b><br>{Name A}<b>:</b> Thank you", tags: [] },
    { text: "{Name A}<b>:</b> {Name B}, I'm sad<br>{Name B}, Holding out arms for a hug<b>:</b> It's gonna be ok<br>{Name C}<b>:</b> {Name D}, I'm sad<br>{Name D}, nodding<b>:</b> Mood", tags: [] },
    { text: "Baby {Name A}, crying<b>:</b><br>{Name B}, picks up {Name A}<b>:</b> Oh, it's ok, sweetheart, you'll learn to do that on the inside when you get older<br>{Name C}<b>:</b><br>{Name C}<b>:</b> {Name B}, are you okay?", tags: [] },
    { text: "{Name A}, taking a bite<b>:</b> Amazing<br>{Name B}<b>:</b> My curry?<br>{Name A}<b>:</b> No, my patience for your cooking skills", tags: [] }


    // Add more quotes for the "Nothing" section
  ],
  swearing: [
    { text: "{Name A}<b>:</b> If you add 'uwu' at the end of a sentence it makes it cute<br>{Name B}<b>:</b> You're right uwu<br>{Name C}<b>:</b> I also agree uwu<br>{Name D}<b>:</b> I'm going to kill all of you uwu<br>{Name E}<b>:</b> Don't uwu<br>{Name D}<b>:</b> Fuck you uwu", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Yo is {Name D} sleeping or dead?<br>{Name B}<b>:</b> Hopefully dead, I hated their guts<br>{Name C}<b>:</b> Yeah, so did I<br>{Name D}<b>:</b> Okay first of all, fuck you-", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> You have to apologize to {Name B}<br>{Name C}<b>:</b> Fine.<br>{Name C}<b>:</b> 'Unfuck you' or whatever.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Who the fuck added me to a fucking group chat?<br>{Name B}<b>:</b> ><b>:</b>O Language.<br>{Name C}<b>:</b> Yeah, watch your fucking language<br>{Name D}<b>:</b> OKAY WHO TAUGHT {Name C} THE FUCK WORD?<br>{Name E}<b>:</b> 'The fuck word'<br>{Name F}<b>:</b> Are you stupid? You guys use the f word all the time<br>{Name C}<b>:</b> Oh my god they censored it<br>{Name E}<b>:</b> Say fuck, {Name F}.<br>{Name C}<b>:</b> Do it, {Name F}. Say fuck.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Fuck<br>{Name B}<b>:</b> Language!<br>{Name C}<b>:</b> Shit!<br>{Name B}<b>:</b> Language!<br>{Name D}<b>:</b> Who the fuck do you think you're calling a bitch, you ass?<br>{Name B}<b>:</b> Language!<br>{Name E}<b>:</b> Now that's one crazy motherfucker<br>{Name B}<b>:</b> Language!<br>{Name F}<b>:</b> What the frick frack tickity tic tac snik snak, bro?<br>{Name B}<b>:</b><br>{Name B}<b>:</b> What the fuck", tags: ["swearing"] },
    { text: "Doorbell rings<br>{Name A}, opening the door<b>:</b> Hello?<br> Exorcist<b>:</b> Hello, I'm here to remove the demon that has possessed you.<br>{Name A}, frowning<b>:</b> uhm, I didn't call you?<br>Demon<b>:</b> I did<br>{Name A}<b>:</b> Fucking traitor.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Okay okay stop asking me if I'm straight, gay, bi, whatever. I identify as a FUCKING THREAT", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Alright, listen up you little shits<br>{Name A}<b>:</b> Not you {Name B}, You're an angel and we're thrilled you're here", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Whose turn is it to give the pep-talk?<br>{Name B}<b>:</b> {Name C}<br>{Name C}<b>:</b> Fuck shit up out there, but don't die<br>{Name D}<b>:</b> Outstanding.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Hey, can you do me a favor?<br>{Name B}<b>:</b> Sorry, I have to go do literally anything other than this<br>{Name A}<b>:</b> You don't even have a legitimate reason?<br>{Name B}<b>:</b> Oh, no, I do<br>{Name A}<b>:</b> Well, What is it?<br>{Name B}<b>:</b> You see, I simply don't give a fuck", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> It's impossible to make a sentence without using the letter A<br>{Name B}<b>:</b> Despite your thinking, it is quite possible yet difficult, to form one without the specific letter. Here's one more to further disprove your theory<br>{Name C}<b>:</b> Fuck you", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> I had a dream that you were my therapist but all you did was call me a bitch<br>{Name B}<b>:</b> Bitch<br>{Name C}<b>:</b> Dreams do come true", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Five years ago I was a fucking mess and now I'm a fucking mess but at peace with it and with a cooler fashon sense", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> So, um, where were ya'll born?<br>{Name B}, bitterly<b>:</b> I was made in a lab!<br>{Name A}<b>:</b><br>{Name A}<b>:</b> Wh-<br>{Name C}<b>:</b> I just straight up fucking spawned<br>{Name A}<b>:</b><br>{Name D}<b>:</b> Bold of you to assume I was born in a comprehensible manner.<br>{Name A}, looking at {Name E}<b>:</b><br>{Name E}, shrugging<b>:</b> I told you, these kids are fucked up and technically {Name D} is the only one lying", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> I am a traumatized little bitch", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Do you have a self-care routine?<br>{Name B}<b>:</b> 'Keep going bitch', said to myself in different accents", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Ow! son of a bit-<br>{Name B}<b>:</b> You dislocated your shoulder. Want me to pop it back in?<br>{Name A}, grimacing<b>:</b> Yeah... okay<br>{Name B}<b>:</b> Alright, on 3... 0, 1<br>{Name B} pops {Name A}'s shoulder into place<b>:</b><br>{Name A}<b>:</b> MOTHERFU- Who the hell starts with 0?!", tags: ["swearing"] },
    { text: "{Name A}, Stubs toe, trips over chair, drops can on foot, and hits bedpost for the millionth time<b>:</b><br>{Name B}, from behind the newspaper<b>:</b> And I thought living with you would be boring...<br>{Name A}, with tears in their eyes and a choked whisper<b>:</b> You're a jackass", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Could you at least try to be nice?<br>{Name B}<b>:</b> You're still breathing, that's me being fucking nice, asshole", tags: ["swearing"] },
    { text: "{Name A}, looking {Name B} dead in the eyes<b>:</b> Why would it be a bad idea for me to eat this entire marker?", tags: [] },
    { text: "{Name A}, holding up their hand<b>:</b> A little slappy to make daddy happy?<br>{Name B}<b>:</b> wtf-", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> I can take care of myself! I don't need your charity!<br>{Name B}<b>:</b> You have a fever, I need to-<br>{Name A}<b>:</b> Don't touch me with your filthy hands!<br>{Name B}<b>:</b> Listen here, you little bitch<br>{Name B}<b>:</b> I don't like you either, but I'm not going to let you suffer when I know I can do something to help. So shut the fuck up and let me do my job", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> {Name B} talks in their sleep sometimes, and it's adorable<br>{Name B}, sleeping<b>:</b> Fight me... you motherfucker... square up bitch...", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> GUYS WE NEED TO GET SLUTTIER<br>{Name B}<b>:</b> ON IT BOSS!<br>{Name B} changes from their regular t-shirt into an identical t-shirt that just has the word COCK on it<b>:</b>", tags: ["swearing"] },
    { text: "{Name A}, walking out of the bathroom<b>:</b><br>{Name A}<b>:</b> What the fuck!<br>{Name B}, lying face first on the ground<b>:</b><br>{Name B}<b>:</b> Finally!<br>{Name A}<b>:</b><br>{Name B}, getting up<b>:</b><br>{Name B}<b>:</b> Your showers take too long<br>{Name A}<b>:</b><br>{Name B}<b>:</b> Move", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> It isn't funny! This is serious!<br>{Name B}<b>:</b> It's pretty funny<br>{Name C}<b>:</b> It's fucking hilarious actually<br>{Name D}, twitching on the floor, still wheezing with laughter<b>:</b>", tags: ["swearing"] },


    // Add more swearing quotes
  ],
  shipping: [
    { text: "{Name A}<b>:</b> {Name B}, {Name C} loves you<br>{Name B}<b>:</b> So I've heard<br>{Name A}<b>:</b> So will you go out with them?<br>{Name B}<b>:</b> Of course not.<br>{Name A}<b>:</b> PLEASE, {Name B}!<br>{Name B}<b>:</b> I'm sorry, but no.<br>{Name A}<b>:</b> You don't understand what you're doing!<br>{Name B}<b>:</b> I'm saying no to going out with the most arrogant guy I know<br>{Name A}<b>:</b> No, their holding my chocolates hostage until I get you to agree to date him, {Name B} PLEASE!!", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I'm kind of crushing on someone, but I'm worried about telling you who it is because you're not going to like it<br>{Name B}<b>:</b> Just rip the bandage off<br>{Name A}<b>:</b> It's {Name C}<br>{Name B}<b>:</b> Put the bandage back on.", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Do you think your family likes me?<br>{Name B}<b>:</b> My mum literally begged you to marry me.", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> You amaze me and scare me.<br>{Name A}<b>:</b> I can't tell if I'm attracted to it or want to run away.<br>{Name B}<b>:</b> I'm hoping it's the former. But I like it when people are scared of me.<br>{Name A}<b>:</b> Yeah, it's definitely both.", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Just be yourself<br>{Name B}<b>:</b> 'Be myself'? {Name A}, I have one day to win over {Name C} over. How long did it take before you guys started liking me?<br>{Name D}<b>:</b> Couple weeks<br>{Name E}<b>:</b> Six months<br>{Name F}<b>:</b> Jury's still out<br>{Name B}<b>:</b> See, Person A?<br>{Name B}<b>:</b> 'Be myself'. What kind of garbage advice is that?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I heard you like bad guys<br>{Name B}<b>:</b><br>{Name A}<b>:</b> Tell them, {Name C}<br>{Name C}<b>:</b> Their's the worst guy I've ever met", tags: ["shipping"] },
    { text: "{Name A}, to {Name B}<b>:</b> Since we're in a relationship now, your clothes are now my clothes too. Don't ask me why I have your shirt on. This is our shirt", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I hate you<br>{Name B}, in their head<b>:</b> Enemies to lovers, slow burn. Angst with happy ending. 300k+ words", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I'm breaking up with you<br>{Name B}<b>:</b> No you're not.<br>{Name B}<b>:</b> Here, have a slice of cake instead", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> You know, {Name C} gives {Name D} flowers all the time, I wish you'd do that too<br>{Name B}<b>:</b> Okay<br>-later-<br>{Name B}, gives {Name D} flowers<b>:</b><br>{Name D}<b>:</b> ?? Thank? You??<br>{Name B}<b>:</b> I am just as confused as you are", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Who else here thought {Name B} was my partner?<br>{Name A}<b>:</b> {Name B}, put your hand down", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I'm actually deeply in love with {Name B} and we've been dating for a couple months now, we even have pet names<br>{Name C}<b>:</b> Why are you telling me this??<br>{Name A}<b>:</b> Because no one will believe you", tags: ["shipping"] },
    { text: "{Name A}, sweating<b>:</b> So, I was wondering-<br>{Name B}<b>:</b> Oh finally! You're proposing<br>{Name A}<b>:</b> Wait- YOU KNEW?<br>{Name B}<b>:</b> You accidentally dropped the ring six times during dinner<br>{Name A}<b>:</b><br>{Name B}<b>:</b> I even picked it up and handed it over to you", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Ughh, crushes are so dumb<br>{Name B}<b>:</b> I know, whenever I'm near the person I like I turn red<br>{Name A}<b>:</b> But you're always red?<br>{Name B}<b>:</b><br>{Name B}<b>:</b> Don't think about that too hard, mate", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> {Name B}, you are under arrest<br>{Name B}<b>:</b> Wait, what? why?<br>{Name A}<b>:</b> For stealing {Name C}'s heart<br>{Name C}<b>:</b> Did you just hit on {Name B} for me?<br>{Name A}<b>:</b> I'm tired of WAITING, {Name C}", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Wait a minute!<br>{Name A}<b>:</b> {Name C} kissed you!?<br>{Name A}<b>:</b> And you said?<br>{Name B} 'Wow! Thank you'<br>{Name A}<b>:</b> Well, that was very polite of you", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Did {Name B} just tell me they loved me for the first time?<br>{Name C}<b>:</b> Yeah, they did<br>{Name A}<b>:</b> And did I just do finger guns back?<br>{Name C}<b>:</b> Yeah, you did", tags: ["shipping"] },
    { text: "{Name A}, trying to flirt with {Name B}<b>:</b> You have a face<br>{Name B}<b>:</b> Yes, I do<br>{Name A}<b>:</b> You have a pretty face<br>{Name B}<b>:</b> Thanks<br>{Name A}<b>:</b> I like your face<br>{Name B}<b>:</b> Why did I fall in love with you again?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Loving you is as easy as breathing<br>{Name B}<b>:</b> But you're asthmatic?<br>{Name A}<b>:</b> Your point?", tags: ["shipping"] },
    { text: "{Name A}, seeing {Name B} and {Name C} holding hands<b>:</b> Sooo, who finally confessed?<br>{Name B}, with a proud smile<b>:</b> It was me! I made sure it was short and sweet<br>{Name C}<b>:</b> You yelled 'Listen here, you little shit, I have feelings for you, and it's time you acknowledged them'... From the roof<br>{Name B}<b>:</b> It worked though", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I love {Name B} so much I have a whole Pinterest board of them and an album on my phone and their set as my wallpaper and AND AWHGHWGWGWH I LOVE THEM SO MUCH", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I have a feeling if {Name B} were to even propose to {Name C}, instead of 'Will you marry me,' they would say 'You will marry me.'", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> You're jealous?<br>{Name B}<b>:</b> Me? Jealous? Over you? Absolutely I am, you're mine", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> {Name C}'s lip balm tasted really good, like eucalyptus<br>{Name B}<b>:</b> You guys KISSED?<br>{Name C}<b>:</b> No, {Name A} just ate my lip balm", tags: ["shipping"] },
    { text: "{Name A} suddenly kissed {Name B}<b>:</b><br>{Name B}, breaking the kiss<b>:</b> - Whoa! Whoa! Whoa! What's going on? you and I just made out! You and I are making out?<br>{Name A}<b>:</b> Well, not anymore<br>{Name B}<b>:</b> But we don't do that!<br>{Name A}<b>:</b> I know, I just thought it would be fun<br>{Name B}<b>:</b> How drunk are you?<br>{Name A}<b>:</b> Drunk enough to know that I want to do this, Not so drunk that you should feel guilty about taking advantage<br>{Name B}<b>:</b><br>{Name B}<b>:</b> That's the perfect amount!<br>{Name A}<b>:</b> Okay!<br>{Name A} and {Name B} start kissing again", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> They're mine<br>{Name B}<b>:</b> No, they're mine<br>{Name C}, sitting down at the table<b>:</b> What are they on about now?<br>{Name D}<b>:</b> They're fighting over James<br>{Name E}, watching in awe<b>:</b><br>{Name C}<b>:</b> They're getting awfully close<br>{Name A} and {Name B} start kissing<b>:</b><br>{Name C}<b>:</b> I think this might be the best day of James' life<br>{Name E}, staring<b>:</b><br>{Name D}<b>:</b> What an interesting development", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I bet I can hold the whole world in my hands<br>{Name B}<b>:</b> {Name A}, that is physically impossible<br>{Name A}, cupping {Name B}'s face<b>:</b> Are you sure about that<br>{Name B}<b>:</b> {Name A}, please, I have a reputation", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> If I say I love you, will you say it back?<br>{Name B}<b>:</b> Yes<br>{Name A}<b>:</b> I love you<br>{Name B}<b>:</b> It back<br>-later-<br>{Name C}<b>:</b> Why is {Name A} crying facedown on the floor?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Thank you for inviting me to {Name B}'s wedding today, {Name C}<br>{Name B}<b>:</b> Yes, it's no problem dear<br>{Name A}<b>:</b> This is probably a stupid question, but who is {Name B} marrying? I haven't seen them<br>{Name D}<b>:</b> You. You're the fiancé. This is your wedding with {Name B}<br>{Name A}<b>:</b> Wait, what?<br>{Name D}<b>:</b> There's your officiant. This is your wedding ring. I suggest taking them somewhere far, far away for your honeymoon<br>{Name B}<b>:</b> For a week<br>{Name D}<b>:</b> Here's some money, make it two<br>{Name C}, walking in<b>:</b> Oh! This is beautiful! Who's having a wedding today?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Is that a hickey?<br>{Name B}<b>:</b> Oh, no. I just, I... fell down<br>{Name A}<b>:</b> On {Name C}'s lips?", tags: ["shipping"] },


    // Add more shipping quotes  {Name B}
  ],
  violence: [
    { text: "{Name A}<b>:</b> What are you, 5?<br>{Name B}, snorts<b>:</b> Yeah, 5 heads taller than you<br>{Name A}<b>:</b><br>{Name B}<b>:</b><br>{Name B}<b>:</b> I'm sorry don't kill me please", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I made all of you into Sims, look!<br>{Name B}<b>:</b> Where are you?<br>{Name A}<b>:</b> I'm the grave in the backyard<br>{Name C}<b>:</b><br>{Name B}<b>:</b><br>{Name B}<b>:</b> Put me there too<br>{Name C}<b>:</b> Oh my god-", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Do not fear death. Fear the state in which you die.<br>{Name B}, in a terrified whisper<b>:</b> New Jersey...", tags: ["violence"] },
    { text: "{Name A} and {Name B}, Watching the neighborhood kids play<b>:</b><br>{Name A}<b>:</b> Look at them. They're having so much fun, they're so happy<br>{Name B}<b>:</b> Yeah<br>{Name B}<b>:</b> How long do you think it'll be until they lose the will to live?<br>{Name A}<b>:</b> I don't remember ever having one<br>{Name B}<b>:</b> Yeah, those kids are doomed", tags: ["violence"] },
    { text: "{Name A}<b>:</b> What does 'take out' mean?<br>{Name B}<b>:</b> Food<br>{Name C}<b>:</b> Dating<br>{Name D}<b>:</b> Murder<br>{Name E}<b>:</b> IT CAN MEAN ALL THREE IF YOU'RE NOT A COWARD!", tags: ["violence"] },
    { text: "{Name A}<b>:</b> WHY. Why did you give {Name C} a KNIFE?!<br>{Name B}<b>:</b> I'm sorry. They said they felt unsafe<br>{Name A}<b>:</b> Now I feel unsafe!<br>{Name B}<b>:</b> I'm sorry<br>{Name B}<b>:</b> ... would you like a knife?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Time for plan G<br>{Name B}<b>:</b> Don't you mean plan B?<br>{Name A}<b>:</b> No, we tried plan B a long time ago, I had to skip over plan C due to technical difficulties<br>{Name C}<b>:</b> What about plan D?<br>{Name A}<b>:</b> Plan D was that desperate disguise attempt half an hour ago<br>{Name D}<b>:</b> What about plan E?<br>{Name A}<b>:</b> I'm hoping not to use it. I die in plan E<br>{Name E}<b>:</b> I like plan E", tags: ["violence"] },
    { text: "{Name A}<b>:</b> A mosquito tried to bite me and I slapped it and killed it<br>{Name A}<b>:</b> And I started thinking<br>{Name A}<b>:</b> Like it was just trying to get food<br>{Name A}<b>:</b> What if I went to the fridge and it just slammed the door shut and snapped my neck<br>{Name A}<b>:</b> How would I feel?<br>{Name B}<b>:</b> Are you ok?", tags: ["violence"] },
    { text: "{Name A}, drowning<b>:</b><br>{Name B}<b>:</b> I'd save them, but who am I to play god?", tags: ["violence"] },
    { text: "{Name A} Kills {Name B}<b>:</b><br>{Name C}<b>:</b> Excuse me, that's my emotional support.", tags: ["violence"] },
    { text: "{Name A}<b>:</b> {Name B}... How do I begin to explain {Name B}<br>{Name C}<b>:</b> {Name B} is Flawless<br>{Name D}<b>:</b> I hear their hair's insured for 10,000<br>{Name E}<b>:</b> I hear they do car commercials... in Japan<br>{Name F}<b>:</b> One time they punched me in the face... It was awesome", tags: ["violence"] },
    { text: "{Name A}<b>:</b> You kill people for money?!<br>{Name B}<b>:</b> I can explain!<br>{Name A}<b>:</b> And all this time I've been doing it for free like a chump!", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I know everyone's like 'the only way to kill Dracula is a stake through the heart' but in modern times, I think we should at least try a machine gun", tags: ["violence"] },
    { text: "{Name A}<b>:</b> You know those things will kill you, right?<br>{Name B}, pouring another glass of whiskey<b>:</b> That's the point<br>{Name C}, smoking a cigarette<b>:</b> We're trying to speed up the process<br>{Name D}, Nods while eating raw cookie dough<b>:</b>", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Good responses for being stabbed with a knife?<br>{Name B}<b>:</b> Rude<br>{Name C}<b>:</b> That's fair<br>{Name D}<b>:</b> Not again<br>{Name E}<b>:</b> Are you going to want this back?", tags: ["Violence"] },
    { text: "{Name A}<b>:</b> Who hurt you?<br>{Name B}<b>:</b> What, you want a list?<br>{Name A}<b>:</b> ...<br>{Name A}, Grabbing a knife<b>:</b> Yes, actually", tags: ["Violence"] },
    { text: "{Name A}<b>:</b> Awww, why don't you like cats, {Name B}? They're just snuggly buddies! They have toe beans! They make a little blep! What's not to love??<br>{Name B}<b>:</b> I don't know {Name A}, I just prefer to be conscious instead of dead on the floor<br>{Name A}<b>:</b><br>{Name B}<b>:</b> I'm ALLERGIC", tags: ["violence"] },
    { text: "{Name A}<b>:</b> {Name B}, we need to talk about your attitude towards {Name C}<br>{Name B}<b>:</b> Oh come on, I just talked to them!<br>{Name A}<b>:</b> In a very violent and concerning way!<br>{Name B}<b>:</b> If a person can't handle someone threatening to rip out their nerves and use them to dance like a puppet, are they really a person?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> 'You'll never find the body' is such a boring threat. A better threat would be<b>:</b> 'You'll never stop finding the body'<br>{Name B}<b>:</b> Or just say, 'They'll be finding parts of you for at least for months... and you'll still be alive for three of them'<br>{Name A}<b>:</b> Now THAT'S a threat!<br>{Name C}, horrified silence<b>:</b>", tags: ["violence"] },
    { text: "{Name A}, creeping behind {Name B} to stab him<b>:</b><br>{Name B}, loudly<b>:</b> I hope no one is about to attack me from behind because I'm thinking of making cookies later<br>{Name A} pausing<b>:</b><br>{Name A}<b>:</b> ... What kind?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Okay, I'll be back soon<br>{Name A}<b>:</b> If {Name B} calls. tell them I'm dead but make sure you really sell it", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I don't think we can mansplain, manipulate or malewife our way outta this one<br>{Name B}, grabbing a dagger<b>:</b> Manslaughter it is", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Do you ever think it's weird that paper technically has six sides but we only use two of them effectively?<br>{Name B}<b>:</b> the other four are for bloodshed<br>{Name A}<b>:</b><br>{Name C}<b>:</b><br>{Name D}<b>:</b> They are not wrong<br>{Name E}<b>:</b> Agreed, they're actually onto something for once", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Treat spiders the way you want to be treated<br>{Name B}<b>:</b> Killed without hesitation<br>{Name A}<b>:</b> {Name B}, We've talked about this-", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Okay, you're driving and {Name B} and {Name C} walk into the road. Quick, what do you hit?<br>{Name D}<b>:</b> Oh, definitely {Name C}, I could never hurt {Name B}<br>{Name A}, massaging their temples<b>:</b> The brakes. You hit the brakes.", tags: ["violence"] },
    { text: "{Name A}<b>:</b> {Name B}'s at that very special age when a person only has one thing on their mind<br>{Name C}<b>:</b> Love?<br>{Name A}<b>:</b> Homicide", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Is stabbing someone immoral?<br>{Name B}<b>:</b> Not if they consent to it<br>{Name C}<b>:</b> Depends on who you're stabbing<br>{Name D}<b>:</b> YES?!", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Die young and leave a pretty corpse, that's what I say<br>{Name B}<b>:</b> You should say something else", tags: ["violence"] },
    { text: "{Name A}<b>:</b> They died of natural causes<br>{Name B}<b>:</b> You pushed them off the roof<br>{Name A}<b>:</b> Gravity is natural", tags: ["violence"] },
    { text: "{Name A}<b>:</b> If all your friends jumped off a bridge, would you-<br>{Name B}<b>:</b> Probably", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I'M GONNA GO HOME AND DRINK A WHOLE GLASS OF WEED", tags: ["violence"] },
    { text: "{Name A}, on the second floor during maths<b>:</b> So, like, how far do you think the distance is from that window to that ground?<br>{Name B}<b>:</b> Enough", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I am in pain<br>{Name B}<b>:</b> Do you mean emotional pain or-<br>{Name B}<b>:</b> Oh God! That's a lot of blood<br>{Name A}<b>:</b> Pain, yes", tags: ["violence"] },
    { text: "{Name A}<b>:</b> You look familiar...<br>{Name B}<b>:</b> So do you, where do I know you from?<br>-Long pause-<br>{Name A} and {Name B}<b>:</b> Jail", tags: [] },
    { text: "{Name A}, choking on food<b>:</b><br>{Name B}<b>:</b> Jeez {Name A}, don't die on me!<br>{Name A}<b>:</b> Don't tell me what to do, I'll die whenever the hell I want!", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Can I kill them?<br>{Name B}<b>:</b> No<br>{Name A}<b>:</b> Why not?<br>{Name B}<b>:</b> He's immortal<br>{Name A}<b>:</b> So you're saying that I get to kill him more than once?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Sweet dog you got there<br>Police<b>:</b> Yep, our new drug sniffing dog<br>{Name A}<b>:</b> Still training then?<br>Police<b>:</b> What do you mean?<br>{Name A}<b>:</b> Never mind", tags: ["violence"] },
    { text: "{Name A}<b>:</b> WHAT'S YOUR TYPE<br>{Name B}<b>:</b> Anything, honestly, but nerds especially<br>{Name A}, desperately, as {Name B} bleeds out<b>:</b> YOUR BLOOD TYPE<br>{Name B}<b>:</b> Oh! B positive<br>{Name A}<b>:</b> DON'T TRY TO CHEER ME UP! JUST TELL ME YOUR BLOOD TYPE", tags: ["violence"] }



    // Add more violence quotes 
  ],
  swearing_shipping: [
    { text: "{Name A}<b>:</b> So did you kiss them?<br>{Name B}<b>:</b> No, the moment wasn't right<br>{Name A}<b>:</b><br>{Name B}<b>:</b> Look, {Name C} could be my future partner. I want our kiss to be amazing<br>{Name A}<b>:</b> Aw, {Name B}, that's so sweet. You chickened out like a little bitch", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> I've been dropping them the most insanely obvious hints for like a year now. No response<br>{Name B}<b>:</b> Wow, they sound stupid<br>{Name A}<b>:</b> But they're not. They're really smart actually, just dense<br>{Name B}<b>:</b> Maybe you need to be more obvious? Like, I don't know... 'Hey! I love you!'<br>{Name A}<b>:</b> I guess you're right. Hey {Name B}, I love you<br>{Name B}<b>:</b> See! Just like that!<br>{Name A}<b>:</b> Holy fucking shit.<br>{Name A}<b>:</b> If that flies over their head then, sorry {Name A}, but they're too dumb for you", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> You're such a fucking loser {Name B}<br>{Name B}<b>:</b> Well, you married me, so who's the REAL loser here?<br>{Name A}<b>:</b> You are not allowed to use this marriage against me<br>{Name B}<b>:</b> I am 100% allowed to use this marriage against you.", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> {Name C} has been saying that we are a couple<br>{Name B}<b>:</b> I wish<br>{Name A}<b>:</b> What?<br>{Name B}<b>:</b> I said that bitch", tags: ["shipping", "swearing"] },
    { text: "{Name A} drunk as hell, to {Name B}<b>:</b> {Name B} thinks he knows everything but he has no idea I'm in love with {Name C}<br>{Name B}, with a criminal offensive side eye<b>:</b> Shut. Up.<br>{Name A}<b>:</b> Oops! Sorry! My bad<br>{Name A}, to {Name C}<b>:</b> {Name B} thinks he knows everything but he has no idea I'm in love with {Name C}<br>{Name C}<b>:</b> Y-you're in love with me?!<br>{Name A}<b>:</b> ...<br>{Name A}<b>:</b> Where the fuck is {Name D} when I am talking to them?!", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> Is it hot in here or is it just you?<br>{Name B}<b>:</b> YOU'RE ON FIRE! STOP FLIRTING DUMBASS!", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> {Name B}.<br>{Name B}, startled<b>:</b> Wh- yeah?<br>{Name A}<b>:</b> WHY THE FUCK IS MY NAME IN YOUR PHONE 'My dorito whore'?!?!?!<br>{Name B}<b>:</b> I-<br>{Name A}<b>:</b><br>{Name B}<b>:</b><br>{Name B}<b>:</b> You can't BLAME me. Look at you!", tags: ["swearing", "shipping"] },
    { text: "{Name A}, walks into the room after football practice<b>:</b><br>{Name B}<b>:</b> God they are so fit<br>{Name C}<b>:</b> They called you a dumbaDass<br>{Name B}<b>:</b> I know and it was so hot", tags: ["shipping", "swearing"] },
    { text: "{Name A}, flirting with {Name B}<b>:</b> Has anyone ever told you how beautiful you are?<br>{Name B}, Oblivious<b>:</b> MotherfDucker do you think I don't already know that?<br>{Name A}<b>:</b><br>{Name B}<b>:</b> I don't need to be told", tags: ["shipping", "swearing"] },
    { text: "{Name A}, as a prank<b>:</b> Bitch, what's for dinner?!<br>{Name B}, quiet and nervous<b>:</b> .... grilled cheese<br>{Name A}<b>:</b><br>{Name A}, frowning<b>:</b><br>{Name A}<b>:</b> Hey baby, look at me. If I ever speak to you like that for real you'd better beat the shit out of me, understand?", tags: ["swearing", "shipping"] },
    { text: "{Name A}<b>:</b> Hey, um... has anyone ever told you that your glasses make you look like a librarian?<br>{Name B}, now flustered<b>:</b> You... you really mean that? Thanks, you, um... really remind me of a mushroom<br>{Name A}, making flustered noises<b>:</b><br>{Name C}<b>:</b> What the fuck is going on<br>{Name D}<b>:</b> I don't know, but I feel like I could write a scientific paper on their mating habits", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> {Name B}, do you take {Name C} to be your lawfully wedded Partner<br>{Name B}<b>:</b> Fuck yes!<br>{Name C}<b>:</b><br>{Name B}<b>:</b> What?<br>{Name C}<b>:</b> Honey, it's our wedding, Can you at least try not to swear?<br>{Name B}<b>:</b> Oh, shit, I'm sorry<br>{Name C}<b>:</b><br>{Name D}<b>:</b>", tags: ["shipping", "swearing"] },


    // Add more swearing and shipping quotes
  ],
  shipping_violence: [
    { text: "{Name A}<b>:</b> There's no crime in being a thief<br>{Name B}<b>:</b> What a thief does is take people's property without their permission, which is a crime<br>{Name C}<b>:</b> Not when I do it. I'll steal your heart and you wouldn't mind<br>{Name B}<b>:</b> ...<br>{Name B}<b>:</b> That was very smooth<br>{Name A}<b>:</b> I'm gonna steal both your organs and money", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> Sometimes facing your fears head on is the best way to realise they aren't actually scary<br>{Name B}<b>:</b> Yeah, I totally agree. Like when I climbed a mountain during a lightning storm with a metal pole and demanded to get struck by lightning. I didn't even get hurt and now I'm not even scared of god anymore<br>{Name C}<b>:</b> You mean you did that without me?!<br>{Name D}<b>:</b> Oh my fucking go-<br>{Name E}<b>:</b> you did WHAT?", tags: ["swearing", "violence"] },
    { text: "{Name A} trying to set up a trap for {Name B}<b>:</b> If we ever broke up, who would be the first person you'd call?<br>{Name B} without hesitation<b>:</b> No one<br>{Name C}<b>:</b> What?<br>{Name B} sighs and takes {Name C}'s face in their hands<b>:</b> No one. We'll never break up. You're stuck with me forever<br>{Name C} blushes and tries to hide a smile<b>:</b> Okay...<br>- {Name D} and {Name E} watching from afar-<br>{Name D}<b>:</b> {Name E}?<br>{Name E}<b>:</b> I would call the police and report you for that abandoned house you burned down last week", tags: ["shipping", "violence"] },


    // Add more shipping and violence quotes
  ],
  violence_swearing: [
    { text: "{Name A}<b>:</b> I invited you into the woods because I crave the most dangerous game<br>{Name B} and {Name C}, nodding<b>:</b> Knife Monopoly<br>{Name A}<b>:</b><br>{Name A}<b>:</b> I was actually gonna hunt you for sport, but now I'm interested in whatever the fuck knife Monopoly is", tags: ["violence", "swearing"] },
    { text: "{Name A}<b>:</b> I swear, I'm going to fight the next person who's mean to {Name B}.<br>{Name B} I hate myself<br>{Name A}<b>:</b><br>{Name A}<b>:</b> ALRIGHT SQUARE UP YOU BEAUTIFUL LITTLE BITCH", tags: ["violence", "swearing"] },
    { text: "{Name A}, watching the news<b>:</b> Someone tried to fight a squid at the aquarium today<br>{Name B}, walks in covered in ink<b>:</b> Well, maybe the squid was being a dickhead", tags: ["violence", "swearing"] },
    { text: "{Name A}<b>:</b> I can't believe you assassinated the Mayor!<br>{Name B}<b>:</b> Well, 'Assassinated' implies it was politically motivated. I just killed him 'cause he was an ass, so technically it's just murder<br>{Name A}<b>:</b> THAT'S NOT BETTER!", tags: ["swearing", "violence"] }

    // Add more violence and swearing quotes
  ],
  all: [
    { text: "{Name A} swearing shipping violence 7", tags: ["swearing", "shipping", "violence"] },
    // Add more quotes for all categories
  ],
};

// Get the quoteDisplay element
const quoteDisplay = document.getElementById('quoteDisplay');
const authorsArray = [];


// Event listener for the Generate Quote button
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateQuote);

const scrambleNamesCheckbox = document.getElementById("scrambleNames");

// Event listener for the Scramble Names checkbox
scrambleNamesCheckbox.addEventListener("change", function() {
  shuffleNamesOnNextQuote = this.checked; // Set the variable based on the checkbox state
});


// Function to shuffle an array randomly (shuffling names)
function shuffleNames(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateQuote() {
  const author1 = document.getElementById("author1Input").value.trim();
  const author2 = document.getElementById("author2Input").value.trim();
  const author3 = document.getElementById("author3Input").value.trim();
  const author4 = document.getElementById("author4Input").value.trim();
  const author5 = document.getElementById("author5Input").value.trim();
  const author6 = document.getElementById("author6Input").value.trim();

  const names = [author1, author2, author3, author4, author5, author6].filter(name => name !== "");
  const numNames = names.length;

  const selectedTags = getSelectedTags();


  if (numNames === 0) { // Check if no names are entered
    quoteDisplay.textContent = "Enter at least 1 name please";
    return; // Exit the function early
  }
  let matchingQuotes = [];

  if (selectedTags.length === 0) {
    matchingQuotes = quotesLibrary.nothing;
  } else {
    // Check individual checkbox states and include sections accordingly
    if (selectedTags.includes("swearing")) {
      matchingQuotes = matchingQuotes.concat(quotesLibrary.swearing);
    }
    if (selectedTags.includes("shipping")) {
      matchingQuotes = matchingQuotes.concat(quotesLibrary.shipping);
    }
    if (selectedTags.includes("violence")) {
      matchingQuotes = matchingQuotes.concat(quotesLibrary.violence);
    }
    if (selectedTags.includes("swearing") && selectedTags.includes("shipping")) {
      matchingQuotes = matchingQuotes.concat(quotesLibrary.swearing_shipping);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.swearing);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.shipping);
    }
    if (selectedTags.includes("shipping") && selectedTags.includes("violence")) {
      matchingQuotes = matchingQuotes.concat(quotesLibrary.shipping_violence);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.shipping);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.violence);
    }

    if (selectedTags.includes("violence") && selectedTags.includes("swearing")) {
      matchingQuotes = matchingQuotes.concat(quotesLibrary.violence_swearing);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.violence);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.swearing);
    }

    if (selectedTags.includes("swearing") && selectedTags.includes("shipping") && selectedTags.includes("violence")) {
      matchingQuotes = matchingQuotes.concat(quotesLibrary.swearing);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.shipping);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.violence);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.violence_swearing);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.shipping_violence);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.swearing_shipping);
      matchingQuotes = matchingQuotes.concat(quotesLibrary.all);
    }

    // Include the "Nothing" section by default
    matchingQuotes = matchingQuotes.concat(quotesLibrary.nothing);
  }

  // Filter quotes based on the number of unique names needed
  const filteredQuotes = matchingQuotes.filter(quote => {
    const requiredNames = quote.text.match(/{Name [A-F]}/g);
    const uniqueRequiredNames = [...new Set(requiredNames)]; // Remove duplicates
    return uniqueRequiredNames && uniqueRequiredNames.length === numNames;
  });

  if (filteredQuotes.length === 0) {
    quoteDisplay.textContent = "No matching quotes found";
  } else {
    // Select a random quote from the filtered quotes
    const randomQuoteIndex = Math.floor(Math.random() * filteredQuotes.length);
    let selectedQuote = filteredQuotes[randomQuoteIndex].text;

    // Shuffle the names randomly in the quote if the checkbox is ticked
    if (scrambleNamesCheckbox.checked) {
      shuffleNames(names); // Corrected function name here
    }

    // Replace placeholders for names
    for (let i = 0; i < numNames; i++) {
      const placeholder = new RegExp(`{Name ${String.fromCharCode(65 + i)}}`, 'g');
      selectedQuote = selectedQuote.replace(placeholder, names[i]);
    }

    selectedQuote = selectedQuote.replace(/\n/g, "<br>");
    quoteDisplay.innerHTML = selectedQuote;
  }
}

function getSelectedTags() {
  const swearingFilter = document.getElementById("swearingFilter").checked;
  const shippingFilter = document.getElementById("shippingFilter").checked;
  const violenceFilter = document.getElementById("violenceFilter").checked;

  const selectedTags = [];

  if (swearingFilter) {
    selectedTags.push("swearing");
  }
  if (shippingFilter) {
    selectedTags.push("shipping");
  }
  if (violenceFilter) {
    selectedTags.push("violence");
  }

  return selectedTags;
}
