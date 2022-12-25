function BlockCard(){
    let Confirmation = prompt("Do you want to block all transactions on this card? ", "Y or N");
    if (Confirmation.toUpperCase() == "Y"){
        Status = "CARD BLOCKED";
        document.getElementById("CardNumber").innerText = Status;
    }
}

function UnblockCard(){
    let Confirmation = prompt("Do you want to unblock all transactions on this card? ", "Y or N");
    if (Confirmation.toUpperCase() == "Y"){
        Status = "ACTIVE";
        RandomCardNumber();
        TimeLeft = 8;
    }
}

function GenerateNewCardNumber(){
    let Confirmation = prompt("Do you want to generate a new card number for this card? ", "Y or N");
        if (Confirmation.toUpperCase() == "Y"){
        TimeLeft = 8;
        RandomCardNumber();
    }
}

function GenerateNewCVV(){
    let Confirmation = prompt("Do you want to generate a new CVV for this card? ", "Y or N");
    if (Confirmation.toUpperCase() == "Y"){
        CVV = RandomCVV();
        ExpCVV(Exp, CVV);
    }
}


function RandomCardNumber(){
    let CardNumber = "";
    for (let i = 0; i < 16; i++){
        let RandomDigit = Math.floor(Math.random() * (DIGITS.length));
        CardNumber += DIGITS[RandomDigit];
        if (i == 3 || i == 7 || i == 11 || i == 15){
            CardNumber += " ";
        }
    }
    document.getElementById("CardNumber").innerText = CardNumber;
    return CardNumber;
}

function RandomExpirationDate(){
    let ExpirationDate = "";
    let Month = Math.floor(Math.random() * (MONTHS.length));
    ExpirationDate += `${MONTHS[Month]}`;
    ExpirationDate += "/";
    let Year = Math.floor(Math.random() * (EXP_YEAR.length));
    ExpirationDate += `${EXP_YEAR[Year]}`;
    return ExpirationDate;
}

function RandomCVV(){
    let CVC = "";
    for (let i = 0; i < 3; i++){
        let RandomDigit = Math.floor(Math.random() * (DIGITS.length));
        CVC += DIGITS[RandomDigit];

    }
    return CVC;
}

function ExpCVV(P1_Exp, P2_CVV){
    document.getElementById("ExpirationDate_CVC").innerText = `${P1_Exp} ${P2_CVV}`;
}

var Status = "ACTIVE";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const MONTHS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const EXP_YEAR = ["25", "30", "35", "40", "45", "50"];

let Exp = RandomExpirationDate();
let CVV = RandomCVV();

let TimeLeft = 9;
let Interval = setInterval(function(){

    if (TimeLeft == 0) {
        TimeLeft = 10;
        if (Status == "ACTIVE"){
            RandomCardNumber();
        }
    } 

    document.getElementById("Timer").innerText = `${TimeLeft} seconds until a new card number is generated`;
    TimeLeft -= 1;
}, 1000);

do {
    RandomCardNumber();
    ExpCVV(Exp, CVV);
} while (True){
    setInterval();
}
