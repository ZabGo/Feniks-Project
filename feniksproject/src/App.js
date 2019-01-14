import React, { Component,Router } from 'react';
import './css/feniks_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 fancybox">
            <form>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </form>
          </div>
        </div>

        <form>
          <div className="row">
            <div className="col-sm-6 fancybox">
              <input type="text" placeholder="Help me" className=""/>
            </div>
            <div className="col-sm-6 fancybox">
              <div className="form-group">
                <label for="usr">Name</label>
                <input type="text" className="form-control" id="usr" placeholder="HeLp Me ThIs HuRtS mY bRaIn"/>
              </div>
              <input type="text" placeholder="
F̸̢͚̣̜̰̝͍͇̥̊͒̈́́̓̽̃̏͑͢ǫ̱̘̩͓̺̬͎͍̏͆̊̋͑͝ṙ̨̡͚͙̻͚̼̪̥̩̇́́̓̍̾͒ẽ̩̲͖̣̫̂͋̈̌̚̚͠ņ͓̪̟̼̖͔͈̄̀̄͂̽̀̅̽a̡̢̹͙̹̟͇̫̟͉̐͌̔̓̆̃̈͂͘m̶̧̼͔̗͌͆̄̽̍͐̏̀̕͢͟ͅͅe̶̢͇̻̫̟͆͆͑͌͐̃̀͘͢͝" className="form-control"/>
              <input type="text" placeholder="
Ṣ̷̛̤͙̰̭̙͒̄̃̚͘ư̷̞̗̣͍͈̮̗͒̏̏͊̅́̔̄͢r̷̡̡̢̡̬̻̞̫͂̊͑̀̓ͅņ̰͙̰͖͇͑̏̓̒̒̾͌͒͑͢a̷͎̥̹̯̔͗͋̀͗͊̀̉͘ͅm̛̺̱̤̞̰̰̈̂͊͑͑͗̃̄ẽ͔͕̮̲̫̬̐͋̑̇
" className="form-control"/>
              <input type="text" placeholder="
B̮̰̰̼̳̦̥͍̰͐̽̐̊̐̊̔̚ͅl̸̡̹͉̠͍̣̣̾̅̓̈̎̒̕̚o̵̡̫̟̹̟̱͆̐͐̃̊͝o̴͖̤͉̼̐̐̃̾͑͢d̸̝̬̝̬͈̔̂̑̄̔͢ T̸̢̩͉͔̗͚̍̊̈́̃̄͌̉͗͋͗͜͜ͅy̢̪̣͙̰̬͓̆͒̋̇͟͠p̵̧͚̲͔̮̗̫͉̱̽͋̾̒͢͠ȩ̡̣̯̬̞̂́́̇͋̐͠
" className="form-control"/>
              <input type="text" placeholder="
Ḑ̢̛̮̗̟̤̔̃͊̎e̴̢̙͔̦̝͕̗̻̻͒̉͆̎̎̀l̨̛͚͕̠̠̘̹͇̟͔̑̀͒̓͘͝i̛̛̪̞̹̼̩̠͙̰̦̒̿̂̇̃͊̉̕͢c̸̢̹͓̥͕̥̰̫̲̣̈͐͑͂̒͂̋͐̕͡į̷̣̺̗͍̲̯̽̾͌͗̒̋̒̀̕͟͡o̶̲͔̳̦̠͖̭͉̊͌̆͛̉̉͡ù̴͔̦̱̭̠̄̊̐́͜͞s̢̢̡̰̗͍̘̣̐͗̌̾͑̕͠͡ M̡̮̱͓̠͚̠̳̬̑̎͊͌̿͡E̶̟̙̩̺͙̭͂̈̂͑̎̕̚ą̛͓̗̬̩̦̼͍̍͋́͊̕͢ț̴̺͇̪̞͊̇̒͆͑̈̓͛͌̕
" className="form-control"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
