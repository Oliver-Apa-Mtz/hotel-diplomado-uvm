<template>
    <v-footer dark padless>
        <v-card class="flex" flat tile>
            <v-card-title class="teal">
                ¡Conéctate con nosotros en las redes sociales!
                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — Hotel Pleasure
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }
    }
}
</script>
<style>
.Footer{
    width: 100vw;
    height: 80px;
    background-color: #FF5F7E;
    padding: 0 20px;
}
</style>