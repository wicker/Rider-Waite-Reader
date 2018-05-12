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
      </header>

    )
  }
}

class Footer extends Component {

  render() {
    return (

      <footer>
        <p>This site uses public domain meanings from <a href="http://tarottools.com/a-guide-to-tarot-card-meanings/">Mark McElroy</a> and public domain art scanned by <a href="https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck">Holly Voley</a></p>
      </footer>

    )
  }
}

class TryAnotherReading extends Component {

  render() {
    return (

      <div className="tertiary-container">
        <p className="submit tertiary"><a href="/">Click for another reading.</a></p>
      </div>

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
      var c = fullTarotDeck[randCard];
      if (this.state.reversed) {
        c.reversed = Math.random() >= 0.5;
        console.log(c.reversed);
      } else {
        c.reversed = false;
      }
      c.focus = this.state.focus;
      dealtCards.push(c);
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
                    />
                    <TryAnotherReading />
                    <Footer />
                  </div>
                 )
        case 'threecard':
          return (<div>
                    <SpreadThreeCard
                      question={this.state.question}
                      cards={this.state.cardResult}
                      reversed={this.state.reversed}
                      focus={this.state.focus}
                    />
                    <TryAnotherReading />
                    <Footer />
                  </div>
                 )
        case 'directional':
          return (<div>
                    <SpreadDirectional
                      question={this.state.question}
                      cards={this.state.cardResult}
                      focus={this.state.focus}
                    />
                    <TryAnotherReading />
                    <Footer />
                  </div>
                 )
        case 'celticcross':
          return (<div>
                    <SpreadCelticCross
                      question={this.state.question}
                      cards={this.state.cardResult}
                      reversed={this.state.reversed}
                      focus={this.state.focus}
                    />
                    <TryAnotherReading />
                    <Footer />
                  </div>
                 )
        case 'treeoflife':
          return (<div>
                    <SpreadTreeOfLife
                      question={this.state.question}
                      cards={this.state.cardResult}
                      reversed={this.state.reversed}
                      focus={this.state.focus}
                    />
                    <TryAnotherReading />
                    <Footer />
                  </div>
                 )
        default:
          return (<Redirect to="/" />)
      }
    } else {
      return (
        <div className="test">
          <form onSubmit={this.handleSubmit}>
            <div className="clear padded">
              <h4>Enter your question</h4>
              <input className="textbox" type="text" name="question" onChange={this.handleChange}/>
            </div>
            <div className="clear padded">
              <h4>Choose a spread</h4>
              <label><input type="radio" name="layout" value="onecard"
                defaultChecked onChange={this.handleChange}/><span>One Card</span></label>
              <label><input type="radio" name="layout" value="threecard"
                onChange={this.handleChange}/><span>Three Cards</span></label>
              <label><input type="radio" name="layout" value="directional"
                onChange={this.handleChange}/><span>Directional</span></label>
              <label><input type="radio" name="layout" value="celticcross"
                onChange={this.handleChange}/><span>Celtic Cross</span></label>
              <label><input type="radio" name="layout" value="treeoflife"
                onChange={this.handleChange}/><span>Tree of Life</span></label>
            </div>
            <div className="clear padded">
              <h4>Focus of the reading?</h4>
              <label><input type="radio" name="focus" value="none"
                defaultChecked onChange={this.handleChange}/><span>None</span></label>
              <label><input type="radio" name="focus" value="relationships"
                onChange={this.handleChange}/><span>Relationships</span></label>
              <label><input type="radio" name="focus" value="work"
                onChange={this.handleChange}/><span>Work</span></label>
              <label><input type="radio" name="focus" value="spiritual"
                onChange={this.handleChange}/><span>Spiritual</span></label>
              <label><input type="radio" name="focus" value="personalgrowth"
                onChange={this.handleChange}/><span>Personal Growth</span></label>
              <label><input type="radio" name="focus" value="fortunetelling"
                onChange={this.handleChange}/><span>Fortunetelling</span></label>
            </div>
            <div className="clear padded">
              <h4>Allow reversed cards?</h4>
              <label><input type="radio" name="reversed" value="false"
                defaultChecked onChange={this.handleChange}/><span>No</span></label>
              <label><input type="radio" name="reversed" value="true"
                onChange={this.handleChange}/><span>Yes</span></label>

            </div>
            <div className="clear padded">
              <h4>Concentrate on your question...</h4>
              <input className="submit" type="submit" value="Click to shuffle!" />
            </div>
          </form>
        </div>
      )
    }
  }
}

class CardDescription extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
  }

  state = {
    card: this.props.card
  }

  render() {

    const { card } = this.props;

    return (
      <div key={card.name} className="flex-row-descriptions">
        <div>
          { card.reversed
            ? <div className="item-description reversed"
                style={{backgroundImage: `url(${card.imgpath})`}}
                alt={card.name}
              />
            : <div className="item-description"
                style={{backgroundImage: `url(${card.imgpath})`}}
                alt={card.name}
              />
          }
        </div>
        <div className="card-description">
          <h2>{card.name}</h2>
          <h3>{card.keywords}</h3>
          { card.reversed
            ? <p>{ card.shadow }</p>
            : <p>{ card.light }</p>
          }
          { card.focus === 'work'
            ? <div>
                <p>{ card.focus_work }</p>
              </div>
            : null
          }
          { card.focus === 'relationships'
            ? <div>
                <p>{ card.focus_relationships }</p>
              </div>
            : null
          }
          { card.focus === 'spirituality'
            ? <div>
                <p>{ card.focus_spirituality }</p>
              </div>
            : null
          }
          { card.focus === 'personalgrowth'
            ? <div>
                <p>{ card.focus_personalgrowth }</p>
              </div>
            : null
          }
          { card.focus === 'fortunetelling'
            ? <div>
                <p>{ card.focus_fortunetelling }</p>
              </div>
            : null
          }
        </div>
      </div>
    )

  }
}

