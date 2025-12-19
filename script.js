function trapWater(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

function solve() {
    const heights = document.getElementById("input")
        .value.split(",").map(Number);

    const totalWater = trapWater(heights);
    document.getElementById("result").innerText =
        `Total Water Stored: ${totalWater} Units`;

    drawSVG(heights);
}

function drawSVG(heights) {
    const svg = document.getElementById("svg");
    svg.innerHTML = "";

    const barWidth = 40;
    const scale = 20;
    const maxHeight = Math.max(...heights);

    const leftMax = [];
    const rightMax = [];

    heights.reduce((max, h, i) => leftMax[i] = max = Math.max(max, h), 0);
    heights.reduceRight((max, h, i) => rightMax[i] = max = Math.max(max, h), 0);

    heights.forEach((h, i) => {
        const x = i * barWidth + 20;
        const blockHeight = h * scale;
        const y = 250 - blockHeight;

        // Block
        svg.innerHTML += `
          <rect x="${x}" y="${y}" width="${barWidth - 5}"
            height="${blockHeight}" fill="#555" />
        `;

        // Water
        const waterHeight =
            Math.min(leftMax[i], rightMax[i]) - h;

        if (waterHeight > 0) {
            svg.innerHTML += `
              <rect x="${x}" y="${y - waterHeight * scale}"
                width="${barWidth - 5}"
                height="${waterHeight * scale}"
                fill="skyblue" />
            `;
        }
    });
}
