// ==UserScript==
// @name            napisy24.pl helper
// @version         0.8 beta
// @author          KO
// @description     Dodaje kilka ciekawych funkcji na stronie napisy24.pl
// @namespace       KO/napisy24_helper
// @icon            data:image/png;base64,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
// @include         http://napisy24.pl/*
// @downloadURL     https://github.com/olodev/n24h/raw/master/n24h.user.js
// @updateURL       https://github.com/olodev/n24h/raw/master/n24h.meta.js
// @grant           none
// @run-at          document-start
// ==/UserScript==

var icons = {
    staroff: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3gwUDR0hRbYVJwAAAjtJREFUOMudlM+rElEUx8+8lOGqE6PjzLyXGzczbhSVAqOyRYt2QYu3q7eqhehCJmwXiW8hSgvxByK0qFX/QIKLlsILIRI0uXlHQmgR+QZFEEZUnFaGr17O6x24i3vuuZ/DOed7L2UYBphZtVp9AAAQj8ffm8Va4ALGcVzKMAwKAEyBYBjGzlUulx9jjOcY43mlUjkyi98zyUeJopjgeZ7meZ4WBCEBANSuCzuBtVotFg6Hb2z2oVDoeq1Wi10KmMvlnKIoPnE6nb/77HK5LIIgPM1kMuw/S8rn8zcZhrlltVp9NpvNbbVa3TRNc3a73enz+fYRQmeS6rq+JoT8mM1m4+Vyqc3n85Gu6yNd1/F4PP5oYRjGL8vy81AotH+RiSOE9oLBoAcAPNv+drutEUIyV+r1+udGozFYr9cRURSdcAnrdDrfMcZKIpF4Q22EXSwW70qS9DoSicj/A2u1Wt9UVY0lk8kPAADU9kspFAoBr9f7LhqN+imKMtVvs9n8OhwOjxRF+XTulBVF6fZ6vcNut/vzAmWOCCGH27BzZWMYho1l2atmQJZlHYvFwmKqQ5fLdZ/neWQGFATBxnHcPVMgQiiA0Flev9/XVFXV/ogDhFDA9LdxOBwHm6YTQk4JISfT6fQlAAAh5FiW5duSJLm3Y3cCaZq+hjE+HQwGJ5qmvUilUl+2jh8WCoWAqqrHkiTdoWna89fT25ZNNps9YBjm7Wq1eqYoSm9XD0ulkh8AXk0mk0fpdHq88f8CflYIlVvjW0cAAAAASUVORK5CYII='
    ,staron: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3gwUDR8nnuPSkAAAAsZJREFUOMulk0tvG1UUx//n3Jm5M2NnUjueOnYCoptmQYNUSKEqFYss2CGqloeQ6AoWkbJtdhVS8wX4ALBAoq14NGXBAqFu2oqmFSgEUKqySRcNIbUzcRw7bTyx554unGeBuApHOrpX5179dF5/EhF0sj8mgrcA4KUzte87/bXwDOYGqXMiIAAdgdzpw68T6Q97+sPXcs+Fr05fTZ/9n0AiP3BHPV9pz1faTbujANG+gdMT/khYzA6ZJIZJYoR9mVemJ/yRfQF/ukwZL3A+sl2xEhMjMQ042lhe2v74+hd04D9runPRPu767glWPGA5Vo6YckpJj+Vwpjvn9bISFkk2OwDTIrMSNRZaTVORhCKTSLnVMuXWeuveWn31tqU990i2WBjL9x/sNSZGksQwZh3GbJ5NiCSACEAMVjZnC34fs+5jdqCUBrNG+UE5qii+QCKC374L3s4Wcp+GxeyhLWgSb0HFNCEQECkwO21XGopdsNKI5qtz0cNo7OXT9a9pc7Gnv/HeCPKZz/LPZw+bpIHtbBswSQwRsw1SLpg1WGmU5qr3q+XqyNC7jWu7hnL0vbWb1b+W3pmfXZjZvRkEgEBE7esO+3u2/Gc9qr+/CQMAelp6ty7SQPGF8EYm7+VNst4uWZqAtEsmdsDKwfLDuLw0Xxs+9kF8d0/psYHvem7AZAFsAAhEeGPIDCILTBZcX9Jxsm511LLb5b3pBymPWNr9IAYkgQAg8EaWFvxA+77nDQP4fU+gpfSg7XgQacKAwKKwUqpFYKA77MoRGMQWLGXD1s5gxwwdTxeYHYghVKOVxUqpOtlcjT8BgOrS4/FMeOD1bL4nR2zDcXShI1DZdrFSWl5cLi1OrlUenR86G8/seD41dUkP1qLV8Uw+PGk7uu8f2hORLb/5JQpTV1I//nzFeXFn/N/8l6/SR6a+Tf0w+TmyO+NPAC36SwTUSJYTAAAAAElFTkSuQmCC'
    ,search: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABJdEVYdENvcHlyaWdodABQdWJsaWMgRG9tYWluIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL3B1YmxpY2RvbWFpbi9Zw/7KAAABTklEQVQokY2PP0hCYRTFf/eZFThULhG0F0UQ4djgZsaHS0FBUK7NTkFNRVNbGER/oEVoCnyfgptbNAdRYwQ5BqJS6Ou2fMoriTrbvef+uOeIqgJQLpfngyDYFpElYAh4E5GTWCx2lkwm3wlJVBXf97MicgoM0q/7SCSymE6n692FZ61dEJELB+RFJNHpdMZUdQ2oA3NBEFx9++T7fglYBm6MMSuAds1isTjled4j8BmNRidTqVQNwANm3U0+DABkMpknoAl47XY70YvnSiMiEz/LVKvVAaDh/NcwZAFUNVupVOJhqNFoHAPjQK3Vaj2EO00Dt8Ao8AIcAXEXe9Xd7RljDnqQqmKtTQIFoC+iUwfYMsYUepDLP9xsNjdVdUZERlT1DvgALh0YABvGmOse9JustTvAYfejqq7/CTlwF9h34/O/IIBSqZRT1Rxw/gU4l4oisfSMMQAAAABJRU5ErkJggg=='
    ,gear: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3gwZCB0WCaqqHgAAA3FJREFUOMulVN1LI1cUP2fuHchmQ12jMRKNRIwFG1jb3ARhxIbp0vSh6EP70AUpeWj/o1LYV5XtUx8Ka0ultKDJiB9MaAyCYASt+dB80padWZmZe/vQzDYyrvvQ83Tvub/7Ox+/cy8KIeA+SyaTHyLiAgAAIUQ7ODjYvQ9P4S0my/LPc3NzFADg5OTkFQC8cx9eGtyoqupTFOUZY2wZAIAx9phSKhRFkRVFkSVJkpPJ5Hv9s88URXmmqqpvkAPdkhVFeSCE+CUcDrNOp8Mdx6lxzkOZTGZoZmYGAQBOT095Pp//S5KkNiEkEgwGpWazqSPix7u7u+atkoUQ30YiEZbNZn2O40C3250lhMDIyMjr6LOzs9Lw8PAjzvmjYDAIhBDY2tpiV1dX3wDA17cIbdv+qdVqfeE4DlBKYWxs7M4ejY6OwsAd6HQ69s3NzQ+eHh4eHn5v23a92+16SGq1GtRqNY+/2WyCZVl/6Lq+6VGZMfZYluWQJP2n08XFhSgUCoZlWfW+4pGlpSX/1NQUAgBQSoFzPskYY7qu6wAAmEwmP6KU/kgp5YuLiw/i8Tj2ewobGxuGaZpPdV1/0Q+6HAgEvltdXQ24QSuVitA0zbRtW7Jt+1MJEdOJRILmcjm/SwYAcHl5CY7jVF0yAABd119YltUYLD8ej2Mul/MnEgmKiGkJAAAR7xQAEfkdPvEG7L+iIGKxXC6L9fV1o1KpvAZHo1EghERTqVTW9aVSqSwhJDIxMQGDJa+trRnlclkgYhGFEICIyBj7gFL628rKypA7Gufn57xQKJiO49T6bzmSyWT80WhUclXe3Nz807KsJ8VisSiEELQvgACAoqIoTc75kBs9FotJsVjsYbVafRcRYTAzdw4JIdW9vT3dM4fpdHqFEDIRDAY9/ZmcnPSQuUOOiNOMsU88hLIsfx4OhwkhBGzbhlarBb1ez0PS6/Wg1WqBbdsgyzKEQiHq8/meej6H+fn5h36//9fx8fH32+22wzlvOI4zpqpqYHp6GgEAzs7OxPb29t+EkDYhZDwUCpF6vf67YRhPSqXSy1sZlkqll4ioXl9fPzcM40tN0+KWZak7Ozumi8nn868sy1rSNG3GNM2vGo3Gc0RUXbJbGb7JFhYWzEQiQQEAjo+Pb/b39wP/68cWQiwfHR2x/vrwbfh/AK2fjH9FpXiPAAAAAElFTkSuQmCC'
};

