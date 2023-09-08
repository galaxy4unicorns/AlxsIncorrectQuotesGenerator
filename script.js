const quotesLibrary = {
  nothing: [ 
    { text: "{Name A}: It's dark in here, anyone got a torch?<br>{Name B}: yeah, two secs<br>{Name B}, cracks {Name C}'s back like a glow stick:<br>{Name C}, starts glowing:<br>{Name A}, horrified:", tags: [] },
    { text: "texting<br>{Name A}: HI!<br>{Name B}: Hey!<br>{Name A}: HOW ARE YOU?<br>{Name B}: I'm great! But why are you typing in capitals?<br>{Name A}: YOU SAID YOU HATED SMALL TALK SO I MADE IT BIG JUST FOR YOU :)<br>{Name A}: {Name B}?<br>{Name A}: WHY AREN'T YOU REPLYING?<br>{Name C} on {Name B}'s phone: {Name A}, it's {Name C}, {Name B} is currently crying", tags: [] },
    { text: "{Name A}: {Name B}, I want to give you some advice<br>{Name B}: ... right okay<br>{Name A}: If a door ever says 'push', you pull. It's not directions, it's a challenge.", tags: [] },
    { text: "{Name A}, Holding a python: Guys, I impulsively bought a snake, what do I name him<br>{Name B}: You did WHAT-<br>{Name C}: William Snakespeare", tags: [] },
    { text: "{Name A}: Bro, I wanna give you the world but I only have like... 20 dollars<br>{Name B}: Come over here<br>{Name A}, goes closer:<br>{Name B} hugs {Name A}:<br>{Name B}: I ain't got no cash on me but I got the world right here in my arms<br>{Name A}: Bruh<br>{Name B}: Bruh??", tags: [] },
    { text: "{Name A}: {Name B} and I are having a baby<br>{Name C}: That's gre-<br>{Name A}, Slamming adoption papers on the table: It's you, sign here", tags: [] },
    { text: "{Name A}, Looking over at their dinner: Man, Budapest is going to love this!<br>{Name B}: ...Budapest?<br>{Name A}: I named my stomach Budapest<br>{Name B}:<br>{Name A}: Because it's the capital of HUNGRY<br>{Name B}, flipping the table: BRO-", tags: [] },
    { text: "{Name A}: You really put aside everything and came all this way for me? How did you even get here so fast?<br>{Name B}: Several traffic violations<br>{Name C}: Three counts of resisting arrest<br>{Name D}: Roughly thirteen cans of energy drinks<br>{Name E}: Also, that's not our car", tags: [] },
    { text: "{Name A}: {Name B} isn't answering their phone<br>{Name C}: I'll call<br>{Name A}: {Name D} and I have both tried six times each, what makes you thi-<br>{Name B}: Hello?", tags: [] },
    { text: "{Name A}: I currently have 7 empty notebooks and I have no clue what to put in them. Suggestions?<br>{Name B}: Put spaghetti in it<br>{Name A}: I'm currently taking suggestions from literally anyone but you<br>{Name C}: Put spaghetti in it<br>{Name A}: I'm currently taking suggestions from literally anyone but you two<br>{Name D}: Put spaghetti in it<br>{Name A}: I'm no longer taking suggestions", tags: [] },
    { text: "{Name A}, driving {Name B} and {Name C}: So how was your day?<br>{Name B}: We almost got surprise adopted!<br>{Name A}: What?<br>{Name C}: We almost got kidnapped<br>{Name A}: Oh, okay<br>{Name A}, slams on brakes: WAIT WHAT?!", tags: [] },
    { text: "{Name A}: In my defense, I was left unsupervised<br>{Name B}: Wasn't {Name C} with you?<br>{Name C}: In my defense, I was also left unsupervised", tags: [] },
    { text: "{Name A}: Are you high?<br>{Name B}: Am I what?<br>{Name A}: High<br>{Name B}: Hello!", tags: [] },
    { text: "{Name A}, staring out of the window thinking<br>{Name B}: They are so beautiful and thoughtful. I wonder what brilliant insights are crossing their mind today.<br>{Name A}: Wens-day ... Whens-day ... Weds-ne-day??", tags: [] },
    { text: "{Name A}: Do you think birds get sad for not having arms?<br>{Name B}: Well, do you get sad for not having wings?<br>{Name A}, Choked up: Every single day.", tags: [] },
    { text: "{Name A}, on the phone: Hey {Name B}, can I borrow 5,000 bucks?<br>{Name B}: Why the hell do you need 5,000 bucks?<br>{Name A}: For an escape room.<br>{Name B}: What kind of escape room costs 5,000?<br>{Name A}:<br>{Name A}: Jail.", tags: ["swearing"] },
    { text: "{Name A}: Is that vodka?<br>{Name B}: Yeah.<br>{Name A}: Straight?<br>{Name B}: No, Gay.<br>{Name A}: The vODKA NOT YOU!", tags: [] },
    { text: "{Name A}: With great power comes great need to take a nap. Wake me up later.", tags: [] },
    { text: "{Name A}: Some of you may die, but that's a sacrifice I'm willing to make.", tags: [] },
    { text: "Squad reactions to being told 'I love you'<br>{Name A}: Thanks fam!<br>{Name B}: Oh no<br>{Name C}, crying: I love you too<br>{Name D}: Sounds fake but okay<br>{Name E}, just a flustered mess:<br>{Name F}: Can I get a refund?", tags: [] },
    { text: "{Name A}: What is your darkest desire?<br>{Name B}: I wanna stare at someone from across the street then disappear when a bus passes", tags: [] },
    { text: "Texting<br>{Name A}: Hey, I'm at the shops. They're out of oat milk, do you want another kind?<br>{Name B}: What are my choices?<br>{Name A}: Almond?<br>{Name A}: Skim?<br>{Name A}: 1%?<br>{Name A}: 2%?<br>{Name A}: Whole?<br>{Name B}: That's a lot of options<br>{Name A}: That's modern milk for ya<br>{Name A}: What a time to be alive", tags: [] },
    { text: "{Name A}: High difficulty level escape room concept: u are  laying in bed and u have one hour to get out of bed", tags: [] },
    { text: "{Name A}: In marriage, whoever has the cooler last name gets to continue their legacy. Reject tradition", tags: [] },
    { text: "{Name A}: Do you or do you not feel Bonita?<br>{Name B}, face covered in messy makeup: ... I feel Bonita.<br>{Name A}: Wonderful, because you look Bonita!", tags: [] },
    { text: "{Name A}: I think we're missing something<br>{Name B}: Teamwork?<br>{Name C}: Cohesion?<br>{Name D}: A general sense of what we're doing?", tags: [] },
    { text: "{Name A}: What is two plus 2?<br>{Name B}: Math.<br>{Name A}: ... I will accept that answer", tags: [] },
    { text: "{Name A}: Goodnight Moon<br>{Name A}: Goodnight tree<br>{Name A}: Goodnight monsters that only I can see", tags: [] },
    { text: "{Name A}: Let's just agree to both say we're sorry on the count of 3<br>{Name A}: 1.. 2.. 3<br>{Name A} and {Name B}:<br>{Name A}: See, now I'm just disappointed in the both of us.", tags: [] },
    { text: "{Name A}: How would you describe my leadership skills?<br>{Name B}: Nonexistent.<br>{Name B}: Otherwise, excellent", tags: [] },
    { text: "{Name A}: I love cheating, If you don't cheat then what the hell is wrong with you?<br>{Name B}: Have you ever been cheated on?<br>{Name A}: I forgot some people are in relationships, to clarify, I love to violate academic integrity on exams", tags: [] },
    { text: "{Name A}: Listen up, fives!<br>{Name A}: A ten is speaking!", tags: [] },
    { text: "{Name A}: Why isn't the statue smirking at me?<br>{Name B}: It isn't smirking at anyone, they're all just imagining it<br>{Name A}: Three of us saw it, {Name B}. How do you explain that?<br>{Name B}, points at {Name C}: Sleep deprivation<br>{Name B}, points at {Name D}: Paranoia<br>{Name B}, points at {Name E}: Delusional personality disorder", tags: [] },
    { text: "{Name A}: Sorry guys, I need to be alone for a bit<br>{Name A}, grabs {Name B}'s hand and begins to walk away:<br>{Name C}: But... but you just said you wanted to be alone, why are you going with {Name B}?<br>{Name A}: I don't follow", tags: [] },
    { text: "{Name A}: Truth or dare?<br>{Name B}: Truth<br>{Name A}: How many hours have you slept this week?<br>{Name B}:<br>{Name B}: Dare<br>{Name A}: Go to sleep.<br>{Name B}: I don't like this game", tags: [] },
    { text: "{Name A}: Change is inedible<br>{Name B}: You mean inevitable?<br>{Name A}, spits out coins: No. No, I did not", tags: [] },
    { text: "{Name A}: Some people are like clouds. If they disappear, it's a beautiful day", tags: [] },
    { text: "{Name A}: What's a word that's a mix between 'sad' and 'mad'?<br>{Name B}: Disgruntled, miserable, desolated-<br>{Name C}: Smad<br>{Name B}:", tags: [] },
    { text: "{Name A}: Bye {Name B}! Bye {Name C} Bye {Name D}! Bye {Name E}! Bye {Name F}!  Bye {Name B}!<br>{Name C}: You said 'bye {Name B}' twice<br>{Name A}: I like {Name B}", tags: [] },
    { text: "{Name A}, setting down a card: Ace of spades!<br>{Name B}, Pulling out an Uno card: +4!<br>{Name C}, pulling out a Pokemon card: Jolteon, I choose you!!<br>{Name D}, trembling: What are we playing...", tags: [] },
    { text: "{Name A}: When I die, I want {Name B} to lower me into my grave<br>{Name A}: So they can let me down one last time", tags: [] },
    { text: "{Name A}: Do you ever want to talk about your emotions, {Name B}?<br>{Name B}: ... no.<br>{Name C}: I do!<br>{Name A}: I know, {Name C}<br>{Name C}: I'm sad!<br>{Name A}: I know, {Name C}", tags: [] },
    { text: "{Name A}, gently taps table:<br>{Name B}, taps back:<br>{Name C}: What are they doing?<br>{Name D}: Morse code<br>{Name A}, aggressively taps table:<br>{Name B}, slams hands down: YOU TAKE THAT BACK-", tags: [] },
    { text: "{Name A}: I need relationship advice<br>{Name B}, who's never felt the touch of a woman in their life: You've come to the right place", tags: [] },
    { text: "{Name A}: We've been conducting an ongoing study to see what {Name C} will and will not eat<br>{Name B}: Grass? Yes!<br>{Name A}: Moss? Yes!!<br>{Name B}: Leaves? Ohh, yes!<br>{Name A}: Shoelaces? Strange but true!<br>{Name B}: Worms? Sometimes!<br>{Name A}: Rocks? Usually nah<br>{Name B}: Twigs? Usually!<br>{Name A}: {Name E}'s cooking? Inconclusive!<br>{Name D}: How did you.. test this?<br>{Name A}: You just hand them stuff and say 'eat this' and if they eat it, they eat it<br>{Name D}: ... I don't know how to feel about this<br>{Name E}: IS THAT WHERE ALL MY SPARE SHOELACES WENT", tags: [] },
    { text: "{Name A}: My father is not a man.<br>{Name A}: He is a one-spot Yelp review come to life", tags: [] },
    { text: "{Name A}: {Name C} is mad at me, and I'm not sure why<br>{Name B}: Okay, did you talk before they got upset?<br>{Name A}: ... yes?<br>{Name B}: That's probably it", tags: [] },
    { text: "{Name A}, entering the room:<br>{Name A} seeing {Name B} and immediately leaves:<br>{Name B}, watching {Name A} leave: There's my monthly dose of {Name A}...", tags: [] },
    { text: "{Name A}: What are your goals?<br>{Name B}: To pet all dogs<br>{Name A}: No, fitness goals<br>{Name B}: To be able to run fast enough to pet all the dogs", tags: [] },
    { text: "{Name A}: I don't even have time to tell you how wrong you are<br>{Name A}: Actually, it's gonna bug me if I don't", tags: [] },
    { text: "{Name A}: {Name B}, may I speak with you for just a moment?<br>{Name B}: Ooo someone's in trouble<br>{Name B}: It's me. I don't know why I did that", tags: [] },
    { text: "{Name A}: My policy is if you see something, say something!<br>{Name B}: I saw a squirrel in a tree today!<br>{Name A}, with the tone of someone who is used to {Name B}: Outstanding.<br>{Name A}: This is what I'm talking about people", tags: [] },
    { text: "{Name A}: Am I in trouble<br>{Name B}: Take a guess<br>{Name A}: No?<br>{Name B}: take another guess", tags: [] },
    { text: "{Name A}: Man sure is dark in here<br>{Name B}:<br>{Name A}: I'm not scared or anything<br>{Name B}:<br>{Name A}: I mean who is scared of the dark these days? Not me no sir<br>{Name B}: Do you want me to hold your hand?<br>{Name A}: Yes please.", tags: [] },
    { text: "{Name A} and {Name B} turn up at {Name C}'s house and knock:<br>{Name A}: Can we stay with you tonight<br>{Name C}: Both of you? What happened?<br>{Name B}: Someone was playing with an ouija board and cursed the whole house<br>{Name A}: {Name D} wasn't any help. He doesn't know how to banish spirits. So he's just throwing salt at them yelling 'Does this look like a hotel to you?!'", tags: [] },
    { text: "{Name A}: Are you ok?<br>{Name B}: I have this headache that comes and goes<br>{Name C}: Hello {Name B}!<br>{Name B}: Oh no, it's back", tags: [] },
    { text: "{Name A}: If I see the word gaslight one more time... I'm getting off the internet forever<br>{Name B}: You're not even seeing it that much<br>{Name C}: Yeah, it's all in your head", tags: [] },
    { text: "{Name A}: I'll never talk!<br>{Name B}, sharpening a knife: I have ways of making people talk<br>{Name A}:<br>{Name B}, cutting a piece of cake:<br>{Name A}: ... Can I have some?<br>{Name B}: Cake is for talkers", tags: [] },
    { text: "{Name A}: Have you ever heard the expression 'Don't judge a book by its cover'?<br>{Name B}: No<br>{Name A}: What about 'It's what's on the inside that counts'?<br>{Name B}: Nuh-uh<br>{Name A}: 'Looks can be deceiving'?<br>{Name B}: Doesn't ring a bell<br>{Name A}: What's wrong with you??<br>{Name B}: Oh, that one I've heard!", tags: [] },
    { text: "{Name A}, putting their hands over {Name B}'s eyes: Guess who!<br>{Name B}: It's either {Name A} or the cold, clammy hands of death<br>{Name A}, pulling their hands away: It's {Name A}!<br>{Name B}: Dammit", tags: [] },
    { text: "{Name A}: Look at this thing, I'm gonna call it a long horse<br>{Name B}: That's a giraffe<br>{Name A}: Oh<br>{Name A}:<br>{Name A}: Long horse it better", tags: [] },
    { text: "{Name A}: Were you dropped on your head as a child?<br>{Name B}: Bold of you to assume I was even held:<br>{Name A}:<br>{Name C}: {Name B}, we talked about this-", tags: [] },
    { text: "{Name A}: Good morning, cruel world!<br>{Name B}: That's not the phrase, Did you mean 'Goodbye'?<br>{Name A}: No, I meant good morning<br>{Name A}: This world may be cruel, but I'm still kickin'!<br>{Name B}: That really cheered me up!", tags: [] },
    { text: "{Name A}: I'm not mean, Name one mean thing I've ever done<br>{Name B}: When we were younger, you convinced me eggs weren't real<br>{Name A}: They're not<br>{Name B}: Haha, very funny<br>{Name A}: I'm serious, didn't you hear?<br>{Name B}: No... what happened?<br>{Name A}: ... Why would you fall for this again-", tags: [] },
    { text: "{Name A}: I swear, no matter how long I've been friends with people, there's always someone who's surprised that I'm left-handed<br>{Name B}: You're left-handed!?<br>{Name A}:<br>{Name A}, punches a wall:", tags: [] },
    { text: "{Name A}: What do people like you get from stealing from others?<br>{Name B}: I get what I stole<br>{Name B}: What kind of dumb question is that?", tags: [] },
    { text: "{Name A}: Are you religious? I'd like to introduce you to my religion<br>{Name B}, sighing: What is your religion?<br>{Name A}, shows a picture of {Name C} doing something chaotic:<br>{Name B}: I'm interested...", tags: [] },
    { text: "Kidnapper: We have your partner<br>{Name A}: You have {Name B}?<br>Kidnapper: Yeah<br>{Name A}: Good luck with that", tags: [] },
    { text: "{Name A}: Gods are stubborn<br>{Name A}: So am I", tags: [] },
    { text: "{Name A}, laying in bed: Get out of my room<br>{Name B}, standing just outside of the door frame with a smirk: I'm not in your room", tags: [] },
    { text: "{Name A}: I trust {Name B}<br>{Name C}: You think they knows what their doing?<br>{Name A}: I wouldn't go that far", tags: [] },
    { text: "{Name A}: Why me?<br>{Name B}: Because people like you. You're quiet, you say 'excuse me', you look like little birds help you get dressed in the morning", tags: [] },
    { text: "{Name A}: I have everything under control<br>{Name B}: Is that why everything is on fire?", tags: [] },
    { text: "{Name A}: Hey, what's wrong buddy?<br>{Name B}, drunk and crying as they pet like 5 different cats: I don't have enough hands", tags: [] },
    { text: "{Name A}, very seriously: You need to stop doing weird things to cope with the stress. Going outside might help<br>{Name B}: I went to the park today<br>{Name A}: There you go! I hope you got something from that<br>{Name B}, opening coat: This duck!", tags: [] },
    { text: "{Name A}: ..... am I going too far?<br>{Name B}: No no no, you went too far like 7 hours ago. Now you're going to jail", tags: [] },
    { text: "{Name A}: Why stop at capitalism? Destroy everything", tags: [] },
    { text: "{Name A}: Guys, it's been three weeks since I've eaten a vegetable", tags: [] },
    { text: "{Name A}: At least we have memes to dull the pain of existence", tags: [] },
    { text: "{Name A}: Oh my god<br>{Name A}: I thought seven was less than six", tags: [] },
    { text: "{Name A}: If cows ruled the world, would they drink human milk?", tags: [] },
    { text: "{Name A}: My calculator is broken<br>{Name B}: Your calculator isn't broken<br>{Name B}: You're broken", tags: [] },
    { text: "{Name A}: Has anyone ever been to New Orleans?<br>{Name B}: Does Popeyes count?", tags: [] },
    { text: "{Name A}: My word count on this paper isn't very high, but I certainly am", tags: [] },
    { text: "{Name A}: We're in adult limbo. I'm not a teen and I'm not an adult. I'M SUFFERING, THAT'S WHAT I AM", tags: [] },
    { text: "{Name A}: Look at my<br>{Name A}, swinging up leg to show shorts: pants", tags: [] },
    { text: "{Name A}: You really think that this will work?<br>{Name B}: No, not at all<br>{Name A}: Then why the heck are we doing it!?<br>{Name B}: It sounded fun<br>{Name A}: We're all gonna die", tags: [] },
    { text: "{Name A}: You're... alive<br>{Name B}: Great observation, genius<br>{Name A}: but, you were dead<br>{Name A}: Well luckily you really are a failure", tags: [] },
    { text: "{Name A}: I hate you<br>{Name B}: Hate is a strong word<br>{Name A}: Well, I have strong emotions", tags: [] },
    { text: "{Name A}: I don't believe in never<br>{Name B}: I don't believe in always<br>{Name A}: Well, opposites attract<br>{Name B}, raising an eyebrow: Never<br>{Name A}, smirking: Always", tags: [] },
    { text: "-Loud crash-<br>{Name A}: I'm having a problem", tags: [] },
    { text: "{Name A}: Can I bother you for a second?<br>{Name B}: You always bother me, but go ahead", tags: [] },
    { text: "{Name A}: I just saw {Name B} in the library cry for like five or six minutes and then their phone alarm went off and they just?? Stopped crying?? And went right back to work???<br>{Name C}: It's called time management, {Name A}", tags: [] },
    { text: "{Name A}: It's in times like these that I really wish I had listened to what {Name B} told me when I was young<br>{Name C}: Why? What did they say?<br>{Name A}: I don't know, I didn't listen", tags: [] },
    { text: "{Name A}: We are seven months into the year, what have you accomplished?<br>{Name B}: I don't like your tone.", tags: [] },
    { text: "{Name A}: I'm old enough to do what I want<br>{Name B}: I'm calling {Name C}<br>{Name A}: WAIT! NO-", tags: [] },
    { text: "{Name A}: Who broke the toaster<br>{Name B}: {Name E} broke it<br>{Name C}: It was {Name E}<br>{Name D}: {Name E} did it<br>{Name E}, feeling betrayed: ...<br>{Name E}: YOU PROMISED-", tags: [] },
    { text: "{Name A}: I was thinking in the shower: If 666 is evil, then 25.806975801127 is the root of all evil<br>{Name B}: Do you have a calculator in your SHOWER?", tags: [] },
    { text: "{Name A}: You're up to something aren't you?<br>{Name B}: You don't sound particularly upset about that<br>{Name A}: ...I'm not<br>{Name B}: And yet your eyes still hold displeasure<br>{Name A}: <br>{Name B}: You're upset I didn't include you, aren't you?<br>{Name A}: ... A little", tags: [] },
    { text: "{Name A}, heading out for his 5am run:<br>{Name B}, going to bed:", tags: [] },
    { text: "{Name A}: Lily?<br>{Name B}: What?<br>{Name A}: James hasn't texted either of us in five hours<br>{Name B}: I'll call hospitals, you call the police station", tags: [] },
    { text: "{Name}: I hope no one lowkey hates me<br>{Name}: Highkey hate me, Hate me with every fiber of your being<br>{Name}: Go big or go home", tags: [] },
    { text: "{Name A}: puts a get well soon card in an envelope and signs it to {Name B}<br>{Name C}: Oh, is {Name B} sick?<br>{Name A}: No<br>{Name A}: I just think {Name B} could do better<br>{Name C}: Real", tags: [] }


    // Add more quotes for the "Nothing" section
  ],
  swearing: [
    { text: "{Name A}: If you add 'uwu' at the end of a sentence it makes it cute<br>{Name B}: You're right uwu<br>{Name C}: I also agree uwu<br>{Name D}: I'm going to kill all of you uwu<br>{Name E}: Don't uwu<br>{Name D}: Fuck you uwu", tags: ["swearing"] },
    { text: "{Name A}: Yo is {Name D} sleeping or dead?<br>{Name B}: Hopefully dead, I hated their guts<br>{Name C}: Yeah, so did I<br>{Name D}: Okay first of all, fuck you-", tags: ["swearing"] },
    { text: "{Name A}: You have to apologize to {Name B}<br>{Name C}: Fine.<br>{Name C}: 'Unfuck you' or whatever.", tags: ["swearing"] },
    { text: "{Name A}: Who the fuck added me to a fucking group chat?<br>{Name B}: >:O Language.<br>{Name C}: Yeah, watch your fucking language<br>{Name D}: OKAY WHO TAUGHT {Name C} THE FUCK WORD?<br>{Name E}: 'The fuck word'<br>{Name F}: Are you stupid? You guys use the f word all the time<br>{Name C}: Oh my god they censored it<br>{Name E}: Say fuck, {Name F}.<br>{Name C}: Do it, {Name F}. Say fuck.", tags: ["swearing"] },
    { text: "{Name A}: Fuck<br>{Name B}: Language!<br>{Name C}: Shit!<br>{Name B}: Language!<br>{Name D}: Who the fuck do you think you're calling a bitch, you ass?<br>{Name B}: Language!<br>{Name E}: Now that's one crazy motherfucker<br>{Name B}: Language!<br>{Name F}: What the frick frack tickity tic tac snik snak, bro?<br>{Name B}:<br>{Name B}: What the fuck", tags: ["swearing"] },
    { text: "Doorbell rings<br>{Name A}, opening the door: Hello?<br> Exorcist: Hello, I'm here to remove the demon that has possessed you.<br>{Name A}, frowning: uhm, I didn't call you?<br>Demon: I did<br>{Name A}: Fucking traitor.", tags: ["swearing"] },
    { text: "{Name A}: Okay okay stop asking me if I'm straight, gay, bi, whatever. I identify as a FUCKING THREAT", tags: ["swearing"] },
    { text: "{Name A}: Alright, listen up you little shits<br>{Name A}: Not you {Name B}, You're an angel and we're thrilled you're here", tags: ["swearing"] },
    { text: "{Name A}: Whose turn is it to give the pep-talk?<br>{Name B}: {Name C}<br>{Name C}: Fuck shit up out there, but don't die<br>{Name D}: Outstanding.", tags: ["swearing"] },
    { text: "{Name A}: Hey, can you do me a favor?<br>{Name B}: Sorry, I have to go do literally anything other than this<br>{Name A}: You don't even have a legitimate reason?<br>{Name B}: Oh, no, I do<br>{Name A}: Well, What is it?<br>{Name B}: You see, I simply don't give a fuck", tags: ["swearing"] },
    { text: "{Name A}: It's impossible to make a sentence without using the letter A<br>{Name B}: Despite your thinking, it is quite possible yet difficult, to form one without the specific letter. Here's one more to further disprove your theory<br>{Name C}: Fuck you", tags: ["swearing"] },
    { text: "{Name A}: I had a dream that you were my therapist but all you did was call me a bitch<br>{Name B}: Bitch<br>{Name C}: Dreams do come true", tags: ["swearing"] },
    { text: "{Name A}: Five years ago I was a fucking mess and now I'm a fucking mess but at peace with it and with a cooler fashon sense", tags: ["swearing"] },
    { text: "{Name A}: So, um, where were ya'll born?<br>{Name B}, bitterly: I was made in a lab!<br>{Name A}:<br>{Name A}: Wh-<br>{Name C}: I just straight up fucking spawned<br>{Name A}:<br>{Name D}: Bold of you to assume I was born in a comprehensible manner.<br>{Name A}, looking at {Name E}:<br>{Name E}, shrugging: I told you, these kids are fucked up and technically {Name D} is the only one lying", tags: ["swearing"] },
    { text: "{Name A}: I am a traumatized little bitch", tags: ["swearing"] },
    { text: "{Name A}: Do you have a self-care routine?<br>{Name B}: 'Keep going bitch', said to myself in different accents", tags: ["swearing"] },
    { text: "{Name A}: Ow! son of a bit-<br>{Name B}: You dislocated your shoulder. Want me to pop it back in?<br>{Name A}, grimacing: Yeah... okay<br>{Name B}: Alright, on 3... 0, 1<br>{Name B} pops {Name A}'s shoulder into place:<br>{Name A}: MOTHERFU- Who the hell starts with 0?!", tags: ["swearing"] },
    { text: "{Name A}, Stubs toe, trips over chair, drops can on foot, and hits bedpost for the millionth time:<br>{Name B}, from behind the newspaper: And I thought living with you would be boring...<br>{Name A}, with tears in his eyes and a choked whisper: You're a jackass", tags: ["swearing"] },
    { text: "{Name A}: Could you at least try to be nice?<br>{Name B}: You're still breathing, that's me being fucking nice, asshole", tags: ["swearing"] },
    { text: "{Name A}, looking {Name B} dead in the eyes: Why would it be a bad idea for me to eat this entire marker?", tags: [] },
    { text: "{Name A}, holding up their hand: A little slappy to make daddy happy?<br>{Name B}: wtf-", tags: ["swearing"] },
    { text: "{Name A}: I can take care of myself! I don't need your charity!<br>{Name B}: You have a fever, I need to-<br>{Name A}: Don't touch me with your filthy hands!<br>{Name B}: Listen here, you little bitch<br>{Name B}: I don't like you either, but I'm not going to let you suffer when I know I can do something to help. So shut the fuck up and let me do my job", tags: ["swearing"] },
    { text: "{Name A}: {Name B} talks in their sleep sometimes, and it's adorable<br>{Name B}, sleeping: Fight me... you motherfucker... square up bitch...", tags: ["swearing"] },
    { text: "{Name A}: GUYS WE NEED TO GET SLUTTIER<br>{Name B}: ON IT BOSS!<br>{Name B} changes from their regular t-shirt into an identical t-shirt that just has the word COCK on it:", tags: ["swearing"] },
    { text: "{Name A}, walking out of the bathroom:<br>{Name A}: What the fuck!<br>{Name B}, lying face first on the ground:<br>{Name B}: Finally!<br>{Name A}:<br>{Name B}, getting up:<br>{Name B}: Your showers take too long<br>{Name A}:<br>{Name B}: Move", tags: ["swearing"] },
    { text: "{Name A}: It isn't funny! This is serious!<br>{Name B}: It's pretty funny<br>{Name C}: It's fucking hilarious actually<br>{Name D}, twitching on the floor, still wheezing with laughter:", tags: ["swearing"] },


    // Add more swearing quotes
  ],
  shipping: [
    { text: "{Name A}: {Name B}, {Name C} loves you<br>{Name B}: So I've heard<br>{Name A}: So will you go out with them?<br>{Name B}: Of course not.<br>{Name A}: PLEASE, {Name B}!<br>{Name B}: I'm sorry, but no.<br>{Name A}: You don't understand what you're doing!<br>{Name B}: I'm saying no to going out with the most arrogant guy I know<br>{Name A}: No, their holding my chocolates hostage until I get you to agree to date him, {Name B} PLEASE!!", tags: ["shipping"] },
    { text: "{Name A}: I'm kind of crushing on someone, but I'm worried about telling you who it is because you're not going to like it<br>{Name B}: Just rip the bandage off<br>{Name A}: It's {Name C}<br>{Name B}: Put the bandage back on.", tags: ["shipping"] },
    { text: "{Name A}: Do you think your family likes me?<br>{Name B}: My mum literally begged you to marry me.", tags: ["shipping"] },
    { text: "{Name A}: You amaze me and scare me.<br>{Name A}: I can't tell if I'm attracted to it or want to run away.<br>{Name B}: I'm hoping it's the former. But I like it when people are scared of me.<br>{Name A}: Yeah, it's definitely both.", tags: ["shipping"] },
    { text: "{Name A}: Just be yourself<br>{Name B}: 'Be myself'? {Name A}, I have one day to win over {Name C} over. How long did it take before you guys started liking me?<br>{Name D}: Couple weeks<br>{Name E}: Six months<br>{Name F}: Jury's still out<br>{Name B}: See, Person A?<br>{Name B}: 'Be myself'. What kind of garbage advice is that?", tags: ["shipping"] },
    { text: "{Name A}: I heard you like bad guys<br>{Name B}:<br>{Name A}: Tell them, {Name C}<br>{Name C}: Their's the worst guy I've ever met", tags: ["shipping"] },
    { text: "{Name A}, to {Name B}: Since we're in a relationship now, your clothes are now my clothes too. Don't ask me why I have your shirt on. This is our shirt", tags: ["shipping"] },
    { text: "{Name A}: I hate you<br>{Name B}, in their head: Enemies to lovers, slow burn. Angst with happy ending. 300k+ words", tags: ["shipping"] },
    { text: "{Name A}: I'm breaking up with you<br>{Name B}: No you're not.<br>{Name B}: Here, have a slice of cake instead", tags: ["shipping"] },
    { text: "{Name A}: You know, {Name C} gives {Name D} flowers all the time, I wish you'd do that too<br>{Name B}: Okay<br>-later-<br>{Name B}, gives {Name D} flowers:<br>{Name D}: ?? Thank? You??<br>{Name B}: I am just as confused as you are", tags: ["shipping"] },
    { text: "{Name A}: Who else here thought {Name B} was my partner?<br>{Name A}: {Name B}, put your hand down", tags: ["shipping"] },
    { text: "{Name A}: I'm actually deeply in love with {Name B} and we've been dating for a couple months now, we even have pet names<br>{Name C}: Why are you telling me this??<br>{Name A}: Because no one will believe you", tags: ["shipping"] },
    { text: "{Name A}, sweating: So, I was wondering-<br>{Name B}: Oh finally! You're proposing<br>{Name A}: Wait- YOU KNEW?<br>{Name B}: You accidentally dropped the ring six times during dinner<br>{Name A}:<br>{Name B}: I even picked it up and handed it over to you", tags: ["shipping"] },
    { text: "{Name A}: Ughh, crushes are so dumb<br>{Name B}: I know, whenever I'm near the person I like I turn red<br>{Name A}: But you're always red?<br>{Name B}:<br>{Name B}: Don't think about that too hard, mate", tags: ["shipping"] },
    { text: "{Name A}: {Name B}, you are under arrest<br>{Name B}: Wait, what? why?<br>{Name A}: For stealing {Name C}'s heart<br>{Name C}: Did you just hit on {Name B} for me?<br>{Name A}: I'm tired of WAITING, {Name C}", tags: ["shipping"] },
    { text: "{Name A}: Wait a minute!<br>{Name A}: {Name C} kissed you!?<br>{Name A}: And you said?<br>{Name B} 'Wow! Thank you'<br>{Name A}: Well, that was very polite of you", tags: ["shipping"] },
    { text: "{Name A}: Did {Name B} just tell me they loved me for the first time?<br>{Name C}: Yeah, they did<br>{Name A}: And did I just do finger guns back?<br>{Name C}: Yeah, you did", tags: ["shipping"] },
    { text: "{Name A}, trying to flirt with {Name B}: You have a face<br>{Name B}: Yes, I do<br>{Name A}: You have a pretty face<br>{Name B}: Thanks<br>{Name A}: I like your face<br>{Name B}: Why did I fall in love with you again?", tags: ["shipping"] },
    { text: "{Name A}: Loving you is as easy as breathing<br>{Name B}: But you're asthmatic?<br>{Name A}: Your point?", tags: ["shipping"] },
    { text: "{Name A}, seeing {Name B} and {Name C} holding hands: Sooo, who finally confessed?<br>{Name B}, with a proud smile: It was me! I made sure it was short and sweet<br>{Name C}: You yelled 'Listen here, you little shit, I have feelings for you, and it's time you acknowledged them'... From the roof<br>{Name B}: It worked though", tags: ["shipping"] },
    { text: "{Name A}: I love {Name B} so much I have a whole Pinterest board of them and an album on my phone and their set as my wallpaper and AND AWHGHWGWGWH I LOVE THEM SO MUCH", tags: ["shipping"] },
    { text: "{Name A}: I have a feeling if {Name B} were to even propose to {Name C}, instead of 'Will you marry me,' they would say 'You will marry me.'", tags: ["shipping"] },
    { text: "{Name A}: You're jealous?<br>{Name B}: Me? Jealous? Over you? Absolutely I am, you're mine", tags: ["shipping"] },
    { text: "{Name A}: Logan's lip balm tasted really hoos, like eucalyptus<br>{Name B}: You guys KISSED?<br>{Name C}: No, {Name A} just ate my lip balm", tags: ["shipping"] },
    { text: "{Name A} suddenly kissed {Name B}:<br>{Name B}, breaking the kiss: - Whoa! Whoa! Whoa! What's going on? you and I just made out! You and I are making out?<br>{Name A}: Well, not anymore<br>{Name B}: But we don't do that!<br>{Name A}: I know, I just thought it would be fun<br>{Name B}: How drunk are you?<br>{Name A}: Drunk enough to know that I want to do this, Not so drunk that you should feel guilty about taking advantage<br>{Name B}:<br>{Name B}: That's the perfect amount!<br>{Name A}: Okay!<br>{Name A} and {Name B} start kissing again", tags: ["shipping"] },
    { text: "{Name A}: They're mine<br>{Name B}: No, they're mine<br>{Name C}, sitting down at the table: What are they on about now?<br>{Name D}: They're fighting over James<br>{Name E}, watching in awe:<br>{Name C}: They're getting awfully close<br>{Name A} and {Name B} start kissing:<br>{Name C}: I think this might be the best day of James' life<br>{Name E}, staring:<br>{Name D}: What an interesting development", tags: ["shipping"] },


    // Add more shipping quotes  
  ],
  violence: [
    { text: "{Name A}: What are you, 5?<br>{Name B}, snorts: Yeah, 5 heads taller than you<br>{Name A}:<br>{Name B}:<br>{Name B}: I'm sorry don't kill me please", tags: ["violence"] },
    { text: "{Name A}: I made all of you into Sims, look!<br>{Name B}: Where are you?<br>{Name A}: I'm the grave in the backyard<br>{Name C}:<br>{Name B}:<br>{Name B}: Put me there too<br>{Name C}: Oh my god-", tags: ["violence"] },
    { text: "{Name A}: Do not fear death. Fear the state in which you die.<br>{Name B}, in a terrified whisper: New Jersey...", tags: ["violence"] },
    { text: "{Name A} and {Name B}, Watching the neighborhood kids play:<br>{Name A}: Look at them. They're having so much fun, they're so happy<br>{Name B}: Yeah<br>{Name B}: How long do you think it'll be until they lose the will to live?<br>{Name A}: I don't remember ever having one<br>{Name B}: Yeah, those kids are doomed", tags: ["violence"] },
    { text: "{Name A}: What does 'take out' mean?<br>{Name B}: Food<br>{Name C}: Dating<br>{Name D}: Murder<br>{Name E}: IT CAN MEAN ALL THREE IF YOU'RE NOT A COWARD!", tags: ["violence"] },
    { text: "{Name A}: WHY. Why did you give {Name C} a KNIFE?!<br>{Name B}: I'm sorry. They said they felt unsafe<br>{Name A}: Now I feel unsafe!<br>{Name B}: I'm sorry<br>{Name B}: ... would you like a knife?", tags: ["violence"] },
    { text: "{Name A}: Time for plan G<br>{Name B}: Don't you mean plan B?<br>{Name A}: No, we tried plan B a long time ago, I had to skip over plan C due to technical difficulties<br>{Name C}: What about plan D?<br>{Name A}: Plan D was that desperate disguise attempt half an hour ago<br>{Name D}: What about plan E?<br>{Name A}: I'm hoping not to use it. I die in plan E<br>{Name E}: I like plan E", tags: ["violence"] },
    { text: "{Name A}: A mosquito tried to bite me and I slapped it and killed it<br>{Name A}: And I started thinking<br>{Name A}: Like it was just trying to get food<br>{Name A}: What if I went to the fridge and it just slammed the door shut and snapped my neck<br>{Name A}: How would I feel?<br>{Name B}: Are you ok?", tags: ["violence"] },
    { text: "{Name A}, drowning:<br>{Name B}: I'd save them, but who am I to play god?", tags: ["violence"] },
    { text: "{Name A} Kills {Name B}:<br>{Name C}: Excuse me, that's my emotional support.", tags: ["violence"] },
    { text: "{Name A}: {Name B}... How do I begin to explain {Name B}<br>{Name C}: {Name B} is Flawless<br>{Name D}: I hear their hair's insured for 10,000<br>{Name E}: I hear they do car commercials... in Japan<br>{Name F}: One time they punched me in the face... It was awesome", tags: ["violence"] },
    { text: "{Name A}: You kill people for money?!<br>{Name B}: I can explain!<br>{Name A}: And all this time I've been doing it for free like a chump!", tags: ["violence"] },
    { text: "{Name A}: I know everyone's like 'the only way to kill Dracula is a stake through the heart' but in modern times, I think we should at least try a machine gun", tags: ["violence"] },
    { text: "{Name A}: You know those things will kill you, right?<br>{Name B}, pouring another glass of whiskey: That's the point<br>{Name C}, smoking a cigarette: We're trying to speed up the process<br>{Name D}, Nods while eating raw cookie dough:", tags: ["violence"] },
    { text: "{Name A}: Good responses for being stabbed with a knife?<br>{Name B}: Rude<br>{Name C}: That's fair<br>{Name D}: Not again<br>{Name E}: Are you going to want this back?", tags: ["Violence"] },
    { text: "{Name A}: Who hurt you?<br>{Name B}: What, you want a list?<br>{Name A}: ...<br>{Name A}, Grabbing a knife: Yes, actually", tags: ["Violence"] },
    { text: "{Name A}: Awww, why don't you like cats, {Name B}? They're just snuggly buddies! They have toe beans! They make a little blep! What's not to love??<br>{Name B}: I don't know {Name A}, I just prefer to be conscious instead of dead on the floor<br>{Name A}:<br>{Name B}: I'm ALLERGIC", tags: ["violence"] },
    { text: "{Name A}: {Name B}, we need to talk about your attitude towards {Name C}<br>{Name B}: Oh come on, I just talked to them!<br>{Name A}: In a very violent and concerning way!<br>{Name B}: If a person can't handle someone threatening to rip out their nerves and use them to dance like a puppet, are they really a person?", tags: ["violence"] },
    { text: "{Name A}: 'You'll never find the body' is such a boring threat. A better threat would be: 'You'll never stop finding the body'<br>{Name B}: Or just say, 'They'll be finding parts of you for at least for months... and you'll still be alive for three of them'<br>{Name A}: Now THAT'S a threat!<br>{Name C}, horrified silence:", tags: ["violence"] },
    { text: "{Name A}, creeping behind {Name B} to stab him:<br>{Name B}, loudly: I hope no one is about to attack me from behind because I'm thinking of making cookies later<br>{Name A} pausing:<br>{Name A}: ... What kind?", tags: ["violence"] },
    { text: "{Name A}: Okay, I'll be back soon<br>{Name A}: If {Name B} calls. tell them I'm dead but make sure you really sell it", tags: ["violence"] },
    { text: "{Name A}: I don't think we can mansplain, manipulate or malewife our way outta this one<br>{Name B}, grabbing a dagger: Manslaughter it is", tags: ["violence"] },
    { text: "{Name A}: Do you ever think it's weird that paper technically has six sides but we only use two of them effectively?<br>{Name B}: the other four are for bloodshed<br>{Name A}:<br>{Name C}:<br>{Name D}: They are not wrong<br>{Name E}: Agreed, they're actually onto something for once", tags: ["violence"] },
    { text: "{Name A}: Treat spiders the way you want to be treated<br>{Name B}: Killed without hesitation<br>{Name A}: {Name B}, We've talked about this-", tags: ["violence"] },
    { text: "{Name A}: Okay, you're driving and {Name B} and {Name C} walk into the road. Quick, what do you hit?<br>{Name D}: Oh, definitely {Name C}, I could never hurt {Name B}<br>{Name A}, massaging their temples: The brakes. You hit the brakes.", tags: ["violence"] },
    { text: "{Name A}: {Name B}'s at that very special age when a person only has one thing on their mind<br>{Name C}: Love?<br>{Name A}: Homicide", tags: ["violence"] },
    { text: "{Name A}: Is stabbing someone immoral?<br>{Name B}: Not if they consent to it<br>{Name C}: Depends on who you're stabbing<br>{Name D}: YES?!", tags: ["violence"] },
    { text: "{Name A}: Die young and leave a pretty corpse, that's what I say<br>{Name B}: You should say something else", tags: ["violence"] },
    { text: "{Name A}: They died of natural causes<br>{Name B}: You pushed them off the roof<br>{Name A}: Gravity is natural", tags: ["violence"] },
    { text: "{Name A}: If all your friends jumped off a bridge, would you-<br>{Name B}: Probably", tags: ["violence"] },
    { text: "{Name A}: I'M GONNA GO HOME AND DRINK A WHOLE GLASS OF WEED", tags: ["violence"] },
    { text: "{Name A}, on the second floor during maths: So, like, how far do you think the distance is from that window to that ground?<br>{Name B}: Enough", tags: ["violence"] },
    { text: "{Name A}: I am in pain<br>{Name B}: Do you mean emotional pain or-<br>{Name B}: Oh God! That's a lot of blood<br>{Name A}: Pain, yes", tags: ["violence"] },
    { text: "{Name A}: You look familiar...<br>{Name B}: So do you, where do I know you from?<br>-Long pause-<br>{Name A} and {Name B}: Jail", tags: [] },
    { text: "{Name A}, choking on food:<br>{Name B}: Jeez {Name A}, don't die on me!<br>{Name A}: Don't tell me what to do, I'll die whenever the hell I want!", tags: ["violence"] },
    { text: "{Name A}: Can I kill them?<br>{Name B}: No<br>{Name A}: Why not?<br>{Name B}: He's immortal<br>{Name A}: So you're saying that I get to kill him more than once?", tags: ["violence"] },
    { text: "{Name A}: Sweet dog you got there<br>Police: Yep, our new drug sniffing dog<br>{Name A}: Still training then?<br>Police: What do you mean?<br>{Name A}: Never mind", tags: ["violence"] },
    { text: "Lily: WHAT'S YOUR TYPE<br>Siri: Anything, honestly, but nerds especially<br>Lily, desperately, as Siri bleeds out: YOUR BLOOD TYPE<br>Siri: Oh! B positive<br>Lily: DON'T TRY TO CHEER ME UP! JUST TELL ME YOUR BLOOD TYPE", tags: ["violence"] }



    // Add more violence quotes 
  ],
  swearing_shipping: [
    { text: "{Name A}: So did you kiss them?<br>{Name B}: No, the moment wasn't right<br>{Name A}:<br>{Name B}: Look, {Name C} could be my future partner. I want our kiss to be amazing<br>{Name A}: Aw, {Name B}, that's so sweet. You chickened out like a little bitch", tags: ["shipping", "swearing"] },
    { text: "{Name A}: I've been dropping them the most insanely obvious hints for like a year now. No response<br>{Name B}: Wow, they sound stupid<br>{Name A}: But they're not. They're really smart actually, just dense<br>{Name B}: Maybe you need to be more obvious? Like, I don't know... 'Hey! I love you!'<br>{Name A}: I guess you're right. Hey {Name B}, I love you<br>{Name B}: See! Just like that!<br>{Name A}: Holy fucking shit.<br>{Name A}: If that flies over their head then, sorry {Name A}, but they're too dumb for you", tags: ["shipping", "swearing"] },
    { text: "{Name A}: You're such a fucking loser {Name B}<br>{Name B}: Well, you married me, so who's the REAL loser here?<br>{Name A}: You are not allowed to use this marriage against me<br>{Name B}: I am 100% allowed to use this marriage against you.", tags: ["shipping", "swearing"] },
    { text: "{Name A}: {Name C} has been saying that we are a couple<br>{Name B}: I wish<br>{Name A}: What?<br>{Name B}: I said that bitch", tags: ["shipping", "swearing"] },
    { text: "{Name A} drunk as hell, to {Name B}: {Name B} thinks he knows everything but he has no idea I'm in love with {Name C}<br>{Name B}, with a criminal offensive side eye: Shut. Up.<br>{Name A}: Oops! Sorry! My bad<br>{Name A}, to {Name C}: {Name B} thinks he knows everything but he has no idea I'm in love with {Name C}<br>{Name C}: Y-you're in love with me?!<br>{Name A}: ...<br>{Name A}: Where the fuck is {Name D} when I am talking to them?!", tags: ["shipping", "swearing"] },
    { text: "{Name A}: Is it hot in here or is it just you?<br>{Name B}: YOU'RE ON FIRE! STOP FLIRTING DUMBASS!", tags: ["shipping", "swearing"] },
    { text: "{Name A}: DEKU.<br>{Name B}, startled: Wh- yeah?<br>{Name A}: WHY THE FDUCK IS MY NAME IN YOUR PHONE 'My dorito whore'?!?!?!<br>{Name B}: I-<br>{Name A}:<br>{Name B}:<br>{Name B}: You can't BLAME me. Look at you!", tags: ["swearing", "shipping"] },
    { text: "{Name A}, walks into the room after football practice:<br>{Name B}: God they are so fit<br>{Name C}: They called you a dumbaDass<br>{Name B}: I know and it was so hot", tags: ["shipping", "swearing"] },


    // Add more swearing and shipping quotes
  ],
  shipping_violence: [
    { text: "{Name A}: There's no crime in being a thief<br>{Name B}: What a thief does is take people's property without their permission, which is a crime<br>{Name C}: Not when I do it. I'll steal your heart and you wouldn't mind<br>{Name B}: ...<br>{Name B}: That was very smooth<br>{Name A}: I'm gonna steal both your organs and money", tags: ["shipping", "swearing"] },
    { text: "{Name A}: Sometimes facing your fears head on is the best way to realise they aren't actually scary<br>{Name B}: Yeah, I totally agree. Like when I climbed a mountain during a lightning storm with a metal pole and demanded to get struck by lightning. I didn't even get hurt and now I'm not even scared of god anymore<br>{Name C}: You mean you did that without me?!<br>{Name D}: Oh my fucking go-<br>{Name E}: you did WHAT?", tags: ["swearing", "violence"] },
    { text: "{Name A} trying to set up a trap for {Name B}: If we ever broke up, who would be the first person you'd call?<br>{Name B} without hesitation: No one<br>{Name C}: What?<br>{Name B} sighs and takes {Name C}'s face in his hands: No one. We'll never break up. You're stuck with me forever<br>{Name C} blushes and tries to hide a smile: Okay...<br>- {Name D} and {Name E} watching from afar-<br>{Name D}: {Name E}?<br>{Name E}: I would call the police and report you for that abandoned house you burned down last week", tags: ["shipping", "violence"] },


    // Add more shipping and violence quotes
  ],
  violence_swearing: [
    { text: "{Name A}: I invited you into the woods because I crave the most dangerous game<br>{Name B} and {Name C}, nodding: Knife Monopoly<br>{Name A}:<br>{Name A}: I was actually gonna hunt you for sport, but now I'm interested in whatever the fuck knife Monopoly is", tags: ["violence", "swearing"] },
    { text: "{Name A}: I swear, I'm going to fight the next person who's mean to {Name B}.<br>{Name B} I hate myself<br>{Name A}:<br>{Name A}: ALRIGHT SQUARE UP YOU BEAUTIFUL LITTLE BITCH", tags: ["violence", "swearing"] },
    { text: "{Name A}, watching the news: Someone tried to fight a squid at the aquarium today<br>{Name B}, walks in covered in ink: Well, maybe the squid was being a dickhead", tags: ["violence", "swearing"] },
    { text: "{Name A}: I can't believe you assassinated the Mayor!<br>{Name B}: Well, 'Assassinated' implies it was politically motivated. I just killed him 'cause he was an ass, so technically it's just murder<br>{Name A}: THAT'S NOT BETTER!", tags: ["swearing", "violence"] }

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
  return selectedTags;
}
