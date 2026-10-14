/* =========================================================================
   40 DAYS TO FORGIVENESS — evergreen content + helpers

   All 40 challenges, always open (no calendar, no release dates). Loaded
   before challenges.js (single-day view) and challenges-index.js (list).
   Text uses light markup: **bold**, *italic*, [text](url), "- " bullets,
   blank line = new paragraph, a "For example:" line renders as a bold label.
   The seasonal Elul 2026 version is archived in elul/seasonal-challenges/.
   ========================================================================= */
(function () {

  var DAYS = [
  {
    "day": 1,
    "title": "Awareness - The First Step",
    "intro": "The journey to forgiveness begins with awareness.\n\nIs there anyone who has hurt you, and you’re still feeling angry? Anyone who caused you damage, and you’re still feeling resentful?\n\nOften, we hold onto anger or resentment for years - **without even realizing it.**\n\nIf we don’t consciously notice these feelings, they remain suppressed, and it’s impossible to resolve them.",
    "challenge": "Write a list of a few people you may need to forgive.\n\n**Is there anyone who you feel angry at, for something they did in the past? Anyone you’re still feeling resentful towards?**\n\nFor example:\n- My neighbor once scratched my car and never offered to pay for the damages. Every time I see this neighbor, I remember the incident and just can’t let it go.\n\n- I tried so hard to get my child into a certain school, but the principal rejected them. I feel like they ruined my child’s future, and I can’t imagine ever forgiving them."
  },
  {
    "day": 2,
    "title": "Stretching Our “Forgiveness Muscles”",
    "intro": "Sometimes the word “forgiveness” can be daunting because we think of the huge, life-changing incidents which are very hard to forgive.\n\nBut forgiveness doesn’t have to start there.\n\n**We can start stretching our “forgiveness muscles” in relationships where there’s less resistance.**\n\nBy practicing forgiveness on these smaller issues, we can learn the tools and build the emotional resilience to tackle the bigger ones.",
    "challenge": "Look back at the list of people you identified yesterday whom you’re having trouble forgiving. (Or write a list now, if you haven’t written a list yet.)\n\n**Rank each person on a scale of 1-10.** (1 = easiest to forgive and 10 = hardest to forgive)\n\nFor the rest of this program, you may (or may not) choose to focus on the person whom you feel the **least** resistance to forgiving."
  },
  {
    "day": 3,
    "title": "Forgiving Doesn’t Mean Excusing",
    "intro": "Many people believe that forgiving someone means saying what the person did was acceptable.\n\nBut that’s not what forgiveness really means. **They can be wrong - and we can still forgive.**\n\nForgiveness means **choosing to release the resentment from our hearts.**\n\nBy letting go of our anger, we can lift a heavy weight off ourselves and feel inner peace - even if the other person’s actions were truly wrong.\n\n(Source: Rabbi Dr. Abraham J. Twerski’s book entitled “[Forgiveness](https://a.co/d/0ejCP7pN)”)",
    "challenge": "Think of someone who hurt you in the past.\n\nImagine putting the person in one box, and your feelings of resentment in a separate box.\n\nSay out loud to yourself: “Even though what they did may have been wrong, **I can choose to let go of my feelings of resentment so that I will feel better.”**"
  },
  {
    "day": 4,
    "title": "Benefits of Forgiveness",
    "intro": "When we forgive another person, it’s not just about helping them.\n\n**Forgiveness is also a gift to ourselves.**\n\nHolding onto negativity for a long time can make us feel bitter, broken, and even guilty.\n\nImagine if you could finally release all of that negativity, and feel inner calm and peace within yourself. **How can forgiveness benefit YOU?**",
    "challenge": "If you’re in this program, it means that deep down, you WANT to forgive someone - even if it’s hard. Why?\n\n**Write down (or say out loud) at least 1 reason why you want (or WISH you would want) to forgive someone who has hurt you.**\n\n- How will YOU personally benefit from letting go of the resentment?\n- How will it help Klal Yisrael?\n- How will it help the world?"
  },
  {
    "day": 5,
    "title": "Daven for Help",
    "intro": "Forgiveness is challenging, but we’re not alone.\n\n**Hashem understands how hard it is to forgive, and He’s ready to help us.**\n\nAs Hashem says: *“Open for Me an opening the size of a needle, and I will enlarge it to be an opening [so large that] wagons can enter.”* (Midrash Shir Hashirim)\n\n**If we take the first baby steps toward forgiveness, Hashem will help us the rest of the way.**",
    "challenge": "**Speak to Hashem out loud, and ask Him to help you forgive.**\n\n(Or if necessary, ask Hashem to help you WANT to forgive.)"
  },
  {
    "day": 6,
    "title": "Feeling Angry Is Normal",
    "intro": "If someone hurt you and you’re still feeling angry, you might feel guilty about it.\n\nMaybe you feel guilty for having so much anger. Or guilty that you haven’t forgiven them yet. Or guilty that this is still weighing on you.\n\nBefore we work on forgiving, we can start by acknowledging something important: **feeling angry is totally normal and understandable!**\n\nWhen someone provokes us, that first feeling of anger is a natural human response. It isn’t a choice, and it isn’t something we need to feel guilty about.\n\n**What we *can* choose is what we do with it next:** whether we keep feeding that anger until it becomes a long-term grudge, or decide to try letting it go, one step at a time.",
    "challenge": "Think of someone you’re trying to forgive, and remember the anger or resentment you felt (or still feel) about what they did.\n\nSay out loud to yourself:\n\n**“It’s normal and understandable that I feel this way.** I don’t need to feel guilty about it. When I’m ready, I want to try to let this go.”"
  },
  {
    "day": 7,
    "title": "What’s Holding You Back?",
    "intro": "Rabbi Dr. Abraham J. Twerski explains that there are 3 stages of anger:\n\n(1) First, there’s the initial feeling of “anger” when you’re provoked.\n\n(2) Second is “rage” - how you behave when you react to that angry feeling.\n\n(3) Finally, there might be **“resentment”** which means holding onto a grudge long-term.\n\nSo let’s try to understand: Why do we sometimes hold onto resentment long-term?\n\nUnderstanding **what we think we’re gaining** by holding onto this resentment is the first step toward letting it go.",
    "challenge": "Answer 1 of these questions for yourself.\n\n**Say the answer out loud, or write it down:**\n\n- What am I afraid will happen if I would just let go of my anger?\n- What do I imagine I’m gaining by continuing to hold onto this resentment?"
  },
  {
    "day": 8,
    "title": "People Are Complicated",
    "intro": "A helpful step in forgiveness is remembering that people are complicated.\n\n**We can’t always see what someone else is dealing with, or why they act the way they do.**\n\nImagine a co-worker who often snaps at you. It feels hurtful, but maybe they’re under a lot of stress caring for a sick family member. They might be doing their best, but it’s hard to always stay calm.\n\nRealizing that **everyone has unseen struggles** can help us let go of our resentment and be more forgiving.",
    "challenge": "Think of someone whose behavior bothers you.\n\nTake a moment to consider what unseen struggles they might be facing.\n\n**Imagine at least one possible reason why they act the way they do.**\n\nFor example:\n\n- My boss tends to give harsh feedback and seems overly critical. But maybe he was taught that tough criticism is the only way to push someone to improve. Maybe he is working on being more encouraging, but he isn’t there yet."
  },
  {
    "day": 9,
    "title": "We’re All Imperfect",
    "intro": "Nobody is perfect. Otherwise, there would be no purpose in living!\n\nHashem created us with flaws and middos we need to work on so that we can slowly grow and become better.\n\n**Inevitably, we make mistakes along the journey, and sometimes even intentionally do wrong.**\n\nWe know this about ourselves, but sometimes we expect other people to be perfect.\n\n**Let’s try to see others as we see ourselves - imperfect, struggling, and trying to get better.** (And sometimes we don’t even know *how* to be better!)",
    "challenge": "Think about 1 negative middah that you have now, that you wish you could improve.\n\nNow think about the person you’re trying to forgive, and say out loud to yourself:\n\n**“This person is a work in progress, just like me.** They make mistakes and sometimes even intentionally do wrong, just like me. We are all human and it takes time to become better.”"
  },
  {
    "day": 10,
    "title": "What Are You Waiting For?",
    "intro": "Sometimes we have a hard time forgiving because **we’re still waiting for something.**\n\nWaiting for them to apologize. Waiting for them to change. Waiting for them to pay back what they owe.\n\nThinking about **what exactly we’re waiting for** can help us become more aware of what’s holding us back from forgiving, and ultimately help us take steps in the right direction.",
    "challenge": "Answer the following question for yourself (write down the answer or say it out loud):\n\n**Is there anything about this situation that I am still waiting to change?**\n\nFor example:\n- I’m waiting for them to apologize\n- I’m waiting to get my money back\n- I’m waiting for them to do teshuva (or transform into a nicer person)\n\nFor each item on your list, write a note or consider whether you think it’s likely to happen, or if there is anything practical you can do to help make it happen sooner."
  },
  {
    "day": 11,
    "title": "What Do I Really Need?",
    "intro": "When someone hurts us, the pain isn’t only about what they did. It’s also about what we’ve lost.\n\nMaybe you lost money.\n\nMaybe someone spread rumors about you and damaged your reputation.\n\nMaybe a friend pulled away, and now you’re missing that friendship.\n\nWhatever we’re missing right now, Hashem has endless ways to give it to us, and we can ask Him for it today! Hashem can replace whatever we’ve lost, and He can bring us healing.",
    "challenge": "Think of a scenario where someone affected you negatively, and you’re having trouble forgiving them.\n\nAsk yourself: **What did I lose in this situation?**\n\nThen ask Hashem to fill that need, replace what you’ve lost, or bring you healing.\n\nFor example:\n- I lost so much money - Hashem, please make sure I have whatever money I need!\n- I lost the chance to marry that person - Please, Hashem, help me marry the right person soon!\n- I lost some of my trust in people. Please Hashem, bring caring people into my life, and help me trust that You are always looking out for me."
  },
  {
    "day": 12,
    "title": "Give Them a Chance",
    "intro": "Often, we withhold forgiveness because **we’re waiting for the other person to apologize.**\n\nBut do they know they hurt you? Did you ever tell them?\n\nWe have a mitzvah of “Do not hate your brother in your heart.” This means that if we are holding onto resentment, **we might need to tell the person, and give them the opportunity to apologize.**\n\nMaybe they’ll apologize, or maybe they won’t. But at least consider giving them the chance. If someone was secretly mad at you, **wouldn’t you want the chance to apologize?**",
    "challenge": "If there’s someone who hurt you and hasn’t yet apologized, ask yourself:\n\n**Am I able to reach out to them and tell them I still feel hurt?**\n\nIs there any chance they might apologize, if I would do that?\n\n(Note: If the person is truly abusive or unstable, or if you feel the conversation would not be productive for **any** reason, you might be better off NOT speaking to them. Discuss the situation with a Rav or mentor.)\n\n**For the purpose of today’s challenge, the point is just to conclude for yourself if the answer is “Yes” or “No”:**\n\n- **YES** - There is a chance they might apologize; or\n- **NO** - It would not be a good idea to talk to them - I am **not** waiting for them to apologize"
  },
  {
    "day": 13,
    "title": "Write a Letter",
    "intro": "If you could tell someone they hurt you... what would you say?\n\nIt’s hard to speak about our pain because it makes us feel vulnerable. It can also be incredibly awkward.\n\n**But if we want to do the right thing, release our pain, and bring Shalom into the world, this is *sometimes* the only way to move forward.**\n\nIt might be scary, but sometimes Hashem wants us to try. Who knows? Maybe they’ll apologize or maybe they won’t. But at least you’ll know you tried.",
    "challenge": "Imagine you were speaking to the person who hurt you. What would you say?\n\n**Write a letter of what you WOULD say if you could talk to them.**\n\nTry not to accuse them of anything directly - rather, speak about how you experienced the incident and why it was painful for you.\n\n**For the sake of today’s challenge, just write a letter of what you WOULD say.** You don’t necessarily need to send the letter.\n\n**(Note: Be very careful before telling someone that they hurt you.** If they are abusive or unstable, or if you believe the conversation would be unproductive for **any** reason, it is better not to communicate with them. If you are not sure, discuss it with a Rav or mentor.)"
  },
  {
    "day": 14,
    "title": "Understand Their Perspective",
    "intro": "How can we begin to forgive?\n\nSometimes, it helps to try to understand **why** the other person acted the way they did.\n\nEven if we don’t find out any new information, just thinking about their side of the story can help us begin to understand them.\n\nWe tend to focus only on our own feelings and forget there’s another side. **Trying to see things from the other person’s point of view** may help us feel less bothered or angry.",
    "challenge": "Think about an incident where someone hurt you.\n\n**Now pretend you were in their shoes, and write the story from their perspective.**\n\nWhat might they have been thinking or feeling at that time? What might have motivated their actions?\n\n(Even if you don’t know for sure what happened, thinking about how there MAY have been more to the story might help lessen your anger.)"
  },
  {
    "day": 15,
    "title": "It’s Not About Me",
    "intro": "Sometimes, people may snap at you, or look annoyed - **but they aren’t necessarily reacting to YOU.**\n\nInstead, they might be stressed about something else, coming off another difficult conversation, not even aware of their expression or tone of voice, or feeling sick.\n\nWe tend to think that if someone is in a bad mood, I somehow caused it.\n\nSaying **“It’s not always about me”** helps us de-personalize, and realize their behavior doesn’t necessarily have anything to do with us.",
    "challenge": "Look over your list of people whom you still feel negative toward.\n\nTry to pick at least 1 person on the list and say out loud: **“There’s a chance it wasn’t about me.”**"
  },
  {
    "day": 16,
    "title": "Emulating Hashem’s Compassion",
    "intro": "As the saying goes: “Hurt people hurt people.”\n\nThis means that if someone hurt us, they might be struggling with their own issues.\n\nInstead of turning our hurt into anger, we can try to flip our perspective and **see this person with compassion.**\n\nWhen we have compassion for another person, it draws down Hashem’s mercy on us.\n\n**If we judge others with compassion, Hashem will have compassion on us, too.**",
    "challenge": "**Ask Hashem to help you feel compassion toward someone who hurt you or bothered you.**\n\nImagine what they might possibly be struggling with, and try to feel at least a bit of compassion for them."
  },
  {
    "day": 17,
    "title": "Seeing the Good",
    "intro": "Each of us was created B’Tzelem Elokim, in Hashem’s image. A person is inherently good and G-dly.\n\nHowever, it’s easy to overlook this goodness and focus on the negative traits that haven’t been fully refined yet.\n\nPirkei Avos encourages us to cultivate an “Ayin Tov” (a good eye) which means **actively looking for the positive qualities in those around us.**\n\nWhen we can acknowledge the Divine spark in everyone, it helps us bring the person’s G-dliness into focus.",
    "challenge": "Think about someone who tends to evoke negative feelings in you.\n\nSpend a moment thinking about how this person is a Tzelem Elokim.\n\n**Write down 3 positive things about this person.**\n\n(If you can, try to find middos that are part of Hashem’s middos, such as being consistent, compassionate, kind, generous...)"
  },
  {
    "day": 18,
    "title": "Accept What You Cannot Change",
    "intro": "There’s a famous “Serenity Prayer” which says: **“G-d, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.”**\n\nIf there’s something you can change - do it.\n\nBut if someone else’s behavior is out of your control, it helps to accept that **I cannot control what other people do.**\n\nOf course, we can always daven, and we believe that people can change through teshuva, if they try.\n\nBut accepting that the ultimate outcome is up to their own **free will** - and Hashem - can help us let go and move on.",
    "challenge": "Is there anyone in your life who is causing you frustration because they aren’t changing the way you want?\n\nTake a deep breath and then say out loud: **“I realize that this person’s behavior is not in my control. I accept that this is how they are, right now.”**\n\nSay it 10x out loud."
  },
  {
    "day": 19,
    "title": "Practice on the Small Stuff",
    "intro": "If someone hurt you in a major or long-lasting way, forgiving them can take a very long time.\n\nBut we don’t have to start there. Every day, we face dozens of small irritations that are much easier to let go of: a driver who cuts us off, a store clerk who’s rude, a family member who leaves a mess, or someone who takes a long time to finish what we asked them to do.\n\n**Each of these small annoyances is a chance to practice letting go right away, before the anger has a chance to grow.**\n\nThe more we practice forgiving the small things, the easier it becomes to forgive the big ones.",
    "challenge": "If something frustrating or annoying happens today, practice letting it go.\n\nTake a deep breath and say out loud to yourself: **“This was annoying (or painful, or inconvenient) - but I can let it go.”**\n\nFor example:\n- Someone cut in front of you in line.\n- Your child spilled juice on the floor you just cleaned.\n- A driver cuts you off or takes the parking spot you were about to pull into.\n- A family member leaves dirty dishes in the sink or a mess on the counter.\n- Someone is late and keeps you waiting.\n\n(If nothing happens to you today, you can think back to something that happened recently, and say out loud that you can let it go.)"
  },
  {
    "day": 20,
    "title": "Bring Hashem Into the Picture",
    "intro": "Anger stems from the belief that **“This shouldn’t have happened.”** When someone hurts us, we feel it’s unfair and undeserved.\n\nBut with Emunah, we can see it differently. Hashem has a Master Plan, and sometimes He sends us pain, to help us grow. The person who hurt us was just a messenger.\n\n**If this person wouldn’t have hurt us, Hashem could have sent the pain another way.** Instead of thinking, “This pain *shouldn’t* have happened,” we can recognize it was meant to happen - Hashem did it for a reason.",
    "challenge": "Think about a time when someone hurt you or bothered you.\n\nTurn to Hashem and say:\n\n**“Hashem, I don’t know why I had to experience this pain, but I realize it’s part of Your Master Plan and the pain is coming from You.**\n\n“This person was just Your messenger. If they wouldn’t have hurt me, the pain could have happened some other way.”\n\n(Optional: Try to imagine 1 other way that Hashem might have sent you that pain.)\n\nFor example:\n- I’m angry at my boss for embarrassing me. But I realize this came from Hashem - for some reason Hashem wanted me to experience this embarrassment. If my boss wouldn’t have embarrassed me, maybe one of my coworkers would have embarrassed me instead."
  },
  {
    "day": 21,
    "title": "Forgiving Yourself",
    "intro": "Sometimes the hardest person to forgive is ourselves.\n\nIt can be especially hard when we’re still dealing with the results of a mistake we made in the past.\n\nBut the same tools that help us forgive others can help us forgive ourselves:\nWe can look back at that moment with understanding, remembering that **we were probably under stress** and didn’t know what would happen.\nWe can accept that we’re human, and that **making mistakes is part of growing.**\nWe can trust that even though we can’t change the past, **Hashem is with us** and guiding us every step of the way.\n\nThe way we treat ourselves is often the way we treat other people.\n\nIf we’re harsh with ourselves for every mistake, it’s hard to be gentle with anyone else. **But if we can forgive ourselves, forgiving others gets easier.**",
    "challenge": "If there’s a mistake from the past that you still feel bad about, **write one sentence about what was going on for you at that time.** Start with “At that time, I was...”\n\nThen say out loud: **“I can’t change the past, but I’m human, and I’m still growing. I can forgive myself.”**\n\nFor example:\n- At that time, I was exhausted and overwhelmed, and I didn’t realize how my words would come out.\n- At that time, I was doing the best I could with what I knew.\n- At that time, I was so stressed about money that I wasn’t thinking clearly.\n- At that time, I was hurting, and I took it out on the people closest to me.\n- At that time, I was young and didn’t know any better."
  },
  {
    "day": 22,
    "title": "You Don’t Need to Be Best Friends",
    "intro": "Sometimes, we resist forgiving because we don’t want to have a close relationship with this person.\n\nBut that’s okay.\n\nHalacha teaches that while we must show respect to every person, we don’t need to be close with everyone.\n\n**It’s fine to keep a respectful distance if it’s healthier for you.** We can still treat them (and think about them) with kindness and respect.\n\nWe can let go of our resentment, and if necessary, maintain boundaries for our own well-being.",
    "challenge": "Write a paragraph for yourself describing what your ideal relationship with this person would look like, after you’re able to forgive them.\n\nConsider:\n- How often do you see them?\n- How do you react when you see them?\n- How will you speak when you talk to them?"
  },
  {
    "day": 23,
    "title": "The Power of Giving",
    "intro": "It’s well known that the Hebrew word for love (Ahavah) comes from the root **“Hav” (giving).**\n\nWe tend to think that first we love someone, and then we give to them. But Chazal teach us it’s the opposite: **Giving leads to love.**\n\nIf we want to develop more love for someone - or even just lessen feelings of anger - we can try giving to them.\n\nEven small acts of kindness can slowly chip away at our negative feelings, and help them fade away.",
    "challenge": "Think of someone you’re having difficulty with.\n\n**Do a small act of kindness for them today.**\n\n(Or if that’s too hard - at least daven for them.)\n\nFor example:\n- Send them a thoughtful note or card\n- Offer to help them with something\n- Send them flowers\n- Daven for their wellbeing\n- Say a perek of Tehillim for them"
  },
  {
    "day": 24,
    "title": "Learning the Lesson",
    "intro": "Everyone goes through painful experiences in life. But the point of life isn’t for everything to be easy. The point of life is to keep growing, do mitzvos, and transform our middos to become closer to Hashem.\n\nWe wish we didn’t have to go through painful experiences. But often, when we look back at these experiences, **we can see they helped us become stronger, wiser, or more sensitive to others than we were before.**\n\nWe may never know the true reason why Hashem decided we should have certain painful experiences. But finding even one way we grew from it can help us feel like the painful experience wasn’t for nothing.\n\nAnd once we can process the lesson, it can become easier to let go.",
    "challenge": "Think about a painful experience you once went through. Write down (or just think of) one way you grew from it.\n\n(Or if you haven’t grown from it yet, think about how you COULD grow from it.)\n\nFor example:\n- It was so hard that I lost my job. But it gave me the chance to work on my Bitachon, and I really grew a lot in my trust in Hashem over the course of the next year.\n- I was hurt that she never apologized, but it gave me the opportunity to practice forgiveness, patience, understanding and emulating Hashem."
  },
  {
    "day": 25,
    "title": "Forgiving Is a Process",
    "intro": "Wouldn’t it be great if we could snap our fingers and suddenly let go of all resentment?\n\nThe reality is: **Forgiveness is a slow process that requires time and introspection.**\n\nOur job is to keep taking baby steps to slowly chip away at the resentment, one bit at a time. Ultimately, we’re trying to reach a place of greater peace and understanding than we had before.\n\n**Forgiveness doesn’t always happen overnight. It’s a journey. And every step is a victory.**",
    "challenge": "Reflect on what you’ve done to try to forgive someone. Joining this 40-day challenge was an amazing first step!\n\nNext, say out loud: **“I really want to forgive this person. I realize it might take time to forgive them wholeheartedly, and this is normal. Please Hashem, help me forgive them wholeheartedly!”**"
  },
  {
    "day": 26,
    "title": "Releasing Physical Tension",
    "intro": "Holding onto resentment for a long time can sometimes make us feel **physically tense.**\n\nWhen we think about people or situations that have upset us, we can **notice how our body feels,** and see if we can release some of that tension.\n\nBy breathing deeply and relaxing our muscles, we can calm our minds and give ourselves the emotional space to understand and forgive.",
    "challenge": "Think of someone you’re trying to forgive. How does your body feel when you think of them?\n\nTake a moment to notice where you’re holding the tension in your body.\n\n**Take a deep breath in, and say “I can forgive.”**\n\nNext, as you exhale, relax your muscles and **imagine the resentment leaving your body.**"
  },
  {
    "day": 27,
    "title": "Find Evidence to the Contrary",
    "intro": "Sometimes, our anger makes us **zero in on 1 small detail** instead of seeing the whole picture.\n\nWe might think: “She’s so insensitive!” or “He’s so stingy!”... **but is that a fair assessment?**\n\nLet’s take a step back and think if they ALWAYS act that way. Can we remember a time when they acted kindly?\n\nWe’re all human and make mistakes. Let’s try to see each person as a **mix** of qualities, rather than entirely negative.",
    "challenge": "Identify one character trait you’re blaming the person for. (“She’s so insensitive / He’s so stingy”)\n\n**Next, try to think of evidence to the contrary.** (Was there ever a time when they acted sensitively or generously?)"
  },
  {
    "day": 28,
    "title": "What Would You Tell a Friend?",
    "intro": "Imagine a friend tells you that someone hurt them. You would probably start by showing that you understand how much it hurts: *“That sounds really painful. I’m so sorry you went through that!”*\n\nThen, once they feel heard, you might gently help them think about moving forward. Maybe you’d tell them they don’t have to forgive overnight, that letting go doesn’t mean what happened was okay, or that it’s okay to take it one small step at a time.\n\nBut when it’s our own pain, we’re often much harder on ourselves. We judge our feelings, rush ourselves to “get over it,” or tell ourselves we’re overreacting.\n\nSometimes the wisest advice we can get is the advice we’d give someone else.",
    "challenge": "Imagine a close friend came to you and told you about the same situation you went through with the person you’re trying to forgive.\n\n**Write down (or say out loud) what you would tell them.**\n\nStart by acknowledging their pain. After that, you might add anything else that would comfort them or help them move forward, like encouragement, perspective, or reminding them that Hashem is with them, and that there is a purpose to this story, even if we can’t see it yet."
  },
  {
    "day": 29,
    "title": "Clearing Out Emotional Clutter",
    "intro": "We hold onto things we believe we’ll need one day - like holding onto a pile of old clothes, just in case they might fit again.\n\nIt’s the same with anger: We hold onto resentment, thinking we’ll need to use it one day... But what for?\n\nRabbi Dr. Twerski suggests a powerful way to let go: **Commit 100% to the mitzvah of “Do not take revenge.”** Promise yourself that you’ll never badmouth the other person, give them the silent treatment, or do anything to “punish” them for what they did.\n\n**When we firmly resolve never to take revenge, our resentment becomes useless - and we can let it go.**",
    "challenge": "Ask yourself: **Are you currently doing anything to “take revenge” or “punish” the person who hurt you?**\n\n- Maybe you’re giving them the silent treatment.\n- Maybe you’re glaring at them every time you see them.\n- Maybe you’re speaking badly about them to other people.\n\nNow answer this question out loud to yourself: **Do I plan to continue ‘punishing’ them like this in the future?**"
  },
  {
    "day": 30,
    "title": "Substitute the Memory",
    "intro": "Our thoughts have a powerful effect on how we feel.\n\nAfter we’ve forgiven someone, we might still find ourselves a few days later, slipping back and thinking about the anger-triggering incident again.\n\nIf this happens, we can try to shift our focus and **substitute the anger-triggering thought with a positive mental image instead.**\n\nBy being prepared with a positive memory or thought, we can break the angry cycle and stop ourselves from ruminating endlessly on our old pain.",
    "challenge": "Write down (or think of) 1 or 2 positive memories or qualities about the person you’re trying to forgive.\n\n(Optional: Put the note somewhere where you’ll see it, the next time you find yourself slipping back into old thoughts of anger.)"
  },
  {
    "day": 31,
    "title": "Can You Forgive SOME?",
    "intro": "Rabbi Dr. Abraham J. Twerski writes that forgiveness is like paying back a debt.\n\nIf you owe someone $10,000 and can’t pay it all back today... **can you at least pay back part of it?**\n\nIf you’re trying to forgive and it feels very hard, try asking yourself:\n\n**Can I forgive them for at least one small part of what they’ve done?**",
    "challenge": "Think about someone you’re trying to forgive. Are there multiple parts to the situation? Are there several aspects that you’re trying to forgive?\n\nWrite a list of all the things you’re upset about, and then ask yourself: **Can I forgive them for at least one part?**\n\nChoose 1 part and say out loud “I can forgive them for this part.”"
  },
  {
    "day": 32,
    "title": "You Are Not the Judge",
    "intro": "We often withhold forgiveness because we feel the person was wrong, and **must be held accountable for what they did.**\n\n(Of course, if someone is truly dangerous, we may need to inform a Rav or authorities to protect other people.)\n\nBut in “regular” situations where someone acted insensitively or made a “bad” decision, it helps to remember that **Hashem is the Ultimate Judge, and that role is reserved for Him alone.**\n\nIt’s not our job to prosecute others or hold them accountable.\n\nLetting go of the burden to constantly judge others frees us to **focus on what we ARE responsible for** - doing mitzvos, improving our middos and becoming closer to Hashem.",
    "challenge": "Think of a time when you judged another Jew - you believed they were wrong and should be held accountable for their actions.\n\nSay out loud: **“It’s not my job to judge this person.** Only Hashem knows each person’s inner thoughts and struggles. Only Hashem can truly judge each person and hold them accountable for what they do.”\n\n(Of course, if someone is truly dangerous or harming other people, we may need to inform a Rav or authorities to protect others from harm. Today’s challenge refers to “regular” situations of insensitivity between individuals.)"
  },
  {
    "day": 33,
    "title": "Be a Role Model",
    "intro": "When we’re in the middle of a conflict, it’s hard to see clearly. We can usually come up with a good reason to stay angry, to keep our distance, or to hold our ground.\n\nBut here’s a trick that can cut through the fog: **Imagine someone younger is watching how you handle this. What would you want them to learn from you?**\n\nOnce we know what we’d want to teach someone else, we know what we’re working toward.",
    "challenge": "Think of a conflict you’re dealing with. Picture someone younger watching how you handle it. It could be a child, a younger sibling, a niece or nephew, or a neighbor’s kid.\n\nAsk yourself: **What would I want them to learn from me in this situation?**\nWrite it down (or say it out loud to yourself).\n\nFor example:\n- I’d want them to learn that family is more important than being right.\n- I’d want them to learn that you can disagree with someone and still treat them with respect."
  },
  {
    "day": 34,
    "title": "Apologize to THEM",
    "intro": "When we’re in a strained relationship, it’s easy to focus on what **the other person** did wrong.\n\nBut is it possible that **we** had a tiny part in the conflict? Is there a chance they’re waiting for **us** to apologize?\n\nEven if we feel like what the other person did was worse, it’s very brave and admirable if we can be the one to **take the first step toward peace.**\n\nLet’s be like Aharon HaKohein, who loved peace and always worked tirelessly to bring people back together.",
    "challenge": "Think about someone you’re upset with. Is there anything THEY might be upset about? Is it possible they are waiting for *you* to apologize for any piece of the situation?\n\n**Today, take the first step toward making Shalom by apologizing to them, even for something small.**\n\n(If you find it too hard to apologize, at least write what you WOULD say if you would apologize.)\n\n(If there’s definitely nothing for you to apologize for, or you feel it would be unhealthy to communicate with this person, you can skip this challenge.)\n\n(Alternatively, you can apologize to someone else you might have hurt - even if it isn’t someone you’re trying to forgive.)"
  },
  {
    "day": 35,
    "title": "Letting Go Shows You’re Strong",
    "intro": "Often, we are resistant to forgiving because we see “giving in” as a weakness. Some might even feel like it’s an act of surrender.\n\n**But the truth is - if we keep holding onto resentment, we are letting the resentment keep us captive!**\n\nForgiving someone is a powerful act that requires inner strength and courage.\n\nTrue strength lies in the ability to rise above our emotions and offer forgiveness. By letting go and choosing peace - we move from victim to victor.",
    "challenge": "Take a deep breath and say out loud to yourself: “Letting go of this resentment doesn’t mean I’m weak. **It means I’m strong.**”"
  },
  {
    "day": 36,
    "title": "Klal Yisrael Needs YOU!",
    "intro": "Forgiveness isn’t just about you. It has the power to protect, heal, and uplift the entire Jewish nation.\n\nSo many people in Klal Yisrael are struggling right now, whether from physical pain, illness, emotional difficulties, or family challenges. **Every act of forgiveness adds to the merit of our people!**\n\nImagine how much light we can bring into the world if we all work on letting go!\n\nEvery small step you take toward forgiveness is a huge merit for our nation. **Klal Yisrael needs YOU!**",
    "challenge": "Forgiveness is so essential that Chazal recommend we say a special tefillah before saying Shema at night. (It begins with “Ribbono Shel Olam...”)\n\nIn this tefillah, we declare that we are forgiving anyone who may have wronged us.\n\n**Today, read the English translation of this “Ribbono Shel Olam” tefillah.**\n\nIf you don’t already say this every night, put a reminder by your bed to say it.\n\nDownload a printable Ribbono Shel Olam poster at [40forgive.com/tefillah](https://40forgive.com/tefillah)"
  },
  {
    "day": 37,
    "title": "Forgiveness Is a Choice, Not Just a Feeling",
    "intro": "Why do you want to forgive?\n\nOften, we want to forgive because we want to feel better. We want **emotional relief** from our pain, guilt, sadness, anger, or disappointment.\n\nIn order to forgive, we must remember that our thoughts directly impact our feelings. **We can change how we feel by changing our thought patterns.**\n\nForgiveness means that when you remember the pain or insult, you take responsibility for your own thoughts and **choose not to ruminate on them unproductively.**",
    "challenge": "Picture someone you’re trying to forgive. Notice how you feel about them, or what thoughts come up in your mind.\n\nNow, consider how you would **ideally** like to think about them.\n\n**Write one sentence or “mantra” you can use to guide your mind toward more positive thoughts, the next time you think of them.**\n\nHow will you choose to think about this person, the next time a negative thought arises?\n\nFor example:\n- I can’t change the past, but I can choose to move forward into a brighter future.\n- I am choosing to let go, so that I will feel better and lighter.\n- What they did was not about me. They were struggling with their own pain."
  },
  {
    "day": 38,
    "title": "Hashem’s Unbelievable Forgiveness",
    "intro": "Imagine giving someone a precious gift, and they throw it back in your face. **Forgiving them would be really hard, right?**\n\nYet, that’s what we do all the time to Hashem. He gives us life, brains, incredible bodies, and the power of speech... yet we sometimes use those gifts to sin against Him.\n\n**Still, when we do teshuva, Hashem forgives us completely.**\n\nIf Hashem can show such incredible compassion and patience, forgiving us no matter how many times we fail, **we can be inspired to do the same.**\n\nLet’s try to let go of grudges, forgive, and emulate Hashem’s incredible mercy and understanding.",
    "challenge": "Think about 3 things you’ve done wrong in the past and are trying to change.\n\nThen say: **“Thank you Hashem, for forgiving me and having patience for me as I’m trying to grow.”**"
  },
  {
    "day": 39,
    "title": "Be Prepared to Forgive Again",
    "intro": "Forgiveness isn’t a one-time event. It’s an ongoing commitment, like eating healthy.\n\nIf you’ve been eating healthy Sunday, Monday, Tuesday, Wednesday... and then you have a bit of junk food on Thursday, does that mean you’ve failed at staying healthy? **Of course not! You just keep going!** One small slip-up does not ruin all your previous progress.\n\nSimilarly, even after we forgive someone, we might find ourselves thinking negatively about them again - even a few hours later. That’s normal!\n\n**When an old hurt resurfaces, we don’t need to argue the whole case again.** We can simply notice it, and gently remind ourselves of the path we’ve chosen - forgiveness.",
    "challenge": "Think of someone you’re trying to forgive. Imagine yourself having negative thoughts about them again tomorrow.\n\n**Now imagine yourself redirecting those thoughts in a healthier way - the way you’d ideally like to think about them.**\n\nFor example:\n- There I go again, replaying what she said at the wedding. But I’ve already decided to let it go. I understand she was going through a hard time."
  },
  {
    "day": 40,
    "title": "Say It Out Loud",
    "intro": "Feeling forgiveness in your heart is a huge step, but there’s another crucial part: **expressing it out loud.**\n\nChazal say that even though Yosef Hatzaddik made peace with his 10 brothers for selling him, **he never actually said, “I forgive you.”**\n\nBecause he never expressed his forgiveness out loud, the souls of the 10 Shevatim had to return later as the Asara Harugei Malchus (the Ten Martyrs who suffered terribly during Roman times).\n\nThese 10 men were a Gilgul (reincarnation) of the 10 Shevatim. They had to be killed as a kapparah (atonement) because **Yosef never VERBALLY forgave them** many years ago.\n\nYour words have power - don’t just feel it, say it!",
    "challenge": "Think about a person you’re trying to forgive.\n\n**Say out loud: “I wholeheartedly forgive [person’s name] for doing ______.”**\n\n(If you don’t feel like you can wholeheartedly forgive them yet, at least say: “I want to forgive this person, and I am trying to forgive. Please, Hashem, help me forgive them wholeheartedly.”)"
  }
];

  // Raffle claim link. program=evergreen is REQUIRED — without it the claim
  // page treats the click as the closed seasonal round.
  function raffleLink(n) {
    return "https://raffle.40forgive.com/claim.html?challenge=day-" + pad2(n) + "&program=evergreen";
  }

  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Inline markup -> HTML. Escape first, then links, bold, italic.
  function inline(s) {
    var h = esc(s);
    h = h.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>');
    h = h.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    h = h.replace(/\*(.+?)\*/g, "<i>$1</i>");
    return h;
  }

  // Block text -> HTML. Blank lines split paragraphs; single line breaks
  // become <br>; "- " lines become a bullet list; "For example:" is a label.
  // opts: { p: paragraph class, ul: list class, label: label class }
  function blocks(text, opts) {
    var out = [];
    String(text).split(/\n\s*\n/).forEach(function (block) {
      var para = [], items = [];
      function flushPara() {
        if (para.length) out.push("<p" + (opts.p ? ' class="' + opts.p + '"' : "") + ">" + para.join("<br>") + "</p>");
        para = [];
      }
      function flushList() {
        if (items.length) out.push("<ul" + (opts.ul ? ' class="' + opts.ul + '"' : "") + ">" +
          items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>");
        items = [];
      }
      block.split("\n").forEach(function (raw) {
        var line = raw.trim();
        if (!line) return;
        if (line.indexOf("- ") === 0) {
          flushPara();
          items.push(inline(line.slice(2)));
        } else if (/^for example:$/i.test(line)) {
          flushPara(); flushList();
          out.push("<p" + (opts.label ? ' class="' + opts.label + '"' : "") + ">For example:</p>");
        } else {
          flushList();
          para.push(inline(line));
        }
      });
      flushPara(); flushList();
    });
    return out.join("");
  }

  window.ChallengesData = {
    DAYS: DAYS,
    raffleLink: raffleLink,
    pad2: pad2,
    esc: esc,
    blocks: blocks
  };
})();