var options_db      = 'n24h_options';
var shows_db        = 'n24h_shows';

var utils = {
    /**
        Dodaj dodatkowego CSS'a do strony
    */
    insertcss: function(css) {
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        if (style.styleSheet)
        {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.head.appendChild(style);
    }
};

/**
    Obsługa opcji
*/
var options = {
    /**
        Zapisz wartość
    */
    setValue: function(name, value) {
        var optdb=localStorage.getItem(options_db);

        if (!optdb)
            optdb='{}';
        var o=JSON.parse(optdb);

        o[name]=value;
        localStorage.setItem(options_db, JSON.stringify(o));
    },
    /**
        Pobierz wartość
    */
    getValue: function(name, def) {
        var optdb=localStorage.getItem(options_db);

        if (!optdb)
            optdb='{}';
        var o=JSON.parse(optdb);

        var value=o[name];
        if (value==null)
            value=def;

        return value;
    },
    /**
        Usuń klucz z opcji
    */
    remove: function(name) {
        var optdb=localStorage.getItem(options_db);

        if (!optdb)
            optdb='{}';
        var o=JSON.parse(optdb);

        delete o[name];
        localStorage.setItem(options_db, JSON.stringify(o));

    },
    /**
        Pokaż/ukryj checkboxy w zależności od innych opcji
    */
    showHideCheckboxs: function() {
        var n24info=document.querySelector('input[data-n24h-checkbox="shown24info"]');
        var useimdb=document.querySelector('input[data-n24h-checkbox="useimdbinfo"]');
        if (n24info.checked)
            useimdb.parentNode.setAttribute('style', 'display:block');
        else
            useimdb.parentNode.setAttribute('style', 'display:none');
    },
    /**
        Wypełnij panele aktualnymi ustawieniami, serialami, itp.
    */
    fillPanels: function() {
        var inputs=document.querySelectorAll('input[data-n24h-checkbox]');
        for (var i=0;i<inputs.length;i++)
        {
            inputs[i].checked=options.getValue(inputs[i].getAttribute('data-n24h-checkbox'), false);
        }
        var keywords=showsdb.getAll();
        var areashows=document.getElementById('n24h_opt_areashows');
        var showtext='';
        for (var i=0;i<keywords.length;i++)
        {
            if (showtext!='')
                showtext+='\n';
            showtext+=keywords[i];
        }
        areashows.value=showtext;
        var areadebug=document.getElementById('n24h_opt_areadebug');
        var debugtext='/**opcje**/\n';
        debugtext+=localStorage.getItem(options_db);
        debugtext+='\n\n/**seriale**/\n';
        debugtext+=localStorage.getItem(shows_db);
        areadebug.value=debugtext;
        options.showHideCheckboxs();
    },
    /**
        Pokaż panel opcji
    */
    show: function() {
        options.fillPanels();
        var panel=document.querySelector('div.n24h_options_background');
        panel.setAttribute('style', 'display:block');
    },
    /**
        Ukryj panel opcji
    */
    hide: function() {
        var panel=document.querySelector('div.n24h_options_background');
        panel.setAttribute('style', 'display:none');
    },
    /**
        Obsługa kliknięcia checkboxa
    */
    checkboxClick: function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        options.setValue(target.getAttribute('data-n24h-checkbox'), target.checked);
        options.showHideCheckboxs();
    },
    /**
        Obsługa kliknięcia przycisku sekcji
    */
    typeButtonClick: function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var panel = target.getAttribute('data-n24h-optiontype');
        var opt_panels=document.querySelectorAll('div[data-n24h-optionpanel]');
        for (var i=0;i<opt_panels.length;i++)
        {
            opt_panels[i].setAttribute('style', panel==opt_panels[i].getAttribute('data-n24h-optionpanel')?'display:block':'display:none');
        }
        var opt_buttons=document.querySelectorAll('div[data-n24h-optiontype]');
        for (var i=0;i<opt_buttons.length;i++)
        {
            opt_buttons[i].setAttribute('class', panel==opt_buttons[i].getAttribute('data-n24h-optiontype')?'n24h_options_panel_button n24h_options_panel_button_selected':'n24h_options_panel_button');
        }
        options.fillPanels();
    },
    /**
        Obsługa przycisku zapisz
    */
    btnSaveClick: function() {
        var areashows=document.getElementById('n24h_opt_areashows');
        var shows = areashows.value.split('\n');
        localStorage.removeItem(shows_db);
        for (var i=0;i<shows.length;i++)
        {
            console.log(shows[i]);
            if (shows[i] != null && shows[i] != '' && !showsdb.exists(shows[i].trim()))
                showsdb.add(shows[i].trim());
        }
        options.fillPanels();
    },
    /**
        Obsługa przycisku usuwania opcji 
    */
    btnKillOptClick: function() {
        if (confirm('Czy napewno chcesz usunąć wszystkie ustawienia?\nNie będzie można tego cofnąć.'))
            localStorage.removeItem(options_db);
        options.fillPanels();
    },
    /**
        Obsługa przycisku usuwania seriali
    */
    btnKillShowsClick: function() {
        if (confirm('Czy napewno chcesz usunąć wszystkie ulubione filmy/seriale?\nNie będzie można tego cofnąć.'))
            localStorage.removeItem(shows_db);
        options.fillPanels();
    },
    init: function() {
        var css='#n24h_options_gear{'+
                    'cursor:pointer;'+
                    'width:20px;'+
                    'line-height: 26px;'+
                    '}'+
                '.n24h_options_background{'+
                    'position:fixed;'+
                    'top:0;'+
                    'left:0;'+
                    'width:100%;'+
                    'height:100%;'+
                    'background:rgba(0,0,0,0.6);'+
                    'text-align:center;'+
                    'z-index:9999;'+
                    '}'+
                '.n24h_options_dialog{'+
                    'margin: 0px auto;'+
                    'padding: 50px 0px;'+
                    'width: 900px;'+
                    'height: 100%;'+
                    'transition: none 0s ease 0s;'+
                    'transform: none;'+
                    'position: relative;'+
                    'box-sizing: border-box;'+
                    '}'+
                '.n24h_options_content{'+
                    'max-height: 100%;'+
                    'overflow-y: auto;'+
                    'border: 4px solid rgba(85, 85, 85, 0.5);'+
                    'background-clip: padding-box;'+
                    'box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);'+
                    'border-radius: 13px;'+
                    'position: relative;'+
                    'outline: 0px none;'+
                    'background-color: #FFF;'+
                    'box-sizing: border-box;'+
                    'color: #303030;'+
                    'font-family: Arial,Helvetica,sans-serif;'+
                    'text-align:left;'+
                    'display: block;'+//
                    '}'+
                '.n24h_options_header{'+
                    'margin: 0px;'+
                    'border-bottom: 1px solid #A0A0A0;'+
                    'padding: 10px 10px 0px 10px;'+
                    '}'+
                '.n24h_options_body{'+
                    'display: table;'+
                    'min-height: 150px;'+
                    '}'+
                '.n24h_options_body>input{'+
                    'margin: 0px;'+
                    '}'+
                '.n24h_options_close{'+
                    'float:right;'+
                    'padding: 0px;'+
                    'border: 1px solid;'+
                    'cursor:pointer;'+
                    'margin-top: -25px;'+
                    'padding: 1px 2px 1px 2px;'+
                    'border-radius: 5px;'+
                    '}'+
                '.n24h_options_close:hover{'+
                    'background-color: #D0D0D0;'+
                    'border-color: #646F7C;'+
                    '}'+
                '.n24h_options_panel_l{'+
                    'padding: 10px;'+
                    'border-right: 1px solid #A0A0A0;'+
                    'display: table-cell;'+
                    'position: relative;'+
                    
                    '}'+
                '.n24h_options_panel_r{'+
                    'padding: 10px;'+
                    'width: 750px;'+
                    '}'+
                '.n24h_options_panel_button{'+
                    'cursor: pointer;'+
                    'background-color: #D5D5D5;'+
                    'border: 1px solid #000000;'+
                    'border-bottom: 3px solid #000000;'+
                    'padding: 5px 10px 5px 10px;'+
                    'margin-bottom: 2px;'+
                    '}'+
                '.n24h_options_panel_button:hover{'+
                    'background-color: #E0E0E0;'+
                    'border-radius: 0px 0px 3px 3px;'+
                    'border-bottom: 3px solid #D26911;'+
                    '}'+
                '.n24h_options_panel_button_selected{'+
                    'border-radius: 0px 0px 3px 3px;'+
                    'border-bottom: 3px solid #F21911;'+
                    '}'+
                '.n24h_opt_button{'+
                    'background-color: #D5D5D5;'+
                    'border: 1px solid #000000;'+
                    'border-bottom: 3px solid #000000;'+
                    'padding: 3px 5px 3px 5px;'+
                    'margin-top: 5px;'+
                    'margin-right: 5px;'+
                    '}'+
                '.n24h_opt_button:hover{'+
                    'background-color: #E0E0E0;'+
                    'border-radius: 0px 0px 3px 3px;'+
                    'border-bottom: 3px solid #D26911;'+
                    '}'+
                '.n24h_opt_area{'+
                    'width: 100%;'+
                    'height: auto;'+
                    'cursor: auto !important;'+
                    'margin-bottom: 0px;'+
                    'background-color: #EEEEEE;'+
                    'color: #555555;'+
                    '}'+
                '.n24h_opt_area:focus{'+
                    'color: #555555;'+
                    '}'+
                '.n24h_options_panel_r > div > input[type="checkbox"]{'+
                    'margin: 0px;'+
                    'margin-top: -4px;'+
                    '}'+
                '.n24_option_level2{'+
                    'margin-left:30px;'+
                    '}';

        var ul=document.querySelector('ul.avatar-main-menu-szare');
        if (!ul)
            return;
        utils.insertcss(css);
        var li=document.createElement('li');
        li.setAttribute('id', 'n24h_options_gear');
        li.setAttribute('title', 'napisy24.pl helper opcje');
        li.addEventListener('click', options.show, false);
        var img=document.createElement('img');
        img.setAttribute('src', icons.gear);
        img.setAttribute('style', 'margin-top: -5px;');
        li.appendChild(img);
        ul.appendChild(li);
        var panel = document.createElement('div');
        panel.innerHTML='<div class="n24h_options_background" style="display:none">'+
                            '<div class="n24h_options_dialog">'+
                                '<div class="n24h_options_content">'+
                                    '<div class="n24h_options_header">'+
                                        '<img src="'+icons.gear+'" style="margin-top: -5px;padding-right: 5px;">Opcje:<br/>'+
                                        '<span style="color:red;font-size:small;">Zmiana opcji wymaga przeładowania strony.</span>'+
                                        '<div class="n24h_options_close">X</div>'+
                                    '</div>'+
                                    '<div class="n24h_options_body">'+
                                        '<div class="n24h_options_panel_l">'+
                                            '<div class="n24h_options_panel_button n24h_options_panel_button_selected" data-n24h-optiontype="general">Ogólne</div>'+
                                            '<div class="n24h_options_panel_button" data-n24h-optiontype="shows">Seriale</div>'+
                                            '<div class="n24h_options_panel_button" data-n24h-optiontype="debug">Debug</div>'+
                                        '</div>'+
                                        '<div class="n24h_options_panel_r" data-n24h-optionpanel="general">'+
                                            '<div><input type="checkbox" data-n24h-checkbox="fixsearch"> Zapamiętaj tekst w wyszukiwarce</div>'+
                                            '<div><input type="checkbox" data-n24h-checkbox="killcover"> Usuń okładki filmów/seriali</div>'+
                                            '<div><input type="checkbox" data-n24h-checkbox="killimdbinfo"> Usuń info o serialu/ocenę IMDB</div>'+
                                            '<div><input type="checkbox" data-n24h-checkbox="shown24info"> Na stronie z tłumaczeniami pokaż info N24/IMDB</div>'+
                                            '<div class="n24_option_level2" style="display:none"><input type="checkbox" data-n24h-checkbox="useimdbinfo"> Zastąp info N24 linkiem do IMDB</div>'+
                                            '<div><input type="checkbox" data-n24h-checkbox="usealtskin"> Używaj alternatywnej (jasnej) skórki</div>'+
                                        '</div>'+
                                        '<div style="display:none" class="n24h_options_panel_r" data-n24h-optionpanel="shows">'+
                                            '<label>Ulubione filmy/seriale (jeden film/serial na linię)</label>'+
                                            '<textarea id="n24h_opt_areashows" class="n24h_opt_area" rows="10" ></textarea>'+
                                            '<button id="n24h_opt_btn_save" class="n24h_opt_button">Zapisz</button>'+
                                        '</div>'+
                                        '<div style="display:none" class="n24h_options_panel_r" data-n24h-optionpanel="debug">'+
                                            '<label>Informacje do debugowania</label>'+
                                            '<textarea id="n24h_opt_areadebug" rows="10" class="n24h_opt_area" readOnly></textarea>'+
                                            '<button id="n24h_opt_btn_killshows" class="n24h_opt_button">Usuń wszystkie ulubione filmy/seriale</button>'+
                                            '<button id="n24h_opt_btn_killopt" class="n24h_opt_button">Usuń wszystkie ustawienia (bez filmów/seriali)</button>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
        document.body.appendChild(panel);
        //przycisk zapisz
        var close=document.querySelector('div.n24h_options_close');
        close.addEventListener('click', options.hide, false);
        //checkboxy
        var opt_checkboxs=document.querySelectorAll('input[data-n24h-checkbox]');
        for (var i=0;i<opt_checkboxs.length;i++)
            opt_checkboxs[i].addEventListener('click', options.checkboxClick, false);
        //sekcje
        var opt_types=document.querySelectorAll('div[data-n24h-optiontype]');
        for (var i=0;i<opt_types.length;i++)
            opt_types[i].addEventListener('click', options.typeButtonClick, false);
        //przycisk zapisz
        var opt_btn_save=document.getElementById('n24h_opt_btn_save');
        opt_btn_save.addEventListener('click', options.btnSaveClick, false);
        //usuń opcje
        var opt_btn_killopt=document.getElementById('n24h_opt_btn_killopt');
        opt_btn_killopt.addEventListener('click', options.btnKillOptClick, false);
        //usuń seriale
        var opt_btn_killshows=document.getElementById('n24h_opt_btn_killshows');
        opt_btn_killshows.addEventListener('click', options.btnKillShowsClick, false);
    }
};

