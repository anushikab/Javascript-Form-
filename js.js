var sal = document.getElementById("sal");
var da = document.getElementById("da");
var hra = document.getElementById("hra");
var pf = document.getElementById("pf");
var psl = document.getElementById("psl");
var ns = document.getElementById("ns");
var lblEno = document.getElementById("lblEno");
var lblEname = document.getElementById("lblEname");
var lblDept = document.getElementById("lblDept");
var lblHasVh = document.getElementById("lblHasVh");
var lblBasic = document.getElementById("lblBasic");
var lblDaPer = document.getElementById("lblDaPer");
var lblDaVal = document.getElementById("lblDaVal");
var lblHraPer = document.getElementById("lblHraPer");
var lblHraVal = document.getElementById("lblHraVal");
var lblPfPer = document.getElementById("lblPfPer");
var lblPfVal = document.getElementById("lblPfVal");
var lblPa = document.getElementById("lblPa");
var lblNetSal = document.getElementById("lblNetSal");
var result = document.getElementById("result");
var eno = document.getElementById("eno");
var personName = document.getElementById("personName");
var gen = document.getElementById("gen");
var dept = document.getElementById("dept");
var own = document.getElementById("own");
var psl = document.getElementById("psl");


function calc() {
    var calDa = (parseFloat(da.value) / 100) * parseFloat(sal.value);
    var calHra = (parseFloat(hra.value) / 100) * parseFloat(sal.value);
    var calPf = (parseFloat(pf.value) / 100) * parseFloat(sal.value);

    var calSal = parseFloat(sal.value) + calDa + calHra + parseInt(psl.value) - calPf;

    ns.value = parseFloat(calSal).toFixed(2);

    result.style.display = "block";
    lblEno.innerText = eno.value;
    lblEname.innerText = personName.value;
    lblDept.innerText = dept.value;

    if (own.checked == true) {
        lblHasVh.innerText = "Has";
    } else {
        lblHasVh.innerText = "Does not have";
    }

    lblBasic.innerText = sal.value;
    lblDaPer.innerText = da.value;
    lblDaVal.innerText = calDa;
    lblHraPer.innerText = hra.value;
    lblHraVal.innerText = calHra;
    lblPfPer.innerText = pf.value;
    lblPfVal.innerText = calPf;
    lblPa.innerText = psl.value;
    lblNetSal.innerText = ns.value;

}

function showstatus() {

    if (own.checked == true) {
        psl.value = 100;
    } else {
        psl.value = 0;
    }

}