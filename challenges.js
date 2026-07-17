(function () {
  /* =========================================================================
     40 DAYS TO FORGIVENESS — daily challenges page

     Full 40-day schedule + content, sourced from the final challenge
     spreadsheet.

     Model: each SCHEDULE entry = ONE challenge = ONE raffle ticket, even
     when it spans multiple calendar days (e.g. a Friday challenge that
     covers Friday+Shabbos, or Friday+Shabbos+Sunday before Rosh Hashanah).
     `days` is display-only (drives the "Day N" / "Days N–M" badge) — it
     does NOT create multiple raffle buttons. `ticket` is the single
     challenge_id used for that entry's raffle link.

     Unlocks at MIDNIGHT US-EASTERN on `release`. Preview any date with
     ?date=YYYY-MM-DD.
     ========================================================================= */

  // ---- Release schedule: one entry per challenge/ticket ----
  // The raffle's challenge_id is day-01..day-40, matching the FIRST day
  // number in `days` (i.e. the existing Mailchimp link scheme) — NOT a
  // separate sequential ticket count. A Friday entry like days:[2,3] only
  // ever links to day-02; day-03 has no ticket of its own.
  var SCHEDULE = [
    { release: "2026-08-13", days: [1] },
    { release: "2026-08-14", days: [2, 3] },
    { release: "2026-08-16", days: [4] },
    { release: "2026-08-17", days: [5] },
    { release: "2026-08-18", days: [6] },
    { release: "2026-08-19", days: [7] },
    { release: "2026-08-20", days: [8] },
    { release: "2026-08-21", days: [9, 10] },
    { release: "2026-08-23", days: [11] },
    { release: "2026-08-24", days: [12] },
    { release: "2026-08-25", days: [13] },
    { release: "2026-08-26", days: [14] },
    { release: "2026-08-27", days: [15] },
    { release: "2026-08-28", days: [16, 17] },
    { release: "2026-08-30", days: [18] },
    { release: "2026-08-31", days: [19] },
    { release: "2026-09-01", days: [20] },
    { release: "2026-09-02", days: [21] },
    { release: "2026-09-03", days: [22] },
    { release: "2026-09-04", days: [23, 24] },
    { release: "2026-09-06", days: [25] },
    { release: "2026-09-07", days: [26] },
    { release: "2026-09-08", days: [27] },
    { release: "2026-09-09", days: [28] },
    { release: "2026-09-10", days: [29] },
    { release: "2026-09-11", days: [30, 31, 32] },
    { release: "2026-09-14", days: [33] },
    { release: "2026-09-15", days: [34] },
    { release: "2026-09-16", days: [35] },
    { release: "2026-09-17", days: [36] },
    { release: "2026-09-18", days: [37, 38] },
    { release: "2026-09-20", days: [39, 40] }
  ];

  // ---- Challenge content ----
  //      Keyed by the entry's first day number (i.e. entry.days[0], same
  //      number used in the raffle challenge_id). Each entry:
  //        title    — challenge title
  //        insight  — array of paragraph strings
  //        task     — the "your challenge for today" instruction
  //        examples — array of example/prompt strings (rendered as bullets
  //                   under "For example:"); omit or leave empty if the day
  //                   has none.
  var CONTENT = {
    1: {
      title: "Awareness - The First Step",
      insight: [
        "The journey to forgiveness begins with awareness.",
        "Is there anyone who has hurt you, and you’re still feeling angry? Anyone who caused you damage, and you’re still feeling resentful?",
        "Often, we hold onto anger or resentment for years - <b>without even realizing it.</b>",
        "If we don't consciously notice these feelings, they remain suppressed, and it’s impossible to resolve them."
      ],
      task: [
        "Write a list of a few people whom you may need to forgive.",
        "Is there anyone who you feel angry at, for something they did in the past? Anyone you're still feeling resentful towards?"
      ],
      examples: [
        "My neighbor once scratched my car and never offered to pay for the damages. Every time I see this neighbor, I remember the incident and just can’t let it go.",
        "I tried so hard to get my child into a certain school, but the principal rejected them. I feel like they ruined my child’s future, and I can’t imagine ever forgiving them."
      ]
    },
    2: {
      title: "Stretching Our “Forgiveness Muscles”",
      insight: [
        "Sometimes the word “forgiveness” can be daunting because we think of the huge, life-changing incidents which are very hard to forgive.",
        "But forgiveness doesn’t have to start there.",
        "<b>We can start stretching our “forgiveness muscles” in a relationship where there’s less resistance.</b>",
        "By practicing forgiveness on these smaller issues, we can learn the tools and build the emotional resilience to tackle the bigger ones."
      ],
      task: [
        "Look back at the list of people you identified yesterday whom you're having trouble forgiving.",
        "<b>Rank each person on a scale of 1-10</b> (1 = easiest to forgive and 10 = hardest to forgive).",
        "For the rest of this program, you may (or may not) choose to focus on the person whom you feel the <b>least</b> resistance to forgiving."
      ],
      examples: []
    },
    4: {
      title: "Forgiving Doesn’t Mean Excusing",
      insight: [
        "Many people believe that forgiving someone means saying that what they did was acceptable.",
        "But that’s not what forgiveness really means. <b>They can be wrong - and we can still forgive.</b>",
        "Forgiveness means <b>choosing to release the resentment from our hearts.</b>",
        "By letting go of our anger, we can lift a heavy weight off ourselves and feel inner peace - even if the other person's actions were truly wrong.",
        "(Source: Rabbi Dr. Abraham J. Twerski’s book entitled “Forgiveness”)"
      ],
      task: [
        "Think of someone who hurt you in the past.",
        "Imagine putting the person in one box, and your feelings of resentment in a separate box.",
        "Say out loud to yourself (or whisper) something like: “Even though what they did may have been wrong, <b>I can choose to let go of my feelings of resentment so that I will feel better.”</b>"
      ],
      examples: []
    },
    5: {
      title: "Benefits of Forgiveness",
      insight: [
        "When we forgive another person, it’s not just about helping them.",
        "<b>Forgiveness is also a gift to ourselves.</b>",
        "Holding onto negativity for a long time can make us feel bitter, broken, and even guilty.",
        "Imagine if you could finally release all of that negativity, and feel inner calm and peace within yourself. <b>How can forgiveness benefit YOU?</b>"
      ],
      task: [
        "If you’re in this program, it means that deep down, you WANT to forgive someone - even if it’s hard. Why?",
        "<b>Write down at least 1 reason why you want (or WISH you would want) to forgive someone who has hurt you.</b>"
      ],
      examples: [
        "How will YOU personally benefit from letting go of the resentment?",
        "How will it help Klal Yisroel?",
        "How will it help the world?"
      ]
    },
    6: {
      title: "Daven for Help",
      insight: [
        "Forgiveness is challenging, but we're not alone.",
        "<b>Hashem understands how hard it is to forgive, and He’s ready to help us.</b>",
        "As Hashem says (Midrash Shir Hashirim): <em>“Open for Me an opening the size of a needle, and I will enlarge it to be an opening [so large that] wagons can enter.”</em>",
        "<b>If we take the first baby steps toward forgiveness, Hashem will help us the rest of the way.</b>"
      ],
      task: [
        "Daven to Hashem to help you forgive.",
        "(Or if necessary, ask Hashem to help you WANT to forgive.)"
      ],
      examples: []
    },
    7: {
      title: "What's Holding You Back?",
      insight: [
        "Rabbi Dr. Abraham J. Twerski explains that there are 3 stages of anger: First, there’s the initial feeling of “anger” when you’re provoked. Second is “rage” - your behavior when you react to that angry feeling.",
        "Finally, there might be <b>“resentment”</b> which means holding onto a grudge long-term.",
        "So let’s try to understand: Why do we sometimes hold onto resentment long-term?",
        "Understanding <b>what we think we’re gaining</b> by holding onto this resentment is the first step toward letting it go."
      ],
      task: [
        "Take a piece of paper and answer 1 of these questions:"
      ],
      examples: [
        "What am I afraid will happen if I would just let go of my anger?",
        "What do I imagine I'm gaining by continuing to hold onto this resentment?"
      ]
    },
    8: {
      title: "People Are Complicated",
      insight: [
        "A helpful step in forgiveness is remembering that people are complicated.",
        "<b>We can’t always see what someone else is dealing with, or why they act the way they do.</b>",
        "Imagine a co-worker who snaps at you often. It feels hurtful, but maybe they’re under a lot of stress caring for a sick family member. They’re doing their best, but it’s hard to always stay calm.",
        "Realizing that <b>everyone has unseen struggles</b> can help us let go of our resentment and be more forgiving."
      ],
      task: [
        "Think of someone whose behavior bothers you.",
        "Take a moment to consider what unseen struggles they might be facing.",
        "<b>Imagine at least one possible reason why they act the way they do.</b>"
      ],
      examples: [
        "My boss always gives harsh feedback and seems overly critical. But maybe he was taught that tough criticism is the only way to push someone to improve. Maybe he is working on being more encouraging, but he isn’t there yet."
      ]
    },
    9: {
      title: "We’re All Imperfect",
      insight: [
        "Nobody is perfect. Otherwise, there would be no purpose in living!",
        "Hashem created us with flaws and bad middos so that we can slowly grow and become better.",
        "<b>Inevitably, we make mistakes along the journey, and sometimes even intentionally do wrong.</b>",
        "We know this about ourselves, but sometimes we expect other people to be perfect. <b>Let’s try to see others as we see ourselves—imperfect, struggling, and trying to get better.</b> (Sometimes we don’t even know how!)"
      ],
      task: [
        "Think about 1 negative middah that you have now, that you wish you could improve.",
        "Now think about the person you’re trying to forgive, and say out loud to yourself:",
        "<b>“This person is a work in progress, just like me.</b> They make mistakes and sometimes even intentionally do wrong, just like me. We are all human and it takes time to become better.”"
      ],
      examples: []
    },
    11: {
      title: "What Are You Waiting For?",
      insight: [
        "Sometimes we have a hard time forgiving because <b>we’re still waiting for something.</b>",
        "Waiting for them to apologize. Waiting for them to change. Waiting for them to pay back what they owe.",
        "Thinking about <b>what exactly we’re waiting for</b> can help us become more self-aware of what’s holding us back from forgiving, and ultimately help us take steps in the right direction."
      ],
      task: [
        "Write down for yourself: <b>Is there anything about this situation that I am still waiting to change?</b>",
        "For each item on your list, write a note to yourself about whether you think it’s likely to happen, or if there is anything practical you can do to help make it happen sooner."
      ],
      examples: [
        "I’m waiting for them to apologize",
        "I’m waiting to get my money back",
        "I’m waiting for them to do teshuva / transform into a nicer person"
      ]
    },
    12: {
      title: "Give Them a Chance",
      insight: [
        "Often, we withhold forgiveness because <b>we’re waiting for the other person to apologize.</b>",
        "But do they know they hurt you? Did you ever tell them?",
        "We have a mitzvah of “Do not hate your brother in your heart.” This means that if we are holding onto resentment, <b>we must tell the person, and give them the opportunity to apologize.</b>",
        "Maybe they’ll apologize, or maybe they won’t. But at least give them the chance. If someone was secretly mad at you, <b>wouldn’t you want the chance to apologize?</b>"
      ],
      task: [
        "If there’s someone who hurt you and hasn’t yet apologized, ask yourself:",
        "<b>Am I able to reach out to them and tell them that I still feel hurt?</b>",
        "Is there any chance they might apologize, if I would do that?",
        "(Note: If the person is truly abusive or unstable, or if you feel the conversation would not be productive for <b>any</b> reason, you might be better off not speaking to them. Discuss the situation with a Rav or mentor.)",
        "<b>For the purpose of today’s challenge, the point is just to conclude for yourself if the answer is “Yes” or “No”:</b>"
      ],
      examples: [
        "YES - There is a chance they might apologize; or",
        "NO - It would not be a good idea to talk to them - I am not waiting for them to apologize"
      ]
    },
    13: {
      title: "Write a Letter",
      insight: [
        "If you could tell someone that they hurt you... what would you say?",
        "It’s hard to speak about our pain because it makes us feel vulnerable. It can also be incredibly awkward.",
        "<b>But if we want to do the right thing, release our pain, and bring Shalom into the world, this is sometimes the only way to move forward.</b>",
        "It’s might be scary, but Hashem wants us to try. Who knows? Maybe they’ll apologize or maybe they wont. <b>But at least you’ll know you tried.</b>"
      ],
      task: [
        "Imagine you were speaking to the person who hurt you. What would you say?",
        "<b>Write a letter of what you WOULD say if you could talk to them.</b>",
        "Try not to accuse them of anything directly - rather, speak about how you experienced the incident and why it was painful for you.",
        "<b>For the sake of today’s challenge, just write a letter of what you WOULD say.</b>",
        "(If you are brave enough - consider actually sending them the letter. You may want someone else to look it over first.)",
        "<b>(Note: Be very careful before telling someone that they hurt you.</b> If they are abusive or unstable, or if you believe the conversation would be unproductive for <b>any</b> reason, it is better not to communicate with them. If you are not sure, discuss it with a Rav or mentor.)"
      ],
      examples: []
    },
    14: {
      title: "Understand Their Perspective",
      insight: [
        "How can we begin to forgive?",
        "Sometimes, it helps to try to understand <b>why</b> the other person acted the way they did.",
        "Even if you don’t find new information, just thinking about their side of the story can help you start to understand them.",
        "We often focus only on our own feelings and forget there’s another side. <b>Trying to see things from their point of view</b> may help us feel less bothered or angry."
      ],
      task: [
        "Think about an incident where someone hurt you.",
        "<b>Now pretend you were in their shoes, and write the story from their perspective.</b>",
        "What might they have been thinking or feeling at that time? What might have motivated their actions?",
        "(Even if you don’t know for sure what happened, thinking about how there MAY have been more to the story might help lessen your anger.)"
      ],
      examples: []
    },
    15: {
      title: "It’s Not About Me",
      insight: [
        "Sometimes, people may snap at you, or look annoyed - <b>but they aren't necessarily reacting to YOU.</b>",
        "Instead, they might be stressed about something else, coming off another difficult conversation, not even aware of their expression or tone of voice, or feeling sick.",
        "We tend to think that if people are in a bad mood, I somehow caused it.",
        "Saying <b>“It’s not always about me”</b> helps us de-personalize, and realize their behavior doesn’t necessarily have anything to do with us."
      ],
      task: [
        "Look over your list of people who you still feel negative toward.",
        "Try to pick at least 1 person on the list and say: <b>“There’s a chance it wasn’t about me.”</b>"
      ],
      examples: []
    },
    16: {
      title: "Emulating Hashem’s Compassion",
      insight: [
        "As the saying goes: “Hurt people hurt people.”",
        "This means that if someone hurt us, they might be struggling with their own issues.",
        "Instead of turning our hurt into anger, we can try to flip our perspective and <b>see this person with compassion.</b>",
        "When we have compassion for other people, it draws down Hashem’s mercy on us.",
        "<b>If we judge others with compassion, Hashem will have compassion on us, too.</b>"
      ],
      task: [
        "Ask Hashem to help you feel compassion toward someone who hurt you or bothered you.",
        "Imagine what they might possibly be struggling with and try to feel at least a bit of compassion for them."
      ],
      examples: []
    },
    18: {
      title: "Seeing the Good",
      insight: [
        "Each of us was created B'Tzelem Elokim, in Hashem's image. A person is inherently good and G-dly.",
        "However, it’s easy to overlook this goodness and focus on the negative traits that haven’t been fully refined yet. Pirkei Avos encourages us to cultivate an “Ayin Tov” (a good eye) which means <b>actively looking for the positive qualities in those around us.</b>",
        "When we can acknowledge the divine spark in everyone, it helps us bring the person's G-dliness into focus."
      ],
      task: [
        "Think about someone who tends to evoke negative feelings in you.",
        "Spend a moment thinking about how this person is a Tzelem Elokim.",
        "<b>Write down 3 positive things about this person.</b>",
        "(If you can, try to find middos that are part of Hashem’s middos, such as being consistent, compassionate, kind, generous...)"
      ],
      examples: []
    },
    19: {
      title: "Accept What You Cannot Change",
      insight: [
        "There’s a famous “Serenity Prayer” which says: <b>“G-d, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.”</b>",
        "If there’s something you can change - do it.",
        "But if someone else’s behavior is out of your control, it helps to accept that <b>I cannot control what other people do.</b>",
        "Of course, we can always daven, and we believe that people can change through teshuva, if they try.",
        "But accepting that the ultimate outcome is up to their own <b>free will</b> - and Hashem - can help us let go and move on."
      ],
      task: [
        "Is there anyone in your life who is causing you frustration because they aren’t changing the way you want?",
        "Take a deep breath and then say out loud: <b>“I realize that this person’s behavior is not in my control. I accept that this is how they are, right now.”</b>",
        "Say it 10x out loud."
      ],
      examples: []
    },
    20: {
      title: "Bring Hashem Into the Picture",
      insight: [
        "Anger stems from the belief that<b> “This shouldn’t have happened.”</b> When someone hurts us, we feel it’s unfair and undeserved.",
        "But with Emunah, we can see it differently. Hashem has a Master Plan, and sometimes He sends us pain, to help us grow. The person who hurt us was just a messenger.",
        "<b>If they wouldn’t have hurt us, Hashem would have sent us the pain another way.</b> Instead of thinking, “This pain shouldn’t have happened,” we can recognize it was meant to happen - Hashem did it for a reason."
      ],
      task: [
        "Think about a time when someone hurt you or bothered you.",
        "Turn to Hashem and say:",
        "<b>“Hashem, I don’t know why I had to experience this pain, but I realize it’s part of Your Master Plan and the pain is coming from You.</b>",
        "<b>“This person was just your messenger. If they wouldn’t have hurt me, the pain would have happened some other way.”</b>",
        "(Optional: Try to imagine 1 other way that Hashem might have sent you that pain.)"
      ],
      examples: [
        "I’m angry at my boss for embarrassing me. But I realize this came from Hashem - for some reason Hashem wanted me to experience this embarrassment. If my boss wouldn’t have embarrassed me, maybe one of my coworkers would have instead."
      ]
    },
    21: {
      title: "You Don’t Need to Be Best Friends",
      insight: [
        "Sometimes, we resist forgiving because we don’t want to have a close relationship with this person.",
        "But that’s okay.",
        "Halacha teaches that while we must show respect to every person, we don’t need to be close with everyone.",
        "<b>It’s fine to keep a respectful distance if it’s healthier for you.</b> We can still treat them (and think about them) with kindness and respect.",
        "We can let go of our resentment, and if necessary, maintain boundaries for our own well-being."
      ],
      task: [
        "Write a paragraph for yourself describing how your ideal relationship with this person would look like, after you’re able to forgive them.",
        "Consider:"
      ],
      examples: [
        "How often do you see them?",
        "How do you react when you see them?",
        "How will you speak when you talk to them?"
      ]
    },
    22: {
      title: "The Power of Giving",
      insight: [
        "It’s famously known that the Hebrew word for love, (Ahavah) comes from the root <b>“Hav” (giving).</b>",
        "We tend to think that first we love someone, and then we give to them. But Chazal teach us it’s the opposite: <b>Giving leads to love.</b>",
        "If we want to develop more love for someone - or even just lessen feelings of anger - we can try giving to them.",
        "Even small acts of kindness can slowly chip away at our negative feelings, and help them fade away."
      ],
      task: [
        "Think of someone you’re having difficulty with.",
        "<b>Do a small act of kindness for them today.</b>",
        "(Or if that’s too hard - at least daven for them.)"
      ],
      examples: [
        "Send them a thoughtful note or card",
        "Offer to help them with something",
        "Send them flowers",
        "Daven for their wellbeing",
        "Say a perek of Tehillim for them"
      ]
    },
    23: {
      title: "Forgiving is a Process",
      insight: [
        "Wouldn’t it be great if we could snap our fingers and suddenly let go of all resentment?",
        "The reality is: <b>Forgiveness is a slow process that requires time and introspection.</b>",
        "Our job is to keep taking baby steps to slowly chip away at the resentment, one bit at a time. Ultimately, we’re trying to reach a place of greater peace and understanding than we had before.",
        "<b>Forgiveness doesn’t happen overnight. It’s a journey. And every step is a victory.</b>"
      ],
      task: [
        "Reflect on what you’ve done to try to forgive someone. Joining this 40-day challenge was an amazing first step!",
        "Next, say out loud: <b>“I really want to forgive this person. I realize it might take time to forgive them wholeheartedly, and this is normal. Please Hashem, help me forgive them wholeheartedly!”</b>"
      ],
      examples: []
    },
    25: {
      title: "Releasing Physical Tension",
      insight: [
        "Holding onto resentment for a long time can sometimes make us feel <b>physically tense.</b>",
        "When we think about people or situations that have upset us, we can <b>notice how our body feels,</b> and see if we can release some of that tension.",
        "By breathing deeply and relaxing our muscles, it can calm our minds and give us the emotional space to understand and forgive."
      ],
      task: [
        "Think of someone you’re trying to forgive. How does your body feel when you think of them?",
        "Take a moment to notice where you’re holding the tension in your body.",
        "<b>Take a deep breath in, and say “I can forgive.”</b>",
        "Next, as you exhale, relax your muscles and <b>imagine the resentment leaving your body.</b>"
      ],
      examples: []
    },
    26: {
      title: "Find Evidence to the Contrary",
      insight: [
        "Sometimes, our anger makes us <b>zero in on 1 small detail,</b> instead of seeing the whole picture.",
        "We might think: “She’s so insensitive!” or “He’s so stingy!” ...<b>but is that a fair assessment?</b>",
        "Let’s take a step back and think if they ALWAYS act that way. Can we remember a time when they acted kindly?",
        "We’re all human and make mistakes. Try to see the person as a <b>mix</b> of qualities, rather than entirely negative."
      ],
      task: [
        "Identify one character trait you’re blaming the person for (“She’s so insensitive, He’s so stingy...”)...",
        "<b>Next, try to think of evidence to the contrary.</b> (Was there a time when they were sensitive/generous?)"
      ],
      examples: []
    },
    27: {
      title: "Clearing Out Emotional Clutter",
      insight: [
        "We hold onto things we believe we’ll need one day, like a pile of old clothes - just in case they might fit again.",
        "It’s the same with anger—we hold onto resentment, thinking we’ll need to use it one day... But what for?",
        "Rabbi Dr. Twerski suggests a powerful way to let go: <b>Commit 100% to the mitzvah of “Do not take revenge.”</b> Promise yourself you’ll never badmouth the other person, give them the silent treatment, or do anything to “punish” them.",
        "<b>When we firmly resolve never to take revenge, our resentment becomes useless - and we can let it go.</b>"
      ],
      task: [
        "Ask yourself: Are you currently doing anything to “take revenge” or “punish” the person who has hurt you?",
        "<b>Now answer this question out loud to yourself:</b> “Do I plan to continue ‘punishing’ them like this in the future?”"
      ],
      examples: [
        "Maybe you’re giving them the silent treatment.",
        "Maybe you’re glaring at them every time you see them.",
        "Maybe you’re speaking badly about them to other people."
      ]
    },
    28: {
      title: "Substitute the Memory",
      insight: [
        "Our thoughts have a powerful effect on how we feel.",
        "After we have forgiven someone, we might still find ourselves a few days later, slipping back and thinking about the anger-triggering incident again.",
        "If this happens, we can try to shift our focus and <b>substitute the anger-triggering thought with a positive mental image instead.</b>",
        "By being prepared with a positive memory or thought, we can break the angry cycle and stop ourselves from ruminating endlessly on our pain."
      ],
      task: [
        "Write down 1 or 2 positive memories or qualities about the person you’re trying to forgive.",
        "Optional: Put the note somewhere where you’ll see it, the next time you find yourself slipping back into old thoughts of anger."
      ],
      examples: []
    },
    29: {
      title: "Can You Forgive SOME?",
      insight: [
        "Rabbi Dr. Abraham J. Twerksi writes that forgiveness is like paying back a debt.",
        "If you owe someone $10,000 and can’t pay it all back today... <b>can you at least pay back part of it?</b>",
        "If you’re trying to forgive and it feels very hard, try asking yourself:",
        "<b>Can I forgive them for at least one small part of what they’ve done?</b>"
      ],
      task: [
        "Think about someone you’re trying to forgive. Are there multiple parts to it? Are there several aspects of the situation that you’re trying to forgive?",
        "Write a list of all the things you’re upset about, and then ask yourself: <b>Can I forgive them for at least one part?</b>",
        "Choose 1 part and say out loud “I can forgive them for this part.”"
      ],
      examples: []
    },
    30: {
      title: "You Are Not the Judge",
      insight: [
        "We often withhold forgiveness because we feel the person was wrong, and <b>must be held accountable for what they did.</b>",
        "(Of course, if someone is truly dangerous, we may need to inform a Rav or authorities to protect other people.)",
        "But in “regular” situations where someone acted insensitively or made a “bad” decision, it helps to remember that <b>Hashem is the Ultimate Judge, and that role is reserved for Him alone.</b>",
        "It’s not our job to prosecute others and hold them accountable.",
        "Letting go of the burden to constantly judge others frees us to <b>focus on what we ARE responsible for</b> - doing mitzvos, improving our middos and becoming closer to Hashem."
      ],
      task: [
        "Think of a time when you judged another Jew - you believed they were wrong and should be held accountable for their actions.",
        "Say out loud: <b>“It’s not my job to judge this person.</b> Only Hashem knows each person’s inner thoughts and struggles. Only Hashem can truly judge each person and hold them accountable for what they do.”",
        "(Of course, if someone is truly dangerous or harming other people, we may need to inform a Rav or authorities to protect others from harm. Today’s challenge refers to “regular” situations of insensitivity between individuals.)"
      ],
      examples: []
    },
    33: {
      title: "Apologize to THEM",
      insight: [
        "When we’re in a strained relationship, it’s easy to focus on what <b>the other person</b> did wrong.",
        "But is it possible that <b>we</b> had a tiny part in the conflict? Is there a chance they’re waiting for <b>us</b> to apologize?",
        "Even if we feel like what the other person did was worse, it’s very brave and admirable if we can be the one to <b>take the first step toward peace.</b>",
        "Let’s be like Aharon HaKohein, who loved peace and always worked tirelessly to bring people back together."
      ],
      task: [
        "Think about someone you’re upset with. Is there anything THEY might be upset about? Is it possible they are waiting for <em>you</em> to apologize for any piece of the situation?",
        "<b>Today, take the first step toward making Shalom by apologizing to them, even for something small.</b>",
        "(If you find it too hard to apologize, at least write what you WOULD say if you would apologize.)",
        "(If there’s definitely nothing for you to apologize for, or you feel it would be unhealthy to communicate with this person, you can skip this challenge.)",
        "(Alternatively, you can apologize to someone else you might have hurt - even if it isn’t someone you’re trying to forgive.)"
      ],
      examples: []
    },
    34: {
      title: "Letting Go Shows You’re Strong",
      insight: [
        "Often, we are resistant to forgiving because we see “giving in” as a weakness. Some might even feel like it's an act of surrender.",
        "<b>But the truth is - If we keep holding onto resentment, we are letting the resentment keep us captive!</b>",
        "Forgiving someone is a powerful act that requires inner strength and courage.",
        "True strength lies in the ability to rise above our emotions and offer forgiveness. By letting go and choosing peace - we move from victim to victor."
      ],
      task: [
        "Take a deep breath and say out loud to yourself: “Letting go of this resentment doesn’t mean I’m weak. It means I’m strong.”"
      ],
      examples: []
    },
    35: {
      title: "Klal Yisrael Needs YOU!",
      insight: [
        "Forgiveness isn’t just about you—it’s so important for the protection of the entire Jewish nation.",
        "<b>Chazal teach that if we refuse to forgive another Jew, it can bring down harsh judgment from Shamayim</b>.",
        "With all the suffering Klal Yisrael is facing—terror, pain, and illness—can we give the gift of forgiveness to help ease the burden on our brothers and sisters?",
        "<b>Imagine the harsh decrees that could be torn up if we could all let go and forgive!</b>",
        "Klal Yisrael needs YOU!"
      ],
      task: [
        "Forgiveness is so essential that Chazal require us to say a special tefillah (beginning “Ribbono Shel Olam...”) before saying Shema at night.",
        "In this tefillah, we declare that we are forgiving anyone who may have wronged us.",
        "<b>Today, read the English translation of this “Ribbono Shel Olam” tefillah.</b>",
        "If you don’t already say this every night, put a reminder by your bed to say it.",
        "Download a printable Ribbono Shel Olam poster at <a href=\"https://40forgive.com/tefillah\" target=\"_blank\" rel=\"noopener\">40forgive.com/tefillah</a>"
      ],
      examples: []
    },
    36: {
      title: "Forgiveness Is a Behavior, Not a Feeling",
      insight: [
        "Why do you want to forgive?",
        "Often, we want to forgive because we want to feel better. We want <b>emotional relief</b> from our pain, guilt, sadness, anger, or disappointment.",
        "In order to forgive, we must remember that our thoughts directly impact our feelings. <b>We can change how we feel by changing our thought patterns.</b>",
        "Forgiveness means that when you remember the pain or insult, you take responsibility for your own thoughts and <b>choose not to ruminate on them unproductively.</b>"
      ],
      task: [
        "Picture someone you’re trying to forgive. Notice how you feel about them, or what thoughts come up in your mind.",
        "Now, consider how you would <b>ideally</b> like to think about them.",
        "<b>Write one sentence or “mantra” you can use to guide your mind toward more positive thoughts, the next time you think of them.</b>",
        "How will you choose to think about this person, the next time a negative thought arises?"
      ],
      examples: [
        "“I can’t change the past, but I can choose to move forward into a brighter future.”",
        "“I am choosing to let go, so that I will feel better and lighter.”",
        "“What they did was not about me. They were struggling with their own pain.”"
      ]
    },
    37: {
      title: "Hashem’s Unbelievable Forgiveness",
      insight: [
        "Imagine giving someone a precious gift, and they throw it back in your face. <b>Forgiving them would be really hard, right?</b>",
        "Yet, that’s what we do all the time to Hashem. He gives us life, brains, incredible bodies, and the power of speech... yet we sometimes use those gifts to sin against Him.",
        "<b>Still, when we do teshuva, Hashem forgives us completely.</b>",
        "If Hashem can show such incredible compassion and patience, forgiving us no matter how many times we fail, <b>we can be inspired to do the same.</b>",
        "Let’s try to let go of grudges, forgive, and emulate Hashem’s incredible mercy and understanding."
      ],
      task: [
        "Think about 3 things you’ve done wrong in the past, and you’re trying to change.",
        "Then say: “Thank you Hashem, for forgiving me and having patience for me as I’m trying to grow.”"
      ],
      examples: []
    },
    39: {
      title: "Say it Out Loud",
      insight: [
        "Feeling forgiveness in your heart is a huge step, but there's another crucial part — <b>expressing it out loud.</b>",
        "Chazal say that even though Yosef made peace with his 10 brothers for selling him, <b>he never actually said, “I forgive you.”</b>",
        "Because he never said it out loud, the souls of the 10 Shevatim had to return later as the “Asara Harugei Malchus” (the Ten Martyrs who suffered terribly during Roman times).",
        "These 10 men were a Gilgul of the 10 Shevatim. They had to be killed as a kapparah (atonement) because <b>Yosef never VERBALLY forgave them</b> many years ago.",
        "Your words have power - don’t just feel it, say it."
      ],
      task: [
        "Think about a person you’re trying to forgive.",
        "<b>Say out loud: “I wholeheartedly forgive __(person’s name)__ for doing ______.”</b>",
        "If you don’t feel like you can wholeheartedly forgive them yet, at least say: “I want to forgive this person, and I am trying to forgive. Please, Hashem, help me forgive them wholeheartedly.”"
      ],
      examples: []
    }
  };


  var RAFFLE_BASE = "https://raffle.40forgive.com/claim.html?challenge=day-";

  // ---- Date helpers ----------------------------------------------------------
  function easternToday() {
    var override = new URLSearchParams(location.search).get("date");
    if (override) return override;
    // en-CA renders as YYYY-MM-DD; timeZone pins it to Eastern for every visitor.
    return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date());
  }
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }
  function prettyDate(iso) {
    var p = iso.split("-");
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
    return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" });
  }
  function dayLabel(days) {
    return days.length > 1 ? "Days " + days[0] + "–" + days[days.length - 1] : "Day " + days[0];
  }
  function esc(s) { return s; } // content is authored trusted HTML

  // ---- Rendering -------------------------------------------------------------
  function cardHTML(entry) {
    var ticket = entry.days[0]; // raffle challenge_id = day-<first day number>
    var c = CONTENT[ticket];
    var anchor = "day-" + ticket;

    if (!c) {
      return '' +
        '<article class="ch-card" id="' + anchor + '">' +
          '<div class="ch-meta">' +
            '<span class="ch-badge">' + dayLabel(entry.days) + '</span>' +
            '<span class="ch-date">' + prettyDate(entry.release) + '</span>' +
          '</div>' +
          '<h3 class="ch-title">Challenge coming soon</h3>' +
          '<div class="ch-text"><p><em>Check back soon for this challenge.</em></p></div>' +
        '</article>';
    }

    var insight = c.insight.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    var task = c.task.map(function (p) { return '<p class="ch-task">' + p + "</p>"; }).join("");
    var hasExamples = c.examples && c.examples.length > 0;
    var examplesBlock = "";
    if (hasExamples) {
      var exampleItems = c.examples.map(function (ex) { return "<li>" + ex + "</li>"; }).join("");
      examplesBlock =
        '<p class="ch-ex-label">For example:</p>' +
        '<ul class="ch-examples">' + exampleItems + '</ul>';
    }

    return '' +
      '<article class="ch-card" id="' + anchor + '">' +
        '<div class="ch-meta">' +
          '<span class="ch-badge">' + dayLabel(entry.days) + '</span>' +
          '<span class="ch-date">' + prettyDate(entry.release) + '</span>' +
        '</div>' +
        '<h3 class="ch-title">' + esc(c.title) + '</h3>' +
        '<div class="ch-text">' + insight + '</div>' +
        '<div class="ch-task-box">' +
          '<p class="ch-task-label">Your Challenge for Today</p>' +
          task +
          examplesBlock +
        '</div>' +
        '<p class="ch-complete-q">Did you complete this challenge?</p>' +
        '<a class="btn btn-orange ch-btn" href="' + RAFFLE_BASE + pad2(ticket) + '">' +
          'Get your raffle ticket →' +
        '</a>' +
      '</article>';
  }

  function prelaunchHTML(firstEntry) {
    return '<p class="ch-prelaunch">This program begins on Rosh Chodesh Elul (' + prettyDate(firstEntry.release) + '). Check back then to see the first challenge!</p>';
  }

  function navHTML(prevEntry, nextEntry) {
    var prevLabel = prevEntry ? "← Previous: " + dayLabel(prevEntry.days) : "← Previous";
    var nextLabel = nextEntry ? "Next: " + dayLabel(nextEntry.days) + " →" : "Next →";
    return '' +
      '<div class="ch-nav">' +
        '<button class="btn btn-ghost ch-nav-btn" id="ch-prev"' + (prevEntry ? "" : " disabled") + '>' + prevLabel + '</button>' +
        '<button class="btn btn-ghost ch-nav-btn" id="ch-next"' + (nextEntry ? "" : " disabled") + '>' + nextLabel + '</button>' +
      '</div>';
  }

  // ---- Build the page --------------------------------------------------------
  // One challenge is shown at a time; Previous/Next page chronologically
  // through everything released so far. `chronological` is oldest-first.
  var chronological = [];
  var currentIndex = 0;

  function renderCurrent() {
    var entry = chronological[currentIndex];
    var prevEntry = currentIndex > 0 ? chronological[currentIndex - 1] : null;
    var nextEntry = currentIndex < chronological.length - 1 ? chronological[currentIndex + 1] : null;
    document.getElementById("ch-list").innerHTML =
      cardHTML(entry) + navHTML(prevEntry, nextEntry);

    document.getElementById("ch-prev").addEventListener("click", function () { goTo(currentIndex - 1); });
    document.getElementById("ch-next").addEventListener("click", function () { goTo(currentIndex + 1); });

    var url = new URL(location.href);
    url.searchParams.set("day", pad2(entry.days[0]));
    history.replaceState(null, "", url);
  }

  function goTo(index) {
    if (index < 0 || index >= chronological.length) return;
    currentIndex = index;
    renderCurrent();
    document.getElementById("ch-list").scrollIntoView({ block: "start" });
  }

  function render() {
    var today = easternToday();

    // A /challenges/NN link (rewritten to ?day=NN) pins the page to how it
    // looked on that day — later challenges stay hidden, even if more have
    // been released by the time someone opens the link.
    var dayParam = new URLSearchParams(location.search).get("day");
    var cutoff = today;
    if (dayParam) {
      var dayNum = parseInt(dayParam, 10);
      var linkedEntry = SCHEDULE.filter(function (e) { return e.days[0] === dayNum; })[0];
      if (linkedEntry && linkedEntry.release < cutoff) cutoff = linkedEntry.release;
    }

    var released = SCHEDULE.filter(function (e) { return e.release <= cutoff; });
    var upcoming = SCHEDULE.filter(function (e) { return e.release > cutoff; });
    var next = upcoming[0];

    if (released.length === 0) {
      // Before the program starts.
      document.getElementById("ch-list").innerHTML = next ? prelaunchHTML(next) : "";
      return;
    }

    chronological = released;
    currentIndex = chronological.length - 1; // newest (or the pinned day)
    renderCurrent();
  }

  render();
})();
