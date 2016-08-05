//= require_tree .

var body          = document.body,
    initialBg     = body.style.getPropertyValue('background-image'),
    type          = [
                      body,
                      document.getElementsByTagName('a')
                    ],
    initialColor  = body.style.getPropertyValue('color'),
    preLoader     = document.getElementById('preloader');
    projectEls    = document.getElementsByClassName('project');

// Preload images
(function() {
  for (var i = 0; i < projectEls.length; i++) {
    var src = projectEls[i].getAttribute('data-src');
    preloader.innerHTML += ('<img src="' + src + '">');

    console.log("Loading " + src);
  }
}());

// Syntax highlight
var codeContainer = document.getElementById('code-bg');
var codeElement = document.getElementById('code-js');
codeElement.innerHTML = Prism.highlight("\n//= require_tree .\n\nvar body          = document.body,\n    initialBg     = body.style.getPropertyValue('background-image'),\n    type          = [\n                      body,\n                      document.getElementsByTagName('a')\n                    ],\n    initialColor  = body.style.getPropertyValue('color');\n\n// Syntax highlight.\nvar codeBgElement = document.getElementById('code-js');\nvar code = Prism.highlight('var code = true;', Prism.languages.javascript);\ncodeBgElement.innerHTML = code;\n\n// Change background and color after project.\nvar changeBg = function(image, negative) {\n  body.style.backgroundImage = 'url(' + image + ')';\n\n  if (negative == true) {\n    changeColor('black');\n  }\n};\n\nvar resetBg = function() {\n  body.style.backgroundImage = initialBg;\n\n  if (body.style.color != initialColor) {\n    changeColor(initialColor);\n  }\n};\n\nvar changeColor = function(color) {\n  type[0].style.color = color;\n\n  for (var i = 0; i < type[1].length; i++) {\n    type[1][i].style.color = color;\n  }\n}", Prism.languages.javascript)

// Change background and color after project
var changeBg = function(image, negative) {
  if (window.innerWidth >= 900) {
    body.style.backgroundImage = 'url(' + image + ')';
    codeContainer.style.visibility = 'hidden';
    codeContainer.style.opacity = '0';

    if (negative == true) {
      changeColor('black');
    }
  }
};

var resetBg = function() {
  if (window.innerWidth >= 900) {
    body.style.backgroundImage = initialBg;
    codeContainer.style.visibility = 'visible';
    codeContainer.style.opacity = '1';

    if (body.style.color != initialColor) {
      changeColor(initialColor);
    }
  }
};

var changeColor = function(color) {
  type[0].style.color = color;

  for (var i = 0; i < type[1].length; i++) {
    type[1][i].style.color = color;
  }
}
