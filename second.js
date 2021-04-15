// function which checks the string if it is pangram
const checkPanagram=(str)=>{
    // object to keep track of the letters
    let mp={};
    let len=str.length;
    
    // traversing the string to map the letters
    for(let i=0;i<len;i++)
    {   
        let rule=/[a-zA-Z]/
    
        if(rule.test(str[i]))
        {
            str[i].toLowerCase();
            mp[str[i]]=true;
        }
    }

    // array of the present letters
    let presentL=Object.keys(mp);
    
    if(presentL.length===26){
        console.log("Pangram sentence");
    }else{
        let absentL=[]
        // traversing from a to z
        for(let ch=97;ch<=122;ch=ch+1){
            let tar=String.fromCharCode(ch);
            if( !presentL.includes( tar )){
                absentL.push(tar);
            }
        }
        console.log(absentL);
    }

}

// input string
let str="abcdefghijklmnopqrstuvwx   yZ!";

// function which checks the string if it is pangram
checkPanagram(str);



