# Tematica: JavaScript

# Avand urmatoarea functie function `bowdlerize(input, dictionary)` unde:
- un obiect `Duck` este construit pe baza unui nume de tip string sau String;
- un `Duck` poate sa inoate;
- un `RubberDuck` poate sa pluteasca;
- un `RubberDuck` nu poate sa inoate.

# Completati urmatoarele taskuri:
- `name` trebuie sa fie de tip `string` sau `String`. Daca este furnizat alt tip este aruncat `Error` cu mesajul`name must be string or String`;
- daca i se cere unui obiect Duck sa inoate va returna un string (ex. daca avem un Duck cu numele `Donald` atunci string-ul returnat este `Donald is swimming`);
- o rata de cauciuc este atat de tip `Duck` cat si `RubberDuck`;
- daca i se cere unui obiect RubberDuck sa pluteasca va returna un string (ex. daca avem un RubberDuck cu numele `Donald` atunci string-ul returnat este `Donald floats`);
- daca i se cere unui obiect RubberDuck sa inoate va returna un string (ex. daca avem un RubberDuck cu numele `Donald` atunci string-ul returnat este `Donald can't swim, only float`);

# Instructiuni

# Obiectiv : Modificati `app.js` in locul marcat pentru a satiface testele

# Pasi pentru a rula testele
1. Instalati dependentele ruland `npm i`
2. Testati aplicatia ruland `npm test`