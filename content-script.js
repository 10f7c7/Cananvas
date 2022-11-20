// "use strict";

//changePage();


/* chrome.runtime.sendMessage('get-grade-options', (response) => {
    if (response === true)  {
        setGrade();
    }
    console.log('received user data', response);
}); */
chrome.storage.sync.get(['grdTogl'], function(result){
    if (result.grdTogl == true)  {
        setGrade();
    }
});
// chrome.storage.sync.get(['tabTogl'], function(result){
//     if (result.tabTogl == true)  {
//         setTabs();
//     }
// });
chrome.storage.sync.get(['asgmtBckBtnTogl'], function(result){
    if (result.asgmtBckBtnTogl == true)  {
        setAsgmtBckBtn();
    }
});


chrome.storage.sync.get(['betterTODOTogl'], function(result){
    if (result.betterTODOTogl == true)  {
        setBetterTODO();
    }
});


document.getElementById("global_nav_conversations_link").children[1].innerHTML = "Email";
var id = window.location.href;


//https://hcpss.instructure.com/api/v1/courses/189271/tabs
// function setTabs()  {
//     if (id.includes("https://hcpss.instructure.com/courses")) {
//         var idStr = id[38] + id[39] + id[40] + id[41] + id[42] + id[43];
//         console.log(window.location.href);
//         if (document.getElementById("wrapper").getElementsByClassName("ic-app-nav-toggle-and-crumbs") && document.getElementById("wrapper").getElementsByClassName("no-print"))  {
//             var wrp = document.getElementById('wrapper').firstElementChild;
//         } else  {
//             var wrp = document.getElementById('wrapper');
//         }
//         var btn = document.createElement('BUTTON');
//         btn.type = "button";
//         btn.id = 'courseMenuToggle';
//         btn.setAttribute("class", "Button Button--link ic-app-course-nav-toggle");
//         btn.setAttribute("aria-live", "polite");
//         btn.setAttribute("aria-label", "Hide Courses Navigation Menu");
//         document.body.classList.add("course-menu-expanded");
//         btn.innerHTML += "<i class='icon-hamburger'></i>";
//         if (document.getElementById("back_to_subject") != null)  {
//             document.getElementById("back_to_subject").classList.add("hidden");
//             wrp.insertBefore(btn, wrp.childNodes[0]);
//         }
//         var crsmnu = document.createElement('DIV');
//         crsmnu.id = 'left-side';
//         crsmnu.setAttribute("class", "ic-app-course-menu ic-sticky-on list-view");
//         crsmnu.setAttribute("style", "display: block; overflow: visible");
//         crsmnu.innerHTML = "<div class='ic-sticky-frame'><span id='section-tabs-header-subtitle' class='ellipsis'>NE</span><nav role='navigation' aria-label='Courses Navigation Menu'><ul id='section-tabs'><li class='section'><a href='/courses/" + idStr + "' class='home' tabindex='0'>Home</a></li><li class='section'><a href='/courses/" + idStr + "/announcements' class='announcements' tabindex='0'>Announcements</a></li><li class='section'><a href='/courses/" + idStr + "/modules' class='modules' tabindex='0'>Modules</a></li><li class='section'><a href='/courses/" + idStr + "/assignments' class='assignments' tabindex='0'>Assignments</a></li><li class='section'><a href='/courses/" + idStr + "/grades' class='grades' tabindex='0'>Grades</a></li><li class='section'><a href='/courses/" + idStr + "/discussion_topics' class='discussions' tabindex='0'>Discussions</a></li><li class='section'><a href='/courses/" + idStr + "/assignments/syllabus' class='syllabus' tabindex='0'>Syllabus</a></li><li class='section'><a href='/courses/" + idStr + "/files' class='files' tabindex='0'>Files</a></li><li class='section'><a href='/courses/" + idStr + "/users' class='users' tabindex='0'>Users</a></li><li class='section'><a href='/courses/" + idStr + "/external_tools/38920' class='context_external_tool_38920' tabindex='0'>Google Drive</a></li><li class='section'><a href='/courses/" + idStr + "/external_tools/119166' class='context_external_tool_119166' tabindex='0'>HCPSS.me</a></li></ul></nav></div>";
//         document.getElementById('main').insertBefore(crsmnu, document.getElementById('main').childNodes[0]);
//         if (document.getElementById('k5-course-header-hero') != null)  {
//             document.getElementById('k5-course-header-hero').style.height = "50px";
//         }
        
