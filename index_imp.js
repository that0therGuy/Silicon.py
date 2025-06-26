

let interval = null;

document.querySelector(".mainn").onclick = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(iteration >= event.target.dataset.value.length){
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 20);
}
let files= new Map([

])


let tensorflow = tf
document.querySelector('body').classList.add("animate2");


document.querySelector('body').addEventListener("animationend", () => {
    document.querySelector('body').classList.remove("animate2");
});


document.querySelector('.z1').addEventListener('click',()=>{
    document.querySelector('#editor').classList.add("animate");


    document.querySelector('#editor').addEventListener("animationend", () => {
        document.querySelector('#editor').classList.remove("animate");
    });


})
document.querySelector('.z2').addEventListener('click',()=>{
    document.querySelector('#editor').classList.add("animate");


    document.querySelector('#editor').addEventListener("animationend", () => {
        document.querySelector('#editor').classList.remove("animate");
    });


})
document.querySelector('.z3').addEventListener('click',()=>{
    document.querySelector('#editor').classList.add("animate");


    document.querySelector('#editor').addEventListener("animationend", () => {
        document.querySelector('#editor').classList.remove("animate");
    });


})
const topsecret= 'you found easter egg #2!'

if (localStorage.getItem('code')==null){

    localStorage.setItem('code',`#Refer < info > for useful info!\nprint('hello world')`)
}
if (localStorage.getItem('consolep')==null){

    localStorage.setItem('consolep','0')
}
if (localStorage.getItem('isdelete')==null){

    localStorage.setItem('isdelete','true')
}
if (localStorage.getItem('isauto')==null){

    localStorage.setItem('isauto','false')
}
if (localStorage.getItem('islint')==null){

    localStorage.setItem('islint','true')
}
if (localStorage.getItem('isgem')==null){

    localStorage.setItem('isgem','false')
}
if (localStorage.getItem('bloom')==null){

    localStorage.setItem('bloom','false')
}
if (localStorage.getItem('isplain')==null){

    localStorage.setItem('isplain','false')
}
if (localStorage.getItem('isborder')==null){

    localStorage.setItem('isborder','false')
}

if (localStorage.getItem('iscustom')==null){

    localStorage.setItem('iscustom','false')
}
if (localStorage.getItem('issugg')==null){

    localStorage.setItem('issugg','true')
}
if (localStorage.getItem('cooldown')==null){

    localStorage.setItem('cooldown',2)
}
if (localStorage.getItem('font')==null){

    localStorage.setItem('font','3')
}
let autocompleteEnabled = localStorage.getItem('issugg') === 'true';

if (localStorage.getItem('isgem')=='false'){
    document.querySelector('.gemini').style.display='none';
}else{
    document.querySelector('.gemini').style.display='inline-block';

}
let editor = CodeMirror(document.getElementById('editor'), {
    mode: "python",
    theme: "default",
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    lint:true,
    allowMultipleSelections: true,
    extraKeys: {
        "F10": function(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            document.querySelector('.CodeMirror').style.background='linear-gradient(to top left, rgba(31, 0, 52, .2) 0%, rgba(47,0,70,1) 100%)'
            document.querySelector('.CodeMirror').style.backdropFilter='blur(20px)';



        },
        "Esc": function(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            document.querySelector('.CodeMirror').style.background='linear-gradient(to top left, rgba(31, 0, 52, 0.2) 0%, rgba(47,0,70,1) 100%)'
            document.querySelector('.CodeMirror').style.backdropFilter='none';

        }
    }

});



editor.on("inputRead", function (cm, change) {
    if (!autocompleteEnabled || cm.state.completionActive) return;

    let cur = cm.getCursor();
    let prevChar = cm.getRange({line: cur.line, ch: cur.ch - 1}, cur);

    if (prevChar === ":") {

        return;
    }

    CodeMirror.commands.autocomplete(cm, null, { completeSingle: false });
});

editor.on("change", savekey);
let on= 'b1';

function setkey(key){
    on= key
    editor.setValue(localStorage.getItem(on)||'');
}

function savekey(){
    localStorage.setItem(on,editor.getValue())
}






