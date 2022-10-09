/* Portfolio.js */

import "./Portfolio.css";
import Project from "./Project.js";

function Portfolio(props) {
    /* Display six or more applications with links to both the deployed
     * application and the corresponding GitHub repository.
     */
    return (
	<div className="portfolio_container">
	  <Project
            title="Find Dry Chargers"
            image_src="./assets/images/find_dry_chargers.png"
            URL1="https://github.com/Jay3172/Find_Dry_Chargers"
            URL2="https://jay3172.github.io/Find_Dry_Chargers/"
            description="Uses JavaScript, jQuery, the Foundation 
            framework and the Crypto package to find electric 
            vehicle chargers that are not being rained upon."
          />
          
          <Project
            title="Tech Blog"
            image_src="./assets/images/The_Tech_Blog.png"
            URL1="https://github.com/JohnSauter/UNH_Bootcamp-14-Tech_Blog"
            URL2="https://damp-sea-07082.herokuapp.com/"
            description="Uses HTML, CSS, JawsDB, express, handlebars,
            sequelize and JavaScript to provide a blog where you can
            initiate discussion topics and comment on them."
          />

          <Project
            title="Employee Tracker"
            image_src="./assets/images/Employee_tracker.jpg"
            URL1="https://github.com/JohnSauter/UNH_Bootcamp-12-Employee_Tracker"
            URL2="https://github.com/JohnSauter/UNH_Bootcamp-12-Employee_Tracker/blob/main/videos/Walkthrough.mp4"
            URL2_label="Walkthrough URL"
            description="Uses inquirer and mySQL to manage an employee database."
          />

          <Project
            title="Weather Dashboard"
            image_src="./assets/images/Weather_Dashboard.png"
            URL1="https://github.com/JohnSauter/UNH_bootcamp-06-Weather_Dashboard"
            URL2="https://johnsauter.github.io/Weather_Dashboard/"
            description="Uses HTML, CSS, JavaScript, JQuery, Bootstrap, Moment, 
            and two external web sites to display the weather at a specified location."
          />

          <Project
            title="Plant Selection Planner"
            image_src="./assets/images/plant_selection_planner.png"
            URL1="https://github.com/JohnSauter/plant_selection_planner"
            URL2="https://beautiful-yosemite-29690.herokuapp.com/"
            description="Uses JavaScript, HTML, CSS, Foundation for Sites,
            Node.js, Express.js, Handlebars.js, MySQL, GitHub, Heroku, 
            JawsDB, Sequelize, and nodemailer
            to save time for gardeners and nursery managers."
          />

          <Project
            title="Matchmaker"
            image_src="./assets/images/matchmaker.png"
            URL1="https://github.com/JohnSauter/Matchmaker"
            URL2="https://evening-reaches-22988.herokuapp.com/"
            description="Extending one of the earliest commercial uses
            of computers, Matchmaker allows seekers to create an account,
            a profile, and a wishlist of desired characteristics of their
            match."
          />

	  <Project
            title="Horiseon"
            image_src="./assets/images/Horiseon.png"
            URL1="https://github.com/JohnSauter/UNH_bootcamp-01-Sauter-Horiseon"
            URL2="https://johnsauter.github.io/UNH_bootcamp-01-Sauter-Horiseon/"
            description="Uses HTML and CSS to improve the appearance 
            and maintainability of a web site."
          />
        </div>
    );
}
export default Portfolio;
