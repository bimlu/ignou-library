const find = /(code: ")(\w+-\d+)(", title: ")(.*)"/;

const replace = `$1$2$3$4",
    name: "$2",
    fullName: "$4",
    collegeCode: "IGNOU",
    programmeCode: "MCA_NEW",
    term: 1,`;
