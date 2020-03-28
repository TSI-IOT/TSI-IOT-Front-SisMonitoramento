<template>
    <v-row align="center">
        <v-row justify="space-around">
            <v-img src="../assets/imagem-nav-bar.png"
                   max-width="600"
                   title="sim.ca"></v-img>
        </v-row>
        <v-content>
            <v-card class="elevation-24 margin-login"
                    max-width="400"
                    height="400"
                    raised>
                <v-toolbar flat>
                    <v-row
                            align="center"
                            justify="center">
                        <v-img src="../assets/logo-login.png"
                               max-width="150"
                               title="sim.ca"
                               class="margin-img"
                        ></v-img>
                    </v-row>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Email"
                                      name="login"
                                      type="text"
                                      class="margin-login"/>
                        <v-text-field id="password"
                                      label="Senha"
                                      name="password"
                                      type="password"
                                      class="margin-login"/>
                    </v-form>
                </v-card-text>
                <v-card-actions class="margin-login">
                    <v-btn color="#20B2AA"
                           class="v-btn--block"
                           dark
                           href="/listGroup">Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-content>
    </v-row>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: {
            source: String,
        },
    }
</script>
<style scoped>
    .margin-img {
        margin-top: 50px;
    }

    .margin-login {
        margin-top: 25px;
    }
</style>