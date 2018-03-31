#!/usr/bin/python
#
# written as an exercise in about ninety minutes
# Jenner Hanni
# GPLv3
# 
# create a list of runes
# create a list of cards
# create a spread

import random

# ---------------------------------------------------------
# rune-related classes and functions
# ---------------------------------------------------------

class Rune(object):
  name = ''
  number = 0
  meaning = ''
  image = ''

  def __init__(self, number, letter, name, meaning):
    self.number = number
    self.letter = letter
    self.name = name
    self.meaning = meaning
    self.image = str(number)+'.gif'

  def print_rune(rune):
    print rune.number, rune.letter, rune.name, rune.meaning, rune.image

def init_all_runes(runes):

  runes.append(Rune(1,"F","Fehu","Domestic cattle, wealth"))
  runes.append(Rune(2,"U","Uruz","Aurochs, wild ox"))
  runes.append(Rune(3,"Th","Thurisaz","Thorn, giant, women's bane"))
  runes.append(Rune(4,"A","Ansuz","The Aesir, ancestral god"))
  runes.append(Rune(5,"R","Raidho","Wagon, chariot, riding"))
  runes.append(Rune(6,"K","Kenaz","Beacon, torch"))
  runes.append(Rune(7,"G","Gebo","Gift"))
  runes.append(Rune(8,"W,V","Wunjo","Joy"))
  runes.append(Rune(9,"H","Hagalaz","Hail"))
  runes.append(Rune(10,"N","Nauthiz","Need"))
  runes.append(Rune(11,"I","Isa","Ice"))
  runes.append(Rune(12,"J,Y","Jera","Wheel, year, good harvest"))
  runes.append(Rune(13,"EI","Eihwaz","Yew tree"))
  runes.append(Rune(14,"P","Perthro","Lot cup, rolled dice"))
  runes.append(Rune(15,"Z","Algiz","Elk, protection"))
  runes.append(Rune(16,"S","Sowilo","Sun"))
  runes.append(Rune(17,"T","Tiwaz","Tyr, sky god"))
  runes.append(Rune(18,"B","Berkano","Berchta, Birch goddess"))
  runes.append(Rune(19,"E","Ehwaz","Horse, two horses"))
  runes.append(Rune(20,"M","Mannaz","Man, mankind"))
  runes.append(Rune(21,"L","Laguz","Lake, leek"))
  runes.append(Rune(22,"NG","Ingwaz","Ing, Freyr, Earth god"))
  runes.append(Rune(23,"D","Dagaz","Day, dawn"))
  runes.append(Rune(24,"O","Othala","Ancestral property"))

  return runes

# ---------------------------------------------------------
# card-related classes and functions
# ---------------------------------------------------------

class Card(object):
  name = ''
  number = ''
  image = ''

  def __init__(self, number, name, image):
    self.name = name
    self.number = number
    self.image = image

  def print_card(card):
    print card.number, card.name, card.image

