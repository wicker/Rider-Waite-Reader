import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

class Header extends Component {

  render() {
    return (

      <header>
        <h1><a href="/">The Rider-Waite Reader</a></h1>
        <nav>
          <ul>
            <li><a href="/">Get a Reading</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/layouts">Layouts</a></li>
          </ul>
        </nav>
      </header>

    )
  }
}
class NotFound404 extends Component {

  render() {
    return (

      <div>
        <h4>Page not found</h4>
      </div>
    )
  }
}

class Content extends Component {

  render() {
    return (
            <div>
				<section className="reading">
					<h1>Get a Reading</h1>
					<form>
						<p>
							Enter your question:
							<input type="text" />
						</p>
						<p>
							Which layout?<br />
							<input type="radio" name="layout" value="one" checked /> One Card
							<input type="radio" name="layout" value="three" /> Three Cards
							<input type="radio" name="layout" value="directional" /> Directional
							<input type="radio" name="layout" value="celticcross" /> Celtic Cross
							<input type="radio" name="layout" value="treeoflife" /> Tree of Life
						</p>
						<p>
							<input type="submit" value="Read the cards!" />
						</p>
					</form>
				</section>
            </div>

    )
  }
}

class History extends Component {

  render() {
    return (
               <div>
				<section className="reading" style={{border: 0}}>
					<h1>History</h1>
					<p>Essay!</p>
				</section>
            </div>

    )
  }
}

class Layouts extends Component {

  render() {
    return (
      <div>
				<section className="reading" style={{border: 0}}>
					<h1>Layouts</h1>
				</section>

        <LayoutOneCard />

        <LayoutThreeCards />

        <LayoutDirectional />

        <LayoutCelticCross />

        <LayoutTreeOfLife />

      </div>

    )
  }
}

class LayoutOneCard extends Component {

  render() {
    return (
      <div className="reading">
					<h1>One Card</h1>
					<p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p>
					<div className="flex-row cards">
						<div className="flex-col">
							<div className="item"  style={{backgroundImage: `url(img/pents09.jpg)`}} />
						</div>
					</div>
      </div>

    )
  }
}

class LayoutThreeCards extends Component {

  render() {
    return (

    <div className="reading">
      <h1>Three Card</h1>
      <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p> 
      <div className="flex-row cards">
        <div className="flex-col">
          <div className="item"  style={{backgroundImage: `url(img/tarot-13-death.jpg)`}}>
            <h2>Past</h2>
          </div>
        </div>
        <div className="flex-col">
          <div className="item"  style={{backgroundImage: `url(img/tarot-6-the-lovers.jpg)`}}>
            <h2>Present</h2>
          </div>
        </div>
        <div className="flex-col">
          <div className="item"  style={{backgroundImage: `url(img/tarot-9-hermit.jpg)`}}>
            <h2>Future</h2>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

class LayoutDirectional extends Component {

  render() {
    return (
    <div className="reading">
      <h1>Directional Layout</h1>
      <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p> 
      <div className="flex-row cards">
        <div className="flex-col">
          <div className="item" style={{backgroundImage: `url(img/pents09.jpg)`}}>
            <h2>West</h2>
          </div>
        </div>
        <div className="flex-col">
          <div className="item directional-north" style={{backgroundImage: `url(img/cups07.jpg)`}}>
            <h2>North</h2>
          </div>
          <div className="item directional-center" style={{backgroundImage: `url(img/swords03.jpg)`}}>
            <h2>Center</h2>
          </div>
          <div className="item rotated directional-union" style={{backgroundImage: `url(img/pents01.jpg)`}}>
            <h2>Union</h2>
          </div>
          <div className="item" style={{backgroundImage: `url(img/wands10.jpg)`}}>
            <h2>South</h2>
          </div>
        </div>
        <div className="flex-col">
          <div className="item" style={{backgroundImage: `url(img/wands04.jpg)`}}>
            <h2>East</h2>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

class LayoutCelticCross extends Component {

  render() {
    return (
    <div className="reading">
      <h1>Celtic Cross</h1>
      <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p> 
      <div className="flex-row cards">
        <div className="flex-col">
          <div className="item" style={{backgroundImage: `url(img/cups02.jpg)`}}>
            <h2>Card 4</h2>
          </div>
        </div>
        <div className="flex-col celticcross-col-second">
          <div className="item" style={{backgroundImage: `url(img/swords07.jpg)`}}>
            <h2>Card 5</h2>
          </div>
          <div className="item celticcross-card-one" style={{backgroundImage: `url(img/tarot-0-fool.jpg)`}}>
            <h2>Card 1</h2>
          </div>
          <div className="item rotated celticcross-card-two" style={{backgroundImage: `url(img/tarot-13-death.jpg)`}}>
            <h2>Card 2</h2>
          </div>
          <div className="item celticcross-card-three" style={{backgroundImage: `url(img/pents01.jpg)`}}>
            <h2>Card 3</h2>
          </div>
        </div>
        <div className="flex-col celticcross-col-third">
          <div className="item" style={{backgroundImage: `url(img/swords10.jpg)`}}>
            <h2>Card 6</h2>
          </div>
        </div>
        <div className="flex-col">
          <div className="item taller" style={{backgroundImage: `url(img/cups07.jpg)`}}>
            <h2>Card 10</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/cups13.jpg)`}}>
            <h2>Card 9</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/cups01.jpg)`}}>
            <h2>Card 8</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/cups09.jpg)`}}>
            <h2>Card 7</h2>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

class LayoutTreeOfLife extends Component {

  render() {
    return (
      <div className="reading">
      <h1>Tree of Life</h1>
      <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p> 
      <div className="flex-row cards treeoflife-row">
        <div className="flex-col treeoflife-col-one">
          <div className="item taller" style={{backgroundImage: `url(img/pents01.jpg)`}}>
            <h2>Card 3</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/pents02.jpg)`}}>
            <h2>Card 5</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/pents03.jpg)`}}>
            <h2>Card 8</h2>
          </div>
        </div>
        <div className="flex-col">
          <div className="item taller" style={{backgroundImage: `url(img/pents04.jpg)`}}>
            <h2>Card 1</h2>
          </div>
          <div className="item taller treeoflife-card-six" style={{backgroundImage: `url(img/pents05.jpg)`}}>
            <h2>Card 6</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/pents06.jpg)`}}>
            <h2>Card 9</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/pents07.jpg)`}}>
            <h2>Card 10</h2>
          </div>
        </div>
        <div className="flex-col treeoflife-col-three">
          <div className="item taller" style={{backgroundImage: `url(img/pents08.jpg)`}}>
            <h2>Card 2</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/pents09.jpg)`}}>
            <h2>Card 4</h2>
          </div>
          <div className="item taller" style={{backgroundImage: `url(img/pents10.jpg)`}}>
            <h2>Card 7</h2>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

