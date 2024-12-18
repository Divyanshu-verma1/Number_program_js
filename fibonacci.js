function fibonacci()
{
    n = Number(prompt("enter the index of fibonacci series:"));
    let f = 0;
    let s = 1;
    let ans = ""
    for(let i=1;i<=n;i++)
    {
        if(i==1)
            console.log(0)
        else if(i==2)
            console.log(1)
        else
        {
            let temp = f + s ;
            ans += temp + " "
            console.log(temp);
            f = s;
            s = temp;
        }
    }
    document.getElementById('output').innerText = ans ;
}

function fibonaccirange()
{
    let st = +(prompt("Enter the start value of range:"));

    let e = +(prompt("Enter the end value of range:"));
    let f = 0;
    let s = 1;
    let ans = "";
    for(let i=1;i<=e;i++)
    {
        if(i>=st && i!=e)
            ans += f + " ";
        if(i==e)
            ans += f;
        let temp = f + s;
        f = s;
        s = temp;
    }
    console.log(ans);
    document.getElementById('output').innerText = ans
}

function fibonaccialter()
{
    let n = +(prompt("Enter count to print alternative fibonacci number"));
    let f = 0;
    let s = 1;
    let ans = "";
    for(let i=1;i<2*n;i++)
    {
        if(i%2!=0 && i!=2*n)
            ans += f + " "; 
        if(i==2*n)
            ans += f;      
        let temp = f + s;
        f = s;
        s = temp;
    }
    console.log(ans);
    document.getElementById('output').innerText = ans
}

function checkfibonacci()
{
    let n = +(prompt("Enter the value"));
    let f = 0;
    let s = 1;
    while(s<=n)
    {
        let temp = f + s;
        f = s;
        s = temp;
        if(f==n || s==n)
        {
            console.log(true+`,given number ${n} is in fibonacci series`);
            document.getElementById('output').innerText = `True, ${n} is in fibonacci series` ;
            return;
        }
    }
    console.log(false);
    document.getElementById('output').innerText = `False, Not a fibonacci number` ;
}

function armstrong()
{
    let n = prompt("Enter the number");
    let dup = n;
    let arm = 0;
    let power = n.length;
    n = +(n);
    while(n)
    {
        rem = n%10;
        arm += rem**power;
        n = Math.trunc(n/10);
    }
    if(dup == arm){
        console.log(`True, ${dup} is Armstrong number`);
        document.getElementById('output').innerText = `True, ${dup} is Armstrong number`;
    }
    else{
        console.log(`False, ${dup} is not Armstrong number`);
        document.getElementById('output').innerText = `False, ${dup} is not Armstrong number`;
    }
}

function strong()
{
    let n = +(prompt("Enter the number"));
    let strong = 0;
    let dup = n;
    while(n)
    {
        let rem = n % 10;
        let fact = 1;
        for(let i=1;i<=rem;i++)
        {
            fact *= i;
        }
        strong += fact;
        n = Math.trunc(n/10);
    }
    if(dup == strong){
        console.log(`${dup} is Stronge number`);
        document.getElementById('output').innerText = `${dup} : strong number`;
    }
    else {
        console.log(`${dup} is not Strong number`);
        document.getElementById('output').innerText = `${dup} is not strong number`;

    }
}

function palindrome()
{
    let n = +(prompt("Enter the number"));
    let dup = n;
    let ans = 0;
    while(n)
    {
        let rem = n % 10;
        ans = ans * 10 + rem;
        n = Math.trunc(n/10);
    }
    if(dup == ans){
        console.log(`${dup} is palindrome number`);
        document.getElementById('output').innerText = `${dup} : palindrome number`;
    }
    else{
        console.log(`${dup} is not palindrome number`);
        document.getElementById('output').innerText = `${dup} is not palindrome number`;
    }
}

function LCM()
{
    let a = +(prompt("Enter the 1st number"));
    let b = +(prompt("Enter the 2nd number"));
    let lcm;
    if(a>b)
        lcm = a;
    else
        lcm = b;
    while(true)
    {
        if(((lcm % a) == 0) && ((lcm % b) == 0))
        {
            break;
        }
        lcm = lcm + 1;
    }
    console.log(`LCM of ${a} and ${b} is ${lcm}`);
    document.getElementById('output').innerText = `LCM of ${a} and ${b} is: ${lcm}`;
}

function GCD()
{
    let a = +(prompt("Enter the 1st value"));
    let b = +(prompt("Enter the 2nd value"));
    let gcd;
    if(a>b)
        gcd = b;
    else
        gcd = a;
    while(true)
    {
        if(a % gcd == 0 && b % gcd ==0)
            break;
        gcd--;
    }
    console.log(`GCD of ${a} and ${b} is: ${gcd}`);
    document.getElementById('output').innerText = `GCD of ${a} and ${b} is: ${gcd}`;
}

function factorial()
{
    let n = +(prompt("Enter the number"));
    let fact = 1;
    for(let i=n;i>0;i--)
    {
        fact *= i;
    }
    console.log(`Factorial of given number ${n} is ${fact}`);
    document.getElementById('output').innerText = `factorial is: ${fact}`
}

function happy()
{
    let n = +(prompt("Enter the number"));
    let dup = n;
    while(n > 9)
    {
        let temp = 0;
        while(n != 0)
        {
            let  rem = n % 10;
            temp += rem ** 2;
            n = Math.trunc(n/10);
        }
        n = temp;
    }
    if(n == 1 || n == 7)
    {
        console.log(`Given number ${dup}: Happy number`);
        document.getElementById('output').innerText = `true, ${dup} is Happy Number`;
    }
    else{
        console.log(`Given number ${dup}: Not Happy number`);
        document.getElementById('output').innerText = `${dup}, Not Happy number`;
    }
}

function emirp()
{
    let n = +(prompt("Enter the number"));
    let dup = n;
    let rev = 0;
    let count = 0;
    while(n)
    {
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.trunc(n/10);
    }
    if(dup != rev)
    {
        for(let den=1; den<(dup + 1); den++)
        {
            if(dup % den == 0)
            {
                count++;
            }
        }
        if(count == 2)
        {
            for(let den=1; den<(rev + 1); den++)
            {
                if(dup % den == 0)
                {
                    count++;
                }
            }
            if(count == 4)
            {
                console.log(`Given number ${dup}: Emirp number`);
                document.getElementById('output').innerText = `${dup}, Emirp number`;
                alert('Great')
            }
        }
        else{
            console.log(`Given number ${dup}: Not Emirp number`);
            document.getElementById('output').innerText = `${dup}, Not Emirp number`;
        }
    }
    else{
        console.log(`Given number ${dup}: Not Emirp number`);
        document.getElementById('output').innerText = `${dup}, Not Emirp number`;
    }
}