function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask (
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

let arrowfunction = (question, yes, no) => {
    if (confirm(question)) return yes();
    else return no();
}

arrowfunction (
    "Do you like using arrow functions??",
    () => alert('Good answer'),
    () => alert('You better start liking them')
);