//     }
// };

function setGrade()  {
    if (id == "https://hcpss.instructure.com" || id == "https://hcpss.instructure.com/" || id == "https://hcpss.instructure.com/#homeroom" || id == "https://hcpss.instructure.com/#dashboard-activity")  {
        var courseCard = document.getElementsByClassName("ic-DashboardCard");
        var menuBtn = document.getElementsByClassName("ic-DashboardCard__header-button");
        var observer = new MutationObserver(addGrade);
        observer.observe(document.getElementById("DashboardCard_Container"), { childList: true, subtree: true });
        function addGrade()  {
            observer.disconnect();
            for (var i = 0; i < courseCard.length; i++) {
                var crsnm = courseCard[i].children[0].children[2].href;
                var crsnmstr = crsnm[38] + crsnm[39] + crsnm[40] + crsnm[41] + crsnm[42] + crsnm[43];
                var div = document.createElement('DIV');
                div.setAttribute("style", `z-index: 10; position: absolute; background-color: white; height: 22px; padding-right: 5px; padding-left: 5px; margin-top: 10px; margin-right: 10px; margin-left: 10px; float: left; border-radius: 10px; text-align: center; color: ${courseCard[i].children[0].children[1].children[0].style.backgroundColor}`);
                div.innerHTML = "N/A";
                div.setAttribute("onclick", "window.open('https://hcpss.instructure.com/courses/" + crsnmstr + "/grades'); event.stopPropagation()");
                courseCard[i].children[0].insertBefore(div, courseCard[i].children[0].children[0]);
                $.ajax({url: "https://hcpss.instructure.com/api/v1/courses/" + crsnmstr + "/enrollments?user_id=self", method: "GET", async: false}).done(function(response){
                    var str = JSON.stringify(response);
                    var grd = JSON.parse(str);
                    var currentQuart;
                    $.ajax({url: `https://hcpss.instructure.com/api/v1/courses/${crsnmstr}/grading_periods`, method: "GET", async: false}).done(function(response){
                        var quart = response.grading_periods;
                        // console.log("quart" + quart);

                        var date = new Date();
                        var time = date.toISOString();
                        var timeFormated = time.slice(0,10);
                        for (var quarter in quart)  {
                            let current = quart[quarter];
                            let startTime = current.start_date;
                            startTime = startTime.slice(0,10);
                            // console.log("starttime" + startTime);

                            let endTime = current.end_date;
                            endTime = endTime.slice(0,10);
                            // console.log("endtime" + endTime);

                            let currentDate = new Date();

                            let startDate = new Date(currentDate.getTime());
                            startDate.setYear(startTime.split("-")[0]);
                            startDate.setMonth(startTime.split("-")[1]-1);
                            startDate.setDate(startTime.split("-")[2]);
                            // console.log("startdate"+startDate);
                            let endDate = new Date(currentDate.getTime());
                            endDate.setYear(endTime.split("-")[0]);
                            endDate.setMonth(endTime.split("-")[1]-1);
                            endDate.setDate(endTime.split("-")[2]);
                            // console.log("endDate" + endDate);

                            let valid = startDate <= currentDate && endDate > currentDate;
                            // console.log(valid)
                            // console.log("current" + currentDate);
                            if (valid == true) {
                                currentQuart = quart[quarter];
                                // console.log("currentQuart"+currentQuart);
                            }

                        }
                        // console.log("format" + timeFormated);
                    });
                    $.ajax({url: `https://hcpss.instructure.com/grades_for_student?grading_period_id=${currentQuart.id}&enrollment_id=312300000${grd[0].id}`, method: "GET", async: false}).done(function(response1){
                        var str1 = JSON.stringify(response1);
                        var grd1 = JSON.parse(str1);
                        var grd2 = grd1.grade +"%"
                        if (grd1.grade == null)  {
                            grd2 = "N/A";
                        }
                        div.innerHTML = grd2;
                    });
                });
            }
        }
    }
}