var showsdb = {
    all: null,
    upper: null,
    /**
        Pobiera tablicę fraz-kluczy.
        @return array Tablica fraz-kluczy.
    */
    getAll: function() {
        var keywords = localStorage.getItem(shows_db);
        this.all     = (keywords != null && keywords != '') ? JSON.parse(keywords) : [];
        return this.all;
    },
    /**
        Pobiera tablicę fraz-kluczy.
        @param string keyword
        @return bool Prawda jeśli keyword istnieje w tablicy; inaczej fałsz.
    */
    exists: function(keyword) {
        var keywords = localStorage.getItem(shows_db);
        this.upper   = (keywords != null && keywords != '') ? JSON.parse(keywords.toUpperCase()) : [];
        return this.upper.indexOf(keyword.toUpperCase()) < 0 ? false : true;
    },
    /**
        Dodaje keyword do tablicy fraz-kluczy.
        @param string keyword
        @return void
    */
    add: function(keyword) {
        if (!this.exists(keyword))
        {
            this.getAll();
            this.all = this.all.concat([keyword]);
            localStorage.setItem(shows_db, JSON.stringify(this.all));
            return 1;
        }
        return 0;
    },
    /**
        Usuwa keyword z tablicy fraz-kluczy.
        @param string keyword
        @return void
    */
    remove: function(keyword) {
        if (this.exists(keyword))
        {
            this.getAll();
            this.all.splice(this.upper.indexOf(keyword.toUpperCase()), 1);
            localStorage.setItem(shows_db, JSON.stringify(this.all));
            return 1;
        }
        return 0;
    }
};

