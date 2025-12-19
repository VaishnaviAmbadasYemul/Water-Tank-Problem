# Water-Tank-Problem

## Problem Statement

Given an array of non-negative integers where each value represents the height of a block, calculate the total units of water trapped between the blocks.

## Build a frontend web application using:

Vanilla JavaScript

HTML

CSS

SVG visualization 

## Example

Input :

[0,4,0,0,0,6,0,6,4,0]

Output :

18 Units

## Technologies Used

HTML5

CSS3

Vanilla JavaScript

SVG (for visual representation)

▶️ How to Run the Project 
 Method 1: Run Without VS Code (Simplest)

Open the project folder on your computer

Double-click index.html

 Opens in browser
 Application runs immediately

## Visualization Explanation

Grey bars → Block heights

Blue bars → Trapped water

SVG rendering shows exact water distribution

## Algorithm Used

Two-Pointer Technique (O(n) Time, O(1) Space)

Water at each index:
min(max_left, max_right) - height[i]


## Features

Accurate water calculation

Interactive UI

SVG-based visualization

Clean and readable code

No external libraries

Runs in any modern browser

## Output Verification

For input:

[0,4,0,0,0,6,0,6,4,0]


 Correct result: 18 Units
 Correct visual water trapping
