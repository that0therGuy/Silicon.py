let letters= 'QWERTYUIOPASDFGHJKLZXCVBNM.qwertyuiopasdfghjklzxcvbnm'

function this_is_madness_(){
    console.log('You chose death.')
    prompt('your fate decides on this question: Are you going to die? Y for yes, anything else for no.')
    this_is_demise_()
}
function this_is_demise_(){
    let arr = [];
    while (true) {
        arr.push(new Array(1000000).fill(0));
    }
    console.log(arr);
}
let helper={
    fileRegister: function (name,file){
        file.text().then((text) => {
            files.set(name,text)

            localStorage.setItem('files', JSON.stringify([...files]));
        });

    },
    fileDelete: function (name){
        files.delete(name)
        localStorage.setItem('files', JSON.stringify([...files]));
    },
    getFile: function(name){
        const storedFilesArray = JSON.parse(localStorage.getItem('files') || '[]');
        const fileMap = new Map(storedFilesArray);

        const targetFileName = name;

        for (let [key, fileData] of fileMap.entries()) {
            if (key === targetFileName) {
                return String(fileData);

            }
        }

    },
    deleteAll: function(){
        localStorage.setItem('files', null)
    }
}
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);