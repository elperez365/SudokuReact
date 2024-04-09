# Full-Stack-Interview 🍕

Complimenti ✌️, se stai leggendo questo vuol dire che il team di Datapizza🍕 ti trova interressante!
Quello che dovrai fare non sarà altro che una piccola applicazione per gestire delle griglie di Sudoku 9x9.

Se sei andato in crisi perché non ti ricordi le regole del sudoku 🤯
stai tranquillo nemmeno noi le sappiamo 🤓

La figura che stiamo cercando ha competenze sia di Frontend che di Backend per questo motivo l'esercizio prevede entrambe.

Capiamo perfettamente che ti stiamo chiedendo tanto ma ti assicuriamo che per contraccambiare il tuo impegno cercheremo di revisionare nel dettaglio la tua soluzione 🫡.

## Cosa devi fare ✅

Sotto troverai le specifiche del progetto, sia per la parte backend che per quella frontend, il risultato della tua implementazione dovrebbe essere la possibilità di avviare in locale sia il frontend che il backend e di usare l'applicazione tramite frontend.

Ogni strumento di aiuto è ben accetto ma se non ti senti in grado di portare a termine questo progetto in autonomia ti chiediamo di comunicarcelo anticipatamente senza consegnarci un progetto fatto solo tramite GPT o Copilot di turno. La persona che stiamo cercando deve essere in grado di svolgere questi compiti nel quotidiano sapendo cosa sta facendo.

Una volta finiti i tuoi sviluppi fai un commit e push sul branch e segnala la cosa via email a **giusepperenna@datapizza.tech**

Adesso ti lasciamo alle specifiche, per qualsiasi dubbio, richiesta o necessità non esitare a contattarci direttamente sia su Linkedin che via email:

- **Giuseppe Renna**: giusepperenna@datapizza.tech
- **Federico Tarascio**: federico@datapizza.tech

# Backend 🧱

1. Python 🐍
2. Django

### Setup Backend

Entra nel workspace con `cd backend`

Prima di tutto hai bisogno di un virtual environment all'interno della directory del tech-folio eseguire il comando:
`python -m venv venv`

Adesso per attivarlo esegui:
`source venv/bin/activate`

Installa dentro il virtual enviroment i pacchetti che servono per il progetto:

`pip install -r requirements.txt`

Esegui le migration `python manage.py migrate`

Ora sei pronto/a a far runnare il server in locale con `python manage.py runserver`

## Esercizio Backend

Dovrai creare due endopoint:

- un endpoint 'sudoku/get_valid_sudoku_grids/' che restituisce un Json contenente le sudoku grids con soluzione valide ordinate per data di creazione decrescente.
- un endpoint 'sudoku/update_sudoku_grids/{pk}' che prende nel body un JSON contenente una sudoku_grid e la sostituisce alla sudoku_grid identificata da pk

## Correzione esercizio Backend

- Qualsiasi libreria che aggiungerai dovrà essere riportata in backend/requirements.txt, facendo `pip install -r requirements.txt` e `python manage.py runserver` dobbiamo essere in grado di eseguire il codice da qualsiasi macchina.
- Appena riceveremo il tuo codice eseguiremo dei tests (non presenti nella tua versione) per verificare che i due endpoint da te scritti funzionino correttamente.
- Ogni altro sviluppo non richiesto non sarà valutato né in positivo né in negativo, se se scrivi dei test per testare il viewset fallo in 'sudoku/tests.py' e pushali con il resto del codice.

## Nota Bene

- Assumi che i metodi/endpoint presenti nel progetto siano al 100% correttamente funzionanti

# Frontend 💎

1. React 18.2.0
2. React query
3. Axios
4. Tailwind css
5. Typescript
6. Vite

## Setup Frontend

Per prima cosa entra nel workspace con `cd frontend`

Per installare le dependencies puoi utilizzare il package manager che preferisci, noi consigliamo pnpm.
**Installare le dependencies** `pnpm install`

**Per far partire il progetto** `pnpm run dev`

Puoi iniziare modificando **src/App.tsx**

## Esercizio Frontend

**Requisiti minimi:**

- [x] Creare una griglia 9x9 che permetta l'inserimento di un Sudoku.
- [x] Creare un pulsante che chiami l'endpoint dedicato al salvataggio sul DB del Sudoku inserito.
- [x] Mostare se il Sudoku inserito è valido o meno.
- [x] Creare un pulsante **clear** che resetti la griglia allo stato di partenza

**Requisiti aggiuntivi (bonus):**

Siccome salviamo i Sudoku sul DB, vien da se che servano a qualcosa, quindi:

- [x] Mostrare in una lista tutti i Sudoku presenti nel DB.
- [x] Permettere all'utente di selezionare uno di quelli presenti nella lista e caricarlo nella griglia creata in precedenza.
- [x] Salvare le modifiche fatte alla griglia selezionata chiamando l'endpoint **'sudoku/update_sudoku_grids/{pk}'** creato in precedenza.

## Correzione esercizio Frontend

Verrai valutato personalmente sui seguenti criteri:

- Metodologia ed implementazione delle feature richieste.
- Leggibilità del codice.
- Utilizzo delle librerie provviste.

## Nota bene

- Le librerie già incluse sono più che sufficienti per lo svolgimento del test, nel caso però in cui tu senta la necessità di aggiungerne altre, la scelta deve essere motivata.
- Se le specifiche ti sembrano abbastanza vaghe è normale!! sentiti libero/a di prendere iniziativa. **Non una esiste una soluzione corretta, è solo necessaria l'implementazione delle feature descritte sopra.**
- Non è richiesto una UX o UI particolare, ma è ben apprezzata se deciderai di utilizzare il tuo tempo anche a questo scopo.