editor.setValue(localStorage.getItem('code'));
document.querySelector('.inputfile').addEventListener('change',function(){
    let fileread= new FileReader()
    fileread.onload=()=>{

        editor.setValue(fileread.result);
    }
    fileread.readAsText(this.files[0]);
})



function checkforbloom(){

    if (localStorage.getItem('bloom')==='true'){
        document.querySelector('#editor').style.boxShadow='0 0 25px rgba(12, 0, 100, .4)';

        document.querySelector('#consoleOutput').style.boxShadow='0 0 25px rgba(12, 0, 100, .4)';

    }else{
        document.querySelector("#editor").style.boxShadow='0 0 25px rgba(12, 0, 40, 0.3)'

        document.querySelector("#consoleOutput").style.boxShadow='0 0 25px rgba(12, 0, 40, 0.3)'
    }
    /*if (localStorage.getItem('mode')==='true'){
        document.querySelector('h1').style.webkitBackgroundClip = 'text';
        document.querySelector('h1').style.webkitTextFillColor = 'transparent';
        document.querySelector('h5').style.webkitBackgroundClip = 'text';
        document.querySelector('h5').style.webkitTextFillColor = 'transparent';
        document.body.style.background='linear-gradient(to top left, rgba(0,0,0,1) 0%, rgba(47,0,70,1) 100%)';
        document.querySelector('h5').style.background='linear-gradient(90deg, rgba(219,219,219,1) 0%, rgba(182,31,255,.8) 100%)';


    }else{
        document.querySelector('h1').style.background='linear-gradient(90deg, rgba(40,0,74,1) 0%, rgba(9,0,13,1) 100%)';
        document.querySelector('h1').style.webkitBackgroundClip = 'text';
        document.querySelector('h1').style.color = 'transparent';

        document.querySelector('h5').style.background='linear-gradient(90deg, rgba(40,0,74,1) 0%, rgba(9,0,13,1) 100%)';
        document.querySelector('h5').style.backgroundClip= 'text';
        document.querySelector('h5').style.color = 'transparent';
        document.body.style.background='linear-gradient(90deg, rgba(139,0,255,1) 0%, rgba(200,87,255,1) 100%)'


    }*/
}
checkforbloom()
function checkforplain(){

    if (localStorage.getItem('isplain')==='true'){

        document.querySelector('.CodeMirror').style.background='#25043b';

        document.querySelector('#consoleOutput').style.background='#25043b';


    }else{
        document.querySelector(".CodeMirror").style.background='linear-gradient(to top left, rgba(31, 0, 52, 0.2) 0%, rgba(47,0,70,1) 100%)';

        document.querySelector("#consoleOutput").style.background='linear-gradient(to top left, rgba(31, 0, 52, 0.2) 0%, rgba(47,0,70,1) 100%)';
    }
}
checkforplain()
document.querySelector('#consoleOutput').value ='';
// Redirection of console.log to textarea
// Redirection of console.log to textarea
(function() {
    const originalLog = console.log;
    const output = document.querySelector('#consoleOutput');

    console.log = function(...args) {
        output.value += args.join(' ') + '\n';
        originalLog.apply(console, args);
    };

    console.removeLastLog = function() {
        let lines = output.value.split('\n');
        if (lines.length > 0) {
            lines.pop();
            if (lines[lines.length - 1] === '') {
                lines.pop();
            }
            output.value = lines.join('\n');
        }
    };
})();



