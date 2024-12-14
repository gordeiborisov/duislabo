<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Step Curve Example</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
<script>
    const data = [
        { x: 0, y: 5 },
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 }
    ];

    const width = 500;
    const height = 300;

    const svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    const xScale = d3.scaleLinear()
        .domain([0, 3])
        .range([50, width - 50]);

    const yScale = d3.scaleLinear()
        .domain([0, 20])
        .range([height - 50, 50]);

    const lineGenerator = d3.line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))
        .curve(d3.curveStep);

    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("d", lineGenerator);
</script>
</body>
</html>
