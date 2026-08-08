document.addEventListener("DOMContentLoaded",()=>{

console.log("MeRee Veteran Benefits Navigator Version 2.0 Loaded");

});
function showBenefits() {

    const rating = document.getElementById("rating").value;
    const state = document.getElementById("state").value;

    if (rating === "") {
        alert("Please select your disability rating.");
        return;
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("title").innerHTML =
        rating + " Veteran Benefits";

    let va = [];
    let federal = [];
    let stateBenefits = [];

    switch (rating) {

        case "0%":
            va = [
                "Service-connected disability recognized",
                "VA Health Care (if eligible)",
                "VA Home Loan"
            ];
            break;

        case "10%":
            va = [
                "Monthly VA Compensation",
                "VA Health Care",
                "VA Home Loan"
            ];
            break;

        case "20%":
            va = [
                "Monthly VA Compensation",
                "VA Health Care",
                "VA Home Loan"
            ];
            break;

        case "30%":
            va = [
                "Monthly VA Compensation",
                "Additional compensation for eligible dependents",
                "VA Health Care",
                "VA Home Loan"
            ];
            break;

        case "40%":
            va = [
                "Monthly VA Compensation",
                "Dependent Compensation",
                "VA Health Care"
            ];
            break;

        case "50%":
            va = [
                "Priority Group 1 VA Health Care",
                "Travel Reimbursement",
                "Monthly Compensation",
                "Dependent Compensation"
            ];
            break;

        case "60%":
            va = [
                "Priority Group 1 Health Care",
                "Travel Pay",
                "Monthly Compensation"
            ];
            break;

        case "70%":
            va = [
                "Priority Group 1 Health Care",
                "Travel Pay",
                "Vocational Rehabilitation (if eligible)",
                "Possible Individual Unemployability",
                "Monthly Compensation"
            ];
            break;

        case "80%":
            va = [
                "Monthly Compensation",
                "Priority Group 1 Health Care",
                "Travel Pay"
            ];
            break;

        case "90%":
            va = [
                "Monthly Compensation",
                "Priority Group 1 Health Care",
                "Travel Pay"
            ];
            break;

        case "100%":

        case "Permanent & Total":
            va = [
                "Maximum Monthly Compensation",
                "CHAMPVA (eligible dependents)",
                "Chapter 35 DEA",
                "Dental Care",
                "Travel Pay",
                "Possible Property Tax Relief",
                "Caregiver Programs"
            ];
            break;

        case "TDIU":
            va = [
                "Paid at the 100% compensation rate",
                "Health Care",
                "Travel Pay",
                "Possible Chapter 35 benefits"
            ];
            break;
    }

    federal = [
        "Veterans Preference for Federal Employment",
        "National Parks Lifetime Pass",
        "USAJobs Veteran Hiring Programs",
        "Federal Training Opportunities"
    ];

    if (state === "South Carolina") {

        stateBenefits = [
            "Possible Property Tax Exemption",
            "Free Hunting & Fishing License (if eligible)",
            "State Park Discounts",
            "SC Veterans Homes",
            "Education Assistance Programs"
        ];

    } else {

        stateBenefits = [
            "State benefits vary. Check your State Department of Veterans Affairs."
        ];

    }

    document.getElementById("vaBenefits").innerHTML =
        va.map(item => "<li>" + item + "</li>").join("");

    document.getElementById("federalBenefits").innerHTML =
        federal.map(item => "<li>" + item + "</li>").join("");

    document.getElementById("stateBenefits").innerHTML =
        stateBenefits.map(item => "<li>" + item + "</li>").join("");

}
