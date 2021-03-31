
                //HTML START

const all__element=`<div class="container">
<form>
    <div class="step step1 active">
        <div class="from_group">
            <label for="fname">Frist Name</label>
            <input type="text" name="fname" id="fname" autocomplete="none">
        </div>
        <div class="from_group">
            <label for="lname">Last Name</label>
            <input type="text" name="lname" id="lname" autocomplete="none">
        </div>
        <div class="from_group">
            <label for="phone">Phone Number</label>
            <input type="text" name="number" id="number" autocomplete="none">
        </div>
        <button type="button" id ="Next_Btn">Next</button>
    </div>  
   
    <div class="step step2 ">
        <div class="from_group">
            <label for="city">City</label>
            <input type="text" name="city" id="city" autocomplete="none">
        </div>
        <div class="from_group">
            <label for="post_coad">Post Coad</label>
            <input type="text" name="post_coad" id="post_coad" autocomplete="none">
        </div>
        <button type="button" id="prev_Button">Prev</button>
        <button type="button" id ="Next_Btn">Next</button>
    </div>
        
    <div class="step step3">
        <div class="from_group">
            <label for="email">Email Address</label>
            <input type="email" name="email" id="email" autocomplete="none" >
        </div>
        <div class="from_group">
            <label for="password">Password</label>
            <div class="eye"></div>
            <input type="password" name="password" id="password" autocomplete="none">
        </div>
        <button type="button" id="prev_Button">Prev</button>
        <button  type="submit" id="submit"> Submit</button>
    </div>
</form>
</div>`
document.body.insertAdjacentHTML("afterbegin",all__element);

//HTML END


//functionality

const step=Array.from(document.querySelectorAll(".step"));
const N_button=Array.from(document.querySelectorAll('#Next_Btn'));
const P_button=Array.from(document.querySelectorAll('#prev_Button'));
const form=document.querySelector("form");
const labes=Array.from(document.querySelectorAll("label"));

N_button.forEach((nextButton,ind)=>{
    nextButton.addEventListener("click",()=>{
        step[ind+1].classList.add("active")
        step[ind].classList.remove("active")
    })
})
P_button.forEach((previousButton,ind)=>{
    previousButton.addEventListener("click",()=>{
        const insd=ind+1
        step[insd-1].classList.add("active")
        step[insd].classList.remove("active")
    })
})


const password=document.getElementById("password");
const eye =document.querySelector('.eye');
eye.addEventListener("click",()=>{
    eye.classList.toggle("iconV")
    if(password.type=="password"){
        password.type="text";
        return false;
    }else{
        password.type="password";
    }
})





form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
let data=[];
    const EveryVals=Array.from(document.querySelectorAll("input"));
    EveryVals.forEach((val)=>{
        data.push({[`${val.name}`]:val.value});
})
let alertData="";
data.forEach((val)=>{
    for(x in val){
        alertData+=`${x}: ${val[x]},  `;
    }
})
alert(alertData);
console.log(data);
  let EmptyInputValue=Array.from(document.querySelectorAll("input"));
EmptyInputValue.forEach((vals)=>{
    vals.value="";
})
step[2].classList.remove("active")
step[0].classList.add("active")
})
