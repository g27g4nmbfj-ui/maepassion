# MAE PASSION — website (maepassion.nl)

Statische website voor MAE PASSION, de VA-onderneming van Marinka. Gebouwd als plain HTML/CSS/JS zodat deployen naar Vercel zonder build-stap kan.

## Structuur
```
index.html         Home
diensten.html       Diensten
over-mij.html       Over mij
tarieven.html       Tarieven
contact.html        Contact
css/                Stylesheets
js/                 Scripts
images/             Afbeeldingen
api/                Vercel serverless functions (contactformulier)
```

## Hosting & deploy
- Repo: GitHub (account admin@latori.nl)
- Hosting: Vercel (account admin@latori.nl), custom domain maepassion.nl
- DNS: TransIP — A/CNAME wijzen na koppeling naar Vercel; MX/SPF/DKIM/DMARC (e-mail) blijven ongewijzigd
- E-mail: info@maepassion.nl (TransIP), gebruikt als ontvangstadres voor het contactformulier

## Status
Scaffold opgezet. Content en definitieve paginaopzet nog te verwerken.
