import "./Project.css";
import React, { useState } from "react";

/* React component to present a project.  Properties are:
 * title: the name of the project
 * image_src: Location of the picture for this project
 * image_alt: alternate text for the image, defaults to screenshot for title
 * URL1: the URL for the GitHub location of the project
 * URL1_label: the label for URL1, defaults to GitHub URL
 * URL2: the URL for the deployement or walkthrough
 * URL2_label: the label for URL2, defaults to Deployment URL
 * description: a brief description of the project
 */
function Project(props) {
  const [the_size, setThe_size] = useState("small");

  let project_size = props.size;
  if (!project_size) {
    project_size = the_size;
  }

  const title = props.title;
  const image_src = props.image_src;
  let image_alt = props.image_alt;
  if (!image_alt) {
    image_alt = "screenshot for " + title;
  }
  const URL1 = props.URL1;
  let URL1_label = props.URL1_label;
  if (!URL1_label) {
    URL1_label = "GitHub URL";
  }

  const URL2 = props.URL2;
  let URL2_label = props.URL2_label;
  if (!URL2_label) {
    URL2_label = "Deployment URL";
  }

  let image_size = "";
  if (project_size === "large") {
    image_size = "250px";
  } else {
    image_size = "250px";
  }
  const description = props.description;

  function handle_mouse_enter(e) {
    setThe_size("large");
  }
  function handle_mouse_leave(e) {
    setThe_size("small");
  }

  if (project_size === "large") {
    return (
      <div
        className="project_container_large"
        onMouseEnter={handle_mouse_enter}
        onMouseLeave={handle_mouse_leave}
      >
        <h1>{title}</h1>
        <p className="project_item_large">
          <a href={URL2} rel="noreferrer" target="_blank">
            <img src={image_src} alt={image_alt} width={image_size}></img>
          </a>
        </p>
        <p className="project_item_large">
          <a href={URL1} rel="noreferrer" target="_blank">
            {URL1_label}
          </a>
        </p>
        <p className="project_item_large">
          <a href={URL2} rel="noreferrer" target="_blank">
            {URL2_label}
          </a>
        </p>
        <p className="project_item_large">{description}</p>
      </div>
    );
  } else {
    return (
      <div
        className="project_container_small"
        onMouseEnter={handle_mouse_enter}
        onMouseLeave={handle_mouse_leave}
      >
        <h1>{title}</h1>
        <p className="project_item_small">
          <img src={image_src} alt={image_alt} width={image_size} />
        </p>
        <p className="project_item_small">
          <a href={URL1} rel="noreferrer" target="_blank">
            {URL1_label}
          </a>
        </p>
        <p className="project_item_small">
          <a href={URL2} rel="noreferrer" target="_blank">
            {URL2_label}
          </a>
        </p>
        <p className="project_item_small">{description}</p>
      </div>
    );
  }
}
export default Project;
