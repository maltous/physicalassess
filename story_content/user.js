function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UHYwIJwZhA":
        Script1();
        break;
      case "6YUoMJXcGYz":
        Script2();
        break;
      case "5q2AUrZFt9s":
        Script3();
        break;
      case "5dixlvsDLgf":
        Script4();
        break;
      case "6BPe9QFCFq7":
        Script5();
        break;
      case "5g62nQCLAWU":
        Script6();
        break;
      case "6D5w7fZZICd":
        Script7();
        break;
      case "6WBG5w9Yklf":
        Script8();
        break;
      case "5joxWxXAuRX":
        Script9();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script8()
{
  $("#tab-customlink").show();
}

function Script9()
{
  window.print();
}

