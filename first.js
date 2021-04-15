
// submission ------input format

const printInNumberLine=(arr)=>{
    const n=arr.length;

    const mp={}     // this object maps the numbers to their frequency which is used later

    if(n===0){
        console.log("No input is given!");
        return ;
    }
    
    let mxP=-10000000000;       // to figure out maixmum positive number
    let mnN=10000000000;        // to figure out minimmum negative number
    

    // this for loop fill up the mp object and find mxP,mnN
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            mp[arr[i]]=arr[i];
            if( mxP < arr[i] ){
                mxP=arr[i];
            }
        }else if(arr[i]<0){
            mp[arr[i]]=-arr[i];
            if(arr[i] <mnN ){
                mnN=arr[i];
            }
        }
    }
    
    // We will traverse from left end of the number line to the right end of the line.
    let leftEnd,rightEnd,up,down;
    
    // checking if there is no negative number
    if( Object.keys(mp).length === 0  || mnN===10000000000 ){
        leftEnd=0;
        down=0;
    }else{
        leftEnd=mnN;
        down=-mnN;
    }
    // checking if there is no positive number
    if( Object.keys(mp).length === 0 || mxP===-10000000000 ){
        rightEnd=0;
        up=0;
    } else{
        rightEnd=mxP;
        up=mxP;
    }
    
    // line is used to print every line of output
    line="";
    // loop for printing the positive * s
    for(let i=up;i>=1;i--){
        line="";
        for(let j=leftEnd;j<=rightEnd;j++){

            if(j===0){
                line+="  ";
                continue;
            }
            if(j<=0){
                line+="   ";
                continue;
            }
            // if the number is not present
            if(mp[j]===undefined){
                line+="  ";
                continue;
            }
            
            if(j>=i){
                line+="* ";
            }else{
                line+="  ";
            }
        }
        console.log(line)
    }
    
    line=``;
    // loop for printing number line
    for( let i=leftEnd;i<=rightEnd;i++){
        line+=  `${i} `;
    }
    console.log(line)
    
    line="";
    // loop for printing the negative stars
    for( let i=1;i<=down;i++){
        line="";
        for(let j=leftEnd;j<0;j++){
            if( mp[j]!==undefined && mp[j]>0 ){
                mp[j]=mp[j]-1;
                line+=" * ";
            }else{
                line+="   ";
            }
        }
        console.log(line);
    }
}

// input array
const arr=[-4,-5,-2,-7,-9,-1]

// function which prints the given pattern 
printInNumberLine(arr);