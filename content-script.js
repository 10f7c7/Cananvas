// "use strict";


//changePage();




//  CRETE GLOBAL FEATURE AUTO REMOVED MUTATION OBSERVER TO AUTMOATICALL PUT SOMEHTING BACK IF REMOVED BY PAGAE


/* chrome.runtime.sendMessage('get-grade-options', (response) => {
    if (response === true)  {
        setGrade();
    }
    console.log('received user data', response);
}); */
chrome.storage.sync.get(['grdTogl'], function(result) {
    if (result.grdTogl == true) {
        setGrade();
    }
});
// chrome.storage.sync.get(['tabTogl'], function(result){
//     if (result.tabTogl == true)  {
//         setTabs();
//     }
// });
chrome.storage.sync.get(['asgmtBckBtnTogl'], function(result) {
    if (result.asgmtBckBtnTogl == true) {
        setAsgmtBckBtn();
    }
});


chrome.storage.sync.get(['betterTODOTogl'], function(result) {
    if (result.betterTODOTogl == true) {
        setBetterTODO();
    }
});

if (document.getElementById("section-tabs-header-subtitle")) document.getElementById("section-tabs-header-subtitle").innerText += '\n' + document.getElementById("breadcrumbs").children[0].children[1].children[0].children[0].innerText;
document.getElementById("global_nav_conversations_link").children[1].innerHTML = "Email";
var id = window.location.href;

if (id == "https://hcpss.instructure.com" || id == "https://hcpss.instructure.com/" || id == "https://hcpss.instructure.com/#homeroom" || id == "https://hcpss.instructure.com/#dashboard-activity") {
    var actualCode =
        'window.prefetched_xhrs["/api/v1/dashboard/dashboard_cards"] = new Promise((resolve, reject) =>  {fetch ("/api/v1/dashboard/dashboard_cards", {"credentials":"same-origin","headers":{"Accept":"application/json+canvas-string-ids, application/json","X-Requested-With":"XMLHttpRequest"}}).then(res => res.json().then(data => ({headers: [...res.headers], body: data}))).then(json => {' +
        'json.body.forEach(element => {' +
        'var obj = {css_class: "assignments", icon: "icon-module", path: `${element.href}/modules`, label: "Modules"};' +
        'if (element.links.length >= 4)  {' +
        'element.links[3] = obj;' +
        '} else {' +
        'element.links.push(obj);' +
        '}' +
        '});' +
        'const blob = new Blob([JSON.stringify(json.body, null, 2)], {' +
        'type: "application/json",' +
        '});' +
        'const options = {status: 200, headers: new Headers(json.headers)};' +
        'resolve(new Response(blob, options));' +
        '})});';

    document.documentElement.setAttribute('onreset', actualCode);
    document.documentElement.dispatchEvent(new CustomEvent('reset'));
    document.documentElement.removeAttribute('onreset');

    // window.prefetched_xhrs["/api/v1/dashboard/dashboard_cards"] = new Promise((resolve, reject) =>  {fetch ("/api/v1/dashboard/dashboard_cards", {"credentials":"same-origin","headers":{"Accept":"application/json+canvas-string-ids, application/json","X-Requested-With":"XMLHttpRequest"}}).then(res => res.json().then(data => ({headers: [...res.headers], body: data}))).then(json => {
    //     json.body.forEach(element => {
    //         var obj = {css_class: "assignments", icon: "icon-module", path: `${element.href}/modules`, label: "Modules"};
    //         if (element.links.length >= 4)  {
    //             element.links[3] = obj;
    //         } else {
    //             element.links.push(obj);
    //         }
    //     });
    //     const blob = new Blob([JSON.stringify(json.body, null, 2)], {
    //         type: "application/json",
    //       });
    //     const options = {status: 200, headers: new Headers(json.headers)};
    //     resolve(new Response(blob, options));
    // })});


}


