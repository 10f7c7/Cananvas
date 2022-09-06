// make norla page relaodpro

// grade toggle
chrome.storage.sync.get(['grdTogl'], function(result){
  console.log(result.grdTogl);
  if(result.grdTogl == true)  {
    document.getElementById("grdTogl").setAttribute("checked", '');
    document.getElementById("grdTogl").value = true;
    // document.getElementById("grdToglLb").innerHTML = "Grades Toggle : ON";
  } else if (result.grdTogl == false)  {
    document.getElementById("grdTogl").removeAttribute("checked");
    document.getElementById("grdTogl").value = false;
    // document.getElementById("grdToglLb").innerHTML = "Grades Toggle : OFF";
  }
});
document.getElementById("grdTogl").addEventListener("click", toggleGrade);

// // tab toggle
// chrome.storage.sync.get(['tabTogl'], function(result){
//   console.log(result.tabTogl);
//   if(result.tabTogl == true)  {
//     document.getElementById("tabTogl").setAttribute("checked", '');
//     document.getElementById("tabTogl").value = true;
//     // document.getElementById("tabTogl").innerHTML = "Tabs Toggle : ON";
//   } else if (result.tabTogl == false)  {
//     document.getElementById("tabTogl").removeAttribute("checked");
//     document.getElementById("tabTogl").value = false;
//     // document.getElementById("tabTogl").innerHTML = "Tabs Toggle : OFF";
//   }
// });
// document.getElementById("tabTogl").addEventListener("click", toggleTabs);

// Assignment Back Button toggle
chrome.storage.sync.get(['asgmtBckBtnTogl'], function(result){
  console.log(result.asgmtBckBtnTogl);
  if(result.asgmtBckBtnTogl == true)  {
    document.getElementById("asgmtBckBtnTogl").setAttribute("checked", '');
    document.getElementById("asgmtBckBtnTogl").value = true;
    // document.getElementById("asgmtBckBtnTogl").innerHTML = "Assignment Back Button Toggle : ON";
  } else if (result.asgmtBckBtnTogl == false)  {
    document.getElementById("asgmtBckBtnTogl").removeAttribute("checked");
    document.getElementById("asgmtBckBtnTogl").value = false;
    // document.getElementById("asgmtBckBtnTogl").innerHTML = "Assignment Back Button Toggle : OFF";
  }
});
document.getElementById("asgmtBckBtnTogl").addEventListener("click", toggleAssignmentBtn);

if (document.getElementById("grdTogl").hasAttribute("checked") == false)  {
  chrome.storage.sync.set({grdTogl : true});
}
// if (document.getElementById("tabTogl").hasAttribute("checked") == false)  {
//   chrome.storage.sync.set({tabTogl : true});
// }
if (document.getElementById("asgmtBckBtnTogl").hasAttribute("checked") == false)  {
  chrome.storage.sync.set({asgmtBckBtnTogl : true});
}

function toggleGrade()  {
  if (document.getElementById("grdTogl").value == "true")  {
    chrome.storage.sync.set({grdTogl : false})
    document.getElementById("grdTogl").innerHTML = "Grades Toggle : OFF";
    document.getElementById("grdTogl").removeAttribute("checked");
    document.getElementById("grdTogl").value = "false";
  } else if (document.getElementById("grdTogl").value == "false")  {
    chrome.storage.sync.set({grdTogl : true})
    document.getElementById("grdTogl").innerHTML = "Grades Toggle : ON";
    document.getElementById("grdTogl").setAttribute("checked", '');
    document.getElementById("grdTogl").value = "true";
  }
}

// function toggleTabs()  {
//   if (document.getElementById("tabTogl").value == "true")  {
//     chrome.storage.sync.set({tabTogl : false})
//     document.getElementById("tabTogl").innerHTML = "Tabs Toggle : OFF";
//     document.getElementById("tabTogl").removeAttribute("checked");
//     document.getElementById("tabTogl").value = "false";
//   } else if (document.getElementById("tabTogl").value == "false")  {
//     chrome.storage.sync.set({tabTogl : true})
//     document.getElementById("tabTogl").innerHTML = "Tabs Toggle : ON";
//     document.getElementById("tabTogl").setAttribute("checked", '');
//     document.getElementById("tabTogl").value = "true";
//   }
// }

function toggleAssignmentBtn()  {
  if (document.getElementById("asgmtBckBtnTogl").value == "true")  {
    chrome.storage.sync.set({asgmtBckBtnTogl : false})
    document.getElementById("asgmtBckBtnTogl").innerHTML = "Assignment Back Button Toggle : OFF";
    document.getElementById("asgmtBckBtnTogl").removeAttribute("checked");
    document.getElementById("asgmtBckBtnTogl").value = "false";
  } else if (document.getElementById("asgmtBckBtnTogl").value == "false")  {
    chrome.storage.sync.set({asgmtBckBtnTogl : true})
    document.getElementById("asgmtBckBtnTogl").innerHTML = "Assignment Back Button Toggle : ON";
    document.getElementById("asgmtBckBtnTogl").setAttribute("checked", '');
    document.getElementById("asgmtBckBtnTogl").value = "true";
  }
}



/* var grdTogl = true;
chrome.storage.sync.get(['grdTogl'], function(result){grdTogl = result.grdTogl; console.log(grdTogl); return result.grdTogl});
console.log(grdTogl);
if (grdTogl == true)  {
  document.getElementById("grdTogl").innerHTML = "Grades Toggle : ON";
} else if (grdTogl == false)  {
  document.getElementById("grdTogl").innerHTML = "Grades Toggle : OFF";
}
document.getElementById("grdTogl").addEventListener("click", toggleGrade);
function toggleGrade()  {
  console.log(grdTogl);
  if (grdTogl == true)  {
    chrome.storage.sync.set({grdTogl : false})
    document.getElementById("grdTogl").innerHTML = "Grades Toggle : OFF";
    grdTogl = false;
    console.log(grdTogl);
    chrome.storage.sync.get(['grdTogl'], function(result){console.log(result);});
  } else if (grdTogl == false)  {
    chrome.storage.sync.set({grdTogl : true})
    document.getElementById("grdTogl").innerHTML = "Grades Toggle : ON";
    grdTogl = true;
    console.log(grdTogl);
    chrome.storage.sync.get(['grdTogl'], function(result){console.log(result);});
  }
} */