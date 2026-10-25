function checkUsername()
{
    let username=document.getElementById("usernameTextfield").value;
    if(username==="")
    {
        alert("请输入用户名！");
    }else
    {
        let xmlHttp=new XMLHttpRequest();
        function stateHandler()
        {
            let result=false;
            if(xmlHttp.readyState===4 && xmlHttp.status===200)
            {
                result=true;
                let nameArray=xmlHttp.responseText.split("|");
                for(let i=0;i<nameArray.length;++i)
                {
                    if(username===nameArray[i])
                    {
                        result=false;
                        break;
                    }
                }
                if(result===false)
                {
                    alert("该用户名已被占用！");
                }else
                {
                    alert("该用户名可以使用。");
                }
            }
        }
        xmlHttp.onreadystatechange=stateHandler;
        xmlHttp.open("GET","username.txt",true);
        xmlHttp.send(null);
    }
}

document.getElementById("checkButton").addEventListener("click",checkUsername);