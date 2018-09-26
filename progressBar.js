function display_progress_bar() {  
        if (RMPApplication.get("a_progressbar_steps") != null) {  
            a_progressbar_steps = eval('(' + RMPApplication.get("a_progressbar_steps") + ')');  
            var cw_progresshtml = "";  
            cw_progresshtml = "<ol class='wizard-progress clearfix'>";  
            for (var i = 0; i < a_progressbar_steps.length; i++) {  
                var progress_node = "";  
                progress_node = progress_node + "<li class='" + a_progressbar_steps[i].status + "-step'>";
                progress_node = progress_node + "<span class='step-name'>" + a_progressbar_steps[i].title + "</span>";  
                progress_node = progress_node + "<span class='visuallyhidden'>Step</span><span class='step-num'>" + a_progressbar_steps[i].num + "</span>";  
                cw_progresshtml = cw_progresshtml + progress_node;  
            }  
            cw_progresshtml = cw_progresshtml + "</ol>";  
            RMP_this.id_html_progressbar.setHtml(cw_progresshtml);  
        }  
    }  
display_progress_bar();
