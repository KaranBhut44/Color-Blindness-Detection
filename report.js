function addScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}
addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');

function printPage(){
    document.getElementById("print").innerHTML = "";
    document.querySelector('.table').setAttribute('align', "");
    html2pdf(document.body);
    document.querySelector('.table').setAttribute('align', "center");
}


function generate_report(){
    let age = sessionStorage.getItem("age");
    let gender = sessionStorage.getItem("gender");
    let email = sessionStorage.getItem("email");
    let transformation_wrong = parseInt(sessionStorage.getItem("transformation_wrong"));
    let vanishing_wrong = parseInt(sessionStorage.getItem("vanishing_wrong"));
    let hidden_wrong = parseInt(sessionStorage.getItem("hidden_wrong"));

    let transformation_perc = ((transformation_wrong/4)*100);
    let vanishing_perc = ((vanishing_wrong/3)*100);
    let hidden_perc = ((hidden_wrong/3)*100);

    let color_blind_perc = ((transformation_wrong + vanishing_wrong + hidden_wrong)/10)*100;

    document.getElementById("age").innerHTML=age; 
    document.getElementById("gender").innerHTML=gender; 
    document.getElementById("email").innerHTML=email; 
    document.getElementById("transformation").innerHTML = transformation_perc.toPrecision(4) + "%";
    document.getElementById("vanishing").innerHTML = vanishing_perc.toPrecision(4) + "%";
    document.getElementById("hidden").innerHTML = hidden_perc.toPrecision(4) + "%";

    document.getElementById("result").innerHTML += color_blind_perc.toPrecision(4) + "%";

    // print();
}
window.onload = function(){
    generate_report();
}