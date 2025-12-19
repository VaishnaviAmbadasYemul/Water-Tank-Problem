# Water-Tank-Problem

Problem Statement
Given an array of non-negative integers representing the height of blocks, calculate the total units of water stored between the blocks after rainfall.

Build a frontend web application using:

Vanilla JavaScript
HTML
CSS

Example

Input
[0,4,0,0,0,6,0,6,4,0]

Output
18 Units

Tech Stack
HTML5
CSS3
Vanilla JavaScript
SVG for visualization


Approach & Algorithm
Two-Pointer Technique (O(n))
Water trapped at any index depends on:
min(max_left, max_right) - height[i]

Steps:
Use two pointers (left, right)
Track maximum heights from both sides
Accumulate trapped water
Render blocks and water using SVG

Project Structure

water-tank-problem/
│
├── index.html
├── style.css
├── script.js
└── README.md