/**
    Strona z tłumaczeniami
*/
var tlumaczenia = {
    /**
        Pobierz nazwę filmu/serialu bez numeru sezonu i odcinka/odcinków
    */
    getTitle: function(row) {
        var title=row.getAttribute('data-head');
        //oczyść tytuł ze wszystkich śmieci i numeru serii oraz odcinka/odcinków
        title=title.trim().replace(/\d+x\d+.*/, '');
        //usuń spacje na końcu która pozostała po wywaleniu numeru serii i odcina
        title=title.trim();
        return title;
    },
    /**
        Zrób zebrę od nowa
    */
    restyleRows: function() {
        var rows=document.querySelectorAll('table#translationsTable > tbody > tr:not([style*="none"])');
        for (var i=0;i<rows.length;i++) {
            var trcl=rows[i].getAttribute('class');
            trcl=trcl.replace(/(odd|even)/, '');
            if (i%2)
            {
                rows[i].setAttribute('class', trcl+' odd');
            } else {
                rows[i].setAttribute('class', trcl+' even');
            }
        }
    },
    /**
        Przenieś wiersz na szczyt listy
    */
    moveTop: function(row) {
        //znajdź tabelkę z tłumaczeniami
        var table=document.querySelector('table#translationsTable > tbody');
        //znajdź pierwszy wiersz tabelki
        var first_line=table.querySelector('tr');
        //wstaw przed pierwszy wiersz nasz wiersz
        table.insertBefore(row,first_line);
        var td=row.querySelector('td[data-n24h-star]');
        td.setAttribute('data-n24h-star', 'on');
    },
    /**
        Umieść ulubione filmy/seriale na szczycie listy
    */
    FavoriteOnTop: function() {
        /**
            Dla każdego wiersza w tabeli...
            Od końca do początku, żeby zachować kolejność sortowania
        */
        var rows=document.querySelectorAll('table#translationsTable > tbody > tr');
        for (var i=rows.length-1;i>=0;i--)
        {
            var row=rows[i];
            /**
                Wyciąga tytuł i oczyszcza go ze zbędnych znaków.
            */
            var title=tlumaczenia.getTitle(row);
            if (showsdb.exists(title))
            {
                //Znaleziono dopasowanie.
                tlumaczenia.moveTop(row);
            } else {
                //Nie ma dopasowanie
                //Wyczyść na wszelki wypadek gwiazdkę
                var td=row.querySelector('td[data-n24h-star]');
                td.setAttribute('data-n24h-star', 'off');
            }
        }
        tlumaczenia.restyleRows();
    },
    /**
        Sortowanie tabelki z tłumaczeniami
    */
    sortTable: function(col, reverse) {
        var table=document.querySelector('table#translationsTable');
        col = typeof col !== 'undefined' ? col : options.getValue('column', 4);
        reverse = typeof reverse !== 'undefined' ? reverse : options.getValue('reverse', 1);
        var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
            tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
            i;
        reverse = -((+reverse) || -1);
        tr = tr.sort(function (a, b) { // sort rows
            var atext=a.cells[col].textContent.trim();
            var btext=b.cells[col].textContent.trim();
            if ((col==3)||(col==4))
            {
                //Kolumna 3: "Postęp"
                //Kolumna 4: "Oczekujący"
                //trzeba usunąć znaki: procentu, plus i minus oraz zamienić na numerek
                avalue=Number(atext.replace(/[\+\-\%]/g, ''));
                bvalue=Number(btext.replace(/[\+\-\%]/g, ''));
                return reverse==1?avalue-bvalue:bvalue-avalue;
            } else {
                //resztę kolumn traktujemy jako tekstowe
                // `-1 *` if want opposite order
                return reverse * (atext.localeCompare(btext));
            }
        });
        for(i = 0; i < tr.length; ++i)
        {
            tb.appendChild(tr[i]); // append each row in order
        }

        //zapisz ustawienia sortowania
        options.setValue('column', col);
        options.setValue('reverse', -((+reverse) || -1));
        //przesuń ulubione na samą górę
        tlumaczenia.FavoriteOnTop();
    },
    /**
        Obsługa kliknięcia w gwiazdkę
    */
    StarClickHandler: function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var row=target.parentNode;
        var title=tlumaczenia.getTitle(row);
        if (this.getAttribute('data-n24h-star')!='on')
        {
            //Zacznij śledzić...
            var keyword = prompt('Podaj tytuł filmu lub serialu\nbez numeracji sezonu/odcinka:', tlumaczenia.getTitle(row));
            tlumaczenia.AddTitle(keyword);
        } else {
            //Przestań śledzić...
            tlumaczenia.RemoveTitle(title);
        }
    },
    /**
        Szukanie filmu/serialu na liście tłumaczonych
    */
    DoSearch: function() {
        var keyword = document.querySelector('input#n24h_tr_input_search').value.trim().toUpperCase();
        var rows=document.querySelectorAll('table#translationsTable > tbody > tr');
        for (var i=0;i<rows.length;i++)
        {
            var row=rows[i];
            var title=tlumaczenia.getTitle(row).toUpperCase();
            if (keyword == null || keyword == '')
            {
                //pokazujemy wszystkie rekordy
                row.style.display='table-row';
            } else if (title.indexOf(keyword)!=-1)
            {
                row.style.display='table-row';
            } else {
                row.style.display='none';
            }
        }
        tlumaczenia.restyleRows();
    },
    /**
        Obsługa szukania z uwzględnieniem przycisku ESC
    */
    SearchHandler: function(e) {
        e = e || window.event;
        if (e.keyCode==27)
            document.getElementById('n24h_tr_input_search').value='';
        tlumaczenia.DoSearch();
    },
    /**
        Przycisk wyczyść
    */
    ClearHandler: function() {
        document.getElementById('n24h_tr_input_search').value='';
        tlumaczenia.DoSearch();
    },
    /**
        Dodaj film/serial do listy ulubionych
    */
    AddTitle: function(title) {
        if (title != null && title != '' && !showsdb.exists(title))
        {
            if (showsdb.add(title))
            {
                document.querySelector('input#n24h_tr_input_new').value='';
                var select=document.querySelector('select#n24h_tr_shows_list');
                var option=document.createElement("option");
                option.text=title;
                option.setAttribute('class', 'n24h_tr_option');
                select.add(option);
                tlumaczenia.sortTable();
            }
        }
    },
    /**
        Przycisk dodaj
    */
    AddNewHandler: function() {
        var keyword = document.querySelector('input#n24h_tr_input_new').value.trim();
        tlumaczenia.AddTitle(keyword);
    },
    /**
        Usuń film/serial z listy ulubionych
    */
    RemoveTitle: function(title) {
        if (showsdb.exists(title))
        {
            if (showsdb.remove(title))
            {
                var select=document.querySelector('select#n24h_tr_shows_list');
                for (var i=0;i<select.length;i++)
                    if (select[i].value.toUpperCase()==title.toUpperCase())
                    {
                        select.remove(i);
                        break;
                    }
            }
            tlumaczenia.sortTable();
        }
    },
    /**
        Przycisk usuń
    */
    RemoveHandler: function() {
        var keyword = document.querySelector('select#n24h_tr_shows_list').value;
        tlumaczenia.RemoveTitle(keyword);
    },
    /**
        Dodaj panel na górze tabelki z tłumaczeniami
    */
    AddPanel: function() {
        var css='#n24h_tr_input_search{'+ //wyszukiwanie
                    'margin-right: 5px;'+
                    'padding-left: 22px;'+
                    'border-radius: 4px;'+
                    'height: 25px;'+
                    'margin-bottom: 0px;'+
                    'width: 150px;'+
                    'background-repeat: no-repeat;'+
                    'background-position: 5px center;'+
                    'background-image: url('+icons.search+');'+
                    '}'+
                '#n24h_tr_input_new{'+
                    'margin-right: 5px;'+
                    'padding-left: 27px;'+
                    'border-radius: 4px;'+
                    'height: 25px;'+
                    'margin-bottom: 0px;'+
                    'width: 150px;'+
                    'background-repeat: no-repeat;'+
                    'background-position: 5px center;'+
                    'background-image: url('+icons.staroff+');'+
                    '}'+
                '#n24h_tr_input_clear,#n24h_tr_input_add,#n24h_tr_input_remove{'+
                    'border: 1px solid #32383E;'+
                    'background-color: #1B1F23;'+
                    'color: #7A878C;'+
                    'border-radius: 4px;'+
                    'cursor: pointer;'+
                    'width: 80px;'+
                    'height: 25px;'+
                    '}'+
                '#n24h_tr_input_clear:hover,#n24h_tr_input_add:hover,#n24h_tr_input_remove:hover{'+
                    'border-color:rgba(82, 168, 236, 0.8);outline:0;outline:thin dotted \9;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);'+
                    '}'+
                '#n24h_tr_shows_list{'+
                    'width: auto;'+
                    'margin-right: 5px;'+
                    'height: 25px;'+
                    'margin-bottom: 0px;'+
                    'margin-left: 30px;'+
                    'border: 1px solid #32383E'+
                    'background-color: #1B1F23;'+
                    'color: #7A878C;'+
                    'max-width: 200px;'+
                    '}'+
                '.n24h_tr_option{'+
                    'background-color: #1B1F23;'+
                    'color: #7A878C;'+
                    '}';
        var trtable=document.querySelector('table#translationsTable');
        if (!trtable)
            return;
        utils.insertcss(css);
        var panel=document.createElement('div');    //panel z opcjami
        panel.setAttribute('id', 'n24h_tr_panel');
        panel.setAttribute('class', 'tbl_top');
        panel.setAttribute('style', 'margin: 0px;');

        var div=document.createElement('div');      //ogólny div ze wszystkim
        div.setAttribute('style', 'float:none;padding: 10px; margin-top: -15px; margin-bottom: 15px;');

        var left_div=document.createElement('div');     //lewa część opcji
        left_div.setAttribute('style', 'float:left')

        var input_search=document.createElement('input'); //okienko do szukania
        input_search.setAttribute('id', 'n24h_tr_input_search');
        input_search.setAttribute('type', 'text');
        input_search.setAttribute('placeholder', 'Szukaj...');
        input_search.addEventListener('keyup', tlumaczenia.SearchHandler, false);

        var input_clear=document.createElement('input');  //przycisk wyczyść
        input_clear.setAttribute('id', 'n24h_tr_input_clear');
        input_clear.setAttribute('type', 'button');
        input_clear.setAttribute('value', 'Wyczyść');
        input_clear.addEventListener('click', tlumaczenia.ClearHandler, false);

        //dodaj do lewego diva
        left_div.appendChild(input_search); //okienko szukania
        left_div.appendChild(input_clear);  //i przycisk wyczyść
        
        var right_div=document.createElement('div');     //prawa część opcji
        right_div.setAttribute('style', 'float:right')

        var input_new=document.createElement('input'); //okienko do dodawania nowego serialu/filmu
        input_new.setAttribute('id', 'n24h_tr_input_new');
        input_new.setAttribute('type', 'text');

        var input_add=document.createElement('input');  //przycisk dodaj
        input_add.setAttribute('id', 'n24h_tr_input_add');
        input_add.setAttribute('type', 'button');
        input_add.setAttribute('value', 'Dodaj');
        input_add.addEventListener('click', tlumaczenia.AddNewHandler, false);

        var select=document.createElement('select');  //selekt z listą seriali/filmów
        select.setAttribute('id', 'n24h_tr_shows_list');
        select.setAttribute('size', '1');

        //wypełnij selekta listą seriali/filmów
        var keywords = showsdb.getAll();
        for (var i=0;i<keywords.length;i++)
        {
            var option=document.createElement("option");
            option.text=keywords[i];
            option.setAttribute('class', 'n24h_tr_option');
            select.add(option);
        }


        var input_remove=document.createElement('input');  //przycisk usuń
        input_remove.setAttribute('id', 'n24h_tr_input_remove');
        input_remove.setAttribute('type', 'button');
        input_remove.setAttribute('value', 'Usuń');
        input_remove.addEventListener('click', tlumaczenia.RemoveHandler, false);

        //dodaj do prawego diva
        right_div.appendChild(input_new);       //okienko do dodawania nowego serialu/filmu
        right_div.appendChild(input_add);       //przycisk dodaj
        right_div.appendChild(select);          //listę seriali/filmów
        right_div.appendChild(input_remove);    //i przycisk usuń

        //dodaj do ogólnego diva
        div.appendChild(left_div);  //lewego diva
        div.appendChild(right_div); //i prawego diva

        //dodaj ogólnego diva do panelu
        panel.appendChild(div);
        trtable.parentNode.insertBefore(panel,trtable);
    },
    /**
        Dodaj dodatkową kolumnę z gwiazdkami
    */
    AddStars: function() {
        var css='td[data-n24h-star]{'+ //wyszukiwanie
                    'background-image: url('+icons.staroff+');'+
                    'background-repeat: no-repeat;'+
                    'background-position: center;'+
                    'cursor:pointer !important;'+
                    '}'+
                'td[data-n24h-star="on"]{'+
                    'background-image: url('+icons.staron+');'+
                    '}';
        var trtable=document.querySelector('table#translationsTable');
        if (!trtable)
            return;
        utils.insertcss(css);
        var trhead=trtable.querySelector('thead > tr');
        var th=document.createElement('th');
        th.setAttribute('id', 'n24h_tr_favhead');
        th.setAttribute('class', 'nosort header');
        th.setAttribute('style', 'background-image: url('+icons.staron+');background-repeat: no-repeat;background-position: center;');
        th.setAttribute('title', 'Ulubione filmy/seriale');
        trhead.appendChild(th);
        var trs=trtable.querySelectorAll('tbody>tr');
        for (var i = 0; i < trs.length; i++)
        {
            var td=document.createElement('td');
            td.setAttribute('data-n24h-star', '');
            td.addEventListener('click', tlumaczenia.StarClickHandler, false);
            trs[i].appendChild(td);
        }

    },
    /**
        Ustaw nagłówki tabelki tak żeby dało się ją sortować
    */
    makeSortable: function() {
        var trtable=document.querySelector('table#translationsTable');
        if (!trtable)
            return;
        var th = trtable.tHead, i;
        th && (th = th.rows[0]) && (th = th.cells);
        if (th) i = th.length;
        else return; // if no `<thead>` then do nothing
        while (--i >= 0)
        if (i<6) //pomiń kolumnę ulubione
            (function (i) {
                var dir = 1;
                th[i].addEventListener('click', function () {tlumaczenia.sortTable(i, (dir = 1 - dir))});
            }(i));
    },
    /**
        Skopiuj nagłówki tabelki, żeby wywalić oryginalną obsługę sortowania i dodać naszą
    */
    AddNewHeader: function() {
        var css='#translationsTable th {cursor: pointer !important;}'+
                '#translationsTable th.nosort {cursor: default !important;}';
        var trtable=document.querySelector('table#translationsTable');
        if (!trtable)
            return;
        utils.insertcss(css);
        var header=trtable.querySelector('thead');
        var new_header=document.createElement('thead');
        new_header.innerHTML=header.innerHTML;
        trtable.insertBefore(new_header, header);
        trtable.removeChild(header);
        tlumaczenia.makeSortable();
    },
    /**
        Wywal kolumnę n24 i ewentualnie dodaj linki do tytułów seriali
    */
    FixInfo: function() {
        var trtable=document.querySelector('table#translationsTable');
        if (!trtable)
            return;
        /**INFO START*/
        if (options.getValue('shown24info', false))
        {
            var trs=trtable.querySelectorAll('tbody > tr');
            for (var i = 0; i < trs.length; i++)
            {
                var title=trs[i].querySelector('td:nth-child(1)>div');
                var info=trs[i].querySelector('td:nth-child(2)>div>a[href*="imid=tt"], a[href*="title/tt"]');
                if (info)
                    if (options.getValue('useimdbinfo', false))
                        title.innerHTML='<a href="'+info.href.replace(/http:\/\/napisy24.pl\/serial\?imid=/, 'http://www.imdb.com/title/')+'/" target="_blank">'+title.textContent+'</a>';
                    else
                    {
                        var target=info.href.indexOf('imdb.com')!=-1?' target="_blank"':'';
                        title.innerHTML='<a href="'+info.href+'"'+target+'>'+title.textContent+'</a>';
                    }
            }
        }
        /**INFO STOP*/
        //usuń kolumnę Info
        var th=document.querySelector('th.header:nth-child(2)');
        th.parentNode.removeChild(th);
        var tds=document.querySelectorAll('table#translationsTable>tbody>tr>td:nth-child(2)');
        for (var i = 0; i < tds.length; i++)
        {
            tds[i].parentNode.removeChild(tds[i]);
        }
    },

    init: function() {
        tlumaczenia.AddPanel();
        tlumaczenia.FixInfo();
        tlumaczenia.AddStars();
        tlumaczenia.AddNewHeader();
        tlumaczenia.sortTable();
    }
};

