// This template has 7 tasks for you to complete. Each task is marked with a TO-DO comment.
// I recommend going in this order:
// 1. Load the stock data from CSV files in preload()
// 2. Populate the prices array with the stock prices in drawStockChart()
// 3. Label the top and bottom values of the Y-axis
// 4. Calculate the mean price of the stock and draw a dashed line for it
// 5. Draw the actual line chart for the stock prices
// 6. Compute the coordinates for the minimum and maximum price points
// 7. Compute whether the mouse is hovering over the minimum or maximum price points

// List of stocks to visualize
let stocks = ["AAPL", "AMZN", "AVGO", "BRK-B", "COST", "GOOG", "JPM", "LLY", "MA", "META", "MSFT", "NVDA", "ORCL", "TCEHY", "TSLA", "TSM", "UNH", "V", "WMT", "XOM"];
// Margin space between charts
let margin = 40;
// Number of columns in the grid layout
let cols = 5;
let rows;
let chartWidth, chartHeight;
let stockData = {};
let tooltip = "";   
let tooltipX = 0, tooltipY = 0;

// Preload stock data from CSV files before setup
function preload() {
    // TODO: Load stock data from CSV files
}

// Setup function to initialize canvas and layout
function setup() {
    createCanvas(windowWidth, windowHeight);
    rows = ceil(stocks.length / cols);
    chartWidth = (width - margin * (cols + 1)) / cols;
    chartHeight = (height - margin * (rows + 1)) / rows;
}

// Main draw loop to render all stock charts
function draw() {
    background(255);
    
    // Draw title at the top of the canvas
    fill(0);
    textSize(20);
    textAlign(CENTER, TOP);
    text("Top 20 NASDAQ Stocks, March 2024-March 2025", width / 2, height/2);
    
    tooltip = "";
    background(255);
    tooltip = "";
    
    for (let i = 0; i < stocks.length; i++) {
        let stock = stocks[i];
        let x = margin + (i % cols) * (chartWidth + margin);
        let y = margin + floor(i / cols) * (chartHeight + margin);
        drawStockChart(stock, stockData[stock], x, y, chartWidth, chartHeight);
    }
    
    // Draw tooltip with background
    if (tooltip !== "") {
        fill(255,100);
        stroke(0);
        rect(tooltipX, tooltipY, textWidth(tooltip) + 15, 18, 5);
        fill(0);
        noStroke();
        textSize(12);
        textAlign(LEFT, TOP);
        text(tooltip, tooltipX+2, tooltipY+2);
    }
}

// Function to draw an individual stock chart
function drawStockChart(stock, table, x, y, w, h) {
    let prices = [];
    // TO-DO: Extract stock prices from the table and store them in the prices array
    // Hint: push() adds things to the end of an array; unshift() adds them to the beginning

    let minPrice = min(prices);
    let maxPrice = max(prices);
    let priceRange = maxPrice - minPrice;
    // Here, we compute adjustedMin/Max so that the line chart doesn't go all the way to the edges of the y-axis.
    // This makes things look nicer, especially when we add the min/max points.
    let buffer = priceRange * 0.1;
    let adjustedMin = minPrice - buffer;
    let adjustedMax = maxPrice + buffer;
    
    noStroke();
    fill(0);
    textSize(14);
    textAlign(CENTER, TOP);
    text(stock, x + w / 2, y - 5);
    
    // Draw axes
    stroke(0);
    line(x, y, x, y + h); // Y-axis
    line(x, y + h, x + w, y + h); // X-axis
    
    // Draw monthly ticks on x-axis
    let numMonths = 12;
    textSize(10);
    textAlign(CENTER, TOP);
    fill(0);
    for (let i = 0; i <= numMonths; i++) {
        let px = map(i, 0, numMonths, x, x + w);
        line(px, y + h, px, y + h + 5); // Tick mark
    }
    
    // TO-DO: Label the top and bottom values of the Y-axis
    
    // TO-DO: Calculate the mean price of the stock
    let meanPrice;
    // TO-DO: Draw a dashed line showing the mean price of the stock
    // (hint: start by drawing a normal line first, then let us know when it works)
    let meanY;
    
    // Text label for mean value on the y-axis
    noStroke();
    fill(200, 0, 0);
    textSize(10);
    textAlign(RIGHT);
    text(round(meanPrice, 2), x - 5, meanY);
    
    noFill();
    stroke(50, 150, 50);
    beginShape();
    // TO-DO: Draw the line chart for the stock prices
    endShape();
    
    // TO-DO: Find the index of the minimum and maximum prices in the prices array
    let minIndex;
    let maxIndex;
    // TO-DO: Using the indices, compute the coordinates for the minimum and maximum price points
    let minX;
    let minY;
    let maxX;
    let maxY;

    fill(255, 0, 0);
    noStroke();
    // Draw a circle at the minimum price point
    circle(minX, minY, 8);
    // Draw a circle at the maximum price point
    circle(maxX, maxY, 8);
    
    // Check for hover
    if (true) { // TO-DO: Check for hover over the minimum price point (hint: use dist() and mouseX/mouseY)

    }
    if (true) { // TO-DO: Check for hover over the maximum price point (hint: use dist() and mouseX/mouseY)

    }
}
