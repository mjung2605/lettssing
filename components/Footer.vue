<template>
    <v-footer color="white" class="d-flex flex-wrap align-center justify-center ga-4" style="min-height:100px;">

        <!-- Rechtliches -->
        <NavButton to="/impressum" label="Impressum"/>
        <NavButton to="/datenschutz" label="Datenschutz"/>

        <!-- Admin-Bereich -->
        <!--<NavButton to="/admin" label="Admin-Bereich"/>-->
        <div class="flex-1-0-100 text-center">&copy; 2025 Lett's Sing</div>
    </v-footer>
</template>

<!-- flex crashkurs: flex-1-0-100 = flexgrow 1 (wächst wenn platz da, somit kein umbruch), flexshrink 0 (schrumpft nicht), flex basis 100 (zeile 100% breit, d.h. text rutscht (wg flex wrap) in nächste zeile) -->
<!-- target=_blank = neuer tab -->
<!-- vbtn mit href rendert als a - a11y passt :) -->