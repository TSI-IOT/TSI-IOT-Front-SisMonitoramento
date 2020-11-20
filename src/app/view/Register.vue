<template>
    <v-container class="float-md-right">
        <v-card class="elevation-24 margin-img"
                max-width="500"
                height="500"
                raised>
            <v-toolbar flat>
                <v-col>
                    <v-row
                            align="center"
                            justify="center"
                            class="margin-form">

                        <v-img src="../assets/logo-login.png"
                               max-width="150"
                               title="sim.ca"
                        ></v-img>
                    </v-row>
                    <v-row
                            align="center"
                            justify="center"
                    >
                        <v-card-title>
                            <h2 class="text-size">FAÇA SEU CADASTRO</h2>
                        </v-card-title>
                    </v-row>
                </v-col>
            </v-toolbar>
            <v-card-text>
                <v-form class="margin-form">
                    <v-text-field label="Nome"
                                  name="nome"
                                  type="text"
                                  v-model="user.name"
                    />
                    <v-text-field label="Email"
                                  name="login"
                                  type="text"
                                  v-model="user.email"
                    />
                    <v-text-field id="password"
                                  label="Senha"
                                  name="password"
                                  type="password"
                                  v-model="user.password"
                                  v-on:keyup.enter="register"/>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="#20B2AA"
                       class="v-btn--block"
                       dark
                       v-on:click="register">REGISTRAR
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
    import User from "../../user/datamodel/User";
    import createUser from "../../user/services/createUser";

    export default {
        data() {
            return {
                user: new User()
            }
        },
        props: {
            source: String,
        },
        methods: {
            register() {
                createUser.createUser(this.user)
                    .then(() => {
                        this.$router.push("/login");
                    })
                    .catch(response => {
                        const errors = response.data.errors;
                        this.$store.commit('ERROR', errors);
                    })
            }
        }
    }
</script>
<style scoped>
    .margin-img {
        margin-top: 50px;
    }
    .margin-form {
        margin-top: 130px;
    }
    .text-size{

    }
</style>