let qTeams={
    'aaiec': 400,
    'aaiwc': 60,
    'qai': 200,
    'poc': 100,
    'gtm': 50,
    'hr': 10

};
//let sorted=Object.keys(qTeams).sort((a,b)=>qTeams[a]-qTeams[b])
let sorted=[];
sorted=Object.keys(qTeams).sort((a,b)=>qTeams[b]-qTeams[a])

console.log(sorted)