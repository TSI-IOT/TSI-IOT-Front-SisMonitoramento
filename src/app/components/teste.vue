<template>
    <v-row align="center">
        <v-row justify="space-around">
            <v-img src="./imagem-nav-bar.png"
                   max-width="500"
                   title="sim.ca"
                   position="right right"
            ></v-img>
        </v-row>
        <v-content>
            <v-col
                    cols="12"
                    md="12"
            >
                <v-card class="elevation-24"
                        max-width="400"
                        height="400"
                        raised
                >
                    <v-toolbar flat>
                        <v-row
                                align="center"
                                justify="center">
                            <v-img src="./logo-login.png"
                                   max-height="100"
                                   max-width="120"
                                   title="sim.ca"
                                   class="margin-img"
                            ></v-img>
                        </v-row>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    label="Email"
                                    name="login"
                                    type="text"
                                    class="margin-login"

                            />
                            <v-text-field
                                    id="password"
                                    label="Senha"
                                    name="password"
                                    type="password"
                                    class="margin-login"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="margin-login">
                        <v-btn
                                color="#20B2AA"
                                class="v-btn--block"
                                dark
                                href="/listGroup"
                        >Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>


        </v-content>
    </v-row>
</template>
<script>
    export default {
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
            lazy: false,
        }),

        methods: {
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>


<style scoped>
    .margin-img {
        margin-top: 70px;
    }

    .margin-login {
        margin: 20px;
    }
</style>