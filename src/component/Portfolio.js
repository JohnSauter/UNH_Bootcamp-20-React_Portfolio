import "./Portfolio.css";
import Project from "./Project.js";

function Portfolio(props) {
  /* Display six applications with links to both the deployed
   * application and the corresponding GitHub repository.
   */
  return (
    <div className="portfolio_container">
      <Project
        title="Find Dry Chargers"
        image_src="./assets/images/find_dry_chargers.png"
        URL1="https://github.com/Jay3172/Find_Dry_Chargers"
        URL2="https://jay3172.github.io/Find_Dry_Chargers/"
      />

      <Project
        title="Tech Blog"
        image_src="./assets/images/The_Tech_Blog.png"
        URL1="https://github.com/JohnSauter/UNH_Bootcamp-14-Tech_Blog"
        URL2="https://damp-sea-07082.herokuapp.com/"
      />

      <Project
        title="Employee Tracker"
        image_src="./assets/images/Employee_tracker.jpg"
        URL1="https://github.com/JohnSauter/UNH_Bootcamp-12-Employee_Tracker"
        URL2="https://github.com/JohnSauter/UNH_Bootcamp-12-Employee_Tracker/blob/main/videos/Walkthrough.mp4"
        URL2_label="Walkthrough URL"
      />

      <Project
        title="Weather Dashboard"
        image_src="./assets/images/Weather_Dashboard.png"
        URL1="https://github.com/JohnSauter/UNH_bootcamp-06-Weather_Dashboard"
        URL2="https://johnsauter.github.io/UNH_bootcamp-06-Weather_Dashboard/"
      />

      <Project
        title="Plant Selection Planner"
        image_src="./assets/images/plant_selection_planner.png"
        URL1="https://github.com/JohnSauter/plant_selection_planner"
        URL2="https://beautiful-yosemite-29690.herokuapp.com/"
      />

      <Project
        title="Horiseon"
        image_href="./assets/images/Horiseon.png"
        URL1="https://github.com/JohnSauter/UNH_bootcamp-01-Sauter-Horiseon"
        URL2="https://johnsauter.github.io/UNH_bootcamp-01-Sauter-Horiseon/"
      />
    </div>
  );
}
export default Portfolio;
