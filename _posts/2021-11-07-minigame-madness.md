---
layout: project
title: Minigame Madness
permalink: /projects/minigame-madness/
spoof_url: /projects/
license: Mostly Public Domain
license_link: https://github.com/swashdev/minigame-madness/blob/master/LICENSE
version: 0.12.4-alpha
downloads: https://github.com/swashdev/minigame-madness/releases
github: minigame-madness/
systems: HTML5, Linux, Windows, MacOS
tags: arcade microgame web_game wip
thumbnail: /images/thumbnails/minigame-madness.png
preview: /images/minigame-madness/screenshot.png
playnow: https://pavlick.net/minigame-madness/
---

Minigame Madness is a collection of ~~20~~ 12 fun microgames which hearkens
back to the good old days, when Flash games ruled the Internet and anarchic
fun was an acceptable passtime.  Do you have the reflexes?  The skill?  The
can-do-it-iveness&#8253;  There's only one way to find out!

Minigame Madness is also the first game I made using the
[Godot Engine][godot], a game engine for 2D or 3D games with an easy-to-use
interface and scripting language which makes the game easy to build and easy
to extend.

[godot]: https://godotengine.org/

* [Design](#design)
* [Challenges](#challenges)
* [What I've Learned](#what-ive-learned)
* [Public Domain Status](#public-domain-status)

## Design

Minigame Madness is my homage to [Four Second Fury][Four Second Series] and
its sequels, developed by Flash game designer [jmtb02][jmtb02].  Much like
Four Second Fury, Minigame Madness is a collection of simple games with a
strict four-second time limit.  At the start of each game the player is given
a single instruction or hint which they must use to quickly determine what to
do and get it done.

[Four Second Series]: https://www.newgrounds.com/playlists/view/2610876e07ce1866a6ffe07f5ab443d6
[jmtb02]: http://www.jmtb02.com/

Also like in the Four Second Series, Minigame Madness uses only the arrow keys
and space bar[^1], meaning that the various microgames play relatively
consistently and require little experimentation in order to play.  This is
done firstly to simplify the design of the various microgames but also so that
the main challenge factor is the strict time limit.

[^1]: Although Minigame Madness also supports WASD, IJKL, &lt;comma&gt;AOE, and CHTN, unlike the original Four Second Fury, in order to support a number of different keyboard layouts according to user preference.

The player has five lives to complete all of the microgames with; if they run
out of lives, they fail.  In order to win, you must play all of the microgames
in a random order without running out of lives.

Unlike the Four Second Series, I made it a point going in that every microgame
must be distinct from all the rest.  Four Second Frenzy and Firestorm, the
second and third games in the original series, were collaborative efforts with
microgames contributed by various Newgrounds users, and unfortunately a lot of
them had the same basic design, just with different graphics.  I wanted every
microgame in Minigame Madness to play differently from the rest, so that the
player felt like they were getting a new challenge with each game.

{% comment %} This section is being deferred to a later draft.

### Minigames or Microgames?

I landed on the name Minigame Madness pretty early in the project because it's
snappy and I really like it.  However, the more accurate name for the
minigames in Minigame Madness would be "microgames."  A microgame is a very
small, usually very short game with simple mechanics, and in the context of
video games they're often featured in sets within a larger macrogame like the
[Four Second Series][Four Second Series] or [WarioWare][warioware].

[warioware]: https://en.wikipedia.org/wiki/Wario_(series)#WarioWare_series

A [minigame][minigame], in contrast, is a small game generally included within
a full-sized video game which is usually meant to convey a specific mechanic
in the context of the game, such as a lock-picking minigame in an RPG or a
stealth game or a [quick time event][qte] sequence in an action game.  Some
minigames like [Gwent][gwent] can function as full-fledged games on their own.

[minigame]: https://en.wikipedia.org/wiki/Minigame
[qte]: https://en.wikipedia.org/wiki/Quick_time_event
[gwent]: https://en.wikipedia.org/wiki/Gwent:_The_Witcher_Card_Game

I landed on the name "Minigame Madness" for one simple reason: It sounds
better.  The word "minigame" rolls off the tongue and is fun to say, whereas
"microgame" feels kind of clinical and almost official.  Minigame Madness is a
very silly game that needs a very silly name.

For the purposes of this portfolio, however, I'll use the term "microgame" to
describe the minigames in Minigame Madness, because it's more accurate.

{% endcomment %}

## Challenges

The most obvious challenge in the design of Minigame Madness was coming up
with a bunch of different microgames.  I started developing Minigame Madness
in early November with the goal of getting it out by Christmas or New Year's
Day.  With the original intent being to develop 20 microgames, one secret
game, and a boss battle, this gave me a very brief window in which to develop
the game, and I ended up not being able to get all of them out on-time.

In practice, this turned out to be much easier than I thought, because the
games by design need to be very simple.  Each game has to be completable in
four seconds or less, which means there's actually very little pressure on me
to make something very complicated.

On top of that, the various microgames all have the same basic structure: They
have a win state and a lose state, the player either loses or wins by default
if the timer runs out, and they all use the same control keys.  The only real
difficulty in terms of development is making all of the games fun,
challenging, and distinct.

Another problem I ran into with Minigame Madness is that I can't draw.  I do
_okay_ at pixel art, but with a deadline coming up I didn't have time to
carefully hand-craft sprites and backgrounds pixel by pixel.  There really
wasn't a fix for this except to embrace an intentionally crappy art style,
which is fairly consistent throughout most of the games.  This ended up
working in my favor, however, because the slapdash art style worked with the
frantic pacing to make the game feel more rushed.

![The player has been tasked with quickly sawing a log in half during a game of Minigame Madness](/images/minigame-madness/screenshot-1.png)

## What I've Learned

Working on a number of tiny games instead of one big game was a great change
of pace for me.  I was able to complete a microgame in about a day or so,
sometimes three if it required more assets or if the code needed to be
tweaked.  During the day I could come up with a basic concept for several
minigames and test that concept with some basic code and assets.

Of course, the fast pace of work also meant that I had to refine my process.
Part of that was giving all of the microgames the same basic structure, with
a win and lose state and all using the same basic controls.  

```gdscript
# This signal is used when the player has beaten the minigame, especially if
# the win state occurs before the timer runs down
signal won
# Similarly, this signal is used when the player has lost the minigame
signal lost

# A brief string used to give the player some hint as to what they're doing at
# the start of the minigame.
export(String) var _instruction setget ,get_instruction

# Whether the player wins by default when the timer expires.  If not, they
# lose by default.
export(bool) var _win_by_default = false


# This function is used to force the minigame to decide whether to throw the
# `won` signal or the `lost` signal.  Mostly used if the minigame has not
# given any such signal by the time the timer runs out.
func decide():
	stop()
	if _win_by_default:
		emit_signal( "won" )
	else:
		emit_signal( "lost" )
```

Every microgame expands on the same basic template so that the mainloop is
able to handle all of them the same way without any need for special-casing.
The microgames themselves determine the win or lose state, with the `decide`
function only being used if the game is still running by the time the
four-second timer runs down.

The `export` statements in the above code sample mean that the variable can be
initialized in the Godot editor rather than having to initialize it in code.
This is why there's no setter function for the `_instruction` variable, for
example.  
This was a very new framework for me to work in, because up until Minigame
Madness I was used to doing everything manually in code.  Taking advantage of
Godot's editor like this made it very easy for basic variables used in each
microgame to be set, which is useful for those minigames that don't need any
special code to handle gameplay or define the win/lose conditions.

Indeed, Minigame Madness got me used to working with an editor.  My earlier
projects like [SwashRL][swashrl] and Orange Guy's Quest were written entirely
in code, which is easy to implement and offers a lot of control, but it does
mean that making minor adjustments is more cumbersome.  With the Godot editor,
I can just create a new microgame that inherits from a single class and
quickly start adding assets with just a few clicks.

[swashrl]: /projects/swashrl/

The way the Godot engine handles nodes also made it very easy to take
advantage of this process so that I can project minigames onto a canvas with
a main node in full control of what goes where, meaning that as I continue to
work on Minigame Madness I can add transition animations and other cool
effects for flavor.

One of the most important things I learned from Minigame Madness was how to
optimize the labor that goes into a project.  Because I needed to build a lot
of microgames in not a lot of time, any art or other assets that a game needed
had to be built quickly.  This resulted in kind of a sketchy art style for
the project, especially for microgames that had a lot of moving parts.

My solution to this was to deliberately make the art very slapdash for a lot
of microgames and focus more on making sprites look good when there weren't a
lot of moving parts.  I had to get comfortable with doing that so that I could
focus more on making sure the actual gameplay was functional, snappy, and fun.

I learned from designing the game in this way that I can make a game that's
still engaging without necessarily having to put 100% into every single corner
of it as long as the core appeal still works.  That's not to say I didn't
devote myself to making the game well, just that I had to use my resources
optimally and sacrifice some elements of the project to make others as good as
they could be.

## Public Domain Status

I made the decision very early on to release Minigame Madness into the public
domain.  There were [some limitations on my ability to do
this][mostly public domain], however.  For one thing the game engine I used is
not in the public domain, and for another any third-party assets I used had to
be very permissively licensed, ideally also public domain.

[mostly public domain]: https://github.com/swashdev/minigame-madness/blob/52e6201630b08dcf91c5b389d2b4c36dc4df13dc/LICENSE

Finding suitable third-party assets that are in the public domain turns out to
be surprisingly difficult.  I was able to find some useful fonts which are
public domain, which is good because my handwriting is terrible and I didn't
have time to try to build my own font from scratch.

Music was much harder to get a hold of.  I eventually found a musician who
goes by [Loyalty Freak Music][Loyalty Freak] who mostly works on video game
projects and publishes exclusively in the public domain, but none of their
work seemed to fit for the core gameplay loop.

[Loyalty Freak]: https://loyaltyfreakmusic.com/

Eventually, for the main music, I compromised and settled on a song called
[Skippitybop][Skippitybop] by Spadezer.  Even this song wasn't ideal, since
it was released under a [Creative Commons-Attribution License][CC-BY], but
since the game already had to include _some_ licensing information in order to
see any kind of release I decided the compromise was just going to have to
happen.  Besides that, the song is just _perfect_ for the anarchic and frantic
style of the game, and it's frankly criminal that it hasn't gone viral yet.

[Skippitybop]: https://www.newgrounds.com/audio/listen/944805
[CC-BY]: https://creativecommons.org/licenses/by/3.0/

The practical effect of this is that the original Minigame Madness source code
files are all in the public domain, but compiled binaries are still subject to
copyright.  There's really nothing I could have done about this, due to the
licensing terms of the engine I was using, but I stuck to my guns on this one
because as long as Minigame Madness is open-sourced it matters that _my_
original work be available unencumbered.