class App extends Component {

  state = {
    cards: [
      { 'name': 'Ace of Cups', 'path': 'img/cups01.jpg'},
      { 'name': 'Two of Cups', 'path': 'img/cups02.jpg'},
      { 'name': 'Three of Cups', 'path': 'img/cups03.jpg'},
      { 'name': 'Four of Cups', 'path': 'img/cups04.jpg'},
      { 'name': 'Five of Cups', 'path': 'img/cups05.jpg'},
      { 'name': 'Six of Cups', 'path': 'img/cups06.jpg'},
      { 'name': 'Seven of Cups', 'path': 'img/cups07.jpg'},
      { 'name': 'Eight of Cups', 'path': 'img/cups08.jpg'},
      { 'name': 'Nine of Cups', 'path': 'img/cups09.jpg'},
      { 'name': 'Ten of Cups', 'path': 'img/cups10.jpg'},
      { 'name': 'Page of Cups', 'path': 'img/cups11.jpg'},
      { 'name': 'Knight of Cups', 'path': 'img/cups12.jpg'},
      { 'name': 'Queen of Cups', 'path': 'img/cups13.jpg'},
      { 'name': 'King of Cups', 'path': 'img/cups14.jpg'},
      { 'name': 'Ace of Swords', 'path': 'img/swords01.jpg'},
      { 'name': 'Two of Swords', 'path': 'img/swords02.jpg'},
      { 'name': 'Three of Swords', 'path': 'img/swords03.jpg'},
      { 'name': 'Four of Swords', 'path': 'img/swords04.jpg'},
      { 'name': 'Five of Swords', 'path': 'img/swords05.jpg'},
      { 'name': 'Six of Swords', 'path': 'img/swords06.jpg'},
      { 'name': 'Seven of Swords', 'path': 'img/swords07.jpg'},
      { 'name': 'Eight of Swords', 'path': 'img/swords08.jpg'},
      { 'name': 'Nine of Swords', 'path': 'img/swords09.jpg'},
      { 'name': 'Ten of Swords', 'path': 'img/swords10.jpg'},
      { 'name': 'Page of Swords', 'path': 'img/swords11.jpg'},
      { 'name': 'Knight of Swords', 'path': 'img/swords12.jpg'},
      { 'name': 'Queen of Swords', 'path': 'img/swords13.jpg'},
      { 'name': 'King of Swords', 'path': 'img/swords14.jpg'},
      { 'name': 'Ace of Wands', 'path': 'img/wands01.jpg'},
      { 'name': 'Two of Wands', 'path': 'img/wands02.jpg'},
      { 'name': 'Three of Wands', 'path': 'img/wands03.jpg'},
      { 'name': 'Four of Wands', 'path': 'img/wands04.jpg'},
      { 'name': 'Five of Wands', 'path': 'img/wands05.jpg'},
      { 'name': 'Six of Wands', 'path': 'img/wands06.jpg'},
      { 'name': 'Seven of Wands', 'path': 'img/wands07.jpg'},
      { 'name': 'Eight of Wands', 'path': 'img/wands08.jpg'},
      { 'name': 'Nine of Wands', 'path': 'img/wands09.jpg'},
      { 'name': 'Ten of Wands', 'path': 'img/wands10.jpg'},
      { 'name': 'Page of Wands', 'path': 'img/wands11.jpg'},
      { 'name': 'Knight of Wands', 'path': 'img/wands12.jpg'},
      { 'name': 'Queen of Wands', 'path': 'img/wands13.jpg'},
      { 'name': 'King of Wands', 'path': 'img/wands14.jpg'},
      { 'name': 'Ace of Pentacles', 'path': 'img/pents01.jpg'},
      { 'name': 'Two of Pentacles', 'path': 'img/pents02.jpg'},
      { 'name': 'Three of Pentacles', 'path': 'img/pents03.jpg'},
      { 'name': 'Four of Pentacles', 'path': 'img/pents04.jpg'},
      { 'name': 'Five of Pentacles', 'path': 'img/pents05.jpg'},
      { 'name': 'Six of Pentacles', 'path': 'img/pents06.jpg'},
      { 'name': 'Seven of Pentacles', 'path': 'img/pents07.jpg'},
      { 'name': 'Eight of Pentacles', 'path': 'img/pents08.jpg'},
      { 'name': 'Nine of Pentacles', 'path': 'img/pents09.jpg'},
      { 'name': 'Ten of Pentacles', 'path': 'img/pents10.jpg'},
      { 'name': 'Page of Pentacles', 'path': 'img/pents11.jpg'},
      { 'name': 'Knight of Pentacles', 'path': 'img/pents12.jpg'},
      { 'name': 'Queen of Pentacles', 'path': 'img/pents13.jpg'},
      { 'name': 'King of Pentacles', 'path': 'img/pents14.jpg'},
      { 'name': 'The Fool', 'path': 'img/tarot-0-fool.jpg'},
      { 'name': '', 'path': 'img/tarot-1-magician.jpg'},
      { 'name': '', 'path': 'img/tarot-2-high-priestess.jpg'},
      { 'name': '', 'path': 'img/tarot-3-the-empress.jpg'},
      { 'name': '', 'path': 'img/tarot-4-the-emperor.jpg'},
      { 'name': '', 'path': 'img/tarot-5-the-hierophant.jpg'},
      { 'name': '', 'path': 'img/tarot-6-the-lovers.jpg'},
      { 'name': '', 'path': 'img/tarot-7-the-chariot.jpg'},
      { 'name': '', 'path': 'img/tarot-8-strength.jpg'},
      { 'name': '', 'path': 'img/tarot-9-hermit.jpg'},
      { 'name': '', 'path': 'img/tarot-10-wheel-of-fortune.jpg'},
      { 'name': '', 'path': 'img/tarot-11-justice.jpg'},
      { 'name': '', 'path': 'img/tarot-12-the-hanged-man.jpg'},
      { 'name': '', 'path': 'img/tarot-13-death.jpg'},
      { 'name': '', 'path': 'img/tarot-14-temperance.jpg'},
      { 'name': '', 'path': 'img/tarot-15-the-devil.jpg'},
      { 'name': '', 'path': 'img/tarot-16-the-tower.jpg'},
      { 'name': '', 'path': 'img/tarot-17-the-star.jpg'},
      { 'name': '', 'path': 'img/tarot-18-the-moon.jpg'},
      { 'name': '', 'path': 'img/tarot-19-the-sun.jpg'},
      { 'name': '', 'path': 'img/tarot-20-judgement.jpg'},
      { 'name': '', 'path': 'img/tarot-21-the-world.jpg'}
    ]
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={({ history }) => (
            <div>
              <Header />
              <Content />
            </div>          )}/>
          <Route exact path='/layouts' render={({ history }) => (
            <div>
              <Header />
              <Layouts />
            </div>          )}/>
          <Route exact path='/history' render={({ history }) => (
            <div>
              <Header />
              <History />
            </div>          )}/>
          <Route path='*' render={({ history }) => (
            <div>
              <Header />
              <NotFound404 />
            </div>
          )}/>
        </Switch>

      </div>
    );
  }
}

export default App;