// Initialize CodeMirror editor
if (localStorage.getItem('isauto')=='false'){
    document.querySelector('.main').addEventListener('click',()=>{
        document.querySelectorAll('div[id*="matplotlib"]').forEach(div => div.remove());

        localStorage.setItem('code',editor.getValue());
        const code = editor.getValue();
        try {
            if (localStorage.getItem('isdelete')=='true'){
                document.querySelector('#consoleOutput').value =''
            }else{
                let d = new Date();
                document.querySelector('#consoleOutput').value +='\n<'+d.getHours()+': '+d.getMinutes()+': '+d.getSeconds()+'>\n';
            }

            async function main(code) {
                const pyodide = await loadPyodide();

                // List of Pyodide packages you support loading
                const availablePackages = [
                    "numpy", "scipy", "pandas", "matplotlib", "sympy",
                    "scikit-learn", "statsmodels", "numba", "bokeh", "seaborn",
                    "biopython", "rdkit", "pyodide-py", "lxml", "pyyaml",
                    "python-dateutil", "pytz", "httpx", "requests", "websockets",
                    "xgboost", "micropip", "pytest", "setuptools"
                ];

                // Extract top-level imports from code (simple regex)
                function extractImports(code) {
                    const imports = new Set();
                    const lines = code.split('\n');

                    for (const line of lines) {
                        const trimmed = line.trim();
                        if (trimmed.startsWith("import ")) {
                            // e.g. "import pandas, numpy as np"
                            trimmed.slice(7).split(",").forEach(part => {
                                const base = part.trim().split(" ")[0].split('.')[0];
                                if (base) imports.add(base);
                            });
                        } else if (trimmed.startsWith("from ")) {
                            // e.g. "from pandas.core.frame import DataFrame"
                            const parts = trimmed.split(" ");
                            if (parts.length >= 2) {
                                const base = parts[1].split('.')[0];
                                if (base) imports.add(base);
                            }
                        }
                    }

                    return Array.from(imports);
                }




                // Find which packages to load
                const userImports = extractImports(code);
                const packagesToLoad = userImports.filter(pkg => availablePackages.includes(pkg));
                console.log(packagesToLoad)

                // Load packages sequentially (can be optimized with Promise.all)
                for (const pkg of packagesToLoad) {
                    console.log(`Loading package: ${pkg}`);
                    await pyodide.loadPackage(pkg);
                }

                // Run user code
                try{
                    await pyodide.runPythonAsync(`
def input(prompt_text=""):
    from js import prompt
    return prompt(prompt_text)
`);

                    let result = await pyodide.runPythonAsync(code);
                    console.log(result);
                }
                catch(error){
                    console.log(error)
                }

            }


            main(code);


            if (code.includes('this is the best ide!')){
                let ma= document.createElement('marquee');
                ma.textContent='thanks!'
                ma.style.color='red';
                document.body.querySelector('.container').appendChild(ma)
                document.querySelector('h1').style.color='red';
                document.querySelector('h5').style.color='red';
                document.querySelector('h5').innerHTML+= ' *blushing*';

            }




        } catch (error) {
            console.log('Error: ' + error);
        }
    })

}else{

    setInterval(executecode,(Number(localStorage.getItem('cooldown')))*1000)
}
function executecode(){

    localStorage.setItem('code',editor.getValue());
    const code = editor.getValue();
    try {
        if (localStorage.getItem('isdelete')=='true'){
            document.querySelector('#consoleOutput').value =''
        }else{
            let d = new Date();
            document.querySelector('#consoleOutput').value +='\n<'+d.getHours()+': '+d.getMinutes()+': '+d.getSeconds()+'>\n';
        }
        async function main(code) {
            const pyodide = await loadPyodide();

            // List of Pyodide packages you support loading
            const availablePackages = [
                "numpy", "scipy", "pandas", "matplotlib", "sympy",
                "scikit-learn", "statsmodels", "numba", "bokeh", "seaborn",
                "biopython", "rdkit", "pyodide-py", "lxml", "pyyaml",
                "python-dateutil", "pytz",
                "xgboost", "micropip", "pytest", "setuptools"
            ];

            function extractImports(code) {
                const imports = new Set();
                const lines = code.split('\n');

                for (const line of lines) {
                    const trimmed = line.trim();
                    if (trimmed.startsWith("import ")) {
                        // e.g. "import pandas, numpy as np"
                        trimmed.slice(7).split(",").forEach(part => {
                            const base = part.trim().split(" ")[0].split('.')[0];
                            if (base) imports.add(base);
                        });
                    } else if (trimmed.startsWith("from ")) {
                        // e.g. "from pandas.core.frame import DataFrame"
                        const parts = trimmed.split(" ");
                        if (parts.length >= 2) {
                            const base = parts[1].split('.')[0];
                            if (base) imports.add(base);
                        }
                    }
                }

                return Array.from(imports);
            }




            // Find which packages to load
            const userImports = extractImports(code);
            const packagesToLoad = userImports.filter(pkg => availablePackages.includes(pkg));
            console.log(packagesToLoad)
            // Load packages sequentially (can be optimized with Promise.all)
            for (const pkg of packagesToLoad) {
                console.log(`Loading package: ${pkg}`);
                await pyodide.loadPackage(pkg);
            }
            // Run user code
            try{
                await pyodide.runPythonAsync(`
def input(prompt_text=""):
    from js import prompt
    return prompt(prompt_text)
`);

                let result = await pyodide.runPythonAsync(code);
                console.log(result);
            }
            catch(error){
                console.log(error)
            }


        }



        main(code);






    } catch (error) {
        console.log('Error: ' + error);
    }
}

