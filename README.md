<p align="center" style="margin-bottom: 50px">
  <img style="width: 500px"
  src="https://raw.githubusercontent.com/dzierzanowski/spiewnik-szant/master/images/front-obrazek-readme.png" />
</p>

<h1 style="text-align: center">Śpiewnik szant</h1>

Śpiewnik zawierający selekcjonowany wybór najlepszych szant, poezji śpiewanej
i innych utworów do rąbania na ognisku, wraz z precyzyjnie opracowanymi
akordami. W zestawie również aneks z opracowaniami nutowymi oraz transpozycjami
niektórych utworów.

## Wydanie

Release (LTS): TBD

Master (nightly): [spiewnik.pdf](https://github.com/dzierzanowski/spiewnik-szant/raw/master/spiewnik.pdf), 
[aneks.pdf](https://github.com/dzierzanowski/spiewnik-szant/raw/master/aneks.pdf)

Pozostałe wydania znajdziesz w sekcji "Releases".

## Kompilacja
Do skomplikowania śpiewnika zalecany jest [texlive](http://tug.org/texlive/) z
kompilatorem `xelatex` oraz wymagany jest zestaw paczek określony w nagłówku
pliku `spiewnik.tex`, m.in. [leadsheets](https://github.com/cgnieder/leadsheets).
Paczki powinny być już zawarte w pełnej instalacji `texlive`.

Aby wygenerować `spiewnik.pdf`, wykonaj polecenie:

```bash
# Dwukrotna kompilacja ze względu na spis treści
xelatex spiewnik.tex && xelatex spiewnik.tex
```
