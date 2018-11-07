let resume = {
    fullName: 'Lindsay Price',
    jobTitle: 'Art Director',
    description: 'I\'m an artist from Alabama and a graduate from the University of Montevallo where I acquired a degree in Graphic Design and a minor in Deaf Studies.',
    interests: "Working out \n Painting \n Watching Movies \n Hanging with friends\n",
    pastPositions: "Legacy Gymnastics: Coach \n , Wilbron Inc: Graphic Design Intern \n , Wilbron Inc: Art Director" ,
    skills: [
        "Adobe Creative Cloud",
        "Painting",
        "Sleeping",
        "American Sign Language" ]
};

console.log("Name:\n " + resume.fullName.toUpperCase()); //string concatenation. \ = escape charactrer \n = new line
console.log(resume.jobTitle);
console.log(description);
console.log(resume.interests);
console.log(pastPositions)
console.log(resume.skills[0]);

function beCoolSkills(isCool, skill) {
    if (isCool === true) {
        console.log('BAM ' + skill);
    } else {
        console.log(skill);
    }
}

beCoolSkills(false, "Adobe Creative Cloud");
beCoolSkills(true, "Painting");

/* Your name
Your career/field
A short description of yourself
A list of your interests
A list of your past positions that includes company/place name, title, short description of what you did
A list of your skills */
