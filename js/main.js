
const formControl = document.querySelector(".form-control");
const toast = document.querySelector(".section-inner .error-popup");
const creditList  = document.querySelector("#credit-list");

formControl.addEventListener("submit",(e)=>{
    e.preventDefault();
    deleteList();

    const productPrice = parseFloat(document.querySelector(".productprice").value);
    const percent = parseFloat(document.querySelector(".percent").value);
    const monthCount = parseFloat(document.querySelector(".monthcount").value);

    if(isNaN(productPrice) || isNaN(percent) || isNaN(monthCount)){
        toast.style.display = 'flex'
    }

    let total = productPrice + (productPrice * (monthCount*percent/100));
    let monthlyPay = total/monthCount;

    let currentDate = new Date(); 
    currentDate.getDate()

    for(let i = 0; i < monthCount; i++){
        const tr = document.createElement("tr");
        creditList.append(tr); 
        tr.innerHTML = `<td>${i + 1}</td> <td>${creditDate(currentDate)} </td> <td>${monthlyPay.toFixed(2)}</td> <td>${(total - (monthlyPay * (i+ 1))).toFixed(2)}</td>`;

        currentDate.setMonth(currentDate.getMonth() + 1)
    }
})

    //  JS code for toast (error message).
    const closedBnt = document.querySelector(".section-inner .error-popup .closed")
    closedBnt.addEventListener("click", ()=>{
    toast.style.display = 'none'
    });

    // function for list date

    function creditDate(date){
    let result = "";
    
    result = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
    result += ".";
    result += date.getMonth() >= 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    result += "."
    result += date.getFullYear();
    return result;
    }

    // function for list deleted

    function deleteList(){
    let listRow = document.querySelectorAll("#credit-list tr")
    for(let i = 0; i < listRow.length; i++){
        listRow[i].remove();
        }
    }