function setAsgmtBckBtn()  {
    if (id.includes("submissions"))  {
        var bckbtn = document.createElement("A");
        bckbtn.setAttribute("class", "btn k5-back-to-subject");
        bckbtn.setAttribute("style", "float: right; margin-top: -30px;")
        var btntxt = document.createElement("I");
        btntxt.classList.add("icon-arrow-open-left");
        bckbtn.appendChild(btntxt);
        bckbtn.innerHTML += " Back to Assignment";
        bckbtn.href = id.substring(0, 64);
        document.getElementsByClassName("ic-Action-header__Primary")[0].appendChild(bckbtn);
    }
}

function setBetterTODO()  {
    if (id == "https://hcpss.instructure.com" || id == "https://hcpss.instructure.com/" || id == "https://hcpss.instructure.com/#homeroom" || id == "https://hcpss.instructure.com/#dashboard-activity")  {

        function waitForElm(selector) {
            return new Promise(resolve => {
                if (document.querySelector(selector)) {
                    return resolve(document.querySelector(selector));
                }
        
                const observer = new MutationObserver(mutations => {
                    if (document.querySelector(selector)) {
                        resolve(document.querySelector(selector));
                        observer.disconnect();
                    }
                });
        
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            });
        }
        var observer = new MutationObserver(addTODO);
        observer.observe(document.getElementById('right-side'), { childList: true, subtree: true, attributes: true });
        async function addTODO()  {
            observer.disconnect();
            console.log("test");
            var todoButton = document.createElement('button');
            todoButton.style.float = "right";
            todoButton.type = 'button';
            todoButton.value = 'false';
            todoButton.onclick = toggleTODO;
            todoButton.innerText = `Toggle TODOS: ${todoButton.value}`;

            
            var listContainer = document.createElement('ul');
            listContainer.setAttribute('class', 'fOyUs_bGBk fOyUs_UeJS fClCc_bGBk fClCc_fLbg');
            await fetch('https://hcpss.instructure.com/api/v1/users/self/todo', {method:"GET"})
            .then((response) => response.json())
            .then((data) => console.log(data));
            // https://du11hjcvx0uqb.cloudfront.net/dist/webpack-production/94237-c-bf251b2a9c.js


            // document.getElementById('planner-todosidebar-item-list').parentElement



            function toggleTODO()  {
                todoButton.value = todoButton.value == 'true' ? 'false' : 'true';
                todoButton.innerText = `Toggle TODOS: ${todoButton.value}`;
                insertTODO(todoButton);
                // if (todoButton.value == 'false') {
                //     todoButton.value = 'true';
                //     todoButton.innerText = `Toggle TODOS: ${todoButton.value}`;
                //     return
                // }
                // if (todoButton.value == 'true') {
                //     todoButton.value = 'false';
                //     todoButton.innerText = `Toggle TODOS: ${todoButton.value}`;
                //     return
                // }
            }

            await waitForElm('.todo-list-header').then((elm) => elm.appendChild(todoButton));

            const btnAppend = await waitForElm('.ToDoSidebarItem').then(() => {
                var todoHeader = document.getElementsByClassName('todo-list-header')[0];
                todoHeader.appendChild(todoButton);
                insertTODO(todoButton);
            })

            async function insertTODO(todoButton)  {
                if (todoButton.value == 'true')  {
                    document.getElementById('planner-todosidebar-item-list').style.display = "none";
                }
                if (todoButton.value == 'false')  {
                    document.getElementById('planner-todosidebar-item-list').style.display = "block";

                }
            }




        }

    }
}