def init_all_cards(cards):
  
  cards.append(Card("0","The Fool","tarot-0-fool.png"))
  cards.append(Card("I","The Magician","tarot-1-magician.png"))
  cards.append(Card("II","The High Priestess","tarot-2-high-priestess.png"))
  cards.append(Card("III","The Empress","tarot-3-empress.png"))
  cards.append(Card("IV","The Emperor","tarot-4-emperor.png"))
  cards.append(Card("V","The Hierophant","tarot-5-hierophant.png"))
  cards.append(Card("VI","The Lovers","tarot-6-lovers.png"))
  cards.append(Card("VII","The Chariot","tarot-7-the-chariot.png"))
  cards.append(Card("VIII","Strength","tarot-8-strength.png"))
  cards.append(Card("IX","The Hermit","tarot-9-hermit.png"))
  cards.append(Card("X","Wheel of Fortune","tarot-10-wheel-of-fortune.png"))
  cards.append(Card("XI","Justice","tarot-11-justice.png"))
  cards.append(Card("XII","The Hanged Man","tarot-12-hanged-man.png"))
  cards.append(Card("XIII","Death","tarot-13-death.png"))
  cards.append(Card("XIV","Temperance","tarot-14-temperance.png"))
  cards.append(Card("XV","The Devil","tarot-15-devil.png"))
  cards.append(Card("XVI","The Tower","tarot-16-tower.png"))
  cards.append(Card("XVII","The Star","tarot-17-star.png"))
  cards.append(Card("XVIII","The Moon","tarot-18-moon.png"))
  cards.append(Card("XIX","The Sun","tarot-19-sun.png"))
  cards.append(Card("XX","Judgement","tarot-20-judgement.png"))
  cards.append(Card("XXI","The World","tarot-21-world.png"))
  cards.append(Card("I","One of Coins","coins01.jpg"))
  cards.append(Card("II","Two of Coins","coins02.jpg"))
  cards.append(Card("III","Three of Coins","coins03.jpg"))
  cards.append(Card("IV","Four of Coins","coins04.jpg"))
  cards.append(Card("V","Five of Coins","coins05.jpg"))
  cards.append(Card("VI","Six of Coins","coins06.jpg"))
  cards.append(Card("VII","Seven of Coins","coins07.jpg"))
  cards.append(Card("VIII","Eight of Coins","coins08.jpg"))
  cards.append(Card("IX","Nine of Coins","coins09.jpg"))
  cards.append(Card("X","Ten of Coins","coins10.jpg"))
  cards.append(Card("XI","Page of Coins","coins11.jpg"))
  cards.append(Card("XII","Knight of Coins","coins12.jpg"))
  cards.append(Card("XIII","Queen of Coins","coins13.jpg"))
  cards.append(Card("XIV","King of Coins","coins14.jpg"))
  cards.append(Card("I","One of Cups","cups01.jpg"))
  cards.append(Card("II","Two of Cups","cups02.jpg"))
  cards.append(Card("III","Three of Cups","cups03.jpg"))
  cards.append(Card("IV","Four of Cups","cups04.jpg"))
  cards.append(Card("V","Five of Cups","cups05.jpg"))
  cards.append(Card("VI","Six of Cups","cups06.jpg"))
  cards.append(Card("VII","Seven of Cups","cups07.jpg"))
  cards.append(Card("VIII","Eight of Cups","cups08.jpg"))
  cards.append(Card("IX","Nine of Cups","cups09.jpg"))
  cards.append(Card("X","Ten of Cups","cups10.jpg"))
  cards.append(Card("XI","Page of Cups","cups11.jpg"))
  cards.append(Card("XII","Knight of Cups","cups12.jpg"))
  cards.append(Card("XIII","Queen of Cups","cups13.jpg"))
  cards.append(Card("XIV","King of Cups","cups14.jpg"))
  cards.append(Card("I","One of Wands","wands01.jpg"))
  cards.append(Card("II","Two of Wands","wands02.jpg"))
  cards.append(Card("III","Three of Wands","wands03.jpg"))
  cards.append(Card("IV","Four of Wands","wands04.jpg"))
  cards.append(Card("V","Five of Wands","wands05.jpg"))
  cards.append(Card("VI","Six of Wands","wands06.jpg"))
  cards.append(Card("VII","Seven of Wands","wands07.jpg"))
  cards.append(Card("VIII","Eight of Wands","wands08.jpg"))
  cards.append(Card("IX","Nine of Wands","wands09.jpg"))
  cards.append(Card("X","Ten of Wands","wands10.jpg"))
  cards.append(Card("XI","Page of Wands","wands11.jpg"))
  cards.append(Card("XII","Knight of Wands","wands12.jpg"))
  cards.append(Card("XIII","Queen of Wands","wands13.jpg"))
  cards.append(Card("XIV","King of Wands","wands14.jpg"))
  cards.append(Card("I","One of Swords","swords01.jpg"))
  cards.append(Card("II","Two of Swords","swords02.jpg"))
  cards.append(Card("III","Three of Swords","swords03.jpg"))
  cards.append(Card("IV","Four of Swords","swords04.jpg"))
  cards.append(Card("V","Five of Swords","swords05.jpg"))
  cards.append(Card("VI","Six of Swords","swords06.jpg"))
  cards.append(Card("VII","Seven of Swords","swords07.jpg"))
  cards.append(Card("VIII","Eight of Swords","swords08.jpg"))
  cards.append(Card("IX","Nine of Swords","swords09.jpg"))
  cards.append(Card("X","Ten of Swords","swords10.jpg"))
  cards.append(Card("XI","Page of Swords","swords11.jpg"))
  cards.append(Card("XII","Knight of Swords","swords12.jpg"))
  cards.append(Card("XIII","Queen of Swords","swords13.jpg"))
  cards.append(Card("XIV","King of Swords","swords14.jpg"))

  return cards

# ---------------------------------------------------------
# throw the spread with any given token
# ---------------------------------------------------------

def throw_tokens(name, number_of_tokens, tokens):

  spread = []

  for s in range (1,number_of_tokens+1):
    spread.append(random.choice(tokens))

  print "-----------------\nSpread:", name, "\n"
  for token in spread:
    print token.name

# ---------------------------------------------------------
# main
# ---------------------------------------------------------

if __name__ == "__main__":

  runes = []
  cards = []

  print "\n=== Initialize all runes\n"
  runes = init_all_runes(runes)
  for r in runes:
    r.print_rune()
  print "\n"

  print "=== Initialize all cards\n"
  cards = init_all_cards(cards)
  for c in cards:
    c.print_card()
  print "\n\n"

  throw_tokens("Past, Present, Future", 3, cards)
  print ""
  throw_tokens("Past, Present, Future", 3, runes)

