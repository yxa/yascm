var escape = '\u001b[',
    reset = '\u001b[0m',
    open = {
        'black': '30m',
        'red': '31m',
        'green': '32m',
        'yellow': '33m',
        'blue': '34m',
        'magenta': '35m',
        'cyan': '36m',
        'white': '37m',
        'grey': '90m',
        'bg-black': '40m',
        'bg-red': '41m',
        'bg-green': '42m',
        'bg-yellow': '43m',
        'bg-blue': '44m',
        'bg-magenta': '45m',
        'bg-cyan': '46m',
        'bg-white': '47m',
        'bg-grey': '100m',
        'u': '4m'
    };

var translate = function(color, text) {
  if(color) {
    color = color.toLowerCase();
    if(!open[color]) {
      throw new Error('no color with that name here.')
    }
  } else {
      throw new Error('please provide a color');
  }

  if(!text) throw new Error("please provide a text to colorize");

  return escape + open[color] + text + reset;
};

module.exports ={
    escape: escape,
    open: open,
    reset: reset,
    translate: translate
}
