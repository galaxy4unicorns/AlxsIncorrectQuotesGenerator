const quotesLibrary = {
  nothing: [ 
    { text: "<br>{Name A}<b>:</b> I'm not drunk.<br>{Name B}<b>:</b> Yes, you are<br>{Name A}<b>:</b> I AM NOT DRUNK!<br>{Name B}<b>:</b> Then, can you tell the time?<br>{Name A}<b>:</b> Yes<br>{Name A} faced the clock and pointed at it angrily<b>:</b> I AM NOT DRUNK!<br>{Name B}<b>:</b>", tags: [] },
    { text: "<br>{Name A}<b>:</b> {Name B}, my old arch enemy.<br>{Name C}<b>:</b> ... I thought I was your arch enemy?<br>{Name A}<b>:</b> I have a life outside you, {Name C}.", tags: [] },
    { text: "{Name A}<b>:</b> Imagine if someone handed you a box full of all the items you lost throughout your life<br>{Name B}<b>:</b> Self-esteem, haven't seen you in years!<br>{Name C}<b>:</b>Oh wow, my childhood innocence! Thank you for finding this!<br>{Name D}<b>:</b>I knew I lost that potential somewhere!<br>{Name E}<b>:</b> My moral code, is that you?<br>{Name A}<b>:</b><br>{Name A}<b>:</b> I was just gonna show you this cool trunk my mother left me but do you guys need a hug?", tags: [] },
    { text: "{Name A}<b>:</b> WHY IS YOUR REPORT CARD ON THE CEILING?!<br><bbr>{Name B}<b>:</b> You said to bring my grades up<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}<b>:</b> ..I did say that", tags: [] },
    { text: "{Name A}<b>:</b> Do you know a turtles only weakness?<br><bbr>{Name B}<b>:</b>No...?<br><bbr>{Name A}<b>:</b> Their weakness is they can't roll over when they're on their backs<br><bbr>{Name A}<b>:</b> Now, I have a plan<br><bbr>{Name A}<b>:</b> If I duct tape two turtles together, they'll be unstoppable<br><bbr>{Name B}<b>:</b>", tags: [] },
    { text: "{Name A}<b>:</b> You look familiar...<br><bbr>{Name B}<b>:</b> So do you, where do I know you from?<br><bbr>-Long pause-<br><bbr>{Name A} and {Name B}<b>:</b> Jail", tags: [] },
    { text: "{Name A}<b>:</b> What are you two doing here?<br><bbr>{Name B}<b>:</b> I'm here to help!<br><bbr>{Name C}<b>:</b> I'm here to make things worse.", tags: [] },
    { text: "{Name A}<b>:</b> Hey {Name B}<br><bbr>{Name B}<b>:</b> What?<br><bbr>{Name A}<b>:</b> I made this friendship bracelet for you!<br><bbr>{Name B}<b>:</b> You know I'm not really a jewelry person..<br><bbr>{Name A}<b>:</b> Oh, well you don't have to wear it-<br><bbr>{Name B}<b>:</b> No, I'm gonna wear it forever, back off", tags: [] },
    { text: "{Name A}, sneaking through the window at 4 am<b>:</b><br><bbr>{Name B}, Flicking on the lights and turning around in a chair<b>:</b> So, where were you?<br><bbr>{Name A}, panicking<b>:</b> I- I was with {Name C}!<br><bbr>{Name C}, turning around in his own chair<b>:</b> Want to try again?", tags: [] },
    { text: "{Name A}<b>:</b> Where's {Name A}, {Name B} and {Name C}?<br><bbr>{Name D}<b>:</b> They're playing hide and seek<br><bbr>{Name A}<b>:</b> Where?<br><bbr>{Name D}<b>:</b> I don't think you get how this game works", tags: [] },
    { text: "{Name A}, handing {Name B} a cup}<b>:</b> Here's some tea, it should help you feel better<br><bbr>{Name B}<b>:</b> Thanks Dad<br><bbr>{Name B}<b>:</b> Why is everyone staring at me?<br><bbr>{Name C}<b>:</b> Because you just called {Name A} dad<br><bbr>{Name C}<b>:</b> You said 'Thanks dad'<br><bbr>{Name A}<b>:</b> Do you see me as a father figure {Name B}?<br><bbr>{Name B}<b>:</b> No. If anything, I see you as a brother figure<br><bbr>{Name A}<b>:</b> Hey! Show your father some respect", tags: [] },
    { text: "{Name A}<b>:</b> What time is it?<br><bbr>{Name B}<b>:</b> I don't know, hand me a trumpet<br><bbr>{Name A}, hands {Name B} a trumpet<b>:</b><br><bbr>{Name B}, starts obnoxiously playing it<b>:</b><br><bbr>{Name C}, from the other room<b>:</b> WHY AE YOU PLAYING THE TRUMPET AT 5 AM IN THE MORNING?!?!<br><bbr>{Name B}<b>:</b> It's 5am in the morning", tags: [] },
    { text: "{Name A}<b>:</b> Hey {Name B}? do you have any shaving cream? <br><bbr>{Name B}<b>:</b> No, I don't like the way it tastes..<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}<b>:</b> Wait, what?<br><bbr>{Name A}<b>:</b> Did you EAT the shaving cream??<br><bbr>{Name B}<b>:</b> No?? Why would I when I don't like how it tastes?<br><bbr>{Name A}<b>:</b> THIS IS WHY WE CAN'T HAVE NICE THINGS", tags: [] },
    { text: "{Name A}<b>:</b> So, it turns out a squirrel would need to fall about 4,800 miles in order to die because that would give it time to starve to death because they can survive terminal velocity<br><bbr>{Name B}<b>:</b> {Name A} I am begging you, it is 2:30 in the morning", tags: [] },
    { text: "{Name A}<b>:</b> I dare you-<br><bbr>{Name B}<b>:</b> {Name C} is not allowed to accept dares anymore<br><bbr>{Name A}<b>:</b> Why not?<br><bbr>{Name C}<b>:</b> 'I have no regard for my own or others personal safety', as some would say", tags: [] },
    { text: "{Name A}<b>:</b> Where's {Name C}?<br><bbr>{Name B}<b>:</b> Doing stuff<br><bbr>{Name A}<b>:</b> I don't like the sound of that, where's {Name D}?<br><bbr>{Name B}<b>:</b> Trying to stop {Name C}, from doing stuff<br><bbr>{Name A}<b>:</b> And {Name E}?<br><bbr>{Name B}<b>:</b> Trying to stop {Name D} from stopping {Name C}, from doing stuff<br><bbr>{Name A}<b>:</b> I see<br><bbr>{Name A}<b>:</b> And what are you doing here, {Name B}?<br><bbr>{Name B}<b>:</b> I'm suppose to stop you from stopping {Name E} from stopping {Name D} from stopping {Name C}, from doing stuff", tags: [] },
    { text: "{Name A}<b>:</b> Im incredibly fast at math<br><bbr>{Name B}<b>:</b> Alright<br><bbr>{Name B}<b>:</b> What's 30 x 17?<br><bbr>{Name A}<b>:</b>47<br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b> That's not even close<br><bbr>{Name A}<b>:</b> But it was fast", tags: []},
    { text: "{Name A}<b>:</b> How many times do I need to tell you guys this, pick up any trash you find and don't leave it lying around on the ground, it's not that hard<br><bbr>{Name B}<b>:</b> There's no need to talk about {Name C} like that, he's right here<br><bbr>{Name C}<b>:</b><br><bbr>{Name A}<b>:</b> {Name B} no-<br><bbr>{Name D}<b>:</b> Geez, {Name A}, you could've just asked me to leave and I would've<br><bbr>{Name A}<b>:</b> {Name D} NO-", tags: [] },
    { text: "{Name A}<b>:</b> How do {Name B} and {Name C} usually get out of these messes?<br><bbr>{Name D}<b>:</b> They don't.<br><bbr>{Name D}<b>:</b> They just make a bigger mess that cancels the first one out", tags: [] },
    { text: "{Name A}, in tears<b>:</b> I'm sorry.<br><bbr>{Name B} unsure what to do with {Name A} crying<b>:</b><br><bbr>{Name B}, Pat Pat.<b>:</b> This feels wrong", tags: [] },
    { text: "{Name A}<b>:</b> It's dark in here, anyone got a torch?<br><bbr>{Name B}<b>:</b> yeah, two secs<br><bbr>{Name B}, cracks {Name C}'s back like a glow stick<b>:</b><br><bbr>{Name C}, starts glowing<b>:</b><br><bbr>{Name A}, horrified<b>:</b>", tags: [] },
    { text: "texting<br><bbr>{Name A}<b>:</b> HI!<br><bbr>{Name B}<b>:</b> Hey!<br><bbr>{Name A}<b>:</b> HOW ARE YOU?<br><bbr>{Name B}<b>:</b> I'm great! But why are you typing in capitals?<br><bbr>{Name A}<b>:</b> YOU SAID YOU HATED SMALL TALK SO I MADE IT BIG JUST FOR YOU <b>:</b>)<br><bbr>{Name A}<b>:</b> {Name B}?<br><bbr>{Name A}<b>:</b> WHY AREN'T YOU REPLYING?<br><bbr>{Name C} on {Name B}'s phone<b>:</b> {Name A}, it's {Name C}, {Name B} is currently crying", tags: [] },
    { text: "{Name A}<b>:</b> {Name B}, I want to give you some advice<br><bbr>{Name B}<b>:</b> ... right okay<br><bbr>{Name A}<b>:</b> If a door ever says 'push', you pull. It's not directions, it's a challenge.", tags: [] },
    { text: "{Name A}, Holding a python<b>:</b> Guys, I impulsively bought a snake, what do I name him<br><bbr>{Name B}<b>:</b> You did WHAT-<br><bbr>{Name C}<b>:</b> William Snakespeare", tags: [] },
    { text: "{Name A}<b>:</b> Bro, I wanna give you the world but I only have like... 20 dollars<br><bbr>{Name B}<b>:</b> Come over here<br><bbr>{Name A}, goes closer<b>:</b><br><bbr>{Name B} hugs {Name A}<b>:</b><br><bbr>{Name B}<b>:</b> I ain't got no cash on me but I got the world right here in my arms<br><bbr>{Name A}<b>:</b> Bruh<br><bbr>{Name B}<b>:</b> Bruh??", tags: [] },
    { text: "{Name A}<b>:</b> {Name B} and I are having a baby<br><bbr>{Name C}<b>:</b> That's gre-<br><bbr>{Name A}, Slamming adoption papers on the table<b>:</b> It's you, sign here", tags: [] },
    { text: "{Name A}, Looking over at their dinner<b>:</b> Man, Budapest is going to love this!<br><bbr>{Name B}<b>:</b> ...Budapest?<br><bbr>{Name A}<b>:</b> I named my stomach Budapest<br><bbr>{Name B}<b>:</b><br><bbr>{Name A}<b>:</b> Because it's the capital of HUNGRY<br><bbr>{Name B}, flipping the table<b>:</b> BRO-", tags: [] },
    { text: "{Name A}<b>:</b> You really put aside everything and came all this way for me? How did you even get here so fast?<br><bbr>{Name B}<b>:</b> Several traffic violations<br><bbr>{Name C}<b>:</b> Three counts of resisting arrest<br><bbr>{Name D}<b>:</b> Roughly thirteen cans of energy drinks<br><bbr>{Name E}<b>:</b> Also, that's not our car", tags: [] },
    { text: "{Name A}<b>:</b> {Name B} isn't answering their phone<br><bbr>{Name C}<b>:</b> I'll call<br><bbr>{Name A}<b>:</b> {Name D} and I have both tried six times each, what makes you thi-<br><bbr>{Name B}<b>:</b> Hello?", tags: [] },
    { text: "{Name A}<b>:</b> I currently have 7 empty notebooks and I have no clue what to put in them. Suggestions?<br><bbr>{Name B}<b>:</b> Put spaghetti in it<br><bbr>{Name A}<b>:</b> I'm currently taking suggestions from literally anyone but you<br><bbr>{Name C}<b>:</b> Put spaghetti in it<br><bbr>{Name A}<b>:</b> I'm currently taking suggestions from literally anyone but you two<br><bbr>{Name D}<b>:</b> Put spaghetti in it<br><bbr>{Name A}<b>:</b> I'm no longer taking suggestions", tags: [] },
    { text: "{Name A}, driving {Name B} and {Name C}<b>:</b> So how was your day?<br><bbr>{Name B}<b>:</b> We almost got surprise adopted!<br><bbr>{Name A}<b>:</b> What?<br><bbr>{Name C}<b>:</b> We almost got kidnapped<br><bbr>{Name A}<b>:</b> Oh, okay<br><bbr>{Name A}, slams on brakes<b>:</b> WAIT WHAT?!", tags: [] },
    { text: "{Name A}<b>:</b> In my defense, I was left unsupervised<br><bbr>{Name B}<b>:</b> Wasn't {Name C} with you?<br><bbr>{Name C}<b>:</b> In my defense, I was also left unsupervised", tags: [] },
    { text: "{Name A}<b>:</b> Are you high?<br><bbr>{Name B}<b>:</b> Am I what?<br><bbr>{Name A}<b>:</b> High<br><bbr>{Name B}<b>:</b> Hello!", tags: [] },
    { text: "{Name A}, staring out of the window thinking<br><bbr>{Name B}<b>:</b> They are so beautiful and thoughtful. I wonder what brilliant insights are crossing their mind today.<br><bbr>{Name A}<b>:</b> Wens-day ... Whens-day ... Weds-ne-day??", tags: [] },
    { text: "{Name A}<b>:</b> Do you think birds get sad for not having arms?<br><bbr>{Name B}<b>:</b> Well, do you get sad for not having wings?<br><bbr>{Name A}, Choked up<b>:</b> Every single day.", tags: [] },
    { text: "{Name A}, on the phone<b>:</b> Hey {Name B}, can I borrow 5,000 bucks?<br><bbr>{Name B}<b>:</b> Why the hell do you need 5,000 bucks?<br><bbr>{Name A}<b>:</b> For an escape room.<br><bbr>{Name B}<b>:</b> What kind of escape room costs 5,000?<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}<b>:</b> Jail.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Is that vodka?<br><bbr>{Name B}<b>:</b> Yeah.<br><bbr>{Name A}<b>:</b> Straight?<br><bbr>{Name B}<b>:</b> No, Gay.<br><bbr>{Name A}<b>:</b> The vODKA NOT YOU!", tags: [] },
    { text: "{Name A}<b>:</b> With great power comes great need to take a nap. Wake me up later.", tags: [] },
    { text: "{Name A}<b>:</b> Some of you may die, but that's a sacrifice I'm willing to make.", tags: [] },
    { text: "Squad reactions to being told 'I love you'<br><bbr>{Name A}<b>:</b> Thanks fam!<br><bbr>{Name B}<b>:</b> Oh no<br><bbr>{Name C}, crying<b>:</b> I love you too<br><bbr>{Name D}<b>:</b> Sounds fake but okay<br><bbr>{Name E}, just a flustered mess<b>:</b><br><bbr>{Name F}<b>:</b> Can I get a refund?", tags: [] },
    { text: "{Name A}<b>:</b> What is your darkest desire?<br><bbr>{Name B}<b>:</b> I wanna stare at someone from across the street then disappear when a bus passes", tags: [] },
    { text: "Texting<br><bbr>{Name A}<b>:</b> Hey, I'm at the shops. They're out of oat milk, do you want another kind?<br><bbr>{Name B}<b>:</b> What are my choices?<br><bbr>{Name A}<b>:</b> Almond?<br><bbr>{Name A}<b>:</b> Skim?<br><bbr>{Name A}<b>:</b> 1%?<br><bbr>{Name A}<b>:</b> 2%?<br><bbr>{Name A}<b>:</b> Whole?<br><bbr>{Name B}<b>:</b> That's a lot of options<br><bbr>{Name A}<b>:</b> That's modern milk for ya<br><bbr>{Name A}<b>:</b> What a time to be alive", tags: [] },
    { text: "{Name A}<b>:</b> High difficulty level escape room concept<b>:</b> u are  laying in bed and u have one hour to get out of bed", tags: [] },
    { text: "{Name A}<b>:</b> In marriage, whoever has the cooler last name gets to continue their legacy. Reject tradition", tags: [] },
    { text: "{Name A}<b>:</b> Do you or do you not feel Bonita?<br><bbr>{Name B}, face covered in messy makeup<b>:</b> ... I feel Bonita.<br><bbr>{Name A}<b>:</b> Wonderful, because you look Bonita!", tags: [] },
    { text: "{Name A}<b>:</b> I think we're missing something<br><bbr>{Name B}<b>:</b> Teamwork?<br><bbr>{Name C}<b>:</b> Cohesion?<br><bbr>{Name D}<b>:</b> A general sense of what we're doing?", tags: [] },
    { text: "{Name A}<b>:</b> What is two plus 2?<br><bbr>{Name B}<b>:</b> Math.<br><bbr>{Name A}<b>:</b> ... I will accept that answer", tags: [] },
    { text: "{Name A}<b>:</b> Goodnight Moon<br><bbr>{Name A}<b>:</b> Goodnight tree<br><bbr>{Name A}<b>:</b> Goodnight monsters that only I can see", tags: [] },
    { text: "{Name A}<b>:</b> Let's just agree to both say we're sorry on the count of 3<br><bbr>{Name A}<b>:</b> 1.. 2.. 3<br><bbr>{Name A} and {Name B}<b>:</b><br><bbr>{Name A}<b>:</b> See, now I'm just disappointed in the both of us.", tags: [] },
    { text: "{Name A}<b>:</b> How would you describe my leadership skills?<br><bbr>{Name B}<b>:</b> Nonexistent.<br><bbr>{Name B}<b>:</b> Otherwise, excellent", tags: [] },
    { text: "{Name A}<b>:</b> I love cheating, If you don't cheat then what the hell is wrong with you?<br><bbr>{Name B}<b>:</b> Have you ever been cheated on?<br><bbr>{Name A}<b>:</b> I forgot some people are in relationships, to clarify, I love to violate academic integrity on exams", tags: [] },
    { text: "{Name A}<b>:</b> Listen up, fives!<br><bbr>{Name A}<b>:</b> A ten is speaking!", tags: [] },
    { text: "{Name A}<b>:</b> Why isn't the statue smirking at me?<br><bbr>{Name B}<b>:</b> It isn't smirking at anyone, they're all just imagining it<br><bbr>{Name A}<b>:</b> Three of us saw it, {Name B}. How do you explain that?<br><bbr>{Name B}, points at {Name C}<b>:</b> Sleep deprivation<br><bbr>{Name B}, points at {Name D}<b>:</b> Paranoia<br><bbr>{Name B}, points at {Name E}<b>:</b> Delusional personality disorder", tags: [] },
    { text: "{Name A}<b>:</b> Sorry guys, I need to be alone for a bit<br><bbr>{Name A}, grabs {Name B}'s hand and begins to walk away<b>:</b><br><bbr>{Name C}<b>:</b> But... but you just said you wanted to be alone, why are you going with {Name B}?<br><bbr>{Name A}<b>:</b> I don't follow", tags: [] },
    { text: "{Name A}<b>:</b> Truth or dare?<br><bbr>{Name B}<b>:</b> Truth<br><bbr>{Name A}<b>:</b> How many hours have you slept this week?<br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b> Dare<br><bbr>{Name A}<b>:</b> Go to sleep.<br><bbr>{Name B}<b>:</b> I don't like this game", tags: [] },
    { text: "{Name A}<b>:</b> Change is inedible<br><bbr>{Name B}<b>:</b> You mean inevitable?<br><bbr>{Name A}, spits out coins<b>:</b> No. No, I did not", tags: [] },
    { text: "{Name A}<b>:</b> Some people are like clouds. If they disappear, it's a beautiful day", tags: [] },
    { text: "{Name A}<b>:</b> What's a word that's a mix between 'sad' and 'mad'?<br><bbr>{Name B}<b>:</b> Disgruntled, miserable, desolated-<br><bbr>{Name C}<b>:</b> Smad<br><bbr>{Name B}<b>:</b>", tags: [] },
    { text: "{Name A}<b><b>:</b></b> Bye {Name B}! Bye {Name C} Bye {Name D}! Bye {Name E}! Bye {Name F}!  Bye {Name B}!<br><bbr>{Name C}<b>:</b> You said 'bye {Name B}' twice<br><bbr>{Name A}<b>:</b> I like {Name B}", tags: [] },
    { text: "{Name A}, setting down a card<b>:</b> Ace of spades!<br><bbr>{Name B}, Pulling out an Uno card<b>:</b> +4!<br><bbr>{Name C}, pulling out a Pokemon card<b>:</b> Jolteon, I choose you!!<br><bbr>{Name D}, trembling<b>:</b> What are we playing...", tags: [] },
    { text: "{Name A}<b>:</b> When I die, I want {Name B} to lower me into my grave<br><bbr>{Name A}<b>:</b> So they can let me down one last time", tags: [] },
    { text: "{Name A}<b>:</b> Do you ever want to talk about your emotions, {Name B}?<br><bbr>{Name B}<b>:</b> ... no.<br><bbr>{Name C}<b>:</b> I do!<br><bbr>{Name A}<b>:</b> I know, {Name C}<br><bbr>{Name C}<b>:</b> I'm sad!<br><bbr>{Name A}<b>:</b> I know, {Name C}", tags: [] },
    { text: "{Name A}, gently taps table<b>:</b><br><bbr>{Name B}, taps back<b>:</b><br><bbr>{Name C}<b>:</b> What are they doing?<br><bbr>{Name D}<b>:</b> Morse code<br><bbr>{Name A}, aggressively taps table<b>:</b><br><bbr>{Name B}, slams hands down<b>:</b> YOU TAKE THAT BACK-", tags: [] },
    { text: "{Name A}<b>:</b> I need relationship advice<br><bbr>{Name B}, who's never felt the touch of a woman in their life<b>:</b> You've come to the right place", tags: [] },
    { text: "{Name A}<b>:</b> We've been conducting an ongoing study to see what {Name C} will and will not eat<br><bbr>{Name B}<b>:</b> Grass? Yes!<br><bbr>{Name A}<b>:</b> Moss? Yes!!<br><bbr>{Name B}<b>:</b> Leaves? Ohh, yes!<br><bbr>{Name A}<b>:</b> Shoelaces? Strange but true!<br><bbr>{Name B}<b>:</b> Worms? Sometimes!<br><bbr>{Name A}<b>:</b> Rocks? Usually nah<br><bbr>{Name B}<b>:</b> Twigs? Usually!<br><bbr>{Name A}<b>:</b> {Name E}'s cooking? Inconclusive!<br><bbr>{Name D}<b>:</b> How did you.. test this?<br><bbr>{Name A}<b>:</b> You just hand them stuff and say 'eat this' and if they eat it, they eat it<br><bbr>{Name D}<b>:</b> ... I don't know how to feel about this<br><bbr>{Name E}<b>:</b> IS THAT WHERE ALL MY SPARE SHOELACES WENT", tags: [] },
    { text: "{Name A}<b>:</b> My father is not a man.<br><bbr>{Name A}<b>:</b> He is a one-spot Yelp review come to life", tags: [] },
    { text: "{Name A}<b>:</b> {Name C} is mad at me, and I'm not sure why<br><bbr>{Name B}<b>:</b> Okay, did you talk before they got upset?<br><bbr>{Name A}<b>:</b> ... yes?<br><bbr>{Name B}<b>:</b> That's probably it", tags: [] },
    { text: "{Name A}, entering the room<b>:</b><br><bbr>{Name A} seeing {Name B} and immediately leaves<b>:</b><br><bbr>{Name B}, watching {Name A} leave<b>:</b> There's my monthly dose of {Name A}...", tags: [] },
    { text: "{Name A}<b>:</b> What are your goals?<br><bbr>{Name B}<b>:</b> To pet all dogs<br><bbr>{Name A}<b>:</b> No, fitness goals<br><bbr>{Name B}<b>:</b> To be able to run fast enough to pet all the dogs", tags: [] },
    { text: "{Name A}<b>:</b> I don't even have time to tell you how wrong you are<br><bbr>{Name A}<b>:</b> Actually, it's gonna bug me if I don't", tags: [] },
    { text: "{Name A}<b>:</b> {Name B}, may I speak with you for just a moment?<br><bbr>{Name B}<b>:</b> Ooo someone's in trouble<br><bbr>{Name B}<b>:</b> It's me. I don't know why I did that", tags: [] },
    { text: "{Name A}<b>:</b> My policy is if you see something, say something!<br><bbr>{Name B}<b>:</b> I saw a squirrel in a tree today!<br><bbr>{Name A}, with the tone of someone who is used to {Name B}<b>:</b> Outstanding.<br><bbr>{Name A}<b>:</b> This is what I'm talking about people", tags: [] },
    { text: "{Name A}<b>:</b> Am I in trouble<br><bbr>{Name B}<b>:</b> Take a guess<br><bbr>{Name A}<b>:</b> No?<br><bbr>{Name B}<b>:</b> take another guess", tags: [] },
    { text: "{Name A}<b>:</b> Man sure is dark in here<br><bbr>{Name B}<b>:</b><br><bbr>{Name A}<b>:</b> I'm not scared or anything<br><bbr>{Name B}<b>:</b><br><bbr>{Name A}<b>:</b> I mean who is scared of the dark these days? Not me no sir<br><bbr>{Name B}<b>:</b> Do you want me to hold your hand?<br><bbr>{Name A}<b>:</b> Yes please.", tags: [] },
    { text: "{Name A} and {Name B} turn up at {Name C}'s house and knock<b>:</b><br><bbr>{Name A}<b>:</b> Can we stay with you tonight<br><bbr>{Name C}<b>:</b> Both of you? What happened?<br><bbr>{Name B}<b>:</b> Someone was playing with an ouija board and cursed the whole house<br><bbr>{Name A}<b>:</b> {Name D} wasn't any help. He doesn't know how to banish spirits. So he's just throwing salt at them yelling 'Does this look like a hotel to you?!'", tags: [] },
    { text: "{Name A}<b>:</b> Are you ok?<br><bbr>{Name B}<b>:</b> I have this headache that comes and goes<br><bbr>{Name C}<b>:</b> Hello {Name B}!<br><bbr>{Name B}<b>:</b> Oh no, it's back", tags: [] },
    { text: "{Name A}<b>:</b> If I see the word gaslight one more time... I'm getting off the internet forever<br><bbr>{Name B}<b>:</b> You're not even seeing it that much<br><bbr>{Name C}<b>:</b> Yeah, it's all in your head", tags: [] },
    { text: "{Name A}<b>:</b> Have you ever heard the expression 'Don't judge a book by its cover'?<br><bbr>{Name B}<b>:</b> No<br><bbr>{Name A}<b>:</b> What about 'It's what's on the inside that counts'?<br><bbr>{Name B}<b>:</b> Nuh-uh<br><bbr>{Name A}<b>:</b> 'Looks can be deceiving'?<br><bbr>{Name B}<b>:</b> Doesn't ring a bell<br><bbr>{Name A}<b>:</b> What's wrong with you??<br><bbr>{Name B}<b>:</b> Oh, that one I've heard!", tags: [] },
    { text: "{Name A}, putting their hands over {Name B}'s eyes<b>:</b> Guess who!<br><bbr>{Name B}<b>:</b> It's either {Name A} or the cold, clammy hands of death<br><bbr>{Name A}, pulling their hands away<b>:</b> It's {Name A}!<br><bbr>{Name B}<b>:</b> Dammit", tags: [] },
    { text: "{Name A}<b>:</b> Look at this thing, I'm gonna call it a long horse<br><bbr>{Name B}<b>:</b> That's a giraffe<br><bbr>{Name A}<b>:</b> Oh<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}<b>:</b> Long horse it better", tags: [] },
    { text: "{Name A}<b>:</b> Were you dropped on your head as a child?<br><bbr>{Name B}<b>:</b> Bold of you to assume I was even held<b>:</b><br><bbr>{Name A}<b>:</b><br><bbr>{Name C}<b>:</b> {Name B}, we talked about this-", tags: [] },
    { text: "{Name A}<b>:</b> Good morning, cruel world!<br><bbr>{Name B}<b>:</b> That's not the phrase, Did you mean 'Goodbye'?<br><bbr>{Name A}<b>:</b> No, I meant good morning<br><bbr>{Name A}<b>:</b> This world may be cruel, but I'm still kickin'!<br><bbr>{Name B}<b>:</b> That really cheered me up!", tags: [] },
    { text: "{Name A}<b>:</b> I'm not mean, Name one mean thing I've ever done<br><bbr>{Name B}<b>:</b> When we were younger, you convinced me eggs weren't real<br><bbr>{Name A}<b>:</b> They're not<br><bbr>{Name B}<b>:</b> Haha, very funny<br><bbr>{Name A}<b>:</b> I'm serious, didn't you hear?<br><bbr>{Name B}<b>:</b> No... what happened?<br><bbr>{Name A}<b>:</b> ... Why would you fall for this again-", tags: [] },
    { text: "{Name A}<b>:</b> I swear, no matter how long I've been friends with people, there's always someone who's surprised that I'm left-handed<br><bbr>{Name B}<b>:</b> You're left-handed!?<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}, punches a wall<b>:</b>", tags: [] },
    { text: "{Name A}<b>:</b> What do people like you get from stealing from others?<br><bbr>{Name B}<b>:</b> I get what I stole<br><bbr>{Name B}<b>:</b> What kind of dumb question is that?", tags: [] },
    { text: "{Name A}<b>:</b> Are you religious? I'd like to introduce you to my religion<br><bbr>{Name B}, sighing<b>:</b> What is your religion?<br><bbr>{Name A}, shows a picture of {Name C} doing something chaotic<b>:</b><br><bbr>{Name B}<b>:</b> I'm interested...", tags: [] },
    { text: "Kidnapper<b>:</b> We have your partner<br><bbr>{Name A}<b>:</b> You have {Name B}?<br><bbr>Kidnapper<b>:</b> Yeah<br><bbr>{Name A}<b>:</b> Good luck with that", tags: [] },
    { text: "{Name A}<b>:</b> Gods are stubborn<br><bbr>{Name A}<b>:</b> So am I", tags: [] },
    { text: "{Name A}, laying in bed<b>:</b> Get out of my room<br><bbr>{Name B}, standing just outside of the door frame with a smirk<b>:</b> I'm not in your room", tags: [] },
    { text: "{Name A}<b>:</b> I trust {Name B}<br><bbr>{Name C}<b>:</b> You think they knows what their doing?<br><bbr>{Name A}<b>:</b> I wouldn't go that far", tags: [] },
    { text: "{Name A}<b>:</b> Why me?<br><bbr>{Name B}<b>:</b> Because people like you. You're quiet, you say 'excuse me', you look like little birds help you get dressed in the morning", tags: [] },
    { text: "{Name A}<b>:</b> I have everything under control<br><bbr>{Name B}<b>:</b> Is that why everything is on fire?", tags: [] },
    { text: "{Name A}<b>:</b> Hey, what's wrong buddy?<br><bbr>{Name B}, drunk and crying as they pet like 5 different cats<b>:</b> I don't have enough hands", tags: [] },
    { text: "{Name A}, very seriously<b>:</b> You need to stop doing weird things to cope with the stress. Going outside might help<br><bbr>{Name B}<b>:</b> I went to the park today<br><bbr>{Name A}<b>:</b> There you go! I hope you got something from that<br><bbr>{Name B}, opening coat<b>:</b> This duck!", tags: [] },
    { text: "{Name A}<b>:</b> ..... am I going too far?<br><bbr>{Name B}<b>:</b> No no no, you went too far like 7 hours ago. Now you're going to jail", tags: [] },
    { text: "{Name A}<b>:</b> Why stop at capitalism? Destroy everything", tags: [] },
    { text: "{Name A}<b>:</b> Guys, it's been three weeks since I've eaten a vegetable", tags: [] },
    { text: "{Name A}<b>:</b> At least we have memes to dull the pain of existence", tags: [] },
    { text: "{Name A}<b>:</b> Oh my god<br><bbr>{Name A}<b>:</b> I thought seven was less than six", tags: [] },
    { text: "{Name A}<b>:</b> If cows ruled the world, would they drink human milk?", tags: [] },
    { text: "{Name A}<b>:</b> My calculator is broken<br><bbr>{Name B}<b>:</b> Your calculator isn't broken<br><bbr>{Name B}<b>:</b> You're broken", tags: [] },
    { text: "{Name A}<b>:</b> Has anyone ever been to New Orleans?<br><bbr>{Name B}<b>:</b> Does Popeyes count?", tags: [] },
    { text: "{Name A}<b>:</b> My word count on this paper isn't very high, but I certainly am", tags: [] },
    { text: "{Name A}<b>:</b> We're in adult limbo. I'm not a teen and I'm not an adult. I'M SUFFERING, THAT'S WHAT I AM", tags: [] },
    { text: "{Name A}<b>:</b> Look at my<br><bbr>{Name A}, swinging up leg to show shorts<b>:</b> pants", tags: [] },
    { text: "{Name A}<b>:</b> You really think that this will work?<br><bbr>{Name B}<b>:</b> No, not at all<br><bbr>{Name A}<b>:</b> Then why the heck are we doing it!?<br><bbr>{Name B}<b>:</b> It sounded fun<br><bbr>{Name A}<b>:</b> We're all gonna die", tags: [] },
    { text: "{Name A}<b>:</b> You're... alive<br><bbr>{Name B}<b>:</b> Great observation, genius<br><bbr>{Name A}<b>:</b> but, you were dead<br><bbr>{Name A}<b>:</b> Well luckily you really are a failure", tags: [] },
    { text: "{Name A}<b>:</b> I hate you<br><bbr>{Name B}<b>:</b> Hate is a strong word<br><bbr>{Name A}<b>:</b> Well, I have strong emotions", tags: [] },
    { text: "{Name A}<b>:</b> I don't believe in never<br><bbr>{Name B}<b>:</b> I don't believe in always<br><bbr>{Name A}<b>:</b> Well, opposites attract<br><bbr>{Name B}, raising an eyebrow<b>:</b> Never<br><bbr>{Name A}, smirking<b>:</b> Always", tags: [] },
    { text: "-Loud crash-<br><bbr>{Name A}<b>:</b> I'm having a problem", tags: [] },
    { text: "{Name A}<b>:</b> Can I bother you for a second?<br><bbr>{Name B}<b>:</b> You always bother me, but go ahead", tags: [] },
    { text: "{Name A}<b>:</b> I just saw {Name B} in the library cry for like five or six minutes and then their phone alarm went off and they just?? Stopped crying?? And went right back to work???<br><bbr>{Name C}<b>:</b> It's called time management, {Name A}", tags: [] },
    { text: "{Name A}<b>:</b> It's in times like these that I really wish I had listened to what {Name B} told me when I was young<br><bbr>{Name C}<b>:</b> Why? What did they say?<br><bbr>{Name A}<b>:</b> I don't know, I didn't listen", tags: [] },
    { text: "{Name A}<b>:</b> We are seven months into the year, what have you accomplished?<br><bbr>{Name B}<b>:</b> I don't like your tone.", tags: [] },
    { text: "{Name A}<b>:</b> I'm old enough to do what I want<br><bbr>{Name B}<b>:</b> I'm calling {Name C}<br><bbr>{Name A}<b>:</b> WAIT! NO-", tags: [] },
    { text: "{Name A}<b>:</b> Who broke the toaster<br><bbr>{Name B}<b>:</b> {Name E} broke it<br><bbr>{Name C}<b>:</b> It was {Name E}<br><bbr>{Name D}<b>:</b> {Name E} did it<br><bbr>{Name E}, feeling betrayed<b>:</b> ...<br><bbr>{Name E}<b>:</b> YOU PROMISED-", tags: [] },
    { text: "{Name A}<b>:</b> I was thinking in the shower<b>:</b> If 666 is evil, then 25.806975801127 is the root of all evil<br><bbr>{Name B}<b>:</b> Do you have a calculator in your SHOWER?", tags: [] },
    { text: "{Name A}<b>:</b> You're up to something aren't you?<br><bbr>{Name B}<b>:</b> You don't sound particularly upset about that<br><bbr>{Name A}<b>:</b> ...I'm not<br><bbr>{Name B}<b>:</b> And yet your eyes still hold displeasure<br><bbr>{Name A}<b>:</b> <br><bbr>{Name B}<b>:</b> You're upset I didn't include you, aren't you?<br><bbr>{Name A}<b>:</b> ... A little", tags: [] },
    { text: "{Name A}, heading out for their 5am run<b>:</b><br><bbr>{Name B}, going to bed<b>:</b>", tags: [] },
    { text: "{Name A}<b>:</b> {Name B}?<br><bbr>{Name B}<b>:</b> What?<br><bbr>{Name A}<b>:</b> {Name C} hasn't texted either of us in five hours<br><bbr>{Name B}<b>:</b> I'll call hospitals, you call the police station", tags: [] },
    { text: "{Name A}<b>:</b> I hope no one lowkey hates me<br><bbr>{Name A}<b>:</b> Highkey hate me, Hate me with every fiber of your being<br><bbr>{Name A}<b>:</b> Go big or go home", tags: [] },
    { text: "{Name A} putting a get well soon card in an envelope and signing it to {Name B}<b>:</b><br><bbr>{Name C}<b>:</b> Oh, is {Name B} sick?<br><bbr>{Name A}<b>:</b> No<br><bbr>{Name A}<b>:</b> I just think {Name B} could do better<br><bbr>{Name C}<b>:</b> Real", tags: [] },
    { text: "{Name A}, walking out in the most obnoxious flares<b>:</b><br><bbr>{Name B}<b>:</b> Oh my god<br><bbr>{Name C}, giggling<b>:</b> Oh lord that's so embarrassing<br><bbr>{Name B}<b>:</b> They're definitely buying them<br><bbr>{Name D}, walking out in a matching pair<b>:</b><br><bbr>{Name C}<b>:</b> <br><bbr>{Name B}<b>:</b> Not so funny now is it?<br><bbr>{Name C}<b>:</b> They are definitely buying those too<br><bbr>{Name D} and {Name A}, giggling and posing in the mirrors together<b>:</b>", tags: [] },
    { text: "{Name A}<b>:</b> Hey {Name B}, can you do the thing?<br><bbr>{Name B}<b>:</b> What thing?<br><bbr>{Name A}<b>:</b> The thing that makes me smile<br><bbr>{Name B}<b>:</b> Oh!-<br><bbr>{Name B}, smiling<b>:</b><br><bbr>{Name A}<b>:</b> Thank you", tags: [] },
    { text: "{Name A}<b>:</b> {Name B}, I'm sad<br><bbr>{Name B}, Holding out arms for a hug<b>:</b> It's gonna be ok<br><bbr>{Name C}<b>:</b> {Name D}, I'm sad<br><bbr>{Name D}, nodding<b>:</b> Mood", tags: [] },
    { text: "Baby {Name A}, crying<b>:</b><br><bbr>{Name B}, picks up {Name A}<b>:</b> Oh, it's ok, sweetheart, you'll learn to do that on the inside when you get older<br><bbr>{Name C}<b>:</b><br><bbr>{Name C}<b>:</b> {Name B}, are you okay?", tags: [] },
    { text: "{Name A}, taking a bite<b>:</b> Amazing<br><bbr>{Name B}<b>:</b> My curry?<br><bbr>{Name A}<b>:</b> No, my patience for your cooking skills", tags: [] },
    { text: "{Name A}<b>:</b> You can trust me! Let's not forget who pulled you out of the river when you were six<br><bbr>{Name B}<b>:</b> Let's not forget who pushed me in", tags: [] },
    { text: "{Name A}<b>:</b> How are we going to do this?<br><bbr>{Name B}<b>:</b> I'm not suppose to have any ideas. I'm the hot one<br><bbr>{Name C}<b>:</b> I'm pretty sure I'm the hot one", tags: [] },
    { text: "{Name A}<b>:</b> Here you are {Name B}, a nice hot cup of coffee<br><bbr>{Name B}<b>:</b> Oh, it's cold<br><bbr>{Name A}<b>:</b> Nice cup of coffee<br><bbr>{Name B}<b>:</b> It's horrible!<br><bbr>{Name A}<b>:</b> Cup of coffee<br><bbr>{Name B}<b>:</b> I'm not even sure it's coffee<br><bbr>{Name A}<b>:</b> Cup", tags: [] },
    { text: "{Name A}<b>:</b> You often use humor to deflect trauma<br><bbr>{Name B}<b>:</b> Thank you<br><bbr>{Name A}<b>:</b> I didn't say that was a good thing<br><bbr>{Name B}<b>:</b> What I'm hearing is, you think I'm funny", tags: [] },
    { text: "{Name A}<b>:</b> How did none of you hear what I just said?<br><bbr>{Name B}<b>:</b> I've been zoned out for the past two and a half hours<br><bbr>{Name C}<b>:</b> I got distracted half way through<br><bbr>{Name D}<b>:</b> Ignoring you was a conscious decision", tags: [] },



    // Add more quotes for the "Nothing" section
  ],
  swearing: [
    { text: "{Name A}<b>:</b> What's a thot?<br><bbr>{Name B}<b>:</b> It's a thoughtful person<br><bbr><b>Later at the dinner table</b><br><bbr>{Name C}<b>:</b> Here's the salt, {Name A}<br><bbr>{Name A}<b>:</b> Thanks {Name C}, you're such a thot!<br><bbr>{Name C}, spitting out water<b>:</b>", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> If you add 'uwu' at the end of a sentence it makes it cute<br><bbr>{Name B}<b>:</b> You're right uwu<br><bbr>{Name C}<b>:</b> I also agree uwu<br><bbr>{Name D}<b>:</b> I'm going to kill all of you uwu<br><bbr>{Name E}<b>:</b> Don't uwu<br><bbr>{Name D}<b>:</b> Fuck you uwu", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Yo is {Name D} sleeping or dead?<br><bbr>{Name B}<b>:</b> Hopefully dead, I hated their guts<br><bbr>{Name C}<b>:</b> Yeah, so did I<br><bbr>{Name D}<b>:</b> Okay first of all, fuck you-", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> You have to apologize to {Name B}<br><bbr>{Name C}<b>:</b> Fine.<br><bbr>{Name C}<b>:</b> 'Unfuck you' or whatever.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Who the fuck added me to a fucking group chat?<br><bbr>{Name B}<b>:</b> ><b>:</b>O Language.<br><bbr>{Name C}<b>:</b> Yeah, watch your fucking language<br><bbr>{Name D}<b>:</b> OKAY WHO TAUGHT {Name C} THE FUCK WORD?<br><bbr>{Name E}<b>:</b> 'The fuck word'<br><bbr>{Name F}<b>:</b> Are you stupid? You guys use the f word all the time<br><bbr>{Name C}<b>:</b> Oh my god they censored it<br><bbr>{Name E}<b>:</b> Say fuck, {Name F}.<br><bbr>{Name C}<b>:</b> Do it, {Name F}. Say fuck.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Fuck<br><bbr>{Name B}<b>:</b> Language!<br><bbr>{Name C}<b>:</b> Shit!<br><bbr>{Name B}<b>:</b> Language!<br><bbr>{Name D}<b>:</b> Who the fuck do you think you're calling a bitch, you ass?<br><bbr>{Name B}<b>:</b> Language!<br><bbr>{Name E}<b>:</b> Now that's one crazy motherfucker<br><bbr>{Name B}<b>:</b> Language!<br><bbr>{Name F}<b>:</b> What the frick frack tickity tic tac snik snak, bro?<br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b> What the fuck", tags: ["swearing"] },
    { text: "Doorbell rings<br><bbr>{Name A}, opening the door<b>:</b> Hello?<br><bbr> Exorcist<b>:</b> Hello, I'm here to remove the demon that has possessed you.<br><bbr>{Name A}, frowning<b>:</b> uhm, I didn't call you?<br><bbr>Demon<b>:</b> I did<br><bbr>{Name A}<b>:</b> Fucking traitor.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Okay okay stop asking me if I'm straight, gay, bi, whatever. I identify as a FUCKING THREAT", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Alright, listen up you little shits<br><bbr>{Name A}<b>:</b> Not you {Name B}, You're an angel and we're thrilled you're here", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Whose turn is it to give the pep-talk?<br><bbr>{Name B}<b>:</b> {Name C}<br><bbr>{Name C}<b>:</b> Fuck shit up out there, but don't die<br><bbr>{Name D}<b>:</b> Outstanding.", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Hey, can you do me a favor?<br><bbr>{Name B}<b>:</b> Sorry, I have to go do literally anything other than this<br><bbr>{Name A}<b>:</b> You don't even have a legitimate reason?<br><bbr>{Name B}<b>:</b> Oh, no, I do<br><bbr>{Name A}<b>:</b> Well, What is it?<br><bbr>{Name B}<b>:</b> You see, I simply don't give a fuck", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> It's impossible to make a sentence without using the letter A<br><bbr>{Name B}<b>:</b> Despite your thinking, it is quite possible yet difficult, to form one without the specific letter. Here's one more to further disprove your theory<br><bbr>{Name C}<b>:</b> Fuck you", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> I had a dream that you were my therapist but all you did was call me a bitch<br><bbr>{Name B}<b>:</b> Bitch<br><bbr>{Name C}<b>:</b> Dreams do come true", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Five years ago I was a fucking mess and now I'm a fucking mess but at peace with it and with a cooler fashon sense", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> So, um, where were ya'll born?<br><bbr>{Name B}, bitterly<b>:</b> I was made in a lab!<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}<b>:</b> Wh-<br><bbr>{Name C}<b>:</b> I just straight up fucking spawned<br><bbr>{Name A}<b>:</b><br><bbr>{Name D}<b>:</b> Bold of you to assume I was born in a comprehensible manner.<br><bbr>{Name A}, looking at {Name E}<b>:</b><br><bbr>{Name E}, shrugging<b>:</b> I told you, these kids are fucked up and technically {Name D} is the only one lying", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> I am a traumatized little bitch", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Do you have a self-care routine?<br><bbr>{Name B}<b>:</b> 'Keep going bitch', said to myself in different accents", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Ow! son of a bit-<br><bbr>{Name B}<b>:</b> You dislocated your shoulder. Want me to pop it back in?<br><bbr>{Name A}, grimacing<b>:</b> Yeah... okay<br><bbr>{Name B}<b>:</b> Alright, on 3... 0, 1<br><bbr>{Name B} pops {Name A}'s shoulder into place<b>:</b><br><bbr>{Name A}<b>:</b> MOTHERFU- Who the hell starts with 0?!", tags: ["swearing"] },
    { text: "{Name A}, Stubs toe, trips over chair, drops can on foot, and hits bedpost for the millionth time<b>:</b><br><bbr>{Name B}, from behind the newspaper<b>:</b> And I thought living with you would be boring...<br><bbr>{Name A}, with tears in their eyes and a choked whisper<b>:</b> You're a jackass", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> Could you at least try to be nice?<br><bbr>{Name B}<b>:</b> You're still breathing, that's me being fucking nice, asshole", tags: ["swearing"] },
    { text: "{Name A}, looking {Name B} dead in the eyes<b>:</b> Why would it be a bad idea for me to eat this entire marker?", tags: [] },
    { text: "{Name A}, holding up their hand<b>:</b> A little slappy to make daddy happy?<br><bbr>{Name B}<b>:</b> wtf-", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> I can take care of myself! I don't need your charity!<br><bbr>{Name B}<b>:</b> You have a fever, I need to-<br><bbr>{Name A}<b>:</b> Don't touch me with your filthy hands!<br><bbr>{Name B}<b>:</b> Listen here, you little bitch<br><bbr>{Name B}<b>:</b> I don't like you either, but I'm not going to let you suffer when I know I can do something to help. So shut the fuck up and let me do my job", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> {Name B} talks in their sleep sometimes, and it's adorable<br><bbr>{Name B}, sleeping<b>:</b> Fight me... you motherfucker... square up bitch...", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> GUYS WE NEED TO GET SLUTTIER<br><bbr>{Name B}<b>:</b> ON IT BOSS!<br><bbr>{Name B} changes from their regular t-shirt into an identical t-shirt that just has the word COCK on it<b>:</b>", tags: ["swearing"] },
    { text: "{Name A}, walking out of the bathroom<b>:</b><br><bbr>{Name A}<b>:</b> What the fuck!<br><bbr>{Name B}, lying face first on the ground<b>:</b><br><bbr>{Name B}<b>:</b> Finally!<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}, getting up<b>:</b><br><bbr>{Name B}<b>:</b> Your showers take too long<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b> Move", tags: ["swearing"] },
    { text: "{Name A}<b>:</b> It isn't funny! This is serious!<br><bbr>{Name B}<b>:</b> It's pretty funny<br><bbr>{Name C}<b>:</b> It's fucking hilarious actually<br><bbr>{Name D}, twitching on the floor, still wheezing with laughter<b>:</b>", tags: ["swearing"] },


    // Add more swearing quotes
  ],
  shipping: [
    { text: "<br>{Name A}<b>:</b> You're the love of my life and my best friend, I would do anything for you.<br>{Name B}<b>:</b> I want you to eat three meals a day and have a decent sleep schedule<br>{Name A}<b>:</b> Absolutely not. ", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Come on, I wasn't that drunk last night<br><bbr>{Name B}<b>:</b> You were flirting with {Name C}<br><bbr>{Name A}<b>:</b> So what? They're my partner<br><bbr>{Name B}<b>:</b> You asked them if they were single<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b> And then you cried when they said they weren't", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> What are you in the mood for?<br><bbr>{Name B}<b>:</b> World domination.<br><bbr>{Name A}<b>:</b> That's a bit amitious<br><bbr>{Name B}<b>:</b> You are my world<br><bbr>{Name A}<b>:</b> Awwww<br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b><br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b><br><bbr>{Name A}<b>:</b> OH-!", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I'm so attracted to this person I don't even hear what he says half of the time...<br><bbr>{Name B}<b>:</b> Ok, then close your eyes because I want you to listen", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> You're only dating {Name B} to annoy me!<br><bbr>{Name C}<b>:</b> No, I'm dating {Name B} because I like them<br><bbr>{Name C}<b>:</b> Annoying you is just an added bonus", tags: ["shipping"] },
    { text: "<b> In the dorms late at night:</b><br><bbr>{Name A}<b>:</b> Love you, {Name B}<br><bbr>{Name B}<b>:</b> Love you too, {Name A}<br><bbr>{Name C}<b>:</b><br><bbr>{Name B}<b>:</b> we both love you as well, {Name C}<br><bbr>{Name C}<b>:</b> thanks, I was feeling left out", tags: ["shipping"] }, 
    { text: "{Name A}<b>:</b> So what's your type?<br><bbr>{Name B}<b>:</b> Kind, hot, dumb, good sense of humor<br><bbr>{Name A}<b>:</b> That sounds like me, too bad it's probably not<br><bbr>{Name A}<b>:</b> .. did I mention dumb?<br><bbr>{Name B}<b>:</b> Yeah<br><bbr>{Name A}<b>:</b> Okay, just making sure", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I'd love a partner who's sensitive and caring, manly but with a loving side, you know?<br><bbr>{Name B}, Explosions in the distance<b>:</b><br><bbr>{Name A}<b>:</b><br><bbr>{Name A}<b>:</b> I want that one", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> {Name B}, {Name C} loves you<br><bbr>{Name B}<b>:</b> So I've heard<br><bbr>{Name A}<b>:</b> So will you go out with them?<br><bbr>{Name B}<b>:</b> Of course not.<br><bbr>{Name A}<b>:</b> PLEASE, {Name B}!<br><bbr>{Name B}<b>:</b> I'm sorry, but no.<br><bbr>{Name A}<b>:</b> You don't understand what you're doing!<br><bbr>{Name B}<b>:</b> I'm saying no to going out with the most arrogant guy I know<br><bbr>{Name A}<b>:</b> No, their holding my chocolates hostage until I get you to agree to date him, {Name B} PLEASE!!", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I'm kind of crushing on someone, but I'm worried about telling you who it is because you're not going to like it<br><bbr>{Name B}<b>:</b> Just rip the bandage off<br><bbr>{Name A}<b>:</b> It's {Name C}<br><bbr>{Name B}<b>:</b> Put the bandage back on.", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Do you think your family likes me?<br><bbr>{Name B}<b>:</b> My mum literally begged you to marry me.", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> You amaze me and scare me.<br><bbr>{Name A}<b>:</b> I can't tell if I'm attracted to it or want to run away.<br><bbr>{Name B}<b>:</b> I'm hoping it's the former. But I like it when people are scared of me.<br><bbr>{Name A}<b>:</b> Yeah, it's definitely both.", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Just be yourself<br><bbr>{Name B}<b>:</b> 'Be myself'? {Name A}, I have one day to win over {Name C} over. How long did it take before you guys started liking me?<br><bbr>{Name D}<b>:</b> Couple weeks<br><bbr>{Name E}<b>:</b> Six months<br><bbr>{Name F}<b>:</b> Jury's still out<br><bbr>{Name B}<b>:</b> See, {Name A}?<br><bbr>{Name B}<b>:</b> 'Be myself'. What kind of garbage advice is that?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I heard you like bad guys<br><bbr>{Name B}<b>:</b><br><bbr>{Name A}<b>:</b> Tell them, {Name C}<br><bbr>{Name C}<b>:</b> Their's the worst guy I've ever met", tags: ["shipping"] },
    { text: "{Name A}, to {Name B}<b>:</b> Since we're in a relationship now, your clothes are now my clothes too. Don't ask me why I have your shirt on. This is our shirt", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I hate you<br><bbr>{Name B}, in their head<b>:</b> Enemies to lovers, slow burn. Angst with happy ending. 300k+ words", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I'm breaking up with you<br><bbr>{Name B}<b>:</b> No you're not.<br><bbr>{Name B}<b>:</b> Here, have a slice of cake instead", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> You know, {Name C} gives {Name D} flowers all the time, I wish you'd do that too<br><bbr>{Name B}<b>:</b> Okay<br><bbr>-later-<br><bbr>{Name B}, gives {Name D} flowers<b>:</b><br><bbr>{Name D}<b>:</b> ?? Thank? You??<br><bbr>{Name B}<b>:</b> I am just as confused as you are", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Who else here thought {Name B} was my partner?<br><bbr>{Name A}<b>:</b> {Name B}, put your hand down", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I'm actually deeply in love with {Name B} and we've been dating for a couple months now, we even have pet names<br><bbr>{Name C}<b>:</b> Why are you telling me this??<br><bbr>{Name A}<b>:</b> Because no one will believe you", tags: ["shipping"] },
    { text: "{Name A}, sweating<b>:</b> So, I was wondering-<br><bbr>{Name B}<b>:</b> Oh finally! You're proposing<br><bbr>{Name A}<b>:</b> Wait- YOU KNEW?<br><bbr>{Name B}<b>:</b> You accidentally dropped the ring six times during dinner<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b> I even picked it up and handed it over to you", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Ughh, crushes are so dumb<br><bbr>{Name B}<b>:</b> I know, whenever I'm near the person I like I turn red<br><bbr>{Name A}<b>:</b> But you're always red?<br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b> Don't think about that too hard, mate", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> {Name B}, you are under arrest<br><bbr>{Name B}<b>:</b> Wait, what? why?<br><bbr>{Name A}<b>:</b> For stealing {Name C}'s heart<br><bbr>{Name C}<b>:</b> Did you just hit on {Name B} for me?<br><bbr>{Name A}<b>:</b> I'm tired of WAITING, {Name C}", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Wait a minute!<br><bbr>{Name A}<b>:</b> {Name C} kissed you!?<br><bbr>{Name A}<b>:</b> And you said?<br><bbr>{Name B} 'Wow! Thank you'<br><bbr>{Name A}<b>:</b> Well, that was very polite of you", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Did {Name B} just tell me they loved me for the first time?<br><bbr>{Name C}<b>:</b> Yeah, they did<br><bbr>{Name A}<b>:</b> And did I just do finger guns back?<br><bbr>{Name C}<b>:</b> Yeah, you did", tags: ["shipping"] },
    { text: "{Name A}, trying to flirt with {Name B}<b>:</b> You have a face<br><bbr>{Name B}<b>:</b> Yes, I do<br><bbr>{Name A}<b>:</b> You have a pretty face<br><bbr>{Name B}<b>:</b> Thanks<br><bbr>{Name A}<b>:</b> I like your face<br><bbr>{Name B}<b>:</b> Why did I fall in love with you again?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Loving you is as easy as breathing<br><bbr>{Name B}<b>:</b> But you're asthmatic?<br><bbr>{Name A}<b>:</b> Your point?", tags: ["shipping"] },
    { text: "{Name A}, seeing {Name B} and {Name C} holding hands<b>:</b> Sooo, who finally confessed?<br><bbr>{Name B}, with a proud smile<b>:</b> It was me! I made sure it was short and sweet<br><bbr>{Name C}<b>:</b> You yelled 'Listen here, you little shit, I have feelings for you, and it's time you acknowledged them'... From the roof<br><bbr>{Name B}<b>:</b> It worked though", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I love {Name B} so much I have a whole Pinterest board of them and an album on my phone and their set as my wallpaper and AND AWHGHWGWGWH I LOVE THEM SO MUCH", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I have a feeling if {Name B} were to even propose to {Name C}, instead of 'Will you marry me,' they would say 'You will marry me.'", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> You're jealous?<br><bbr>{Name B}<b>:</b> Me? Jealous? Over you? Absolutely I am, you're mine", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> {Name C}'s lip balm tasted really good, like eucalyptus<br><bbr>{Name B}<b>:</b> You guys KISSED?<br><bbr>{Name C}<b>:</b> No, {Name A} just ate my lip balm", tags: ["shipping"] },
    { text: "{Name A} suddenly kissed {Name B}<b>:</b><br><bbr>{Name B}, breaking the kiss<b>:</b> - Whoa! Whoa! Whoa! What's going on? you and I just made out! You and I are making out?<br><bbr>{Name A}<b>:</b> Well, not anymore<br><bbr>{Name B}<b>:</b> But we don't do that!<br><bbr>{Name A}<b>:</b> I know, I just thought it would be fun<br><bbr>{Name B}<b>:</b> How drunk are you?<br><bbr>{Name A}<b>:</b> Drunk enough to know that I want to do this, Not so drunk that you should feel guilty about taking advantage<br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b> That's the perfect amount!<br><bbr>{Name A}<b>:</b> Okay!<br><bbr>{Name A} and {Name B} start kissing again", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> I bet I can hold the whole world in my hands<br><bbr>{Name B}<b>:</b> {Name A}, that is physically impossible<br><bbr>{Name A}, cupping {Name B}'s face<b>:</b> Are you sure about that<br><bbr>{Name B}<b>:</b> {Name A}, please, I have a reputation", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> If I say I love you, will you say it back?<br><bbr>{Name B}<b>:</b> Yes<br><bbr>{Name A}<b>:</b> I love you<br><bbr>{Name B}<b>:</b> It back<br><bbr>-later-<br><bbr>{Name C}<b>:</b> Why is {Name A} crying facedown on the floor?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Thank you for inviting me to {Name B}'s wedding today, {Name C}<br><bbr>{Name B}<b>:</b> Yes, it's no problem dear<br><bbr>{Name A}<b>:</b> This is probably a stupid question, but who is {Name B} marrying? I haven't seen them<br><bbr>{Name D}<b>:</b> You. You're the fiancé. This is your wedding with {Name B}<br><bbr>{Name A}<b>:</b> Wait, what?<br><bbr>{Name D}<b>:</b> There's your officiant. This is your wedding ring. I suggest taking them somewhere far, far away for your honeymoon<br><bbr>{Name B}<b>:</b> For a week<br><bbr>{Name D}<b>:</b> Here's some money, make it two<br><bbr>{Name C}, walking in<b>:</b> Oh! This is beautiful! Who's having a wedding today?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> Is that a hickey?<br><bbr>{Name B}<b>:</b> Oh, no. I just, I... fell down<br><bbr>{Name A}<b>:</b> On {Name C}'s lips?", tags: ["shipping"] },
    { text: "{Name A}<b>:</b> The food is too hot, I can't eat it<br><bbr>{Name B}<b>:</b> You're too hot and I still eat you<br><bbr>{Name A}, blushes:<br><bbr>{Name B}, winks at A:<br><bbr>{Name C}<b>:</b> One dinner. I just want ONE DINNER.", tags: ["shipping"] },


    // Add more shipping quotes  {Name B}
  ],
  violence: [
    { text: "<br>{Name A}<b>:</b> Do you have any skeletons in your closet?<br>{Name B}<b>:</b> You mean literally or figuratively?<br>{Name A}<b>:</b> Honestly, the fact that I have to specify...", tags: ["violence"] },
    { text: "<br>{Name A}<b>:</b> What's up guys? I'm back<br>{Name B}<b>:</b> What the- you can't be here, you're dead. I literally saw you die!<br>{Name A}<b>:</b> Death is a social construct", tags: ["violence"] },
    { text: "<br>{Name A}<b>:</b> Okay. I get it, you've had a really hard time lately. You're stressed out, seven people died-<br>{Name B}<b>:</b> Twelve, actually.<br>{Name A}<b>:</b> Not the point. Look, they're dead now and whose fault is that really?<br>{Name B}<b>:</b> Yours!<br>{Name A}<b>:</b> That's right! No one's.", tags: ["violence"] },
    { text: "{Name A}<b>:</b> You're smiling, did something happen?<br><bbr>{Name B}<b>:</b> Can't I smile because I feel like it?<br><bbr>{Name C}<b>:</b> {Name D} tripped and fell in the parking lot", tags: ["violence"] },
    { text: "{Name A}<b>:</b> {Name B}, could you pass the salt?<br><bbr>{Name B}<b>:</b> {Name A}, could you pass away?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Why aren't there friend pick up lines? Pick up lines like-<br><bbr>{Name A}<b>:</b> Hey, that's a cute outfit. You know where it would look better? On nobody else, because you're a beautiful individual<br><bbr>{Name B}<b>:</b> Be my frined or I'll set your entire family on fire.<br><bbr>{Name A}<b>:</b><br><bbr>{Name C}<b>:</b> There are two types of people", tags: ["violence"] },
    { text: "{Name A}<b>:</b> You were stabbed. Do you remember anything?<br><bbr>{Name B}<b>:</b> Only rhe ambulance ride to the hospital<br><bbr>{Name A}<b>:</b> That wasn't a hospitcal, I drove you.<br><bbr>{Name B}<b>:</b> But I heard a siren?<br><bbr>{Name C}<b>:</b> That was {Name D}<br><bbr>{Name D}<b>:</b> Sorry, I got nervous", tags: ["violence"] },
    { text: "{Name A}<b>:</b> If you put 'vuikebtky' in front of anything to describe your action, it becomes funnier<br><bbr>{Name B}<b>:</b> Violently practises<br><bbr>{Name C}<b>:</b> Violently studies<br><bbr>{Name D}<b>:</b> Violently shoots pictures<br><bbr>{Name E}<b>:</b> Violently boxes<br><bbr>{Name F}<b>:</b> Violently murders people<br><bbr>{Name A}<b>:</b> violently worries about that previous statement", tags: ["violence"] },
    { text: "{Name A}<b>:</b> How about a new family christmas idea?<br><bbr>{Name A}<b>:</b> Instead of kissing under the mistletoe, you have to beat them in a fist fight<br><bbr>{Name B}<b>:</b> {Name A} NO<br><bbr>{Name C}<b>:</b><br><bbr>{Name C}<b>:</b> Mistlefoe<br><bbr>{Name B}<b>:</b> STOP ENCOURAGING THIS", tags: ["violence"] },
    { text: "{Name A}<b>:</b> We have to get to a hospital, and we have to get there fast<br><bbr>{Name B}<b>:</b> Then I should drive.<br><bbr>{Name A}<b>:</b> Why you?<br><bbr>{Name B}<b>:</b> I have nothing to live for, and I drive like it<br><bbr>{Name A}<b>:</b> Okay, let's do it<br><bbr><b>Cut to<b><br><bbr>Everyone in the car, SCREAMING<b>:</b> ", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I'll never talk!<br><bbr>{Name B}, sharpening a knife<b>:</b> I have ways of making people talk<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}, cutting a piece of cake<b>:</b><br><bbr>{Name A}<b>:</b> ... Can I have some?<br><bbr>{Name B}<b>:</b> Cake is for talkers", tags: ["violence"] },
    { text: "{Name A}<b>:</b> HYDRATE OR DIE-DRATE!<br><bbr>", tags: ["violence"] },
    { text: "{Name A}<b>:</b> What are you, 5?<br><bbr>{Name B}, snorts<b>:</b> Yeah, 5 heads taller than you<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b> I'm sorry don't kill me please", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I made all of you into Sims, look!<br><bbr>{Name B}<b>:</b> Where are you?<br><bbr>{Name A}<b>:</b> I'm the grave in the backyard<br><bbr>{Name C}<b>:</b><br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b> Put me there too<br><bbr>{Name C}<b>:</b> Oh my god-", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Do not fear death. Fear the state in which you die.<br><bbr>{Name B}, in a terrified whisper<b>:</b> New Jersey...", tags: ["violence"] },
    { text: "{Name A} and {Name B}, Watching the neighborhood kids play<b>:</b><br><bbr>{Name A}<b>:</b> Look at them. They're having so much fun, they're so happy<br><bbr>{Name B}<b>:</b> Yeah<br><bbr>{Name B}<b>:</b> How long do you think it'll be until they lose the will to live?<br><bbr>{Name A}<b>:</b> I don't remember ever having one<br><bbr>{Name B}<b>:</b> Yeah, those kids are doomed", tags: ["violence"] },
    { text: "{Name A}<b>:</b> What does 'take out' mean?<br><bbr>{Name B}<b>:</b> Food<br><bbr>{Name C}<b>:</b> Dating<br><bbr>{Name D}<b>:</b> Murder<br><bbr>{Name E}<b>:</b> IT CAN MEAN ALL THREE IF YOU'RE NOT A COWARD!", tags: ["violence"] },
    { text: "{Name A}<b>:</b> WHY. Why did you give {Name C} a KNIFE?!<br><bbr>{Name B}<b>:</b> I'm sorry. They said they felt unsafe<br><bbr>{Name A}<b>:</b> Now I feel unsafe!<br><bbr>{Name B}<b>:</b> I'm sorry<br><bbr>{Name B}<b>:</b> ... would you like a knife?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Time for plan G<br><bbr>{Name B}<b>:</b> Don't you mean plan B?<br><bbr>{Name A}<b>:</b> No, we tried plan B a long time ago, I had to skip over plan C due to technical difficulties<br><bbr>{Name C}<b>:</b> What about plan D?<br><bbr>{Name A}<b>:</b> Plan D was that desperate disguise attempt half an hour ago<br><bbr>{Name D}<b>:</b> What about plan E?<br><bbr>{Name A}<b>:</b> I'm hoping not to use it. I die in plan E<br><bbr>{Name E}<b>:</b> I like plan E", tags: ["violence"] },
    { text: "{Name A}<b>:</b> A mosquito tried to bite me and I slapped it and killed it<br><bbr>{Name A}<b>:</b> And I started thinking<br><bbr>{Name A}<b>:</b> Like it was just trying to get food<br><bbr>{Name A}<b>:</b> What if I went to the fridge and it just slammed the door shut and snapped my neck<br><bbr>{Name A}<b>:</b> How would I feel?<br><bbr>{Name B}<b>:</b> Are you ok?", tags: ["violence"] },
    { text: "{Name A}, drowning<b>:</b><br><bbr>{Name B}<b>:</b> I'd save them, but who am I to play god?", tags: ["violence"] },
    { text: "{Name A} Kills {Name B}<b>:</b><br><bbr>{Name C}<b>:</b> Excuse me, that's my emotional support.", tags: ["violence"] },
    { text: "{Name A}<b>:</b> {Name B}... How do I begin to explain {Name B}<br><bbr>{Name C}<b>:</b> {Name B} is Flawless<br><bbr>{Name D}<b>:</b> I hear their hair's insured for 10,000<br><bbr>{Name E}<b>:</b> I hear they do car commercials... in Japan<br><bbr>{Name F}<b>:</b> One time they punched me in the face... It was awesome", tags: ["violence"] },
    { text: "{Name A}<b>:</b> You kill people for money?!<br><bbr>{Name B}<b>:</b> I can explain!<br><bbr>{Name A}<b>:</b> And all this time I've been doing it for free like a chump!", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I know everyone's like 'the only way to kill Dracula is a stake through the heart' but in modern times, I think we should at least try a machine gun", tags: ["violence"] },
    { text: "{Name A}<b>:</b> You know those things will kill you, right?<br><bbr>{Name B}, pouring another glass of whiskey<b>:</b> That's the point<br><bbr>{Name C}, smoking a cigarette<b>:</b> We're trying to speed up the process<br><bbr>{Name D}, Nods while eating raw cookie dough<b>:</b>", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Good responses for being stabbed with a knife?<br><bbr>{Name B}<b>:</b> Rude<br><bbr>{Name C}<b>:</b> That's fair<br><bbr>{Name D}<b>:</b> Not again<br><bbr>{Name E}<b>:</b> Are you going to want this back?", tags: ["Violence"] },
    { text: "{Name A}<b>:</b> Who hurt you?<br><bbr>{Name B}<b>:</b> What, you want a list?<br><bbr>{Name A}<b>:</b> ...<br><bbr>{Name A}, Grabbing a knife<b>:</b> Yes, actually", tags: ["Violence"] },
    { text: "{Name A}<b>:</b> Awww, why don't you like cats, {Name B}? They're just snuggly buddies! They have toe beans! They make a little blep! What's not to love??<br><bbr>{Name B}<b>:</b> I don't know {Name A}, I just prefer to be conscious instead of dead on the floor<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b> I'm ALLERGIC", tags: ["violence"] },
    { text: "{Name A}<b>:</b> {Name B}, we need to talk about your attitude towards {Name C}<br><bbr>{Name B}<b>:</b> Oh come on, I just talked to them!<br><bbr>{Name A}<b>:</b> In a very violent and concerning way!<br><bbr>{Name B}<b>:</b> If a person can't handle someone threatening to rip out their nerves and use them to dance like a puppet, are they really a person?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> 'You'll never find the body' is such a boring threat. A better threat would be<b>:</b> 'You'll never stop finding the body'<br><bbr>{Name B}<b>:</b> Or just say, 'They'll be finding parts of you for at least for months... and you'll still be alive for three of them'<br><bbr>{Name A}<b>:</b> Now THAT'S a threat!<br><bbr>{Name C}, horrified silence<b>:</b>", tags: ["violence"] },
    { text: "{Name A}, creeping behind {Name B} to stab him<b>:</b><br><bbr>{Name B}, loudly<b>:</b> I hope no one is about to attack me from behind because I'm thinking of making cookies later<br><bbr>{Name A} pausing<b>:</b><br><bbr>{Name A}<b>:</b> ... What kind?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Okay, I'll be back soon<br><bbr>{Name A}<b>:</b> If {Name B} calls. tell them I'm dead but make sure you really sell it", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I don't think we can mansplain, manipulate or malewife our way outta this one<br><bbr>{Name B}, grabbing a dagger<b>:</b> Manslaughter it is", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Do you ever think it's weird that paper technically has six sides but we only use two of them effectively?<br><bbr>{Name B}<b>:</b> the other four are for bloodshed<br><bbr>{Name A}<b>:</b><br><bbr>{Name C}<b>:</b><br><bbr>{Name D}<b>:</b> They are not wrong<br><bbr>{Name E}<b>:</b> Agreed, they're actually onto something for once", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Treat spiders the way you want to be treated<br><bbr>{Name B}<b>:</b> Killed without hesitation<br><bbr>{Name A}<b>:</b> {Name B}, We've talked about this-", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Okay, you're driving and {Name B} and {Name C} walk into the road. Quick, what do you hit?<br><bbr>{Name D}<b>:</b> Oh, definitely {Name C}, I could never hurt {Name B}<br><bbr>{Name A}, massaging their temples<b>:</b> The brakes. You hit the brakes.", tags: ["violence"] },
    { text: "{Name A}<b>:</b> {Name B}'s at that very special age when a person only has one thing on their mind<br><bbr>{Name C}<b>:</b> Love?<br><bbr>{Name A}<b>:</b> Homicide", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Is stabbing someone immoral?<br><bbr>{Name B}<b>:</b> Not if they consent to it<br><bbr>{Name C}<b>:</b> Depends on who you're stabbing<br><bbr>{Name D}<b>:</b> YES?!", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Die young and leave a pretty corpse, that's what I say<br><bbr>{Name B}<b>:</b> You should say something else", tags: ["violence"] },
    { text: "{Name A}<b>:</b> They died of natural causes<br><bbr>{Name B}<b>:</b> You pushed them off the roof<br><bbr>{Name A}<b>:</b> Gravity is natural", tags: ["violence"] },
    { text: "{Name A}<b>:</b> If all your friends jumped off a bridge, would you-<br><bbr>{Name B}<b>:</b> Probably", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I'M GONNA GO HOME AND DRINK A WHOLE GLASS OF WEED", tags: ["violence"] },
    { text: "{Name A}, on the second floor during maths<b>:</b> So, like, how far do you think the distance is from that window to that ground?<br><bbr>{Name B}<b>:</b> Enough", tags: ["violence"] },
    { text: "{Name A}<b>:</b> I am in pain<br><bbr>{Name B}<b>:</b> Do you mean emotional pain or-<br><bbr>{Name B}<b>:</b> Oh God! That's a lot of blood<br><bbr>{Name A}<b>:</b> Pain, yes", tags: ["violence"] },
    { text: "{Name A}, choking on food<b>:</b><br><bbr>{Name B}<b>:</b> Jeez {Name A}, don't die on me!<br><bbr>{Name A}<b>:</b> Don't tell me what to do, I'll die whenever the hell I want!", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Can I kill them?<br><bbr>{Name B}<b>:</b> No<br><bbr>{Name A}<b>:</b> Why not?<br><bbr>{Name B}<b>:</b> He's immortal<br><bbr>{Name A}<b>:</b> So you're saying that I get to kill him more than once?", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Sweet dog you got there<br><bbr>Police<b>:</b> Yep, our new drug sniffing dog<br><bbr>{Name A}<b>:</b> Still training then?<br><bbr>Police<b>:</b> What do you mean?<br><bbr>{Name A}<b>:</b> Never mind", tags: ["violence"] },
    { text: "{Name A}<b>:</b> WHAT'S YOUR TYPE<br><bbr>{Name B}<b>:</b> Anything, honestly, but nerds especially<br><bbr>{Name A}, desperately, as {Name B} bleeds out<b>:</b> YOUR BLOOD TYPE<br><bbr>{Name B}<b>:</b> Oh! B positive<br><bbr>{Name A}<b>:</b> DON'T TRY TO CHEER ME UP! JUST TELL ME YOUR BLOOD TYPE", tags: ["violence"] },
    { text: "{Name A}<b>:</b> Did you have to stab them?<br><bbr>{Name B}<b>:</b> You weren't there. You didn't hear what they said to me<br><bbr>{Name A}<b>:</b> What did they say?<br><bbr>{Name B}<b>:</b> 'What are you going to do, stab me?'{Name C}<b>:</b> That's fair", tags: ["violence"] },
    { text: "{Name A}<b>:</b> How come whenever I have fun, it's considered wrong?<br><bbr>{Name B}<b>:</b> People die when you have fun", tags: ["violence"] },



    // Add more violence quotes 
  ],
  swearing_shipping: [
    { text: "{Name A}<b>:</b> You two ARE having sex!<br>{Name B} and {Name C} sitting in bed studying<b>:</b><br>{Name B}<b>:</b> Really? {Name C} why didn't you tell me? I would have put down my book", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> So did you kiss them?<br><bbr>{Name B}<b>:</b> No, the moment wasn't right<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b> Look, {Name C} could be my future partner. I want our kiss to be amazing<br><bbr>{Name A}<b>:</b> Aw, {Name B}, that's so sweet. You chickened out like a little bitch", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> I've been dropping them the most insanely obvious hints for like a year now. No response<br><bbr>{Name B}<b>:</b> Wow, they sound stupid<br><bbr>{Name A}<b>:</b> But they're not. They're really smart actually, just dense<br><bbr>{Name B}<b>:</b> Maybe you need to be more obvious? Like, I don't know... 'Hey! I love you!'<br><bbr>{Name A}<b>:</b> I guess you're right. Hey {Name B}, I love you<br><bbr>{Name B}<b>:</b> See! Just like that!<br><bbr>{Name A}<b>:</b> Holy fucking shit.<br><bbr>{Name A}<b>:</b> If that flies over their head then, sorry {Name A}, but they're too dumb for you", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> You're such a fucking loser {Name B}<br><bbr>{Name B}<b>:</b> Well, you married me, so who's the REAL loser here?<br><bbr>{Name A}<b>:</b> You are not allowed to use this marriage against me<br><bbr>{Name B}<b>:</b> I am 100% allowed to use this marriage against you.", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> {Name C} has been saying that we are a couple<br><bbr>{Name B}<b>:</b> I wish<br><bbr>{Name A}<b>:</b> What?<br><bbr>{Name B}<b>:</b> I said that bitch", tags: ["shipping", "swearing"] },
    { text: "{Name A} drunk as hell, to {Name B}<b>:</b> {Name B} thinks he knows everything but he has no idea I'm in love with {Name C}<br><bbr>{Name B}, with a criminal offensive side eye<b>:</b> Shut. Up.<br><bbr>{Name A}<b>:</b> Oops! Sorry! My bad<br><bbr>{Name A}, to {Name C}<b>:</b> {Name B} thinks he knows everything but he has no idea I'm in love with {Name C}<br><bbr>{Name C}<b>:</b> Y-you're in love with me?!<br><bbr>{Name A}<b>:</b> ...<br><bbr>{Name A}<b>:</b> Where the fuck is {Name D} when I am talking to them?!", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> Is it hot in here or is it just you?<br><bbr>{Name B}<b>:</b> YOU'RE ON FIRE! STOP FLIRTING DUMBASS!", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> {Name B}.<br><bbr>{Name B}, startled<b>:</b> Wh- yeah?<br><bbr>{Name A}<b>:</b> WHY THE FUCK IS MY NAME IN YOUR PHONE 'My dorito whore'?!?!?!<br><bbr>{Name B}<b>:</b> I-<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b><br><bbr>{Name B}<b>:</b> You can't BLAME me. Look at you!", tags: ["swearing", "shipping"] },
    { text: "{Name A}, walks into the room after football practice<b>:</b><br><bbr>{Name B}<b>:</b> God they are so fit<br><bbr>{Name C}<b>:</b> They called you a dumbaDass<br><bbr>{Name B}<b>:</b> I know and it was so hot", tags: ["shipping", "swearing"] },
    { text: "{Name A}, flirting with {Name B}<b>:</b> Has anyone ever told you how beautiful you are?<br><bbr>{Name B}, Oblivious<b>:</b> Motherfucker do you think I don't already know that?<br><bbr>{Name A}<b>:</b><br><bbr>{Name B}<b>:</b> I don't need to be told", tags: ["shipping", "swearing"] },
    { text: "{Name A}, as a prank<b>:</b> Bitch, what's for dinner?!<br><bbr>{Name B}, quiet and nervous<b>:</b> .... grilled cheese<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}, frowning<b>:</b><br><bbr>{Name A}<b>:</b> Hey baby, look at me. If I ever speak to you like that for real you'd better beat the shit out of me, understand?", tags: ["swearing", "shipping"] },
    { text: "{Name A}<b>:</b> Hey, um... has anyone ever told you that your glasses make you look like a librarian?<br><bbr>{Name B}, now flustered<b>:</b> You... you really mean that? Thanks, you, um... really remind me of a mushroom<br><bbr>{Name A}, making flustered noises<b>:</b><br><bbr>{Name C}<b>:</b> What the fuck is going on<br><bbr>{Name D}<b>:</b> I don't know, but I feel like I could write a scientific paper on their mating habits", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> {Name B}, do you take {Name C} to be your lawfully wedded Partner<br><bbr>{Name B}<b>:</b> Fuck yes!<br><bbr>{Name C}<b>:</b><br><bbr>{Name B}<b>:</b> What?<br><bbr>{Name C}<b>:</b> Honey, it's our wedding, Can you at least try not to swear?<br><bbr>{Name B}<b>:</b> Oh, shit, I'm sorry<br><bbr>{Name C}<b>:</b><br><bbr>{Name D}<b>:</b>", tags: ["shipping", "swearing"] },


    // Add more swearing and shipping quotes
  ],
  shipping_violence: [
    { text: "{Name A}<b>:</b> There's no crime in being a thief<br><bbr>{Name B}<b>:</b> What a thief does is take people's property without their permission, which is a crime<br><bbr>{Name C}<b>:</b> Not when I do it. I'll steal your heart and you wouldn't mind<br><bbr>{Name B}<b>:</b> ...<br><bbr>{Name B}<b>:</b> That was very smooth<br><bbr>{Name A}<b>:</b> I'm gonna steal both your organs and money", tags: ["shipping", "swearing"] },
    { text: "{Name A}<b>:</b> Sometimes facing your fears head on is the best way to realise they aren't actually scary<br><bbr>{Name B}<b>:</b> Yeah, I totally agree. Like when I climbed a mountain during a lightning storm with a metal pole and demanded to get struck by lightning. I didn't even get hurt and now I'm not even scared of god anymore<br><bbr>{Name C}<b>:</b> You mean you did that without me?!<br><bbr>{Name D}<b>:</b> Oh my fucking go-<br><bbr>{Name E}<b>:</b> you did WHAT?", tags: ["swearing", "violence"] },
    { text: "{Name A} trying to set up a trap for {Name B}<b>:</b> If we ever broke up, who would be the first person you'd call?<br><bbr>{Name B} without hesitation<b>:</b> No one<br><bbr>{Name C}<b>:</b> What?<br><bbr>{Name B} sighs and takes {Name C}'s face in their hands<b>:</b> No one. We'll never break up. You're stuck with me forever<br><bbr>{Name C} blushes and tries to hide a smile<b>:</b> Okay...<br><bbr>- {Name D} and {Name E} watching from afar-<br><bbr>{Name D}<b>:</b> {Name E}?<br><bbr>{Name E}<b>:</b> I would call the police and report you for that abandoned house you burned down last week", tags: ["shipping", "violence"] },


    // Add more shipping and violence quotes
  ],
  violence_swearing: [
    { text: "{Name A}<b>:</b> As an aroace, I'm particularly dangerous because I won't fuck or marry<br><bbr>{Name A}<b>:</b> I only know how to kill", tags: ["violence", "swearing"] },
    { text: "{Name A}<b>:</b> I invited you into the woods because I crave the most dangerous game<br><bbr>{Name B} and {Name C}, nodding<b>:</b> Knife Monopoly<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}<b>:</b> I was actually gonna hunt you for sport, but now I'm interested in whatever the fuck knife Monopoly is", tags: ["violence", "swearing"] },
    { text: "{Name A}<b>:</b> I swear, I'm going to fight the next person who's mean to {Name B}.<br><bbr>{Name B} I hate myself<br><bbr>{Name A}<b>:</b><br><bbr>{Name A}<b>:</b> ALRIGHT SQUARE UP YOU BEAUTIFUL LITTLE BITCH", tags: ["violence", "swearing"] },
    { text: "{Name A}, watching the news<b>:</b> Someone tried to fight a squid at the aquarium today<br><bbr>{Name B}, walks in covered in ink<b>:</b> Well, maybe the squid was being a dickhead", tags: ["violence", "swearing"] },
    { text: "{Name A}<b>:</b> I can't believe you assassinated the Mayor!<br><bbr>{Name B}<b>:</b> Well, 'Assassinated' implies it was politically motivated. I just killed him 'cause he was an ass, so technically it's just murder<br><bbr>{Name A}<b>:</b> THAT'S NOT BETTER!", tags: ["swearing", "violence"] }

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

  const useAllNames = document.getElementById("useAllNames").checked;

  const filteredQuotes = matchingQuotes.filter(quote => {
    const requiredNames = quote.text.match(/{Name [A-F]}/g);
    const uniqueRequiredNames = [...new Set(requiredNames)];
    const quoteUses = uniqueRequiredNames ? uniqueRequiredNames.length : 0;
  
    return useAllNames ? quoteUses === numNames : quoteUses <= numNames;
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
    selectedQuote = selectedQuote.replace(/<bbr>/g, '<div class="bbr"></div>');
    quoteDisplay.innerHTML = selectedQuote;
    
  }
}



const boldedQuotes = boldNamesInQuotes(quotesLibrary);
console.log(boldedQuotes);

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