document.querySelector('.main').addEventListener('dblclick',()=>{
    if (localStorage.getItem('isdbl')==='true'){
        editor.setValue('')
    }

})
function checkforfont(){

    if (localStorage.getItem('font')==1){
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='space mono'
        });



    }else if(localStorage.getItem('font')==2){
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='parkinsans'
        });

    }
    else if(localStorage.getItem('font')==4){
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='lobster'
        });

    }
    else if(localStorage.getItem('font')==5){
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='roboto mono'
        });

    }
    else{
        const allElements = document.querySelectorAll('*');


        allElements.forEach(element => {
            element.style.fontFamily='jetbrains mono'
        });

    }
}
checkforfont()

function checkforpos(){

    if (localStorage.getItem('consolep')==0){

        document.querySelector('#consoleOutput').style.textAlign='center';


    }
    else if (localStorage.getItem('consolep')==1){

        document.querySelector('#consoleOutput').style.textAlign='left';


    }else{
        document.querySelector('#consoleOutput').style.textAlign='right';

    }

}
checkforpos()
function time(){
    let d = new Date();
    document.querySelector('.time').innerHTML ='<'+d.getHours()+': '+d.getMinutes()+': '+d.getSeconds()+'>';

}
setInterval(time,100)

if (localStorage.getItem('islint')=='true'){

    editor.setOption("lint", true);
}else{
    editor.setOption("lint", false);
}
function lines(){
    document.querySelector('.lines').innerHTML= editor.lineCount();
    let cursor = editor.getCursor();
    document.querySelector('.pos').innerHTML=`${cursor.line+1}, ${cursor.ch}`
}
setInterval(lines,250)


function replaceTrueFalse() {
    const doc = editor.getDoc();
    const totalLines = doc.lineCount();

    for (let lineNum = 0; lineNum < totalLines; lineNum++) {
        const line = doc.getLine(lineNum);
        const regex = /\b(True|False)\b/g;
        let match;

        while ((match = regex.exec(line)) !== null) {
            const from = { line: lineNum, ch: match.index };
            const to = { line: lineNum, ch: match.index + match[0].length };
            const value = match[0];


            const btn = document.createElement("button");
            btn.textContent = value;
            btn.className = "toggle-btn";

            btn.onclick = () => {
                const newValue = btn.textContent === "True" ? "False" : "True";
                doc.replaceRange(newValue, from, to);
                setTimeout(replaceTrueFalse, 50);
            };

            doc.markText(from, to, { replacedWith: btn });
        }
    }
}






function replaceNumbers() {
    const doc = editor.getDoc();
    const cursor = doc.getCursor();
    const line = doc.getLine(cursor.line);

    const regex = /\b\d+(\.\d+)?\b/g;
    let match;
    while ((match = regex.exec(line)) !== null) {
        const from = { line: cursor.line, ch: match.index };
        const to = { line: cursor.line, ch: match.index + match[0].length };

        const span = document.createElement("span");
        span.textContent = match[0];
        span.className = "number-span";

        let startX = 0;
        let originalValue = parseFloat(match[0]);


        span.onmousedown = (e) => {
            startX = e.clientX;
            let currentValue = originalValue;


            function onMouseMove(event) {
                let delta = Math.floor((event.clientX - startX) / 5);
                span.textContent = currentValue + delta;
            }

            function onMouseUp() {
                const newValue = parseFloat(span.textContent);
                doc.replaceRange(newValue.toString(), from, to);
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            }

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        };


        doc.markText(from, to, {
            replacedWith: span
        });
    }
}
if (localStorage.getItem('isfea')=='true'){
    editor.on("change", replaceNumbers);
    editor.on("changes", replaceTrueFalse);
    editor.on("cursorActivity", replaceTrueFalse);

    editor.on("optionChange", (cm, option) => {
        if (option === "fullScreen") setTimeout(replaceTrueFalse, 100);
    });

    setTimeout(replaceTrueFalse, 100);

    editor.on("cursorActivity", replaceNumbers);

    editor.on("optionChange", (cm, option) => {
        if (option === "fullScreen") setTimeout(replaceNumbers, 100);
    });

    setTimeout(replaceNumbers, 100);
}
document.querySelector('.scrollto').addEventListener('blur', scrolltoline);

