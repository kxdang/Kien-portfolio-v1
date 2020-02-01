import React from "react";

const ProjectList = () => (
  <table>
    <tr>
      <th>Year</th>
      <th>Project Name</th>
      <th>Built with</th>
      <th>Link</th>
    </tr>
    <tr className="table_light">
      <td>2019</td>
      <td>
        <a href="#">Places App</a>
      </td>
      <td>React · Express · Node.js · Firebase · Heroku</td>
      <td>Github - External Link</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>Places App</td>
      <td>React - Express Node.js Firebase Heroku</td>
      <td>Github - External Link</td>
    </tr>
  </table>
);

export default ProjectList;
