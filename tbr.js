
if (process.argv.length == 2) {
  spaces(1);
}
else if (process.argv.length == 3) {

  var arg = process.argv[2];

  if (!isNaN(arg)) {
    spaces(Number(arg));
  }
  else if (arg.indexOf('-') === 0) {
    makeLines(arg);
  }

}
else if (process.argv.length == 4) {

  var arg = process.argv[2];
  var arg2 = process.argv[3];

  if (arg.indexOf('-') === 0 && !isNaN(arg2)) {
    makeLines(arg,arg2);
  }

}

//////

function spaces(howmany) {
  str = "";
  for (var i=0; i<howmany; i++) {
    str+="\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
  }
  console.log(str);
}

function makeLines(arg, arg2) {

  if (typeof(arg2) === "undefined") {
    arg2 = 1;
  }

  for (var i=0; i<arg2; i++) {
    if (arg === '-') {
      lines(1);
    }
    else if (arg === '--') {
      lines(2);
    }
    else if (arg === '---') {
      lines(3);
    }
    else if (arg === '----') {
      lines(4);
    }
    else if (arg === '-----') {
      lines(5);
    }
  }

}

function lines(howmany) {
  str = "";
  for (var i=0; i<howmany; i++) {
    str+="--------------------------------------------------";
  }
  console.log(str);
}
