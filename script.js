

let vanishing_wrong = 0;
let transformation_wrong = 0;
let hidden_wrong = 0;

let is_option_selected = 0;
let is_wrong_selected = 0;

document.querySelector('#o1').addEventListener('mouseleave', function () {
  this.querySelector('.oval').setAttribute('color', 'black');
});
document.querySelector('#o2').addEventListener('mouseleave', function () {
  this.querySelector('.oval').setAttribute('color', 'black');
});

document.querySelector('#o3').addEventListener('mouseleave', function () {
  this.querySelector('.oval').setAttribute('color', 'black');
});
document.querySelector('#o4').addEventListener('mouseleave', function () {
  this.querySelector('.oval').setAttribute('color', 'black');
});

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      next();
    });
  }
});

AFRAME.registerComponent('cursor-listener1', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      prev();
    });
  }
});
AFRAME.registerComponent('op1', {
  init: function () {


    this.el.addEventListener('click', function (evt) {



      this.setAttribute('material', 'color', 'black');
      this.querySelector('.oval').setAttribute('color', 'white');
      select_option(1);
    });
  }
});
AFRAME.registerComponent('op2', {
  init: function () {


    this.el.addEventListener('click', function (evt) {

      this.setAttribute('material', 'color', 'black');
      this.querySelector('.oval').setAttribute('color', 'white');

      select_option(2);
    });
  }
});
AFRAME.registerComponent('op3', {
  init: function () {


    this.el.addEventListener('click', function (evt) {



      this.setAttribute('material', 'color', 'black');
      this.querySelector('.oval').setAttribute('color', 'white');
      select_option(3);
    });
  }
});
AFRAME.registerComponent('op4', {
  init: function () {


    this.el.addEventListener('click', function (evt) {



      this.setAttribute('material', 'color', 'black');
      this.querySelector('.oval').setAttribute('color', 'white');
      select_option(4);
    });
  }
});

let wrong;
let correct;

let option1;
let option4;
let option3_val;




window.onload = function () {
  wrong = 0;
  correct = 0;
}
let que1 = {
  options: [5, "none"],
  correct_op: 5
};

let que2 = {
  options: [4, 2, 42, "none"],
  correct_op: 42
};

let que3 = {
  options: [35, 57],
  correct_op: 57
};
let que4 = {
  options: [6, 96, 9, "none"],
  correct_op: 96
};

let que5 = {
  options: [2, "none"],
  correct_op: 2
};

let que6 = {
  options: [45, "none"],
  correct_op: 45
};

let que7 = {
  options: [16, "none"],
  correct_op: 16
};

let que8 = {
  options: [5, "none"],
  correct_op: "none"
};

let que9 = {
  options: [45, "none"],
  correct_op: "none"
};
let que10 = {
  options: [73, "none"],
  correct_op: "none"
};

let questions = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10];

function test() {
  option1 = document.querySelector('#o1');
  option4 = document.querySelector('#o4');
  option3_val = document.querySelector('#o3 .oval');
  option1.setAttribute('visible', 'false');
  option4.setAttribute('visible', 'false');
  option3_val.setAttribute('value', 'none');
}

test();

function load_options(question) {
  question = parseInt(question);

  let ops = questions[question - 1].options;
  if (ops.length < 4) {
    let op2 = ops[0];
    let op3 = ops[1];

    document.querySelector('#o1').setAttribute('visible', 'false');
    document.querySelector('#o4').setAttribute('visible', 'false');
    document.querySelector('#o2 .oval').setAttribute('value', op2);
    document.querySelector('#o3 .oval').setAttribute('value', op3);
  }
  else {
    let op1 = ops[0];
    let op2 = ops[1];
    let op3 = ops[2];
    let op4 = ops[3];

    document.querySelector('#o1').setAttribute('visible', 'true');
    document.querySelector('#o4').setAttribute('visible', 'true');

    document.querySelector('#o1 .oval').setAttribute('value', op1);
    document.querySelector('#o2 .oval').setAttribute('value', op2);
    document.querySelector('#o3 .oval').setAttribute('value', op3);
    document.querySelector('#o4 .oval').setAttribute('value', op4);
  }
}

function select_option(arg) {

  let x = document.querySelector('#imageTag').getAttribute('src');
  let y = 0;
  if (x.charAt(15) == '.') {
    y = parseInt(x.charAt(14));
  }
  else {
    y = parseInt(x.slice(14, 16));
  }

  y = parseInt(y);

  let ops = questions[y - 1].options;

  if (y == 5) {
    transformation_wrong = wrong;
    wrong = 0;
  }
  else if (y == 8) {
    vanishing_wrong = wrong;
    wrong = 0;
  }
  else if (y == 11) {
    hidden_wrong = wrong;
    wrong = 0;
  }
  if (ops.length < 4) {
    if (questions[y - 1].options[arg - 2] != questions[y - 1].correct_op) {
      if (is_option_selected == 0) {
        ++wrong;
        is_wrong_selected = 1;
      }
      else {


        if (is_wrong_selected == 0) {

          ++wrong;
          --correct;
          is_wrong_selected = 1;
        }
      }

    }
    else {
      if (is_option_selected == 1) {
        if (is_wrong_selected == 1) {
          wrong -= 1;
          ++correct;
          is_wrong_selected = 0;
        }
      }
      else {

        ++correct;
      }
    }
  }
  else {
    if (questions[y - 1].options[arg - 1] != questions[y - 1].correct_op) {
      if (is_option_selected == 0) {
        ++wrong;
        is_wrong_selected = 1;
      }

      else {
        if (is_wrong_selected == 0) {
          ++wrong;
          --correct;
          is_wrong_selected = 1;
        }
      }
    }
    else {
      if (is_option_selected == 1) {
        if (is_wrong_selected == 1) {
          wrong -= 1;
          ++correct;
          is_wrong_selected = 0;
        }
      }
      else {
        ++correct;
      }

    }
  }
  is_option_selected = 1;
  console.log(y);
}



function next() {

  is_option_selected = 0;
  is_wrong_selected = 0;
  let x = document.querySelector('#imageTag').getAttribute('src');
  let y = 0;
  let z = "";
  if (x.charAt(15) == '.') {
    y = parseInt(x.charAt(14));
    y++;
    z = x.slice(0, 14) + y.toString() + x.slice(15, x.length + 1);
  }
  else {
    y = parseInt(x.slice(14, 16));
    if (y != 38) {
      y++;
      z = x.slice(0, 14) + y.toString() + x.slice(16, x.length + 1);
    }
    else
      z = x;
  }
  if (y === 11) {

    hidden_wrong = wrong;

    wrong = 1;


    sessionStorage.setItem("transformation_wrong", transformation_wrong);
    sessionStorage.setItem("vanishing_wrong", vanishing_wrong);
    sessionStorage.setItem("hidden_wrong", hidden_wrong);
    location.replace("./report.html");
  }
  document.querySelector('#imageTag').setAttribute('src', z);
  load_options(y);

}
function prev() {

  let x = document.querySelector('#imageTag').getAttribute('src');
  let y = 0;
  let z = "";
  if (x.charAt(15) == '.') {
    y = parseInt(x.charAt(14));
    if (y != 1) {
      y--;
      z = x.slice(0, 14) + y.toString() + x.slice(15, x.length + 1);
    }
    else {
      z = x;
    }
  }
  else {
    y = parseInt(x.slice(14, 16));
    y--;
    z = x.slice(0, 14) + y.toString() + x.slice(16, x.length + 1);
  }
  document.querySelector('#imageTag').setAttribute('src', z);
  load_options(y);

}













































