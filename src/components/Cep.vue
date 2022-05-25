<template>
    <div class="addCep">
        <input placeholder="Insira o CEP" :value="cepInputed" @input="event => cepInputed = event.target.value">
        <button @click="addCepToList">Adicionar endereço</button>
    </div>
    <div>
        <ul>
            <li v-for="cep in cepList">
                CEP: {{ cep.slice(0, 5) + '-' + cep.slice(5) }}
            </li>
        </ul>
    </div>
    <div>
        <button @click="generateAddress">Gerar endereços</button>
    </div>
    <hr>
    <div>
        <ul v-if="cepFound">
            <li v-for="address in addresses">
                <div>
                    <p>{{ address.logradouro }}</p>
                    <p>{{ address.cep}}</p>
                    <p>{{ address.localidade + '-' + address.uf }}</p>
                    <div>icone de lixeira</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    name: 'Cep',
    data() {
        return {
            cepFound: false,
            addresses: [
                {
                    logradouro: '',
                    localidade: '',
                    uf: '',
                    cep: ''
                }
            ],
            cepList: [],
            cepInputed: ''
        }
    },
    methods: {
        addCepToList() {
            this.cepList.push(this.cepInputed)
        },
        generateAddress() {
            this.addresses.pop()
            this.cepList.map(async (cep) => {
                this.viacep(cep)
            })
        },
        async viacep(cepInput) {
            const response = await fetch(`http://viacep.com.br/ws/${cepInput}/json`)
            const data = await response.json();
            console.log(data)
            const { logradouro, localidade, uf, cep } = data
            this.addresses.push({ logradouro, localidade, uf, cep })
            // this.addresses.street = logradouro
            // this.addresses.city = localidade
            // this.addresses.state = uf
            // this.addresses.cep = cep
            this.cepFound = true
        }
    }
};
</script>

<style>
.addCep {
    display: inline;
}

li {
    display: list-item
}
</style>