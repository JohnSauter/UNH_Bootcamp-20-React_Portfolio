import "./Portfolio.css";

function Portfolio(props) {
  /* Display six applications with links to both the deployed
   * application and the corresponding GitHub repository.
   */
  return (
    <div className="portfolio_container">
      <div className="item_container">
        <h1>Find Dry Chargers</h1>
        <p className="item">
          <img
            src="./assets/images/find_dry_chargers.png"
            alt="screenshot for Find Dry Chargers application"
            width="300px"
          />
        </p>
        <p className="item">GitHub URL:</p>
        <p className="item">
          <a
            href="https://github.com/Jay3172/Find_Dry_Chargers"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/Jay3172/Find_Dry_Chargers
          </a>
        </p>
        <p className="item">Deployment URL:</p>
        <p className="item">
          <a
            href="https://jay3172.github.io/Find_Dry_Chargers/"
            rel="noreferrer"
            target="_blank"
          >
            https://jay3172.github.io/Find_Dry_Chargers/
          </a>
          .
        </p>
      </div>

      <div className="item_container">
        <h1>Tech Blog</h1>
        <p className="item">
          <img
            src="./assets/images/The_Tech_Blog.png"
            alt="Screenshot of Tech Blog application"
            width="300px"
          />
        </p>
        <p className="item">GitHub URL:</p>
        <p className="item">
          <a
            href="https://github.com/JohnSauter/UNH_Bootcamp-14-Tech_Blog"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/JohnSauter/UNH_Bootcamp-14-Tech_Blog
          </a>
        </p>
        <p className="item">Deployment URL:</p>
        <p className="item">
          <a
            href="https://damp-sea-07082.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            https://damp-sea-07082.herokuapp.com/
          </a>
          .
        </p>
      </div>
      
      <div className="item_container">
        <h1>Employee Tracker</h1>
        <p className="item">
          <img
            src="./assets/images/Employee_tracker.jpg"
            alt="screenshot for Employee Tracker application"
            width="300px"
          />
        </p>
        <p className="item">GitHub URL:</p>
        <p className="item">
          <a
            href="https://github.com/JohnSauter/UNH_Bootcamp-12-Employee_Tracker"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/JohnSauter/UNH_Bootcamp-12-Employee_Tracker
          </a>
        </p>
        <p className="item">Walkthrough URL:</p>
        <p className="item">
          <a
            href="https://github.com/JohnSauter/UNH_Bootcamp-12-Employee_Tracker/blob/main/videos/Walkthrough.mp4"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/JohnSauter/UNH_Bootcamp-12-Employee_Tracker/blob/main/videos/Walkthrough.mp4
          </a>
          .
        </p>
      </div>

      <div className="item_container">
        <h1>Weather Dashboard</h1>
        <p className="item">
          <img
            src="./assets/images/Weather_Dashboard.png"
            alt="screenshot for Weather Dashboard application"
            width="300px"
          />
        </p>
        <p className="item">GitHub URL:</p>
        <p className="item">
          <a
            href="https://github.com/JohnSauter/UNH_bootcamp-06-Weather_Dashboard"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/JohnSauter/UNH_bootcamp-06-Weather_Dashboard
          </a>
        </p>
        <p className="item">Deployment URL:</p>
        <p className="item">
          <a
            href="https://johnsauter.github.io/UNH_bootcamp-06-Weather_Dashboard/"
            rel="noreferrer"
            target="_blank"
          >
            https://johnsauter.github.io/UNH_bootcamp-06-Weather_Dashboard/
          </a>
          .
        </p>
      </div>

      <div className="item_container">
        <h1>Plant Selection Planner</h1>
        <p className="item">
          <img
            src="./assets/images/plant_selection_planner.png"
            alt="screenshot for Plant Selection Planner application"
            width="300px"
          />
        </p>
        <p className="item">GitHub URL:</p>
        <p className="item">
          <a
            href="https://github.com/JohnSauter/plant_selection_planner"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/JohnSauter/plant_selection_planner
          </a>
        </p>
        <p className="item">Deployment URL:</p>
        <p className="item">
          <a
            href="https://beautiful-yosemite-29690.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            https://beautiful-yosemite-29690.herokuapp.com/
          </a>
          .
        </p>
      </div>

      <div className="item_container">
        <h1>Horiseon</h1>
        <p className="item">
          <img
            src="./assets/images/Horiseon.png"
            alt="screenshot of Horiseon web site"
            width="300px"
          />
        </p>
        <p className="item">GitHub URL:</p>
        <p className="item">
          <a
            href="https://github.com/JohnSauter/UNH_bootcamp-01-Sauter-Horiseon"
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/JohnSauter/UNH_bootcamp-01-Sauter-Horiseon
          </a>
        </p>
        <p className="item">Deployment URL:</p>
        <p className="item">
          <a
            href="https://johnsauter.github.io/UNH_bootcamp-01-Sauter-Horiseon/"
            rel="noreferrer"
            target="_blank"
          >
            https://johnsauter.github.io/UNH_bootcamp-01-Sauter-Horiseon/
          </a>
          .
        </p>
      </div>
    </div>
  );
}
export default Portfolio;
