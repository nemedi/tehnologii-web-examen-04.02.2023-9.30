# Tematica: REST

# Dată fiind aplicația `app` completați metoda `GET` la adresa `/ships`:
- Se pot utiliza parametrii de query `page` si `pageSize`.

- Dacă nu s-a specificat nici pagina și mărimea paginii, se vor returna toate navele;
- Dacă s-a specificat pagina, dar nu page size se va presupune că mărimea paginii este 5 și se va returna a n-a pagină de 5 nave;
- Dacă s-au specificat atât pagina cât și mărimea unei pagini, se va returna pagina specificată de mărimea specificată;
- Dacă s-a specificat o pagină invalidă sau o mărime de pagină invalidă, se vor returna toate navele;
- Dacă pagina specificată este dincolo de ultima navă, se va returna un array vid.

# Instructiuni

# Obiectiv : Modificati `app.js` in locul marcat pentru a satiface testele

# Pasi pentru a rula testele:
1. Instalați dependențele rulând `npm i`
2. Testați aplicația rulând `npm test`