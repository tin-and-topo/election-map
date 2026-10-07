/*
 * Hamilton County, Tennessee election information.
 * Source: Hamilton County Election Commission, retrieved 2026-10-07.
 * This is a reviewed static snapshot, not a live feed. Verify all information
 * against the linked official sources before each publication or election.
 */
(function () {
  "use strict";

  var official = {
    election: "State and Federal General Election",
    date: "Tuesday, November 3, 2026",
    earlyVoting: "Early voting: October 14–29, 2026",
    ballotNote: "This countywide overview is based on the Election Commission’s generic sample ballot. Your contests may vary by residence; use the official voter lookup for your specific ballot.",
    pollingNote: "These are countywide early-voting sites. Election Day polling places are assigned by precinct—use the official lookup before you travel.",
    ballot: [
      { contest: "Governor", candidates: ["Marsha Blackburn (Republican Party Nominee)", "Jerri Green (Democratic Party Nominee)", "Misam Abidi (Independent Candidate)", "Dean Brewer (Independent Candidate)", "Ray Brown (Independent Candidate)", "David Hatley (Independent Candidate)", "Wendell Jackson (Independent Candidate)", "Charles Van Morgan (Independent Candidate)", "Eddie Lee Murphy (Independent Candidate)", "Lauren Pinkston (Independent Candidate)", "Victor L. Scoggin (Independent Candidate)", "Dave Seeman (Independent Candidate)", "Karl Knox Smithson (Independent Candidate)", "L. Webb Taylor (Independent Candidate)", "Robert C. Vick (Independent Candidate)"] },
      { contest: "United States Senate", candidates: ["Bill Hagerty (Republican Party Nominee)", "Marquita Bradshaw (Democratic Party Nominee)", "Tharon Chandler (Independent Candidate)", "Andrew Gerena (Independent Candidate)", "Jeremy Dean Hearn (Independent Candidate)", "Robert Jones (Independent Candidate)", "James William Macon III (Independent Candidate)", "Yoshi D. Matthews (Independent Candidate)", "David Sutman, Jr. (Independent Candidate)", "Catherine Barcel \"Barcy\" Whitson (Independent Candidate)"] },
      { contest: "United States House, District 3", candidates: ["Chuck Fleischmann (Republican Party Nominee)", "Anna Golladay (Democratic Party Nominee)", "Dean Arnold (Independent Candidate)", "Jean Howard-Hill (Independent Candidate)", "Rodney Joe King (Independent Candidate)", "Donnie Lynn Ownby (Independent Candidate)", "Edward John Roland (Independent Candidate)"] },
      { contest: "Tennessee Senate, District 11", candidates: ["Bo Watson (Republican Party Nominee)", "Tim Roberts (Democratic Party Nominee)"] }
    ],
    issues: [
      "Constitutional Amendment 1: proposed changes to pretrial bail rules for specified serious offenses.",
      "Constitutional Amendment 2: proposed prohibition on a state property tax.",
      "Constitutional Amendment 3: proposed crime-victims’ rights changes."
    ],
    resources: [
      { label: "Find your assigned Election Day polling place and specific sample ballot", url: "https://voterlookup.hamiltontn.gov/" },
      { label: "View the official generic sample ballot and full amendment text", url: "https://elect.hamiltontn.gov/Portals/12/HTML/GenSample.html" },
      { label: "Browse all 79 official Election Day polling locations", url: "https://elect.hamiltontn.gov/ed.aspx" },
      { label: "Open the Hamilton County Election Commission’s interactive election map", url: "https://gismaps.hamiltontn.gov/electionmap" },
      { label: "Review Tennessee photo ID requirements", url: "https://sos.tn.gov/elections/voter-id-requirements" }
    ]
  };

  function earlyVotingSite(name, address, weekdayHours, saturdayHours) {
    return {
      name: name,
      description: "Official Hamilton County early-voting site.",
      election: official.election,
      date: official.date,
      earlyVoting: official.earlyVoting,
      pollingNote: official.pollingNote,
      locations: [{ name: name, address: address, hours: "Monday–Friday: " + weekdayHours + " · Saturday: " + saturdayHours }],
      ballotNote: official.ballotNote,
      ballot: official.ballot,
      issues: official.issues,
      resources: official.resources
    };
  }

  window.ELECTION_DATA = {
    election_commission: earlyVotingSite("Election Commission", "700 River Terminal Rd, Chattanooga, TN 37406", "8:00 a.m.–7:00 p.m.", "8:00 a.m.–4:00 p.m."),
    brainerd: earlyVotingSite("Chris L. Ramsey Sr. Community Center", "1010 N Moore Rd, Chattanooga, TN 37411", "10:00 a.m.–6:00 p.m.", "10:00 a.m.–4:00 p.m."),
    collegedale: earlyVotingSite("Collegedale Commons (Chestnut Hall)", "4950 Swinyar Dr, Collegedale, TN 37363", "10:00 a.m.–6:00 p.m.", "10:00 a.m.–4:00 p.m."),
    hixson: earlyVotingSite("Hixson Community Center", "5401 School Dr, Hixson, TN 37343", "10:00 a.m.–6:00 p.m.", "10:00 a.m.–4:00 p.m."),
    harrison: earlyVotingSite("Harrison Center (Old Harrison Elementary)", "5637 Hwy 58, Harrison, TN 37341", "10:00 a.m.–6:00 p.m.", "10:00 a.m.–4:00 p.m."),
    soddy_daisy: earlyVotingSite("Soddy Daisy Community Center", "190 Depot St, Soddy Daisy, TN 37379", "10:00 a.m.–6:00 p.m.", "10:00 a.m.–4:00 p.m.")
  };
}());
