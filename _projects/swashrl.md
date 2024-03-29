---
layout: project
title: SwashRL
spoof_url: /projects/
thumbnail: /images/thumbnails/swashrl.png
preview: /images/swashrl/screenshot.png
version: 0.035
license: BSD 3-clause
license_link: https://github.com/swashdev/SwashRL/blob/802f68850588ccc4e9bae45141b2315988507ffe/LICENSE.txt
downloads: https://github.com/swashdev/SwashRL/releases
github: SwashRL
website: https://swash.link/
language: D
tags: Roguelike RPG procedural_generation combat
update: 2021-04-13
systems: Linux
---

SwashRL represents my longest-running project by far.  It started out in 2015
as a simple programming exercise back when I was first learning how to use
Linux and ballooned up into a combat-focused Roguelike written entirely from
scratch.  Although the game still has not reached a release state, it's easily
one of my most ambitious projects, featuring an inventory system, simulated
dice rolls, basic combat mechanics, a map generator, and many other features
that helped me learn a lot about project management and game design.

Over the years I've documented my work on SwashRL in detail, and a page has
been dedicated to preserving this history on [the website][Swash History].

[Swash History]: https://swash.link/history/

* [Design](#design)
  * [What is a Roguelike?](#what-is-a-roguelike)
  * [SwashRL](#swashrl)
* [Challenges](#challenges)
  * [What I've Learned](#what-ive-learned)
* [History](#history)
  * [What SwashRL Means to Me](#what-swashrl-means-to-me)

Design
------

Like most [traditional Roguelikes][Roguelike], SwashRL uses text for the main
display, with an `@` representing the player character, `.` and `#`
representing floors and walls, and letters representing NPCs or monsters.

[Roguelike]: https://en.wikipedia.org/wiki/Roguelike

Roguelikes are often designed this way because it allows the game to include
a lot of on-screen objects without having to display them visually, which
would otherwise take up valuable time with designing and drawing art assets.
This is important because Roguelikes are typically solo endeavors undertaken
by programmers, much like SwashRL.

Something that motivated me to make SwashRL was frustration at a lack of focus
in RPGs that were coming out from the mid-2000s to 2010s.  While there were a
lot of Western RPGs that supported a number of gameplay styles, none of them
were exceptional in a single core game mechanic.  I wanted SwashRL to focus
very strongly on combat, especially swordplay, because there's a lot about
sword combat that could make for an interesting game mechanic that most RPGs
simply abstract out.

Before I get into that, however, I need to explain Roguelikes, because they're
a fairly niche genre of video games.

### What is a Roguelike?

A typical Roguelike will have a core gameplay loop similar to an RPG, largely
focused on maintaining your character and making them stronger by researching
skills and gaining new items or abilities which assist a play style to which
the character is specialized.

Roguelikes consist of [randomly generated][procgen] levels, typically made up
of rooms connected by corridors, which the player must explore in order to
find items to help them on their quest and do battle with dangerous opponents.

[procgen]: https://en.wikipedia.org/wiki/Procedural_generation

In most Roguelikes, an important gameplay mechanic revolves around identifying
items, which will typically be described to the player with random names like
"red spellbook" or "fizzy potion" so that they'll appear different in
different playthroughs.  The goal of this is to force the player to
identify the item before they can know for sure if it will be helpful or
detrimental for their character, meaning the player has to analyze their
predictament carefully before taking any risks.

Gameplay in a typical Roguelike is straightforward on the surface level but on
close examination will require the player to take advantage of items and
abilities that they've gained along the way, such as weapons, magic spells,
cybernetic augmentations, mutations, _&c_.  Roguelikes are usually very
difficult to complete, because many gameplay elements such as the ones I just
named influence every decision you make, and [permanent failure][permadeath]
means that the consequences of each decision are irreversible.

[permadeath]: https://en.wikipedia.org/wiki/Permadeath

### SwashRL

Although most of these features have not yet been implemented in SwashRL, a
core decision I made early on was to focus largely on sword combat, and a big
part of that was that I needed to find a way to make sword combat on its own a
deep and influential part of the game.  When combat is fully implemented, an
important aspect of it will include learning and combining _moves_ or
_techniques_ that the character will use while fighting enemies, requiring the
player to decide which specific maneuver will most benefit them in their
current situation.

For example, a lunge might help the player to reach an enemy that's staying
stubbornly out-of-reach, or a parry could help the player deflect an attack
from an enemy that's staying on the offensive.  On the other hand, a
[half-sword][half-sword] maneuver might help them to more accurately target an
enemy's weak spot to compensate for an opponent that's heavily armored, or a
[murder stroke][murder stroke] could daze an enemy with a heavy blunted
attack.  Enemies such as bandits, soldiers, wizards, and monsters will all
behave in different ways, requiring the player to think on their feet in order
to survive.

[half-sword]: https://en.wikipedia.org/wiki/Half-sword
[murder stroke]: https://en.wikipedia.org/wiki/Mordhau_(weaponry)

I'm still pondering over the various ways in which these mechanics can be
influenced by the player's decisions, but I want to eventually implement
player classes, or _roles_, which will mix up the basic gameplay formula by
giving the player character different strengths.  For example, a Swashbuckler
is mainly concerned with martial prowess and technical skill, but a Burglar
focuses more on stealthy movement and maneuverability, while a Knight can rely
on armor and advanced weaponry but must keep this equipment maintained and
well-honed.

Challenges
----------

The complexity of working on a [Roguelike][Roguelike] means that SwashRL has
been my most challenging project, bar none.  Further complicating matters is
that I opted to write the game entirely from scratch, using only limited
third-party assets to help with elements such as field-of-vision which I had
trouble implementing myself.

SwashRL was the first and so far only game I wrote for [curses][curses], a
programming library which enables text-based user interfaces on a computer
terminal.  A big reason for using this library is that a text-based interface
allows a project like this to include a lot of game objects without having to
draw visual assets, which would otherwise consume a lot of time.

[curses]: https://en.wikipedia.org/wiki/Curses_(programming_library)

However, when supporting multiple operating systems became a priority, I opted
to translate this display into [SDL][SDL], which already supports multiple
operating systems, allowing me to simulate a computer terminal in a graphical
window.  In its current form the game can run either in the terminal or in its
own window which it draws itself, depending on the user's preference.

[SDL]: https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer

These basic issues, combined with the difficulty of deciding on how to best
manage game mechanics like the inventory system, combat, random map
generation, and monster AI, are a big part of why SwashRL has not yet reached
an official release state.

### What I've Learned

One of the most important lessons I learned from SwashRL is that building a
game requires a very solid foundation.  Learning how to build an intuitive
user interface in a text-based display was very difficult, but it was
necessary in order to make any of the planned gameplay elements work, from
moving around on the map to managing the player's equipment.

Part of the reason SwashRL has taken so long to produce is that its novel core
focus requires me to think about Roguelike design in-depth and consider very
carefully which elements to adopt from games which came before and which to
replace or improve upon.  Roguelikes have existed since the 1970s and have
maintained a consistent cult following ever since, with many very smart people
modifying and examining them in detail, and that's a lot of pressure for a
first-timer to deal with.

Ever since SwashRL, I've opted not to build games from scratch anymore,
because the challenges that come with taking on things like display and user
input take time and effort away from focusing on core gameplay programming and
design, so in more recent projects I've taken advantage of existing engines
like Godot.

Nevertheless, I'm glad I opted to write SwashRL's display and input code all
on my own, because it means I have a lot of control over how the game behaves
that I wouldn't have otherwise.  More importantly, I've gained an appreciation
for the challenges that come with programming a complex project like a video
game, and discussing challenges like these with my friends has taught me a lot
about communication and working on a team.

In brief, my shortcomings while writing SwashRL have made me a better
programmer by immersing myself in every element of a game's design, and
forcing myself to learn how to write code in a structured and organized
fashion.

History
-------

The name SwashRL is derived from the word "swash," meaning "to swagger with a
drawn sword."  You'll know swash as one half of the word
"[swashbuckler][swash def]."

I named it this way because I was frustrated with RPGs like The Elder Scrolls
suffering from a lack of focus, emblematic of a trend in the games industry of
supporting a number of play styles but not excelling at any one core mechanic.
I wanted Swash to focus very strongly on sword combat because there's a lot of
interesting mechanics to be found in swordplay.  SwashRL was meant to be a
prototype of this concept, though due to other obligations it hasn't gotten
far enough to fully explore it.

[swash def]: https://en.wikipedia.org/wiki/Swashbuckler#Etymology

Another reason I chose the name SwashRL was that I wanted to pay homage to a
classic Roguelike named [Hack][Hack], which evolved into [NetHack][NetHack],
which then birthed a spin-off called [SLASH][SLASH'EM], now better-known as
SLASH'EM.  I felt that the name "Swash" would fit in rather nicely alongside
Hack and SLASH, and represent a clear intent to make a game that would earn
its place in its chosen niche.

[Hack]: https://nethackwiki.com/wiki/Jay_Fenlason%27s_Hack
[NetHack]: https://nethackwiki.com/wiki/NetHack
[SLASH'EM]: https://nethackwiki.com/wiki/SLASH%27EM

When I said Swash represented my longest-running project, I meant that.  The
initial design, back when it was just a personal project, is derived from a
much older game I wrote way back in high school called Crawl.  Crawl was a
much more basic game bearing little resemblance to a traditional Roguelike,
but the concept of it has stuck in my mind ever since, to such an extent that
for a while writing a Roguelike was just the way I learned new programming
languages.  A later version of Crawl written in Python featured a map
generator and field-of-vision not too dissimilar to what SwashRL has now.

When I started working on the game in its current form I had to pick a new
name for it to avoid confusion with another classic game called
[Linley's Dungeon Crawl][Crawl].  Initially I named it Slumbering Dragon,
which it turns out is also taken.  After that I renamed it to FORRNIF[^1],
Spelunk!, and finally SwashRL.

[Crawl]: https://en.wikipedia.org/wiki/Dungeon_Crawl_Stone_Soup#Linley's_Dungeon_Crawl

### What SwashRL Means to Me

SwashRL in its current form began during a very hard time in my life.  I was
feeling unmotivated and disillusioned, and I was experiencing a lot of
hardship that I was having difficulty coping with.  By 2017 I had developed
anxiety problems and started experiencing panic attacks.

SwashRL and other projects I dedicated myself to helped to remind me that my
best years weren't behind me, and that I could still do great things in the
years to come.  By taking on all of the [challenges](#challenges) and throwing
myself into the [design](#design) of a complex project, I was able to prove to
myself that I was capable of far more than I thought I was.  The first step to
making a positive change in your life is to take on a challenge and test your
limits; this is something I didn't fully understand until I undertook a
project as complex as this.

Even though SwashRL has not yet achieved the grandiose ambitions I had in mind
when I started it, I have done far more with it than I would have thought
myself capable of before.  I finally had something I could hold up and say
"_I_ did this.  This is something worth being proud of."  It was a small
accomplishment, but it meant that I _could_ accomplish something, in spite of
the hard times and the mistakes I've made along the way.

So influential was this to me that I adopted the name "swashdev" on GitHub and
on my Discord profile, which eventually became "swashberry."  By making this
game my namesake, I've connected my online identity with the intent under
which SwashRL was undertaken:

_I will not be stopped by self-doubt.  I will accept great challenges and
prove myself worthy, not because I want to be as good as other people, but
because I want to be the best that **I** can be._

This is a principle that I've adopted as part of my personal philosophy, and
it's driven me to pursue excellence ever since.

[^1]: Filip's Own Rogue Ripoff Named, Imaginatively, FORRNIF
