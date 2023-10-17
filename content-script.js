// "use strict";


//changePage();




//  CRETE GLOBAL FEATURE AUTO REMOVED MUTATION OBSERVER TO AUTMOATICALL PUT SOMEHTING BACK IF REMOVED BY PAGAE


/* chrome.runtime.sendMessage('get-grade-options', (response) => {
    if (response === true)  {
        setGrade();
    }
    console.log('received user data', response);
}); */
console.log("content script running");
browser.storage.local.get(['grdTogl'], function (result) {
    if (result.grdTogl == true) {
        setGrade();
    }
});
// browser.storage.local.get(['tabTogl'], function(result){
//     if (result.tabTogl == true)  {
//         setTabs();
//     }
// });
browser.storage.local.get(['asgmtBckBtnTogl'], function (result) {
    if (result.asgmtBckBtnTogl == true) {
        setAsgmtBckBtn();
    }
});


browser.storage.local.get(['betterTODOTogl'], function (result) {
    if (result.betterTODOTogl == true) {
        setBetterTODO();
    }
});


var thisisveryname = setInterval(function () {
    if (document.getElementById("section-tabs-header-subtitle")) document.getElementById("section-tabs-header-subtitle").innerText += '\n'+ document.getElementById("breadcrumbs").children[0].children[1].children[0].children[0].innerText;
}, 9000);

document.getElementById("global_nav_conversations_link").children[1].innerHTML = "Email";
var id = window.location.href;


const URL = window.location.hostname.split('.').slice(0, -2).join('.');