function scrolltoline() {
    let line = document.querySelector('.scrollto').value;
    try {
        editor.scrollIntoView({ line: parseInt(line), ch: 0 });
        document.querySelector('.scrollto').value = null;
        if (line<editor.lineCount) {

            document.querySelector('.scrolltod').style.filter = 'sepia(1) hue-rotate(90deg) saturate(3)';
        }
        setTimeout(lose,1000)
    } catch (err) {
        document.querySelector('.scrolltod').style.filter = 'none';
    }

}

function lose(){
    document.querySelector('.scrolltod').style.filter = 'none';
}
document.querySelector('.a9').addEventListener('mouseover', () => {
    document.querySelector('.a9').style.transform='translateY(-13px)'
    document.querySelector('.a0').style.transform='translateY(-6px)'
    document.querySelector('.a1').style.transform='translateY(-3px)'

})
document.querySelector('.a0').addEventListener('mouseover', () => {
    document.querySelector('.a9').style.transform='translateY(-6px)'
    document.querySelector('.a0').style.transform='translateY(-13px)'
    document.querySelector('.a1').style.transform='translateY(-6px)'
    document.querySelector('.a2').style.transform='translateY(-3px)'

})
document.querySelector('.a1').addEventListener('mouseover', () => {
    document.querySelector('.a0').style.transform='translateY(-6px)'
    document.querySelector('.a1').style.transform='translateY(-13px)'
    document.querySelector('.a2').style.transform='translateY(-6px)'
    document.querySelector('.a3').style.transform='translateY(-3px)'

})
document.querySelector('.a2').addEventListener('mouseover', () => {
    document.querySelector('.a0').style.transform='translateY(-3px)'
    document.querySelector('.a1').style.transform='translateY(-6px)'
    document.querySelector('.a2').style.transform='translateY(-13px)'
    document.querySelector('.a3').style.transform='translateY(-6px)'
    document.querySelector('.a4').style.transform='translateY(-3px)'

})
document.querySelector('.a3').addEventListener('mouseover', () => {
    document.querySelector('.a1').style.transform='translateY(-3px)'
    document.querySelector('.a2').style.transform='translateY(-6px)'
    document.querySelector('.a3').style.transform='translateY(-13px)'
    document.querySelector('.a4').style.transform='translateY(-6px)'
})
document.querySelector('.a3').addEventListener('mouseover', () => {
    document.querySelector('.a1').style.transform='translateY(-3px)'
    document.querySelector('.a2').style.transform='translateY(-6px)'
    document.querySelector('.a3').style.transform='translateY(-13px)'
    document.querySelector('.a4').style.transform='translateY(-6px)'
})
document.querySelector('.a4').addEventListener('mouseover', () => {
    document.querySelector('.a2').style.transform='translateY(-3px)'
    document.querySelector('.a3').style.transform='translateY(-6px)'
    document.querySelector('.a4').style.transform='translateY(-13px)'
})

document.querySelector('.a9').addEventListener('mouseout', () => {
    document.querySelector('.a9').style.transform='translateY(0px)'
    document.querySelector('.a0').style.transform='translateY(0px)'
    document.querySelector('.a1').style.transform='translateY(0px)'

})

