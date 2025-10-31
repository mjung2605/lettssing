# Lett's Sing - Der Frauenchor aus Lette

In diesem Projekt beschäftige ich mich mit der Internetpräsenz des noch recht jungen Frauenchors aus meinem Heimatdorf. Seit Ende 2024 arbeite ich eng mit dem Vorstand zusammen, um deren Wünsche und Vorstellungen in die Wirklichkeit umzusetzen.

## Tech Stack
Frameworks: Nuxt (inkl. Vue), Vuetify
Sprachen: TypeScript, JavaScript
Datenbank: Supabase
Hosting: Vercel

## Design und Aufbau
Die Strukturierung der Unterseiten nahm einen Haufen Zeit in Anspruch. Mit Inspiration von Webseiten befreundeter Chöre einigten wir uns auf eine Unterteilung in vier Seiten: 
- Homepage: Der erste Eindruck des über 60-Köpfigen Chors. Hier finden sich unter anderem Neuigkeiten über vergangene Konzerte, auf denen Lett's Sing aufgetreten ist.
- Über uns: Vorstellung des Vorstands und der Chorleitung.
- Förderung: Aufruf zur Unterstützung des Chors. Diese Seite soll zukünftig noch um die Bereitstellung einer automatischen Förderungsurkunde erweitert werden.
- Kontakt: Ein eigenständiges Kontaktformular wurde von mir implementiert, und sendet formatierte E-Mails an die Choradresse.

Das Design der Webseite gehörte ebenfalls zu meinen Aufgaben. Die Farben orientieren sich an dem extern erstellten Logo, welches oben links auf der Webseite zu finden ist. Feinschliffe (z.B. Schriftwahl) fanden in Absprache und auf Wunsch des Chorvorstands statt. Um die Korespondenz zu erleichtern und den Verantwortlichen ihre Ideen zu visualisieren, habe ich eine eigene /style-Page erstellt. Über State-Variablen gesteuert können hier schnell und unkompliziert verschiedene Kombinationen aus Farbe und Schrift ausprobiert werden. Dies vermied das ewige Hin und Her aus "Können wir das doch pink machen? Wie sieht es in petrol aus?", indem sich der Vorstand einen eigenen Überblick über ihre Designentscheidungen verschaffen konnte.

## Datenbank + CMS
Für die Persistenz wird die Postgres-Datenbank Supabase verwendet. Daten wie die Texte der Artikel oder die Bilder werden hier gespeichert und über API-Routen in server/api/ abgerufen. In Zukunft sollen die Mitglieder selbst Artikel und Bilder hochladen können. Dafür wird Supabase als eigenes, kleines CMS benutzt. Die Abstraktion erfolgt über ein Admin-Panel, welches die Bedienung erklärt und die Funktionen Artikel erstellen, Artikel löschen und Artikel bearbeiten bereitstellt. Dieses muss allerdings noch durch Supabase-Auth abgesichert werden und ist noch nicht nutzbereit.

Die Datenspeicherung erfolgt in einer Tabelle mit dem folgenden Schema:
tbd

Die Bilder werden in den Supabase Storage Buckets images und teasers gespeichert und ihre URLs in die Tabellenzeilen (ggf. als Array) eingefügt.

## Struktur des Repos
Die Code-Struktur orientiert sich an einem typischen Nuxt-Projekt mit Ordnern wie:
- pages/: Alles in diesem Ordner befindliche rendert Nuxt automatisch als eigene Seite. Dies umfasst die oben beschriebenen Seiten sowie Impressum und Datenschutz.
- components/: Hier finden sich die Einzelteile der Seiten. Auch wenn das Projekt nicht allzu groß ist und nicht jede Komponente oft wiederverwendet wird, wurde trotzdem auf diese Strukturierung gesetzt, um eine übersichtliche Code-Struktur zu gewährleisten. Besonders ermöglicht diese Struktur übersichtliche und möglichst kurze pages/-Files.
- plugins/: Hier wird das komponentenbasierte Framework Vuetify ins Projekt eingebunden.
- public/: Öffentlich verfügbare Daten wie statische Bilder (z.B. jene im Banner auf der Homepage), die Aufzählung der Vorstandsmitglieder oder das Favicon werden hier abgelegt, um im Code verwendbar zu sein.
- server/api/: API-Routen, die mit den in Supabase hinterlegten Artikel-Daten über CRUD-Methoden interagieren. Möglich sind das Lesen aller Artikel sowie das Lesen, Erstellen, Bearbeiten oder Löschen eines bestimmten Artikels.

Die README.md dient der Vorstellung des Projekts, der Webseite und allem, was an Planung und Konzeption dahinter steckt. 

In den Issues werden noch zu erledigende Aufgaben organisiert. Diese gliedern sich in die Kategorien TODO (neue Features/Seiten), FIX (bugfix + kleinere Änderungen) und CLEANUP (Ordnung oder Restrukturierung des Codes).