if (id == `https://${URL}.instructure.com` || id == `https://${URL}.instructure.com/` || id == `https://${URL}.instructure.com/#homeroom` || id == `https://${URL}.instructure.com/#dashboard-activity`) {
    var actualCode =
    'window.prefetched_xhrs["/api/v1/dashboard/dashboard_cards"] = new Promise((resolve, reject) =>  {fetch ("/api/v1/dashboard/dashboard_cards", {"credentials":"same-origin","headers":{"Accept":"application/json+canvas-string-ids, application/json","X-Requested-With":"XMLHttpRequest"}}).then(res => res.json().then(data => ({headers: [...res.headers], body: data}))).then(json => {'+
        'json.body.forEach(element => {'+
            'var obj = {css_class: "assignments", icon: "icon-module", path: `${element.href}/modules`, label: "Modules"};'+
            'if (element.links.length >= 4)  {'+
                'element.links[3] = obj;'+
            '} else {'+
                'element.links.push(obj);'+
            '}'+
        '});'+
        'const blob = new Blob([JSON.stringify(json.body, null, 2)], {'+
            'type: "application/json",'+
          '});'+
        'const options = {status: 200, headers: new Headers(json.headers)};'+
        'resolve(new Response(blob, options));'+
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

async function postedAt()  {
    if (id.includes("assignments"))  {
        console.log("assignments");
        var postedAt = document.createElement("li");
        var Label = document.createElement("span");
        Label.innerText = "Posted";
        Label.setAttribute("class", "title");
        postedAt.appendChild(Label);
        var date = document.createElement("span");
        date.setAttribute("class", "value");
        postedAt.appendChild(date);

        var courseId = window.location.href.split("/")[4];
        var asgmtId = window.location.href.split("/")[6];
        var asgmtFetch = await fetch(`https://${URL}.instructure.com/api/v1/courses/${courseId}/assignments/${asgmtId}`);
        var asgmt = (await asgmtFetch.json());
        var postedAtDate = new Date((asgmt.unlock_at == null) ? asgmt.created_at : asgmt.unlock_at);
        // date.innerText = "at ";
        date.innerText += (postedAtDate.toLocaleDateString("en-US", {month: "short", year: "numeric", day: "numeric", hour: "numeric", minute: "numeric", hour12: true})).replace(", ", " at ").replace(" AM", "am").replace(" PM", "pm");

        document.getElementsByClassName("student-assignment-overview")[0].prepend(postedAt);

        // console.log(courseId);
    // console.log(document.getElementsByTagName("head")[0].getElementsByTagName("script")[3]);

    }
}
postedAt();
//https://${URL}.instructure.com/api/v1/courses/189271/tabs
// function setTabs()  {
//     if (id.includes("https://${URL}.instructure.com/courses")) {
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
//         crsmnu.innerHTML = "<div class='ic-sticky-frame'><span id='section-tabs-header-subtitle' class='ellipsis'>NE</span><nav role='navigation' aria-label='Courses Navigation Menu'><ul id='section-tabs'><li class='section'><a href='/courses/" + idStr + "' class='home' tabindex='0'>Home</a></li><li class='section'><a href='/courses/" + idStr + "/announcements' class='announcements' tabindex='0'>Announcements</a></li><li class='section'><a href='/courses/" + idStr + "/modules' class='modules' tabindex='0'>Modules</a></li><li class='section'><a href='/courses/" + idStr + "/assignments' class='assignments' tabindex='0'>Assignments</a></li><li class='section'><a href='/courses/" + idStr + "/grades' class='grades' tabindex='0'>Grades</a></li><li class='section'><a href='/courses/" + idStr + "/discussion_topics' class='discussions' tabindex='0'>Discussions</a></li><li class='section'><a href='/courses/" + idStr + "/assignments/syllabus' class='syllabus' tabindex='0'>Syllabus</a></li><li class='section'><a href='/courses/" + idStr + "/files' class='files' tabindex='0'>Files</a></li><li class='section'><a href='/courses/" + idStr + "/users' class='users' tabindex='0'>Users</a></li><li class='section'><a href='/courses/" + idStr + "/external_tools/38920' class='context_external_tool_38920' tabindex='0'>Google Drive</a></li><li class='section'><a href='/courses/" + idStr + "/external_tools/119166' class='context_external_tool_119166' tabindex='0'>hcpss.me</a></li></ul></nav></div>";
//         document.getElementById('main').insertBefore(crsmnu, document.getElementById('main').childNodes[0]);
//         if (document.getElementById('k5-course-header-hero') != null)  {
//             document.getElementById('k5-course-header-hero').style.height = "50px";
//         }

//     }
// };

function setGrade() {
    if (id == `https://${URL}.instructure.com` || id == `https://${URL}.instructure.com/` || id == `https://${URL}.instructure.com/#homeroom` || id == `https://${URL}.instructure.com/#dashboard-activity`) {
        var courseCard = document.getElementsByClassName("ic-DashboardCard");
        var menuBtn = document.getElementsByClassName("ic-DashboardCard__header-button");
        var observer = new MutationObserver(addGrade);
        observer.observe(document.getElementById("DashboardCard_Container"), { childList: true, subtree: true });
        async function addGrade() {
            observer.disconnect();
            const courseCardList = Object.values(courseCard);

            courseCardList.forEach(async(card) => {
                var crsurl = card.children[0].children[2].href;
                const regex = /(?<=\/)\d{6}(?=\/|$)/gm;
                try {
                    var crsid = regex.exec(crsurl)[0];
                } catch (error) {
                    console.log(error);
                    return
                }
                var div = document.createElement('DIV');
                div.setAttribute("class", "courseCardGrade");
                div.setAttribute("style", `z-index: 10; position: absolute; background-color: white; height: 22px; padding-right: 5px; padding-left: 5px; margin-top: 10px; margin-right: 10px; margin-left: 10px; float: left; border-radius: 10px; text-align: center; color: back; font-weight: bold;`);
                div.innerText = "N/A";
                div.setAttribute("onclick", `window.open('https://${URL}.instructure.com/courses/${crsid}/grades'); event.stopPropagation()`);
                card.children[0].insertBefore(div, card.children[0].children[0]);

                var grdFetch = await fetch(`https://${URL}.instructure.com/api/v1/courses/${crsid}/enrollments?user_id=self`);//.then((res) => console.log(res));
                var grd = await grdFetch.json();

                var quartFetch = await fetch(`https://${URL}.instructure.com/api/v1/courses/${crsid}/grading_periods`);
                var quart = (await quartFetch.json()).grading_periods;
                var date = new Date();
                var time = date.toISOString();
                var currentQuart;
                for (var quarter in quart) {
                    let current = quart[quarter];
                    let startTime = current.start_date;
                    startTime = startTime.slice(0, 10);

                    let endTime = current.end_date;
                    endTime = endTime.slice(0, 10);

                    let currentDate = new Date();

                    let startDate = new Date(currentDate.getTime());
                    startDate.setYear(startTime.split("-")[0]);
                    startDate.setMonth(startTime.split("-")[1] - 1);
                    startDate.setDate(startTime.split("-")[2]);
                    let endDate = new Date(currentDate.getTime());
                    endDate.setYear(endTime.split("-")[0]);
                    endDate.setMonth(endTime.split("-")[1] - 1);
                    endDate.setDate(endTime.split("-")[2]);

                    let valid = startDate <= currentDate && endDate > currentDate;
                    if (valid == true) {
                        currentQuart = quart[quarter];
                    }

                }
                var grd1Fetch = await fetch(`https://${URL}.instructure.com/grades_for_student?grading_period_id=${currentQuart.id}&enrollment_id=312300000${grd[0].id}`);
                var grd1 = await grd1Fetch.json();
                var grd2 = grd1.grade + "%"
                if (grd1.grade == null) {
                    grd2 = "N/A";
                }
                div.innerText = grd2;
                div.style.color = document.querySelectorAll(".ic-DashboardCard__header_hero")[i].style.backgroundColor;
                return;
            });
            var element = document.getElementsByClassName("courseCardGrade")[0];
            var in_dom = document.body.contains(element);
            var observere = new MutationObserver(function(mutations) {
                if (document.body.contains(element)) {
                    if (!in_dom) {
                        // console.log("element inserted");
                    }
                    in_dom = true;
                } else if (in_dom) {
                    in_dom = false;
                    addGrade();
                    console.log("element removed");
                }

            });
            observere.observe(document.body, {childList: true, subtree: true});



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
    if (id == `https://${URL}.instructure.com` || id == `https://${URL}.instructure.com/` || id == `https://${URL}.instructure.com/#homeroom` || id == `https://${URL}.instructure.com/#dashboard-activity`) {

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
                if (data.assignment.submission_types.includes('online_quiz'))  {
                    type = 'quiz';
                }
                if (data.assignment.submission_types.includes('external_tool'))  {
                    type = 'lti';
                }

                let todoItem = `
                <li class="fOyUs_bGBk jpyTq_bGBk jpyTq_ycrn" style="padding: 0px; max-width: 100%;" id="todoItem${i}">
                    <div class="ToDoSidebarItem">
                    <i class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk cGqzL_owrh ToDoSidebarItem__Icon icon-${type}">
                        </i>
                    <!--<svg label="Assignment" name="IconAssignment" viewBox="0 0 1920 1920" rotate="0"
                            width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false"
                            class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk cGqzL_owrh ToDoSidebarItem__Icon"
                            style="width: 1em; height: 1em;">
                            <g role="presentation">
                                <path
                                    d="M1468.2137,0 L1468.2137,564.697578 L1355.27419,564.697578 L1355.27419,112.939516 L112.939516,112.939516 L112.939516,1807.03225 L1355.27419,1807.03225 L1355.27419,1581.15322 L1468.2137,1581.15322 L1468.2137,1919.97177 L2.5243549e-29,1919.97177 L2.5243549e-29,0 L1468.2137,0 Z M1597.64239,581.310981 C1619.77853,559.174836 1655.46742,559.174836 1677.60356,581.310981 L1677.60356,581.310981 L1903.4826,807.190012 C1925.5058,829.213217 1925.5058,864.902104 1903.4826,887.038249 L1903.4826,887.038249 L1225.8455,1564.67534 C1215.22919,1575.17872 1200.88587,1581.16451 1185.86491,1581.16451 L1185.86491,1581.16451 L959.985883,1581.16451 C928.814576,1581.16451 903.516125,1555.86606 903.516125,1524.69475 L903.516125,1524.69475 L903.516125,1298.81572 C903.516125,1283.79477 909.501919,1269.45145 920.005294,1258.94807 L920.005294,1258.94807 Z M1442.35055,896.29929 L1016.45564,1322.1942 L1016.45564,1468.225 L1162.48643,1468.225 L1588.38135,1042.33008 L1442.35055,896.29929 Z M677.637094,1242.34597 L677.637094,1355.28548 L338.818547,1355.28548 L338.818547,1242.34597 L677.637094,1242.34597 Z M903.516125,1016.46693 L903.516125,1129.40645 L338.818547,1129.40645 L338.818547,1016.46693 L903.516125,1016.46693 Z M1637.62298,701.026867 L1522.19879,816.451052 L1668.22958,962.481846 L1783.65377,847.057661 L1637.62298,701.026867 Z M1129.39516,338.829841 L1129.39516,790.587903 L338.818547,790.587903 L338.818547,338.829841 L1129.39516,338.829841 Z M1016.45564,451.769356 L451.758062,451.769356 L451.758062,677.648388 L1016.45564,677.648388 L1016.45564,451.769356 Z"
                                    fill-rule="evenodd" stroke="none" stroke-width="1"></path>
                            </g>
                        </svg> -->
                        <div class="ToDoSidebarItem__Info">
                            <div class="ToDoSidebarItem__Title"><a href="${data.assignment.html_url}"
                                    class="fOyUs_bGBk fbyHH_bGBk fbyHH_vIby"><span wrap="normal" letter-spacing="normal"
                                        class="enRcg_bGBk enRcg_doqw enRcg_fNIu enRcg_eQnG">${data.assignment.name} </span></a></div><span
                                color="secondary" wrap="normal" letter-spacing="normal"
                                class="enRcg_bGBk enRcg_doqw enRcg_bdMA enRcg_fNIu enRcg_eQnG enRcg_bLsb">${data.context_name}</span>
                            <ul class="fOyUs_bGBk fOyUs_UeJS" style="margin: 0px; padding: 0px;">
                                <li class="fOyUs_bGBk fOyUs_cuDs ctrLD_bGBk ctrLD_doqw ctrLD_dnHs"
                                    style="padding: 0px; max-width: 100%;">${data.assignment.points_possible} points<span class="ctrLD_eLRq" aria-hidden="true"></span>
                                </li>
                                <li class="fOyUs_bGBk fOyUs_cuDs ctrLD_bGBk ctrLD_doqw ctrLD_dnHs"
                                    style="padding: 0px; max-width: 100%;">${new Date(data.assignment.due_at).toLocaleDateString("en-US", {
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
                        }).split(':', 3)[0])[1].substring(0, 3) : '', '')}<span class="ctrLD_eLRq"
                                        aria-hidden="true"></span></li>
                            </ul>
                        </div>
                        <div class="ToDoSidebarItem__Close"><span class="ejhDx_bGBk ejhDx_doBn ejhDx_coHh"><button id="todoItem${i}-btn" cursor="pointer"
                                    type="button" tabindex="0"
                                    class="fOyUs_bGBk fOyUs_fKyb fOyUs_cuDs fOyUs_cBHs fOyUs_eWbJ fOyUs_fmDy fOyUs_eeJl fOyUs_cBtr fOyUs_fuTR fOyUs_cnfU fQfxa_bGBk"
                                    style="margin: 0px; padding: 0px; border-radius: 0.25rem; border-width: 0px; width: auto; cursor: pointer;"><span
                                        class="fQfxa_caGd fQfxa_VCXp fQfxa_buuG fQfxa_EMjX fQfxa_bCUx fQfxa_bVmg fQfxa_bIHL"><span
                                            direction="row" wrap="no-wrap"
                                            class="fOyUs_bGBk fOyUs_desw bDzpk_bGBk bDzpk_eRIA bDzpk_fZWR bDzpk_qOas"
                                            style="width: 100%; height: 100%;"><span class="fOyUs_bGBk dJCgj_bGBk"><span
                                                    class="fQfxa_eoCh"><svg name="IconX" viewBox="0 0 1920 1920" rotate="0" width="1em"
                                                        height="1em" aria-hidden="true" role="presentation" focusable="false"
                                                        class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk"
                                                        style="width: 1em; height: 1em;">
                                                        <g role="presentation">
                                                            <path
                                                                d="M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z"
                                                                fill-rule="nonzero" stroke="none" stroke-width="1"></path>
                                                        </g>
                                                    </svg></span><span class="ergWt_bGBk">Dismiss ${data.context_name}
                                                </span></span></span></span></button></span></div>
                    </div>
                </li>
                `

                var wrapper = document.createElement('div');
                wrapper.innerHTML = todoItem;
                var itemDom = wrapper.children[0];

                // console.log(decodeURIComponent((document.cookie.match('(^|;) *_csrf_token=([^;]*)') || '')[2]));

                itemDom.querySelector(`#todoItem${i}-btn`).onclick = () => {
                    var ignoreLink = data.ignore;

                    fetch(ignoreLink, {method:"DELETE", headers: {'X-CSRF-Token': `${decodeURIComponent((document.cookie.match('(^|;) *_csrf_token=([^;]*)') || '')[2])}`}}).catch((err) => console.log(err));
                    document.querySelector(`#todoItem${i}`).remove();
                };

                return itemDom;
            }



            var data = [];


            var assignmentFetch = await fetch(`https://${URL}.instructure.com/api/v1/users/self/todo`)
            var assignment = (await assignmentFetch.json());

            data = assignment.sort((a, b) => { return new Date(a.assignment.due_at) - new Date(b.assignment.due_at) });
            listContainer.setAttribute('class', 'fOyUs_bGBk fOyUs_UeJS fClCc_bGBk fClCc_fLbg');
            listContainer.setAttribute('display', 'none');

            for (var j = 0; j < data.length; j++) {
                listItem[j] = createToDoItem(data[j], j);
            }

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
                    listContainer.append(listItem[i]);
                }
                document.querySelector("div[data-testid='ToDoSidebar']").appendChild(listContainer);

            })

            function insertTODO(todoButton) {
                if (todoButton.value == 'true') {
                    document.getElementById('planner-todosidebar-item-list').style.display = "none";
                    listContainer.style.display = "block";
                    document.getElementsByClassName('fOyUs_bGBk fOyUs_ImeN')[0].style.display = 'none';
                }
                if (todoButton.value == 'false') {
                    document.getElementById('planner-todosidebar-item-list').style.display = "block";
                    listContainer.style.display = "none";
                    document.getElementsByClassName('fOyUs_bGBk fOyUs_ImeN')[0].style.display = 'block';
                }
            }




        }

    }
}
