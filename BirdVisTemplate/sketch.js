let table;
let speciesList = [];
let dataMap = {};
let colors = [];
let globalMaxCount = 1; // Global max across all species and weeks
let speciesToVisualize = -1; // To-Do: change this once you've implemented selectSpecies()!

function preload() { // Load the table (before the rest of the page!)
  table = loadTable("bird_data.csv", "csv", "header");
}

function setup() { // This runs once, at the start of the visualization
  createCanvas(1600, 900);
  selectSpecies(speciesToVisualize);
  processData();
  generateColors();
  textFont("Arial");
}

function selectSpecies(count) { // Randomly select a certain number of species
  let totalSpecies = table.getRowCount();
  let selectedIndices = [];
  while (selectedIndices.length < count) { // Keep looping until we have selected enough species

  }
}

function processData() { // Create a map of our data (mapping names to observations)
  for (let i = 0; i < speciesList.length; i++) {
    let speciesName = speciesList[i];
    dataMap[speciesName] = [];
    
    for (let r = 0; r < table.getRowCount(); r++) {
      if (table.getString(r, 0) === speciesName) {
        for (let c = 1; c < table.getColumnCount(); c++) {
          let count = int(table.getString(r, c));
          dataMap[speciesName].push(count);
          globalMaxCount = max(globalMaxCount, count);
        }
        break;
      }
    }
  }
}

function generateColors() { // Randomly generate colors for each of our species  
  for (let i = 0; i < speciesList.length; i++) {
    colors.push(color(150,150,150,150)); // To-Do: Make a random color each time
  }
}

function draw() { // The main function where all the visualization happens!
  background(200);
  
  let margin = 100;
  let rowHeight = (height - margin * 2) / speciesList.length;
  let minCircleSize = 0;
  let maxCircleSize = 150;

  let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Draw month lines and labels
  fill(0);
  textSize(16);
  textAlign(CENTER);
  for (let i = 0; i < monthNames.length; i++) {
    // To-Do Together: Let's add lines and labels for each month!
  }

  // Iterate through each of the species and draw them
  for (let i = 0; i < speciesList.length; i++) {
    let species = speciesList[i];
    let y = (i + 0.5) * rowHeight + margin;
    // To-Do: Draw a circle for each week of this species!


    // Text Labels: only show if there's space
    if (speciesToVisualize <= 30) {
      fill(0);
      textSize(14);
      textAlign(RIGHT, CENTER);
      text(species, margin * 1.9, y);
    }
  }

  // Title
  fill(0);
  textSize(22);
  textAlign(LEFT);
  textFont("Roboto");
  text("Bird Species Observations Per Week, New York City, 2021", 20, 30);
}
