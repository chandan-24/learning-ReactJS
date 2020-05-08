const React = require('react');


require('../styles/rewardProgram.css');
const RewardRow = require('./RewardRow');
const coinReward = require('../resources/coinReward.json')

class RewardProgram extends React.Component {
  render() {
    return (
      <section className="section-reward">
        <div className="reward">
          <div className="reward-head">
            <div>
              <h2>Earn up to $158 worth of crypto</h2>
              <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
              <a href="#" className="btn-full btn-earn"><p>Start earning</p></a>
            </div>
          </div>

          <div className="reward-main">
            <div className="reward-table">
                {coinReward.map((reward) => {
                  return(
                    <a href="#">
                      <RewardRow reward={reward}/>
                    </a>
                  )
                })}
              <a href="#">View more></a>
            </div>
          </div>
        </div>
      </section>
    );
  };
}

module.exports = RewardProgram;