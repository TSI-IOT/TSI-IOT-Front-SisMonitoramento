<template>
    <div id="app">
        <v-app>
            <!-- Barra superior e menu lateral (Menu) -->
            <app-menu></app-menu>

            <!-- Conteúdo (views) -->
            <v-content>
                <v-container fluid>
                    <alert-notification></alert-notification>
                    <v-card color="#F8F8FF" elevation="5">
                        <v-card-text>
                            <router-view></router-view>
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-content>

            <!-- Rodapé (Footer) -->
            <v-content>
                <app-footer></app-footer>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import AppMenu from "./components/Menu";
    import AppFooter from "./components/Footer";
    import AlertNotification from "./components/AlertNotification";

    export default {
        name: 'App',
        components: {
            AppMenu,
            AppFooter,
            AlertNotification
        },
        data() {
            return {}
        }
    };
</script>