if (id.includes("discussion_topics")) {
    document.querySelectorAll(".discussion-entries").forEach(element => {
        element.style.borderLeft = "solid 5px #c1c7cf";
    });
}

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

function setGrade() {
    if (id == "https://hcpss.instructure.com" || id == "https://hcpss.instructure.com/" || id == "https://hcpss.instructure.com/#homeroom" || id == "https://hcpss.instructure.com/#dashboard-activity") {
        var courseCard = document.getElementsByClassName("ic-DashboardCard");
        var menuBtn = document.getElementsByClassName("ic-DashboardCard__header-button");
        var observer = new MutationObserver(addGrade);
        observer.observe(document.getElementById("DashboardCard_Container"), { childList: true, subtree: true });
        function addGrade() {
            observer.disconnect();
            for (var i = 0; i < courseCard.length; i++) {
                var crsnm = courseCard[i].children[0].children[2].href;
                var crsnmstr = courseCard[i].children[0].children[2].getAttribute("href");
                if (crsnmstr.length != 15) crsnmstr = null;
                // var crsnmstr = crsnm[38] + crsnm[39] + crsnm[40] + crsnm[41] + crsnm[42] + crsnm[43];
                var div = document.createElement('DIV');
                div.setAttribute("style", `z-index: 10; position: absolute; background-color: white; height: 22px; padding-right: 5px; padding-left: 5px; margin-top: 10px; margin-right: 10px; margin-left: 10px; float: left; border-radius: 10px; text-align: center; color: back; font-weight: bold;`);
                div.innerText = "N/A";
                div.setAttribute("onclick", "window.open('https://hcpss.instructure.com" + crsnmstr + "/grades'); event.stopPropagation()");
                courseCard[i].children[0].insertBefore(div, courseCard[i].children[0].children[0]);
                $.ajax({ url: "https://hcpss.instructure.com/api/v1" + crsnmstr + "/enrollments?user_id=self", method: "GET", async: false }).done(function(response) {
                    var str = JSON.stringify(response);
                    var grd = JSON.parse(str);
                    var currentQuart;
                    $.ajax({ url: `https://hcpss.instructure.com/api/v1${crsnmstr}/grading_periods`, method: "GET", async: false }).done(function(response) {
                        var quart = response.grading_periods;
                        // console.log("quart" + quart);

                        var date = new Date();
                        var time = date.toISOString();
                        var timeFormated = time.slice(0, 10);
                        for (var quarter in quart) {
                            let current = quart[quarter];
                            let startTime = current.start_date;
                            startTime = startTime.slice(0, 10);
                            // console.log("starttime" + startTime);

                            let endTime = current.end_date;
                            endTime = endTime.slice(0, 10);
                            // console.log("endtime" + endTime);

                            let currentDate = new Date();

                            let startDate = new Date(currentDate.getTime());
                            startDate.setYear(startTime.split("-")[0]);
                            startDate.setMonth(startTime.split("-")[1] - 1);
                            startDate.setDate(startTime.split("-")[2]);
                            // console.log("startdate"+startDate);
                            let endDate = new Date(currentDate.getTime());
                            endDate.setYear(endTime.split("-")[0]);
                            endDate.setMonth(endTime.split("-")[1] - 1);
                            endDate.setDate(endTime.split("-")[2]);
                            // console.log("endDate" + endDate);

                            let valid = startDate <= currentDate && endDate > currentDate;
                            // console.log(valid)
                            // console.log("current" + currentDate);
                            if (valid == true) {
                                currentQuart = quart[quarter];
                                // console.log("currentQuart" + currentQuart.id);
                            }

                        }
                        // console.log("format" + timeFormated);
                    });
                    $.ajax({ url: `https://hcpss.instructure.com/grades_for_student?grading_period_id=${currentQuart.id}&enrollment_id=312300000${grd[0].id}`, method: "GET", async: false }).done(function(response1) {
                        var str1 = JSON.stringify(response1);
                        var grd1 = JSON.parse(str1);
                        var grd2 = grd1.grade + "%"
                        if (grd1.grade == null) {
                            grd2 = "N/A";
                        }
                        div.innerText = grd2;
                    });
                });
                div.style.color = document.querySelectorAll(".ic-DashboardCard__header_hero")[i].style.backgroundColor;
            }
            var element = div;
            var in_dom = document.body.contains(element);
            var observere = new MutationObserver(function(mutations) {
                if (document.body.contains(element)) {
                    if (!in_dom) {
                        // console.log("element inserted");
                    }
                    in_dom = true;
                } else if (in_dom) {
                    in_dom = false;
                    console.log("trying to readd");
                    addGrade();
                    console.log("element removed");
                }

            });
            observere.observe(document.body, { childList: true, subtree: true });



        }
    }
}