document.querySelector('.a0').addEventListener('mouseout', () => {
    document.querySelector('.a9').style.transform='translateY(0)'

    document.querySelector('.a0').style.transform='translateY(0)'
    document.querySelector('.a1').style.transform='translateY(0)'
    document.querySelector('.a2').style.transform='translateY(0)'

})
document.querySelector('.a1').addEventListener('mouseout', () => {
    document.querySelector('.a0').style.transform='translateY(0)'
    document.querySelector('.a1').style.transform='translateY(0)'
    document.querySelector('.a2').style.transform='translateY(0)'
    document.querySelector('.a3').style.transform='translateY(0)'

})
document.querySelector('.a2').addEventListener('mouseout', () => {
    document.querySelector('.a0').style.transform='translateY(0)'
    document.querySelector('.a1').style.transform='translateY(0)'
    document.querySelector('.a2').style.transform='translateY(0)'
    document.querySelector('.a3').style.transform='translateY(0)'
    document.querySelector('.a4').style.transform='translateY(0)'

})
document.querySelector('.a3').addEventListener('mouseout', () => {
    document.querySelector('.a1').style.transform='translateY(0)'
    document.querySelector('.a2').style.transform='translateY(0)'
    document.querySelector('.a3').style.transform='translateY(0)'
    document.querySelector('.a4').style.transform='translateY(0)'
    document.querySelector('.a5').style.transform='translateY(0)'
})
document.querySelector('.a3').addEventListener('mouseout', () => {
    document.querySelector('.a1').style.transform='translateY(0)'
    document.querySelector('.a2').style.transform='translateY(0)'
    document.querySelector('.a3').style.transform='translateY(0)'
    document.querySelector('.a4').style.transform='translateY(0)'
})
document.querySelector('.a4').addEventListener('mouseout', () => {
    document.querySelector('.a2').style.transform='translateY(0)'
    document.querySelector('.a3').style.transform='translateY(0)'
    document.querySelector('.a4').style.transform='translateY(0)'
})


document.body.onpointermove= event=>{
    const {clientX,clientY}= event
    document.querySelector('.blur').animate({
        top:`${clientY}px`,
        left:`${clientX}px`
    },{duration:2000,fill:'forwards'})



}
if (localStorage.getItem('blob')==='true'){
    document.querySelector('.blur').style.display='block';
}
else if(localStorage.getItem('blob')==='false'){
    document.querySelector('.blur').style.display='none';
}
document.querySelector('.gemini').addEventListener('click',()=>{

    let prom= prompt('Ask Gemini (be concise and short): ')
    if (prom.trim()==''){
        return
    }
    let output=''
    askGeminiWithUserKey(
        `following prompt must only be answered formally, if you are writing code ,DO NOT ATTEMPT TO FORMAT CODE JUST SEND AS PLAIN TEXT. If asked for code, only give code, nothing else. If asked to change or modify the code given or generate code, end the response with 'oo23349-0bvbvvdichloride',IF THE USER ASKS FOR IMPOSSIBLE CODE OR YOU MUST TYPE SOMETHING OTHER THAN CODE (TOO IMPORTANT TO NOT WRITE) DO NOT END THE RESPONSE WITH THE CODE.. act  without mentioning any command before :\n code (code is always python, please dont use formatting techniques like '\`\`\` python '): ${editor.getValue()} \n` + prom
    ).then(value => {
        let output = value;

        if (output.includes('oo23349-0bvbvvdichloride')) {
            output = output.replace('oo23349-0bvbvvdichloride', "");

            const lines = output.split('\n');

            if (lines.length > 2 && lines[0].includes('```python')) {
                output = lines.slice(1, -1).join('\n');
            }

            editor.setValue(output);
        } else {
            document.querySelector('#consoleOutput').innerText = '';
            console.log("𝔾𝕖𝕞𝕚𝕟𝕚'𝕤 ℝ𝕖𝕤𝕡𝕠𝕟𝕤𝕖: \n" + value);
        }
    });


})

async function askGeminiWithUserKey(promptText) {
    const key = localStorage.getItem("key");
    if (!key) return "No key provided.";

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: promptText }] }]
        })
    });

    const result = await res.json();
    if (result.error) {
        return `Error: ${result.error.message}`;
    }

    return result.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response.";
}
if (localStorage.getItem('isborder')==='true'){

    document.querySelector('#consoleOutput').style.border='2px solid #01435b'
    document.querySelector('.CodeMirror').style.border='2px solid #01435b'


}else{

    document.querySelector('#consoleOutput').style.border='none'
    document.querySelector('.CodeMirror').style.border='none'
}

















