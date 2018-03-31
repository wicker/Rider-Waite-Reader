# card-readings-app
Flask tarot and rune reader app

The tarot images are of the Rider-Waite-Smith deck from sacred-tarot and are in the public domain.

By Authorship: <a href="//en.wikipedia.org/wiki/Arthur_Edward_Waite" class="mw-redirect" title="Arthur Edward Waite">Arthur Edward Waite</a>, <a href="//en.wikipedia.org/wiki/Pamela_Coleman_Smith" class="mw-redirect" title="Pamela Coleman Smith">Pamela Coleman Smith</a> was the artist and worked as an artist 'for hire.' Waite was the copyright holder and he died in 1942. - This image scanned by <a rel="nofollow" class="external text" href="http://home.comcast.net/~vilex/">Holly Voley</a>,
<a href="//en.wikipedia.org/wiki/File:Cups01.jpg" title="Public domain in the United States">PD-US</a>, <a href="https://en.wikipedia.org/w/index.php?curid=35262364">Link</a>

The rune images were created using the rune font and are also hereby released into the public domain.

## Usage

The only imported library is `random`.

The cards and runes are hard-coded.

`./oracle` will currently print the list of runes, the list of cards, a three-card spread, and a three-rune spread to stdout.

## Screenshots

Flexbox-based card layouts:

![](onecard.png)

![](threecard.png)

![](celticcross.png)

![](directional.png)

![](treeoflife.png)

## Output

```
=== Initialize all runes

1 F Fehu Domestic cattle, wealth 1.gif
2 U Uruz Aurochs, wild ox 2.gif
3 Th Thurisaz Thorn, giant, women's bane 3.gif
4 A Ansuz The Aesir, ancestral god 4.gif
5 R Raidho Wagon, chariot, riding 5.gif
6 K Kenaz Beacon, torch 6.gif
7 G Gebo Gift 7.gif
8 W,V Wunjo Joy 8.gif
9 H Hagalaz Hail 9.gif
10 N Nauthiz Need 10.gif
11 I Isa Ice 11.gif
12 J,Y Jera Wheel, year, good harvest 12.gif
13 EI Eihwaz Yew tree 13.gif
14 P Perthro Lot cup, rolled dice 14.gif
15 Z Algiz Elk, protection 15.gif
16 S Sowilo Sun 16.gif
17 T Tiwaz Tyr, sky god 17.gif
18 B Berkano Berchta, Birch goddess 18.gif
19 E Ehwaz Horse, two horses 19.gif
20 M Mannaz Man, mankind 20.gif
21 L Laguz Lake, leek 21.gif
22 NG Ingwaz Ing, Freyr, Earth god 22.gif
23 D Dagaz Day, dawn 23.gif
24 O Othala Ancestral property 24.gif


=== Initialize all cards

0 The Fool tarot-0-fool.png
I The Magician tarot-1-magician.png
II The High Priestess tarot-2-high-priestess.png
III The Empress tarot-3-empress.png
IV The Emperor tarot-4-emperor.png
V The Hierophant tarot-5-hierophant.png
VI The Lovers tarot-6-lovers.png
VII The Chariot tarot-7-the-chariot.png
VIII Strength tarot-8-strength.png
IX The Hermit tarot-9-hermit.png
X Wheel of Fortune tarot-10-wheel-of-fortune.png
XI Justice tarot-11-justice.png
XII The Hanged Man tarot-12-hanged-man.png
XIII Death tarot-13-death.png
XIV Temperance tarot-14-temperance.png
XV The Devil tarot-15-devil.png
XVI The Tower tarot-16-tower.png
XVII The Star tarot-17-star.png
XVIII The Moon tarot-18-moon.png
XIX The Sun tarot-19-sun.png
XX Judgement tarot-20-judgement.png
XXI The World tarot-21-world.png
I One of Coins coins01.jpg
II Two of Coins coins02.jpg
III Three of Coins coins03.jpg
IV Four of Coins coins04.jpg
V Five of Coins coins05.jpg
VI Six of Coins coins06.jpg
VII Seven of Coins coins07.jpg
VIII Eight of Coins coins08.jpg
IX Nine of Coins coins09.jpg
X Ten of Coins coins10.jpg
XI Page of Coins coins11.jpg
XII Knight of Coins coins12.jpg
XIII Queen of Coins coins13.jpg
XIV King of Coins coins14.jpg
I One of Cups cups01.jpg
II Two of Cups cups02.jpg
III Three of Cups cups03.jpg
IV Four of Cups cups04.jpg
V Five of Cups cups05.jpg
VI Six of Cups cups06.jpg
VII Seven of Cups cups07.jpg
VIII Eight of Cups cups08.jpg
IX Nine of Cups cups09.jpg
X Ten of Cups cups10.jpg
XI Page of Cups cups11.jpg
XII Knight of Cups cups12.jpg
XIII Queen of Cups cups13.jpg
XIV King of Cups cups14.jpg
I One of Wands wands01.jpg
II Two of Wands wands02.jpg
III Three of Wands wands03.jpg
IV Four of Wands wands04.jpg
V Five of Wands wands05.jpg
VI Six of Wands wands06.jpg
VII Seven of Wands wands07.jpg
VIII Eight of Wands wands08.jpg
IX Nine of Wands wands09.jpg
X Ten of Wands wands10.jpg
XI Page of Wands wands11.jpg
XII Knight of Wands wands12.jpg
XIII Queen of Wands wands13.jpg
XIV King of Wands wands14.jpg
I One of Swords swords01.jpg
II Two of Swords swords02.jpg
III Three of Swords swords03.jpg
IV Four of Swords swords04.jpg
V Five of Swords swords05.jpg
VI Six of Swords swords06.jpg
VII Seven of Swords swords07.jpg
VIII Eight of Swords swords08.jpg
IX Nine of Swords swords09.jpg
X Ten of Swords swords10.jpg
XI Page of Swords swords11.jpg
XII Knight of Swords swords12.jpg
XIII Queen of Swords swords13.jpg
XIV King of Swords swords14.jpg



-----------------
Spread: Past, Present, Future 

Five of Cups
Six of Swords
The High Priestess

-----------------
Spread: Past, Present, Future 

Wunjo
Nauthiz
Ansuz
```
