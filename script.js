function getVal($trId) {    
    
    var vals = new Array();

        if($trId == 1){
            vals[0] = parseFloat(document.getElementById("s11").innerHTML);
            vals[1] = parseFloat(document.getElementById("s21").innerHTML);
            vals[2] = parseFloat(document.getElementById("b11").innerHTML);
            vals[3] = parseFloat(document.getElementById("b21").innerHTML);
            return vals;
            }
        else if($trId == 2){
            vals[0] = parseFloat(document.getElementById("s12").innerHTML);
            vals[1] = parseFloat(document.getElementById("s22").innerHTML);
            vals[2] = parseFloat(document.getElementById("b12").innerHTML);
            vals[3] = parseFloat(document.getElementById("b22").innerHTML);
            return vals;
            }
        else if($trId == 3){
            vals[0] = parseFloat(document.getElementById("s13").innerHTML);
            vals[1] = parseFloat(document.getElementById("s23").innerHTML);
            vals[2] = parseFloat(document.getElementById("b13").innerHTML);
            vals[3] = parseFloat(document.getElementById("b23").innerHTML);
            return vals;
            } 
}

function rand(m,n){
    return Math.round(Math.random()*100)+1;
}

function clearInit() {        
    $trId = document.getElementById("addTrId").value="";
    $side1 = document.getElementById("addSide1").value="";
    $side2 = document.getElementById("addSide2").value="";
    $base1 = document.getElementById("addBase1").value="";
    $base2 = document.getElementById("addBase2").value="";
}

function height($side1,$side2,$base1,$base2){
    return(Math.sqrt(Math.pow($side1,2) - Math.pow(((Math.pow($base1 - $base2,2) + Math.pow($side1,2) - Math.pow($side2,2)) / (2 * ($base1 - $base2))),2)))
};

function clearheight() {        
    $trId = document.getElementById("addTrIdH").value="";
}

function perimeter($side1,$side2,$base1,$base2) 
{return ($side1 + $side2 + $base1 + $base2)};

function clearPerimeter(){
    $trId = document.getElementById("addTrIdP").value="";
}

function area($side1,$side2,$base1,$base2) 
{return (($base1 + $base2) / 2) * height($side1,$side2,$base1,$base2)};

function clearArea(){
    $trId = document.getElementById("addTrIdS").value="";
}

function midLine($base1,$base2) {return (($base1 + $base2) / 2)};

function clearMidLine(){
    $trId = document.getElementById("addTrIdM").value="";
}

function coef($coefId1,$coefId2) {
    var coef1,coef2,coef3,coef4,coefCrossBase1,coefCrossBase2,coefCrossSide1,coefCrossSide2, alike;
    $coef1 = getVal($coefId1)[0] / getVal($coefId2)[0];
    $coef2 = getVal($coefId1)[1] / getVal($coefId2)[1];
    $coef3 = getVal($coefId1)[2] / getVal($coefId2)[2];
    $coef4 = getVal($coefId1)[3] / getVal($coefId2)[3];
    
    $coefCrossSide1 = getVal($coefId1)[0] / getVal($coefId2)[1];
    $coefCrossSide2 = getVal($coefId1)[1] / getVal($coefId2)[0];
    $coefCrossBase1 = getVal($coefId1)[2] / getVal($coefId2)[3];
	$coefCrossBase2 = getVal($coefId1)[3] / getVal($coefId2)[2];
    if($coef1 == $coef2 && $coef2 == $coef3 && $coef3 == $coef4 ||
       $coefCrossSide1 == $coefCrossSide2 && $coefCrossSide2 == $coef3 && $coef3 == $coef4 ||
       $coef1 == $coef2 && $coef2 == $coefCrossBase1 && $coefCrossBase1 == $coefCrossBase2 ||
       $coefCrossSide1 == $coefCrossSide2 && $coefCrossSide2 == $coefCrossBase1 && $coefCrossBase1 == $coefCrossBase2)
       {
        $alike = 1;
        console.log("alike"); }
    else {
        $alike = 0;
        console.log("not alike"); }
    return $alike;
}