class SpreadOneCard extends Component {

  static propTypes = {
    card: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
  }

  state = {
    cards: this.props.card,
    question: this.props.question,
  }

  render() {

    const { question, cards } = this.state;

    return (
      <div>
        <div className="primary">
          <div className="reading">
            <h1>About the One Card Spread</h1>
              <p className="center">Especially suited for a daily drawing for contemplation, the single card spread gives you a brief, succint, direct answer.</p>
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
                { cards[0].reversed
                  ? <div className="item reversed" style={{backgroundImage: `url(${cards[0].imgpath})`}} />
                  : <div className="item" style={{backgroundImage: `url(${cards[0].imgpath})`}} />
                }
                </div>
              </div>
          </div>
        </div>

        <div className="primary">
          <div className="reading">
            <h1>Interpreting Your Reading</h1>

            <div>
              { cards.map((card) =>
                <CardDescription card={card} key={card.name} />
              )}
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
  }

  state = {
    cards: this.props.cards,
    question: this.props.question,
  }

  render() {

    const { question, cards } = this.state

    return (

    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the Three Card Spread</h1>
          <p className="center">
            Shows the past, present, and future surrounding the situation of your question.
          </p>
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
                <div className={"item " + (cards[0].reversed ? 'reversed' : '')}
                  style={{backgroundImage: `url(${this.props.cards[0].imgpath})`}}>
                  <h2>Past</h2>
                </div>
              </div>
              <div className="flex-col">
                <div className={"item " + (cards[1].reversed ? 'reversed' : '')}
                  style={{backgroundImage: `url(${this.props.cards[1].imgpath})`}}>
                  <h2>Present</h2>
                </div>
              </div>
              <div className="flex-col">
              {console.log(this.props.cards[2].reversed)}
                <div className={"item " + (cards[2].reversed ? 'reversed' : '')}
                  style={{backgroundImage: `url(${this.props.cards[2].imgpath})`}}>
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
              <CardDescription card={card} key={card.name} />
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
    focus: PropTypes.string.isRequired
  }

  state = {
    cards: this.props.cards,
    question: this.props.question,
    focus: this.props.focus,
    spread: TarotSpreads.threecards
  }

  render() {

    const { question, cards } = this.state

    return (

    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the Directional Spread</h1>
          <p className="center">This magician's spread shows the influences of the four directions on the situation.</p>
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
              <div className={"item " + (cards[4].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[4].imgpath})`}}>
              </div>
            </div>
            <div className="flex-col">
              <div className={"item directional-north " + (cards[5].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[5].imgpath})`}}>
              </div>
              <div className={"item directional-center " + (cards[0].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[0].imgpath})`}}>
              </div>
              <div className={"item " + (cards[1].reversed ? 'rotated-reversed' : 'rotated')}
                style={{backgroundImage: `url(${this.props.cards[1].imgpath})`}}>
              </div>
              <div className={"item " + (cards[3].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[3].imgpath})`}}>
              </div>
            </div>
            <div className="flex-col">
              <div className={"item " + (cards[2].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[2].imgpath})`}}>
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
              <CardDescription card={card} key={card.name} />
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

    const { question, cards } = this.state

    return (

    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the Celtic Cross Spread</h1>
          <p className="center">The classic, best known tarot spread.</p>
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
              <div className={"item " + (cards[2].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[2].imgpath})`}}>
              </div>
            </div>
            <div className="flex-col celticcross-col-second">
              <div className={"item " + (cards[4].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[4].imgpath})`}}>
              </div>
              <div className={"item celticcross-card-one " + (cards[0].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[0].imgpath})`}}>
              </div>
              <div className={"item celticcross-card-two "
                + (cards[1].reversed ? 'rotated-reversed' : 'rotated')}
                style={{backgroundImage: `url(${this.props.cards[1].imgpath})`}}>
              </div>
              <div className={"item celticcross-card-three " + (cards[5].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[5].imgpath})`}}>
              </div>
            </div>
            <div className="flex-col celticcross-col-third">
              <div className={"item " + (cards[3].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[3].imgpath})`}}>
              </div>
            </div>
            <div className="flex-col">
              <div className={"item taller " + (cards[9].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[9].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[8].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[8].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[7].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[7].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[6].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[6].imgpath})`}}>
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
              <CardDescription card={card} key={card.name} />
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

    const { question, cards } = this.state

    return (

    <div>
      <div className="primary">
        <div className="reading">
          <h1>About the Tree of Life Spread</h1>
          <p className="center">Based on the Sephirot of the Kabbalah, this is a comprehensive spread.</p>
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
              <div className={"item taller " + (cards[2].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[2].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[4].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[4].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[7].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[7].imgpath})`}}>
              </div>
            </div>
            <div className="flex-col">
              <div className={"item taller " + (cards[0].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[0].imgpath})`}}>
              </div>
              <div className={"item taller treeoflife-card-six " + (cards[5].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[5].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[8].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[8].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[9].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[9].imgpath})`}}>
              </div>
            </div>
            <div className="flex-col treeoflife-col-three">
              <div className={"item taller " + (cards[1].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[1].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[3].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[3].imgpath})`}}>
              </div>
              <div className={"item taller " + (cards[6].reversed ? 'reversed' : '')}
                style={{backgroundImage: `url(${this.props.cards[6].imgpath})`}}>
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
              <CardDescription card={card} key={card.name} />
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
          <Route path='/' render={({ history }) => (
            <div className="primary">
              <Header />
              <FormGetAReading cards={this.state.cards}/>
            </div>
          )}/>
        </Switch>

      </div>
    );
  }
}

export default App;
