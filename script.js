var table=document.createElement("table");
table.className="table";

var thead=document.createElement("thead");
thead.className="thead-dark";

function create_tr(){
    var tr=document.createElement("tr");
    return tr;
}

function create_th(tagname,attrname,attrvalue,content){
    var th=document.createElement(tagname);
    th.setAttribute(attrname,attrvalue);
    th.innerHTML=content;
    return th;
}

function create_td(tagname,content){
    var td=document.createElement(tagname);
    td.innerHTML=content;
    return td;
    }

var th1=create_th("th","scope","col","#");
var th2=create_th("th","scope","col","First");
var th3=create_th("th","scope","col","Last");
var th4=create_th("th","scope","col","Handle");

var head_tr=create_tr();

head_tr.append(th1,th2,th3,th4);
thead.append(head_tr);


var tbody=document.createElement("tbody");
var body_tr1=create_tr();
var body_th1=create_th("th","scope","row","1");
td1=create_td("td","Mark")
td2=create_td("td","Otto")
td3=create_td("td","@mdo")

var body_tr2=create_tr();

var body_th2=create_th("th","scope","row","2");
td4=create_td("td","Jacob")
td5=create_td("td","Thornton")
td6=create_td("td","@fat")

var body_tr3=create_tr();

var body_th3=create_th("th","scope","row","3");
td7=create_td("td","Larry")
td8=create_td("td","the Bird")
td9=create_td("td","@twitter")

body_tr1.append(body_th1,td1,td2,td3)
body_tr2.append(body_th2,td4,td5,td6)
body_tr3.append(body_th3,td7,td8,td9)

tbody.append(body_tr1,body_tr2,body_tr3)

table.append(thead,tbody)

document.body.append(table);