function setAsgmtBckBtn() {
    if (id.includes("submissions")) {
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

function setBetterTODO() {
    if (id == "https://hcpss.instructure.com" || id == "https://hcpss.instructure.com/" || id == "https://hcpss.instructure.com/#homeroom" || id == "https://hcpss.instructure.com/#dashboard-activity") {

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
        async function addTODO() {
            observer.disconnect();
            var todoButton = document.createElement('button');
            todoButton.style.float = "right";
            todoButton.setAttribute('class', 'btn k5-back-to-subject');
            todoButton.type = 'button';
            todoButton.value = 'true';
            todoButton.onclick = toggleTODO;
            todoButton.innerText = `Toggle TODOS: ${todoButton.value}`;
            var listItem = [];

            var listContainer = document.createElement('ul');


            function createToDoItem(data, i) {

                let type = 'assignment';
                if (data.assignment.submission_types.includes('online_quiz')) {
                    type = 'quiz';
                }
                if (data.assignment.submission_types.includes('external_tool')) {
                    type = 'lti';
                }

                let todoItem = `
                    <li dir="ltr" class="css-1onamjj-view-listItem" id="todoItem${i}">
                    <div class="ToDoSidebarItem">
                    <i class="css-1xnn9jb-inlineSVG-svgIcon ToDoSidebarItem__Icon icon-${type}">
                    </i>
                    <!--<svg label="${type[0].toUpperCase()}${type.slice(1, type.length)}" name="Icon${type[0].toUpperCase()}${type.slice(1, type.length)}" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" class="ToDoSidebarItem__Icon css-1xnn9jb-inlineSVG-svgIcon" style="width: 1em; height: 1em;">
                    <g role="presentation">
                    <path d="M1587.162 31.278c11.52-23.491 37.27-35.689 63.473-29.816 25.525 6.099 43.483 28.8 43.483 55.002V570.46C1822.87 596.662 1920 710.733 1920 847.053c0 136.32-97.13 250.503-225.882 276.705v513.883c0 26.202-17.958 49.016-43.483 55.002a57.279 57.279 0 0 1-12.988 1.468c-21.12 0-40.772-11.745-50.485-31.171C1379.238 1247.203 964.18 1242.347 960 1242.347H564.706v564.706h87.755c-11.859-90.127-17.506-247.003 63.473-350.683 52.405-67.087 129.657-101.082 229.948-101.082v112.941c-64.49 0-110.57 18.861-140.837 57.487-68.781 87.868-45.064 263.83-30.269 324.254 4.18 16.828.34 34.673-10.277 48.34-10.73 13.665-27.219 21.684-44.499 21.684H508.235c-31.171 0-56.47-25.186-56.47-56.47v-621.177h-56.47c-155.747 0-282.354-126.607-282.354-282.353v-56.47h-56.47C25.299 903.523 0 878.336 0 847.052c0-31.172 25.299-56.471 56.47-56.471h56.471v-56.47c0-155.634 126.607-282.354 282.353-282.354h564.593c16.941-.112 420.48-7.002 627.275-420.48Zm-5.986 218.429c-194.71 242.371-452.216 298.164-564.705 311.04v572.724c112.489 12.876 369.995 68.556 564.705 311.04ZM903.53 564.7H395.294c-93.402 0-169.412 76.01-169.412 169.411v225.883c0 93.402 76.01 169.412 169.412 169.412H903.53V564.7Zm790.589 123.444v317.93c65.618-23.379 112.94-85.497 112.94-159.021 0-73.525-47.322-135.53-112.94-158.909Z" fill-rule="evenodd">
                    </path>
                    </g>
                    </svg>-->
                    <div class="ToDoSidebarItem__Info" data-testid="todo-sidebar-item-info">
                    <div class="ToDoSidebarItem__Title" data-testid="todo-sidebar-item-title">
                    <a dir="ltr" aria-label="${data.assignment.html_url}" href="/courses/32925/discussion_topics/2399604" class="css-6t42ud-view-link">
                    <span wrap="normal" letter-spacing="normal" class="css-10am28f-text">
                    ${data.assignment.name}
                    </span>
                    </a>
                    </div>
                    <span color="secondary" wrap="normal" letter-spacing="normal" class="css-4bnp8a-text">
                    ${data.context_name}
                    </span>
                    <ul dir="ltr" data-testid="ToDoSidebarItem__InformationRow" class="css-feuh9k-view--block">
                    <li dir="ltr" class="css-14ttj25-view--inlineBlock-inlineListItem">${data.assignment.points_possible} points<span aria-hidden="true" class="css-1wgh970-inlineListItem__delimiter"></span></li>
                    <li dir="ltr" class="css-14ttj25-view--inlineBlock-inlineListItem">
                    ${new Date(data.assignment.due_at).toLocaleDateString("en-US", {
                    month: 'short', day: 'numeric', hour: 'numeric',
                    minute: 'numeric'
                }).replace(',', ' at').replace(new
                    Date(data.assignment.due_at).toLocaleDateString("en-US", {
                        month:
                            'short', day: 'numeric', hour: 'numeric',
                        minute: 'numeric'
                    }).slice(-3), new
                        Date(data.assignment.due_at).toLocaleDateString("en-US", {
                            month:
                                'short', day: 'numeric', hour: 'numeric',
                            minute: 'numeric'
                        }).slice(-2).toLowerCase()).replace(new Date(data.assignment.due_at).toLocaleDateString("en-US", {
                            month: 'short', day: 'numeric', hour: 'numeric',
                            minute: 'numeric'
                        }).split(new Date(data.assignment.due_at).toLocaleDateString("en-US", {
                            month: 'short', day: 'numeric', hour: 'numeric',
                            minute: 'numeric'
                        }).split(':', 3)[0])[1].substring(0, 3) == ':00' ? new Date(data.assignment.due_at).toLocaleDateString("en-US", {
                            month: 'short', day: 'numeric', hour: 'numeric',
                            minute: 'numeric'
                        }).split(new Date(data.assignment.due_at).toLocaleDateString("en-US", {
                            month: 'short', day: 'numeric', hour: 'numeric',
                            minute: 'numeric'
                        }).split(':', 3)[0])[1].substring(0, 3) : '', '')}
                    <span aria-hidden="true" class="css-1wgh970-inlineListItem__delimiter">
                    </span>
                    </li>
                    </ul>
                    </div>
                    <div class="ToDoSidebarItem__Close" data-testid="todo-sidebar-item-close">
                    <span data-testid="todo-sidebar-item-close-button" class="css-btw693-closeButton">
                    <button id="todoItem${i}-btn" dir="ltr" cursor="pointer" type="button" tabindex="0" class="css-1j7nn9n-view--inlineBlock-baseButton">
                    <span class="css-12w1q2i-baseButton__content">
                    <span class="css-qi8ml9-baseButton__childrenLayout">
                    <span class="css-5udsuu-baseButton__iconOnly">
                    <span class="css-31gkb3-baseButton__iconSVG">
                    <svg name="IconX" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" class="css-1uh2md0-inlineSVG-svgIcon" style="width: 1em; height: 1em;"><g role="presentation"><path d="M797.32 985.882 344.772 1438.43l188.561 188.562 452.549-452.549 452.548 452.549 188.562-188.562-452.549-452.548 452.549-452.549-188.562-188.561L985.882 797.32 533.333 344.772 344.772 533.333z">
                    </path>
                    </g>
                    </svg>
                    </span>
                    <span class="css-1sr5vj2-screenReaderContent">
                    Dismiss ${data.context_name}
                    </span>
                    </span>
                    </span>
                    </span>
                    </button>
                    </span>
                    </div>
                    </div>
                    </li>
                    `;

                var wrapper = document.createElement('div');
                wrapper.innerHTML = todoItem;
                var itemDom = wrapper.children[0];

                // console.log(decodeURIComponent((document.cookie.match('(^|;) *_csrf_token=([^;]*)') || '')[2]));

                itemDom.querySelector(`#todoItem${i}-btn`).onclick = () => {
                    var ignoreLink = data.ignore;
                    // console.log(ignoreLink);
                    // const xhttp = new XMLHttpRequest();
                    // xhttp.open("DELETE", data.ignore);
                    // xhttp.send();
                    $.ajax({ url: `${data.ignore}`, type: "DELETE", headers: { 'X-CSRF-Token': `${decodeURIComponent((document.cookie.match('(^|;) *_csrf_token=([^;]*)') || '')[2])}` } }).fail(function(err) {
                        console.log(err);
                    });
                    document.querySelector(`#todoItem${i}`).remove();
                };

                return itemDom;
            }



            var data = [];

            $.ajax({ url: 'https://hcpss.instructure.com/api/v1/users/self/todo' }).done((response) => {
                data = response.sort((a, b) => { return new Date(a.assignment.due_at) - new Date(b.assignment.due_at) });
                listContainer.setAttribute('class', 'css-vftc6n-view--block-list');
                listContainer.setAttribute('display', 'none');

                for (var j = 0; j < data.length; j++) {
                    listItem[j] = createToDoItem(data[j], j);
                }

            })

            // https://du11hjcvx0uqb.cloudfront.net/dist/webpack-production/94237-c-bf251b2a9c.js


            // document.getElementById('planner-todosidebar-item-list').parentElement



            function toggleTODO() {
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

            // await waitForElm('.todo-list-header').then((elm) => elm.appendChild(todoButton));

            const btnAppend = await waitForElm('.ToDoSidebarItem').then(() => {
                var todoHeader = document.getElementsByClassName('todo-list-header')[0];
                todoHeader.appendChild(todoButton);
                insertTODO(todoButton);
                for (var i = 0; i < listItem.length; i++) {
                    // console.log(data[i].ignore);
                    var linke = data[i].ignore;
                    listContainer.append(listItem[i]);
                    // document.getElementById(`listElem${i}`).onclick = () => {$.ajax({url: linke, type: "DELETE"}); listItem[i].remove();};
                }
                document.querySelector("div[data-testid='ToDoSidebar']").appendChild(listContainer);

            })

            function insertTODO(todoButton) {
                if (todoButton.value == 'true') {
                    document.getElementById('planner-todosidebar-item-list').style.display = "none";
                    listContainer.style.display = "block";
                    document.getElementsByClassName('css-ev0s2h-view')[0].style.display = 'none';
                }
                if (todoButton.value == 'false') {
                    document.getElementById('planner-todosidebar-item-list').style.display = "block";
                    listContainer.style.display = "none";
                    document.getElementsByClassName('css-ev0s2h-view')[0].style.display = 'block';
                }
            }




        }

    }
}
