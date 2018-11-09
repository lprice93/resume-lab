let resume = {
    fullName: 'Lindsay Price',
    jobTitle: 'Art Director',
    description: 'I\'m an artist from Alabama and a graduate from the University of Montevallo where I acquired a degree in Graphic Design and a minor in Deaf Studies.',
    interests: "• Working out \n • Painting \n • Watching Movies \n • Hanging with friends \n",
    pastPositions: "• Legacy Gymnastics: Coach \n Teach correct gymnastics and cheer techniques to children ages 1-15 \n • Wilbron Inc: Graphic Design Intern \n Work under Art Director and with Public Relations team to develope client creatives utilizing creative briefs. \n • Wilbron Inc: Art Director \n Manage graphic design interns and incoming graphic design projects. Design collateral such as logos, invitations, website frames, flyers, e-blasts, social media posts, and more.",
    skills: [
        "• Adobe Creative Cloud",
        "• Painting",
        "• Sleeping",
        "• American Sign Language"]
};

console.log("Name:\n " + resume.fullName.toUpperCase()); //string concatenation. \ = escape charactrer \n = new line
console.log("Job Title: \n" + resume.jobTitle);
console.log("Description:\n" + resume.description);
console.log("Interests:\n" + resume.interests);
console.log("Past Positions:\n" + resume.pastPositions)
console.log("Skills:\n" + resume.skills[0]);
console.log(resume.skills[1]);
console.log(resume.skills[2]);
console.log(resume.skills[3]);

function beCoolSkills(isCool, skill) {
    if (isCool === true) {
        console.log('BAM ' + skill);
    } else {
        console.log(skill);
    }
}

beCoolSkills(false, "Adobe Creative Cloud");
beCoolSkills(false, "Painting");
beCoolSkills(true, "Sleeping");
beCoolSkills(true, "American Sign Language");

/* Your name
Your career/field
A short description of yourself
A list of your interests
A list of your past positions that includes company/place name, title, short description of what you did
A list of your skills */