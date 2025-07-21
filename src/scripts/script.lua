local js = require("js")

-- local utils = require("utils")

local document = js.global.document

print("Fengari script loaded successfully!")

local h1 = document:createElement("p")
h1.innerHTML = "Fetch!"
document.body:appendChild(h1)
