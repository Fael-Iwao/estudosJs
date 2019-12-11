var button = window.document.querySelector('#sendName');
var container = document.querySelector('#container')
var list = window.document.createElement('ul');

button.onclick = function(){
    list.innerHTML = '<li> Carregando... </li>';
    getInformationToGitHub(name)
    container.appendChild(list)

}

var sendRequest = function(link, name){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', link + name + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Error in request. Status Code: ' + xhr.status)
                }
            }
        }
    })
}

function getInformationToGitHub(name){
    var name = window.document.getElementById('gitHubUser').value
    var link = 'https://api.github.com/users/'
    
    sendRequest(link, name)
    .then(function(response){
        var repos = response;
        list.innerHTML = '';
        for(repo of repos){
            var li = window.document.createElement('li');
            var text = document.createTextNode(repo.name)
            li.appendChild(text)
            list.appendChild(li)
        }
        container.appendChild(list)
    })
    .catch(function(error){
        error
    })
}

