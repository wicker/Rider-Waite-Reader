import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">The Rider-Waite Reader</h1>
          <nav>
            <ul>
              <li>Get a Reading</li>
              <li>History</li>
              <li>Layouts</li>
            </ul>
          </nav>
        </header>

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

				<section className="reading" style={{border: 0}}>
					<h1>History</h1>
					<p>Essay!</p>
				</section>

				<section>
					<h1>Layouts</h1>
				</section>

				<section className="reading">
					<h1>One Card</h1>
					<p>Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo Lorem ipsum deo</p>
					<div className="flex-row cards">
						<div className="flex-col">
							<div className="item"  style={{backgroundImage: `url("img/pents09.jpg")`}}>
							</div>
						</div>
					</div>
				</section>


      </div>
    );
  }
}

export default App;
