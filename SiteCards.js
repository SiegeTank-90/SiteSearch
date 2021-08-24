import React from "react";
import "../CSS/Styles.css";
import Data from "../Data/SiteNumbers";

function SiteCards() {
  const siteInfromation = Data;

  return (
    <div className="container">
      {siteInfromation.map((site, key) => 
          <div className="Cards">
           <pre style={{textAlign: "left"}}> 
            <strong>{site.name}               {site.marshaCode} <br></br>
            Site ID: {site.siteID} </strong> <br></br>
            <br></br>
            Total Boxes:          {site.totalSTBs} <br></br>
            STBs Online:          {site.totalSTBsOnline} <br></br>
            Site Down:            <span style={{color: "red" }}>{site.totalSTBsDown}</span> <br></br>
            Site IP Address:      {site.siteIPaddress} <br></br>
            Update Time           {site.updateday} {site.updatetime} <br></br>
            </pre>
          </div>
        )}
    </div>
  );
}

export default SiteCards
