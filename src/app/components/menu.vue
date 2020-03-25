<template>
    <v-app id="inspire">
        <v-app-bar
                color="#C0C0C0"
                dark
                height="125"
                app
        >
            <v-col cols="5">
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            </v-col>
            <v-col cols="2" center>
                <v-img src="./imagem-nav-bar.png"
                       max-width="150"
                       title="sim.ca"
                       position="right right"
                ></v-img>
            </v-col>
            <v-col cols="5">
            </v-col>
        </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                temporary
                app
                color="#20B2AA"
                width="200"
        >
            <v-list
                    nav
                    dense
            >
                <v-list-item-group
                        v-model="group"
                        active-class="deep-purple--text text--accent-4"
                >

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Minha Conta</v-list-item-title>
                    </v-list-item>

                    <v-list-item href="/listGroup">
                        <v-list-item-icon>
                            <v-icon>mdi-group</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Grupos</v-list-item-title>
                    </v-list-item>

                    <v-list-item href="/listDevice">
                        <v-list-item-icon>
                            <v-icon>mdi-null</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Dispositivos</v-list-item-title>
                    </v-list-item>

                    <v-list-item href="/login">
                        <v-list-item-icon>
                            <v-icon>mdi-login</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>


        <v-content>
            <v-container fluid>
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col cols="12">
                        <v-card color="#F8F8FF">
                            <v-card-text>
                                <router-view></router-view>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-footer
                :inset="true"
                app
                dark
                color="#20B2AA"
        >
            <span  class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>


    export default {
        components: {},
        data() {
            return {
                drawer: false,
                footer: {
                    inset: false,
                },

            }
        },
    }
</script>