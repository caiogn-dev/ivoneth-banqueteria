const axios = require('axios');

// --- CONFIGURE AQUI ---
const SEU_TOKEN = "56o2v-9ydjx-qs2l4-ijbam-kty8k"; // Use o token que você está a testar
const API_URL = "https://app1.meeventos.com.br/ivonethbanqueteria/api/v1/clients";
// --------------------

const dadosDoCliente = {
  name: "Teste Direto com Node.js",
  type: "company",
  phone: "639988776655"
};

const headers = {
  'Authorization': `Bearer ${SEU_TOKEN}`,
  'Content-Type': 'application/json',
};

async function testarAPI() {
  console.log("A enviar requisição para:", API_URL);
  try {
    const response = await axios.post(API_URL, dadosDoCliente, { headers });
    console.log("\n✅ SUCESSO! A API respondeu com status 201 (Created).");
    console.log("Dados recebidos:", response.data);
    console.log("\nO seu token está a funcionar corretamente. O problema está em como o seu projeto Next.js está a ler as variáveis de ambiente.");
  } catch (error) {
    console.error("\n❌ FALHA! A API retornou um erro.");
    if (error.response) {
      console.error("Status do Erro:", error.response.status);
      console.error("Dados do Erro:", error.response.data);
      if (error.response.status === 401) {
        console.log("\nConclusão: O erro é 'Unauthorized'. O problema é o token. Verifique se copiou corretamente, se não expirou e se tem as permissões necessárias.");
      }
    } else {
      console.error("Erro na requisição:", error.message);
    }
  }
}

testarAPI();