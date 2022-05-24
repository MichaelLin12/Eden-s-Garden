// An enum is a group of named constant values. Enum stands for enumerated type.

//enum name {constant1, constant2, ...};

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun)); // true

console.log(isItSummer(6)); // true

// You should use an enum when you:

// Have a small set of fixed values that are closely related
// And these values are known at compile time.

// For example, you can use an enum for the approval status:

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}

// A TypeScript enum is a group of constant values.
// Under the hood, an enum a JavaScript object with named properties declared in the enum definition.
// Do use an enum when you have a small set of fixed values that are closely related and known at compile time.