/**
    Strona z komentarzami
*/
var komentarze = {
    /**
        Zapisz poprawki za pomocą czcionki o stałej szerokości
    */
    fix_comments: function() {
        var css='div.n24h_comment{'+
                'font-family: Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;'+
                'font-size: 13px;'+
                '}';
        utils.insertcss(css);

        var comments=document.querySelectorAll('div.tresc2');
        for (var i=0;i<comments.length;i++)
        {
            var text=comments[i].innerHTML;
            var lines=text.split('<br>');
            var line='';
            text='';
            for (var j=0;j<lines.length;j++)
            {
                line=lines[j].replace(/((\+|\-)?(.)?(\[|\{)\d+(\]|\})(\[|\{)\d+(\]|\}).*)/g, '<div class="n24h_comment">$1</div>');
                text=text+line;
                if (line.search('n24h_comment')==-1)
                    text=text+'<br>';
            }
            comments[i].innerHTML=text;
        }
    },
    /**
        Pokaż/ukryj panel z emotkami i dodawaniem komentarza
    */
    ShowHideEmots: function() {
        var emots=document.querySelector('.tbl_out>div:nth-child(3)');
        var form=document.querySelector('form#userForm');
        var opener=document.querySelector('div#n24h_comm_opener');
        if ((!emots) || (!form))
            return;
        if (emots.getAttribute('style')=='display:none')
        {
            emots.setAttribute('style', 'display:block');
            form.setAttribute('style', 'display:block');
            opener.setAttribute('class', 'n24h_comm_opener n24h_comm_opener_open');
        } else {
            emots.setAttribute('style', 'display:none');
            form.setAttribute('style', 'display:none');
            opener.setAttribute('class', 'n24h_comm_opener');
        }
    },
    /**
        Dodaj strzałkę otwierającą/zamykającą panel emotek i komentarza
    */
    addOpener: function() {
        var css='div.n24h_comm_opener{'+
                    'background-image: url(run/images/arrs.png);'+
                    'background-repeat: no-repeat;'+
                    'height: 20px;'+
                    'width: 20px;'+
                    'background-position: center;'+
                    'cursor:pointer;'+
                    'border: 1px solid;'+
                    'border-color:#32383E;'+
                    'padding: 3px;'+
                    'margin-left: 10px;'+
                    'margin-top: -25px;'+
                '}'+
                'div.n24h_comm_opener:hover{'+
                    'background-color: #202428;'+
                '}'+
                'div.n24h_comm_opener_open{'+
                    'background-image: url(run/images/arrsh.png);'+
                '}';
        var footer=document.querySelector('div.moreInfo>div.infofooter');
        if (!footer)
            return;
        utils.insertcss(css);
        var opener=document.createElement('div');
        opener.setAttribute('id', 'n24h_comm_opener');
        opener.setAttribute('class', 'n24h_comm_opener');
        opener.setAttribute('title', 'Pokaż/ukryj dodawanie komentarza');
        opener.addEventListener('click', komentarze.ShowHideEmots, false);
        footer.appendChild(opener);
        footer.setAttribute('style', 'padding-bottom: 5px; padding-top: 5px;');
        komentarze.ShowHideEmots();
    },
    init: function() {
        komentarze.addOpener();
        komentarze.fix_comments();
    }
}