function printChangeSize($side1,$side2,$base1,$base2,$trId,$times) {
        if($times>0 && $trId==1){
            document.getElementById("s11").innerHTML = $side1*$times;
            document.getElementById("s21").innerHTML = $side2*$times;
            document.getElementById("b11").innerHTML = $base1*$times;
            document.getElementById("b21").innerHTML = $base2*$times;
        }
        else if($times<0 && $trId==1){
        	$times = -$times;
            document.getElementById("s11").innerHTML = $side1/$times;
            document.getElementById("s21").innerHTML = $side2/$times;
            document.getElementById("b11").innerHTML = $base1/$times;
            document.getElementById("b21").innerHTML = $base2/$times;
        }
        else if($times>0 && $trId==2){
            document.getElementById("s12").innerHTML = $side1*$times;
            document.getElementById("s22").innerHTML = $side2*$times;
            document.getElementById("b12").innerHTML = $base1*$times;
            document.getElementById("b22").innerHTML = $base2*$times;
        }
        else if($times<0 && $trId==2){
        	$times = -$times;
            document.getElementById("s12").innerHTML = $side1/$times;
            document.getElementById("s22").innerHTML = $side2/$times;
            document.getElementById("b12").innerHTML = $base1/$times;
            document.getElementById("b22").innerHTML = $base2/$times;
        }
        else if($times>0 && $trId==3){
            document.getElementById("s13").innerHTML = $side1*$times;
            document.getElementById("s23").innerHTML = $side2*$times;
            document.getElementById("b13").innerHTML = $base1*$times;
            document.getElementById("b23").innerHTML = $base2*$times;
        }
        else if($times<0 && $trId==3){
        	$times = -$times;
            document.getElementById("s13").innerHTML = $side1/$times;
            document.getElementById("s23").innerHTML = $side2/$times;
            document.getElementById("b13").innerHTML = $base1/$times;
            document.getElementById("b23").innerHTML = $base2/$times;
        }
}
function changeSize($trId,$times) {
        $side1 = getVal($trId)[0];
        $side2 = getVal($trId)[1];
        $base1 = getVal($trId)[2];
        $base2 = getVal($trId)[3];
    printChangeSize($side1,$side2,$base1,$base2,$trId,$times);        
}

function clearChange() {
    $trId = document.getElementById("AddTrC").value="";
    $trId = document.getElementById("addTrIdCh").value="";
}

function simPrint($coefId1,$coefId2) {
    if($coefId1 == 1 && $coefId2 == 2 || $coefId1 == 2 && $coefId2 == 1){
        document.getElementById("s1").innerHTML = "+";
        document.getElementById("s2").innerHTML = "+";
    }
    else if($coefId1 == 2 && $coefId2 == 3 || $coefId1 == 3 && $coefId2 == 2){
        document.getElementById("s2").innerHTML = "+";
        document.getElementById("s3").innerHTML = "+";
    }
    else if($coefId1 == 1 && $coefId2 == 3 || $coefId1 == 3 && $coefId2 == 1){
        document.getElementById("s1").innerHTML = "+";
        document.getElementById("s3").innerHTML = "+";
    }
}

function simPrintMinus($coefId1,$coefId2) {
    if($coefId1 == 1 && $coefId2 == 2 || $coefId1 == 2 && $coefId2 == 1){
        document.getElementById("s1").innerHTML = "-";
        document.getElementById("s2").innerHTML = "-";
    }
    else if($coefId1 == 2 && $coefId2 == 3 || $coefId1 == 3 && $coefId2 == 2){
        document.getElementById("s2").innerHTML = "-";
        document.getElementById("s3").innerHTML = "-";
    }
    else if($coefId1 == 1 && $coefId2 == 3 || $coefId1 == 3 && $coefId2 == 1){
        document.getElementById("s1").innerHTML = "-";
        document.getElementById("s3").innerHTML = "-";
    }
}
	
function clearSimilarity(){
    $trId = document.getElementById("sim1").value="";
    $trId = document.getElementById("sim2").value="";
    document.getElementById("s1").innerHTML = '@';
    document.getElementById("s2").innerHTML = '@';
    document.getElementById("s3").innerHTML = '@';
}
function getTrId($trId) {
    document.getElementById("AddTrC").value = $trId;
        document.getElementById("addTrIdP").value = $trId;
        document.getElementById("addTrIdH").value = $trId;
        document.getElementById("addTrIdM").value = $trId;
        document.getElementById("addTrIdS").value = $trId;
}
