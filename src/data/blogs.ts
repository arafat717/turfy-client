export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
};

const articles = [
  {
    title: "How to Choose the Perfect Turf for Your Next Match",
    category: "Pitch Guide",
    excerpt:
      "From surface quality to lighting, these are the details that make a big difference when you book your next game.",
    content: [
      "The right pitch can turn a casual kickabout into a match everyone remembers. Before you book, think about the size of your group, the kind of game you want to play, and how much space your team needs.",
      "Take a look at the turf surface and ask how it is maintained. A clean, even playing area helps the ball move consistently and gives players confidence when changing direction. Good lighting, secure changing areas, and easy access are worth checking too.",
      "Finally, choose a time that works for your whole team and book early for popular evening slots. A little planning means less time organizing and more time on the pitch.",
    ],
  },
  {
    title: "Five Warm-Up Drills to Get Your Team Match Ready",
    category: "Training",
    excerpt:
      "A focused warm-up helps your team find its rhythm before kickoff. Try these simple drills at your next session.",
    content: [
      "A good warm-up starts gradually and gets every player moving. Begin with a few minutes of light jogging, dynamic stretches, and easy changes of direction before you bring a ball into the session.",
      "Build up with short passing pairs, a moving rondo, and quick reaction races over a few metres. Keep each activity brief so players stay engaged and get plenty of touches.",
      "Finish with a small-sided possession game. It raises the tempo, sharpens decision-making, and gives your team a chance to communicate before the match begins.",
    ],
  },
  {
    title: "Why Small-Sided Football Builds Better Teamwork",
    category: "Team Play",
    excerpt:
      "More touches, more movement, and more communication: discover what makes small-sided games so rewarding.",
    content: [
      "With fewer players on the pitch, everyone has more chances to get involved. Players need to scan, make decisions, and find useful space rather than waiting for the game to come to them.",
      "Small-sided matches also encourage quick communication. A clear call or a well-timed run can open up the game, helping teammates build trust with every sequence.",
      "Keep teams balanced and rotate positions from time to time. It is a fun way to improve awareness while making sure everyone gets to contribute.",
    ],
  },
  {
    title: "The Complete Checklist for Organizing a Five-a-Side Game",
    category: "Game Day",
    excerpt:
      "Get your group together, secure a pitch, and make game day easy with this quick organizer’s checklist.",
    content: [
      "Start with the essentials: settle on a date, confirm how many players are coming, and pick a venue that is easy for everyone to reach. Sharing the details in one group chat keeps plans clear.",
      "Book the pitch as soon as your team agrees on a time. Check the booking duration, arrival instructions, and what equipment is available at the venue.",
      "On the day, arrive early enough to get changed and warm up. Bring water, split teams fairly, and agree on a few simple rules before the first kick.",
    ],
  },
  {
    title: "How to Improve Your First Touch in Just 15 Minutes",
    category: "Training",
    excerpt:
      "A short, consistent ball-control routine can help you feel more comfortable in tight spaces.",
    content: [
      "You do not need a full training session to work on your first touch. Find a safe open space and begin with gentle passes against a wall, controlling the return with both feet.",
      "Vary the direction of your touch. Guide the ball left, right, and slightly forward so your next action is already set up. Keep your head up between passes and try to use different surfaces of each foot.",
      "End with a few minutes of alternating one-touch and two-touch passes. Practicing regularly, even in short bursts, helps make control feel more natural during a game.",
    ],
  },
  {
    title: "Making Your Weekly Football Game a Lasting Habit",
    category: "Community",
    excerpt:
      "A regular game is easier to keep when it fits your schedule and your whole team is in the loop.",
    content: [
      "The easiest way to make football a habit is to give it a regular place in your week. Choose a day and time that most players can protect, then keep the plan consistent.",
      "Make organizing simple by sharing availability early and confirming the pitch before the week gets busy. A reliable routine makes it easier for new players to join as well.",
      "Most importantly, keep the game welcoming. Mix up teams, celebrate good play, and make sure the fun stays at the heart of the session.",
    ],
  },
  {
    title: "What to Look for in a Great Five-a-Side Pitch",
    category: "Pitch Guide",
    excerpt:
      "A closer look at the surface, facilities, and small comforts that make a venue feel right.",
    content: [
      "A great five-a-side venue starts with a pitch that feels well cared for. Look for an even surface, clear markings, and enough room around the playing area for a comfortable match.",
      "The facilities matter too. Changing space, toilets, drinking water, and helpful staff can make the whole visit smoother, especially when you are bringing a larger group.",
      "If you play after work, check the quality of the lighting and how easy it is to get to the venue. The best pitch is one your team is happy to return to.",
    ],
  },
  {
    title: "Simple Ways to Build Stamina for Your Next Match",
    category: "Fitness",
    excerpt:
      "Feel fresher late in the game with steady training, good recovery, and a few smart habits.",
    content: [
      "Match fitness comes from building up gradually. Add a couple of short sessions to your week, mixing easy aerobic movement with brief intervals that reflect the stop-start pace of football.",
      "Give yourself time to recover between harder efforts. Sleep, hydration, and a relaxed cool-down all help you feel ready for the next session.",
      "Keep your goals realistic and pay attention to how your body feels. Consistency is more useful than trying to do too much in one week.",
    ],
  },
  {
    title: "How Captains Can Keep a Team Organized",
    category: "Team Play",
    excerpt:
      "A few clear habits can make it easier to get everyone to the pitch and ready to play.",
    content: [
      "Team organization does not need to be complicated. Share the time, venue, and cost as soon as the booking is confirmed, and give players an easy way to say whether they can make it.",
      "Set a simple arrival time so there is room to get changed and warm up. If plans change, let the group know promptly and keep a short list of substitutes.",
      "On the pitch, encourage everyone to communicate and rotate fairly. A captain helps the team stay connected, not just during the match but before and after it too.",
    ],
  },
  {
    title: "The Best Post-Match Recovery Habits for Players",
    category: "Fitness",
    excerpt:
      "Help your body reset after a match with a calm cool-down and a few easy recovery essentials.",
    content: [
      "When the final whistle goes, take a few minutes to walk, breathe, and bring your heart rate down. Gentle movement is a comfortable way to transition out of a hard game.",
      "Drink water and have a balanced meal when you can. A light stretch may feel good, but keep it comfortable and avoid forcing movements when you are tired.",
      "Make recovery part of your routine rather than an afterthought. Rest and a good night's sleep can help you come back feeling ready for your next match.",
    ],
  },
  {
    title: "Choosing the Right Boots for Artificial Turf",
    category: "Gear",
    excerpt:
      "Understand the basics of turf footwear and find a pair that feels secure and comfortable.",
    content: [
      "Artificial turf is different from natural grass, so it is worth checking which footwear your venue recommends. Turf shoes are designed with many small studs that help provide grip on synthetic surfaces.",
      "Comfort and fit are just as important as the sole. Try boots on with your match socks, make sure your toes have room, and check that your heel feels secure when you move.",
      "If you are unsure, ask the venue or a specialist retailer for guidance. The right pair should feel supportive without distracting you from the game.",
    ],
  },
  {
    title: "Creating a Welcoming Football Team for Everyone",
    category: "Community",
    excerpt:
      "Small choices can help new players feel at home from their very first game.",
    content: [
      "A welcoming team starts with a friendly introduction. Let new players know where to meet, what to bring, and what kind of game to expect before they arrive.",
      "During the match, make space for everyone to get involved. Share the ball, rotate positions, and offer encouragement rather than criticism.",
      "After the game, invite players back and ask what would make the next session even better. A positive atmosphere is something the whole team can build together.",
    ],
  },
  {
    title: "How to Make the Most of Your Pitch Booking",
    category: "Game Day",
    excerpt:
      "A few minutes of planning helps your team use every minute of its booked pitch time.",
    content: [
      "Before the booking, confirm your player count and agree on teams so you can start promptly. Share directions and arrival details with everyone in advance.",
      "Bring the essentials, including water and suitable footwear. If the venue provides balls or bibs, check whether you need to collect them before your slot begins.",
      "Use the first few minutes to warm up and finish on time so the next group can get started. A smooth session is better for your team and the venue.",
    ],
  },
  {
    title: "Passing Patterns Every Five-a-Side Team Can Practice",
    category: "Training",
    excerpt:
      "Use simple movement and passing exercises to help your team keep the ball under pressure.",
    content: [
      "Passing patterns work best when players focus on timing as much as accuracy. Start with a simple triangle and encourage the passer to move into a new space after releasing the ball.",
      "Add a defender or limit touches once the group is comfortable. This gives players a reason to scan early and choose their next pass before the ball arrives.",
      "Keep the exercise lively and rotate positions often. The goal is to build confidence and connection, not to memorize a complicated routine.",
    ],
  },
  {
    title: "Staying Hydrated Before, During, and After Football",
    category: "Fitness",
    excerpt:
      "Make hydration part of your match routine so you can focus on enjoying the game.",
    content: [
      "Start your session well hydrated instead of trying to catch up once you reach the pitch. Keep water with you and take small drinks during breaks.",
      "How much you need depends on the weather, the length of the match, and your own body. In hot conditions, plan extra breaks and follow any guidance from your coach or health professional.",
      "After the match, continue drinking and have a meal or snack as part of your normal recovery. If you feel unwell, stop playing and seek appropriate help.",
    ],
  },
  {
    title: "Five Ways to Make Your Team's Attack More Creative",
    category: "Team Play",
    excerpt:
      "Use width, movement, and quick combinations to create more options in the final third.",
    content: [
      "Creative attacking play often begins with good spacing. Give the player on the ball more than one passing option by moving into different lanes rather than crowding around them.",
      "Try quick give-and-go passes and runs that pull defenders away from the ball. Even a small change of pace can create room for a teammate.",
      "Stay patient and keep communicating. A team that moves together can create chances without relying on one player to do everything.",
    ],
  },
  {
    title: "A Beginner's Guide to Your First Five-a-Side Match",
    category: "Pitch Guide",
    excerpt:
      "New to small-sided football? Here is what to bring and what to expect at your first game.",
    content: [
      "Your first five-a-side match is a chance to have fun and meet the team. Ask the organizer where to meet and whether the venue has any specific rules about shoes or equipment.",
      "Bring comfortable sportswear, water, and footwear that is suitable for the pitch. Arrive a little early so you have time to settle in and join the warm-up.",
      "Keep things simple when you play: look for a pass, keep moving, and talk to your teammates. Everyone is learning, and being supportive makes the game better for all.",
    ],
  },
  {
    title: "Why Regular Football Is Great for Your Wellbeing",
    category: "Community",
    excerpt:
      "A weekly match can be a fun way to move more, connect with friends, and take a break from routine.",
    content: [
      "Playing football brings movement and social connection together. A regular session gives you a reason to get active and spend time with people who share your enthusiasm for the game.",
      "The benefits are not about winning every match. Enjoying the process, learning a new skill, and celebrating a good team moment can all make a session feel worthwhile.",
      "Choose a pace that suits you and take breaks when you need them. If you have health concerns, check with a qualified professional before changing your activity routine.",
    ],
  },
  {
    title: "Getting More from Your Goalkeeper in Small-Sided Games",
    category: "Training",
    excerpt:
      "Help your keeper feel involved with clear communication and smart options when playing out.",
    content: [
      "In small-sided football, the goalkeeper can be an important passing option. Encourage defenders to create clear angles and give the keeper time to choose a safe pass.",
      "Agree on a few simple calls as a team so everyone knows when to open up or track back. Clear communication can help players stay composed under pressure.",
      "Include the goalkeeper in passing drills and rotate roles when appropriate. It helps the whole team understand how to support play from the back.",
    ],
  },
  {
    title: "Planning a Friendly Tournament for Your Community",
    category: "Game Day",
    excerpt:
      "Bring local players together with a simple format, clear schedule, and a welcoming atmosphere.",
    content: [
      "Start with a realistic number of teams and a format that fits your available pitch time. Share the schedule, rules, and registration details early so everyone knows what to expect.",
      "Plan breaks between games and make sure players know where to find water and facilities. Having a point person for questions makes the day easier to manage.",
      "Keep the focus on community and enjoyment. Fair play, friendly teams, and a smooth schedule are what people will remember after the final match.",
    ],
  },
  {
    title: "How to Defend as a Team on a Compact Pitch",
    category: "Team Play",
    excerpt:
      "Stay connected, protect the middle, and work together to make it harder for opponents to find space.",
    content: [
      "Good defending starts with the team staying compact. When one player pressures the ball, teammates can cover nearby options and avoid leaving large gaps.",
      "Use clear calls to coordinate who steps forward and who protects the space behind. A quick response is easier when everyone understands the plan.",
      "Once possession is won, look for a calm first pass. Turning a defensive stop into controlled possession gives your team a chance to reset and build an attack.",
    ],
  },
  {
    title: "Keeping Your Football Kit Ready for Every Session",
    category: "Gear",
    excerpt:
      "A simple kit routine means you can arrive at the pitch prepared and ready to play.",
    content: [
      "Keep your regular match essentials together: footwear, socks, comfortable clothes, and a water bottle. A small checklist can help you avoid leaving something behind.",
      "After each session, let your kit dry and clean it according to the care instructions. Check your boots for wear so you can replace them before they become uncomfortable.",
      "Pack ahead of your next game rather than rushing at the last moment. It is a small habit that makes game day feel much easier.",
    ],
  },
  {
    title: "Making Your Next Team Social a Match to Remember",
    category: "Community",
    excerpt:
      "Turn your regular booking into a fun team occasion with a few easy ideas everyone can enjoy.",
    content: [
      "A team social can be as simple as trying a new venue or mixing up the teams for a friendly challenge. Ask everyone what kind of session they would enjoy.",
      "Make sure the plan works for different experience levels. Short games, rotating teams, and relaxed rules can help keep the event inclusive.",
      "Take a moment to celebrate the best plays and funniest moments. The memories your team makes together are part of what keeps people coming back.",
    ],
  },
  {
    title: "Setting Personal Goals for a More Enjoyable Season",
    category: "Fitness",
    excerpt:
      "Choose practical goals that help you enjoy football and notice your progress over time.",
    content: [
      "Personal goals can be about more than scoring. You might aim to attend regularly, communicate more, or try a new position during the season.",
      "Keep goals specific and realistic so you can see when you are making progress. Review them every few weeks and adjust if your schedule or priorities change.",
      "Celebrate small improvements along the way. Football is more rewarding when you recognize the progress you make as an individual and as a team.",
    ],
  },
];

const images = [
  "/images/turf1.jpg",
  "/images/stadium.jpg",
  "/images/rgp.jpg",
  "/images/video-bg.jpg",
  "/images/offer-img-1.png",
  "/images/lip.jpg",
];

const authors = [
  "Turfy Team",
  "Alex Morgan",
  "Jordan Lee",
  "Sam Taylor",
];

export const blogPosts: BlogPost[] = articles.map((article, index) => ({
  ...article,
  id: `turfy-guide-${String(index + 1).padStart(2, "0")}`,
  date: new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2026, 0, 26 - index * 4))),
  author: authors[index % authors.length],
  readTime: `${4 + (index % 4)} min read`,
  image: images[index % images.length],
}));

export const getBlogPost = (id: string) =>
  blogPosts.find((post) => post.id === id);
