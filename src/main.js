"use strict";

import { fetchVpts, readVpts } from "./modules/fetchVpts.js";
import { integrateProfile } from "./modules/integrateProfile.js";
import { plotVpts } from "./modules/plotVpts.js";
import { plotVpi } from "./modules/plotVpi.js";

// Read example data files
const filenames = fetchVpts("2016-09-01", "2016-09-03", "./data/")

const dataset = readVpts(filenames[0]);
const dataset1 = readVpts(filenames[0]);
const dataset2 = readVpts(filenames[1]);

// Define and bind (empty) chart
let vpiChart = plotVpi().width(700).height(350);
d3.select("#vpi-chart")
  .call(vpiChart);

// Load first dataset
dataset1.then(function(data) {
  let nestedData = d3.nest()
    .key(d => d.datetime) // group data by datetime
    .entries(data);
  let mtrProfile = nestedData.map(d => {
    return {
      datetime: d.key,
      mtr: integrateProfile(d.values)
    }
  });
  vpiChart.data(mtrProfile);
});

// Wait 1 second and load second dataset
// TODO: don't repeat parsing functionality
setTimeout(function() {
    dataset2.then(function(data) {
      let nestedData = d3.nest()
        .key(d => d.datetime) // group data by datetime
        .entries(data);
      let mtrProfile = nestedData.map(d => {
        return {
          datetime: d.key,
          mtr: integrateProfile(d.values)
        }
      });
      vpiChart.data(mtrProfile);
    });
  },
  1000
);
