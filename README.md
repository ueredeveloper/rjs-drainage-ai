# RJS Drainage - AI

- Organização das pastas

```
src/
├── assets/
│   ├── images/
│   └── styles/
├── components/
│   ├── common/
│   ├── features/
│   └── layout/
├── pages/
├── services/
└── utils/
```

Genie - AI - Requests:

- [ ] Using React and Material Ui create a box for the top of the page, two boxes side by side for the content, a box below and a footer
- [ ] Using React, Material Ui and JSDoc comments in portuguese, create a function LatLng returning Box, with Typography (label: "Coordenadas", margin:5) and a Paper (elevation 3, space-around), this Paper has, first, a textfield ("Latitude", variant standard), second (a textfield, "Longitude",  variant standard),  third, an icon FaSearch, react-icons/fa and fourth, an icon FaCopy
- [ ] Using React, Material Ui and JSDoc comments in portuguese, create a function WellType returning Paper (margin: 5,  elevation 3), h3 "Tipo do Poço", thats has two radio buttons (horizontally), "Manual / Tubular Raso", "Tubular Profundo" centralized
- [ ] Using React and React-ChartJs-2 create a function that return a Box with a Bar Chart with "Q Explotável", "Q Outorgada", "Q Disponível", "Q Usuário"
- [ ] Using React, Material Ui and JSDoc comments in portuguese, create a function TopBar returning AppBar with MenuIcon and Typography "SAD-DF"
- [ ] Using React and Material Ui create a function Grants returning a table, hozizontal scroll with grant data : { "Nome", CPF/CPNJ", "Processo", "Endereço",  [{jan: 0},
  {fev: 10},
  {mar: 15},
  {abr: 25},
  {mai: 30},
  {jun: 35},
  {jul: 40},
  {ago: 45},
  {set: 50},
  {out: 55},
  {nov: 60},
  {dez: 65}]}