/**
    Różności
*/
var misc = {
    /**
        Obsługa zapamiętywania wyszukiwanych filmów/seriali między stronami
    */
    SearchHandler: function(e) {
        var input=document.querySelector('input#phrase');
        if (!input)
            return;
        e = e || window.event;
        if (e.keyCode==27)
            input.value='';
        var searchtext = input.value;
        sessionStorage.setItem('n24h_search', searchtext);
    },
    /**
        Dodaj zapamiętywanie wyszukiwanych filmów/seriali
    */
    fixSearch: function() {
        var input=document.querySelector('input#phrase');
        if (!input)
            return;
        var searchtext=sessionStorage.getItem('n24h_search');
        if (searchtext==null)
            input.value='';
        else
            input.value=searchtext;
        input.addEventListener('keyup', misc.SearchHandler, false);
    },
    /**
        Usuń okładkę filmu/serialu
    */
    killCover: function() {
        var css='div.subtitle{width: 675px !important;}';
        utils.insertcss(css);
        var divs=document.querySelectorAll('div.tbl');
        for (var i=0;i<divs.length;i++)
        {
            var poster=divs[i].querySelector('div.poster');
            divs[i].removeChild(poster);
        }
    },
    /**
        Usuń ocenę z IMDB
    */
    killIMDBInfo: function() {
        var divs=document.querySelectorAll('div[id^="toggleMe"]');
        for (var i=0;i<divs.length;i++)
        {
            var infocolumn=divs[i].querySelector('div.infoColumn0');
            divs[i].removeChild(infocolumn);
        }
    },
    /**
        Alternatywna jasna skórka
    */
    altSkin: function() {
        var css='.avatar-menu-icons[class*="avatar-main-menu-szare"] > li {background-color: #2B68AB;border-right: 1px solid #5592D5;}'+//menu: forum, irc, rss
                '[class*="avatar-main-menu-szare"] > li:hover {border-bottom: 4px solid #1B4A7E;}'+
                'nav{background-color: #2B68AB !important;}'+//pusta przestrzeń między menu a dodaj napisy
                'nav ul li.menu_add_napisy a{background-color: #2B68AB;border-bottom: 4px solid #1B4A7E;}'+//przycisk dodaj napisy
                'nav ul li.menu_add_napisy a:hover{background-color: #1B4A7E;color: #CCC;background-position: 21px 12px;}'+
                'nav ul li.menu_add_napisy a:active{color: #CCC;text-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);filter: dropshadow(color=#33000000, offx=0, offy=-1);border-top: 4px solid #2B68AB;border-bottom: 4px solid #1B4A7E;background-color: #1B4A7E;background-position: 21px 8px;}'+
                'body{background-color:#D5D5D5;color: #272727;}'+//body
                '#avatar-body-middle-block{background-color:#D5D5D5;}'+//środek
                '#avatar-header-inside-block{background-color:#D5D5D5;}'+//górna belka body
                '.logo .screen{border: 4px solid #5592D5 !important;}'+//logo
                '.logo .screen .subline1{background-color: #5592D5 !important;}'+
                '.logo .screen .subline2{background-color: #5592D5 !important;}'+
                '.logo h1{color: #5592D5 !important;}'+
                '.logo h2{color: #5592D5 !important;}'+
                'textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input {background-color: #D5D5D5 !important;}'+//pola tekstowe
                '#search #phrase{color: #000000;}'+//wyszukiwarka
                'section#content .tbl_top{background-color:#D5D5D5 !important;border-top: 1px solid #A0A0A0 !important;}'+ //tabelka nagłówek
                'section#content .tbl_top .head_r label{color:#000000 !important;}'+
                'section#content .tbl_top .head_l{color:#000000 !important;}'+
                'section#content .tbl{background-color:#D5D5D5 !important;border-top: 1px solid #A0A0A0 !important;}'+
                'section#content .page{border-color:#A0A0A0 !important;}'+
                'section#content .tbl_out{border-bottom:1px solid #A0A0A0 !important;}'+
                'section#content .tbl .poster{border-right:1px solid #A0A0A0 !important;}'+
                'section#content .pagination{border: 1px solid #A0A0A0;background-color: #E0E0E0;}'+
                'section#content .pagination .page-start, section#content .pagination .page-prev, section#content .pagination .page-next{ color: #272829;background-color: #D5D5D5;}'+//strart, poprzednia, następna
                'section#content .pagination .page-start:hover, section#content .pagination .page-prev:hover, section#content .pagination .page-next:hover{color: #272829;background-color: #E0E0E0;border-radius: 0px 0px 3px 3px;border-bottom: 3px solid #D26911;border-top:none;padding-bottom: 0px;line-height: 30px;}'+
                'section#content .pagination .page-prev:hover{background-position: 15px center;}'+
                'section#content .pagination .page-next:hover{background-position: 90px center;}'+
                'section#content .pagination .page-num{color: #272829;background-color: #D5D5D5;}'+//numery stron
                'section#content .pagination .page-num:hover{background-color: #E0E0E0;border-top-width: 1px;margin-top: 0px;border-radius: 0px 0px 3px 3px;border-bottom: 3px solid #D26911;}'+
                'section#content .tbl.opened .subtitle .opener, section#content .tbl .subtitle:hover .opener {background-color: #E0E0E0 !important;border-radius: 0px 0px 3px 3px;border-bottom: 3px solid #D26911;}'+
                '.module_frame{border: 1px solid #A0A0A0;}'+
                '.category-modulemodule_frame li a{color: #000000;}'+
                '.category-modulemodule_frame li a:hover{color: #2F2F2F;background-color: #E0E0E0;}'+
                'aside .list li a{color: #000000 !important;}'+
                'aside .list li a:hover{color: #2F2F2F !important;background-color: #E0E0E0 !important;text-decoration: none !important;}'+
                '.avatar-module .st-module-heading{background-color: #A0A0A0;color: #2F2F2F;}'+
                '.login-greeting{color: #272829;}'+
                '.moreInfo{background-color:#D5D5D5 !important;color:#000000 !important; border-top: 1px solid #A0A0A0;}'+
                '.page span{color: #272829;}'+
                '.infofooter{border-top: 1px solid #A0A0A0 !important;background-color: #D5D5D5 !important;}'+
                '.infoColumn0{background-color: #D5D5D5 !important;border-right: 1px solid #A0A0A0 !important;border-bottom: 0px !important;border-top: 1px solid #A0A0A0 !important}'+
                'section#content .page{color: #272829 !important;}'+
                'section#content .tbl .subtitle .sub h2{color: #272829 !important;}'+
                'select {background-color: #C5C5C5;}'+
                /**tłumaczenia*/
                'table.table-layout thead tr th{background-color: #D5D5D5 !important;color: #272829 !important;border-bottom: 1px solid #A0A0A0 !important;border-right: 1px solid #A0A0A0 !important;}'+
                'table.table-layout tbody tr.odd td{background-color: #C5C5C5 !important;}'+
                'table.table-layout tbody tr.even td{background-color: #B5B5B5 !important;}'+
                'table.table-layout tbody tr td{border-bottom: 1px solid #A0A0A0 !important;border-right: 1px solid #A0A0A0 !important;color: #000000 !important;}'+
                'table.table-layout{border-top: 1px solid #A0A0A0 !important;}'+
                '.progress div{background-color: #A0A0A0 !important;}'+
                'nav ul li.menu_add_tlum a{background-color: #2B68AB;border-bottom: 4px solid #2B68AB;background-position: 21px 12px;}'+
                'nav ul li.menu_add_tlum a:hover{border-bottom: 4px solid #1B4A7E;color: #CCCCCC;background-color: #2B68AB;line-height: 44px;height: 42px;background-position: 21px 12px;}'+
                'nav ul li.menu_add_tlum a:active{border-bottom: 4px solid #1B4A7E;color: #CCCCCC;background-color: #2B68AB;line-height: 48px;height: 42px;background-position: 21px 12px;text-shadow:none;filter:none;border-top:none;}'+
                /**komentarze*/
                '.moreInfo2{background-color:#D5D5D5 !important;color:#000000 !important;}'+
                'section#content .tbl .avatar{border-right: 1px solid #A0A0A0 !important;}'+
                'section#content .tbl .subtitle .sub h3{color: #000000 !important;}'+
                'section#content .tbl .mark{color: #000000 !important;}'+
                'textarea{background-color: #B5B5B5 !important;color: #272829 !important;}'+
                /**artykuły*/
                '#jc{background: none repeat scroll 0px 0px #B5B5B5;}'+
                '#jc h4{color: #272829;background-color: #C5C5C5;}'+
                '#jc .rbox{background-color: #B5B5B5;}'+
                '#comments .comment-author, #comments .author-homepage, #comments .author-email{color: #4B3F37;}'+
                '#comments .comment-date{color: #4B3F37;}'+
                '#comments .comment-body{color: #4B3F37;}'+
                '#comments .quote{color: #4B3F37;}'+
                '#comments blockquote, #comments .hidden, #comments code, #comments pre{color: #1B6A6A;}'+
                '#comments a{color: #174B54;}'+
                '#comments-form input{color: #2D3335;}'+
                /**profil*/
                ''+
                /**n24 helper*/
                '#n24h_tr_input_search, #n24h_tr_input_new{color: #000000;}'+
                '#n24h_tr_input_clear, #n24h_tr_input_add, #n24h_tr_input_remove {background-color: #C5C5C5 !important;color: #000000 !important;}'+
                '#n24h_tr_shows_list {background-color: #C5C5C5;color: #000000 !important;}'+
                '.n24h_tr_option {background-color: #C5C5C5 !important;color: #000000 !important;}'+
                'div.n24h_comm_opener:hover {background-color: #C5C5C5 !important;}';
        utils.insertcss(css);
        //style
        var selector='a[style*="color: rgb(0,200,0)"]'+         //moderator
                ', td[style*="background-color:#41d64b"]'+      //uaktualnione w ostatnim czasie
                ', td[style*="background-color:#DD7665"]'+      //od dawna nie aktualizowane
                ', span[style*="color: white"]'+                //ilość oczekujących
                ', div[style*="background-color: #21262b"]';    //górna belka z datą i oceną przy komentarzach
        var inline=document.querySelectorAll(selector);
        for (var i=0;i<inline.length;i++)
        {
            var style=inline[i].getAttribute('style');
            style=style.replace('rgb(0,200,0)', 'rgb(0,150,0)');
            style=style.replace('background-color:#41d64b', 'background-color:#DFDFDF !important');
            style=style.replace('background-color:#DD7665', 'background-color:#DD7665 !important');
            style=style.replace('color: white', 'color: black');
            style=style.replace('background-color: #21262b', 'background-color: #ADADAD');
            inline[i].setAttribute('style', style);
        }
        //klasy
        var selector='span.yellowfont';                         //ocena IMDB/głosów
        var inline=document.querySelectorAll(selector);
        for (var i=0;i<inline.length;i++)
        {
            var attr=inline[i].getAttribute('class');
            attr=attr.replace('yellowfont', '');
            inline[i].setAttribute('class', attr);
        }
    },
    init: function() {
        if (options.getValue('fixsearch', false))
            misc.fixSearch();
        if (options.getValue('killcover', false))
            misc.killCover();
        if (options.getValue('killimdbinfo', false))
            misc.killIMDBInfo();
        if (options.getValue('usealtskin', false))
            misc.altSkin();
    }
}

var n24h = {
    /**
    */
    onLoad: function() {
        options.init();
        misc.init();
        if(document.URL.indexOf('/tlumaczenia')!=-1)
        {
            tlumaczenia.init();
        }
        if(document.URL.indexOf('/komentarze')!=-1)
        {
            komentarze.init();
        }
    },

    /**
    */
    init: function()
    {
        window.addEventListener('DOMContentLoaded', n24h.onLoad, false);
    }
};

n24h.init();
