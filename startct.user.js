//<!--@@INCLUDE "greasemonkey\userscript.txt" INDENT=0 //-->
(function (f) {
    var d = document,
        s = d.createElement('script');
    s.textContent = '$(document).ready(' + f.toString() + ')';
    (d.body || d.head || d.documentElement).appendChild(s);
})(function () {
//<!--@@INCLUDE "global\world_data.user.js" INDENT=0 //-->
//<!--@@INCLUDE "global\settings.user.js" INDENT=0 //-->
//<!--@@INCLUDE "func\debug.user.js" INDENT=0 //-->
//<!--@@INCLUDE "func\time.user.js" INDENT=0 //-->
//<!--@@INCLUDE "func\stack.user.js" INDENT=0 //-->
//<!--@@INCLUDE "func\AttackID.user.js" INDENT=0 //-->
//<!--@@INCLUDE "func\group.user.js" INDENT=0 //-->
//<!--@@INCLUDE "func\Snipetool.user.js" INDENT=0 //-->
//Einde Functies
//<!--@@INCLUDE "page\incomings.user.js" INDENT=0 //-->
//<!--@@INCLUDE "page\buildings.user.js" INDENT=0 //-->
//<!--@@INCLUDE "page\units.user.js" INDENT=0 //-->
//<!--@@INCLUDE "page\call.user.js" INDENT=0 //-->
//<!--@@INCLUDE "page\info_command.user.js" INDENT=0 //-->
//<!--@@INCLUDE "page\overviewvillages.user.js" INDENT=0 //-->

});