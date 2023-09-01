// make norla page relaodpro

// grade toggle
chrome.storage.sync.get(['grdTogl'], function(result){
  console.log(result.grdTogl);
  if(result.grdTogl == true)  {
    document.getElementById("grdTogl").setAttribute("checked", '');
  } else if (result.grdTogl == false)  {
    document.getElementById("grdTogl").removeAttribute("checked");
  }
});
document.getElementById("grdTogl").addEventListener("click", toggleGrade);

// // tab toggle
// chrome.storage.sync.get(['tabTogl'], function(result){
//   console.log(result.tabTogl);
//   if(result.tabTogl == true)  {
//     document.getElementById("tabTogl").setAttribute("checked", ''
//   } else if (result.tabTogl == false)  {
//     document.getElementById("tabTogl").removeAttribute("checked"
//   }
// });
// document.getElementById("tabTogl").addEventListener("click", toggleTabs);

// Assignment Back Button toggle
chrome.storage.sync.get(['asgmtBckBtnTogl'], function(result){
  console.log(result.asgmtBckBtnTogl);
  if(result.asgmtBckBtnTogl == true)  {
    document.getElementById("asgmtBckBtnTogl").setAttribute("checked", '');
  } else if (result.asgmtBckBtnTogl == false)  {
    document.getElementById("asgmtBckBtnTogl").removeAttribute("checked");
  }
});
document.getElementById("asgmtBckBtnTogl").addEventListener("click", toggleAssignmentBtn);


// Better TODO toggle
chrome.storage.sync.get(['betterTODOTogl'], function(result){
  console.log(result.betterTODOTogl);
  if(result.betterTODOTogl == true)  {
    document.getElementById("betterTODOTogl").setAttribute("checked", '');
  } else if (result.betterTODOTogl == false)  {
    document.getElementById("betterTODOTogl").removeAttribute("checked");
  }
});
document.getElementById("betterTODOTogl").addEventListener("click", toggleBetterTODO);


// -----------------------------------------------------------------------------------------------------------


// toggleGrade function
function toggleGrade()  {
  if (document.getElementById("grdTogl").hasAttribute("checked") == true)  {
    chrome.storage.sync.set({grdTogl : false})
    document.getElementById("grdTogl").removeAttribute("checked");
  } else if (document.getElementById("grdTogl").hasAttribute("checked") == false)  {
    chrome.storage.sync.set({grdTogl : true})
    document.getElementById("grdTogl").setAttribute("checked", '');
  }
}


// toggleTabs Function
// function toggleTabs()  {
  //   if (document.getElementById("tabTogl").hasAttribute("checked") == true)  {
    //     chrome.storage.sync.set({tabTogl : false})
    //     document.getElementById("tabTogl").removeAttribute("checked"
    //   } else if (document.getElementById("tabTogl").hasAttribute("checked") == false)  {
      //     chrome.storage.sync.set({tabTogl : true})
      //     document.getElementById("tabTogl").setAttribute("checked", ''
//   }
// }


// toggleAssignmentsBtn function
function toggleAssignmentBtn()  {
  if (document.getElementById("asgmtBckBtnTogl").hasAttribute("checked") == true)  {
    chrome.storage.sync.set({asgmtBckBtnTogl : false})
    document.getElementById("asgmtBckBtnTogl").removeAttribute("checked");
  } else if (document.getElementById("asgmtBckBtnTogl").hasAttribute("checked") == false)  {
    chrome.storage.sync.set({asgmtBckBtnTogl : true})
    document.getElementById("asgmtBckBtnTogl").setAttribute("checked", '');
  }
}


// toggleBetterTODO function
function toggleBetterTODO()  {
  if (document.getElementById("betterTODOTogl").hasAttribute("checked") == true)  {
    chrome.storage.sync.set({betterTODOTogl : false})
    document.getElementById("betterTODOTogl").removeAttribute("checked");
  } else if (document.getElementById("betterTODOTogl").hasAttribute("checked") == false)  {
    chrome.storage.sync.set({betterTODOTogl : true})
    document.getElementById("betterTODOTogl").setAttribute("checked", '');
  }
}

// -------------------------------------------------------------------------------
// UNUSED
// -------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// I forgor what this does
// if (document.getElementById("grdTogl").hasAttribute("checked") == false)  {
//   chrome.storage.sync.set({grdTogl : true});
// }
// // if (document.getElementById("tabTogl").hasAttribute("checked") == false)  {
// //   chrome.storage.sync.set({tabTogl : true});
// // }
// if (document.getElementById("asgmtBckBtnTogl").hasAttribute("checked") == false)  {
//   chrome.storage.sync.set({asgmtBckBtnTogl : true});
// }
// ----------------------------------------------------------------------------------------------------



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