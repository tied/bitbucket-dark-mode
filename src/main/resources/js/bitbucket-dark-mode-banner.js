AJS.$(document).ready(function(){
    AJS.$('body').append(
        '<section id="dark-mode-invite-dialog" class="aui-dialog2 aui-layer" role="dialog" aria-hidden="true">' +
            '<div class="dark-mode-image"><div><a href="profile" id="button-spin-1">Go to profile and enable dark mode</a></div></div>' +
        '</section>');
    AJS.dialog2("#dark-mode-invite-dialog").show();
})