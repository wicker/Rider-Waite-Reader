import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import * as TarotCards from './utils/cards.js'
import * as TarotSpreads from './utils/spreads.js'

class Header extends Component {

  render() {
    return (

      <header>
        <h1><a href="/">The Rider-Waite Tarot Reader</a></h1>
        <div className="subtitle">Get a free reading!</div>
      </header>

    )
  }
}

class Footer extends Component {

  render() {
    return (

      <footer>
        <p>This site uses public domain meanings from Mark McElroy and public domain art scanned by Holly Voley</p>
      </footer>

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

class FormGetAReading extends Component {

  static propTypes = {
    cards: PropTypes.array.isRequired
  }

  state = {
    question: '',
    layout: 'onecard',
    getReading: false,
    redirect: false,
    cardResult: [],
    reversed: false,
    focus: 'none'
  }

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    // calculate cards
    switch (this.state.layout) {
      case 'onecard':
        this.setState({
          cardResult: this.getCards(1),
          getReading: true
        })
        break;
      case 'threecard':
        this.setState({
          cardResult: this.getCards(3),
          getReading: true
        })
        break;
      case 'directional':
        this.setState({
          cardResult: this.getCards(6),
          getReading: true
        })
        break;
      case 'celticcross':
        this.setState({
          cardResult: this.getCards(10),
          getReading: true
        })
        break;
      case 'treeoflife':
        this.setState({
          cardResult: this.getCards(10),
          getReading: true
        })
        break
      default:
        this.setState({
          cardResult: this.getCards(1),
          getReading: true
        })
    }
  }


  // Return an array with the desired number of cards.
  // Each time a card is chosen, remove it from the deck.
  getCards(howMany) {

    var fullTarotDeck = this.props.cards;
    var numCardsLeftInFullTarotDeck = 78;

    var dealtCards = [];
    var randCard = 0;

    for (var i = 0; i < howMany; i++) {
      randCard = Math.floor(Math.random() * (numCardsLeftInFullTarotDeck - 1) + 1);
      dealtCards.push(fullTarotDeck[randCard]);
      fullTarotDeck.splice(randCard, 1);
      numCardsLeftInFullTarotDeck--;
    }
    console.log(dealtCards);
    return dealtCards
  }

  render() {
    if (this.state.getReading) {
      switch (this.state.layout) {
        case 'onecard':
          return (<div className="primary">
                    <SpreadOneCard
                      question={this.state.question}
                      card={this.state.cardResult}
                      reversed={this.state.reversed}
                      focus={this.state.focus}
                    />
                    <Footer />
                  </div>
                 )
        case 'threecard':
          return (<div>
                    <SpreadThreeCard
                      question={this.state.question}
                      cards={this.state.cardResult}
                    />
                    <Footer />
                  </div>
                 )
        case 'directional':
          return (<div>
                    <SpreadDirectional
                      question={this.state.question}
                      cards={this.state.cardResult}
                    />
                    <Footer />
                  </div>
                 )
        case 'celticcross':
          return (<div>
                    <SpreadCelticCross
                      question={this.state.question}
                      cards={this.state.cardResult}
                    />
                    <Footer />
                  </div>
                 )
        case 'treeoflife':
          return (<div>
                    <SpreadTreeOfLife
                      question={this.state.question}
                      cards={this.state.cardResult}
                    />
                    <CardDescriptions />
                    <Footer />
                  </div>
                 )
        default:
          return (<Redirect to="/" />)
      }
    } else {
      return (
        <div>
          <section className="reading">
            <h1>Get a Reading</h1>
            <form onSubmit={this.handleSubmit}>
              <p>
                Enter your question:
                <input type="text" name="question" onChange={this.handleChange}/>
              </p>
              <p>
                Which layout?<br />
                <input type="radio" name="layout" value="onecard"
                  defaultChecked onChange={this.handleChange}/> One Card
                <input type="radio" name="layout" value="threecard"
                  onChange={this.handleChange}/> Three Cards
                <input type="radio" name="layout" value="directional"
                  onChange={this.handleChange}/> Directional
                <input type="radio" name="layout" value="celticcross"
                  onChange={this.handleChange}/> Celtic Cross
                <input type="radio" name="layout" value="treeoflife"
                  onChange={this.handleChange}/> Tree of Life
              </p>
              <p>
                Focus of Reading?<br />
                <input type="radio" name="focus" value="none"
                  onChange={this.handleChange} defaultChecked /> None
                <input type="radio" name="focus" value="relationships"
                  onChange={this.handleChange}/> Relationships
                <input type="radio" name="focus" value="work"
                  onChange={this.handleChange}/> Work
                <input type="radio" name="focus" value="spirituality"
                  onChange={this.handleChange}/> Spirituality
                <input type="radio" name="focus" value="personalgrowth"
                  onChange={this.handleChange}/> Personal Growth
                <input type="radio" name="focus" value="fortunetelling"
                  onChange={this.handleChange}/> Fortunetelling
              </p>
              <p>
                Allow reversed cards?
                <input type="checkbox" name="reversed" checked={this.state.reversed}
                  onChange={this.handleChange}/>
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
}

class CardDescriptions extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
  }

  state = {
    card: this.props.card
  }

  render() {

    return (
        <div>Foo</div>
        )

  }
}

class SpreadOneCard extends Component {

  static propTypes = {
    card: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    reversed: PropTypes.bool.isRequired,
    focus: PropTypes.string.isRequired
  }

  state = {
    card: this.props.card[0],
    question: this.props.question,
    reversed: this.props.reversed,
    focus: this.props.focus,
  }

  render() {

    const { question, card, reversed, focus } = this.state;

    return (
    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the One Card Spread</h1>
            <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p>
        </div>
      </div>

      <div className="secondary">
        <div className="reading">
          { question
              ? <h1>{question}</h1>
              : null
          }
            <div className="flex-row cards">
              <div className="flex-col">
                <div className="item" style={{backgroundImage: `url(${card.imgpath})`}} />
              </div>
            </div>
        </div>
      </div>

      <div className="primary">
        <div className="reading">
          <h1>Interpreting Your Reading</h1>
          <div className="flex-row">
            <div>
              <img src={card.imgpath} alt={card.name}/>
            </div>
            <div>
              <h2>{card.name}</h2>
              <p><strong>{card.keywords}</strong></p>
              { reversed
                ? <p>{ card.shadow }</p>
                : <p>{ card.light }</p>
              }
              { focus === 'work'
                ? <p>{ card.focus_work }</p>
                : null
              }
              { focus === 'relationships'
                ? <p>{ card.focus_relationships }</p>
                : null
              }
              { focus === 'spirituality'
                ? <p>{ card.focus_spirituality }</p>
                : null
              }
              { focus === 'personalgrowth'
                ? <p>{ card.focus_personalgrowth }</p>
                : null
              }
              { focus === 'fortunetelling'
                ? <p>{ card.focus_fortunetelling }</p>
                : null
              }
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

class SpreadThreeCard extends Component {


  static propTypes = {
    cards: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    reversed: PropTypes.bool.isRequired,
    focus: PropTypes.string.isRequired
  }

  state = {
    cards: this.props.cards,
    question: this.props.question,
    reversed: this.props.reversed,
    focus: this.props.focus,
    spread: TarotSpreads.threecards
  }

  render() {

    const { question, cards, reversed, focus } = this.state

    return (

    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the Three Card Spread</h1>
            <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p>
        </div>
      </div>

      <div className="secondary">
        <div className="reading">
          { question
              ? <h1>{question}</h1>
              : null
          }
            <div className="flex-row cards">
              <div className="flex-col">
                <div className="item" style={{backgroundImage: `url(${this.props.cards[0].imgpath})`}}>
                  <h2>Past</h2>
                </div>
              </div>
              <div className="flex-col">
                <div className="item" style={{backgroundImage: `url(${this.props.cards[1].imgpath})`}}>
                  <h2>Present</h2>
                </div>
              </div>
              <div className="flex-col">
                <div className="item" style={{backgroundImage: `url(${this.props.cards[2].imgpath})`}}>
                  <h2>Future</h2>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="primary">
        <div className="reading">
          <h1>Interpreting Your Reading</h1>

          <div>
          { cards.map((card) =>

            <div className="flex-row">
              <div>
                <img src={card.imgpath} alt={card.name}/>
              </div>
              <div>
                <h2>{card.name}</h2>
                <p><strong>{card.keywords}</strong></p>
                { reversed
                  ? <p>{ card.shadow }</p>
                  : <p>{ card.light }</p>
                }
                { focus === 'work'
                  ? <p>{ card.focus_work }</p>
                  : null
                }
                { focus === 'relationships'
                  ? <p>{ card.focus_relationships }</p>
                  : null
                }
                { focus === 'spirituality'
                  ? <p>{ card.focus_spirituality }</p>
                  : null
                }
                { focus === 'personalgrowth'
                  ? <p>{ card.focus_personalgrowth }</p>
                  : null
                }
                { focus === 'fortunetelling'
                  ? <p>{ card.focus_fortunetelling }</p>
                  : null
                }
              </div>
            </div>
            )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class SpreadDirectional extends Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    reversed: PropTypes.bool.isRequired,
    focus: PropTypes.string.isRequired
  }

  state = {
    cards: this.props.cards,
    question: this.props.question,
    reversed: this.props.reversed,
    focus: this.props.focus,
    spread: TarotSpreads.threecards
  }

  render() {

    const { question, cards, reversed, focus } = this.state

    return (

    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the Directional Spread</h1>
          <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p>
        </div>
      </div>

      <div className="secondary">
        <div className="reading">
          { question
              ? <h1>{question}</h1>
              : null
          }
          <div className="flex-row cards">
            <div className="flex-col">
              <div className="item"
                style={{backgroundImage: `url(${this.props.cards[4].imgpath})`}}>
                <h2>West</h2>
              </div>
            </div>
            <div className="flex-col">
              <div className="item directional-north"
                style={{backgroundImage: `url(${this.props.cards[5].imgpath})`}}>
                <h2>North</h2>
              </div>
              <div className="item directional-center"
                style={{backgroundImage: `url(${this.props.cards[0].imgpath})`}}>
                <h2>Center</h2>
              </div>
              <div className="item rotated directional-union"
                style={{backgroundImage: `url(${this.props.cards[1].imgpath})`}}>
                <h2>Union</h2>
              </div>
              <div className="item"
                style={{backgroundImage: `url(${this.props.cards[3].imgpath})`}}>
                <h2>South</h2>
              </div>
            </div>
            <div className="flex-col">
              <div className="item"
                style={{backgroundImage: `url(${this.props.cards[2].imgpath})`}}>
                <h2>East</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="primary">
        <div className="reading">
          <h1>Interpreting Your Reading</h1>

          <div>
          { cards.map((card) =>

            <div className="flex-row">
              <div>
                <img src={card.imgpath} alt={card.name}/>
              </div>
              <div>
                <h2>{card.name}</h2>
                <p><strong>{card.keywords}</strong></p>
                { reversed
                  ? <p>{ card.shadow }</p>
                  : <p>{ card.light }</p>
                }
                { focus === 'work'
                  ? <p>{ card.focus_work }</p>
                  : null
                }
                { focus === 'relationships'
                  ? <p>{ card.focus_relationships }</p>
                  : null
                }
                { focus === 'spirituality'
                  ? <p>{ card.focus_spirituality }</p>
                  : null
                }
                { focus === 'personalgrowth'
                  ? <p>{ card.focus_personalgrowth }</p>
                  : null
                }
                { focus === 'fortunetelling'
                  ? <p>{ card.focus_fortunetelling }</p>
                  : null
                }
              </div>
            </div>
            )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class SpreadCelticCross extends Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    reversed: PropTypes.bool.isRequired,
    focus: PropTypes.string.isRequired
  }

  state = {
    cards: this.props.cards,
    question: this.props.question,
    reversed: this.props.reversed,
    focus: this.props.focus,
    spread: TarotSpreads.threecards
  }

  render() {

    const { question, cards, reversed, focus } = this.state

    return (

    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the Celtic Cross Spread</h1>
          <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p>
        </div>
      </div>

      <div className="secondary">
        <div className="reading">
          { question
              ? <h1>{question}</h1>
              : null
          }
          <div className="flex-row cards">
            <div className="flex-col">
              <div className="item"
                style={{backgroundImage: `url(${this.props.cards[3].imgpath})`}}>
                <h2>Card 4</h2>
              </div>
            </div>
            <div className="flex-col celticcross-col-second">
              <div className="item"
                style={{backgroundImage: `url(${this.props.cards[4].imgpath})`}}>
                <h2>Card 5</h2>
              </div>
              <div className="item celticcross-card-one"
                style={{backgroundImage: `url(${this.props.cards[0].imgpath})`}}>
                <h2>Card 1</h2>
              </div>
              <div className="item rotated celticcross-card-two"
                style={{backgroundImage: `url(${this.props.cards[1].imgpath})`}}>
                <h2>Card 2</h2>
              </div>
              <div className="item celticcross-card-three"
                style={{backgroundImage: `url(${this.props.cards[2].imgpath})`}}>
                <h2>Card 3</h2>
              </div>
            </div>
            <div className="flex-col celticcross-col-third">
              <div className="item"
                style={{backgroundImage: `url(${this.props.cards[5].imgpath})`}}>
                <h2>Card 6</h2>
              </div>
            </div>
            <div className="flex-col">
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[9].imgpath})`}}>
                <h2>Card 10</h2>
              </div>
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[8].imgpath})`}}>
                <h2>Card 9</h2>
              </div>
              <div className="item taller"
               style={{backgroundImage: `url(${this.props.cards[7].imgpath})`}}>
                <h2>Card 8</h2>
              </div>
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[6].imgpath})`}}>
                <h2>Card 7</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="primary">
        <div className="reading">
          <h1>Interpreting Your Reading</h1>

          <div>
          { cards.map((card) =>

            <div className="flex-row">
              <div>
                <img src={card.imgpath} alt={card.name}/>
              </div>
              <div>
                <h2>{card.name}</h2>
                <p><strong>{card.keywords}</strong></p>
                { reversed
                  ? <p>{ card.shadow }</p>
                  : <p>{ card.light }</p>
                }
                { focus === 'work'
                  ? <p>{ card.focus_work }</p>
                  : null
                }
                { focus === 'relationships'
                  ? <p>{ card.focus_relationships }</p>
                  : null
                }
                { focus === 'spirituality'
                  ? <p>{ card.focus_spirituality }</p>
                  : null
                }
                { focus === 'personalgrowth'
                  ? <p>{ card.focus_personalgrowth }</p>
                  : null
                }
                { focus === 'fortunetelling'
                  ? <p>{ card.focus_fortunetelling }</p>
                  : null
                }
              </div>
            </div>
            )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class SpreadTreeOfLife extends Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    reversed: PropTypes.bool.isRequired,
    focus: PropTypes.string.isRequired
  }

  state = {
    cards: this.props.cards,
    question: this.props.question,
    reversed: this.props.reversed,
    focus: this.props.focus,
    spread: TarotSpreads.threecards
  }

  render() {

    const { question, cards, reversed, focus } = this.state

    return (

    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the Tree of Life Spread</h1>
          <p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p>
        </div>
      </div>

      <div className="secondary">
        <div className="reading">
          { question
              ? <h1>{question}</h1>
              : null
          }
          <div className="flex-row cards treeoflife-row">
            <div className="flex-col treeoflife-col-one">
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[2].imgpath})`}}>
                <h2>Card 3</h2>
              </div>
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[4].imgpath})`}}>
                <h2>Card 5</h2>
              </div>
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[7].imgpath})`}}>
                <h2>Card 8</h2>
              </div>
            </div>
            <div className="flex-col">
              <a href="http://google.com" target="_blank" rel="noopener noreferrer"><div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[0].imgpath})`}}>
                <h2>Card 1</h2>
              </div></a>
              <div className="item taller treeoflife-card-six"
                style={{backgroundImage: `url(${this.props.cards[5].imgpath})`}}>
                <h2>Card 6</h2>
              </div>
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[8].imgpath})`}}>
                <h2>Card 9</h2>
              </div>
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[9].imgpath})`}}>
                <h2>Card 10</h2>
              </div>
            </div>
            <div className="flex-col treeoflife-col-three">
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[1].imgpath})`}}>
                <h2>Card 2</h2>
              </div>
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[3].imgpath})`}}>
                <h2>Card 4</h2>
              </div>
              <div className="item taller"
                style={{backgroundImage: `url(${this.props.cards[6].imgpath})`}}>
                <h2>Card 7</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="primary">
        <div className="reading">
          <h1>Interpreting Your Reading</h1>

          <div>
          { cards.map((card) =>

            <div className="flex-row">
              <div>
                <img src={card.imgpath} alt={card.name}/>
              </div>
              <div>
                <h2>{card.name}</h2>
                <p><strong>{card.keywords}</strong></p>
                { reversed
                  ? <p>{ card.shadow }</p>
                  : <p>{ card.light }</p>
                }
                { focus === 'work'
                  ? <p>{ card.focus_work }</p>
                  : null
                }
                { focus === 'relationships'
                  ? <p>{ card.focus_relationships }</p>
                  : null
                }
                { focus === 'spirituality'
                  ? <p>{ card.focus_spirituality }</p>
                  : null
                }
                { focus === 'personalgrowth'
                  ? <p>{ card.focus_personalgrowth }</p>
                  : null
                }
                { focus === 'fortunetelling'
                  ? <p>{ card.focus_fortunetelling }</p>
                  : null
                }
              </div>
            </div>
            )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {

  state = {
    cards: TarotCards.cards
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={({ history }) => (
            <div className="primary">
              <Header />
              <FormGetAReading cards={this.state.cards}/>
            </div>          )}/>
          <Route path='*' render={({ history }) => (
            <div className="primary">
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
